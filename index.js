projects = [
  {
    title: "Metsä Health - Website and Webstore",
    date: "June, 2024",
    status: "Ongoing",
    about: ["coming soon..."],
    technology: ["Wordpress"],
    link: "",
  },
  {
    title: "Cafe Ava - Loyalty Card Webapp",
    date: "May 3, 2023",
    status: "Completed",
    about: [
      "A project where we created a loyalty card webapp for a café.",
      "In this project we were constrained to using the cafés pre-existing tech.",
      "In conclusion we created an app for the customer to view their rewards and progress on the browser in their mobile device.",
      "The owners version of the application is in charge of creating  unique QR codes per-purchase for the customer to scan on their device.",
      "Code has been given to the owner and has been since made private!",
    ],
    technology: ["Next.js", "TypeScript", "Vercel", "AWS"],
    link: "",
  },
  {
    title: "vileHUD - A custom HUD for Team Fortress 2",
    date: "May 3, 2023",
    status: "Maintained",
    about: [
      "This is a personal project of mine. ",
      "If you really love something, why not make it better! This is a small overhaul to the HUD for the game Team Fortress 2.  The Hud changes the positioning and overall look of important elements in the game for a more clean look and faster gathering of visual information.",
      "",
    ],
    technology: ["Swift"],
    link: "https://github.com/jarvilehto/vileHUD",
  },
  {
    title: "Sensitivity configuration tool for FPS games.",
    date: "May 3, 2023",
    status: "Completed",
    about: [
      "Another personal project of mine. I am an avid (or was) FPS player who wants to keep similar settings between games. So I made a tool that lets me convert sensitivities between different game engines, and a calculator to find out the yaw values of an unknown engine. ",
    ],
    technology: ["HTML", "JavaScript", "CSS"],
    link: "https://github.com/jarvilehto/juJuCalc",
  },
  {
    title: "HTML and JS checker",
    date: "May 3, 2023",
    status: "Completed",
    about: [
      "A partner project for Metropolia University of Applied Sciences.",
      "In this project we were tasked to create a website that can automatically validate 1st year students HTML / JS assignments. The student receives information of what is missing from the assignment and if something is not functioning correctly before returning the assignment.  A professor can create tests per-assignment, and view how many times someone has returned the assignment, how many times they have failed, and the final result pass/fail.",
      "It also gathers information about entire assignment sets to give the professor an easy way to see if x student will pass a class.",
    ],
    technology: ["JavaSript"],
    link: "https://github.com/teemueer/js_checker",
  },
  {
    title: "Custo - A customer feedback app",
    date: "Mar 12, 2023",
    status: "Completed",
    about: [
      "Android application for adding items on your store and getting customer feedback on them. Utilizes camera for scanning EAN barcodes. Item information comes from Barcodes RapidAPI. Data is saved to Google Firebase.",
    ],
    technology: ["Kotlin"],
    link: "https://github.com/teemueer/CustomerFeedbackApp",
  },
  {
    title: "iOS Weatherapp",
    date: "Dec 12, 2022",
    status: "Completed",
    about: [
      "A reimagination of the iOS weatherapp utilizing data from the Finnish Meteorological Institute. A nice little project to get used to further development with iOS.",
    ],
    technology: ["Swift"],
    link: "https://github.com/teemueer/WeatherApp",
  },
  {
    title: "WaLL. -  A wallpaper sharing app",
    date: "Oct 13, 2022",
    status: "Completed",
    about: [
      "A simple app using Expo. The main focus was to create a place where you can share pictures to use as wallpapers. You can comment, favourite, download and upload wallpapers.",
    ],
    technology: ["JavaScript", "Expo", "React"],
    link: "https://github.com/teemueer/WallpaperApp",
  },
];

const createList = () => {
  const content = document.getElementById("projects");
  for (let i = 0; i < projects.length; i++) {
    let container = document.createElement("div");
    container.id = "project-container";

    //Header
    let containerHeader = document.createElement("div");
    let containerTitle = document.createElement("h3");
    containerTitle.innerHTML = projects[i].title;
    let tech = document.createElement("p");
    for (let j = 0; j < projects[i].technology.length; j++) {
      tech.innerHTML += projects[i].technology[j] + " ";
    }
    tech.id = "header-tech";
    containerHeader.appendChild(containerTitle);
    containerHeader.appendChild(tech);
    container.appendChild(containerHeader);

    //About
    let containerAbout = document.createElement("div");
    containerAbout.id = "container-about";
    for (let k = 0; k < projects[i].about.length; k++) {
      let p = document.createElement("p");
      p.innerHTML = projects[i].about[k];
      containerAbout.appendChild(p);
    }
    container.appendChild(containerAbout);

    //Footer
    let containerFooter = document.createElement("div");
    containerFooter.id = "container-footer";
    let status = document.createElement("p");
    let date = document.createElement("p");
    let linkToProject = document.createElement("a");
    status.innerHTML = projects[i].status;
    date.innerHTML = projects[i].date;
    console.log(projects[i].link);
    if (projects[i].link != "") {
      linkToProject.href = projects[i].link;
      linkToProject.target = "_blank";
    }
    linkToProject.innerHTML = "Repo >>";
    containerFooter.appendChild(date);
    containerFooter.appendChild(status);
    containerFooter.appendChild(linkToProject);

    container.appendChild(containerFooter);

    content.appendChild(container);
  }
};

createList();
