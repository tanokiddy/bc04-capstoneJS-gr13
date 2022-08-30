import {
  verifyValidation,
  layThongTinTuForm,
  showThongTinLenForm,
  renderDSDT,
} from "./admin_controller.js";
// {
// /*
// // let getDSDT = () => {
// //   batLoading();
// //   axios({
// //     url: `${BASE_URL}/phone`,
// //     method: "GET",
// //   })
// //     .then(function (res) {
// //       tatLoading();
// //       renderDSDT(res.data);
// //     })
// //     .catch(function (err) {
// //       tatLoading();
// //     });
// // };

// // getDSDT();
// // document.getElementById("add_product").style.display = "block";
// // document.getElementById("update_product").style.display = "none";

// document.getElementById("add_product").addEventListener("click", add_product);

// //btn addproduct
// function add_product() {
//   console.log("sunny");
//   // let newProduct = getInfoForm();
//   // if (verifyValidation()) {
//   //   batLoading();
//   //   axios({
//   //     url: `${BASE_URL}/phone`,
//   //     method: "GET",
//   //     data: newProduct,
//   //   })
//   //     .then(function (res) {
//   //       tatLoading();
//   //       renderDSDT(res.data);
//   //     })
//   //     .catch(function (err) {
//   //       tatLoading();
//   //     });
//   // }
// }
// // window.addProduct = addProduct;

// // btn updatePRoduc

// // xoa Dien Thoai
// // const deletePro = (id) => {
// //   batLoading();
// //   axios({
// //     url: `${BASE_URL}/phone/${id}`,
// //     method: "GET",
// //   })
// //     .then(function (res) {
// //       tatLoading();
// //       renderDSDT(res.data);
// //     })
// //     .catch(function (err) {
// //       tatLoading();
// //     });
// // };
// // window.deletePro = deletePro;

// // //sua Dien Thoai
// // const modifyPro = (id) => {
// //   removeInfo();
// //   axios({
// //     url: `${BASE_URL}/phone/${id}`,
// //     method: "GET",
// //   })
// //     .then(function (res) {
// //       tatLoading();
// //       showInfoForm(res.data);
// //     })
// //     .catch(function (err) {
// //       tatLoading();
// //     });
// //   document.getElementById("add_product").style.display = "none";
// //   document.getElementById("update_product").style.display = "block";
// // };
// // window.modifyPro = modifyPro;
// */}

const BASE_URL = "https://62f99cb8e056448035383654.mockapi.io";
// {/*
// var batLoading = function () {
//   document.getElementById("loading").style.display = "flex";
// };
// var tatLoading = function () {
//   document.getElementById("loading").style.display = "none";
// };*/}

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
      // console.log(res.data);
      tatLoading();
      renderDSDT(res.data);
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
      tatLoading();
      showThongTinLenForm(res.data);
      console.log(res.data);
    })
    .catch(function (err) {
      tatLoading();
    });
}
window.suaDienThoai = suaDienThoai;

function updateProduct(id) {
  var newDT = layThongTinTuForm();
  var id = newDT.id;
  console.log(newDT);
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
