var submit1 = document.getElementById("Submit1");

function submitData() {
  var userName = document.getElementById("userName");

  var password = document.getElementById("password");
  var email = document.getElementById("email");

  localStorage.setItem("username", userName.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("password", password.value);
}
submit1.onclick = () => {
  submitData();
};
// if you have an accont go to the log in page
var anotherAccount = document.getElementById("ihaveAccount");
anotherAccount.onclick = (event) => {
  event.preventDefault();
  window.location = `/logIn.html`;
};

// let e =" dfndsnAnl12 jjie45 eke1 13165464 12123we"
// let s = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g
// console.log(e.match(s));

// && password.value.match(/[a-zA-z]{6,}/g)
