const hmctoken ='e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac'
class EnquiryForm {
  constructor() {
    this.elements = this.createForm();
    this.initializeEvents();
  }

  createForm() {
    const formContainer = document.createElement("div");
    formContainer.id = "enquiryOverlay";
    formContainer.className =
      "hidden fixed inset-0 bg-black/50 backdrop-blur z-50 flex items-center justify-center";

    formContainer.innerHTML = `
    <style>
   #enquiryForm input::placeholder,#enquiryForm textarea::placeholder{
   color: #BEBEBE;  
      }
    </style>
      <div id="enquiryModal" class="bg-[#55420d95] w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 max-w-lg p-4 sm:p-6 rounded-lg relative transform -translate-y-full opacity-0 transition-all duration-500 ease-in-out">
        <span id="closeEnquiryBtn" class="absolute top-2 right-2 text-white text-2xl cursor-pointer hover:text-gray-300">×</span>
        <h2 class="text-white text-lg sm:text-xl md:text-2xl font-medium text-center mb-5">Fill Your Enquiry Here</h2>
      <form id="enquiryForm" class="flex flex-col p-3 gap-6 sm:gap-6">
  <div class="relative flex flex-col gap-1">
  <label for="enquiryName" class="text-white text-sm sm:text-base font-medium">Your Name</label>
    <input id="enquiryName" type="text" placeholder="John Doe" class="p-2 sm:p-3 rounded-md  text-gray-800 bg-white w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500">
    <p id="enquiryName-error" class="text-red-400 text-xs sm:text-sm hidden min-h-[16px]">Please enter a valid name</p>
  </div>

  <div class="relative flex flex-col gap-1">
  <label for="enquiryName" class="text-white text-sm sm:text-base font-medium">Your Phone</label>
    <input id="enquiryPhone" type="tel" placeholder="1234567890" maxlength="10" class="p-2 sm:p-3 rounded-md text-gray-800 bg-white w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500">
    <p id="enquiryPhone-error" class="text-red-400 text-xs sm:text-sm hidden min-h-[16px]">Please enter a 10-digit mobile number</p>
  </div>

  <div class="relative flex flex-col gap-1">
 <label for="enquiryName" class="text-white text-sm sm:text-base font-medium">Your Email</label>
    <input id="enquiryEmail" type="email" placeholder="john@example.com" class="p-2 sm:p-3 rounded-md text-gray-800 bg-white w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500">
    <p id="enquiryEmail-error" class="text-red-400 text-xs sm:text-sm hidden min-h-[16px]">Please enter a valid email</p>
  </div>

  <div class="relative flex flex-col gap-1">
   <label for="enquiryName" class="text-white text-sm sm:text-base font-medium">Your Message</label>
    <textarea id="enquiryMessage" placeholder="Type your message here..." class="p-2 sm:p-3 rounded-md text-gray-800 bg-white w-full h-20 sm:h-24 resize-none text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
    <p id="enquiryMessage-error" class="text-red-400 text-xs sm:text-sm hidden min-h-[16px]">Message is required</p>
  </div>

  <!-- reCAPTCHA & Submit -->
  <div class="flex flex-col lg:flex-row lg:items-center lg:gap-4 mt-4 ">
    <!-- reCAPTCHA -->
    <div class="flex flex-col justify-center items-center gap-1">
      <div class="g-recaptcha" data-sitekey="6LeCZAErAAAAADhoXltw5EyaYL9tP1f2g42i_aej"></div>
      <small id="recaptcha-req-getintouch" class="hidden text-red-500 text-xs text-center block w-full mt-1">Please verify the reCAPTCHA</small>
    </div>

    <!-- Submit -->
    <div class="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto mt-4 lg:mt-0">
      <p id="enquiryStatus" class="text-white text-xs sm:text-sm"></p>
      <button type="submit" id="submitBtn" class="bg-white cursor-pointer text-gray-800 border border-gray-300 font-medium rounded-md hover:bg-gray-100 transition text-sm sm:text-base px-4 py-3 w-full sm:w-auto lg:h-[78px] flex items-center justify-center">
        <span id="submitBtnText">Submit</span>
        <svg id="submitBtnSpinner" class="hidden animate-spin ml-2 h-4 w-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </button>
    </div>
  </div>
</form>

      </div>
      <div id="loaderOverlay" class="hidden fixed inset-0 bg-black/70 z-60 flex items-center justify-center">
        <div class="loader border-t-4 border-white rounded-full w-12 h-12 animate-spin"></div>
      </div>
      <div id="successPopup" class="hidden fixed inset-0 bg-black/50 z-60 flex items-center justify-center">
        <div class="bg-white p-6 rounded-lg text-center max-w-md mx-4">
          <div class="mb-4">
            <svg class="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-green-600 mb-2">Thank You!</h3>
          <p class="text-gray-700 mb-2">Your enquiry has been submitted successfully.</p>
          <p class="text-sm text-gray-500 mb-4">Our team will get back to you shortly.</p>
          <button id="closeSuccessBtn" class="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">OK</button>
        </div>
      </div>
    `;

    const recaptchaScript = document.createElement("script");
    recaptchaScript.src = "https://www.google.com/recaptcha/api.js";
    recaptchaScript.async = true;
    recaptchaScript.defer = true;
    document.body.appendChild(recaptchaScript);

    document.body.appendChild(formContainer);
    return {
      overlay: formContainer,
      modal: formContainer.querySelector("#enquiryModal"),
      form: formContainer.querySelector("#enquiryForm"),
      closeBtn: formContainer.querySelector("#closeEnquiryBtn"),
      loader: formContainer.querySelector("#loaderOverlay"),
      successPopup: formContainer.querySelector("#successPopup"),
      closeSuccessBtn: formContainer.querySelector("#closeSuccessBtn"),
      status: formContainer.querySelector("#enquiryStatus"),
      recaptchaError: formContainer.querySelector("#recaptcha-req-getintouch"),
      submitBtn: formContainer.querySelector("#submitBtn"),
      submitBtnText: formContainer.querySelector("#submitBtnText"),
      submitBtnSpinner: formContainer.querySelector("#submitBtnSpinner"),
      inputs: {
        name: formContainer.querySelector("#enquiryName"),
        phone: formContainer.querySelector("#enquiryPhone"),
        email: formContainer.querySelector("#enquiryEmail"),
        message: formContainer.querySelector("#enquiryMessage"),
      },
    };
  }

  openForm(context = {}) {
    const { propertyName, serviceTitle } = context;

    if (propertyName) {
      localStorage.setItem("enquiryContext", JSON.stringify({ propertyName }));
      console.log("Stored in localStorage:", { propertyName });
    } else if (serviceTitle) {
      localStorage.setItem("enquiryContext", JSON.stringify({ serviceTitle }));
      console.log("Stored in localStorage:", { serviceTitle });
    } else {
      localStorage.removeItem("enquiryContext");
      console.log("No context stored in localStorage");
    }

    this.elements.overlay.classList.remove("hidden");
    this.resetForm();
    document.body.classList.add("overflow-hidden");
    setTimeout(
      () => this.elements.modal.classList.add("translate-y-0", "opacity-100"),
      10
    );
  }

  closeForm() {
    this.elements.modal.classList.remove("translate-y-0", "opacity-100");
    this.elements.modal.classList.add("-translate-y-full", "opacity-0");
    setTimeout(() => {
      this.elements.overlay.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    }, 500);
  }

  resetForm() {
    this.elements.form.reset();
    this.resetErrors();
  }

  showError(input, message) {
   
    input.classList.add("border-red-500", "placeholder-red-400");
    input.style.color = "#f87171";
    input.nextElementSibling.classList.remove("hidden");
  }

  resetErrors() {
    Object.values(this.elements.inputs).forEach((input) => {
      // Set default placeholders explicitly
     const placeholderMap = {
       enquiryName: "John Doe",
       enquiryPhone: "1234567890",
       enquiryEmail: "john@example.com",
       enquiryMessage: "Type your message here...",
     };

    input.placeholder = placeholderMap[input.id];
      input.classList.remove("border-red-500", "placeholder-red-400");
      input.style.color = "inherit";
      input.nextElementSibling.classList.add("hidden");
    });
    this.elements.status.textContent = "";
    this.elements.status.classList.remove("text-red-400");
    if (this.elements.recaptchaError) {
      this.elements.recaptchaError.classList.add("hidden");
    }
  }

  validateName(name) {
    // Allow only letters and spaces, minimum 2 characters
    return /^[A-Za-z\s]{2,}$/.test(name);
  }

  validatePhone(phone) {
    // Require exactly 10 digits
    return /^\d{10}$/.test(phone);
  }

  validateEmail(email) {
    // Standard email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  getDynamicSubject() {
    const context = JSON.parse(localStorage.getItem("enquiryContext") || "{}");
    const { propertyName, serviceTitle } = context;

    const serviceMessages = {
      "Buy Your Dream Home": "BUYER",
      "Sell Your Property with Ease": "SELLER", 
      "Find Your Perfect Rental Home": "TENANT",
      "Invest in Prime Commercial Properties": "INVESTOR",
      "Ask More properties": "BUYER",
      "Website Enquiry": "GENERAL"
    };

    console.log("Retrieved from localStorage for subject:", context);

    if (propertyName) {
      return "BUYER"; // Property enquiries are typically from buyers
    }
    if (serviceTitle) {
      return serviceMessages[serviceTitle] || "GENERAL";
    }
    return "GENERAL";
  }

  async submitForm() {
    const { name, phone, email, message } = this.elements.inputs;
    const values = {
      name: name.value.trim(),
      phone: phone.value.trim(),
      email: email.value.trim(),
      message: message.value.trim(),
    };

    this.resetErrors();

    let isValid = true;

    // Name validation: letters only, min 2 characters
    if (!this.validateName(values.name)) {
      this.showError(
        name,
        "Please enter a valid name (letters only, min 2 characters)"
      );
      isValid = false;
    }

    // Phone validation: exactly 10 digits
    if (!this.validatePhone(values.phone)) {
      this.showError(phone, "Please enter a 10-digit mobile number");
      isValid = false;
    }

    // Email validation: optional, but must be valid if provided
    if (values.email && !this.validateEmail(values.email)) {
      this.showError(email, "Please enter a valid email");
      isValid = false;
    }

    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
      this.elements.recaptchaError.classList.remove("hidden");
      isValid = false;
    }

    if (!isValid) {
      this.elements.status.textContent =
        "Please fill required fields correctly";
      this.elements.status.classList.add("text-red-400 ");
      return;
    }

    this.elements.submitBtn.disabled = true;
    this.elements.submitBtnText.textContent = "Submitting...";
    this.elements.submitBtnSpinner.classList.remove("hidden");
    this.elements.loader.classList.remove("hidden");

    const payload = {
      subject: this.getDynamicSubject(),
      name: values.name,
      email: values.email || "No email provided",
      phone: values.phone,
      message: values.message || "No message provided",
      domain: "deccanrealty.com"
    };

    console.log("Submitting payload:", payload);

    try {
      const response = await fetch(
        "https://dncrnewapi-bmbfb6f6awd8b0bd.westindia-01.azurewebsites.net/properties/GetInTouch",
        {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",  
            'Authorization': 'Bearer ' + hmctoken 
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API Error:', errorData);
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.message || 'Unknown error'}`);
      }

      const responseData = await response.json();
      console.log("API Response:", responseData);

      if (responseData.success) {
        this.elements.form.reset();
        grecaptcha.reset();
        this.elements.successPopup.classList.remove("hidden");
        localStorage.removeItem("enquiryContext");
        console.log("Cleared localStorage after successful submission");
      } else {
        throw new Error(responseData.message || "Submission failed");
      }
    } catch (error) {
      let errorMessage = "Failed to submit enquiry. Please try again.";
      
      // Check for specific error types
      if (error.message.includes('401') || error.message.toLowerCase().includes('unauthorized')) {
        errorMessage = "Authentication failed. Please try again later.";
      } else if (error.message.includes('400')) {
        errorMessage = "Please check your information and try again.";
      }
      
      this.elements.status.textContent = errorMessage;
      this.elements.status.classList.add("text-red-400");
      console.error("Error:", error);
    } finally {
      this.elements.loader.classList.add("hidden");
      this.elements.submitBtn.disabled = false;
      this.elements.submitBtnText.textContent = "Submit";
      this.elements.submitBtnSpinner.classList.add("hidden");
    }
  }

  initializeEvents() {
    this.elements.closeBtn.addEventListener("click", () => this.closeForm());
    this.elements.closeSuccessBtn.addEventListener("click", () => {
      this.elements.successPopup.classList.add("hidden");
      this.closeForm();
    });
    this.elements.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.submitForm();
    });

    // Restrict name to letters and spaces
    this.elements.inputs.name.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
      if (e.target.value.trim()) {
        e.target.style.color = "#1f2937";
        e.target.classList.remove("border-red-500");
        e.target.nextElementSibling.classList.add("hidden");
      }
    });

    // Restrict phone to 10 digits
    this.elements.inputs.phone.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
      if (e.target.value.trim()) {
        e.target.style.color = "#1f2937";
        e.target.classList.remove("border-red-500");
        e.target.nextElementSibling.classList.add("hidden");
      }
    });

    // Real-time feedback for email
    this.elements.inputs.email.addEventListener("input", (e) => {
      if (e.target.value.trim()) {
        e.target.style.color = "#1f2937";
        e.target.classList.remove("border-red-500");
        e.target.nextElementSibling.classList.add("hidden");
      }
    });

    this.elements.inputs.message.addEventListener("input", (e) => {
      if (e.target.value.trim()) {
        e.target.style.color = "#1f2937";
        e.target.classList.remove("border-red-500");
        e.target.nextElementSibling.classList.add("hidden");
      }
    });
  }
}

const enquiryForm = new EnquiryForm();
window.openEnquiryForm = (context = {}) => enquiryForm.openForm(context);
// window.openEnquiryForm = () => enquiryForm.openForm();

const enquirybtn = document.getElementsByClassName("_propname");

Array.from(enquirybtn).forEach((btn) => {
  btn.addEventListener("click", function () {
    const obj = {
      serviceTitle:
        this.parentElement.previousElementSibling.children[0].innerText,
    };
    localStorage.setItem("enquiryContext", JSON.stringify(obj));
  });
});

//  moreinfobtn
const moreinfobtn = document.getElementById("moreinfobtn");
if (moreinfobtn) {
  moreinfobtn.addEventListener("click", function () {
    const obj = {
      serviceTitle: "Ask More properties",
    };
    localStorage.setItem("enquiryContext", JSON.stringify(obj));
  });
}

// contactus btn

const contactusbtn = document.getElementById("contactwebenquirybtn");
if (contactusbtn) {
  contactusbtn.addEventListener("click", function () {
    const obj = {
      serviceTitle: "Website Enquiry",
    };
    localStorage.setItem("enquiryContext", JSON.stringify(obj));
  });
}
