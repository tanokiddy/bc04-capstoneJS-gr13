import { productSale } from "./model";
export const PHONE_LOCALSTORAGE = "PHONE_LOCALSTORAGE";
export const ITEMCARTLIST_LOCALSTORAGE = "ITEMCARTLIST";
const BASE_URL = "https://62f99cb8e056448035383654.mockapi.io/";

let productsList = [];
let itemCartList = [];

function getData() {
  batLoading();
  axios({
    url: `${BASE_URL}/shopping`,
    method: "GET",
  })
    .then(function (res) {
      localStorage.setItem(PHONE_LOCALSTORAGE, JSON.stringify(res.data));

      productsList = JSON.parse(localStorage.getItem(PHONE_LOCALSTORAGE));

      renderData(productsList);
      let itemCartListJson = localStorage.getItem(ITEMCARTLIST_LOCALSTORAGE);
      if (itemCartListJson != null) {
        console.log("get");
        itemCartList = JSON.parse(itemCartListJson);
        renderCart(itemCartList);
      } else {
        console.log("no get");
        // renderCart(itemCartList);
      }
      tatLoading();
    })
    .catch(function (err) {
      console.log("err: ", err);
      tatLoading();
    });
}
getData();
