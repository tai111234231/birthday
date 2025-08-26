// Tạo tuyết ❄
function createSnowflake() {
  const snow = document.createElement("div");
  snow.innerText = "❄";
  snow.classList.add("falling");

  // vị trí, kích thước, tốc độ ngẫu nhiên
  snow.style.left = Math.random() * 100 + "vw";
  snow.style.fontSize = Math.random() * 20 + 10 + "px";
  snow.style.color = "white";
  snow.style.opacity = Math.random();

  const duration = Math.random() * 5 + 5;
  snow.style.animation = `fall ${duration}s linear`;

  document.body.appendChild(snow);

  setTimeout(() => snow.remove(), duration * 1000);
}
setInterval(createSnowflake, 200);

// Tạo lát bánh 🎂
function createCake() {
  const cake = document.createElement("img");
  cake.src = "cake.png"; // ảnh lát bánh PNG nền trong suốt
  cake.classList.add("falling");

  cake.style.left = Math.random() * 100 + "vw";
  cake.style.width = Math.random() * 50 + 50 + "px";

  const duration = Math.random() * 5 + 6;
  cake.style.animation = `fall ${duration}s linear`;

  document.body.appendChild(cake);

  setTimeout(() => cake.remove(), duration * 1000);
}
setInterval(createCake, 1500);