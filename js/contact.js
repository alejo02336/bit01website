const btn = document.querySelector(".btn_send");
let text = document.querySelector(".field");

btn.addEventListener("click", function () {
  if (text.value === "") {
    alert("Please fill in the field");
  } else {
    alert("Thank you for your message");
  }
});
