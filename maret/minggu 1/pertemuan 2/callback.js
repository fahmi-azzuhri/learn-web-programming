function user(callback) {
  let userData = {
    firstname: "fahmi",
    lastname: "azzuhri",
    country: "kirigakure",
  };
  callback(userData);
}
user((userData) => {
  console.log(userData);
});
