// get products then add them to the( index page =>  localStorage)

let products = [
  {
    id: 1,
    name: "prouduct 1",
    price: 10,
    image: "css/images/featuers products/4.png",
    qty:1,
    newPrice:10,
  },
  {
    id: 2,
    name: "prouduct 2",
    price: 15,
    image: "css/images/featuers products/2.png",
    qty:1,
    newPrice:15,
  },
  {
    id: 3,
    name: "product 3",
    price: 20,
    image:  "css/images/featuers products/3.png",
    qty:1,
    newPrice:20,
  },
  {
    id: 4,
    name: "product 4",
    price: 10,
    image:  "css/images/featuers products/5.png",
    qty:1,
    newPrice:10,
  },
  {
    id: 5,
    name: "product 5",
    price: 20,
    image:  "css/images/featuers products/7.png",
    qty:1,
    newPrice:20,
  },
  {
    id: 6,
    name: "product 6",
    price: 20,
    image:  "css/images/featuers products/4-1.png",
    qty:1,
    newPrice:20,
  },
  {
    id: 7,
    name: "product 7",
    price: 10,
    image: "css/images/featuers products/4-2.png",
    qty:1,
    newPrice:10,
  },
  {
    id: 8,
    name: "product 8",
    price: 10,
    image: "css/images/featuers products/7-2.png",
    qty:1,
    newPrice:10,
  },
  {
    id: 9,
    name: "product 9",
    price: 20,
    image: "css/images/p5.png",
    qty:1,
    newPrice:20,
  },
  {
    id: 10,
    name: "product 10",
    price: 30,
    image:"css/images/p7.png",
    qty:1,
    newPrice:30,
  },
  {
    id: 11,
    name: "product 11",
    price: 7,
    image:"css/images/p11.png",
    qty:1,
    newPrice:7,
  },
  {
    id: 12,
    name: "product 12",
    price: 12,
    image: "css/images/p8.png",
    qty:1,
    newPrice:12,
  },

];

localStorage.setItem(`products_all` , JSON.stringify(products));