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

import { DataPhone } from "./admin_model.js";
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
    <td class="text-center">
    <button class="btn btn-lg mb-1" onclick="xoaDienThoai('${dt.id}')"><i class="fa fa-trash"></i></button>
    <button class="btn btn-lg" onclick="suaDienThoai('${dt.id}')" data-toggle="modal"
    data-target="#myModal"><i class="fa fa-edit"></i></button>
    </td>
    </tr>`;
    contentHTML += contentTr;
  });
  document.getElementById("tblDanhSachSP").innerHTML = contentHTML;
};

export let layThongTinTuForm = () => {
  const name = document.getElementById("TenSP").value;
  const price = document.getElementById("GiaSP").value;
  const screen = document.getElementById("manhinhSP").value;
  const backCamera = document.getElementById("back_camera").value;
  const frontCamera = document.getElementById("front_camera").value;
  const desc1 = document.getElementById("loaiSP").value;
  const type1 = document.getElementById("MoTa").value;

  return new DataPhone(
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    desc1,
    type1
  );
};

export const showThongTinLenForm = (dthoai) => {
  document.getElementById("TenSP").value = dthoai.name;
  document.getElementById("GiaSP").value = dthoai.price;
  document.getElementById("manhinhSP").value = dthoai.screen;
  document.getElementById("back_camera").value = dthoai.backCamera;
  document.getElementById("front_camera").value = dthoai.frontCamera;
  document.getElementById("MoTa").innerHTML = dthoai.desc;
  document.getElementById("loaiSP").value = dthoai.type;
};

export const verifyValidation = () => {
  let newDT = layThongTinTuForm();
  console.log("newDT", newDT);
  console.log("newDT.type: ", document.querySelector("#loaiSP").value);
  console.log("newDT.desc: ", newDT.desc);
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

  let isValidDesc = validation.kiemTraRong(
    newDT.desc,
    "descSP",
    "Mo ta dt ko duoc de rong"
  );

  let isValidType = validation.kiemTraLoaiSP(
    newDT.type,
    "typeSP",
    "Loai dt ko duoc de rong"
  );

  var isValid =
    isValidTen &
    isValidPrice &
    isValidManHinh &
    isValidFrontCam &
    isValidbackCam &
    isValidDesc &
    isValidType;
  return isValid;
};

export let localPhoneList = [];
export let createLocalPhoneList = (resData) => {
  localPhoneList = resData;
  console.log("localPhoneList: ", localPhoneList);
};
window.localPhoneList = localPhoneList;
