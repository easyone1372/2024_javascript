const clickLine = (x) => {
  const line = document.querySelector(x);
  line.addEventListener("click", () => {
    const des = line.querySelector(".des");
    des.classList.toggle("gray");
    des.classList.toggle("black");
  });
};

const allMustBlack = () => {};

clickLine(".first");
clickLine(".second");
clickLine(".third");
clickLine(".fourth");
