document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Form gönderimini engelle
  var textInput = document.getElementById("textInput").value;
  var errorText = document.getElementById("errorText");
  var outputList = document.getElementById("outputList");

  if (textInput.trim() === "") {
    errorText.textContent = "Metin girişi boş olamaz!";
  } else {
    errorText.textContent = ""; // Hata mesajını temizlemek

    // Girilen yeni metni ekran da liste olarak göster
    var listItem = document.createElement("li");
    listItem.innerHTML = `<div style="display: flex; justify-content: space-between">
    <span>${textInput}</span>
    <button type="button" class="close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;

    // Çarpı butonuna tıklama işlemi ekleyin
    listItem.querySelector(".close").addEventListener("click", function () {
      outputList.removeChild(listItem); // Liste ögesini sil
    });

    // Yeni liste ögesini ekleyin
    outputList.appendChild(listItem);
  }

  document.getElementById("textInput").value = "";
});
// Tüm "close" düğmelerini seç
const closeButtons = document.querySelectorAll(".close");

// Her "close" düğmesine tıklama olayını dinle
closeButtons.forEach(function (closeButton) {
  closeButton.addEventListener("click", function () {
    const listItem = closeButton.parentElement; // "close" düğmesinin üst öğesinin üst öğesini (li) al
    listItem.remove(); // Öğeyi kaldır
  });
});
