import {
  renderPhone,
  batLoading,
  tatLoading,
  createPhoneArr,
  listItem,
  renderCart,
} from "./controller.js";

const BASE_URL = `https://6301fd51c6dda4f287b09c92.mockapi.io`;

let getlistPhone = () => {
  batLoading();
  axios({
    url: `${BASE_URL}/CapstoneJS`,
    method: "GET",
  })
    .then(function (res) {
      tatLoading();
      console.log(res);
      renderPhone(res.data);
      createPhoneArr(res.data);
    })
    .catch(function (err) {
      tatLoading();
      console.log(err);
    });
};
getlistPhone();
console.log("listItem: ", listItem);

const CARTARRAY_LOCALSTORAGE = "CARTARRAY_LOCALSTORAGE";
let cartArr = [];

let cartArrJson = localStorage.getItem(CARTARRAY_LOCALSTORAGE);
if (cartArrJson != null) {
  cartArr = JSON.parse(cartArrJson);
  console.log("cartArr: ", cartArr);
  renderCart(cartArr);
}

//Add to cart
let addToCart = (phoneId) => {
  let cloneListItem = listItem;
  let index = cloneListItem.findIndex((item) => {
    return item.id == phoneId;
  });
  let index1 = cartArr.findIndex((item) => {
    return item.id == cloneListItem[index].id;
  });
  if (index1 < 0) {
    cartArr.push(cloneListItem[index]);
  } else {
    cartArr[index1].amount++;
  }
  let cartArrJson = JSON.stringify(cartArr);
  localStorage.setItem(CARTARRAY_LOCALSTORAGE, cartArrJson);
  numberCartItem();
  renderCart(cartArr);
  console.log("listItem: ", listItem);
};
window.addToCart = addToCart;

//delete CartItem
let deleteCartItem = (cartId) => {
  let index = cartArr.findIndex((item) => {
    return item.id == cartId;
  });
  cartArr.splice(index, 1);
  let cartArrJson = JSON.stringify(cartArr);
  localStorage.setItem(CARTARRAY_LOCALSTORAGE, cartArrJson);
  numberCartItem();
  renderCart(cartArr);
  listItem.splice(0, listItem.length);
  getlistPhone();
};
window.deleteCartItem = deleteCartItem;
//===========

//Increase CartItem
let increaseCartItem = (cartId) => {
  let index = cartArr.findIndex((item) => {
    return item.id == cartId;
  });
  cartArr[index].amount++;
  let cartArrJson = JSON.stringify(cartArr);
  localStorage.setItem(CARTARRAY_LOCALSTORAGE, cartArrJson);
  numberCartItem();
  renderCart(cartArr);
};
window.increaseCartItem = increaseCartItem;
//===========

//decrease Cartitem
let decreaseCartItem = (cartId) => {
  let index = cartArr.findIndex((item) => {
    return item.id == cartId;
  });
  if (cartArr[index].amount > 1) {
    cartArr[index].amount--;
  } else {
    deleteCartItem(cartId);
  }
  let cartArrJson = JSON.stringify(cartArr);
  localStorage.setItem(CARTARRAY_LOCALSTORAGE, cartArrJson);
  numberCartItem();
  renderCart(cartArr);
};
window.decreaseCartItem = decreaseCartItem;

//Number in cart
let numberCartItem = () => {
  let number = 0;
  cartArr.forEach((item) => {
    number += parseInt(item.amount);
  });
  document.querySelector("#numberCartItem").innerHTML = number;
};
window.numberCartItem = numberCartItem;
numberCartItem();
//buy Cart
let buyCart = () => {
  cartArr.splice(0, cartArr.length);
  let cartArrJson = JSON.stringify(cartArr);
  localStorage.setItem(CARTARRAY_LOCALSTORAGE, cartArrJson);
  document.querySelector("#cartBody").innerHTML = "Thanh toán thành công";
  document.querySelector("#totalPrice").innerHTML = "";
  numberCartItem();
  listItem.splice(0, listItem.length);
  getlistPhone();
};
window.buyCart = buyCart;
// clear cart
let clearCart = () => {
  cartArr.splice(0, cartArr.length);
  let cartArrJson = JSON.stringify(cartArr);
  localStorage.setItem(CARTARRAY_LOCALSTORAGE, cartArrJson);
  document.querySelector("#cartBody").innerHTML = "";
  document.querySelector("#totalPrice").innerHTML = "";
  numberCartItem();
  listItem.splice(0, listItem.length);
  getlistPhone();
};
window.clearCart = clearCart;
