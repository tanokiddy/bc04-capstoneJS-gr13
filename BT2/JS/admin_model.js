// export class dataPhone {
//   constructor(id, name, price, screen, backCam, frontCam, image, desc, type) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.screen = screen;
//     this.backCam = backCam;
//     this.frontCam = frontCam;
//     this.image = image;
//     this.desc = desc;
//     this.type = type;
//   }
// }
export class DataPhone {
  constructor(name, price, screen, backCamera, frontCamera, img, desc, type) {
    this.name = name;
    this.price = price;
    this.screen = screen;
    this.backCamera = backCamera;
    this.frontCamera = frontCamera;
    // this.img = img;
    this.desc = desc;
    this.type = type;
  }
}
