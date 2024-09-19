let night = document.querySelector("#day_night_switch");
let property = document.querySelector(":root");
let logo = document.querySelector("#logo");
let youtube_icon = document.querySelector("#youtube_icon");
let instagram_icon = document.querySelector("#instagram_icon");
let telegram_icon = document.querySelector("#telegram_icon");
let tiktok_icon = document.querySelector("#tiktok_icon");
let header_box = document.querySelector(".header_box");
let body = document.querySelector("body");

setTimeout(() => {
  header_box.style.width = 0;
}, 3500);

if (localStorage.getItem("theme") && localStorage.getItem("theme") == "light") {
  change_theme("light");
} else if (
  localStorage.getItem("theme") &&
  localStorage.getItem("theme") == "dark"
) {
  change_theme("dark");
} else if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "light");
}

// let unvisibleStart = document.querySelectorAll(".unvisibleStart");
// setTimeout(() => {
//   for (let i of unvisibleStart) {
//     // i.removeAttribute("hidden");
//     console.log(i);
//   }
// }, 1000);

// setTimeout(()=>{}, 1000)

let p = document.querySelector(".resolution");
console.log(window);

p.textContent = `${window.innerWidth} x ${window.innerHeight}`;

night.addEventListener("change", (event) => {
  console.log(event.target.checked);
  if (event.target.checked) {
    change_theme("dark");

    localStorage.setItem("theme", "dark");
  } else {
    change_theme("light");

    localStorage.setItem("theme", "light");
  }
});

function change_theme(theme) {
  if (theme == "light") {
    property.style.setProperty("--main_theme", "white");
    property.style.setProperty("--text_color", "black");
    property.style.setProperty("--border_color", "black");
    property.style.setProperty(
      "--wallpaper",
      `url("../img/wallpaper_light.jpg")`
    );

    logo.src = "./icons/logo(1).svg";
    youtube_icon.setAttribute("fill", "black");
    instagram_icon.setAttribute("fill", "black");
    telegram_icon.setAttribute("fill", "black");
    tiktok_icon.setAttribute("fill", "black");

    night.checked = false;
  } else if (theme == "dark") {
    property.style.setProperty("--main_theme", "black");
    property.style.setProperty("--text_color", "white");
    property.style.setProperty("--border_color", "white");
    property.style.setProperty(
      "--wallpaper",
      `url("../img/wallpaper_dark.jpg")`
    );

    logo.src = "./icons/white_logo_on_dark.svg";
    youtube_icon.setAttribute("fill", "white");
    instagram_icon.setAttribute("fill", "white");
    tiktok_icon.setAttribute("fill", "white");
    telegram_icon.setAttribute("fill", "white");

    night.checked = true;
  }
}
