const CLICK = document.querySelector("#subClickBtn");

let body = document.querySelector("body");
let main = document.querySelector("main");
let friendAdd = document.querySelector('[name="friendAdd"]');
let createChatting = document.querySelector('[name="createChatting"]');

let createSub = document.querySelector("#subContainer");

let friendAddStyle = (v) => {
  if (v.classList[4] === "active") {
    body.classList.remove("body__sub--background-color");
    main.classList.remove("main__sub--over-flow");
    v.classList.remove("active");
    createSub.classList.add("none");
    createSub.classList.remove("sub-container--create", "sub-friend");
  } else {
    body.classList.add("body__sub--background-color");
    main.classList.add("main__sub--over-flow");
    v.classList.add("active");
    createSub.classList.remove("none");
    createSub.classList.add("sub-container--create", "sub-friend");
  }
};
let crateChattingStyle = (v) => {
  if (v.classList[4] === "active") {
    v.classList.remove("active");
    createSub.classList.add("none");
    createSub.classList.remove("sub-container--create", "sub-chatting");
  } else {
    v.classList.add("active");
    createSub.classList.remove("none");
    createSub.classList.add("sub-container--create", "sub-chatting");
  }
};

let subContainer = () => {
  if (friendAdd) {
    friendAddStyle(friendAdd);
  }
  if (createChatting) {
    crateChattingStyle(createChatting);
  }
};

CLICK.addEventListener("click", subContainer);
