import { FaPeopleLine } from "react-icons/fa6";

export const SelectTravelsList=[

    {
        id:1,
        title:'Solo Adventurer',
        desc:'Embrace solitude, experience freedom',
        icon:'👤',
        people:'1'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Discover the world together',
        icon:'👥',
        people:'2 People'
    },
    {
        id:3,
        title:'Family',
        desc:'Unforgettable memories with loved ones',
        icon:<FaPeopleLine />,
        people:'3 to 5 people'
    }
]

export const BudgetOptions=[

    {
        id:1,
        title:'Budget-Friendly',
        desc:'Affordable & budget-conscious travel, great fun.',
        icon:'💰'
    },
    {
        id:2,
        title:'Balanced Budget',
        desc:'Comfortable & convenient travel with average expenditure',
        icon:'⚖️'
    },
    {
        id:3,
        title:'Luxury',
        desc:'No budget restrictions, exclusive experience',
        icon:'💸'
    }
]

export const AI_PROMPT='Generate Travel Plan for location: {location}, for {noOfDays} days for {traveler} with a {budget} budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName,Place Details, Place Image Url, Geo Coordinates, ticket pricing, rating, Time to travel to each location for {totalDays} days with each day plan with best time to visit in JSON format.'