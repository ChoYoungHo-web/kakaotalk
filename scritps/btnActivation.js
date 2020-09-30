const RESULT = document.querySelector("#submitBtn");
const URL = document.location.pathname;

let id = document.querySelector('[name="id"]');
let pwd = document.querySelector('[name="pwd"]');
let user = document.querySelector('[name="name"]');
let birthday = document.querySelector('[name="birthday"]');

//로그인 로직
loginCheck = () => {
  if (!checkId(id.value)) {
    return false;
  } else if (!checkPwd(pwd.value)) {
    return false;
  }
  return true;
};

//계정 찾기 로직
findIdCheck = () => {
  if (!checkName(user.value)) {
    return false;
  } else if (!checkBirthday(birthday.value)) {
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
    alert("이메일 형식이 올바르지 않습니다.");
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
  let password = /^[a-zA-Z0-9]{9,}$/;
  let check_num = v.search(/[0-9]/g);
  let check_eng = v.search(/[a-z]/gi);
  if (!password.test(v)) {
    alert("영문과 숫자를 모두 포함해 9자리 이상 입력해야 합니다.");
    pwd.focus();
    return false;
  } else if (check_num < 0 || check_eng < 0) {
    alert("영문과 숫자를 모두 포함해야 합니다.");
    return false;
  }
  return true;
};

//이름 확인
checkName = (v) => {
  if (!checkExistData(v)) {
    return false;
  }
  if (v.length < 3) {
    alert("최소 3자리 이상 입력해야 합니다.");
    return false;
  }
  return true;
};

//생년월일 확인
checkBirthday = (v) => {
  if (!checkExistData(v)) {
    return false;
  }
  let check_num = /^[0-9]{8,8}$/;
  if (!check_num.test(v)) {
    alert("8자리 숫자만 입력할 수 있습니다.");
  }
  return true;
};

//페이지별 함수 구현
pageSelect = (e) => {
  e.preventDefault();
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status === 201) {
        if (URL.search("login") === 1) {
          loginCheck();
        }
        if (URL.search("find") === 1) {
          findIdCheck();
        }
      }
    }
  };
  xhr.open("GET", "http://127.0.0.1:5500/");
  xhr.send();
};

RESULT.addEventListener("click", pageSelect);