const RESULT = document.querySelector("#submitBtn");
const URL = document.location.pathname;

let id = document.querySelector('[name="id"]');
let pwd = document.querySelector('[name="pwd"]');
let pwdCheck = document.querySelector('[name="pwdCheck"]');
let user = document.querySelector('[name="name"]');
let birthday = document.querySelector('[name="birthday"]');
let changePwd = document.querySelector('[name="changePwd"]');
let changePwdCheck = document.querySelector('[name="changePwdCheck"]');

let errId = document.querySelector('#errId');
let errPwd = document.querySelector('#errPwd');
let errUser = document.querySelector('#errUser');
let errBirthday = document.querySelector('#errBirthday');
let errChangePwd = document.querySelector('#errChangePwd');
let errChangePwdCheck = document.querySelector('#errChangePwdCheck');


//로그인 로직
loginCheck = () => {
  if (!checkId(id.value)) {
    return false;
  } else if (!checkPwd(pwd.value)) {
    return false;
  }
  window.location.replace(`/kakaotalk/friend.html`);
  return true;
};

//계정 찾기 로직
findIdCheck = () => {
  if (!checkName(user.value)) {
    return false;
  } else if (!checkBirthday(birthday.value)) {
    return false;
  }
  window.location.replace(`/kakaotalk/index.html`);
  return true;
};

//비밀번호 재설정 로직
resetPwdCheck = () => {
  if (!checkName(user.value)) {
    return false;
  } else if (!checkId(id.value)) {
    return false;
  } else if (!checkBirthday(birthday.value)) {
    return false;
  } else if (!checkPwd(pwd.value, pwd.name)) {
    return false;
  }else if (!checkPwd(changePwd.value, changePwd.name)) {
    return false;
  }
  // else if (!checkSamePwd(changePwd.value, changePwdCheck.value)) {
  //   return false;
  // }
  window.location.replace(`/kakaotalk/index.html`);
  return true;
};

//회원가입 로직
singUpCheck = () => {
  if (!checkName(user.value)) {
    return false;
  }
  if (!checkId(id.value)) {
    return false;
  }
  if (!checkPwd(pwd.value, pwd.name)) {
    return false;
  }
  // if (!checkSamePwd(pwd.value, pwdCheck.value)) {
  //   return false;
  // }
  if (!checkBirthday(birthday.value)) {
    return false;
  }
  window.location.replace(`/kakaotalk/index.html`);
  return true;
};

//잠금모드 로직
lockModeCheck = () => {
  if (!checkExistData(pwd.value)) {
    return false;
  }
  if (!checkPwd(pwd.value, pwd.name)) {
    return false;
  }
  window.location.replace(`/kakaotalk/friend.html`);
  return true;
};

//공백 확인
checkExistData = (ckeck) => {
  if (ckeck === "") {
    return false;
  }
  return true;
};

//이메일 확인
checkId = (v) => {
  if (!checkExistData(v)) {
    errId.classList.add('hidden-info');
    errId.innerText = '이메일 주소를 입력해주세요.';
    id.focus();
    return false;
  }
  let email = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

  if (!email.test(v)) {
    errId.classList.add('hidden-info');
    errId.innerText = '이메일 형식이 올바르지 않습니다.';
    id.focus();
    return false;
  }
  errId.classList.remove('hidden-info');
  errId.innerText = '';
  return true;
};

//패스워드 확인
checkPwd = (v, name) => {
  console.log(name);
  if (!checkExistData(v)) {
    errPwd.classList.add('hidden-info');
    errPwd.innerText = '비밀번호를 입력해주세요.';
    pwd.focus();
    return false;
  }
  let password = /^[a-zA-Z0-9]{9,}$/;
  let check_num = v.search(/[0-9]/g);
  let check_eng = v.search(/[a-z]/gi);
  if (!password.test(v)) {
    errPwd.classList.add('hidden-info');
    errPwd.innerText = '영문과 숫자를 모두 포함해 9자리 이상 입력해야 합니다.';
    pwd.focus();
    return false;
  } else if (check_num < 0 || check_eng < 0) {
    errPwd.classList.add('hidden-info');
    errPwd.innerText = '영문과 숫자를 모두 포함해야 합니다.';
    pwd.focus();
    return false;
  }
  errPwd.classList.remove('hidden-info');
  errPwd.innerText = '';
  return true;
};

//패스워드 같은지 확인
// checkSamePwd = (v, check) => {
//   if (!checkExistData(v)) {
//     errChangePwd.classList.add('hidden-info');
//     errChangePwd.innerText = '비밀번호를 입력해주세요.';
//     changePwd.focus();
//     return false;
//   }
//   if (!checkExistData(check)) {
//     errChangePwdCheck.classList.add('hidden-info');
//     errChangePwdCheck.innerText = '비밀번호를 입력해주세요.';
//     changePwdCheck.focus();
//     return false;
//   }
//   if (!(v === check)) {
//     errChangePwdCheck.classList.add('hidden-info');
//     errChangePwdCheck.innerText = '비밀번호가 같지 않습니다.';
//     changePwdCheck.focus();
//     return false;
//   }
//   errChangePwd.classList.remove('hidden-info');
//   errChangePwd.innerText = '';
//   errChangePwdCheck.classList.remove('hidden-info');
//   errChangePwdCheck.innerText = '';
//   return true;
// };

//이름 확인
checkName = (v) => {
  if (!checkExistData(v)) {
    errUser.classList.add('hidden-info');
    errUser.innerText = '이름을 입력해주세요.';
    user.focus();
    return false;
  }
  if (v.length < 3) {
    errUser.classList.add('hidden-info');
    errUser.innerText = '최소 3자리 이상 입력해야 합니다.';
    user.focus();
    return false;
  }
  errUser.classList.remove('hidden-info');
  errUser.innerText = '';
  return true;
};

//생년월일 확인
checkBirthday = (v) => {
  if (!checkExistData(v)) {
    errBirthday.classList.add('hidden-info');
    errBirthday.innerText = '생년월일을 입력해주세요.';
    birthday.focus();
    return false;
  }
  let check_num = /^[0-9]{8,8}$/;
  if (!check_num.test(v)) {
    errBirthday.classList.add('hidden-info');
    errBirthday.innerText = '8자리 숫자만 입력할 수 있습니다.';
    birthday.focus();
    return false;
  }
  errBirthday.classList.remove('hidden-info');
  errBirthday.innerText = '';
  return true;
};

//페이지별 함수 구현
pageSelect = (e) => {
  e.preventDefault();
    if(URL.search("/") > 0){
      loginCheck();
    }
    if (URL.search("index") > 0) {
      loginCheck();
    }
    if (URL.search("find") > 0) {
      findIdCheck();
    }
    if (URL.search("reset") > 0) {
      resetPwdCheck();
    }
    if (URL.search("sign") > 0) {
      singUpCheck();
    }
    if (URL.search("lock") > 0) {
      lockModeCheck();
    }
};

RESULT.addEventListener("click", pageSelect);
