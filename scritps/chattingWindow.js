let backBtn = document.querySelector("#backBtn");

backFunction = (e) => {
  console.log(e.screenX, e.screenY, e.clientX, e.clientY);
  if (e.clientX < 35) {
    window.history.back();
  }
};

backBtn.addEventListener("click", backFunction);
