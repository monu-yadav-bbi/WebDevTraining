"use strict";

let country1 = document.getElementById("country1");
let country2 = document.getElementById("country2");
let key = "b3442cb4a114abb38f5fa9dd";
let exchange = document.getElementById("exchange");
let info = document.getElementById("info");
let amount = document.getElementById("amount");

// Initialize an array to store the initial 10 records
let initialRecords = [];
// Function to fetch and store country data in sessionStorage
async function fetchCountry() {
  try {
    let countryData = sessionStorage.getItem("countryData");
    if (countryData) {
      // If data is present in sessionStorage, use it
      countryData = JSON.parse(countryData);
      populateCountrySelects(countryData);
    } else {
      // Fetch data from the server if not present in sessionStorage
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,currencies"
      );
      const data = await response.json();
      sessionStorage.setItem("countryData", JSON.stringify(data));
      populateCountrySelects(data);
    }
  } catch (error) {
    console.error("Error fetching country data:", error);
  }
}
// Function to populate country select elements
function populateCountrySelects(data) {
  let html = "";
  data.forEach((element, index) => {
    html += `<option value="${Object.keys(element.currencies)[0]}">${
      element.name.common
    }-${Object.keys(element.currencies)[0] || "NA"}</option>`;

    // Store the first 10 records in the initialRecords array
    if (index < 10) {
      initialRecords.push({
        country: Object.keys(element.currencies)[0],
        exchangeRate: 0, // Initialize with a default value
      });
      // Check if this is the 11th record, and if so, clear previous records
      if (initialRecords.length >= 10) {
        clearPreviousRecords();
      }
    }
  });
  country1.innerHTML = html;
  country2.innerHTML = html;
}
// Function to fetch exchange rate and store in sessionStorage
async function exchangeRate() {
  try {
    const c1 = country1.value;
    const c2 = country2.value;
    const cacheKey = `${c1}-${c2}`;
    let exchangeData = sessionStorage.getItem(cacheKey);
    if (exchangeData) {
      // If data is present in sessionStorage, use it
      const data = JSON.parse(exchangeData);
      updateExchangeInfo(data);
    } else {
      // Fetch data from the server if not present in sessionStorage
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/9b780e7e6281faafac737d70/latest/${c1}`
      );
      const data = await response.json();
      sessionStorage.setItem(cacheKey, JSON.stringify(data));
      updateExchangeInfo(data);
    }
  } catch (error) {
    console.error("Error while fetching exchange rate:", error);
  }
}
// Function to clear previous records in sessionStorage
function clearPreviousRecords(cacheKey) {
  for (let i = 0; i < initialRecords.length; i++) {
    sessionStorage.removeItem(cacheKey);
    // const cacheKey = `${initialRecords[i].country}-${country2.value}`;
    // sessionStorage.removeItem(cacheKey);
  }
  // Clear the initialRecords array
  initialRecords = [];
}
// Function to update exchange information
function updateExchangeInfo(data) {
  const c2 = country2.value;
  const rate = data.conversion_rates[c2];
  const total = rate * Number(amount.value);
  info.innerText = `${amount.value} ${country1.value} = ${total} ${c2}`;
}
// Add an event listener to the exchange button
exchange.addEventListener("click", exchangeRate);
fetchCountry();
// initialRecords.forEach((record) => {
//   // Fetch initial exchange rate data for the first 10 records
//   exchangeRate(record.country);
// });
