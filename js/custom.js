// to get current year
// function getYear() {
//     var currentDate = new Date();
//     var currentYear = currentDate.getFullYear();
//     document.querySelector("#displayYear").innerHTML = currentYear;
// }

// getYear();

// client section owl carousel
// $(".client_owl-carousel").owlCarousel({
//     loop: true,
//     margin: 0,
//     dots: false,
//     nav: true,
//     navText: [],
//     autoplay: true,
//     autoplayHoverPause: true,
//     navText: [
//         '<i class="fa fa-angle-left" aria-hidden="true"></i>',
//         '<i class="fa fa-angle-right" aria-hidden="true"></i>'
//     ],
//     responsive: {
//         0: {
//             items: 1
//         },
//         768: {
//             items: 2
//         },
//         1000: {
//             items: 2
//         }
//     }
// });

/** google_map js **/
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(40.712775, -74.005973),
    zoom: 18,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// logOUt and userName

var userAfterSign = document.getElementById("userAfterSign");
var logOut = document.getElementById("logOut");
var getPassword = localStorage.getItem("password");
var getUser = localStorage.getItem("username");
if (getUser && getPassword) {
  userAfterSign.innerHTML = `
    <li class="nav-item" id="userAfterSign">
                  <a style='cursor:pointer;' class="nav-link" >  ${getUser}</a>
                </li>
  
  `;
  logOut.innerHTML = ` 
   <li class="nav-item" id="userAfterSign">
                  <a style='cursor:pointer;' class="nav-link" id="clearLocalStorage">LogOut</a>
                </li>
  `;
  var clearLocalStorage = document.getElementById("clearLocalStorage");
  clearLocalStorage.onclick = () => {
    localStorage.clear();
    window.location = `index.html`;
  };
}
// these for bade number on the basket icon
let titleOfproduct = document.createElement(`div`);
titleOfproduct.id = `titleOfproductID`;
let numberOfproducts = document.createElement(`p`);
titleOfproduct.append(numberOfproducts);

// allProducts is container of products in the index
// we put the function dropProducts() in the x so we can use it anywhere
let dropProducts;
let allProducts = document.getElementById("productsRow");
(dropProducts = function dropProducts() {
  let productsRow = document.getElementById(`productsRow`);
  let productsInPage = products.map((items) => {
    $(`#productsRow`).append(` <div class="col-sm-6 col-md-4 col-lg-4">
          <div class="box">
             <div class="option_container">
                <div class="options">
                   <a style=' cursor:pointer;'  onclick="addToCart(${items.id})"  class="option1" id="option1" >
                      Add To Cart
                   </a>
                   <a  onclick="produtDetails(${items.id})" style=' cursor:pointer;' class="option2">
                  Details 
                   </a>
                </div>
             </div>
             <div class="img-box">
                <img src="${items.image}">
             </div>
             <div class="detail-box">
                <h5>
                   ${items.name}
                </h5>
                <h6>
                   Price:  $${items.price} 
                </h6>
               
             </div>
          </div>
       </div>`);
  });
})();

// declare an array to set items inside it then send the items  to localStorage
// to send object to the localstorage transform obj to string by json.stringify()

/*what happpend ?  if there are items in localstorage put them in the array if not use an empty array */

let addItems = localStorage.getItem(`addItemsToLs`)
  ? JSON.parse(localStorage.getItem(`addItemsToLs`))
  : [];

// get badge (items number on the shooping icons)

let badge = document.getElementById(`badge`);

if (addItems) {
  addItems.map((item) => {
    titleOfproduct.innerHTML += `<p>${item.qty}</p>`;
  });
  badge.innerHTML = addItems.length;
}

let allAddItems = [];
function addToCart(id) {




  // cheakUserloged();
  // if (localStorage.getItem(`username`)) {
    let choosenItem = products.find((item) => item.id == id);

    let items = allAddItems.find((item) => item.id === choosenItem.id);
  
    if (items) {
      choosenItem.qty += 1;
    } else {
      allAddItems.push(choosenItem);
    }
    allAddItems.forEach((item) => {
      titleOfproduct.innerHTML += `<p> ${item.qty}</p>`;
    });
    addItems = [...addItems, choosenItem];
    let uniqueArr = getUniqueArray(addItems, "id");
    localStorage.setItem(`addItemsToLs`, JSON.stringify(uniqueArr)); // u can't use (`addItemsToLs`,addItems) without json.stringify

    badge.innerHTML = uniqueArr.length;
  }
// }

// to add items one time in shoppingCart
function getUniqueArray(arr, filterId) {
  let unique = arr
    .map((item) => item[filterId])
    .map(
      (item, index, finalArray) => finalArray.indexOf(item) === index && index
    )
    .filter((item) => arr[item])
    .map((item) => arr[item]);
  return unique;
}

//cheak if the user loged in or not

// function cheakUserloged() {
//   if (!localStorage.getItem(`username`)) {
//     Swal.fire({
//       title: "Log in first please",
//     });

//     setTimeout(() => {
//       window.location = "/signIN.html";
//     }, 1000);
//   }
// }

//produtDetails
//1. put products from data js in localStorage
//2. compare id in the function produtDetails and the id in data from ls

function produtDetails(id) {
  localStorage.setItem(`produtId`, id);
}

//Search about items

let searchInput = document.getElementById(`search`);
let searchIcon = document.getElementById(`searchIcon`);
let searchOptions = document.getElementById(`searchOptions`);

searchInput.addEventListener(`keyup`, (event) => {
 
  allProducts.innerHTML = "";
  allProducts.scrollIntoView();
  search(event.target.value, JSON.parse(localStorage.getItem(`products_all`)));
});
searchInput.onfocus = () => {
  allProducts.scrollIntoView();
};

function search(name, arr) {
  // for(let i = 0 ; i<arr.length ; i++){
  //   if(arr[i].name === name){
  //     console.log(arr[i]);
  //   }
  // } or
 
  let myArray = arr.filter((item) => item.name.indexOf(name) !== -1);
 
  myArray.map((items) => {
    $(`#productsRow`).append(` <div class="col-sm-6 col-md-4 col-lg-4">
          <div class="box">
             <div class="option_container">
                <div class="options">
                   <a style=' cursor:pointer;'  onclick="addToCart(${items.id})"  class="option1" id="option1" >
                      Add To Cart
                   </a>
                   <a  onclick="produtDetails(${items.id})" style=' cursor:pointer;' href="/famms-1.0.0/productsDetails.html" class="option2">
                  Details 
                   </a>
                </div>
             </div>
             <div class="img-box">
                <img src="${items.image}">
             </div>
             <div class="detail-box">
                <h5>
                   ${items.name}
                </h5>
                <h6>
                     $${items.price} 
                </h6>
             </div>
          </div>
       </div>

      `
      );

  });
} 

