// get products from localStorage then add them to the( shopping page )
let productIncart = JSON.parse(localStorage.getItem(`addItemsToLs`));
let noProducts = document.querySelector(`.noproducts`);
function getItemsfromls(arr = []) {
  let productIncart = JSON.parse(localStorage.getItem(`addItemsToLs`)) || arr;
  if (!productIncart || productIncart.length == 0) {
    noProducts.innerHTML = `Sorry you don't have propducts yet`;
  }
  productIncart.map((products) => {
    // if (localStorage.getItem(`username`)) {
      $(`#cartData`).append(`<div class="col-sm-6 col-md-4 col-lg-4">
            <div class="box">
               <div >
                  <div >
                 
                  </div>
               </div>
               <div class="img-box">
                  <img src="${products.image}">
               </div>
               <div class="detail-box">
                  <h5>
                     ${products.name}
                  </h5>
                  <h6>
                       $${products.price} 
                  </h6>
               </div>
               <div class="detail-box" style = 'justify-content:space-around; position:relative;'>
                 <h5 id='pre'  onclick='preIncrement(${products.id} , ${products.price})' style=' width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background-color: red;'> - </h5>
  
                   </a>
                  <h5 >
                    Quantity: ${products.qty}
                  </h5>
                  <h5 onclick='increment(${products.id} , ${products.price} ,${products.newPrice})' style=' width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background-color: green;
  '> + </h5>
               </div>
                <div class="detail-box" >
                  <h5>
                    Total: $${products.newPrice}
                  </h5>
                   <a class='trash' style=' cursor:pointer;'  onclick="removeFromcart(${products.id})" id=" trash" >
                      <i class="fa fa-trash-o"> Remove all</i>
                      </a>
               </div>
            </div>
         </div> 
         `);
    // }
  });
}
getItemsfromls();

function removeFromcart(id) {
  productIncart = localStorage.getItem(`addItemsToLs`);
  if (productIncart) {
    let items = JSON.parse(productIncart);
    let filtered = items.filter((item) => item.id !== id);

    localStorage.setItem(`addItemsToLs`, JSON.stringify(filtered));

    window.location = `shoppingCart.html`;
  }
}

/*get + && - */

function preIncrement(id, price) {
  let productIncart = JSON.parse(localStorage.getItem(`addItemsToLs`));
  productIncart.forEach((element) => {
    if (element.id === id && element.qty > 1) {
      let quantity = element.qty--;
      element.newPrice -= price;
      localStorage.setItem(`addItemsToLs`, JSON.stringify(productIncart));
      window.location = `shoppingCart.html`;
    }
  });
}

let pre = document.getElementById("pre");
function increment(id, price) {
  let productIncart = JSON.parse(localStorage.getItem(`addItemsToLs`));

  productIncart.forEach((element) => {
    if (element.id === id) {
      let quantity = element.qty++;
      element.newPrice += price;
    }
  });
  localStorage.setItem(`addItemsToLs`, JSON.stringify(productIncart));
  window.location = `shoppingCart.html`;
}

//sum all prices

let total = productIncart.map((i) => i.newPrice);
let totalQty = productIncart.map((i) => i.qty);
let sum = total.reduce((p, c) => {
  return p + c;
});
let SumtotalQty = totalQty.reduce((p, c) => {
  return p + c;
});

localStorage.setItem(`total`, JSON.stringify(sum));
localStorage.setItem(`SumtotalQty`, JSON.stringify(SumtotalQty));
let getTotal = JSON.parse(localStorage.getItem(`total`));
let getSumtotalQty = JSON.parse(localStorage.getItem(`SumtotalQty`));


// let SumtotalQty2 = document.getElementById(`SumtotalQty`);
// let total2 = document.getElementById(`total`);

// SumtotalQty2.innerHTML = `All products: [${SumtotalQty}] Items`;
// total2.innerHTML = `Total price is : $ ${getTotal}`;


$(`#SumtotalQty`).append(`<span style = '  background: linear-gradient(353deg, #1a1a1a, #088178);
    border: 1px solid;
    border-radius: 35px;
    padding: 5px 30px;
    color: #fff;
  
    font-size: 16px;' >All products: [${SumtotalQty}] Items</span>`);
$(`#total`).append(` <span style = '  background: linear-gradient(353deg, #1a1a1a, #088178);
    border: 1px solid;
    border-radius: 35px;
    padding: 5px 42px;
    color: #fff;
  
    font-size: 16px;' >Total price is : $ ${getTotal}</span>`);
