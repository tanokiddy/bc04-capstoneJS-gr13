// {/*const emptycart = `<span class="empty-cart"
// >Looks Like You Haven't Added Any Product In The Cart</span
// >`;
// //turn on loading
// export let batLoading = () => {
//   document.getElementById("loading").style.display = "flex";
// };
// //turn off Loading
// export let tatLoading = () => {
//   document.getElementById("loading").style.display = "none";
// };*/}

import { dataPhone } from "./admin_model.js";
import { validation } from "./admin_validation.js";

export const renderDSDT = (listDT) => {
  let contentHTML = "";
  listDT.forEach((dt) => {
    let contentTr = `
    <tr>
    <td>${dt.id}</td>
    <td>${dt.name}</td>
    <td>${dt.price}</td>
    <td class="text-center"><img class="w-25" src="${dt.img}" alt=""></td>
    <td>${dt.desc}</td>
    <td>
    <button class="btn btn-danger" onclick="xoaDienThoai('${dt.id}')"> Delete</button>
    <button class="btn btn-success" onclick="suaDienThoai('${dt.id}')" data-toggle="modal"
    data-target="#myModal"> Modify</button>
    </td>

    </tr>`;
    contentHTML += contentTr;
  });
  document.getElementById("tblDanhSachSP").innerHTML = contentHTML;
};

// {// export const layThongTinTuForm = () => {
// //   const id = document.getElementById("numberSP").value;
// //   const name = document.getElementById("TenSP").value;
// //   const price = document.getElementById("GiaSP").value;
// //   const screen = document.getElementById("manhinhSP").value;
// //   const backCam = document.getElementById("back_camera").value;
// //   const frontCam = document.getElementById("front_camera").value;
// //   const image = document.getElementById("HinhSP").value;
// //   const desc = document.getElementById("MoTa").value;
// //   const type = document.getElementById("loaiSP").value;

// //   return new dataPhone(
// //     id,
// //     name,
// //     price,
// //     screen,
// //     backCam,
// //     frontCam,
// //     image,
// //     desc,
// //     type
// //   );
// // };
// }
export const layThongTinTuForm = () => {
  // const id = document.getElementById("numberSP").value;
  const name = document.getElementById("TenSP").value;
  const price = document.getElementById("GiaSP").value;
  const screen = document.getElementById("manhinhSP").value;
  const backCamera = document.getElementById("back_camera").value;
  const frontCamera = document.getElementById("front_camera").value;
  // const image = document.getElementById("HinhSP").value;
  const desc = document.getElementById("MoTa").value;
  const type = document.getElementById("loaiSP").value;

  return new dataPhone(
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    desc,
    type
  );
};

export const showThongTinLenForm = (dthoai) => {
  document.getElementById("numberSP").value = dthoai.id;
  document.getElementById("TenSP").value = dthoai.name;
  document.getElementById("GiaSP").value = dthoai.price;
  document.getElementById("manhinhSP").value = dthoai.screen;
  document.getElementById("back_camera").value = dthoai.backCam;
  document.getElementById("front_camera").value = dthoai.frontCam;
  // document.getElementById("HinhSP").value = dthoai.image;
  document.getElementById("MoTa").value = dthoai.desc;
  document.getElementById("loaiSP").value = dthoai.type;
};

export const verifyValidation = () => {
  let newDT = layThongTinTuForm();
  let isValidTen =
    validation.kiemTraRong(
      newDT.name,
      "nameSP",
      "ten item khong duoc de rong"
    ) &&
    validation.kiemTraDoDai(
      newDT.name,
      "nameSP",
      "ten item phai tu 4-10 ky tu",
      4,
      10
    );

  let isValidPrice =
    validation.kiemTraRong(
      newDT.price,
      "priceSP",
      "gia item khong duoc e rong"
    ) &&
    validation.kiemTraSo(newDT.price, "priceSP", "gia item phai la so") &&
    validation.kiemTraGiaTri(
      newDT.price,
      "priceSP",
      "gia item khong hop le",
      10,
      20000000
    );

  let isValidManHinh = validation.kiemTraRong(
    newDT.screen,
    "screenSP",
    "Man hinh ko duoc de rong"
  );

  let isValidFrontCam = validation.kiemTraRong(
    newDT.frontCamera,
    "frontSP",
    "Camera truoc ko duoc de rong"
  );
  let isValidbackCam = validation.kiemTraRong(
    newDT.backCamera,
    "backSP",
    "Camera sau ko duoc de rong"
  );
  let isValidDescription = validation.kiemTraRong(
    newDT.desc,
    "descSP",
    "Mo ta  ko duoc de rong"
  );

  let isValidType = validation.kiemTraRong(
    newDT.type,
    "typeSP",
    "Loai dt ko duoc de rong"
  );

  let isValid =
    isValidTen &
    isValidPrice &
    isValidManHinh &
    isValidFrontCam &
    isValidbackCam &
    isValidDescription &
    isValidType;
  return isValid;
};
export const removeSpancontent = () => {
  document.getElementById("nameSP").innerText = "";
  document.getElementById("priceSP").innerText = "";
  document.getElementById("screenSP").innerText = "";
  document.getElementById("frontSP").innerText = "";
  document.getElementById("backSP").innerText = "";
  document.getElementById("descSP").innerText = "";
  document.getElementById("typeSP").innerText = "";
};
