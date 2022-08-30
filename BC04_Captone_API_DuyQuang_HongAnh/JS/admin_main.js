import {
  verifyValidation,
  layThongTinTuForm,
  showThongTinLenForm,
  renderDSDT,
  createLocalPhoneList,
  localPhoneList,
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

document.getElementById("btnThemSP").addEventListener("click", () => {
  document.getElementById("add_product").style.display = "inline-block";
});

//xoá sản phẩm
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

// thêm sản phẩm
function addProduct() {
  // var newDT = layThongTinTuForm();
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
      tatLoading();
      showThongTinLenForm(res.data);
      console.log(res.data);
      let ab = res.data.type;
      console.log("ab: ", ab);
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
  console.log("id: ", id);

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
window.updateProduct = updateProduct;
