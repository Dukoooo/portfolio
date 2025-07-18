import ciglanProject from "../assets/ciglanProject.png";
import todoProject from "../assets/todoApp.png";
import myPortfolio from "../assets/myPortfolio.png";
import weatherApp from "../assets/weatherApp.png";
const projects = [
  {
    id: 1,
    name: "ciglan.sk",
    img: ciglanProject,
    text: `  Ciglan.sk was my first web project, created in 2023 using HTML, SCSS, and vanilla JavaScript.
The site features responsive design, a functional back-to-top button, a mobile navigation menu, and a photo gallery. `,
    technologies: ["HTML", "SCSS", "javaScript"],
    link: "https://ciglan.sk/",
    gitLink: "https://github.com/Dukoooo/Ciglan.sk",
  },
  {
    id: 2,
    name: "ToDo app",
    img: todoProject,
    text: `A simple ToDo application built with React and CSS .
It includes features like adding, deleting, checking off tasks and rewriting the task in modal window, with clear state management using hooks.
The project focuses on component structure, clean styling, and user-friendly interactions.`,
    technologies: ["React", "CSS"],
    link: "https://react-todo-app-dukoooo.netlify.app/",
    gitLink: "https://github.com/Dukoooo/react-todo-app",
  },
  {
    id: 3,
    name: "my portfolio",
    img: myPortfolio,
    text: `My personal portfolio website built with React and CSS Modules.
It showcases my web development projects, skills, and contact information in a clean and responsive layout.
The site includes smooth navigation, a dynamic tech slider, and modern design focused on clarity and usability.`,
    technologies: ["React", "CSS modules"],
  },
  {
    id: 4,
    name: "Weather App",
    img: weatherApp,
    text: `A modern weather application built with React and CSS Modules.  
It fetches real-time weather data from the OpenWeather API based on user location or city search.  
Features include dynamic weather icons, temperature, humidity, wind speed, and local time display, all in a clean and responsive design.`,
    technologies: ["React", "CSS Modules", "Fetch API", "Geolocation API"],
    link: "https://dukoweatherapp.netlify.app/",
    gitLink: "https://github.com/Dukoooo/react-weather-app",
  },
];

export default projects;
