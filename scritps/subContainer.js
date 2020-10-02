const CLICK = document.querySelector("#subClickBtn");

let friendAdd = document.querySelector('[name="friendAdd"]');
let createChatting = document.querySelector('[name="createChatting"]');

let createSub = document.querySelector("#subContainer");

let friendAddStyle = (v) => {
  if (v.classList[4] === "active") {
    v.classList.remove("active");
    createSub.classList.remove("sub-container--create", "sub-friend");
  } else {
    v.classList.add("active");
    createSub.classList.add("sub-container--create", "sub-friend");
  }
};
let crateChattingStyle = (v) => {
  if (v.classList[4] === "active") {
    v.classList.remove("active");
    createSub.classList.remove("sub-container--create", "sub-chatting");
  } else {
    v.classList.add("active");
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
