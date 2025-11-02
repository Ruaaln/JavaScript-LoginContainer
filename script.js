const inputs = document.querySelectorAll(".Input");
const loginBtn = document.getElementById("LoginBtn");

inputs.forEach(input => {
  const title = input.previousElementSibling.querySelector("b");

  input.addEventListener("focus", () => {
    title.style.transform = "translateY(0) translateX(3px)";
    title.style.fontSize = "12px";
    title.style.color = "#e0e0e0ff";
  });

  input.addEventListener("blur", () => {
    if (input.value.trim() === "") {
      title.style.transform = "translateY(19px) translateX(5px)";
      title.style.fontSize = "16px";
      title.style.color = "#555";
    }
    checkFormValidity();
  });

  input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
      title.style.transform = "translateY(0) translateX(3px)";
      title.style.fontSize = "12px";

      if (title.textContent === "Name") {
        if (input.value.length < 4) {
          title.style.color = "red";
        } else {
          title.style.color = "#007bff";
        }
      }

      if (title.textContent === "Email") {
        checkEmail(input, title);
      }
    }
    checkFormValidity();
  });
});

function checkEmail(input, title) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(input.value)) {
    title.style.color = "red";
  } else {
    title.style.color = "#007bff";
  }
}

// bütün input-ları yoxlayıb düyməni aktiv/deaktiv edir
function checkFormValidity() {
  let isValid = true;

  inputs.forEach(input => {
    const title = input.previousElementSibling.querySelector("b");
    const value = input.value.trim();

    if (title.textContent === "Name" && value.length < 4) isValid = false;
    if (title.textContent === "Email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) isValid = false;
    }
    if (title.textContent === "Password" && value.length < 1) isValid = false;
  });

  if (isValid) {
    loginBtn.style.opacity = "1";
    loginBtn.style.color = "black";
    loginBtn.style.pointerEvents = "auto";
    return true
  } else {
      loginBtn.style.opacity = "0.5";
      loginBtn.style.color = "#444444ff";
      loginBtn.style.cursor = "help"
      return false;
  }
}   


function SingUp() {
    alert("Bu funksiya isdifade olunmur!!")
}

function SingIn() {
    if (checkFormValidity()){
        alert("Uğurlu giriş")
    }
    else{
        alert("Giriş etmey üçün əvvəl melumatları doldur!")
        document.getElementById("InputName").focus()
    }
}



// səhifə yüklənəndə də yoxla
checkFormValidity();
