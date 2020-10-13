let list = document.querySelectorAll('[name="list"]');
let name = document.querySelector('[name = "name"]');

let chattingBox = document.querySelector("#chattingBox");


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
            }
          }
        }
      }
    }
  };
  xhr.open("GET", "/");
  xhr.send("");
};

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("dblclick", goChatting);
}
