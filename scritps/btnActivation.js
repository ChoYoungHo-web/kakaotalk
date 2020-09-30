const RESULT = document.querySelector("#submitBtn");

let id = document.querySelector('[name="id"]');
let pwd = document.querySelector('[name="pwd"]');
let name = document.querySelector('[name="name"]');

checkAll = () => {
  if (!checkId(id.value)) {
    return false;
  } else if (!checkPwd(pwd.value)) {
    return false;
  }
  return true;
};

//공백 확인
checkExistData = (ckeck) => {
  if (ckeck === "") {
    alert("공백입니다.");
    return false;
  }
  return true;
};

//이메일 확인
checkId = (v) => {
  if (!checkExistData(v)) {
    return false;
  }
  let email = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
  if (!email.test(v)) {
    alert("이메일 형식이 올바르지 않습니다. ");
    v = "";
    id.focus();
    return false;
  }
  return true;
};

//패스워드 확인
checkPwd = (v) => {
  if (!checkExistData(v)) {
    return false;
  }
  let password = /^[a-zA-z0-9]{4,12}$/;
  if (v.length < 8 || v.legnth > 21 || !password.test(v)) {
    alert("영문과 숫자를 포함해 9~20자리 입력해야 합니다.");
    v = "";
    pwd.focus();
    return false;
  }
  return true;
};

examineHandle = (e) => {
  e.preventDefault();
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status === 201) {
        checkAll();
      }
      console.log("성공");
    }
  };
  xhr.open("GET", "http://127.0.0.1:5500/");
  xhr.send();
};

RESULT.addEventListener("click", examineHandle);
