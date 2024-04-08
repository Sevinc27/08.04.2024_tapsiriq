// //1. İstifadəçinin daxil etdiyi adın neçə simvoldan ibarət olduğunu tapın:
// let prompt = require("prompt-sync")();
// let name = prompt("Adınızı daxil edin: ");
// console.log(`Adınız ${name.length} simvoldur.`);

// //2. İstifadəçinin daxil etdiyi 1 ci sözdə daxil etdiyi 2 ci simvol varmı?:
// let prompt = require("prompt-sync")();
// let name = prompt("Adınızı daxil edin: ");
// console.log(
//   `Daxil etdiyiniz sözün 2-ci simvolu ${name[1] ? name[1] : "yoxdur"}.`
// );

// //3. İstifadəçinin daxil etdiyi 1 ci söz daxil etdiyi 2 ci simvolla başlayırmı?:
// let prompt = require("prompt-sync")();
// let name = prompt("Adınızı daxil edin: ");
// console.log(
//   `Daxil etdiyiniz söz ${
//     name[0] === name[1] ? "başlayır" : "başlamır"
//   } daxil etdiyiniz 2-ci simvolla.`
// );

// //4. İstifadəçinin daxil etdiyi 1 ci söz daxil etdiyi 2 ci simvolla bitirmi?:
// let prompt = require("prompt-sync")();
// let name = prompt("Adınızı daxil edin: ");
// console.log(
//   `Daxil etdiyiniz söz ${
//     name[name.length - 1] === name[1] ? "bitir" : "bitmir"
//   } daxil etdiyiniz 2-ci simvolla.`
// );

// //5. İstifadəçinin daxil etdiyi 1 ci sözdə daxil etdiyi 2 ci simvolun index`ini tapın:
// let prompt = require("prompt-sync")();
// let name = prompt("Adınızı daxil edin: ");
// console.log(
//   `Daxil etdiyiniz sözün 2-ci simvolunun indeksi ${name.indexOf(name[1])}.`
// );

// //6. İstifadəçinin daxil etdiyi sözün böyük hərf olub olmadığını tapın:
// let prompt = require("prompt-sync")();
// let name = prompt("Adınızı daxil edin: ");
// console.log(
//   `Daxil etdiyiniz söz ${
//     name === name.toUpperCase()
//       ? "böyük hərflə yazılıb"
//       : "böyük hərflə yazılmayıb"
//   }.`
// );
