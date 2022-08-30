// {/*export class Item {
//   constructor(
//     id,
//     name,
//     price,
//     screen,
//     backCamera,
//     frontCamera,
//     img,
//     desc,
//     type
//   ) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.screen = screen;
//     this.backCamera = backCamera;
//     this.frontCamera = frontCamera;
//     this.img = img;
//     this.desc = desc;
//     this.type = type;
//   }
// }

// export class SanPham {
//   constructor(id, quantily) {
//     this.id = id;
//     this.quantily = quantily;
//   }
// }*/}

export let validation = {
  kiemTraRong: function (value, idError, message) {
    if (value.length == 0) {
      document.getElementById(idError).innerText = message;
      return false;
    } else {
      document.getElementById(idError).innerText = "";
      return true;
    }
  },
  kiemTraDoDai: function (value, idError, message, min, max) {
    if (value.length < min || value.length > max) {
      document.getElementById(idError).innerText = message;
      return false;
    } else {
      document.getElementById(idError).innerText = "";
      return true;
    }
  },

  kiemTraSo: function (value, idError, message) {
    var numbers = /^[0-9]+$/;
    if (numbers.test(value * 1)) {
      document.getElementById(idError).innerText = "";
      return true;
    } else {
      document.getElementById(idError).innerText = message;
      return false;
    }
  },
  kiemTraGiaTri: function (value, idError, message, min, max) {
    if (value * 1 < min || value * 1 > max) {
      document.getElementById(idError).innerText = message;
      return false;
    } else {
      document.getElementById(idError).innerText = "";
      return true;
    }
  },
};
