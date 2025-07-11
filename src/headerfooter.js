// Function to create the Header
// Function to create the Header
function createHeader(container) {
  const header = document.createElement("header");
  header.className = "bg-[#E8E8E8] text-black w-full relative";
  header.style.width = "100%";
  header.innerHTML = `
    <div class="container mx-auto px-2 sm:px-4 flex flex-wrap justify-between items-center py-2">
      <div class="logo flex-shrink-0 flex items-center">
        <a href="index.html" aria-label="index.html">  
          <img src="https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/logos/mvkyoqagcwzy4cyb83gj"  alt="Deccan Realty Logo" 
               class="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full object-contain">
        </a>
      </div>
      <ul class="nav-menu hidden md:flex flex-wrap items-center gap-2 md:gap-4 font-bold text-base md:text-lg">
        <li><a href="index.html" aria-label="Home" class="font-medium px-2 py-1 rounded-md transition text-black hover:text-black lg:font-bold whitespace-nowrap">HOME</a></li>
        <li><a href="about.html" aria-label="About" class="font-medium px-2 py-1 rounded-md transition text-black hover:text-[#008a46] lg:font-bold whitespace-nowrap">ABOUT</a></li>
        <li><a href="contact.html" aria-label="Contact" class="font-medium px-2 py-1 rounded-md transition text-black hover:text-[#008a46] lg:font-bold whitespace-nowrap">CONTACT</a></li>
        <li><a href="faq.html" aria-label="FAQ" class="font-medium px-2 py-1 rounded-md transition text-black hover:text-[#008a46] lg:font-bold whitespace-nowrap">FAQ</a></li>
        <li>
          <button id="login-btn" onclick="openLoginModal()" class="text-black bg-transparent border-none font-bold px-2 py-1 rounded-full shadow-none transition-all duration-200 focus:outline-none ml-2 whitespace-nowrap">LOGIN</button>
        </li>
        <li class="group border border-[green] px-3 py-1 rounded-md transition hover:bg-[#008a46] whitespace-nowrap">
          <a href="homeloan.html" 
             aria-label="HomeLoan" 
             class="font-medium text-black group-hover:text-[#ff7b2a] lg:font-bold">
              HOME LOAN
          </a>
        </li>
        <li class="group border border-[green] px-3 py-1 rounded-md transition hover:bg-[#008a46] whitespace-nowrap">
          <button id="list-property-btn" onclick="openSellerSignupModal()" class="text-black font-bold rounded-md px-0 py-0 w-full h-full flex items-center justify-center transition focus:outline-none">
            <span class="mr-1">List Property</span> <span class="text-white font-bold ml-1 px-2 rounded-md bg-green-600">Free</span>
          </button>
        </li>
      </ul>
      <div class="md:hidden flex items-center gap-2">
        <button class="text-2xl text-black mobile-menu-btn z-50">☰</button>
      </div>
    </div>
    <!-- Side drawer overlay -->
    <div class="overlay fixed inset-0 bg-black bg-opacity-50 z-40 hidden"></div>
    <!-- Side drawer menu -->
    <div class="side-drawer fixed top-0 right-0 h-full w-64 max-w-[90vw] bg-[#237f51] z-50 transform translate-x-full transition-transform duration-300 ease-in-out shadow-lg">
      <div class="flex justify-end p-4">
        <button class="drawer-close text-white text-2xl">✕</button>
      </div>
      <ul class="flex flex-col space-y-2 p-4">
        <li class="w-full"><a href="index.html" aria-label="Home" class="block text-base sm:text-lg font-medium py-2 px-3 rounded-md text-white hover:text-green-500 hover:bg-black lg:font-bold whitespace-nowrap">Home</a></li>
        <li class="w-full"><a href="about.html" aria-label="About" class="block text-base sm:text-lg font-medium py-2 px-3 rounded-md text-white hover:text-green-500 hover:bg-black whitespace-nowrap">About</a></li>
        <li class="w-full"><a href="contact.html" aria-label="Contact" class="block text-base sm:text-lg font-medium py-2 px-3 rounded-md text-white hover:text-green-500 hover:bg-black whitespace-nowrap">Contact</a></li>
        <li class="w-full"><a href="faq.html" aria-label="FAQ" class="block text-base sm:text-lg font-medium py-2 px-3 rounded-md text-white hover:text-green-500 hover:bg-black whitespace-nowrap">FAQ</a></li>
        <li class="w-full mt-2">
          <a href="homeloan.html" 
             aria-label="HomeLoan" class="block text-base sm:text-lg font-medium py-2 px-3 border border-white rounded-md text-white hover:text-green-500 hover:bg-black transition whitespace-nowrap">Home Loan</a>
        </li>
        <li class="w-full mt-2">
          <a href="#" class="block text-base sm:text-lg font-medium py-2 px-3 rounded-md text-white hover:text-green-500 hover:bg-black text-left whitespace-nowrap" onclick="openLoginModal()">Login</a>
        </li>
        <li class="w-full">
          <a href="#" class="block text-base sm:text-lg font-medium py-2 px-3 rounded-md text-white hover:text-green-500 hover:bg-black text-left whitespace-nowrap" onclick="openSellerSignupModal()">List Property Free</a>
        </li>
      </ul>
    </div>
  `;

  // Append to the provided container instead of body
  container.innerHTML = ""; // Clear existing content
  container.appendChild(header);

  // Highlight active page
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const desktopLinks = header.querySelectorAll(".nav-menu a");
  const mobileLinks = header.querySelectorAll(".side-drawer a");

  function setActive(link) {
    const li = link.closest("li");

    if (li && li.classList.contains("group")) {
      // For HOME LOAN
      li.classList.add("bg-[#b1923f]", "rounded-md");
      link.classList.add("text-white", "px-3", "py-1");
    } else {
      link.classList.add(
        "bg-[#b1923f]",
        "text-white",
        "rounded-md",
        "px-4",
        "py-2"
      );
    }
  }

  [...desktopLinks, ...mobileLinks].forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath) {
      setActive(link);
    }

    // OPTIONAL: Also highlight on click (for Single Page feel)
    link.addEventListener("click", () => {
      [...desktopLinks, ...mobileLinks].forEach((l) => {
        l.classList.remove(
          "bg-[#b1923f]",
          "text-white",
          "rounded-md",
          "px-2",
          "py-1"
        );
        l.closest("li")?.classList.remove("bg-[#b1923f]", "rounded-md");
      });
      setActive(link);

      // Close drawer when clicking a link
      toggleDrawer(false);
    });
  });

  // Side drawer toggle functionality
  const mobileMenuBtn = header.querySelector(".mobile-menu-btn");
  const sideDrawer = header.querySelector(".side-drawer");
  const overlay = header.querySelector(".overlay");
  const closeBtn = header.querySelector(".drawer-close");

  function toggleDrawer(show) {
    if (show) {
      sideDrawer.classList.remove("translate-x-full");
      overlay.classList.remove("hidden");
      document.body.style.overflow = "hidden"; // Prevent scrolling when drawer is open
      mobileMenuBtn.textContent = "✕";
    } else {
      sideDrawer.classList.add("translate-x-full");
      overlay.classList.add("hidden");
      document.body.style.overflow = "";
      mobileMenuBtn.textContent = "☰";
    }
  }

  mobileMenuBtn.addEventListener("click", () => {
    const isOpen = !sideDrawer.classList.contains("translate-x-full");
    toggleDrawer(!isOpen);
  });

  closeBtn.addEventListener("click", () => {
    toggleDrawer(false);
  });

  overlay.addEventListener("click", () => {
    toggleDrawer(false);
  });

  // Close drawer on window resize if screen becomes larger
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      // md breakpoint in Tailwind
      toggleDrawer(false);
    }
  });

  // Add Login modal open logic for both desktop and mobile nav
  setTimeout(() => {
    // Desktop nav
    const loginBtn = header.querySelector('.nav-menu a[href="#"]');
    if (loginBtn) {
      loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (window.openLoginModal) window.openLoginModal();
      });
    }
    // Mobile nav
    const loginBtnMobile = header.querySelector('.side-drawer a[href="#"]');
    if (loginBtnMobile) {
      loginBtnMobile.addEventListener('click', function(e) {
        e.preventDefault();
        if (window.openLoginModal) window.openLoginModal();
        toggleDrawer(false);
      });
    }
  }, 500);
}
// Function to create the Footer
function createFooter() {
  const footerContainer = document.querySelector("#footer-container");
  if (!footerContainer) return;

  const footer = document.createElement("footer");
  footer.className =
    "bg-black text-white py-6 sm:py-8 px-4 sm:px-6 md:px-8 lg:px-12";
  footer.innerHTML = `
    <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center font-semibold md:text-left">
      <div class="mb-8 sm:mb-10 px-4 sm:px-6 md:px-8">
        <h3 class="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">Office</h3>
      <p class="flex items-center justify-center md:justify-start gap-3 sm:gap-4 mb-4 text-xs sm:text-sm md:text-base">
    <i class="fas fa-map-marker-alt text-[25px] sm:text-xl md:text-2xl "></i> 
    <a href="https://www.google.com/maps/search/?api=1&query=No+56%2F6,+6th+C+Main+Road,+4th+Block+East,+Jayanagar+Bangalore-560041" 
       target="_blank" 
       aria-label="View location on Google Maps"
       class="not-italic inline-block">
        No 56/6, 6th C Main Road<br> 4th Block, East Jayanagar <br> Bangalore-560041
    </a>
</p>


       <p class="flex items-center justify-center md:justify-start gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">
    <a href="https://api.whatsapp.com/send?phone=917303062845" target="_blank" 
       aria-label="Chat on WhatsApp" class="flex items-center gap-2">
        <i class="fas fa-phone text-lg sm:text-xl md:text-2xl"></i> 
        +91 73030 62845
    </a>
</p>

       <p class="flex items-center justify-center md:justify-start gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">
    <a href="https://api.whatsapp.com/send?phone=917718361550" target="_blank" 
       aria-label="Chat on WhatsApp" class="flex items-center gap-2">
        <i class="fa-brands fa-whatsapp text-lg sm:text-xl md:text-2xl"></i> 
        +91 97183 61550
    </a>
</p>
       <p class="flex items-center justify-center md:justify-start gap-3 sm:gap-4 mb-4 text-xs sm:text-sm md:text-base">
    <a href="mailto:info@deccanrealty.com" aria-label="Send an email to info@deccanrealty.com" 
       class="flex items-center gap-2">
        <i class="fas fa-envelope text-lg sm:text-xl md:text-2xl"></i> 
        info@deccanrealty.com
    </a>
</p>
      </div>
      <div class="mb-8 sm:mb-0 px-4 sm:px-6 md:px-8">
        <h3 class="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Quick Links</h3>
        <ul class="space-y-3 sm:space-y-4 font-semibold">
          <li><a href="index.html" aria-label="Home" class="text-white hover:text-gray-400 transition text-xs sm:text-sm md:text-base">Home</a></li>
          <li><a href="about.html" aria-label="About"  class="text-white hover:text-gray-400 transition text-xs sm:text-sm md:text-base">About</a></li>
          <li><a href="contact.html"  aria-label="Contact" class="text-white hover:text-gray-400 transition text-xs sm:text-sm md:text-base">Contact</a></li>
          <li><a href="faq.html" aria-label="FAQ" class="text-white hover:text-gray-400 transition text-xs sm:text-sm md:text-base">FAQ</a></li>
          <li><a href="terms&condition.html" target="_blank" aria-label="Terms&condition" class=" text-white hover:text-gray-400 transition text-xs sm:text-sm md:text-base">Terms & Conditions</a></li>
          <li><a href="privacypolicy.html" target="_blank" aria-label="Privacypolicy" class="text-white hover:text-gray-400 transition text-xs sm:text-sm md:text-base">Privacy Policy</a></li>
        </ul>
      </div>
      <div class="flex justify-center px-4 sm:px-6 md:px-8">
        <div class="text-center">
          <div class="mb-8 sm:mb-10">
            <a href="index.html" class="logo-link" aria-label="imglogo">
              <img src="https://res.cloudinary.com/dzauu64ta/image/upload/v1742815527/DECCAN_REALTY_WHITE_LOGO_tqdoxy.png" alt="Deccan Realty Logo" class="w-28 sm:w-32 md:w-40 lg:w-48 mx-auto">
            </a>
            <div class="flex justify-center space-x-3 sm:space-x-4 mt-4">
              <a href="https://www.youtube.com/@deccan-realty" target="_blank" aria-label="Visit our YouTube page"  class="text-white hover:text-gray-300">
                <div class="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white">
                  <i class="text-red-600 fab fa-youtube text-lg sm:text-xl md:text-2xl" aria-hidden="true"></i>
                  <span class="sr-only">YouTube</span>
                </div>
              </a>
              <a href="https://www.facebook.com/deccanrealty.in/" target="_blank"   aria-label="Visit our Facebook page" class="text-white hover:text-gray-300">
                <div class="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white">
                  <i class=" text-blue-600 fab fa-facebook-f text-lg sm:text-xl md:text-2xl" aria-hidden="true"></i>
                  <span class="sr-only">Facebook</span>
                </div>
              </a>
              <a href="https://www.linkedin.com/company/deccan-realty/" target="_blank" aria-label="Visit our LinkedIn page" class="text-white hover:text-gray-300">
                <div class="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white">
                  <i class=" text-blue-600 fab fa-linkedin-in text-lg sm:text-xl md:text-2xl" aria-hidden="true"></i>
                  <span class="sr-only">LinkedIn</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black text-center font-semibold text-white text-xs sm:text-sm md:text-base lg:text-lg">
      Copyright ©2024-2025 DeccanRealty.com All rights reserved.
    </div>
  `;

  footerContainer.innerHTML = "";
  footerContainer.appendChild(footer);
}

// Seller Signup Modal Open Logic
window.openSellerSignupModal = function() {
  var userAuthModal = document.getElementById('user-auth-modal');
  var signupModal = document.getElementById('signup-modal');
  var loginModal = document.getElementById('login-modal');
  if (userAuthModal && signupModal) {
    userAuthModal.style.display = 'flex';
    signupModal.style.display = 'block';
    if (loginModal) loginModal.style.display = 'none';
    var roleInput = document.getElementById('role-signup');
    if (roleInput) {
      roleInput.value = 'Seller';
    }
    // Set Seller-specific content
    var title = document.getElementById('signup-modal-title');
    var desc = document.getElementById('signup-modal-desc');
    if (title) title.textContent = "Fill Seller's Details.";
    if (desc) desc.innerHTML = '';
    window.sellerSignup = true;
  }
};

// Patch signup logic to always use Seller/Buyer role and update modal content
if (window.signup) {
  const originalSignup = window.signup;
  window.signup = async function(event) {
    var roleInput = document.getElementById('role-signup');
    var title = document.getElementById('signup-modal-title');
    var desc = document.getElementById('signup-modal-desc');
    if (window.sellerSignup && roleInput) {
      roleInput.value = 'Seller';
      if (title) title.textContent = "Fill Seller's Details.";
      if (desc) desc.innerHTML = '';
    } else if (roleInput) {
      roleInput.value = 'Buyer';
      if (title) title.textContent = 'Signup as Buyer';
      if (desc) desc.innerHTML = '';
    }
    await originalSignup.apply(this, arguments);
    window.sellerSignup = false;
  };
}

// Load components when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.querySelector("#header-container");
  if (headerContainer) {
    createHeader(headerContainer);
  }
  createFooter();

  // Set default Buyer content for signup modal
  var title = document.getElementById('signup-modal-title');
  var desc = document.getElementById('signup-modal-desc');
  if (title) title.textContent = 'Signup as Buyer';
  if (desc) desc.innerHTML = '';
});
