// get data from localStorage

let products_all = JSON.parse(localStorage.getItem(`products_all`));
// get p ID
let produtId = localStorage.getItem(`produtId`);
// Now if the id is in this page (productsDetails) get the hole item from local storage
let headPDetails = document.getElementById(`headPDetails`);

let productDitailsId = products_all.find((item) => item.id == produtId);
$(`#headPDetails`).append(`   <h2> <span>  ${productDitailsId.name}</span></h2>`)
$(`#pDetails`).append(`<div class="col-sm-6 col-md-4 col-lg-4">
    <div class="box">
         <div class="option_container">
                <div class="options">
                   <a style=' cursor:pointer;'  onclick="addToCart(${productDitailsId.id})"  class="option1" id="option1" >
                      Add To Cart
                   </a>
                </div>
             </div>
       <div class="img-box">
          <img src="${productDitailsId.image}">
       </div>
    </div>
 </div>
 <div class="col-sm-6 col-md-4 col-lg-4">
    <div class="box">
      
         <div class="detail-box">
                <h5>
                   ${productDitailsId.name}
                </h5>
                <h6>
                     $${productDitailsId.price} 
                </h6>
             </div>
               <br>
                <p>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tempore voluptatibus modi quibusdam! Inventore ad veritatis molestiae, quia voluptatibus similique eius alias. Quae blanditiis consectetur nesciunt sit doloribus! Et, incidunt?<p/>
    </div>
 </div>
 `);

