function orderRecords() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email adress?");
  alert(
    "Hi, " +
      name +
      "! Thank you for your visit 😊 " +
      " We'll get back to you soon at " +
      email +
      " so you can place your order 🎧"
  );
}

let orderRecordsButton = document.querySelector("button");
orderRecordsButton.addEventListener("click", orderRecords);
