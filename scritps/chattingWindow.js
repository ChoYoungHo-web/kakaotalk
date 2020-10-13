let backBtn = document.querySelector("#backBtn");

backFunction = (e) => {
  console.log(e.screenX, e.screenY, e.clientX, e.clientY);
  if (e.clientX < 35) {
    body.classList.remove("js-overflow");
    chattingBox.classList.remove('chatting__container');
    chattingBox.classList.add('none');
  }
};

backBtn.addEventListener("click", backFunction);
