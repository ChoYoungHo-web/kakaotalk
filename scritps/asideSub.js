const VALUE = document.querySelector("#settingIcon");

let setting = document.querySelector('[name="setting"]');

createSetting = (v) => {
  if (VALUE.classList[4] === "active") {
    VALUE.classList.remove("active");
    v.classList.remove("aside-sub__setting");
    v.classList.add("none");
  } else {
    VALUE.classList.add("active");
    v.classList.add("aside-sub__setting");
    v.classList.remove("none");
  }
};

infoFunction = () => {
  if (setting) {
    createSetting(setting);
  }
};

VALUE.addEventListener("click", infoFunction);
