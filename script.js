// Tombol untuk membuka pesan rahasia
const revealButton = document.getElementById("revealBtn");
const hiddenMessage = document.getElementById("hiddenMessage");

revealButton.addEventListener("click", () => {
  hiddenMessage.classList.add("show");
  revealButton.textContent = "Aku harap kamu tersenyum ♡";
  revealButton.disabled = true;
  makeHearts();
});

// Tombol efek hati
document.getElementById("heartBtn").addEventListener("click", makeHearts);

// Membuat hati kecil berterbangan di layar
function makeHearts() {
  const layer = document.getElementById("hearts");

  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("span");
    heart.className = "float-heart";
    heart.textContent = ["♡", "♥", "✧"][Math.floor(Math.random() * 3)];
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = 16 + Math.random() * 24 + "px";
    heart.style.animationDuration = 3 + Math.random() * 2 + "s";
    heart.style.animationDelay = Math.random() * 0.8 + "s";
    layer.appendChild(heart);

    // Hapus elemen setelah animasi selesai agar halaman tetap ringan
    setTimeout(() => heart.remove(), 6000);
  }
}
