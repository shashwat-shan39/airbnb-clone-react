import culinary from "./images/culinary.jpg"
import athlete from "./images/card-image.jpg"
import hubble from "./images/hubble.jpg"
import wedding from "./images/wedding.jpg"
import yoga from "./images/yoga.jpg"
import digital from "./images/digital.jpg"

const data = [
    {
        id: 1,
        title: "Life Lessons With Katie Zaferes",
        description: "Interested in becoming a wedding photographer? For beginners and expert photographers alike, join us in learning techniques required to leave couples with memories that'll last a lifetime.",
        price: 136,
        coverImg: athlete,
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Online",
        openSports: 27
    },
    {
      id: 2,
      title: "Learning Wedding Photography",
      description: "Interested in becoming a wedding photographer? For beginners and expert photographers alike, join us in learning techniques required to leave couples with memories that'll last a lifetime.",
      price: 125,
      coverImg: wedding,
      stats: {
        rating: 5.0,
        reviewCount: 30
      },
      location: "Online",
      openSports: 0
    },
    {
      id: 3,
      title: "Introduction to Astrophysics",
      description: "Explore the wonders of astrophysics in this introductory course. From the basics of celestial mechanics to the latest discoveries in cosmology, embark on a journey through the cosmos.",
      price: 99,
      coverImg: hubble,
      stats: {
        rating: 4.8,
        reviewCount: 25
      },
      location: "Online",
      openSports: 15
    },
    {
      id: 4,
      title: "Mastering Culinary Arts",
      description: "Take your culinary skills to the next level with our comprehensive cooking course. From knife skills to advanced techniques, learn from seasoned chefs and unleash your creativity in the kitchen.",
      price: 150,
      coverImg: culinary,
      stats: {
        rating: 4.9,
        reviewCount: 35
      },
      location: "In-person",
      openSports: 10
    },
    {
        id: 5,
        title: "Digital Marketing Fundamentals",
        description: "Learn the essentials of digital marketing, from SEO to social media strategies. Whether you're an aspiring marketer or a business owner, this course will help you navigate the digital landscape.",
        price: 79,
        coverImg: digital,
        stats: {
          rating: 4.5,
          reviewCount: 20
        },
        location: "Online",
        openSports: 20
      },
      {
        id: 6,
        title: "Yoga and Meditation Retreat",
        description: "Escape the hustle and bustle of daily life and embark on a journey of self-discovery with our yoga and meditation retreat. Restore balance to your mind, body, and soul in a serene natural setting.",
        price: 199,
        coverImg: yoga,
        stats: {
          rating: 4.7,
          reviewCount: 40
        },
        location: "In-person",
        openSports: 0
      }
  ];
  
  export default data;
  