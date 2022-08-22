/*const emptycart = `<span class="empty-cart"
>Looks Like You Haven't Added Any Product In The Cart</span
>`;
//turn on loading
export let batLoading = () => {
  document.getElementById("loading").style.display = "flex";
};
//turn off Loading
export let tatLoading = () => {
  document.getElementById("loading").style.display = "none";
};*/

import { validation } from "./admin_validation";

export const renderDSDT = (listDT) => {
  let contentHTML = "";
  listDT.forEach((dt) => {
    let contentTr = `
    <tr>
    <td>${dt.id}</td>
    <td>${dt.name}</td>
    <td>${dt.price}</td>
    <td><img src="${dt.img}" alt=""></td>
    <td>${dt.desc}</td>
    <td>
    <button class="btn btn-danger" onclick="xoaDienThoai('${dt.id}')"> Delete</button>
    <button class="btn btn-success" onclick="suaDienThoai('${dt.id}')" data-toggle="modal"
    data-target="#myModal"> Modify</button>
    </td>

    </tr>`;
    contentHTML += contentTr;
  });
  document.getElementById("tblDanhSachSP");
};

export const getInfoForm = () => {
  const id = document.getElementById("numberSP").value;
  const name = document.getElementById("TenSP").value;
  const price = document.getElementById("GiaSP").value;
  const screen = document.getElementById("manhinhSP").value;
  const backCam = document.getElementById("back_camera").value;
  const frontCam = document.getElementById("front_camera").value;
  const image = document.getElementById("HinhSP").value;
  const desc = document.getElementById("MoTa").value;
  const type = document.getElementById("loaiSP").value;

  return new DienThoai(
    id,
    name,
    price,
    screen,
    backCam,
    frontCam,
    image,
    desc,
    type
  );
};

export const showInfoForm = (dt) => {
  document.getElementById("numberSP").value = dt.id;
  document.getElementById("TenSP").value = dt.name;
  document.getElementById("GiaSP").value = dt.price;
  document.getElementById("manhinhSP").value = dt.screen;
  document.getElementById("back_camera").value = dt.backCam;
  document.getElementById("front_camera").value = dt.frontCam;
  document.getElementById("HinhSP").value = dt.image;
  document.getElementById("MoTa").value = dt.desc;
  document.getElementById("loaiSP").value = dt.type;
};

export const verifyValidation = () => {
  let newDT = getInfoForm();
  let isValide =
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
      1000000,
      20000000
    );
};
