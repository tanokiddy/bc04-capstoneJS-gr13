import {
  verifyValidation,
  layThongTinTuForm,
  showThongTinLenForm,
  renderDSDT,
  createLocalPhoneList,
  localPhoneList,
  emptySpan,
  emptyInput,
} from "./controller.js";

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
document.getElementById("btnThemSP").onclick = function () {
  document.querySelector("#update_product").style.display = "none";
  emptyInput();
};
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
  emptySpan();
  document.getElementById("add_product").style.display = "none";
  document.querySelector("#update_product").style.display = "inline-block";
  axios({
    url: `${BASE_URL}/capstoneapi/${id}`,
    method: "GET",
  })
    .then(function (res) {
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
  let index = localPhoneList.findIndex((item) => {
    return item.name == newDT.name;
  });
  var id = localPhoneList[index].id;
  document.getElementById("update_product").removeAttribute("data-dismiss");
  if (verifyValidation()) {
    document
      .getElementById("update_product")
      .setAttribute("data-dismiss", "modal");
    batLoading();
    axios({
      url: `${BASE_URL}/capstoneapi/${id}`,
      method: "PUT",
      data: newDT,
    })
      .then(function (res) {
        tatLoading();
        getDSDT();
        document.getElementById("add_product").style.display = "inline-block";
        document.querySelector("#update_product").style.display = "none";
      })
      .catch(function (err) {
        tatLoading();
        console.log(err);
      });
  }
}
window.updateProduct = updateProduct;
