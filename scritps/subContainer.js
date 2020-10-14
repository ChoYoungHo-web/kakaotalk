const CLICK = document.querySelector("#subClickBtn");

let body = document.querySelector("body");
let main = document.querySelector("main");

let friendAdd = document.querySelector('[name="friendAdd"]');
let createChatting = document.querySelector('[name="createChatting"]');

let createSub = document.querySelector("#subContainer");
let popup = document.querySelector("#popup");

popupCloseFunction = () => {
  popup.classList.remove("sub-friend");
  body.classList.remove("js-overflow");
  createSub.classList.add("none");
  createSub.classList.remove("sub-container--create");
};

let friendAddStyle = () => {
  let popupClose = document.querySelector("#popupClose");
  popup.classList.add("popup-container", "sub-friend");
  body.classList.add("js-overflow");
  createSub.classList.remove("none");
  createSub.classList.add("sub-container--create");
  chattingBox.classList.add('none');
  chattingBox.classList.remove('chatting__container');
  settingBox.classList.add('none');
  settingBox.classList.remove('sub-container--create');
  popupClose.addEventListener("click", popupCloseFunction);
};

CLICK.addEventListener("click", friendAddStyle);
