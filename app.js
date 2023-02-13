const imgParts = document.querySelectorAll(".img-part");

i = 1;

setInterval(() => {
  setTimeout(() => {
    imgParts.forEach((img) => {
      img.style.backgroundImage = `url(images/bg-${i}.jpg)`;
    });
  }, 1000);
  i++;
  i > 6 && (i = 1);
}, 10000);
