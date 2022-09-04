import { DataPhone } from "./model.js";
import { validation } from "./validation.js";

export const renderDSDT = (listDT) => {
  let contentHTML = "";
  listDT.forEach((dt) => {
    let contentTr = `
    <tr>
    <td>${dt.id}</td>
    <td>${dt.name}</td>
    <td>$${dt.price}</td>
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
  const img = document.querySelector("#HinhSP").value;
  const desc = document.getElementById("MoTa").value;
  const type = document.getElementById("loaiSP").value;

  return new DataPhone(
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    desc,
    type
  );
};

export const showThongTinLenForm = (dthoai) => {
  document.getElementById("TenSP").value = dthoai.name;
  document.getElementById("GiaSP").value = dthoai.price;
  document.getElementById("manhinhSP").value = dthoai.screen;
  document.getElementById("back_camera").value = dthoai.backCamera;
  document.getElementById("front_camera").value = dthoai.frontCamera;
  document.querySelector("#HinhSP").value = dthoai.img;
  document.getElementById("MoTa").value = dthoai.desc;
  document.getElementById("loaiSP").value = dthoai.type;
};

export const verifyValidation = () => {
  let newDT = layThongTinTuForm();
  let isValidTen = validation.kiemTraRong(
    newDT.name,
    "nameSP",
    "ten item khong duoc de rong"
  );

  console.log("newDT.price: ", newDT.price);
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
  resData.forEach((item) => {
    localPhoneList.push(item);
  });
};

export function emptyInput() {
  document.getElementById("TenSP").value = "";
  document.getElementById("GiaSP").value = "";
  document.getElementById("manhinhSP").value = "";
  document.getElementById("back_camera").value = "";
  document.getElementById("front_camera").value = "";
  document.getElementById("HinhSP").value = "";
  document.getElementById("MoTa").value = "";
  document.getElementById("loaiSP").value = "";
}
window.emptyInput = emptyInput;

export function emptySpan() {
  document.getElementById("nameSP").innerText = "";
  document.getElementById("priceSP").innerText = "";
  document.getElementById("screenSP").innerText = "";
  document.getElementById("backSP").innerText = "";
  document.getElementById("frontSP").innerText = "";
  document.getElementById("imageSP").innerText = "";
  document.getElementById("descSP").innerText = "";
  document.getElementById("typeSP").innerText = "";
}
window.emptySpan = emptySpan;
