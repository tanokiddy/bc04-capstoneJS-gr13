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
  kiemTraLoaiSP: function (value, idError, message) {
    if (value == "Choose type" || value == "") {
      document.getElementById(idError).innerText = message;
      return false;
    } else {
      document.getElementById(idError).innerText = "";
      return true;
    }
  },
};
