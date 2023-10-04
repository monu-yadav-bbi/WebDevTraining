// const sidebar = document.getElementById(".sidebar");
// const

// sidebar.addEventListener("mousedown", () => {
//   sidebar.style.overflow = "auto";
// });
// sidebar.addEventListener("mouseleave", () => {
//   sidebar.style.overflow = "hidden";
// });
var m_pos;
function resize(e) {
  var parent = resize_el.parentNode;
  var dx = m_pos - e.x;
  m_pos = e.x;
  parent.style.width = parseInt(getComputedStyle(parent, "").width) + dx + "px";
}
var resize_el = document.getElementById("sidebar");
resize_el.addEventListener(
  "mousedown",
  function (e) {
    m_pos = e.x;
    document.addEventListener("mousemove", sidebar, false);
  },
  false
);
document.addEventListener(
  "mouseup",
  function () {
    document.removeEventListener("mousemove", sidebar, false);
  },
  false
);
