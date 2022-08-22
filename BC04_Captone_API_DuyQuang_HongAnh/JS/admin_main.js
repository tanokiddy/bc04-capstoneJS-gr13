import {
  verifyValidation,
  getInfoForm,
  showInfoForm,
  renderDSDT,
} from "./admin_controller";
import { getInfoForm, verifyValidation } from "./admin_controller";
const BASE_URL = "https://62f99cb8e056448035383654.mockapi.io/";

let getDSDT = () => {
  batLoading();
  axios({
    url: `${BASE_URL}/phone`,
    method: "GET",
  })
    .then(function (res) {
      tatLoading();
      renderDSDT(res.data);
    })
    .catch(function (err) {
      tatLoading();
    });
};

getDSDT();
document.getElementById("add_product").style.display = "block";
document.getElementById("update_product").style.display = "none";

//btn addproduct
const addProduct = () => {
  let newProduct = getInfoForm();
  if (verifyValidation()) {
    batLoading();
    axios({
      url: `${BASE_URL}/phone`,
      method: "GET",
      data: newProduct,
    })
      .then(function (res) {
        tatLoading();
        renderDSDT(res.data);
      })
      .catch(function (err) {
        tatLoading();
      });
  }
};
window.addProduct = addProduct;

// btn updatePRoduc

// xoa Dien Thoai
const deletePro = (id) => {
  batLoading();
  axios({
    url: `${BASE_URL}/phone/${id}`,
    method: "GET",
  })
    .then(function (res) {
      tatLoading();
      renderDSDT(res.data);
    })
    .catch(function (err) {
      tatLoading();
    });
};
window.deletePro = deletePro;

//sua Dien Thoai
const modifyPro = (id) => {
  removeInfo();
  axios({
    url: `${BASE_URL}/phone/${id}`,
    method: "GET",
  })
    .then(function (res) {
      tatLoading();
      showInfoForm(res.data);
    })
    .catch(function (err) {
      tatLoading();
    });
  document.getElementById("add_product").style.display = "none";
  document.getElementById("update_product").style.display = "block";
};
window.modifyPro = modifyPro;
