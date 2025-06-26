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
    image: "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/Rent/te2bvkg3exhnklg5tslz",
    altText: "Prestige Finsbury Park",
    name: "Prestige Finsbury Park",
    description: "Prestige Finsbury Park Located in <span class='font-bold'>Bagalur, Bangalore,</span> Prestige Finsbury Park – Hyde offers <span class='font-bold'>ready-to-move</span>-in <span class='font-bold'> semi-furnished 2 & 3 BHK apartments,</span> available on rent with <span class='font-bold'> Price on Request.</span> Designed for modern urban living, these well-ventilated homes boast <span class='font-bold'>ambient sunlight, modular kitchens with chimneys, sliding wardrobes, and thoughtfully designed interiors.</span> With contemporary fittings and smart storage solutions, the residences promise comfort and convenience in every corner. Experience refined living in a vibrant community with excellent connectivity and lifestyle amenities.",
  },
  {
    image: "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/ResalePropertyimg/rckt1yxcilk56kjggvn0",
    altText: "Sobha Royal Pavilion, Sarjapur Road",
    name: "Sobha Royal Pavilion",
    description: "Sobha Royal Pavilion – Rajasthan-themed luxury apartment  s in <span class='font-bold'> Hadosiddapura, Sarjapur Road, Bangalore. Offering 2, 3 & 4 BHK homes </span> ranging from <span class='font-bold'>1300 to 2232.2 sq. ft.,</span> starting from  <span class='font-bold'>Price on Request.</span> A masterpiece of Rajput grandeur, SOBHA Royal Pavilion blends Rajasthani architectural brilliance with modern cosmopolitan elegance. Designed to reflect royal palatial living, this exquisite community offers world-class amenities, timeless luxury, and unmatched comfort, creating a lifestyle of sophistication and opulence.",
  },
  {
    image: "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/Rent/dqbgazwluq9hoxjcgxk7",
    altText: "Prestige St Johns Wood",
    name: "Prestige St Johns Wood",
    description: "Prestige St. Johns Wood, located in <span class='font-bold'> Tavarekere, Bangalore,</span> offers premium rental living in one of South Bangalore’s well-connected neighborhoods. Surrounded by prime areas like <span class='font-bold'>BTM Layout and Maruthi Nagar,</span>  the project enjoys excellent access to <span class='font-bold'>metro stations </span> including BTM Layout and <span class='font-bold'>Jayadeva Interchange. With nearby schools, hospitals, markets, and malls, everyday conveniences are just minutes away.</span> Rental prices start from <span class='font-bold'> Price on Request,</span> making it ideal for a range of lifestyles. Enjoy urban comfort in a locality <span class='font-bold'>rated 4.3/5</span> for connectivity and  <span class='font-bold'>4.2/5</span> for safety.",
  },
  {
    image: "https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/Rent/ezcfmxuyatsdsne1jezm",
    altText: "Sobha Morzaria Grandeur",
    name: "Sobha Morzaria Grandeur",
    description: "Sobha Morzaria Grandeur, located at <span class='fnt-bold'>Dairy Circle, Bangalore,</span> offers spacious <span class='font-bold'>2,3 & 4 BHK rental </span> residences ideal for <span class='font-bold'>families and women</span> professionals. With thoughtfully designed homes featuring <span class='font-bold>pooja rooms, servant quarters, and generous balconies,</span> this semi-furnished project promises both comfort and functionality. <span class='font-bold'>Price on Request,</span> the project is well-connected via metro and major transport hubs like Majestic and KSR Railway Station. Surrounded by reputed schools, hospitals, and entertainment zones, Sobha Morzaria Grandeur stands out as a preferred choice in a locality rated 4.1/5 for connectivity and 3.7/5 for safety.",
  }
];

// Function to fetch expertise data from API
async function fetchExpertiseData() {
  try {
    // Set up the authorization token
    const authToken = 'e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac';
    
    // Set up request headers with the token
    const headers = {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    };
    
    // Make the API request with authorization headers
    const response = await fetch(
      'https://dncrnewapi-bmbfb6f6awd8b0bd.westindia-01.azurewebsites.net/properties?page=1&pageSize=10&isFeatured=true&readyToMove=false&sourceWebsite=deccanrealty.com',
      {
        method: 'GET',
        headers: headers
      }
    );
    
    if (!response.ok) {
      // Get response body even for error responses to see the error message
      const errorData = await response.json().catch(() => ({}));
      console.error('API Error:', errorData);
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.message || 'Unknown error'}`);
    }
    
    const data = await response.json();
    
    if (data.success && data.data && data.data.properties) {
      return data.data.properties;
    } else {
      console.error('API response format is not as expected:', data);
      return [];
    }
  } catch (error) {
    console.error('Error fetching expertise data:', error);
    return [];
  }
}

// Function to fetch trending properties from API
async function fetchTrendingProperties() {
  try {
    // Set up the authorization token
    const authToken = 'e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac';
    
    // Set up request headers with the token
    const headers = {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    };
    
    // Make the API request with authorization headers
    const response = await fetch(
      'https://dncrnewapi-bmbfb6f6awd8b0bd.westindia-01.azurewebsites.net/properties?page=1&pageSize=10&isFeatured=true&readyToMove=false&sourceWebsite=deccanrealty.com',
      {
        method: 'GET',
        headers: headers
      }
    );
    
    if (!response.ok) {
      // Get response body even for error responses to see the error message
      const errorData = await response.json().catch(() => ({}));
      console.error('API Error:', errorData);
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.message || 'Unknown error'}`);
    }
    
    const data = await response.json();
    
    if (data.success && data.data && data.data.properties) {
      return data.data.properties;
    } else {
      console.error('API response format is not as expected:', data);
      return [];
    }
  } catch (error) {
    console.error('Error fetching trending properties:', error);
    return [];
  }
}

// Function to fetch ready-to-move properties for resale section
async function fetchReadyToMoveProperties() {
  try {
    // Set up the authorization token
    const authToken = 'e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac';
    
    // Set up request headers with the token
    const headers = {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    };
    
    // Make the API request with authorization headers for ready-to-move properties
    const response = await fetch(
      'https://dncrnewapi-bmbfb6f6awd8b0bd.westindia-01.azurewebsites.net/properties?page=1&pageSize=10&isFeatured=false&readyToMove=true&sourceWebsite=deccanrealty.com',
      {
        method: 'GET',
        headers: headers
      }
    );
    
    if (!response.ok) {
      // Get response body even for error responses to see the error message
      const errorData = await response.json().catch(() => ({}));
      console.error('API Error:', errorData);
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.message || 'Unknown error'}`);
    }
    
    const data = await response.json();
    
    if (data.success && data.data && data.data.properties) {
      return data.data.properties;
    } else {
      console.error('API response format is not as expected:', data);
      return [];
    }
  } catch (error) {
    console.error('Error fetching ready-to-move properties:', error);
    return [];
  }
}

// Function to create expertise card from API data
function createExpertiseCardFromAPI(property) {
  // Extract the first image URL from the JSON string if it exists
  let imageUrl = '';
  try {
    const imageData = JSON.parse(property.imageURL);
    if (imageData && imageData.length > 0 && imageData[0].imageUrl) {
      imageUrl = imageData[0].imageUrl;
    }
  } catch (e) {
    console.error('Error parsing image URL:', e);
    imageUrl = 'https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/Featured/kzwwgujgkyuxoq6gthj6'; // Fallback image
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
                   <h2 class="text-center text-lg sm:text-xl xl:text-lg 2xl:text-lg font-bold text-black whitespace-normal">${property.propertyName}</h2>
                   <p class="text-sm lg:text-black lg:font-semibold flex items-center justify-center mt-2">
                     <i class="fas fa-map-marker-alt mr-2"></i>${property.city}, ${property.locationAddress}
                   </p>
                </div>
                
                <div class="text-sm space-y-2">
                    <p class="text-black text-center">${property.shortDescription || 'Premium property available for viewing'}</p>
                </div>
            </div>

            <!-- Buttons Section -->
            <div class="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center gap-3">
                <button onclick="openEnquiryForm({ propertyName: '${property.propertyName}' })"
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
                    <p class="text-sm lg:text-black lg:font-semibold flex items-center">
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
  let imageUrl = '';
  try {
    const imageData = JSON.parse(property.imageURL);
    if (imageData && imageData.length > 0 && imageData[0].imageUrl) {
      imageUrl = imageData[0].imageUrl;
    }
  } catch (e) {
    console.error('Error parsing image URL:', e);
    imageUrl = 'https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/Trending/nf5fbl8k6d28y6wfnx0r'; // Fallback image
  }

  // Format price from API data
  const formattedPrice = property.price ? `₹ ${(property.price / 10000000).toFixed(2)} Cr` : 'Price on Request';
  
  // Parse HTML content for short description
  const shortDescription = property.shortDescription || property.longDescription || 'Premium property available for viewing';
  const cleanDescription = shortDescription.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/&#160;/g, ' ').trim();
  
  // Extract configurations from description or use fallback
  let configurations = 'Premium Apartments';
  if (cleanDescription.includes('BHK')) {
    const bhkMatch = cleanDescription.match(/(\d+(?:\.\d+)?BHK[^.]*)/gi);
    if (bhkMatch) {
      configurations = bhkMatch.join(', ').substring(0, 50) + '...';
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
                    <h2 class="text-lg sm:text-xl font-bold lg:text-black lg:font-semibold line-clamp-1">${property.propertyName}</h2>
                    <p class="text-sm lg:text-black lg:font-semibold flex items-center">
                        <i class="fas fa-map-marker-alt mr-2"></i>${property.locationAddress || property.city}
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
                        ${property.area} ${property.lmUnit || 'Sq.Ft.'}
                    </p>
                    <p class="flex items-center lg:text-black">
                        <i class="fas fa-calendar-alt text-green-500 mr-2"></i>
                        ${property.readyToMove ? 'Ready to Move' : 'Under Construction'}
                    </p>
                </div>
            </div>

            <!-- Buttons Section -->
            <div class="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center gap-3">
                <button onclick="openEnquiryForm({ propertyName: '${property.propertyName}' })"
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
    <div class="w-full bg-white sm:rounded-xl rounded-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform flex flex-col justify-between resale-card">
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
                    <h2 class="text-lg sm:text-xl font-bold lg:text-black lg:font-semibold line-clamp-1">${
                      property.name
                    }</h2>
                </div>
                
                <div class="text-sm space-y-2 resale-content-wrapper">
                    <div class="description-container text-black text-center" id="desc-${
                      index + 1
                    }">
                        <p class="desc-content">${property.description}</p>
                    </div>
                    <div class="text-center mt-2">
                        <span class="toggle-btn text-blue-600 cursor-pointer text-sm inline-block" data-target="desc-${
                          index + 1
                        }">See More...</span>
                    </div>
                </div>
            </div>

            <!-- Buttons Section -->
            <div 
            class="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center gap-3">
                <button onclick="openEnquiryForm({ propertyName: '${
                  property.name
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
  let imageUrl = '';
  try {
    const imageData = JSON.parse(property.imageURL);
    if (imageData && imageData.length > 0 && imageData[0].imageUrl) {
      imageUrl = imageData[0].imageUrl;
    }
  } catch (e) {
    console.error('Error parsing image URL:', e);
    imageUrl = 'https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/images/propertycardimages/sqiktbmv5o03fvnqbck7'; // Fallback image
  }

  // Parse HTML content for description
  const description = property.shortDescription || property.longDescription || 'Premium property available for immediate possession';
  
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
                    <h2 class="text-lg sm:text-xl font-bold lg:text-black lg:font-semibold line-clamp-1">${property.propertyName}</h2>
                </div>
                
                <div class="text-sm space-y-2 resale-content-wrapper">
                    <div class="description-container text-black text-center" id="api-desc-${index + 1}">
                        <p class="desc-content">${description}</p>
                    </div>
                    <div class="text-center mt-2">
                        <span class="toggle-btn text-blue-600 cursor-pointer text-sm inline-block" data-target="api-desc-${index + 1}">See More...</span>
                    </div>
                </div>
            </div>

            <!-- Buttons Section -->
            <div class="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center gap-3">
                <button onclick="openEnquiryForm({ propertyName: '${property.propertyName}' })"
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
                    <h2 class="text-lg sm:text-xl font-bold lg:text-black lg:font-semibold line-clamp-1">${property.name}</h2>
                </div>
                
                <div class="text-sm space-y-2 rental-content-wrapper">
                    <div class="description-container text-black text-center" id="rental-desc-${index + 1}">
                        <p class="desc-content">${property.description}</p>
                    </div>
                    <div class="text-center mt-2">
                        <span class="toggle-btn text-blue-600 cursor-pointer text-sm inline-block" data-target="rental-desc-${index + 1}">See More...</span>
                    </div>
                </div>
            </div>

            <!-- Buttons Section -->
            <div class="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center gap-3">
                <button onclick="openEnquiryForm({ propertyName: '${property.name}' })"
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
  const allContainers = document.querySelectorAll('.description-container');
  allContainers.forEach((container) => {
    container.style.maxHeight = '80px';
    container.style.overflow = 'hidden';
    container.style.transition = 'max-height 0.3s ease';
  });

  // Set up toggle button functionality for both resale and rental cards
  document.querySelectorAll('.toggle-btn').forEach((btn) => {
    btn.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const descContainer = document.getElementById(targetId);
     
      const card = this.closest('.resale-card, .rental-card');

      if (descContainer.style.maxHeight === '80px' || descContainer.style.maxHeight === '') {
        // Store original card height before expanding
        const originalHeight = card.offsetHeight;
        
        // Temporarily remove transition for accurate height calculation
        descContainer.style.transition = 'none';
        descContainer.style.maxHeight = 'none';
        const fullHeight = descContainer.scrollHeight;
        descContainer.style.maxHeight = '80px';
        
        // Restore transition and set full height
        setTimeout(() => {
          descContainer.style.transition = 'max-height 0.3s ease';
          descContainer.style.maxHeight = fullHeight + 'px';
        }, 0);

        this.textContent = 'See Less...';
      } else {
        descContainer.style.maxHeight = '80px';
        this.textContent = 'See More...';
      }
    });
  });
}

// Placeholder function for the enquiry form
// function openEnquiryForm() {
//   alert("Enquiry form will open here for the selected property");
// }

// Main initialization
document.addEventListener("DOMContentLoaded", () => {
  // Identify containers by their IDs
  const newPropertiesContainer = document.getElementById("property-container");
 
const serviceContainer = document.getElementById("service-container");

  // Render trending properties (Exceptional Properties section) using API
  if (newPropertiesContainer) {
    // Show loading spinner
    newPropertiesContainer.innerHTML = `
      <div class="col-span-full flex justify-center items-center py-10">
        <div class="loading-spinner"></div>
        <span class="ml-3 text-gray-600">Loading trending properties...</span>
      </div>
    `;

    // Fetch trending properties from API
    fetchTrendingProperties().then(properties => {
      if (properties && properties.length > 0) {
        // Render API data using the trending property card
        newPropertiesContainer.innerHTML = properties
          .slice(0, 8) // Show first 8 properties
          .map(property => createTrendingPropertyCardFromAPI(property))
          .join("");
      } else {
        // Fallback to hardcoded data if API fails or returns no data
        console.warn('No trending properties from API, using fallback data');
        newPropertiesContainer.innerHTML = properties
          .map(createPropertyCard)
          .join("");
      }
    }).catch(error => {
      console.error('Error loading trending properties:', error);
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
    serviceContainer.innerHTML = '<div class="col-span-full text-center py-8"><div class="loading-spinner mx-auto"></div><p class="mt-4 text-gray-600">Loading expertise data...</p></div>';
    
    // Fetch and render API data
    fetchExpertiseData()
      .then(propertiesData => {
        if (propertiesData && propertiesData.length > 0) {
          // Limit to 4 items for display
          const limitedData = propertiesData.slice(0, 4);
          serviceContainer.innerHTML = limitedData.map(createExpertiseCardFromAPI).join("");
        } else {
          // Fallback to hardcoded data if API fails
          serviceContainer.innerHTML = services.map(createServiceCard).join("");
        }
      })
      .catch(error => {
        console.error('Error rendering expertise data:', error);
        
        // Check if it's an authorization error
        let errorMessage = 'We couldn\'t load our expertise data at the moment. Please try again later.';
        let errorClass = 'api-error';
        
        if (error.message && (error.message.includes('401') || error.message.toLowerCase().includes('unauthorized'))) {
          errorMessage = 'Authentication failed. Please check your API token.';
          errorClass = 'auth-error';
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
  const resalePropertiesContainer = document.getElementById("resale-property-container");
  if (resalePropertiesContainer) {
    // Show loading spinner
    resalePropertiesContainer.innerHTML = `
      <div class="col-span-full flex justify-center items-center py-10">
        <div class="loading-spinner"></div>
        <span class="ml-3 text-gray-600">Loading ready-to-move properties...</span>
      </div>
    `;

    // Fetch ready-to-move properties from API
    fetchReadyToMoveProperties().then(properties => {
      if (properties && properties.length > 0) {
        // Render API data using the resale property card from API
        resalePropertiesContainer.innerHTML = properties
          .slice(0, 10) // Show first 10 properties
          .map((property, index) => createResalePropertyCardFromAPI(property, index))
          .join("");
        
        // Re-setup toggle buttons for the new content
        setTimeout(() => {
          setupToggleButtons();
        }, 100);
      } else {
        // Fallback to hardcoded data if API fails or returns no data
        console.warn('No ready-to-move properties from API, using fallback data');
        resalePropertiesContainer.innerHTML = resaleProperties
          .map((property, index) => createResalePropertyCard(property, index))
          .join("");
        
        // Re-setup toggle buttons for fallback content
        setTimeout(() => {
          setupToggleButtons();
        }, 100);
      }
    }).catch(error => {
      console.error('Error loading ready-to-move properties:', error);
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
  const rentalPropertiesContainer = document.getElementById("rental-property-container");
  if (rentalPropertiesContainer) {
    rentalPropertiesContainer.innerHTML = rentalProperties
      .map((property, index) => createRentalPropertyCard(property, index))
      .join("");
  }

  // Setup toggle functionality is now handled within each API response
  // to ensure it runs after content is loaded
  // setupToggleButtons();

  // Add error handling for API fetch failures
  window.addEventListener('error', function(event) {
    console.error('Global error caught:', event.error);
    // You can add more sophisticated error handling here if needed
  });
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
    const authToken = 'e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac';
    
    const response = await fetch(
      'https://dncrnewapi-bmbfb6f6awd8b0bd.westindia-01.azurewebsites.net/testimonials/by-createdby?createdBy=deccanrealty.com&pageNumber=1&pageSize=100',
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.success && data.data && data.data.testimonials) {
      // Transform API data to match expected format
      return data.data.testimonials
        .filter(testimonial => testimonial.recordStatus === 'Active')
        .map(testimonial => ({
          name: testimonial.customerName,
          review: testimonial.feedbackText,
          image: testimonial.imageURL || getDefaultImage(testimonial.userType)
        }));
    } else {
      console.error('API response format is not as expected:', data);
      return defaultReviews;
    }
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return defaultReviews;
  }
}

// Function to get default image based on user type
function getDefaultImage(userType) {
  const defaultImages = {
    'Partner': 'https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/logos/d5zo5bconzxz1puzijfu',
    'Customer': 'https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/logos/eiynhkneocoygez6zhyo',
  };
  
  return defaultImages[userType] || 'https://res.cloudinary.com/dzauu64ta/image/upload/f_auto,q_auto/v1/DeccanRealty/logos/d5zo5bconzxz1puzijfu';
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
    <div class="flex flex-col bg-white border-2 border-[#b1933f60] rounded-xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out cursor-pointer hover:shadow-xl p-4 justify-around h-[400px]">
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
  if (isAnimating || !reviews || reviews.length === 0 || newIndex >= reviews.length) return;
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
    console.warn('No reviews available for indicators');
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
    console.warn('Cannot start autoplay: no reviews available');
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
    console.warn('Testimonial carousel elements not found');
    return;
  }
  
  try {
    // Show loading state in testimonials section
    carousel.innerHTML = '<div class="absolute inset-0 flex items-center justify-center"><div class="loading-spinner"></div><p class="ml-4 text-gray-600">Loading testimonials...</p></div>';
    
    // Fetch testimonials from API
    const apiTestimonials = await fetchTestimonials();
    reviews = apiTestimonials;
    
    if (reviews.length === 0) {
      console.warn('No testimonials found, using default reviews');
      reviews = defaultReviews;
    }
    
    // Ensure we have at least one review to display
    if (reviews.length === 0) {
      carousel.innerHTML = '<div class="absolute inset-0 flex items-center justify-center"><p class="text-gray-600">No testimonials available</p></div>';
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
    console.error('Error initializing testimonials:', error);
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
      carousel.innerHTML = '<div class="absolute inset-0 flex items-center justify-center"><p class="text-red-600">Error loading testimonials</p></div>';
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