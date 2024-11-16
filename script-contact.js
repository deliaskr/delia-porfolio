const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();  // Tambahkan tanda kurung di sini
  // Lakukan validasi, jika tidak valid, hentikan pengiriman
  if (!validateForm(form)) return;
  
  // Jika valid, form bisa dikirim (misalnya melalui AJAX atau form.submit())
  console.log('Form is valid and ready to submit!');
});

const validateForm = (form) => {
  let valid = true;

  // Ambil elemen input
  let name = form.querySelector(".name");
  let email = form.querySelector(".email");
  let message = form.querySelector(".message");

  // Validasi Nama
  if (name.value.trim() === "") {
    giveError(name, "Please enter your name");
    valid = false;
  } else {
    clearError(name);
  }

  // Validasi Pesan
  if (message.value.trim() === "") {
    giveError(message, "Please enter your message");
    valid = false;
  } else {
    clearError(message);
  }

  // Validasi Email
  if (!validateEmail(email.value.trim())) {
    giveError(email, "Please enter a valid email address");
    valid = false;
  } else {
    clearError(email);
  }

  return valid; // Kembalikan status validasi
};

// Fungsi untuk validasi email dengan regex
const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

// Fungsi untuk menampilkan pesan error
const giveError = (field, message) => {
  let parentElement = field.parentElement;
  parentElement.classList.add("error");

  // Hapus pesan error sebelumnya jika ada
  let existingError = parentElement.querySelector(".err-msg");
  if (existingError) {
    existingError.remove();
  }

  // Tambahkan pesan error baru
  let error = document.createElement("span");
  error.textContent = message;
  error.classList.add("err-msg");
  parentElement.appendChild(error);
};

// Fungsi untuk menghapus error jika sudah valid
const clearError = (field) => {
  let parentElement = field.parentElement;
  parentElement.classList.remove("error");

  let existingError = parentElement.querySelector(".err-msg");
  if (existingError) {
    existingError.remove();
  }
};