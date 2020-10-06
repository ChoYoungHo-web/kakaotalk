let list = document.querySelectorAll('[name="list"]');
let name = document.querySelector('[name = "name"]');

goChatting = (e) => {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status === 201) {
        for (let i = 0; i < e.path.length; i++) {
          if (e.path[i].id > 0) {
            console.log(e.path[i].id);
            window.location.replace(
              `/chatting_window.html?userId=${e.path[i].id}`
            );
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
