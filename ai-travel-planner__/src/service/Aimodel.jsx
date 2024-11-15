import { GoogleGenerativeAI} from "@google/generative-ai";
  
  
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
   export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for location: Las Vegas, for 3 days for couple with a cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName,Place Details, Place Image Url, Geo Coordinates, ticket pricing,rating, Time to travel to each location for 3 days with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"The D Las Vegas\",\n      \"hotelAddress\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$50 - $100 per night\",\n      \"hotelImageUrl\": \"https://images.trvl-media.com/media/content/dam/trvl-media/hotels/600/0/255/600x400/the-d-las-vegas.jpg\",\n      \"geoCoordinates\": \"36.1695, -115.1428\",\n      \"rating\": 4.0,\n      \"description\": \"Located in the heart of Fremont Street, The D Las Vegas offers affordable accommodations and a lively atmosphere with a casino, bars, and restaurants.\"\n    },\n    {\n      \"hotelName\": \"Golden Nugget Las Vegas\",\n      \"hotelAddress\": \"129 E Fremont St, Las Vegas, NV 89101\",\n      \"price\": \"$70 - $150 per night\",\n      \"hotelImageUrl\": \"https://images.trvl-media.com/media/content/dam/trvl-media/hotels/600/0/255/600x400/golden-nugget-las-vegas.jpg\",\n      \"geoCoordinates\": \"36.1688, -115.1438\",\n      \"rating\": 4.5,\n      \"description\": \"A historic hotel with a vibrant casino, multiple dining options, a pool, and a unique shark tank.\"\n    },\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"price\": \"$40 - $80 per night\",\n      \"hotelImageUrl\": \"https://images.trvl-media.com/media/content/dam/trvl-media/hotels/600/0/255/600x400/circus-circus-hotel-casino.jpg\",\n      \"geoCoordinates\": \"36.1121, -115.1719\",\n      \"rating\": 3.5,\n      \"description\": \"A classic Las Vegas hotel with a circus theme, featuring affordable accommodations, a casino, and family-friendly attractions.\"\n    },\n    {\n      \"hotelName\": \"Main Street Station Casino, Brewery & Hotel\",\n      \"hotelAddress\": \"200 N Main St, Las Vegas, NV 89101\",\n      \"price\": \"$60 - $120 per night\",\n      \"hotelImageUrl\": \"https://images.trvl-media.com/media/content/dam/trvl-media/hotels/600/0/255/600x400/main-street-station-casino-brewery-hotel.jpg\",\n      \"geoCoordinates\": \"36.1676, -115.1406\",\n      \"rating\": 4.0,\n      \"description\": \"Offers a unique experience with a train station theme, a brewery, and a casino, all at affordable rates.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"time\": \"Morning (9:00 AM - 12:00 PM)\",\n      \"plan\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"A vibrant pedestrian mall with a canopy of lights and street performers.\",\n          \"placeImageUrl\": \"https://www.vegasexperience.com/wp-content/uploads/2022/08/Fremont-Street-Experience-Las-Vegas.jpg\",\n          \"geoCoordinates\": \"36.1683, -115.1431\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"timeToTravel\": \"5 minutes (walking from The D Las Vegas)\"\n        }\n      ],\n      \"time\": \"Afternoon (12:00 PM - 3:00 PM)\",\n      \"plan\": [\n        {\n          \"placeName\": \"The Neon Museum\",\n          \"placeDetails\": \"A museum showcasing iconic Las Vegas neon signs.\",\n          \"placeImageUrl\": \"https://www.neonmuseum.org/wp-content/uploads/2015/04/Neon-Museum-Sign-Collection-Tour.jpg\",\n          \"geoCoordinates\": \"36.1737, -115.1395\",\n          \"ticketPricing\": \"$25 - $30\",\n          \"rating\": 4.0,\n          \"timeToTravel\": \"15 minutes (walking from Fremont Street Experience)\"\n        }\n      ],\n      \"time\": \"Evening (6:00 PM - 9:00 PM)\",\n      \"plan\": [\n        {\n          \"placeName\": \"Heart Bar at the Golden Nugget\",\n          \"placeDetails\": \"Enjoy drinks and live music with a view of the famous shark tank.\",\n          \"placeImageUrl\": \"https://www.golden nugget.com/lasvegas/images/heart-bar.jpg\",\n          \"geoCoordinates\": \"36.1688, -115.1438\",\n          \"ticketPricing\": \"No entry fee\",\n          \"rating\": 4.0,\n          \"timeToTravel\": \"5 minutes (walking from The Neon Museum)\"\n        }\n      ]\n    },\n    \"day2\": {\n      \"time\": \"Morning (9:00 AM - 12:00 PM)\",\n      \"plan\": [\n        {\n          \"placeName\": \"The Strip\",\n          \"placeDetails\": \"Explore the famous Las Vegas Strip, with its iconic casinos and resorts.\",\n          \"placeImageUrl\": \"https://www.vegasexperience.com/wp-content/uploads/2022/08/Las-Vegas-Strip-Hotels-and-Casinos.jpg\",\n          \"geoCoordinates\": \"36.1105, -115.1735\",\n          \"ticketPricing\": \"Free (unless entering a specific casino or attraction)\",\n          \"rating\": 5.0,\n          \"timeToTravel\": \"30 minutes (by bus from The Golden Nugget)\"\n        }\n      ],\n      \"time\": \"Afternoon (12:00 PM - 3:00 PM)\",\n      \"plan\": [\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n          \"placeDetails\": \"Admire stunning floral displays and installations.\",\n          \"placeImageUrl\": \"https://www.bellagio.com/media/1000/0/media.jpg\",\n          \"geoCoordinates\": \"36.1186, -115.1734\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"timeToTravel\": \"5 minutes (walking from The Strip)\"\n        }\n      ],\n      \"time\": \"Evening (6:00 PM - 9:00 PM)\",\n      \"plan\": [\n        {\n          \"placeName\": \"Free outdoor concert or show on The Strip\",\n          \"placeDetails\": \"Check local listings for free entertainment options on The Strip.\",\n          \"placeImageUrl\": \"https://images.trvl-media.com/media/content/dam/trvl-media/hotels/600/0/255/600x400/the-venetian-resort-hotel-casino.jpg\",\n          \"geoCoordinates\": \"36.1146, -115.1721\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.0,\n          \"timeToTravel\": \"5 minutes (walking from Bellagio Conservatory & Botanical Garden)\"\n        }\n      ]\n    },\n    \"day3\": {\n      \"time\": \"Morning (9:00 AM - 12:00 PM)\",\n      \"plan\": [\n        {\n          \"placeName\": \"Red Rock Canyon National Conservation Area\",\n          \"placeDetails\": \"Explore scenic hiking trails and rock formations.\",\n          \"placeImageUrl\": \"https://www.nps.gov/redr/planyourvisit/images/redrockcanyon-003.jpg\",\n          \"geoCoordinates\": \"36.2027, -115.2895\",\n          \"ticketPricing\": \"$15 per vehicle\",\n          \"rating\": 4.5,\n          \"timeToTravel\": \"40 minutes (by car from The Strip)\"\n        }\n      ],\n      \"time\": \"Afternoon (12:00 PM - 3:00 PM)\",\n      \"plan\": [\n        {\n          \"placeName\": \"Springs Preserve\",\n          \"placeDetails\": \"A cultural and environmental center with exhibits, gardens, and trails.\",\n          \"placeImageUrl\": \"https://springspreserve.org/wp-content/uploads/2020/05/Desert-Living-Center.jpg\",\n          \"geoCoordinates\": \"36.1576, -115.1380\",\n          \"ticketPricing\": \"$15 - $20\",\n          \"rating\": 4.0,\n          \"timeToTravel\": \"30 minutes (by car from Red Rock Canyon National Conservation Area)\"\n        }\n      ],\n      \"time\": \"Evening (6:00 PM - 9:00 PM)\",\n      \"plan\": [\n        {\n          \"placeName\": \"Linq Promenade\",\n          \"placeDetails\": \"Enjoy dining, shopping, and entertainment at this outdoor promenade.\",\n          \"placeImageUrl\": \"https://www.linq.com/media/565/3/1200/2000/linq-promenade.jpg\",\n          \"geoCoordinates\": \"36.1170, -115.1711\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.0,\n          \"timeToTravel\": \"20 minutes (by bus from Springs Preserve)\"\n        }\n      ]\n    }\n  }\n}\n```\n\n**Notes:**\n\n* This itinerary is just a suggestion and can be customized to your preferences and interests.\n* Remember to check opening hours and ticket prices in advance, as they may vary.\n* Las Vegas has a public transportation system (RTC buses) that you can use to get around. \n* Consider using ride-sharing services like Uber or Lyft for convenient transportation.\n* Always carry water and wear comfortable shoes for walking.\n* Be aware of your surroundings and take necessary precautions for safety.\n* Enjoy your budget-friendly trip to Las Vegas! \n"},
          ],
        },
      ],
    });