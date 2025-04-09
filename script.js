document.getElementById('btn1').addEventListener('click', () => {
    Toastify({
      text: "Well done",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
        width: "300px",
        height: "80px",
        borderRadius: "30px",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "30px",
      },
      onClick: function () {
        console.log("Toast clicked");
      },
    }).showToast();
});


document.getElementById("btn2").addEventListener("click", () => {
  Toastify({
    text: "Oh snap",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right,rgb(255, 109, 109),rgb(255, 0, 0))",
      width: "300px",
      height: "80px",
      borderRadius: "30px",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "30px",
    },
    onClick: function () {
      console.log("Toast clicked");
    },
  }).showToast();
});



document.getElementById("btn3").addEventListener("click", () => {
  Toastify({
    text: "",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right,rgb(255, 221, 84), orange)",
      width: "300px",
      height: "80px",
      borderRadius: "30px",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "30px",
    },
    onClick: function () {
      console.log("Toast clicked");
    },
  }).showToast();
});