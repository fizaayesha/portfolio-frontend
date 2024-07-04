import faceRecognition from "../Assets/FaceRecognition.jfif";
import Banking from "../Assets/Online Bnaking.avif";
import Pokemon from "../Assets/pokemon.avif";
import Blogs from "../Assets/blogs.png";
import dbms from "../Assets/dbms.png";
import list from "../Assets/list.jpeg"
import portfolio from "../Assets/portfolio.png";


const projects = [
  {
    id: 1,
    category: "Backend",
    image: faceRecognition,
    code: "https://github.com/fizaayesha/face-recognition",
    title: "Face Recognition",
    text: "Face Recognition for Secure Transactions",
  },
  {
    id: 2,
    category: "Backend",
    image: Banking,
    code: "https://github.com/fizaayesha/gripbank-frontend",
    visit: "https://grip-banking-webapp.netlify.app/",
    title: "Online Banking System",
    text: "Showcase of online banking system",
  },
  {
    id: 3,
    category: "Frontend",
    image: Pokemon,
    code: "https://github.com/fizaayesha/pokemon",
    visit: "https://pocket-monsters.netlify.app/",
    title: "Pokemon (Pocket Monsters)",
    text: "Showcase of online banking system",
  },
  {
    id: 4,
    category: "Frontend",
    image: Blogs,
    code: "https://github.com/fizaayesha/blogwebsite",
    visit: "https://blogs-by-ayesha.netlify.app/",
    title: "Blog Website",
    text: "Discover insightful articles and engaging content that inspire and inform on my blog.",
  },
  {
    id: 5,
    category: "Backend",
    image: dbms,
    code: "https://github.com/fizaayesha/DBMS_Project",
    title: "Social Media App",
    text: "Enhanced database schema and SQL queries for high-traffic social media apps, boosting performance and scalability.",
  },
  {
    id: 6,
    category: "IOS",
    image: list,
    code: "https://github.com/fizaayesha/list-app-ios",
    title: "My List App",
    text: "Manage and organize your tasks effortlessly with our intuitive list app."
  },
  {
    id: 7,
    category: "Frontend",
    image: portfolio,
    code: "https://github.com/fizaayesha/portfolio",
    visit: "https://ayeshakhan.netlify.app/",
    title: "Personal Portfolio Website",
    text: "Explore my portfolio featuring innovative designs and user-centered digital experiences that elevate brands and engage audiences.",
  },
];

export default projects;
