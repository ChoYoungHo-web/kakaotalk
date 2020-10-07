const CLICK = document.querySelector("#subClickBtn");

let body = document.querySelector("body");
let main = document.querySelector("main");

let friendAdd = document.querySelector('[name="friendAdd"]');
let createChatting = document.querySelector('[name="createChatting"]');

let createSub = document.querySelector("#subContainer");
let popup = document.querySelector("#popup");

popupCloseFunction = () => {
  popup.classList.remove("sub-friend");
  main.classList.remove("main__sub--over-flow");
  createSub.classList.add("none");
  createSub.classList.remove("sub-container--create");
};

let friendAddStyle = () => {
  let popupClose = document.querySelector("#popupClose");
  popup.classList.add("popup-container", "sub-friend");
  main.classList.add("main__sub--over-flow");
  createSub.classList.remove("none");
  createSub.classList.add("sub-container--create");
  popupClose.addEventListener("click", popupCloseFunction);
};

CLICK.addEventListener("click", friendAddStyle);
