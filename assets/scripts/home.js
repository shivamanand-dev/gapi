const showPassword = document.getElementById("showPassword");

const loginPassword = document.querySelector(".loginPassword");
const logInButton = document.querySelector(".logInButton");
const loginEmail = document.querySelector(".loginEmail");

const switchLoginButton = document.getElementById("switchLoginButton");
const switchRegisterButton = document.getElementById("switchRegisterButton");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const step1 = document.querySelector(".step1");
const step2 = document.querySelector(".step2");
const step3 = document.querySelector(".step3");
const step4 = document.querySelector(".step4");

const fname = document.querySelector(".fname");
const lname = document.querySelector(".lname");
const phoneNo = document.querySelector(".phoneNo");
const signupEmail = document.querySelector(".signupEmail");
const address = document.querySelector(".address");
const signupPassword = document.querySelector(".signupPassword");
const enterCaptcha = document.querySelector(".enterCaptcha");
const signUpButton = document.querySelector(".signUpButton");

// Show Passwords
showPassword.addEventListener("click", () => {
  loginPassword.type === "password"
    ? (loginPassword.type = "text")
    : (loginPassword.type = "password");
});

// Switch Buttons
switchLoginButton.onclick = function () {
  document.querySelector(".flipper").classList.toggle("flip");
};

switchRegisterButton.onclick = function () {
  document.querySelector(".flipper").classList.toggle("flip");
};

// Button Disable - Login Form
loginEmail.addEventListener("input", () => {
  if (loginEmail.value === "" || loginPassword.value === "") {
    return (logInButton.disabled = true);
  } else {
    return (logInButton.disabled = false);
  }
});
loginPassword.addEventListener("input", () => {
  if (loginEmail.value === "" || loginPassword.value === "") {
    return (logInButton.disabled = true);
  } else {
    return (logInButton.disabled = false);
  }
});

// State Count Signup Form
let navFormState = 0;
const calPrevNavState = () => {
  if (navFormState === 0) {
    prevBtn.innerHTML = "<p></p>";
  } else {
    prevBtn.innerHTML =
      "<p class='mb-0' style='user-select: none;'><- Prev</p>";
  }
};
const calNextNavState = () => {
  if (navFormState >= 3) {
    nextBtn.innerHTML = "<p></p>";
  } else {
    nextBtn.innerHTML =
      "<p class='mb-0' style='user-select: none;'>Next -></p>";
  }
};

const renderSignUpSectionForm = (step) => {
  switch (step) {
    case 0:
      step1.classList.remove("d-none");
      step2.classList.add("d-none");
      step3.classList.add("d-none");
      step4.classList.add("d-none");
      break;

    case 1:
      step1.classList.add("d-none");
      step2.classList.remove("d-none");
      step3.classList.add("d-none");
      step4.classList.add("d-none");
      break;

    case 2:
      step1.classList.add("d-none");
      step2.classList.add("d-none");
      step3.classList.remove("d-none");
      step4.classList.add("d-none");
      break;

    case 3:
      step1.classList.add("d-none");
      step2.classList.add("d-none");
      step3.classList.add("d-none");
      step4.classList.remove("d-none");
      break;

    default:
      break;
  }
};

nextBtn.addEventListener("click", () => {
  navFormState++;
  calPrevNavState();
  calNextNavState();
  renderSignUpSectionForm(navFormState);
});
prevBtn.addEventListener("click", () => {
  navFormState--;
  calPrevNavState();
  calNextNavState();
  renderSignUpSectionForm(navFormState);
});

// Button Disable - SignUp Form
fname.addEventListener("input", () => {
  if (
    fname.value === "" ||
    lname.value === "" ||
    phoneNo.value === "" ||
    signupEmail.value === "" ||
    address.value === "" ||
    signupPassword.value === "" ||
    enterCaptcha.value === ""
  ) {
    return (signUpButton.disabled = true);
  } else {
    return (signUpButton.disabled = false);
  }
});
lname.addEventListener("input", () => {
  if (
    fname.value === "" ||
    lname.value === "" ||
    phoneNo.value === "" ||
    signupEmail.value === "" ||
    address.value === "" ||
    signupPassword.value === "" ||
    enterCaptcha.value === ""
  ) {
    return (signUpButton.disabled = true);
  } else {
    return (signUpButton.disabled = false);
  }
});
phoneNo.addEventListener("input", () => {
  if (
    fname.value === "" ||
    lname.value === "" ||
    phoneNo.value === "" ||
    signupEmail.value === "" ||
    address.value === "" ||
    signupPassword.value === "" ||
    enterCaptcha.value === ""
  ) {
    return (signUpButton.disabled = true);
  } else {
    return (signUpButton.disabled = false);
  }
});
signupEmail.addEventListener("input", () => {
  if (
    fname.value === "" ||
    lname.value === "" ||
    phoneNo.value === "" ||
    signupEmail.value === "" ||
    address.value === "" ||
    signupPassword.value === "" ||
    enterCaptcha.value === ""
  ) {
    return (signUpButton.disabled = true);
  } else {
    return (signUpButton.disabled = false);
  }
});
address.addEventListener("input", () => {
  if (
    fname.value === "" ||
    lname.value === "" ||
    phoneNo.value === "" ||
    signupEmail.value === "" ||
    address.value === "" ||
    signupPassword.value === "" ||
    enterCaptcha.value === ""
  ) {
    return (signUpButton.disabled = true);
  } else {
    return (signUpButton.disabled = false);
  }
});
signupPassword.addEventListener("input", () => {
  if (
    fname.value === "" ||
    lname.value === "" ||
    phoneNo.value === "" ||
    signupEmail.value === "" ||
    address.value === "" ||
    signupPassword.value === "" ||
    enterCaptcha.value === ""
  ) {
    return (signUpButton.disabled = true);
  } else {
    return (signUpButton.disabled = false);
  }
});
enterCaptcha.addEventListener("input", () => {
  if (
    fname.value === "" ||
    lname.value === "" ||
    phoneNo.value === "" ||
    signupEmail.value === "" ||
    address.value === "" ||
    signupPassword.value === "" ||
    enterCaptcha.value === ""
  ) {
    return (signUpButton.disabled = true);
  } else {
    return (signUpButton.disabled = false);
  }
});
