const resizer = document.querySelector(".resizer");
const sidebar = document.querySelector(".sidebar");
const movableGrid = document.querySelector(".grid-container");

function initResizer(resizer, sidebar, movableGrid) {
  // track current mouse position in x const
  let x, width;

  function mousedownHandler(e) {
    x = e.clientX;
    console.log(x);

    const sidebarWidth = window.getComputedStyle(sidebar).width; //sidebar Width
    width = parseInt(sidebarWidth, 10); //converting it into integer with base 10.
    console.log(width); //sidebar width in integer

    document.addEventListener("mousemove", mousemoveHandler);
    document.addEventListener("mouseup", rs_mouseupHandler);
  }

  function mousemoveHandler(e) {
    const dx = e.clientX - x;
    // console.log(dx);

    const completeWidth = width + dx; // complete width

    if (completeWidth < 500 && completeWidth > 80) {
      sidebar.style.width = `${completeWidth}px`;

      movableGrid.style.marginLeft = `${completeWidth + 40}px`;
    }
  }

  function rs_mouseupHandler() {
    // remove event mousemove && mouseup
    document.removeEventListener("mouseup", rs_mouseupHandler);
    document.removeEventListener("mousemove", mousemoveHandler);
  }

  resizer.addEventListener("mousedown", mousedownHandler);
}

initResizer(resizer, sidebar, movableGrid);
