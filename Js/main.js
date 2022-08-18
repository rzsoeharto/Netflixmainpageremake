const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

//tab-selector
function selectItem(e) {
  removeBorder();
  removeShow();
  //add border to active tab
  this.classList.add("tab-border");
  //Grab content item from the DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}
//listens for tab click
tabItems.forEach((item) => item.addEventListener("click", selectItem));
