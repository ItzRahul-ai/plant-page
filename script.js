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
//   setTimeout(()=> {
// const popup = document.getElementById("register");
// popup.style.display = "block";
//   },
//    10000
// )

// register function
document.getElementById("register").addEventListener("submit",(e)=> {
    e.preventDefault();
const popup = document.getElementById("register");
    // get value
    const name = document.getElementById("name").value; //get name
    const namePrint = document.getElementById("namePrint") //name error print
    const emailPrint = document.getElementById("emailPrint") //email error print
    const passwordPrint = document.getElementById("passwordPrint") //password error print
    const CpasswordPrint = document.getElementById("CpasswordPrint") //confirm password error print
    const email = document.getElementById("email").value; //get email
    const password = document.getElementById("password").value; //get password 
    const Cpassword = document.getElementById("Cpassword").value; //cheak password with previous type password

    // condition for name input
    if(name.length < 4 || name.length > 15) {
      namePrint.innerText = "Please enter a username between 4 to 15 characters.";
      return;
    } else {
        namePrint.innerText = "";
    }
    if(email.length < 1) {
        emailPrint.innerText = "Please enter your email."
        return;
    } else {
        emailPrint.innerText = "";
    }
    if(password.length < 6) {
        passwordPrint.innerText = "Please enter upto '6' degit password."
        return;
    } else {
        passwordPrint.innerText = "";
    }
    if(Cpassword.length < 6) {
        CpasswordPrint.innerText = "Please confirm your password."
        return;
    } else {
        CpasswordPrint.innerText = "";
    }
    if(password != Cpassword) {
        passwordPrint.innerText = "Mismatch password!";
        CpasswordPrint.innerText = "Mismatch password!";
        return;
    } else {
        popup.style.display = "none";
    }
})
// for animation
AOS.init();

// Initial values
let price = 999;
let products = 1;
let finalrate = 999;

let productPrice = document.getElementById("productPrice");
let productCount = document.getElementById("productCount");
let finalPrice = document.getElementById("finalPrice");
let print = document.getElementById("print");

// Initial set
productPrice.innerText = "₹" + price;
productCount.innerText = products;
finalPrice.innerText = "₹" + finalrate;

// Increase product quantity
document.getElementById("increse").addEventListener("click", () => {
    products++; // Increase quantity
    finalrate = price * products; 
    productCount.innerText = products;
    finalPrice.innerText = "₹" + finalrate;
    print.innerText = "";
});

// Decrease product quantity
document.getElementById("reduce").addEventListener("click", () => {
    if (products < 1) { 
        print.innerText = "Insuficent product quantity.";
        
    }else {
        products--;
        finalrate = price * products;
        productCount.innerText = products;
        finalPrice.innerText = "₹" + finalrate;
        print.innerText = "";
    }
});