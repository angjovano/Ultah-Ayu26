const openBtn = document.getElementById("openBtn");
const contentSection = document.getElementById("contentSection");
const messageBox = document.getElementById("messageBox");

const message = `
Hallo.. Ponyoo,

Udah lama banget ga panggil ponyo hehe
okee.. aku mau serius bentar..

Hari ini adalah hari yang sangat spesial. Hari di mana dunia diberkahi dengan kehadiranmu. seseorang yang begitu lembut, kuat, dan penuh cinta. Aku bersyukur setiap hari karena Tuhan mempertemukanku dengan kamu.

Selamat ulang tahun, Uyaa.
Terima kasih karena sudah menjadi cahaya di hidupku, teman terbaikku, tempat pulangku, dan calon ibu dari anak-anak kita nanti.. amiiin.

Aku masih ingat pertama kali kita ketemu yang janjian joging bareng wkwkw… sejak saat itu, aku tahu kamu akan jadi bagian terpenting dalam hidupku. Dan hari demi hari berlalu, aku makin yakin, bahwa mencintaimu adalah keputusan terbaik yang pernah aku buat.

Aku tahu perjalanan kita nggak selalu mulus. Tapi aku janji, dalam suka ataupun duka, aku akan tetap di sini. Menggenggam tanganmu, menjaga hatimu, dan mencintaimu dengan seluruh hatiku.

Di ulang tahunmu ini, aku tidak hanya mendoakan kebahagiaan dan kesehatan untukmu… tapi juga berharap aku bisa menjadi pasangan yang selalu kamu banggakan dan cintai.

Kamu pantas mendapatkan cinta yang paling murni, pelukan paling hangat, dan perhatian tanpa batas.. dan semua itu, akan terus aku beri, seumur hidupku.

Aku mencintaimu, lebih dari kata-kata.
Oh iyaa di bawah aku tampilkan rekap foto kita pas main dan jalan-jalan.. ya meskipun ga semua sih wkwkw. cape editingnya kalo semua di masukin, canda yaa wkwkwk

Selamat ulang tahun, Ayuuuu.
Raja Terakhir,
Jopan
`;


function typeText(text, element, speed = 25) {
  let index = 0;
  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
     index++;
      setTimeout(type, speed);
    }
  }
  type();
}

openBtn.addEventListener("click", () => {
  document.querySelector(".hero").classList.add("hidden");
  contentSection.classList.remove("hidden");
  typeText(message, messageBox);

  // Tampilkan foto 1 sampai 20
  const gallery = document.querySelector(".gallery");
  for (let i = 1; i <= 20; i++) {
    const img = document.createElement("img");
    img.src = `Foto${i}.jpg`;
    img.style.animationDelay = `${i * 0.1}s`;
   gallery.appendChild(img);
  }

  // Play music
  document.getElementById("bgMusic").play();
  
  // Bunga jatuh
const canvas = document.getElementById("bungaCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const flowers = [];
const total = 50;

for (let i = 0; i < total; i++) {
  flowers.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * total,
    color: `rgba(255, ${Math.floor(Math.random()*100 + 100)}, ${Math.floor(Math.random()*100 + 100)}, 0.8)`,
    tilt: Math.random() * 10 - 10
  });
}

function drawFlowers() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < total; i++) {
    const f = flowers[i];
    ctx.beginPath();
    ctx.fillStyle = f.color;
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
    ctx.fill();
  }
  updateFlowers();
}

let angle = 0;

function updateFlowers() {
  angle += 0.01;
  for (let i = 0; i < total; i++) {
    const f = flowers[i];
    f.y += Math.cos(angle + f.d) + 1 + f.r / 2;
    f.x += Math.sin(angle) * 2;

    if (f.y > canvas.height || f.x > canvas.width || f.x < 0) {
      flowers[i] = {
        x: Math.random() * canvas.width,
        y: 0,
        r: f.r,
        d: f.d,
        color: f.color,
        tilt: f.tilt
      };
    }
  }
}

setInterval(drawFlowers, 33);

});
