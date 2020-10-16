let list = document.querySelectorAll('[name="list"]');
let name = document.querySelector('[name = "name"]');
let chattingBox = document.querySelector("#chattingBox");
let backBtn = document.querySelector("#backBtn");


goChatting = (e) => {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status === 201) {
        for (let i = 0; i < e.path.length; i++) {
          if (e.path[i].id > 0) {
            // window.location.replace(
            //   `/chatting_window.html?userId=${e.path[i].id}`
            // );
            if(chattingBox.classList[0] === 'none'){
              body.classList.add("js-overflow");
              chattingBox.classList.add('chatting__container');
              chattingBox.classList.remove('none');
              subContainer.classList.add('none');
              subContainer.classList.remove('sub-container--create');
              settingBox.classList.add('none');
              settingBox.classList.remove('sub-container--create');
            }
          }
        }
      }
    }
  };
  xhr.open("GET", "/");
  xhr.send("");
};

backFunction = () => {
    body.classList.remove("js-overflow");
    chattingBox.classList.remove('chatting__container');
    chattingBox.classList.add('none');
};


for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", goChatting);
}
backBtn.addEventListener("click", backFunction);