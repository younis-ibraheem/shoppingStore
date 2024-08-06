var logIn = document.getElementById("login");
var getPassword = localStorage.getItem("password");
var getUser = localStorage.getItem("username");

logIn.addEventListener("click", function (event) {
  event.preventDefault();

  var password = document.getElementById("passwordLg").value;
  var userName = document.getElementById("userNameLg").value;

  if (password == "" || userName == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: ' ENTER YOUR DATA PLEASE'
    });
  }
  
  else if( getUser &&
    getUser === userName &&
    getPassword &&
    getPassword === password) {
    
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Confirmed",
        showConfirmButton: false,
        timer: 1000
      });

      setTimeout(()=>{
        window.location="/index.html";
    },2000);

    
    }
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: 'UserName or Password is Wrong'
      });
    }
  
});

var forgetPassword = document.getElementById("forgetPassword");

forgetPassword.onclick = (event)=> {
  event.preventDefault();
  Swal.fire({
    icon: "",
    title: " Okay It's not my business",
    text: " Go to hell",
   
  });
}
