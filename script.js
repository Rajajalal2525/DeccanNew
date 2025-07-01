// Property data - primary listings
const properties = [
  {
    imageURL: {
      src: "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/Trending/nf5fbl8k6d28y6wfnx0r",
      alt: "Modern House",
    },
    propertyName: "Godrej Lakeside Orchard",
    priceRange: "₹ 1.09 Cr - 3.12 Cr.",
    location: "Sarjapur Road, South Bangalore",
    pricePerSqFt: "₹ 11.63K - ₹ 33.81K /Sq.Ft.",
    sizes: "(Super Area) 323 - 2679 Sq.Ft.",
    possessionDate: "Possession Starts Jan 2030",
    configurations:
      "2BHK, 3BHK, 3.5BHK, 4BHK, 4.5BHK Apartment & Studio Apartments",
    propertyDescription: "",
  },
  {
    imageURL: {
      src: "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/Trending/e449n5522ehtq3dqpmx2",
      alt: "Modern House",
    },
    propertyName: "Prestige Pine Forest",
    priceRange: "₹ 3.76 Cr - 3.89 Cr.",
    location: "Whitefield, East Bangalore",
    pricePerSqFt: "₹10.94K - ₹14.351K /Sq.Ft.",
    sizes: "(Super Area) 2621 - 3556 Sq.Ft.",
    possessionDate: "Possession Starts Dec 2028",
    configurations: "3BHK, 4BHK, Apartments Configuration",
    propertyDescription: "",
  },
  {
    imageURL: {
      src: "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/Trending/ruw9ixq1cf46glf7lcud",
      alt: "Luxury Villa",
    },
    propertyName: "Birla Evara",
    priceRange: "₹71.0 L - 3.16 Cr",
    location: "Sarjapur Road, Bangalore",
    pricePerSqFt: "₹14.98 K - 17.96 K/sq.ft",
    sizes: "(Super Area) 474 - 1759 sq.ft",
    possessionDate: "Possession Starts Dec, 2031",
    configurations: "1BHK, 2BHK, 3BHK, 4BHK Apartments & Studio Apartments",
    propertyDescription: "",
  },
  {
    imageURL: {
      src: "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/Trending/j9rir2bifjdtoquql0pf",
      alt: "Modern Apartment",
    },
    propertyName: "Nambiar District 25",
    priceRange: "₹ 1.44 Cr - 3.0 Cr.",
    location: "Sarjapur Road, Bangalore",
    pricePerSqFt: "₹ 12 k/sq.ft",
    sizes: "(Super Area) 1200 - 2500 Sq.Ft.",
    possessionDate: "Possession Starts Jan 2030",
    configurations: "2BHK, 3BHK, 4BHK, Apartments Configuration",
    propertyDescription: "",
  },
];

// Services data
const services = [
  {
    imageURL: {
      src: "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/Featured/kzwwgujgkyuxoq6gthj6",
      alt: "Buy Service",
    },
    serviceTitle: "Buy Your Dream Home",
    serviceAddress:
      "Looking for a home in Bangalore? DeccanRealty.com offers the best residential listings with exclusive features and immersive video experiences. Start your search today!",
  },
  {
    imageURL: {
      src: "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/Featured/zegxw172eer5s3qupxcq",
      alt: "Sell Service",
    },
    serviceTitle: "Sell Your Property with Ease",
    serviceAddress:
      "Looking for the right buyer? DeccanRealty.com simplifies the selling process, ensuring a smooth and stress-free experience. Trust us to find the perfect buyer and support you every step of the way!",
  },
  {
    imageURL: {
      src: "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/Featured/bpoocf190welnpywsvy1",
      alt: "Rent Service",
    },
    serviceTitle: "Find Your Perfect Rental Home",
    serviceAddress:
      "Looking to rent a home in Bangalore? DeccanRealty.com offers top-quality, ready-to-move-in apartments for a hassle-free living experience. Let us help you find the perfect place!",
  },
  {
    imageURL: {
      src: "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/Featured/kpggvi3ixke4enyfcmxf",
      alt: "Buy Service",
    },
    serviceTitle: "Invest in Prime Commercial Properties",
    serviceAddress:
      "Looking for rental income or short-term investment opportunities? DeccanRealty.com offers premium, ready-to-move-in commercial properties in Bangalore for a seamless investment and leasing experience",
  },
];

// Resale properties data
const resaleProperties = [
  {
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/sqiktbmv5o03fvnqbck7",
    altText: "Modern Red Building",
    name: "Godrej Splendour",
    description:
      "Godrej Splendour, located in the heart of<span class='font-bold'> Whitefield, Bangalore,</span> offers a splendid lifestyle with unmatched comfort and convenience.<span class='font-bold'> Price on Request </span>onwards, this <span class='font-bold'> 2 BHK </span> residence is designed to provide a perfect blend of luxury and connectivity. The project is set for possession in September 2027 and is strategically situated just a short drive from renowned IT hubs, top schools, and prestigious colleges. With Godrej Splendour, experience modern living in one of Bangalore's most sought-after localities.",
  },
  {
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/ResalePropertyimg/qw0cnoas4nllfnms7lzo",
    altText: "Birla Tisya",
    name: "Birla Tisya",
    description:
      "Birla Tisya, located in the premium locale of <span class='font-bold'>Rajajinagar, Bangalore,</span> redefines luxury high-rise living with elegant <span class='font-bold'> 3 & 4 BHK apartments.</span> With <span class='font-bold'> Price on Request,</span> this under-construction project offers thoughtfully curated amenities for an elevated lifestyle.<span class='font-bold'> Possession begins December 2026 onwards,</span> blending modern comfort with prime connectivity. Discover a life of sophistication and convenience at Birla Tisya, where every detail is crafted to perfection.",
  },
  {
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/cvybg1l5a0oyctseohsr",
    altText: "White Building",
    name: "Prestige City Avalon Park",
    description:
      "Prestige City Avalon Park offers <span class='font-bold'> 1, 2, 3, and 4 BHK apartments </span> with <span class='font-bold'> Price on Request.</span> Developed by the renowned Prestige Group, known for its innovation and excellence, the project ensures premium living with thoughtfully designed homes. With a diverse real estate portfolio, Prestige Group has completed 300+ projects across residential, commercial, and hospitality sectors, making it a trusted name in the industry.",
  },
  {
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/ResalePropertyimg/tzrpse4gevzzkqdsjfm2",
    altText: "Prestiage City Eden Park",
    name: "Prestige City Eden Park",
    description:
      "Prestige Eden Park at The Prestige City, Sarjapur, offers smartly designed <span class='font-bold'>1 & 2 BHK apartments </span> across <span class='font-bold'>9.7 acres.</span>  With  <span class='font-bold>Price on Request</span> this IGBC pre-certified project combines sustainable living with modern design. Homes feature <span class='font-bold'>spacious layouts, three balconies, and ample natural light.</span> Located in a well-connected neighborhood with excellent social infrastructure, Eden Park delivers comfort, style, and everyday convenience.",
  },
  {
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/ResalePropertyimg/rckt1yxcilk56kjggvn0",
    altText: "White Building",
    name: "Sobha Royal Pavilion",
    description:
      "Sobha Royal Pavilion – Rajasthan-themed luxury apartments in <span class='font-bold'> Hadosiddapura, Sarjapur Road, Bangalore. Offering 2, 3 & 4 BHK homes </span> ranging from <span class='font-bold'>1300 to 2232.2 sq. ft.,</span> starting from  <span class='font-bold'>Price on Request.</span> A masterpiece of Rajput grandeur, SOBHA Royal Pavilion blends Rajasthani architectural brilliance with modern cosmopolitan elegance. Designed to reflect royal palatial living, this exquisite community offers world-class amenities, timeless luxury, and unmatched comfort, creating a lifestyle of sophistication and opulence.",
  },

  {
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/jsnhv0q4rlcaxuxdqz1f",
    altText: "Colorful Residential Building",
    name: "Godrej Park Retreat",
    description:
      "Godrej Park Retreat, located on <span class='font-bold'>Sarjapur Road, Bangalore,</span> offers a lifestyle that goes beyond expectations. This <span class='font-bold'>1 BHK</span>  residence comes with a <span class='font-bold'> Price on Request </span> clubhouse and over 50 lifestyle amenities, ensuring a luxurious living experience. With possession in June 2028, the project provides seamless connectivity and easy accessibility, keeping you well-connected to key destinations. Price available on request.",
  },

  {
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/v4jrbibwzb30e34ue7l5",
    altText: "Modern Apartment Building",
    name: "Godrej 24",
    description:
      "Godrej 24 Bangalore, located on <span class='font-bold'>Sarjapur Road, Bangalore,</span>  is designed for a 24-hour lifestyle, offering round-the-clock conveniences. With seamless connectivity to Whitefield, Electronic City, and major IT hubs, this prime location is a hotspot for professionals and investors. The area enjoys strong residential demand, enhanced by the upcoming Metro extension, new flyovers, Outer Ring Road, and Peripheral Ring Road, making it a highly sought-after investment destination. <span class='font-bold'>Price on request</span>  for interested buyers and investors.",
  },

  {
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/i1gba3ykzhaswgeqpt3v",
    altText: "Colorful Residential Building",
    name: "Ahad Serenity",
    description:
      "Ahad Serenity, <span class='font-bold'>Sarjapur Road – Price on Request for 1, 2, 3 BHK Ready-to-Move Apartments.</span> Spanning 8 acres with 85% open space, this <span class='font-bold'> gated community</span> offers modern homes with <span class='font-bold'>vitrified & wooden flooring, premium fittings, and modular kitchens.</span>  Spanning 8 acres with 85% open space, this gated community offers modern homes with vitrified & wooden flooring, premium fittings, and modular kitchens.",
  },
  {
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/zxsxo88cb6vkr6zs9evj",
    altText: "Modern Red Building",
    name: "Confident Orion",
    description:
      "A ready-to-move <span class='font-bold'>3BHK duplex</span> in Confident Orion, <span class='font-bold'>Sarjapur Road, South Bangalore,</span> with  <span class='font-bold'>Price on Request</span> offers <span class='font-bold'>1800 sq. ft.</span> of premium living space. Featuring 3 bedrooms, <span class='font-bold'>3 bathrooms, 3+ balconies, a servant room, and an attached backyard garden, this fully furnished home includes a modular kitchen, wardrobes, marble flooring, geysers, and Jacuzzi.</span>",
  },

  {
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/ResalePropertyimg/ocvstqhyosu1n0xla3po",
    altText: "Modern Apartment Building",
    name: "Suavity Otium",
    description:
      "Luxury Gated Community in <span class='font-bold'>Akshay Nagar, Bangalore.</span> Exclusive <span class='font-bold'>2, 3 & 4 BHK villas and apartments</span> with modern architecture, lush greenery, and premium amenities. Secure gated access ensures privacy and comfort. Bangalore | <span class='font-bold'>Price on Request.</span> Experience elegance, security, and seamless connectivity in a serene setting.",
  },
];

// Rental properties data
const rentalProperties = [
  {
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/Rent/te2bvkg3exhnklg5tslz",
    altText: "Prestige Finsbury Park",
    name: "Prestige Finsbury Park",
    description:
      "Prestige Finsbury Park Located in <span class='font-bold'>Bagalur, Bangalore,</span> Prestige Finsbury Park – Hyde offers <span class='font-bold'>ready-to-move</span>-in <span class='font-bold'> semi-furnished 2 & 3 BHK apartments,</span> available on rent with <span class='font-bold'> Price on Request.</span> Designed for modern urban living, these well-ventilated homes boast <span class='font-bold'>ambient sunlight, modular kitchens with chimneys, sliding wardrobes, and thoughtfully designed interiors.</span> With contemporary fittings and smart storage solutions, the residences promise comfort and convenience in every corner. Experience refined living in a vibrant community with excellent connectivity and lifestyle amenities.",
  },
  {
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/ResalePropertyimg/rckt1yxcilk56kjggvn0",
    altText: "Sobha Royal Pavilion, Sarjapur Road",
    name: "Sobha Royal Pavilion",
    description:
      "Sobha Royal Pavilion – Rajasthan-themed luxury apartment  s in <span class='font-bold'> Hadosiddapura, Sarjapur Road, Bangalore. Offering 2, 3 & 4 BHK homes </span> ranging from <span class='font-bold'>1300 to 2232.2 sq. ft.,</span> starting from  <span class='font-bold'>Price on Request.</span> A masterpiece of Rajput grandeur, SOBHA Royal Pavilion blends Rajasthani architectural brilliance with modern cosmopolitan elegance. Designed to reflect royal palatial living, this exquisite community offers world-class amenities, timeless luxury, and unmatched comfort, creating a lifestyle of sophistication and opulence.",
  },
  {
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/Rent/dqbgazwluq9hoxjcgxk7",
    altText: "Prestige St Johns Wood",
    name: "Prestige St Johns Wood",
    description:
      "Prestige St. Johns Wood, located in <span class='font-bold'> Tavarekere, Bangalore,</span> offers premium rental living in one of South Bangalore’s well-connected neighborhoods. Surrounded by prime areas like <span class='font-bold'>BTM Layout and Maruthi Nagar,</span>  the project enjoys excellent access to <span class='font-bold'>metro stations </span> including BTM Layout and <span class='font-bold'>Jayadeva Interchange. With nearby schools, hospitals, markets, and malls, everyday conveniences are just minutes away.</span> Rental prices start from <span class='font-bold'> Price on Request,</span> making it ideal for a range of lifestyles. Enjoy urban comfort in a locality <span class='font-bold'>rated 4.3/5</span> for connectivity and  <span class='font-bold'>4.2/5</span> for safety.",
  },
  {
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/Rent/ezcfmxuyatsdsne1jezm",
    altText: "Sobha Morzaria Grandeur",
    name: "Sobha Morzaria Grandeur",
    description:
      "Sobha Morzaria Grandeur, located at <span class='fnt-bold'>Dairy Circle, Bangalore,</span> offers spacious <span class='font-bold'>2,3 & 4 BHK rental </span> residences ideal for <span class='font-bold'>families and women</span> professionals. With thoughtfully designed homes featuring <span class='font-bold>pooja rooms, servant quarters, and generous balconies,</span> this semi-furnished project promises both comfort and functionality. <span class='font-bold'>Price on Request,</span> the project is well-connected via metro and major transport hubs like Majestic and KSR Railway Station. Surrounded by reputed schools, hospitals, and entertainment zones, Sobha Morzaria Grandeur stands out as a preferred choice in a locality rated 4.1/5 for connectivity and 3.7/5 for safety.",
  },
];

// Function to fetch expertise data from API
async function fetchExpertiseData() {
  try {
    // Set up the authorization token
    const authToken =
      "e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac";

    // Set up request headers with the token
    const headers = {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    };

    // Make the API request with authorization headers
    const response = await fetch(
      "https://dncrnewapi-bmbfb6f6awd8b0bd.westindia-01.azurewebsites.net/properties?page=1&pageSize=10&isFeatured=true&readyToMove=false&sourceWebsite=deccanrealty.com",
      {
        method: "GET",
        headers: headers,
      }
    );

    if (!response.ok) {
      // Get response body even for error responses to see the error message
      const errorData = await response.json().catch(() => ({}));
      console.error("API Error:", errorData);
      throw new Error(
        `HTTP error! Status: ${response.status}, Message: ${errorData.message || "Unknown error"
        }`
      );
    }

    const data = await response.json();

    if (data.success && data.data && data.data.properties) {
      // Scroll to the property-render-container on successful search
      // const scrollTarget = document.getElementById("property-render-container");
      // if (scrollTarget) {
      //   scrollTarget.scrollIntoView({ behavior: "smooth", block: "start" });
      // }
      return data.data.properties;
    } else {
      console.error("API response format is not as expected:", data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching expertise data:", error);
    return [];
  }
}

// Function to fetch trending properties from API
async function fetchTrendingProperties() {
  try {
    // Set up the authorization token
    const authToken =
      "e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac";

    // Set up request headers with the token
    const headers = {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    };

    // Make the API request with authorization headers
    const response = await fetch(
      "https://dncrnewapi-bmbfb6f6awd8b0bd.westindia-01.azurewebsites.net/properties?page=1&pageSize=10&isFeatured=true&readyToMove=false&sourceWebsite=deccanrealty.com",
      {
        method: "GET",
        headers: headers,
      }
    );

    if (!response.ok) {
      // Get response body even for error responses to see the error message
      const errorData = await response.json().catch(() => ({}));
      console.error("API Error:", errorData);
      throw new Error(
        `HTTP error! Status: ${response.status}, Message: ${errorData.message || "Unknown error"
        }`
      );
    }

    const data = await response.json();

    if (data.success && data.data && data.data.properties) {
      return data.data.properties;
    } else {
      console.error("API response format is not as expected:", data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching trending properties:", error);
    return [];
  }
}

// Function to fetch ready-to-move properties for resale section
async function fetchReadyToMoveProperties() {
  try {
    // Set up the authorization token
    const authToken =
      "e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac";

    // Set up request headers with the token
    const headers = {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    };

    // Make the API request with authorization headers for ready-to-move properties
    const response = await fetch(
      "https://dncrnewapi-bmbfb6f6awd8b0bd.westindia-01.azurewebsites.net/properties?page=1&pageSize=10&isFeatured=false&readyToMove=true&sourceWebsite=deccanrealty.com",
      {
        method: "GET",
        headers: headers,
      }
    );

    if (!response.ok) {
      // Get response body even for error responses to see the error message
      const errorData = await response.json().catch(() => ({}));
      console.error("API Error:", errorData);
      throw new Error(
        `HTTP error! Status: ${response.status}, Message: ${errorData.message || "Unknown error"
        }`
      );
    }

    const data = await response.json();

    if (data.success && data.data && data.data.properties) {
      return data.data.properties;
    } else {
      console.error("API response format is not as expected:", data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching ready-to-move properties:", error);
    return [];
  }
}

// Function to fetch rental properties from API
async function fetchRentalProperties() {
  try {
    const authToken =
      "e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac";
    const headers = {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "https://dncrnewapi-bmbfb6f6awd8b0bd.westindia-01.azurewebsites.net/properties?page=1&pageSize=10&propertyFor=rent&isFeatured=false&readyToMove=false&sourceWebsite=deccanrealty.com",
      {
        method: "GET",
        headers: headers,
      }
    );
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("API Error:", errorData);
      throw new Error(
        `HTTP error! Status: ${response.status}, Message: ${errorData.message || "Unknown error"
        }`
      );
    }
    const data = await response.json();
    if (data.success && data.data && data.data.properties) {
      return data.data.properties;
    } else {
      console.error("API response format is not as expected:", data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching rental properties:", error);
    return [];
  }
}

// Function to create expertise card from API data
function createExpertiseCardFromAPI(property) {
  // Extract the first image URL from the JSON string if it exists
  let imageUrl = "";
  try {
    const imageData = JSON.parse(property.imageURL);
    if (imageData && imageData.length > 0 && imageData[0].imageUrl) {
      imageUrl = imageData[0].imageUrl;
    }
  } catch (e) {
    console.error("Error parsing image URL:", e);
    imageUrl =
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/Featured/kzwwgujgkyuxoq6gthj6"; // Fallback image
  }

  return `
    <div class="w-full bg-white sm:rounded-xl rounded-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform flex flex-col justify-between min-h-[550px]">
        <!-- Image Section -->
        <div class="relative">
            <img src="${imageUrl}" alt="${property.propertyName}" 
                 class="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-110"
                 >
            <span class="absolute top-2 right-2 bg-[#b1923f] text-white px-3 py-1 text-xs sm:text-sm rounded-full font-medium">Featured</span>
        </div>
        
        <!-- Content Section -->
        <div class="p-4 sm:p-5 bg-gradient-to-b from-gray-50 to-white flex flex-col flex-grow ">
            <div class="space-y-3 flex-grow">
                <div class="text-center">
                   <h2 class="text-center text-lg sm:text-xl xl:text-lg 2xl:text-lg font-bold text-black whitespace-normal">${property.propertyName
    }</h2>
                   <p class="text-sm lg:text-black lg:font-semibold flex items-center justify-center mt-2">
                     <i class="fas fa-map-marker-alt mr-2"></i>${property.city
    }, ${property.locationAddress}
                   </p>
                </div>
                
                <div class="text-sm space-y-2">
                    <p class="text-black text-center">${property.shortDescription ||
    "Premium property available for viewing"
    }</p>
                </div>
            </div>

            <!-- Buttons Section -->
            <div class="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center gap-3">
                <button onclick="openEnquiryForm({ propertyName: '${property.propertyName
    }' })"
                 class="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                    Explore More
                </button>
                <a href="https://api.whatsapp.com/send?phone=917303062845" target="_blank" aria-label="Chat with us on WhatsApp" class="whatsapp-btn text-green-600 text-2xl">
                    <i class="fab fa-whatsapp"></i>
                </a>
            </div>
        </div>
    </div>
  `;
}

// Card creation functions
function createPropertyCard(item) {
  return `
    <div class="w-full bg-white sm:rounded-xl rounded-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform flex flex-col justify-between min-h-[550px]">
        <!-- Image Section -->
        <div class="relative">
            <img src="${item.imageURL.src}" alt="${item.imageURL.alt}" 
                 class="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-110">
            <span class="absolute top-2 right-2 bg-[#b1923f] text-white px-3 py-1 text-xs sm:text-sm rounded-full font-medium">Trending</span>
        </div>
        
        <!-- Content Section -->
        <div class="p-4 sm:p-5 bg-gradient-to-b from-gray-50 to-white flex flex-col flex-grow">
            <div class="space-y-3 flex-grow">
                <div>
                    <h2 class="text-lg sm:text-xl font-bold lg:text-black lg:font-semibold line-clamp-1">${item.propertyName}</h2>
                    <p class="text-sm lg:text-black lg:text-semibold flex items-center">
                        <i class="fas fa-map-marker-alt mr-2"></i>${item.location}
                    </p>
                    <span class="text-base sm:text-lg lg:text-[16px] font-semibold lg:text-black block">
                        ${item.priceRange}
                        <span class="text-xs lg:text-black">(${item.pricePerSqFt})</span>
                    </span>
                </div>
                
                <div class="text-xs sm:text-sm space-y-2">
                    <p class="flex items-center lg:text-black">
                        <i class="fas fa-home text-green-500 mr-2"></i>
                        <span class="line-clamp-2">${item.configurations}</span>
                    </p>
                    <p class="flex items-center lg:text-black">
                        <i class="fas fa-ruler-combined text-green-500 mr-2"></i>
                        ${item.sizes}
                    </p>
                    <p class="flex items-center lg:text-black">
                        <i class="fas fa-calendar-alt text-green-500 mr-2"></i>
                        ${item.possessionDate}
                    </p>
                </div>
            </div>

            <!-- Buttons Section -->
            <div  
             class="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center gap-3">
                <button  onclick="openEnquiryForm({ propertyName: '${item.propertyName}' })"
                class="bg-orange-500 cursor-pointer  hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                    Request Info
                </button>
                <a href="https://api.whatsapp.com/send?phone=917303062845" target="_blank" aria-label="Chat with us on WhatsApp"  class="whatsapp-btn text-green-600 text-2xl">
                    <i class="fab fa-whatsapp"></i>
                </a>
            </div>
        </div>
    </div>
  `;
}

// Function to create trending property card from API data
function createTrendingPropertyCardFromAPI(property) {
  // Extract the first image URL from the JSON string if it exists
  let imageUrl = "";
  try {
    const imageData = JSON.parse(property.imageURL);
    if (imageData && imageData.length > 0 && imageData[0].imageUrl) {
      imageUrl = imageData[0].imageUrl;
    }
  } catch (e) {
    console.error("Error parsing image URL:", e);
    imageUrl =
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/Trending/nf5fbl8k6d28y6wfnx0r"; // Fallback image
  }

  // Format price from API data
  const formattedPrice = property.price
    ? `₹ ${(property.price / 10000000).toFixed(2)} Cr`
    : "Price on Request";

  // Parse HTML content for short description
  const shortDescription =
    property.shortDescription ||
    property.longDescription ||
    "Premium property available for viewing";
  const cleanDescription = shortDescription
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&#160;/g, " ")
    .trim();

  // Extract configurations from description or use fallback
  let configurations = "Premium Apartments";
  if (cleanDescription.includes("BHK")) {
    const bhkMatch = cleanDescription.match(/(\d+(?:\.\d+)?BHK[^.]*)/gi);
    if (bhkMatch) {
      configurations = bhkMatch.join(", ").substring(0, 50) + "...";
    }
  }

  return `
    <div class="w-full bg-white sm:rounded-xl rounded-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform flex flex-col justify-between min-h-[550px]">
        <!-- Image Section -->
        <div class="relative">
            <img src="${imageUrl}" alt="${property.propertyName}" 
                 class="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-110">
            <span class="absolute top-2 right-2 bg-[#b1923f] text-white px-3 py-1 text-xs sm:text-sm rounded-full font-medium">Trending</span>
        </div>
        
        <!-- Content Section -->
        <div class="p-4 sm:p-5 bg-gradient-to-b from-gray-50 to-white flex flex-col flex-grow">
            <div class="space-y-3 flex-grow">
                <div>
                    <h2 class="text-lg sm:text-xl font-bold lg:text-black lg:font-semibold line-clamp-1">${property.propertyName
    }</h2>
                    <p class="text-sm lg:text-black lg:text-semibold flex items-center">
                        <i class="fas fa-map-marker-alt mr-2"></i>${property.locationAddress || property.city
    }
                    </p>
                    <span class="text-base sm:text-lg lg:text-[16px] font-semibold lg:text-black block">
                        ${formattedPrice}
                    </span>
                </div>
                
                <div class="text-xs sm:text-sm space-y-2">
                    <p class="flex items-center lg:text-black">
                        <i class="fas fa-home text-green-500 mr-2"></i>
                        <span class="line-clamp-2">${configurations}</span>
                    </p>
                    <p class="flex items-center lg:text-black">
                        <i class="fas fa-ruler-combined text-green-500 mr-2"></i>
                        ${property.area} ${property.lmUnit || "Sq.Ft."}
                    </p>
                    <p class="flex items-center lg:text-black">
                        <i class="fas fa-calendar-alt text-green-500 mr-2"></i>
                        ${property.readyToMove
      ? "Ready to Move"
      : "Under Construction"
    }
                    </p>
                </div>
            </div>

            <!-- Buttons Section -->
            <div class="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center gap-3">
                <button onclick="openEnquiryForm({ propertyName: '${property.propertyName
    }' })"
                class="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                    Request Info
                </button>
                <a href="https://api.whatsapp.com/send?phone=917303062845" target="_blank" aria-label="Chat with us on WhatsApp" class="whatsapp-btn text-green-600 text-2xl">
                    <i class="fab fa-whatsapp"></i>
                </a>
            </div>
        </div>
    </div>
  `;
}

function createServiceCard(item) {
  return `
    <div class="w-full bg-white sm:rounded-xl rounded-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform flex flex-col justify-between min-h-[550px]">
        <!-- Image Section -->
        <div class="relative">
            <img src="${item.imageURL.src}" alt="${item.imageURL.alt}" 
                 class="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-110"
                 >
            <span class="absolute top-2 right-2 bg-[#b1923f] text-white px-3 py-1 text-xs sm:text-sm rounded-full font-medium">Featured</span>
        </div>
        
        <!-- Content Section -->
        <div class="p-4 sm:p-5 bg-gradient-to-b from-gray-50 to-white flex flex-col flex-grow ">
            <div class="space-y-3 flex-grow">
                <div class="text-center">
                   <h2 class="text-center text-lg sm:text-xl xl:text-lg 2xl:text-lg font-bold text-black whitespace-normal">${item.serviceTitle}</h2>

                </div>
                
                <div class="text-sm space-y-2">
                    <!-- No max-height limitation for service descriptions -->
                    <p class="text-black text-center">${item.serviceAddress}</p>
                </div>
            </div>

            <!-- Buttons Section -->
            <div class="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center gap-3">
                <button onclick="openEnquiryForm({ serviceTitle: '${item.serviceTitle}' })"
                 class="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                    Explore More
                </button>
                <a href="https://api.whatsapp.com/send?phone=917303062845" target="_blank" aria-label="Chat with us on WhatsApp" class="whatsapp-btn text-green-600 text-2xl">
                    <i class="fab fa-whatsapp"></i>
                </a>
            </div>
        </div>
    </div>
  `;
}

function createResalePropertyCard(property, index) {
  return `
    <div class="w-full bg-white sm:rounded-xl rounded-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform flex flex-col justify-between min-h-[550px]">
        <!-- Image Section -->
        <div class="relative">
            <img src="${property.image}" alt="${property.altText}" 
                 class="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-110">
            <span class="absolute top-2 right-2 bg-[#b1923f] text-white px-3 py-1 text-xs sm:text-sm rounded-full font-medium">Resale</span>
        </div>
        
        <!-- Content Section -->
        <div class="p-4 sm:p-5 bg-gradient-to-b from-gray-50 to-white flex flex-col flex-grow">
            <div class="space-y-3 flex-grow">
                <div class="text-center">
                    <h2 class="text-lg sm:text-xl font-bold lg:text-black lg:font-semibold line-clamp-1">${property.name
    }</h2>
                </div>
                
                <div class="text-sm space-y-2 resale-content-wrapper">
                    <div class="description-container text-black text-center" id="desc-${index + 1
    }">
                        <p class="desc-content">${property.description}</p>
                    </div>
                    <div class="text-center mt-2">
                        <span class="toggle-btn text-blue-600 cursor-pointer text-sm inline-block" data-target="desc-${index + 1
    }">See More...</span>
                    </div>
                </div>
            </div>

            <!-- Buttons Section -->
            <div 
            class="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center gap-3">
                <button onclick="openEnquiryForm({ propertyName: '${property.name
    }' })"
                 class="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                    Unlock Pricing
                </button>
                <a href="https://api.whatsapp.com/send?phone=917303062845" target="_blank" aria-label="Chat with us on WhatsApp" class="whatsapp-btn text-green-600 text-2xl">
                    <i class="fab fa-whatsapp"></i>
                </a>
            </div>
        </div>
    </div>
  `;
}

// Function to create resale property card from API data
function createResalePropertyCardFromAPI(property, index) {
  // Extract the first image URL from the JSON string if it exists
  let imageUrl = "";
  try {
    const imageData = JSON.parse(property.imageURL);
    if (imageData && imageData.length > 0 && imageData[0].imageUrl) {
      imageUrl = imageData[0].imageUrl;
    }
  } catch (e) {
    console.error("Error parsing image URL:", e);
    imageUrl =
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/sqiktbmv5o03fvnqbck7"; // Fallback image
  }

  // Parse HTML content for description
  const description =
    property.shortDescription ||
    property.longDescription ||
    "Premium property available for immediate possession";

  return `
    <div class="w-full bg-white sm:rounded-xl rounded-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform flex flex-col justify-between resale-card">
        <!-- Image Section -->
        <div class="relative">
            <img src="${imageUrl}" alt="${property.propertyName}" 
                 class="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-110">
            <span class="absolute top-2 right-2 bg-[#b1923f] text-white px-3 py-1 text-xs sm:text-sm rounded-full font-medium">Resale</span>
        </div>
        
        <!-- Content Section -->
        <div class="p-4 sm:p-5 bg-gradient-to-b from-gray-50 to-white flex flex-col flex-grow">
            <div class="space-y-3 flex-grow">
                <div class="text-center">
                    <h2 class="text-lg sm:text-xl font-bold lg:text-black lg:font-semibold line-clamp-1">${property.propertyName
    }</h2>
                </div>
                
                <div class="text-sm space-y-2 resale-content-wrapper">
                    <div class="description-container text-black text-center" id="api-desc-${index + 1
    }">
                        <p class="desc-content">${description}</p>
                    </div>
                    <div class="text-center mt-2">
                        <span class="toggle-btn text-blue-600 cursor-pointer text-sm inline-block" data-target="api-desc-${index + 1
    }">See More...</span>
                    </div>
                </div>
            </div>

            <!-- Buttons Section -->
            <div class="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center gap-3">
                <button onclick="openEnquiryForm({ propertyName: '${property.propertyName
    }' })"
                 class="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                    Unlock Pricing
                </button>
                <a href="https://api.whatsapp.com/send?phone=917303062845" target="_blank" aria-label="Chat with us on WhatsApp" class="whatsapp-btn text-green-600 text-2xl">
                    <i class="fab fa-whatsapp"></i>
                </a>
            </div>
        </div>
    </div>
  `;
}

// Add this function after createResalePropertyCard
function createRentalPropertyCard(property, index) {
  return `
    <div class="w-full bg-white sm:rounded-xl rounded-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform flex flex-col justify-between rental-card">
        <!-- Image Section -->
        <div class="relative">
            <img src="${property.image}" alt="${property.altText}" 
                 class="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-110">
            <span class="absolute top-2 right-2 bg-[#b1923f] text-white px-3 py-1 text-xs sm:text-sm rounded-full font-medium">For Rent</span>
        </div>
        
        <!-- Content Section -->
        <div class="p-4 sm:p-5 bg-gradient-to-b from-gray-50 to-white flex flex-col flex-grow">
            <div class="space-y-3 flex-grow">
                <div class="text-center">
                    <h2 class="text-lg sm:text-xl font-bold lg:text-black lg:font-semibold line-clamp-1">${property.name
    }</h2>
                </div>
                
                <div class="text-sm space-y-2 rental-content-wrapper">
                    <div class="description-container text-black text-center" id="rental-desc-${index + 1
    }">
                        <p class="desc-content">${property.description}</p>
                    </div>
                    <div class="text-center mt-2">
                        <span class="toggle-btn text-blue-600 cursor-pointer text-sm inline-block" data-target="rental-desc-${index + 1
    }">See More...</span>
                    </div>
                </div>
            </div>

            <!-- Buttons Section -->
            <div class="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center gap-3">
                <button onclick="openEnquiryForm({ propertyName: '${property.name
    }' })"
                 class="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                    Schedule Visit
                </button>
                <a href="https://api.whatsapp.com/send?phone=917303062845" target="_blank" aria-label="Chat with us on WhatsApp" class="whatsapp-btn text-green-600 text-2xl">
                    <i class="fab fa-whatsapp"></i>
                </a>
            </div>
        </div>
    </div>
  `;
}

// Helper functions
function setupToggleButtons() {
  // Initialize all description containers
  const allContainers = document.querySelectorAll(".description-container");
  allContainers.forEach((container) => {
    container.style.maxHeight = "80px";
    container.style.overflow = "hidden";
    container.style.transition = "max-height 0.3s ease";
  });

  // Set up toggle button functionality for both resale and rental cards
  document.querySelectorAll(".toggle-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const descContainer = document.getElementById(targetId);

      const card = this.closest(".resale-card, .rental-card");

      if (
        descContainer.style.maxHeight === "80px" ||
        descContainer.style.maxHeight === ""
      ) {
        // Store original card height before expanding
        const originalHeight = card.offsetHeight;

        // Temporarily remove transition for accurate height calculation
        descContainer.style.transition = "none";
        descContainer.style.maxHeight = "none";
        const fullHeight = descContainer.scrollHeight;
        descContainer.style.maxHeight = "80px";

        // Restore transition and set full height
        setTimeout(() => {
          descContainer.style.transition = "max-height 0.3s ease";
          descContainer.style.maxHeight = fullHeight + "px";
        }, 0);

        this.textContent = "See Less...";
      } else {
        descContainer.style.maxHeight = "80px";
        this.textContent = "See More...";
      }
    });
  });
}

// ===================== LOGIN/SIGNUP MODAL FUNCTIONALITY =====================

// Open Login Modal
function openLoginModal() {
  const modal = document.getElementById("user-auth-modal");
  if (modal) {
    modal.style.display = "flex";
    // Reset forms and errors if needed
    if (document.getElementById("login-modal")) {
      document.getElementById("login-modal").style.display = "block";
    }
    if (document.getElementById("signup-modal")) {
      document.getElementById("signup-modal").style.display = "none";
    }
    // Always show OTP continue button for now
    showOtpContinueButton();
    // Hide OTP input initially
    var otpModal = document.getElementById("otp-modal");
    if (otpModal) otpModal.style.display = "none";
  }
}

// Close Login Modal
function closeLoginModal() {
  const modal = document.getElementById("user-auth-modal");
  if (modal) {
    modal.style.display = "none";
  }
}

// Switch to Signup Modal
function openSignupModal() {
  if (document.getElementById("login-modal")) {
    document.getElementById("login-modal").style.display = "none";
  }
  if (document.getElementById("signup-modal")) {
    document.getElementById("signup-modal").style.display = "block";
  }
}

// Show/hide correct login modal buttons for OTP flow
function showOtpContinueButton() {
  // Hide other buttons
  var nextStepBtn = document.getElementById("nextStepButton");
  var loginBtn = document.getElementById("btn-login");
  var continueForgetBtn = document.getElementById("continue-forget");
  if (nextStepBtn) nextStepBtn.style.display = "none";
  if (loginBtn) loginBtn.style.display = "none";
  if (continueForgetBtn) continueForgetBtn.style.display = "block";
}

// --- Login Email API Check ---
window.checkEmailExistsLogin = async function (input) {
  const email = input.value.trim();
  const msgBox = document.getElementById("login-email-api-msg");
  if (!email) {
    msgBox.style.display = "none";
    return false;
  }
  msgBox.style.display = "block";
  msgBox.style.color = "#b1923f";
  msgBox.textContent = "Checking...";
  try {
    const res = await fetch(
      `https://dncrnewapi-bmbfb6f6awd8b0bd.westindia-01.azurewebsites.net/account/check-email?email=${encodeURIComponent(
        email
      )}`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    if (data.success && data.data) {
      msgBox.style.display = "none";
      msgBox.textContent = "";
      return true;
    } else {
      msgBox.style.display = "block";
      msgBox.style.color = "red";
      msgBox.textContent = data.message || "Email not found";
      return false;
    }
  } catch (err) {
    msgBox.style.display = "block";
    msgBox.style.color = "red";
    msgBox.textContent = "Unable to check email. Try again.";
    return false;
  }
};

// --- OTP Send on Continue (Forget Password) ---
window.handleContinueForget = async function () {
  const emailInput = document.getElementById("email-login");
  const email = emailInput.value.trim();
  const msgBox = document.getElementById("login-email-api-msg");
  if (!email) {
    msgBox.style.display = "block";
    msgBox.style.color = "red";
    msgBox.textContent = "Please enter your email.";
    return;
  }
  // First check if email exists
  const exists = await window.checkEmailExistsLogin(emailInput);
  if (!exists) return;
  // If exists, call OTP API
  const spinner = document.getElementById("login-spinner");
  if (spinner) spinner.style.display = "inline-block";
  try {
    const res = await fetch(
      "https://dncrnewapi-bmbfb6f6awd8b0bd.westindia-01.azurewebsites.net/account/otp-verification",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    const data = await res.json();
    if (data.success) {
      msgBox.style.display = "block";
      msgBox.style.color = "#008a46";
      msgBox.textContent = "OTP sent successfully. Check your email.";
      // Hide login modal, show OTP-only modal
      document.getElementById("user-auth-modal").style.display = "none";
      document.getElementById("otp-only-modal").style.display = "flex";
      // Clear OTP input and error
      document.getElementById("otp-input-only").value = "";
      document.getElementById("otp-error-only").style.display = "none";
    } else {
      msgBox.style.display = "block";
      msgBox.style.color = "red";
      msgBox.textContent = data.message || "Failed to send OTP.";
    }
  } catch (err) {
    msgBox.style.display = "block";
    msgBox.style.color = "red";
    msgBox.textContent = "Unable to send OTP. Try again.";
  } finally {
    if (spinner) spinner.style.display = "none";
  }
};

// --- Signup Flow with OTP Modal ---
window.signup = async function (event) {
  event.preventDefault();
  const signupBtn = document.getElementById("btn-signup");
  const signupSpinner = document.getElementById("signup-spinner");
  if (signupSpinner) signupSpinner.style.display = "inline-block";
  signupBtn.disabled = true;
  // Get form values
  const email = document.getElementById("email-signup").value.trim();
  const name = document.getElementById("name-signup").value.trim();
  const phone = document.getElementById("mobile-signup").value.trim();
  const location = document.getElementById("location-signup").value.trim();
  const acceptTerms = document.getElementById("accpectance").checked;
  const msgBox = document.getElementById("invalidrespone-signup");
  const validBox = document.getElementById("validrespone-signup");
  if (msgBox) {
    msgBox.style.display = "none";
  }
  if (validBox) {
    validBox.style.display = "none";
  }

  // First, check if email exists and get userType
  try {
    const checkRes = await fetch(
      `https://dncrnewapi-bmbfb6f6awd8b0bd.westindia-01.azurewebsites.net/account/check-email?email=${encodeURIComponent(email)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac",
        },
      }
    );
    const checkData = await checkRes.json();
    if (checkData.success && checkData.data && checkData.data.userType) {
      const userType = checkData.data.userType.toLowerCase();
      if (userType === "partner" || userType === "admin") {
        if (msgBox) {
          msgBox.textContent = "Email already exists. Contact support.";
          msgBox.style.display = "block";
          msgBox.style.color = "red";
        }
        if (signupSpinner) signupSpinner.style.display = "none";
        signupBtn.disabled = false;
        return;
      }
    }
  } catch (err) {
    // If API fails, allow signup to continue (or show error if you want)
    // Optionally, you can show a message here
  }

  // Prepare payload
  const payload = {
    email,
    location,
    name,
    phone,
    role: document.getElementById("role-signup")?.value || "Buyer",
    acceptTerms: true,
    sourceWebsite: "deccanrealty.com",
  };

  try {
    const res = await fetch(
      "https://dncrnewapi-bmbfb6f6awd8b0bd.westindia-01.azurewebsites.net/account/user-signup",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    const data = await res.json();
    if (
      data.success &&
      (data.message === "Signup successful" ||
        data.message === "Email already exists")
    ) {
      // Show message
      if (validBox) {
        validBox.textContent = data.message;
        validBox.style.display = "block";
      }
      // Close signup modal, open OTP modal
      document.getElementById("signup-modal").style.display = "none";
      document.getElementById("user-auth-modal").style.display = "none";
      document.getElementById("otp-only-modal").style.display = "flex";
      // Store signup email for OTP verification
      window.signupEmailForOtp = email;
      // Send OTP (if not already sent)
      await fetch(
        "https://dncrnewapi-bmbfb6f6awd8b0bd.westindia-01.azurewebsites.net/account/otp-verification",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      // Clear OTP input and error
      document.getElementById("otp-input-only").value = "";
      document.getElementById("otp-error-only").style.display = "none";
    } else {
      if (msgBox) {
        msgBox.textContent = data.message || "Signup failed.";
        msgBox.style.display = "block";
      }
    }
  } catch (err) {
    if (msgBox) {
      msgBox.textContent = "Unable to signup. Try again.";
      msgBox.style.display = "block";
    }
  } finally {
    if (signupSpinner) signupSpinner.style.display = "none";
    signupBtn.disabled = false;
  }
};

// --- OTP Verification for OTP-only Modal (Handles both Login and Signup) ---
document.getElementById("verify-otp-only").onclick = async function (event) {
  event.preventDefault();
  const btn = document.getElementById("verify-otp-only");
  let spinner = document.getElementById("otp-only-spinner");
  if (!spinner) {
    spinner = document.createElement("i");
    spinner.className = "fa fa-circle-notch fa-spin ml-1";
    spinner.id = "otp-only-spinner";
    btn.appendChild(spinner);
  }
  spinner.style.display = "inline-block";
  btn.disabled = true;
  // Use signup email if present, else fallback to login email
  const email =
    window.signupEmailForOtp ||
    document.getElementById("email-login").value.trim();
  const otp = document.getElementById("otp-input-only").value.trim();
  const otpError = document.getElementById("otp-error-only");
  if (!otp) {
    otpError.style.display = "block";
    otpError.textContent = "Please enter the OTP.";
    spinner.style.display = "none";
    btn.disabled = false;
    return;
  } else {
    otpError.style.display = "none";
  }
  try {
    const res = await fetch(
      "https://dncrnewapi-bmbfb6f6awd8b0bd.westindia-01.azurewebsites.net/account/otp-verification",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      }
    );
    const data = await res.json();
    // Accept token from either data.token or data.data (if string)
    let token = data.token;
    if (!token && data.data && typeof data.data === "string") {
      token = data.data;
    }
    if (data.success && token) {
      otpError.style.display = "none";
      document.getElementById("otp-only-modal").style.display = "none";
      // Always redirect if token is present
      if (typeof urlRedirection === "function") {
        urlRedirection(token);
      } else if (window.urlRedirection) {
        window.urlRedirection(token);
      } else {
        window.location.href = `https://devdncrfe.azurewebsites.net/Redirecting/?tok=${token}`;
      }
      return;
    } else if (data.success) {
      otpError.style.display = "block";
      otpError.textContent = "Token not received. Please try again.";
    } else {
      otpError.style.display = "block";
      otpError.textContent = data.message || "Invalid OTP!";
    }
  } catch (err) {
    otpError.style.display = "block";
    otpError.textContent = "Unable to verify OTP. Try again.";
  } finally {
    spinner.style.display = "none";
    btn.disabled = false;
  }
};

// --- Property Search Bar Logic ---
document.addEventListener("DOMContentLoaded", function () {

});

// Make selectedType global so it is accessible in all functions
let selectedType = '';
document.addEventListener("DOMContentLoaded", function () {
  // Toggle logic
  const toggles = [
    document.getElementById("toggle-buy"),
    document.getElementById("toggle-sell"),
    document.getElementById("toggle-rent"),
  ];
  toggles.forEach((btn, idx) => {
    btn.addEventListener('click', function () {
      toggles.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      if (idx === 0) {
        selectedType = 'sale'; // Change to 'sale' for API parameter
        if (typeof searchProperties === 'function') {
          searchProperties();
        }
      } else if (idx === 1) {
        selectedType = 'sell';
        // Open signup modal instead of searching properties
        if (typeof openSignupModal === 'function') {
          openSignupModal();
        }
      } else if (idx === 2) {
        selectedType = 'rent';
        if (typeof searchProperties === 'function') {
          searchProperties();
        }
      }
    });
  });
  // Set default toggle to none selected
  toggles.forEach(t => t.classList.remove('active'));
  selectedType = '';

  // Search button logic
  const searchBtn = document.getElementById("search-btn");
  const loader = document.getElementById("search-loader");
  const locationDropdown = document.getElementById("location-dropdown");
  const addressInput = document.getElementById("address-input");
  const propertyRenderContainer = document.getElementById(
    "property-render-container"
  );

  // Create or get the search results container above the Exceptional Properties section
  let searchResultsSection = document.getElementById("search-results-section");
  if (!searchResultsSection) {
    searchResultsSection = document.createElement("section");
    searchResultsSection.id = "search-results-section";
    searchResultsSection.className = "mt-10 px-4 flex flex-row";
    propertyRenderContainer.insertBefore(
      searchResultsSection,
      propertyRenderContainer.firstChild
    );
  }

  // Make searchProperties global so it can be called from anywhere
  // Track current page globally
  if (!window.propertySearchState) {
    window.propertySearchState = { currentPage: 1 };
  }

  // --- SORT STATE ---
  if (!window.propertySortState) {
    window.propertySortState = { sortBy: "Relevance" };
  }

  window.searchProperties = async function searchProperties(page = 1) {
    // If page is a PointerEvent (from button click), ignore and use 1
    if (typeof page === 'object' && page !== null && (page instanceof PointerEvent || page instanceof Event)) {
      page = 1;
    }
    window.propertySearchState.currentPage = page;

    const scrollTarget = document.getElementById("property-render-container");
    if (scrollTarget) {
      scrollTarget.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    loader.classList.remove("hidden");
    searchBtn.disabled = true;

    // Only render filter UI once
    let filterSection = document.getElementById("filter-section");
    let searchPropertyContainer = document.getElementById("search-property-container");
    let sortDropdown = document.getElementById("relevance-dropdown");
    if (!filterSection) {
      // --- SORT DROPDOWN ---
      const sortDropdownHTML = `
        <div class="flex justify-end items-center mb-4 w-full">
          <label for="relevance-dropdown" class="mr-2 font-semibold text-gray-700">Sort by:</label>
          <select id="relevance-dropdown" class="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#b1923f]" style="cursor:pointer; min-width:150px;">
            <option value="Relevance">Relevance</option>
            <option value="Newest">Newest First</option>
            <option value="pricelowtohigh">Price Low to High</option>
            <option value="pricehightolow">Price High to Low</option>
            <option value="arealowtohigh">Area(Inc)</option>
            <option value="areahightolow">Area(Dec)</option>
          </select>
        </div>
      `;

      // Accordion HTML for filters
      const accordionHTML = `
      <aside id="filter-section" class="w-full md:w-64 bg-white rounded-xl shadow-md p-4 mb-6 md:mb-0">
      <h3 class="font-bold text-lg mb-4 text-[#008a46]">Filters</h3>
      <div class="space-y-2">
        <!-- Bedrooms -->
        <details class="group border border-gray-200 rounded-lg overflow-hidden">
        <summary class="flex justify-between items-center cursor-pointer p-3 font-semibold text-black bg-gray-50 group-open:bg-[#008a46] group-open:text-white transition-all duration-300 ease-in-out hover:bg-gray-100">
          Bedrooms
          <svg class="w-5 h-5 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </summary>
        <div class="p-3 text-sm text-gray-700 bg-white max-h-0 group-open:max-h-96 transition-all duration-500 ease-in-out overflow-hidden">
          <div class="space-y-2 bedroom-checkboxes" id="bedrooms-accordion-content">
          <!-- Bedrooms checkboxes will be populated here -->
          </div>
        </div>
        </details>
        <!-- Type of Property -->
        <details class="group border border-gray-200 rounded-lg overflow-hidden">
        <summary class="flex justify-between items-center cursor-pointer p-3 font-semibold text-black bg-gray-50 group-open:bg-[#008a46] group-open:text-white transition-all duration-300 ease-in-out hover:bg-gray-100">
          Type of Property
          <svg class="w-5 h-5 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </summary>
        <div class="p-3 text-sm text-gray-700 bg-white max-h-0 group-open:max-h-96 transition-all duration-500 ease-in-out overflow-hidden">
          <div class="space-y-2 property-type-checkboxes" id="property-type-accordion-content">
            <!-- Property type checkboxes will be populated here -->
          </div>
        </div>
        </details>
        <!-- Furnished Type -->
        <details class="group border border-gray-200 rounded-lg overflow-hidden">
        <summary class="flex justify-between items-center cursor-pointer p-3 font-semibold text-black bg-gray-50 group-open:bg-[#008a46] group-open:text-white transition-all duration-300 ease-in-out hover:bg-gray-100">
          Furnished Type
          <svg class="w-5 h-5 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </summary>
        <div class="p-3 text-sm text-gray-700 bg-white max-h-0 group-open:max-h-96 transition-all duration-500 ease-in-out overflow-hidden">
          <div class="space-y-2 furnish-type-checkboxes" id="furnish-type-accordion-content">
            <!-- Furnish type checkboxes will be populated here -->
          </div>
        </div>
        </details>
        <!-- Listed By -->
        <details class="group border border-gray-200 rounded-lg overflow-hidden">
        <summary class="flex justify-between items-center cursor-pointer p-3 font-semibold text-black bg-gray-50 group-open:bg-[#008a46] group-open:text-white transition-all duration-300 ease-in-out hover:bg-gray-100">
          Listed By
          <svg class="w-5 h-5 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </summary>
        <div class="p-3 text-sm text-gray-700 bg-white max-h-0 group-open:max-h-96 transition-all duration-500 ease-in-out overflow-hidden">
          <div class="space-y-2 seller-type-checkboxes" id="seller-type-accordion-content">
            <!-- Seller type checkboxes will be populated here -->
          </div>
        </div>
        </details>
        <!-- Amount -->
        <details class="group border border-gray-200 rounded-lg overflow-hidden">
        <summary class="flex justify-between items-center cursor-pointer p-3 font-semibold text-black bg-gray-50 group-open:bg-[#008a46] group-open:text-white transition-all duration-300 ease-in-out hover:bg-gray-100">
          Amount
          <svg class="w-5 h-5 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </summary>
        <div class="p-3 text-sm text-gray-700 bg-white max-h-0 group-open:max-h-96 transition-all duration-500 ease-in-out overflow-hidden">
          <div class="space-y-2">
          <label class="flex items-center">
            <input type="checkbox" class="mr-2 rounded text-[#008a46] focus:ring-[#008a46]" />
            Below ₹50L
          </label>
          <label class="flex items-center">
            <input type="checkbox" class="mr-2 rounded text-[#008a46] focus:ring-[#008a46]" />
            ₹50L - ₹1Cr
          </label>
          <label class="flex items-center">
            <input type="checkbox" class="mr-2 rounded text-[#008a46] focus:ring-[#008a46]" />
            ₹1Cr - ₹2Cr
          </label>
          <label class="flex items-center">
            <input type="checkbox" class="mr-2 rounded text-[#008a46] focus:ring-[#008a46]" />
            Above ₹2Cr
          </label>
          </div>
        </div>
        </details>
      </div>
      </aside>
      `;


      // Main results grid (right side)
      const resultsGridHTML = `
        <div class="flex-1" id="search-property-container"></div>
      `;

      // Responsive flex layout with sort dropdown above results
      searchResultsSection.innerHTML = `
        <div class="flex flex-col md:flex-row gap-6 w-full">
          ${accordionHTML}
          <div class="flex-1">
            ${sortDropdownHTML}
            ${resultsGridHTML}
          </div>
        </div>
      `;

      // Now call populateBedroomsAccordion after the accordion is in the DOM
      populateBedroomsAccordion();
      populatePropertyTypeAccordion();
      populateFurnishTypeAccordion();
      populateSellerTypeAccordion();
      searchPropertyContainer = document.getElementById("search-property-container");
      sortDropdown = document.getElementById("relevance-dropdown");

      // --- FILTERS: Attach event listeners to all filter checkboxes (ALWAYS after populating accordions) ---
      attachFilterListeners();

      // Add Apply button above filters if not already present

      // Add Clear All button above Apply
      let clearAllBtn = document.getElementById('clear-all-filters-btn');
      if (!clearAllBtn) {
        clearAllBtn = document.createElement('button');
        clearAllBtn.id = 'clear-all-filters-btn';
        clearAllBtn.type = 'button';
        clearAllBtn.textContent = 'Clear All';
        clearAllBtn.className = 'absolute left-4 top-4 text-xs px-3 py-1 bg-gray-200 hover:bg-gray-300 text-[#008a46] font-semibold rounded transition-colors duration-300 shadow-sm border border-[#008a46]';
        const filterSection = document.getElementById('filter-section');
        if (filterSection) {
          filterSection.style.position = 'relative';
          filterSection.insertBefore(clearAllBtn, filterSection.firstChild);
        }
      }

      let applyBtn = document.getElementById('apply-filters-btn');
      if (!applyBtn) {
        applyBtn = document.createElement('button');
        applyBtn.id = 'apply-filters-btn';
        applyBtn.textContent = 'Apply';
        applyBtn.className = 'absolute right-4 top-4 text-xs px-3 py-1 bg-[#008a46] hover:bg-[#b1923f] text-white font-semibold rounded transition-colors duration-300 shadow-sm';
        const filterSection = document.getElementById('filter-section');
        if (filterSection) {
          filterSection.style.position = 'relative';
          filterSection.insertBefore(applyBtn, filterSection.firstChild.nextSibling); // after clear all
        }
      }

      clearAllBtn.onclick = function () {
        // Uncheck all filter checkboxes
        document.querySelectorAll('#filter-section input[type="checkbox"]').forEach(cb => {
          cb.checked = false;
        });
        // Clear filter state
        if (window.propertyFilterState) {
          window.propertyFilterState.bedrooms = [];
          window.propertyFilterState.propertyTypes = [];
          window.propertyFilterState.furnishTypes = [];
          window.propertyFilterState.sellerTypes = [];
          window.propertyFilterState.amountRanges = [];
        }
      };

      applyBtn.onclick = function () {
        // Mimic the search button click: show loader, disable search button, call searchProperties
        if (typeof loader !== 'undefined') loader.classList.remove('hidden');
        if (typeof searchBtn !== 'undefined') searchBtn.disabled = true;
        if (typeof window.searchProperties === 'function') window.searchProperties();
      };

      // --- SORT EVENT LISTENER ---
      if (sortDropdown) {
        sortDropdown.value = window.propertySortState.sortBy || "Relevance";
        sortDropdown.addEventListener("change", function (e) {
          window.propertySortState.sortBy = sortDropdown.value;
          window.searchProperties(1); // Always reset to page 1 on sort change
        });
      }

      // --- GLOBAL FILTER STATE ---
      window.propertyFilterState = {
        bedrooms: [],
        propertyTypes: [],
        furnishTypes: [],
        sellerTypes: [],
        amountRanges: [] // array of {min, max}
      };
      // Attach filter listeners for live filtering
      function attachFilterListeners() {
        // Bedrooms
        document.querySelectorAll('.bedroom-checkboxes input[type="checkbox"]').forEach(cb => {
          cb.addEventListener('change', function () {
            const val = cb.value;
            if (cb.checked) {
              if (!window.propertyFilterState.bedrooms.includes(val)) window.propertyFilterState.bedrooms.push(val);
            } else {
              window.propertyFilterState.bedrooms = window.propertyFilterState.bedrooms.filter(v => v !== val);
            }
          });
        });
        // Property Types
        document.querySelectorAll('.property-type-checkboxes input[type="checkbox"]').forEach(cb => {
          cb.addEventListener('change', function () {
            const val = cb.value;
            if (cb.checked) {
              if (!window.propertyFilterState.propertyTypes.includes(val)) window.propertyFilterState.propertyTypes.push(val);
            } else {
              window.propertyFilterState.propertyTypes = window.propertyFilterState.propertyTypes.filter(v => v !== val);
            }
          });
        });
        // Furnish Types
        document.querySelectorAll('.furnish-type-checkboxes input[type="checkbox"]').forEach(cb => {
          cb.addEventListener('change', function () {
            const val = cb.value;
            if (cb.checked) {
              if (!window.propertyFilterState.furnishTypes.includes(val)) window.propertyFilterState.furnishTypes.push(val);
            } else {
              window.propertyFilterState.furnishTypes = window.propertyFilterState.furnishTypes.filter(v => v !== val);
            }
          });
        });
        // Seller Types
        document.querySelectorAll('.seller-type-checkboxes input[type="checkbox"]').forEach(cb => {
          cb.addEventListener('change', function () {
            const val = cb.value;
            if (cb.checked) {
              if (!window.propertyFilterState.sellerTypes.includes(val)) window.propertyFilterState.sellerTypes.push(val);
            } else {
              window.propertyFilterState.sellerTypes = window.propertyFilterState.sellerTypes.filter(v => v !== val);
            }
          });
        });
        // Amount
        document.querySelectorAll('.p-3 input[type="checkbox"]').forEach(cb => {
          cb.addEventListener('change', function () {
            // Rebuild amountRanges array
            const all = Array.from(document.querySelectorAll('.p-3 input[type="checkbox"]'));
            window.propertyFilterState.amountRanges = all.filter(c => c.checked).map(c => {
              const label = c.parentElement.textContent.trim();
              if (label.includes('Below')) return { min: 0, max: 5000000 };
              if (label.includes('₹50L - ₹1Cr')) return { min: 5000000, max: 10000000 };
              if (label.includes('₹1Cr - ₹2Cr')) return { min: 10000000, max: 20000000 };
              if (label.includes('Above')) return { min: 20000000, max: null };
              return null;
            }).filter(Boolean);
          });
        });
      }

      // Only update property results, do not re-render filter UI
      async function updatePropertyResults() {
        const searchPropertyContainer = document.getElementById("search-property-container");
        if (!searchPropertyContainer) return;
        searchPropertyContainer.innerHTML = `<div class='col-span-full flex justify-center items-center py-10' style='min-height:220px;'><div class='flex flex-col justify-center items-center w-full'><div class='loading-spinner' style='margin:0 auto;'></div><span class='mt-4 text-gray-600'>Searching properties...</span></div></div>`;
        try {
          // Use global filter state
          const selectedBedrooms = window.propertyFilterState.bedrooms;
          const selectedPropertyTypes = window.propertyFilterState.propertyTypes;
          const selectedFurnishTypes = window.propertyFilterState.furnishTypes;
          const selectedSellerTypes = window.propertyFilterState.sellerTypes;
          let minAmount = null, maxAmount = null;
          const selectedRanges = window.propertyFilterState.amountRanges;
          if (selectedRanges.length > 0) {
            minAmount = Math.min(...selectedRanges.map(r => r.min));
            if (selectedRanges.some(r => r.max === null)) {
              maxAmount = null;
            } else {
              maxAmount = Math.max(...selectedRanges.map(r => r.max));
            }
          } else {
            // If filter UI already rendered, update sort dropdown event listener
            sortDropdown = document.getElementById("relevance-dropdown");
            if (sortDropdown) {
              sortDropdown.value = window.propertySortState.sortBy || "Relevance";
              sortDropdown.onchange = function (e) {
                window.propertySortState.sortBy = sortDropdown.value;
                window.searchProperties(1);
              };
            }
          }

          const params = new URLSearchParams();
          params.append('page', String(page));
          params.append('pageSize', '10');
          params.append('sourceWebsite', 'Deccanrealty.com');
          if (selectedType) params.append('propertyFor', selectedType.charAt(0).toUpperCase() + selectedType.slice(1));
          if (selectedBedrooms.length > 0) params.append('bhkType', selectedBedrooms.join(','));
          if (selectedPropertyTypes.length > 0) params.append('propertyTypes', selectedPropertyTypes.join(','));
          if (selectedFurnishTypes.length > 0) params.append('furnishing', selectedFurnishTypes.join(','));
          if (selectedSellerTypes.length > 0) params.append('listedBy', selectedSellerTypes.join(','));
          if (minAmount !== null) params.append('minAmount', minAmount);
          if (maxAmount !== null) params.append('maxAmount', maxAmount);

          const apiUrl = `https://dncrnewapi-bmbfb6f6awd8b0bd.westindia-01.azurewebsites.net/properties?${params.toString()}`;

          const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac"
            },
          });
          const data = await response.json();
          if (
            data.success &&
            data.data &&
            data.data.properties &&
            data.data.properties.length > 0
          ) {
            searchPropertyContainer.innerHTML = data.data.properties
              .map((property, idx) => {
                let imageUrl = "";
                let images = [];
                try {
                  const imageData = JSON.parse(property.imageURL);
                  if (Array.isArray(imageData) && imageData.length > 0) {
                    imageUrl = imageData[0].imageUrl;
                    images = imageData.map((img) => img.imageUrl).filter(Boolean);
                  }
                } catch (e) {
                  imageUrl =
                    "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/Trending/nf5fbl8k6d28y6wfnx0r";
                  images = [imageUrl];
                }
                const formattedPrice = property.price
                  ? `₹ ${(property.price / 10000000).toFixed(2)} Cr`
                  : "Price on Request";
                const shortDescription =
                  property.shortDescription ||
                  property.longDescription ||
                  "Premium property available for viewing";
                const cleanDescription = shortDescription
                  .replace(/<[^>]*>/g, "")
                  .replace(/&nbsp;/g, " ")
                  .replace(/&#160;/g, " ")
                  .trim();
                return `
          <div class="w-full bg-white sm:rounded-xl rounded-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform flex flex-col justify-between min-h-[550px] mb-6">
            <div class="relative">
              <img src="${imageUrl}" alt="${property.propertyName
                  }" class="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-110">
              <span class="absolute top-2 right-2 bg-[#b1923f] text-white px-3 py-1 text-xs sm:text-sm rounded-full font-medium">Trending</span>
            </div>
            <div class="p-4 sm:p-5 bg-gradient-to-b from-gray-50 to-white flex flex-col flex-grow">
              <div class="space-y-3 flex-grow">
                <div>
                  <h2 class="text-lg sm:text-xl font-bold lg:text-black lg:font-semibold line-clamp-1">${property.propertyName
                  }</h2>
                  <p class="text-sm lg:text-black lg:text-semibold flex items-center">
                    <i class="fas fa-map-marker-alt mr-2"></i>${property.locationAddress || property.city
                  }
                  </p>
                  <span class="text-base sm:text-lg lg:text-[16px] font-semibold lg:text-black block">
                    ${formattedPrice}
                  </span>
                </div>
                <div class="text-xs sm:text-sm space-y-2">
                  <p class="flex items-center lg:text-black">
                      <i class="fas fa-home text-green-500 mr-2"></i>
                      <span class="line-clamp-2">${property.propertyType || "Premium Apartments"
                  }</span>
                  </p>
                  <p class="flex items-center lg:text-black">
                      <i class="fas fa-ruler-combined text-green-500 mr-2"></i>
                      ${property.area || ""} ${property.lmUnit || "Sq.Ft."}
                  </p>
                  <p class="flex items-center lg:text-black">
                      <i class="fas fa-calendar-alt text-green-500 mr-2"></i>
                      ${property.readyToMove
                    ? "Ready to Move"
                    : "Under Construction"
                  }
                  </p>
                </div>
                <div class="text-sm text-black mt-2">${cleanDescription}</div>
              </div>
              <div class="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center gap-3">
                <button type="button" class="bg-[#008a46] hover:bg-[#b1923f] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300" onclick="window.location.href='property_details.html?pro=${property.propertyId || property.id
                  }&in=${idx}&slid=false&partnerProperty=false'">Details</button>
                <button onclick="openEnquiryForm({ propertyName: '${property.propertyName
                  }' })" class="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">Enquiry Now</button>
              </div>
            </div>
          </div>
        `;
              })
              .join("");
          } else {
            searchPropertyContainer.innerHTML = `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="flex items-center justify-center mb-4">
            <svg class="w-12 h-12 text-yellow-500 animate-bounce" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/></svg>
          </div>
          <div class="bg-yellow-100 border border-yellow-400 text-yellow-800 px-6 py-4 rounded-lg shadow-md max-w-xl text-center">
            <span class="font-bold text-lg">No properties found</span>
            <div class="mt-2 text-base">Sorry, we couldn't find any properties matching your search.<br>Try changing your filters or search criteria.</div>
          </div>
        </div>
      `;
          }
        } catch (err) {
          searchPropertyContainer.innerHTML =
            '<div class="text-center text-red-600 py-10">Failed to fetch properties. Please try again later.</div>';
        }
      }
    }
    // Always clear and show loading in results
    searchPropertyContainer.innerHTML = `<div class='col-span-full flex justify-center items-center py-10' style='min-height:220px;'><div class='flex flex-col justify-center items-center w-full'><div class='loading-spinner' style='margin:0 auto;'></div><span class='mt-4 text-gray-600'>Searching properties...</span></div></div>`;

    try {
      // Collect selected filter values from DOM
      // Bedrooms
      const selectedBedrooms = Array.from(document.querySelectorAll('.bedroom-checkboxes input[type="checkbox"]:checked')).map(cb => cb.value);
      // Property Types
      const selectedPropertyTypes = Array.from(document.querySelectorAll('.property-type-checkboxes input[type="checkbox"]:checked')).map(cb => cb.value);
      // Furnish Types
      const selectedFurnishTypes = Array.from(document.querySelectorAll('.furnish-type-checkboxes input[type="checkbox"]:checked')).map(cb => cb.value);
      // Seller Types
      const selectedSellerTypes = Array.from(document.querySelectorAll('.seller-type-checkboxes input[type="checkbox"]:checked')).map(cb => cb.value);
      // Amount (minAmount, maxAmount)
      let minAmount = null, maxAmount = null;
      const amountCheckboxes = Array.from(document.querySelectorAll('.p-3 input[type="checkbox"]'));
      // Collect all selected ranges
      const selectedRanges = [];
      amountCheckboxes.forEach(cb => {
        if (cb.checked) {
          const label = cb.parentElement.textContent.trim();
          if (label.includes('Below')) {
            selectedRanges.push({ min: 0, max: 5000000 });
          } else if (label.includes('₹50L - ₹1Cr')) {
            selectedRanges.push({ min: 5000000, max: 10000000 });
          } else if (label.includes('₹1Cr - ₹2Cr')) {
            selectedRanges.push({ min: 10000000, max: 20000000 });
          } else if (label.includes('Above')) {
            selectedRanges.push({ min: 20000000, max: null });
          }
        }
      });
      if (selectedRanges.length > 0) {
        minAmount = Math.min(...selectedRanges.map(r => r.min));
        // If any selected range has max=null, treat as open-ended
        if (selectedRanges.some(r => r.max === null)) {
          maxAmount = null;
        } else {
          maxAmount = Math.max(...selectedRanges.map(r => r.max));
        }
      }

      // Use current page from global state if available
      const params = new URLSearchParams();
      let pageNum = 1;
      if (window.propertySearchState && window.propertySearchState.currentPage) {
        pageNum = window.propertySearchState.currentPage;
      }

      params.append('page', String(pageNum));
      params.append('pageSize', '10');
      params.append('sourceWebsite', 'deccanrealty.com');
      // Only add propertyFor if a toggle is selected
      if (selectedType) params.append('propertyFor', selectedType.charAt(0).toUpperCase() + selectedType.slice(1));

      // --- SORT PARAM ---
      let sortBy = window.propertySortState && window.propertySortState.sortBy ? window.propertySortState.sortBy : "Relevance";
      if (sortBy && sortBy !== "Relevance") {
        params.append('sortBy', sortBy);
      }

      // --- City/Address logic ---
      let selectedLocation = locationDropdown.value;
      const addressInput = document.getElementById('address-input');
      const addressInputValue = addressInput && addressInput.value && addressInput.value.trim();

      // We'll use a simple city list from the dropdown for city match (can be improved with suggestions array)
      let cityOptions = [];
      if (locationDropdown) {
        cityOptions = Array.from(locationDropdown.options).map(opt => opt.value).filter(v => v);
      }

      if (addressInputValue) {
        // If addressInputValue matches a city in dropdown, treat as city
        const isCity = cityOptions.some(city => city.toLowerCase() === addressInputValue.toLowerCase());
        if (isCity) {
          params.append('city', addressInputValue);
        } else {
          // Always send city as empty if not matched, and send address
          params.append('city', '');
          params.append('address', addressInputValue);
        }
      } else if (selectedLocation) {
        params.append('city', selectedLocation);
      }

      // Add bedrooms
      if (selectedBedrooms.length > 0) params.append('bhkType', selectedBedrooms.join(','));
      // Add property types
      if (selectedPropertyTypes.length > 0) params.append('propertyTypes', selectedPropertyTypes.join(','));
      // Add furnish types
      if (selectedFurnishTypes.length > 0) params.append('furnishing', selectedFurnishTypes.join(','));
      // Add seller types
      if (selectedSellerTypes.length > 0) params.append('listedBy', selectedSellerTypes.join(','));
      // Add amount
      if (minAmount !== null) params.append('minAmount', minAmount);
      if (maxAmount !== null) params.append('maxAmount', maxAmount);

      const apiUrl = `https://dncrnewapi-bmbfb6f6awd8b0bd.westindia-01.azurewebsites.net/properties?${params.toString()}`;

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac"
        },
      });
      const data = await response.json();
      // --- Filter for exact address match on frontend if address search is used ---
      let filteredProperties = data.data && data.data.properties ? data.data.properties : [];
      // If address search, filter strictly for address; if city search, filter strictly for city
      const isCity = cityOptions.some(city => city.toLowerCase() === (addressInputValue || '').toLowerCase());
      if (addressInputValue && isCity) {
        // City search: show only properties where city matches exactly
        filteredProperties = filteredProperties.filter(property => {
          return (property.city || '').trim().toLowerCase() === addressInputValue.trim().toLowerCase();
        });
      } else if (addressInputValue && !isCity) {
        // Address search: all address parts must be present in property address (case-insensitive, strict)
        const addressParts = addressInputValue.split(',').map(part => part.trim().toLowerCase()).filter(Boolean);
        filteredProperties = filteredProperties.filter(property => {
          const propAddr = (property.locationAddress || property.address || '').trim().toLowerCase();
          return addressParts.every(part => propAddr.includes(part));
        });
      }
      if (
        data.success &&
        filteredProperties &&
        filteredProperties.length > 0
      ) {
        // Render property cards
        searchPropertyContainer.innerHTML = filteredProperties
          .map((property, idx) => {
            let imageUrl = "";
            let images = [];
            try {
              const imageData = JSON.parse(property.imageURL);
              if (Array.isArray(imageData) && imageData.length > 0) {
                imageUrl = imageData[0].imageUrl;
                images = imageData.map((img) => img.imageUrl).filter(Boolean);
              }
            } catch (e) {
              imageUrl =
                "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/Trending/nf5fbl8k6d28y6wfnx0r";
              images = [imageUrl];
            }
            const formattedPrice = property.price
              ? `₹ ${(property.price / 10000000).toFixed(2)} Cr`
              : "Price on Request";
            const shortDescription =
              property.shortDescription ||
              property.longDescription ||
              "Premium property available for viewing";
            const cleanDescription = shortDescription
              .replace(/<[^>]*>/g, "")
              .replace(/&nbsp;/g, " ")
              .replace(/&#160;/g, " ")
              .trim();
            return `
            <div class="w-full bg-white sm:rounded-xl rounded-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform flex flex-col justify-between min-h-[550px] mb-6">
              <div class="relative">
                <img src="${imageUrl}" alt="${property.propertyName
              }" class="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-110">
                <span class="absolute top-2 right-2 bg-[#b1923f] text-white px-3 py-1 text-xs sm:text-sm rounded-full font-medium">Trending</span>
              </div>
              <div class="p-4 sm:p-5 bg-gradient-to-b from-gray-50 to-white flex flex-col flex-grow">
                <div class="space-y-3 flex-grow">
                  <div>
                    <h2 class="text-lg sm:text-xl font-bold lg:text-black lg:font-semibold line-clamp-1">${property.propertyName
              }</h2>
                    <p class="text-sm lg:text-black lg:text-semibold flex items-center">
                      <i class="fas fa-map-marker-alt mr-2"></i>${property.locationAddress || property.city
              }
                    </p>
                    <span class="text-base sm:text-lg lg:text-[16px] font-semibold lg:text-black block">
                      ${formattedPrice}
                    </span>
                  </div>
                  <div class="text-xs sm:text-sm space-y-2">
                    <p class="flex items-center lg:text-black">
                        <i class="fas fa-home text-green-500 mr-2"></i>
                        <span class="line-clamp-2">${property.propertyType || "Premium Apartments"
              }</span>
                    </p>
                    <p class="flex items-center lg:text-black">
                        <i class="fas fa-ruler-combined text-green-500 mr-2"></i>
                        ${property.area || ""} ${property.lmUnit || "Sq.Ft."}
                    </p>
                    <p class="flex items-center lg:text-black">
                        <i class="fas fa-calendar-alt text-green-500 mr-2"></i>
                        ${property.readyToMove
                ? "Ready to Move"
                : "Under Construction"
              }
                    </p>
                  </div>
                  <div class="text-sm text-black mt-2">${cleanDescription}</div>
                </div>
                <div class="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center gap-3">
                  <button type="button" class="bg-[#008a46] hover:bg-[#b1923f] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300" onclick="window.location.href='property_details.html?pro=${property.propertyId || property.id
              }&in=${idx}&slid=false&partnerProperty=false'">Details</button>
                  <button onclick="openEnquiryForm({ propertyName: '${property.propertyName
              }' })" class="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">Enquiry Now</button>
                </div>
              </div>
            </div>
          `;
          })
          .join("");

        // Render pagination controls
        renderTopPagination(data.data.pagination);
        renderBottomPagination(data.data.pagination);

        // Helper to render top pagination (summary + next/prev only)
        function renderTopPagination(pagination) {
          if (!pagination || pagination.totalPages <= 1) return;
          // Remove old top pagination
          const oldTopPag = searchPropertyContainer.querySelector('.property-pagination-top');
          if (oldTopPag) oldTopPag.remove();
          const container = document.createElement('div');
          container.className = 'property-pagination-top flex justify-between items-center mb-6 p-4 bg-gray-50 rounded-lg border';
          // Use correct property names from API
          const currentStart = ((pagination.currentPage - 1) * pagination.itemsPerPage) + 1;
          const currentEnd = Math.min(pagination.currentPage * pagination.itemsPerPage, pagination.totalItems);
          container.innerHTML = `
            <div class="text-sm text-gray-600 font-medium">
              Showing ${currentStart}-${currentEnd} of ${pagination.totalItems} properties
            </div>
            <div class="flex gap-2">
              <button class="px-4 py-2 rounded-lg border-2 border-[#008a46] bg-white text-[#008a46] font-semibold shadow-sm transition-all duration-200 ${pagination.currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#008a46] hover:text-white hover:shadow-lg'}" ${pagination.currentPage === 1 ? 'disabled' : ''} data-page="${pagination.currentPage - 1}">
                <i class='fas fa-chevron-left mr-1'></i> Prev
              </button>
              <button class="px-4 py-2 rounded-lg border-2 border-[#008a46] bg-white text-[#008a46] font-semibold shadow-sm transition-all duration-200 ${pagination.currentPage === pagination.totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#008a46] hover:text-white hover:shadow-lg'}" ${pagination.currentPage === pagination.totalPages ? 'disabled' : ''} data-page="${pagination.currentPage + 1}">
                Next <i class='fas fa-chevron-right ml-1'></i>
              </button>
            </div>
          `;
          searchPropertyContainer.prepend(container);
          // Add click listeners
          container.querySelectorAll('button[data-page]').forEach(btn => {
            btn.addEventListener('click', function () {
              const page = parseInt(this.getAttribute('data-page'));
              if (!isNaN(page) && page !== pagination.currentPage && page >= 1 && page <= pagination.totalPages) {
                if (!window.propertySearchState) window.propertySearchState = {};
                window.propertySearchState.currentPage = page;
                window.searchProperties(page);
                setTimeout(() => {
                  searchPropertyContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
              }
            });
          });
        }

        // Helper to render bottom pagination (full pagination controls)
        function renderBottomPagination(pagination) {
          if (!pagination || pagination.totalPages <= 1) return;
          // Remove old bottom pagination
          const oldBottomPag = searchPropertyContainer.querySelector('.property-pagination-bottom');
          if (oldBottomPag) oldBottomPag.remove();
          const container = document.createElement('div');
          container.className = 'property-pagination-bottom flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 p-4';
          let html = '<div class="flex flex-wrap justify-center items-center gap-2">';
          // Prev button
          html += `<button class="px-3 py-2 rounded-lg border-2 border-[#008a46] bg-white text-[#008a46] font-semibold shadow-sm transition-all duration-200 ${pagination.currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#008a46] hover:text-white hover:shadow-lg'}" ${pagination.currentPage === 1 ? 'disabled' : ''} data-page="${pagination.currentPage - 1}">
            <i class='fas fa-chevron-left mr-1'></i> Prev
          </button>`;
          // Page numbers (show up to 5 pages around current)
          let start = Math.max(1, pagination.currentPage - 2);
          let end = Math.min(pagination.totalPages, pagination.currentPage + 2);
          // Adjust range to always show 5 pages if possible
          if (pagination.currentPage <= 3) {
            end = Math.min(5, pagination.totalPages);
          }
          if (pagination.currentPage > pagination.totalPages - 2) {
            start = Math.max(1, pagination.totalPages - 4);
          }
          // Show first page and ellipsis if needed
          if (start > 1) {
            html += `<button class="px-3 py-2 rounded-lg border-2 bg-white text-[#008a46] border-[#008a46] hover:bg-[#008a46] hover:text-white hover:shadow-lg transition-all duration-200" data-page="1">1</button>`;
            if (start > 2) {
              html += `<span class="px-2 text-gray-500">...</span>`;
            }
          }
          // Page numbers
          for (let i = start; i <= end; i++) {
            html += `<button class="px-3 py-2 rounded-lg border-2 ${i === pagination.currentPage ? 'bg-[#008a46] text-white font-bold border-[#b1923f] shadow-lg scale-105' : 'bg-white text-[#008a46] border-[#008a46] hover:bg-[#008a46] hover:text-white hover:shadow-lg'} transition-all duration-200" data-page="${i}">${i}</button>`;
          }
          // Show last page and ellipsis if needed
          if (end < pagination.totalPages) {
            if (end < pagination.totalPages - 1) {
              html += `<span class="px-2 text-gray-500">...</span>`;
            }
            html += `<button class="px-3 py-2 rounded-lg border-2 bg-white text-[#008a46] border-[#008a46] hover:bg-[#008a46] hover:text-white hover:shadow-lg transition-all duration-200" data-page="${pagination.totalPages}">${pagination.totalPages}</button>`;
          }
          // Page info
          html += `<span class="px-4 py-2 text-sm text-gray-600 font-medium">of ${pagination.totalPages}</span>`;
          // Next button
          html += `<button class="px-3 py-2 rounded-lg border-2 border-[#008a46] bg-white text-[#008a46] font-semibold shadow-sm transition-all duration-200 ${pagination.currentPage === pagination.totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#008a46] hover:text-white hover:shadow-lg'}" ${pagination.currentPage === pagination.totalPages ? 'disabled' : ''} data-page="${pagination.currentPage + 1}">
            Next <i class='fas fa-chevron-right ml-1'></i>
          </button>`;
          html += '</div>';
          container.innerHTML = html;
          searchPropertyContainer.appendChild(container);
          // Add click listeners
          container.querySelectorAll('button[data-page]').forEach(btn => {
            btn.addEventListener('click', function () {
              const page = parseInt(this.getAttribute('data-page'));
              if (!isNaN(page) && page !== pagination.currentPage && page >= 1 && page <= pagination.totalPages) {
                if (!window.propertySearchState) window.propertySearchState = {};
                window.propertySearchState.currentPage = page;
                window.searchProperties(page);
                setTimeout(() => {
                  searchPropertyContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
              }
            });
          });
        }
      } else {
        // Show the message only in the search results section, not the whole property-render-container
        if (typeof searchResultsSection !== 'undefined' && searchResultsSection) {
          searchResultsSection.innerHTML = `
            <div class="flex flex-col items-center justify-center py-12 min-h-[350px] w-full">
              <div class="flex items-center justify-center mb-4">
                <svg class="w-12 h-12 text-yellow-500 animate-bounce" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/></svg>
              </div>
              <div class="bg-yellow-100 border border-yellow-400 text-yellow-800 px-6 py-4 rounded-lg shadow-md max-w-xl text-center">
                <span class="font-bold text-lg">No properties found</span>
                <div class="mt-2 text-base">Sorry, we couldn't find any properties matching your search.<br>Try changing your filters or search criteria.</div>
              </div>
            </div>
          `;
        }
      }


    } catch (err) {
      searchPropertyContainer.innerHTML =
        '<div class="text-center text-red-600 py-10">Failed to fetch properties. Please try again later.</div>';
    } finally {
      loader.classList.add("hidden");
      searchBtn.disabled = false;
    }
  }

  if (searchBtn) {
    searchBtn.addEventListener("click", window.searchProperties);
  }

  // --- Address Suggestions Logic (Google Places API) ---
  const suggestionBox = document.getElementById("address-suggestions");
  let suggestionTimeout;
  addressInput.addEventListener("input", function () {
    clearTimeout(suggestionTimeout);
    const query = addressInput.value.trim();
    if (query.length < 1) {
      suggestionBox.innerHTML = "";
      suggestionBox.classList.add("hidden");
      suggestionBox.style.display = "none";
      return;
    }
    suggestionTimeout = setTimeout(
      () => fetchGooglePlaceSuggestions(query),
      250
    );
  });

  async function fetchGooglePlaceSuggestions(query) {
    const apiUrl = `https://dncrnewapi-bmbfb6f6awd8b0bd.westindia-01.azurewebsites.net//master-details/getgoogleplaces?text=${encodeURIComponent(
      query
    )}&city=India`;
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error("No suggestions");
      const data = await response.json();
      const results = data.predictions || [];
      if (results.length === 0) {
        suggestionBox.innerHTML =
          '<div class="px-4 py-2 text-gray-500">No suggestions found</div>';
        suggestionBox.classList.add("hidden");
        suggestionBox.style.display = "block";
        return;
      }
      // Show suggestions below the input
      suggestionBox.innerHTML = results
        .map(
          (item) => `
        <div class='clsDropdown px-4 py-2 cursor-pointer hover:bg-[#f5f5f5] border-b border-gray-100 flex flex-col' data-description='${item.description.replace(
            /'/g,
            "&apos;"
          )}' tabindex="0" style='color:#222; background:#fff; font-size:1rem;'>
          <span class='font-semibold' style='color:#008a46;'>${item.structured_formatting.main_text
            }</span>
          <span class='text-xs text-gray-500 ml-2'>${item.structured_formatting.secondary_text || ""
            }</span>
        </div>`
        )
        .join("");
      suggestionBox.classList.add("hidden");
      suggestionBox.style.display = "block";
      suggestionBox.style.zIndex = "9999";
      suggestionBox.style.position = "absolute";
      suggestionBox.style.top = "100%";
      suggestionBox.style.left = "0";
      suggestionBox.style.right = "0";
      suggestionBox.style.background = "#fff";
      suggestionBox.style.border = "1px solid #e5e7eb";
      suggestionBox.style.borderTop = "none";
      suggestionBox.style.boxShadow = "0 4px 16px 0 rgba(0,0,0,0.08)";
      suggestionBox.style.maxHeight = "220px";
      suggestionBox.style.overflowY = "auto";
    } catch (err) {
      suggestionBox.innerHTML =
        '<div class="px-4 py-2 text-gray-500">No suggestions found</div>';
      suggestionBox.classList.add("hidden");
      suggestionBox.style.display = "block";
    }
  }

  // Click on suggestion
  suggestionBox.addEventListener("mousedown", function (e) {
    let target = e.target;
    if (!target.dataset.description && target.closest("[data-description]")) {
      target = target.closest("[data-description]");
    }
    if (target && target.dataset && target.dataset.description) {
      addressInput.value = target.dataset.description;
      suggestionBox.classList.add("hidden");
      suggestionBox.style.display = "none";
    }
  });
  // Hide suggestions on blur
  addressInput.addEventListener("blur", function () {
    setTimeout(() => {
      suggestionBox.classList.add("hidden");
      suggestionBox.style.display = "none";
    }, 200);
  });
});

// --- Location Autocomplete for Signup ---
document.addEventListener("DOMContentLoaded", function () {
  var locationInput = document.getElementById("location-signup");
  var suggestionBox = document.getElementById("suggestion_box_signup");
  let debounceTimeout;

  if (locationInput && suggestionBox) {
    // Style the suggestion box for absolute positioning and max height
    suggestionBox.style.position = "absolute";
    suggestionBox.style.left = "0";
    suggestionBox.style.right = "0";
    suggestionBox.style.top = "100%";
    suggestionBox.style.background = "#fff";
    suggestionBox.style.border = "1px solid #e5e7eb";
    suggestionBox.style.boxShadow = "0 4px 16px 0 rgba(0,0,0,0.08)";
    suggestionBox.style.maxHeight = "180px";
    suggestionBox.style.overflowY = "auto";
    suggestionBox.style.zIndex = "9999";
    suggestionBox.style.display = "none";

    // Ensure parent .input_wrap is relative for absolute positioning
    var inputWrap = locationInput.closest(".input_wrap");
    if (inputWrap) {
      inputWrap.style.position = "relative";
    }

    locationInput.addEventListener("input", function () {
      const query = locationInput.value.trim();
      clearTimeout(debounceTimeout);
      if (query.length < 2) {
        suggestionBox.innerHTML = "";
        suggestionBox.style.display = "none";
        return;
      }
      debounceTimeout = setTimeout(function () {
        fetch(
          "https://dncrnewapi-bmbfb6f6awd8b0bd.westindia-01.azurewebsites.net/master-details/getgoogleplaces?text=" +
          encodeURIComponent(query),
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac",
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data && data.predictions && data.predictions.length > 0) {
              suggestionBox.innerHTML = data.predictions
                .map(
                  (item) =>
                    `<div class=\"suggestion-item\" style=\"padding:8px 12px;cursor:pointer;\" data-value=\"${item.description}\">${item.description}</div>`
                )
                .join("");
              suggestionBox.style.display = "block";
            } else {
              suggestionBox.innerHTML =
                '<div style="padding:8px 12px;">No results found</div>';
              suggestionBox.style.display = "block";
            }
          })
          .catch(() => {
            suggestionBox.innerHTML =
              '<div style="padding:8px 12px;">Error fetching suggestions</div>';
            suggestionBox.style.display = "block";
          });
      }, 300);
    });
    // Click on suggestion
    suggestionBox.addEventListener("click", function (e) {
      if (e.target && e.target.classList.contains("suggestion-item")) {
        locationInput.value = e.target.getAttribute("data-value");
        suggestionBox.innerHTML = "";
        suggestionBox.style.display = "none";
      }
    });
    // Hide suggestions on blur (with delay for click)
    locationInput.addEventListener("blur", function () {
      setTimeout(() => {
        suggestionBox.style.display = "none";
      }, 200);
    });
    locationInput.addEventListener("focus", function () {
      if (suggestionBox.innerHTML.trim() !== "") {
        suggestionBox.style.display = "block";
      }
    });
  }
});

// Main initialization
document.addEventListener("DOMContentLoaded", async () => {
  // Identify containers by their IDs
  const newPropertiesContainer = document.getElementById("property-container");

  const serviceContainer = document.getElementById("service-container");

  // Render trending properties (Exceptional Properties section) using API
  if (newPropertiesContainer) {
    // Show loading spinner
    newPropertiesContainer.innerHTML = `
      <div class="col-span-full flex justify-center items-center py-10" style="min-height:220px;">
        <div class="flex flex-col justify-center items-center w-full">
          <div class="loading-spinner" style="margin:0 auto;"></div>
          <span class="mt-4 text-gray-600">Loading trending properties...</span>
        </div>
      </div>
    `;

    // Fetch trending properties from API
    fetchTrendingProperties()
      .then((properties) => {
        if (properties && properties.length > 0) {
          // Render API data using the trending property card
          newPropertiesContainer.innerHTML = properties
            .slice(0, 8) // Show first 8 properties
            .map((property) => createTrendingPropertyCardFromAPI(property))
            .join("");
        } else {
          // Fallback to hardcoded data if API fails or returns no data
          console.warn("No trending properties from API, using fallback data");
          newPropertiesContainer.innerHTML = properties
            .map(createPropertyCard)
            .join("");
        }
      })
      .catch((error) => {
        console.error("Error loading trending properties:", error);
        // Show error message
        newPropertiesContainer.innerHTML = `
        <div class="col-span-full text-center py-10">
          <div class="error-message mb-4">
           
            <i class="fas fa-exclamation-triangle text-orange-500 text-2xl mb-2"></i>
            <p class="text-gray-600">Unable to load trending properties. Showing default properties.</p>
          </div>
        </div>
      `;

        // Add fallback data after error message
        setTimeout(() => {
          newPropertiesContainer.innerHTML = properties
            .map(createPropertyCard)
            .join("");
        }, 2000);
      });
  }

  // Render service cards using API data
  if (serviceContainer) {
    // First show loading state
    serviceContainer.innerHTML =
      '<div class="col-span-full flex justify-center items-center py-10" style="min-height:180px;"><div class="flex flex-col justify-center items-center w-full"><div class="loading-spinner" style="margin:0 auto;"></div><p class="mt-4 text-gray-600">Loading expertise data...</p></div></div>';

    // Fetch and render API data
    fetchExpertiseData()
      .then((propertiesData) => {
        if (propertiesData && propertiesData.length > 0) {
          // Limit to 4 items for display
          const limitedData = propertiesData.slice(0, 4);
          serviceContainer.innerHTML = limitedData
            .map(createExpertiseCardFromAPI)
            .join("");
        } else {
          // Fallback to hardcoded data if API fails
          serviceContainer.innerHTML = services.map(createServiceCard).join("");
        }
      })
      .catch((error) => {
        console.error("Error rendering expertise data:", error);

        // Check if it's an authorization error
        let errorMessage =
          "We couldn't load our expertise data at the moment. Please try again later.";
        let errorClass = "api-error";

        if (
          error.message &&
          (error.message.includes("401") ||
            error.message.toLowerCase().includes("unauthorized"))
        ) {
          errorMessage = "Authentication failed. Please check your API token.";
          errorClass = "auth-error";
        }

        // Show appropriate error message
        serviceContainer.innerHTML = `
          <div class="col-span-full ${errorClass}">
            <i class="fas fa-exclamation-triangle text-2xl mb-2"></i>

            <p>${errorMessage}</p>
          </div>`;

        // Fallback to hardcoded data after a delay to show the error first
        setTimeout(() => {
          serviceContainer.innerHTML = services.map(createServiceCard).join("");
        }, 3000);
      });
  }

  // Render resale property listings using API (Ready to Move properties)
  const resalePropertiesContainer = document.getElementById(
    "resale-property-container"
  );
  if (resalePropertiesContainer) {
    // Show loading spinner
    resalePropertiesContainer.innerHTML = `
      <div class="col-span-full flex justify-center items-center py-10" style="min-height:220px;">
        <div class="flex flex-col justify-center items-center w-full">
          <div class="loading-spinner" style="margin:0 auto;"></div>
          <span class="mt-4 text-gray-600">Loading ready-to-move properties...</span>
        </div>
      </div>
    `;

    // Fetch ready-to-move properties from API
    fetchReadyToMoveProperties()
      .then((properties) => {
        if (properties && properties.length > 0) {
          // Render API data using the resale property card from API
          resalePropertiesContainer.innerHTML = properties
            .slice(0, 10) // Show first 10 properties
            .map((property, index) =>
              createResalePropertyCardFromAPI(property, index)
            )
            .join("");

          // Re-setup toggle buttons for the new content
          setTimeout(() => {
            setupToggleButtons();
          }, 100);
        } else {
          // Fallback to hardcoded data if API fails or returns no data
          console.warn(
            "No ready-to-move properties from API, using fallback data"
          );
          resalePropertiesContainer.innerHTML = resaleProperties
            .map((property, index) => createResalePropertyCard(property, index))
            .join("");

          // Re-setup toggle buttons for fallback content
          setTimeout(() => {
            setupToggleButtons();
          }, 100);
        }
      })
      .catch((error) => {
        console.error("Error loading ready-to-move properties:", error);
        // Show error message
        resalePropertiesContainer.innerHTML = `
        <div class="col-span-full text-center py-10">
          <div class="error-message mb-4">
            <i class="fas fa-exclamation-triangle text-orange-500 text-2xl mb-2"></i>
            <p class="text-gray-600">Unable to load ready-to-move properties. Showing default properties.</p>
          </div>
        </div>
      `;

        // Add fallback data after error message
        setTimeout(() => {
          resalePropertiesContainer.innerHTML = resaleProperties
            .map((property, index) => createResalePropertyCard(property, index))
            .join("");

          // Re-setup toggle buttons for fallback content
          setTimeout(() => {
            setupToggleButtons();
          }, 100);
        }, 2000);
      });
  }

  // Render rental property listings
  const rentalPropertiesContainer = document.getElementById(
    "rental-property-container"
  );
  if (rentalPropertiesContainer) {
    rentalPropertiesContainer.innerHTML = `<div class='col-span-full flex justify-center items-center py-10' style='min-height:220px;'><div class='flex flex-col justify-center items-center w-full'><div class='loading-spinner' style='margin:0 auto;'></div><span class='mt-4 text-gray-600'>Loading rentals...</span></div></div>`;
    const rentalProperties = await fetchRentalProperties();
    if (rentalProperties.length > 0) {
      rentalPropertiesContainer.innerHTML = rentalProperties
        .map((property, idx) => createTrendingPropertyCardFromAPI(property))
        .join("");
    } else {
      rentalPropertiesContainer.innerHTML = `<div class='col-span-full text-center py-10'><div class='error-message mb-4'><i class='fas fa-exclamation-triangle text-orange-500 text-2xl mb-2'></i><p class='text-gray-600'>No rental properties found.</p></div></div>`;
    }
  }
  // setupToggleButtons(); // Moved to individual API response handling
});

// Testimonial javascript code
// Default fallback reviews data
const defaultReviews = [
  {
    name: "Ms. Sony (Owner/Seller)",
    review:
      "Deccan Realty Team sold my flat seamlessly. Since I reside outside Bangalore, they managed the entire process with the new buyer professionally, without requiring my physical presence. Truly excellent service!",
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/logos/eiynhkneocoygez6zhyo",
  },
  {
    name: "Mr. Avinash (Buyer)",
    review:
      "Deccan Realty team facilitated the purchase of my flat in Whitefield, Bangalore, at a commendable price as per the market rate. Their expertise and professionalism made the entire process seamless.",
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/logos/d5zo5bconzxz1puzijfu",
  },
  {
    name: "Ms. Fauzia (Tenant)",
    review:
      "I am truly impressed by the Deccan Realty team's efficiency in securing a rental flat for me at ₹50K per month in South Bangalore. This accommodation perfectly meets my needs and is truly awesome for me!",
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/logos/eiynhkneocoygez6zhyo",
  },
  {
    name: "Mr. Pankaj (Buyer)",
    review:
      "I praise the Deccan Realty team for their professional assistance in facilitating my house purchase in a new and renowned project on Sarjapur Road, Bangalore. They secured a genuinely favorable rate, inclusive of multiple offers from the builder. I truly appreciate their efforts in making my home-buying journey remarkably easy. Thank you!",
    image:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/logos/d5zo5bconzxz1puzijfu",
  },
];

// Variable to store current reviews data
let reviews = [];

// Function to fetch testimonials from API
async function fetchTestimonials() {
  try {
    const authToken =
      "e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac";

    const response = await fetch(
      "https://dncrnewapi-bmbfb6f6awd8b0bd.westindia-01.azurewebsites.net/testimonials/by-createdby?createdBy=deccanrealty.com&pageNumber=1&pageSize=100",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.success && data.data && data.data.testimonials) {
      // Transform API data to match expected format
      return data.data.testimonials
        .filter((testimonial) => testimonial.recordStatus === "Active")
        .map((testimonial) => ({
          name: testimonial.customerName,
          review: testimonial.feedbackText,
          image: testimonial.imageURL || getDefaultImage(testimonial.userType),
        }));
    } else {
      console.error("API response format is not as expected:", data);
      return defaultReviews;
    }
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return defaultReviews;
  }
}

// Function to get default image based on user type
function getDefaultImage(userType) {
  const defaultImages = {
    Partner:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/logos/d5zo5bconzxz1puzijfu",
    Customer:
      "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/logos/eiynhkneocoygez6zhyo",
  };

  return (
    defaultImages[userType] ||
    "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/logos/d5zo5bconzxz1puzijfu"
  );
}

// DOM Elements
const carousel = document.getElementById("testimonialCarousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const indicatorsContainer = document.getElementById("indicators");

// Variables
let currentIndex = 0;
let autoPlayInterval = null;
const transitionDuration = 3000;
let isPaused = false;
let isAnimating = false;

// Function to create a single testimonial card
const createCard = (review, index) => {
  const card = document.createElement("div");
  card.className =
    "testimonial-card absolute top-0 left-0 w-full max-w-[500px] opacity-0 transition-all duration-700 ease-in-out";
  card.dataset.index = index;

  card.innerHTML = `
    <div class="flex flex-col bg-white border-2 border-[#b1934f60] rounded-xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out cursor-pointer hover:shadow-xl p-4 justify-around h-[400px]">
      <div class="w-full flex justify-center mb-4">
        <img src="${review.image}" alt="${review.name}" class="rounded-lg shadow-md w-32 h-32 object-cover border-4 border-[#b1923f] transition-transform duration-500 ease-in-out transform hover:scale-105"/>
      </div>
      <div class="w-full text-center flex flex-col flex-grow">
        <h3 class="font-bold text-lg sm:text-xl text-[#008a46] bg-gradient-to-r from-[#e3874da8]">${review.name}</h3>
        <div class="mt-2 flex-grow flex items-center">
          <p class="text-black text-sm sm:text-base bg-gradient-to-r from-[#9ec49137] to-white p-4 rounded-lg shadow-inner">${review.review}</p>
        </div>
      </div>
    </div>
  `;

  card.addEventListener("mouseenter", () => (isPaused = true));
  card.addEventListener("mouseleave", () => {
    isPaused = false;
    if (!autoPlayInterval) startAutoPlay();
  });

  return card;
};

// Function to show a specific card with door-slide animation
const showCard = (newIndex, direction = "next") => {
  if (
    isAnimating ||
    !reviews ||
    reviews.length === 0 ||
    newIndex >= reviews.length
  )
    return;
  isAnimating = true;

  const currentCard = carousel.querySelector(
    `.testimonial-card[data-index="${currentIndex}"]`
  );
  const nextCard = createCard(reviews[newIndex], newIndex);

  // Append the next card
  carousel.appendChild(nextCard);

  // Initial positioning
  if (direction === "next") {
    nextCard.style.transform = "translateX(100%)";
    nextCard.style.opacity = "1";
    currentCard.style.transform = "translateX(0)";
  } else {
    nextCard.style.transform = "translateX(-100%)";
    nextCard.style.opacity = "1";
    currentCard.style.transform = "translateX(0)";
  }

  // Trigger animation
  setTimeout(() => {
    if (direction === "next") {
      currentCard.style.transform = "translateX(-100%)";
      currentCard.style.opacity = "0";
      nextCard.style.transform = "translateX(0)";
    } else {
      currentCard.style.transform = "translateX(100%)";
      currentCard.style.opacity = "0";
      nextCard.style.transform = "translateX(0)";
    }
  }, 50);

  // Cleanup after animation
  setTimeout(() => {
    currentCard.remove();
    currentIndex = newIndex;
    updateIndicators(currentIndex);
    isAnimating = false;
  }, 800); // Matches the transition duration
};

// Create indicator dots
const createIndicators = () => {
  if (!reviews || reviews.length === 0) {
    console.warn("No reviews available for indicators");
    return;
  }

  indicatorsContainer.innerHTML = "";
  reviews.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className =
      "w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 focus:outline-none";
    dot.classList.add(index === 0 ? "bg-[#008a46]" : "bg-gray-300");
    dot.setAttribute("aria-label", `Go to testimonial ${index + 1}`);

    dot.addEventListener("click", () => {
      stopAutoPlay();
      const direction = index > currentIndex ? "next" : "prev";
      showCard(index, direction);
      startAutoPlay();
    });

    indicatorsContainer.appendChild(dot);
  });
};

// Update active indicator
const updateIndicators = (activeIndex) => {
  const indicators = indicatorsContainer.querySelectorAll("button");
  indicators.forEach((dot, index) => {
    dot.classList.toggle("bg-[#008a46]", index === activeIndex);
    dot.classList.toggle("bg-gray-300", index !== activeIndex);
    dot.classList.toggle("scale-110", index === activeIndex);
  });
};

// Start automatic cycling
const startAutoPlay = () => {
  if (!reviews || reviews.length === 0) {
    console.warn("Cannot start autoplay: no reviews available");
    return;
  }

  stopAutoPlay();
  autoPlayInterval = setInterval(() => {
    if (!isPaused && !isAnimating && reviews.length > 0) {
      const nextIndex = (currentIndex + 1) % reviews.length;
      showCard(nextIndex, "next");
    }
  }, transitionDuration);
};

// Stop automatic cycling
const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
  }
};

// Button event listeners
if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    if (!reviews || reviews.length === 0) return;
    stopAutoPlay();
    const prevIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    showCard(prevIndex, "prev");
    startAutoPlay();
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    if (!reviews || reviews.length === 0) return;
    stopAutoPlay();
    const nextIndex = (currentIndex + 1) % reviews.length;
    showCard(nextIndex, "next");
    startAutoPlay();
  });
}

// Add CSS styles
const addStyles = () => {
  const style = document.createElement("style");
  style.textContent = `
    #testimonialCarousel {
      position: relative;
      width: 100%;
      max-width: 500px;
      height: 450px;
      margin: 0 auto;
      overflow: hidden;
    }
    
    .testimonial-card {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      max-width: 500px;
      height: 400px;
      transition: transform 0.7s ease-in-out, opacity 0.7s ease-in-out;
    }
    
    #indicators button {
      width: 12px;
      height: 12px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
      margin: 0 6px;
    }
    
    #indicators button.bg-[#008a46] {
      transform: scale(1.2);
      box-shadow: 0 2px 6px rgba(0,138,70,0.5);
    }
  `;
  document.head.appendChild(style);
};

// Function to initialize testimonials carousel
async function initializeTestimonials() {
  // Check if required DOM elements exist
  if (!carousel || !indicatorsContainer) {
    console.warn("Testimonial carousel elements not found");
    return;
  }

  try {
    // Show loading state in testimonials section
    carousel.innerHTML =
      '<div class="absolute inset-0 flex items-center justify-center"><div class="loading-spinner"></div><p class="ml-4 text-gray-600">Loading testimonials...</p></div>';

    // Fetch testimonials from API
    const apiTestimonials = await fetchTestimonials();
    reviews = apiTestimonials;

    if (reviews.length === 0) {
      console.warn("No testimonials found, using default reviews");
      reviews = defaultReviews;
    }

    // Ensure we have at least one review to display
    if (reviews.length === 0) {
      carousel.innerHTML =
        '<div class="absolute inset-0 flex items-center justify-center"><p class="text-gray-600">No testimonials available</p></div>';
      return;
    }

    // Initialize carousel with fetched data
    addStyles();
    createIndicators();
    carousel.innerHTML = "";
    const initialCard = createCard(reviews[0], 0);
    initialCard.style.opacity = "1";
    initialCard.style.transform = "translateX(0)";
    carousel.appendChild(initialCard);
    updateIndicators(0);
    startAutoPlay();

    console.log(`Testimonials loaded: ${reviews.length} testimonials`);
  } catch (error) {
    console.error("Error initializing testimonials:", error);
    // Fallback to default reviews
    reviews = defaultReviews;

    if (reviews.length > 0) {
      addStyles();
      createIndicators();
      carousel.innerHTML = "";
      const initialCard = createCard(reviews[0], 0);
      initialCard.style.opacity = "1";
      initialCard.style.transform = "translateX(0)";
      carousel.appendChild(initialCard);
      updateIndicators(0);
      startAutoPlay();
    } else {
      carousel.innerHTML =
        '<div class="absolute inset-0 flex items-center justify-center"><p class="text-red-600">Error loading testimonials</p></div>';
    }
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initializeTestimonials();
});

if (
  document.readyState === "complete" ||
  document.readyState === "interactive"
) {
  setTimeout(() => {
    initializeTestimonials();
  }, 200);
}

// --- OTP Verification for Signup ---
document.getElementById("verify-otp-signup").onclick = async function (event) {
  event.preventDefault();
  const btn = document.getElementById("verify-otp-signup");
  const spinner = document.getElementById("otp-signup-spinner");
  if (spinner) spinner.style.display = "inline-block";
  btn.disabled = true;
  // Use signup email
  const email = document.getElementById("email-signup").value.trim();
  const otp = document.getElementById("otp-input-signup").value.trim();
  const otpError = document.getElementById("otp-error-signup");
  if (!otp) {
    otpError.style.display = "block";
    otpError.textContent = "Please enter the OTP.";
    if (spinner) spinner.style.display = "none";
    btn.disabled = false;
    return;
  } else {
    otpError.style.display = "none";
  }
  try {
    const res = await fetch(
      "https://dncrnewapi-bmbfb6f6awd8b0bd.westindia-01.azurewebsites.net/account/otp-verification",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      }
    );
    const data = await res.json();
    let token = data.token;
    if (!token && data.data && typeof data.data === "string") {
      token = data.data;
    }
    if (data.success && token) {
      otpError.style.display = "none";
      document.getElementById("otp-modal-signup").style.display = "none";
      document.getElementById("signup-modal").style.display = "none";
      document.getElementById("user-auth-modal").style.display = "none";
      if (typeof urlRedirection === "function") {
        urlRedirection(token);
      } else if (window.urlRedirection) {
        window.urlRedirection(token);
      } else {
        window.location.href = `https://devdncrfe.azurewebsites.net/Redirecting/?tok=${token}`;
      }
      return;
    } else if (data.success) {
      otpError.style.display = "block";
      otpError.textContent = "Token not received. Please try again.";
    } else {
      otpError.style.display = "block";
      otpError.textContent = data.message || "Invalid OTP!";
    }
  } catch (err) {
    otpError.style.display = "block";
    otpError.textContent = "Unable to verify OTP. Try again.";
  } finally {
    if (spinner) spinner.style.display = "none";
    btn.disabled = false;
  }
};

// Address autocomplete for searchbar
window.initAddressAutocomplete = function () {
  const addressInput = document.getElementById("address-input");
  const suggestionBox = document.getElementById("address-suggestions");
  let debounceTimeout;

  addressInput.addEventListener("input", function () {
    clearTimeout(debounceTimeout);
    const query = addressInput.value.trim();
    if (query.length < 1) {
      suggestionBox.innerHTML = "";
      suggestionBox.classList.add("hidden");
      suggestionBox.style.display = "none";
      return;
    }
    debounceTimeout = setTimeout(() => fetchGooglePlaceSuggestions(query), 250);
  });

  async function fetchGooglePlaceSuggestions(query) {
    const apiUrl = `https://dncrnewapi-bmbfb6f6awd8b0bd.westindia-01.azurewebsites.net//master-details/getgoogleplaces?text=${encodeURIComponent(
      query
    )}&city=India`;
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error("No suggestions");
      const data = await response.json();
      const results = data.predictions || [];
      if (results.length === 0) {
        suggestionBox.innerHTML =
          '<div class="px-4 py-2 text-gray-500">No suggestions found</div>';
        suggestionBox.classList.add("hidden");
        suggestionBox.style.display = "block";
        return;
      }
      suggestionBox.innerHTML = results
        .map(
          (item) => `
        <div class='clsDropdown px-4 py-2 cursor-pointer hover:bg-[#f5f5f5] border-b border-gray-100 flex flex-col' data-description='${item.description.replace(
            /'/g,
            "&apos;"
          )}' tabindex="0" style='color:#222; background:#fff; font-size:1rem;'>
          <span class='font-semibold' style='color:#008a46;'>${item.structured_formatting.main_text
            }</span>
          <span class='text-xs text-gray-500 ml-2'>${item.structured_formatting.secondary_text || ""
            }</span>
        </div>`
        )
        .join("");
      suggestionBox.classList.add("hidden");
      suggestionBox.style.display = "block";
      suggestionBox.style.zIndex = "9999";
      suggestionBox.style.position = "absolute";
      suggestionBox.style.top = "100%";
      suggestionBox.style.left = "0";
      suggestionBox.style.right = "0";
      suggestionBox.style.background = "#fff";
      suggestionBox.style.border = "1px solid #e5e7eb";
      suggestionBox.style.borderTop = "none";
      suggestionBox.style.boxShadow = "0 4px 16px 0 rgba(0,0,0,0.08)";
      suggestionBox.style.maxHeight = "220px";
      suggestionBox.style.overflowY = "auto";
    } catch (err) {
      suggestionBox.innerHTML =
        '<div class="px-4 py-2 text-gray-500">No suggestions found</div>';
      suggestionBox.classList.add("hidden");
      suggestionBox.style.display = "block";
    }
  }

  // Click on suggestion
  suggestionBox.addEventListener("mousedown", function (e) {
    let target = e.target;
    if (!target.dataset.description && target.closest("[data-description]")) {
      target = target.closest("[data-description]");
    }
    if (target && target.dataset && target.dataset.description) {
      addressInput.value = target.dataset.description;
      suggestionBox.classList.add("hidden");
      suggestionBox.style.display = "none";
    }
  });
  // Hide suggestions on blur
  addressInput.addEventListener("blur", function () {
    setTimeout(() => {
      suggestionBox.classList.add("hidden");
      suggestionBox.style.display = "none";
    }, 200);
  });
};
document.addEventListener("DOMContentLoaded", function () {
  if (
    document.getElementById("address-input") &&
    document.getElementById("address-suggestions")
  ) {
    window.initAddressAutocomplete();
  }
});

// Function to fetch BHK types from API
async function fetchBHKTypes() {
  try {
    const response = await fetch(
      "https://mtestatesapi-f0bthnfwbtbxcecu.southindia-01.azurewebsites.net/master-details?masterName=BHKType",
      {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            "Bearer e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac",
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    if (data.success && data.data) {
      return data.data;
    } else {
      console.error("API response format is not as expected:", data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching BHK types:", error);
    return [];
  }
}

// Function to populate Bedrooms accordion with API data
async function populateBedroomsAccordion() {
  const bhkTypes = await fetchBHKTypes();
  const bedroomContainer = document.querySelector(".bedroom-checkboxes");

  if (bhkTypes.length > 0 && bedroomContainer) {
    bedroomContainer.innerHTML = bhkTypes
      .map(
        (type) => `
      <label class="flex items-center">
        <input type="checkbox" class="mr-2 rounded text-[#008a46] focus:ring-[#008a46]" value="${type.masterDetailName}" />
        ${type.masterDetailName}
      </label>
    `
      )
      .join("");
  } else {
    // Fallback to static data
    bedroomContainer.innerHTML = `
      <label class="flex items-center">
        <input type="checkbox" class="mr-2 rounded text-[#008a46] focus:ring-[#008a46]" value="1BHK" />
        1 BHK
      </label>
      <label class="flex items-center">
        <input type="checkbox" class="mr-2 rounded text-[#008a46] focus:ring-[#008a46]" value="2BHK" />
        2 BHK
      </label>
      <label class="flex items-center">
        <input type="checkbox" class="mr-2 rounded text-[#008a46] focus:ring-[#008a46]" value="3BHK" />
        3 BHK
      </label>
      <label class="flex items-center">
        <input type="checkbox" class="mr-2 rounded text-[#008a46] focus:ring-[#008a46]" value="4BHK+" />
        4+ BHK
      </label>
    `;
  }
}

// Function to fetch Property Types from API
async function fetchPropertyTypes() {
  try {
    const response = await fetch(
      "https://mtestatesapi-f0bthnfwbtbxcecu.southindia-01.azurewebsites.net/master-details?masterName=PropertyType",
      {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            "Bearer e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac",
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    if (data.success && data.data) {
      return data.data;
    } else {
      console.error("API response format is not as expected:", data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching Property Types:", error);
    return [];
  }
}

// Function to populate Property Type accordion with API data
async function populatePropertyTypeAccordion() {
  const propertyTypes = await fetchPropertyTypes();
  // Select the property type container using a unique class (add this class in your accordion HTML)
  const propertyTypeContainer = document.querySelector(
    ".property-type-checkboxes"
  );

  if (propertyTypes.length > 0 && propertyTypeContainer) {
    propertyTypeContainer.innerHTML = propertyTypes
      .map(
        (type) => `
      <label class="flex items-center">
        <input type="checkbox" class="mr-2 rounded text-[#008a46] focus:ring-[#008a46]" value="${type.masterDetailName}" />
        ${type.masterDetailName}
      </label>
    `
      )
      .join("");
  } else if (propertyTypeContainer) {
    // Fallback to static data
    propertyTypeContainer.innerHTML = `
      <label class="flex items-center">
        <input type="checkbox" class="mr-2 rounded text-[#008a46] focus:ring-[#008a46]" value="Apartment" />
        Apartment
      </label>
      <label class="flex items-center">
        <input type="checkbox" class="mr-2 rounded text-[#008a46] focus:ring-[#008a46]" value="Villa" />
        Villa
      </label>
      <label class="flex items-center">
        <input type="checkbox" class="mr-2 rounded text-[#008a46] focus:ring-[#008a46]" value="Studio" />
        Flat
      </label>
      <label class="flex items-center">
        <input type="checkbox" class="mr-2 rounded text-[#008a46] focus:ring-[#008a46]" value="Plot" />
        Plot
      </label>
    `;
  }
}

// Function to fetch Furnish Types from API
async function fetchFurnishTypes() {
  try {
    const response = await fetch(
      "https://mtestatesapi-f0bthnfwbtbxcecu.southindia-01.azurewebsites.net/master-details?masterName=FurnishType",
      {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            "Bearer e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac",
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    if (data.success && data.data) {
      return data.data;
    } else {
      console.error("API response format is not as expected:", data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching Furnish Types:", error);
    return [];
  }
}

// Function to populate Furnish Type accordion with API data
async function populateFurnishTypeAccordion() {
  const furnishTypes = await fetchFurnishTypes();
  const furnishTypeContainer = document.querySelector(
    ".furnish-type-checkboxes"
  );

  if (furnishTypes.length > 0 && furnishTypeContainer) {
    furnishTypeContainer.innerHTML = furnishTypes
      .map(
        (type) => `
      <label class="flex items-center">
        <input type="checkbox" class="mr-2 rounded text-[#008a46] focus:ring-[#008a46]" value="${type.masterDetailName}" />
        ${type.masterDetailName}
      </label>
    `
      )
      .join("");
  } else if (furnishTypeContainer) {
    // Fallback to static data
    furnishTypeContainer.innerHTML = `
      <label class="flex items-center">
        <input type="checkbox" class="mr-2 rounded text-[#008a46] focus:ring-[#008a46]" value="Furnished" />
        Furnished
      </label>
      <label class="flex items-center">
        <input type="checkbox" class="mr-2 rounded text-[#008a46] focus:ring-[#008a46]" value="Semi-Furnished" />
        Semi-Furnished
      </label>
      <label class="flex items-center">
        <input type="checkbox" class="mr-2 rounded text-[#008a46] focus:ring-[#008a46]" value="Unfurnished" />
        Unfurnished
      </label>
    `;
  }
}

// Function to fetch Seller Types from API
async function fetchSellerTypes() {
  try {
    const response = await fetch(
      "https://mtestatesapi-f0bthnfwbtbxcecu.southindia-01.azurewebsites.net/master-details?masterName=SellerType",
      {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            "Bearer e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac",
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    if (data.success && data.data) {
      return data.data;
    } else {
      console.error("API response format is not as expected:", data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching Seller Types:", error);
    return [];
  }
}

// Function to populate Listed By accordion with API data
async function populateSellerTypeAccordion() {
  const sellerTypes = await fetchSellerTypes();
  const sellerTypeContainer = document.querySelector(".seller-type-checkboxes");

  if (sellerTypes.length > 0 && sellerTypeContainer) {
    sellerTypeContainer.innerHTML = sellerTypes
      .map(
        (type) => `
      <label class="flex items-center">
        <input type="checkbox" class="mr-2 rounded text-[#008a46] focus:ring-[#008a46]" value="${type.masterDetailName}" />
        ${type.masterDetailName}
      </label>
    `
      )
      .join("");
  } else if (sellerTypeContainer) {
    // Fallback to static data
    sellerTypeContainer.innerHTML = `
      <label class="flex items-center">
        <input type="checkbox" class="mr-2 rounded text-[#008a46] focus:ring-[#008a46]" value="Owner" />
        Owner
      </label>
      <label class="flex items-center">
        <input type="checkbox" class="mr-2 rounded text-[#008a46] focus:ring-[#008a46]" value="Agent" />
        Agent
      </label>
      <label class="flex items-center">
        <input type="checkbox" class="mr-2 rounded text-[#008a46] focus:ring-[#008a46]" value="Builder" />
        Builder
      </label>
    `;
  }
}
