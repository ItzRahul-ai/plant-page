// nav manu
const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('max-h-0');
    mobileMenu.classList.toggle('opacity-0');
    mobileMenu.classList.toggle('max-h-[500px]');
    mobileMenu.classList.toggle('opacity-100');
  });

  // dark mode or lght mide
  const btn = document.getElementById("mode");
  btn.addEventListener("click", ()=> {
    btn.classList.toggle("dark");
  })

  // popup menu
  setTimeout(()=> {
const popup = document.getElementById("popup");
popup.style.display = "block";
  },
   10000
)
// for animation
AOS.init();
