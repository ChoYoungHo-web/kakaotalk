let VALUE = document.querySelector("#settingIcon");

let setting = document.querySelector('[name="setting"]');
let html = document.querySelector('html');

let settingBtn = document.querySelector('#settingBtn');
let settingBox = document.querySelector("#settingBox");
let settingContainer = document.querySelector("#settingContainer");
let settingBoxClose = document.querySelector("#settingBoxClose");

createSetting = (v) => {
  if (VALUE.classList[4] === "active") {
    VALUE.classList.remove("active");
    v.classList.remove("aside-sub__setting");
    v.classList.add("none");
    // subContainer.classList.add('none');
    chattingBox.classList.add('none');
    
  } else if(VALUE.classList[4] !== 'active') {
    VALUE.classList.add("active");
    v.classList.add("aside-sub__setting");
    v.classList.remove("none");
  }
};

createSettingContainer = () =>{
  html.classList.add("js-overflow");
  settingBox.classList.add("sub-container--create");
  settingContainer.classList.add("popup-container", "sub-friend");
  settingBox.classList.remove('none');
  chattingBox.classList.add('none');
  chattingBox.classList.remove('chatting__container');
  subContainer.classList.add('none');
  subContainer.classList.remove('sub-container--create');
}

settingBoxCloseHandle = () =>{
    html.classList.remove("js-overflow");
    settingBox.classList.remove("sub-container--create");
    settingContainer.classList.remove("popup-container", "sub-friend");
    settingBox.classList.add('none');
    settingBox.classList.remove('sub-container--create');
}

infoFunction = () => {
  if(setting){
    createSetting(setting);
  }

};

VALUE.addEventListener("click", infoFunction);
settingBtn.addEventListener('click',createSettingContainer);
settingBoxClose.addEventListener('click',settingBoxCloseHandle);