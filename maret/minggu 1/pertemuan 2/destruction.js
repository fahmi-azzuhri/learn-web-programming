// function profile() {
//   const getData = {
//     getName: () => {
//       return "fahmi";
//     },
//     getAge: () => {
//       return "23";
//     },
//   };
//   return {
//     namaku: getData.getName(),
//     umur: getData.getAge(),
//   };
// }

// const { namaku, umur } = profile();
// console.log(namaku);

//destruction pertukaran
const { nama, age } = {
  nama: "fahmi",
  age: 23,
};

const [lapet, kampret] = ["fahmi", "yeah"];
console.log(lapet, nama);
