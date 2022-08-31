import {
  verifyValidation,
  layThongTinTuForm,
  showThongTinLenForm,
  renderDSDT,
  createLocalPhoneList,
  localPhoneList,
  emptySpan,
} from "./admin_controller.js";

const BASE_URL = "https://62f99cb8e056448035383654.mockapi.io";

export let batLoading = () => {
  document.getElementById("loading").style.display = "flex";
};

export let tatLoading = () => {
  document.getElementById("loading").style.display = "none";
};

let getDSDT = () => {
  batLoading();
  axios({
    url: `${BASE_URL}/capstoneapi`,
    method: "GET",
  })
    .then(function (res) {
      console.log(res.data);
      tatLoading();
      renderDSDT(res.data);
      createLocalPhoneList(res.data);
    })
    .catch(function (err) {
      tatLoading();
      console.log(err);
    });
};
getDSDT();
console.log("localPhoneList: ", localPhoneList);

document.getElementById("btnThemSP").addEventListener("click", () => {
  document.getElementById("add_product").style.display = "inline-block";
});

//delete button
function xoaDienThoai(id) {
  axios({
    url: `${BASE_URL}/capstoneapi/${id}`,
    method: "DELETE",
  })
    .then(function (res) {
      getDSDT();
    })
    .catch(function (err) {
      console.log(err);
    });
}
window.xoaDienThoai = xoaDienThoai;

// add btn
function addProduct() {
  document.getElementById("add_product").removeAttribute("data-dismiss");

  var newDT = layThongTinTuForm();
  if (verifyValidation()) {
    document
      .getElementById("add_product")
      .setAttribute("data-dismiss", "modal");

    batLoading();
    axios({
      url: `${BASE_URL}/capstoneapi`,
      method: "POST",
      data: newDT,
    })
      .then(function (res) {
        tatLoading();
        getDSDT();
      })
      .catch(function (err) {
        tatLoading();
        console.log(err);
      });
  }
}
window.addProduct = addProduct;

// sửa điện thoại
function suaDienThoai(id) {
  batLoading();
  axios({
    url: `${BASE_URL}/capstoneapi/${id}`,
    method: "GET",
  })
    .then(function (res) {
      emptySpan();
      tatLoading();
      showThongTinLenForm(res.data);
      console.log(res.data);
    })
    .catch(function (err) {
      tatLoading();
      console.log("err: ", err);
    });
}
window.suaDienThoai = suaDienThoai;

function updateProduct(id) {
  let newDT = layThongTinTuForm();
  console.log("newDT: ", newDT.id);
  let index = localPhoneList.findIndex((item) => {
    return item.name == newDT.name;
  });
  var id = localPhoneList[index].id;
  if (verifyValidation()) {
    batLoading();
    axios({
      url: `${BASE_URL}/capstoneapi/${id}`,
      method: "PUT",
      data: newDT,
    })
      .then(function (res) {
        tatLoading();
        getDSDT();
      })
      .catch(function (err) {
        tatLoading();
        console.log(err);
      });
  }
}
window.updateProduct = updateProduct;
