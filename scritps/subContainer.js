const CLICK = document.querySelector("#subClickBtn");

let friendAdd = document.querySelector('[name="friendAdd"]');
let createChatting = document.querySelector('[name="createChatting"]');

let createSub = document.querySelector("#subContainer");

let friendAddStyle = (v) => {
  createSub.classList.add("sub-container");
};
let crateChattingStyle = () => {
  createSub.classList.add("sub-container");
};

let subContainer = () => {
  if (friendAdd) {
    friendAddStyle(this);
  }
  if (createChatting) {
    crateChattingStyle(this);
  }
};

CLICK.addEventListener("click", subContainer);
