// src/data/projectsData.js
import projectDataStatic from '../../data/projectDataStatic.json';

// const importImages = (requireContext) => requireContext.keys().map(requireContext);
// const graphicProfileImages = importImages(require.context('../../images/graphicprofile', false, /\.(png|jpe?g|svg)$/));
// const magasindesignImages = importImages(require.context('../../images/magasindesign', false, /\.(png|jpe?g|svg)$/));
// const hammaroadventureImages = importImages(require.context('../../images/hammaroadventure', false, /\.(png|jpe?g|svg)$/));
// const cocktailsanddreamsImages = importImages(require.context('../../images/cocktailsanddreams', false, /\.(png|jpe?g|svg)$/));
// const brunchncrunchImages = importImages(require.context('../../images/brunchncrunch', false, /\.(png|jpe?g|svg)$/));
// const showcaseImages = importImages(require.context('../../images/showcase', false, /\.(png|jpe?g|svg)$/));
// const hangmanImages = importImages(require.context('../../images/hangman', false, /\.(png|jpe?g|svg)$/));
// const businessSystemImages = importImages(require.context('../../images/affarssystem', false, /\.(png|jpe?g|svg)$/));
// const nollningsmarkenImages = importImages(require.context('../../images/nollningsmarken', false, /\.(png|jpe?g|svg|JPG)$/));
// const nollningsbiblarImages = importImages(require.context('../../images/nollningsbiblar', false, /\.(png|jpe?g|svg|JPG)$/));
// const jeopardyImages = importImages(require.context('../../images/jeopardy', false, /\.(png|jpe?g|svg)$/));
// const todoImages = importImages(require.context('../../images/todo', false, /\.(png|jpe?g|svg)$/));

const images = import.meta.glob('../../images/**/*.{png,jpeg,jpg,svg,JPG}', { eager: true });
const imagesByFolder = {};
Object.keys(images).forEach((path) => {
  const folderName = path.split('/').slice(-2, -1)[0];
  if (!imagesByFolder[folderName]) {
    imagesByFolder[folderName] = [];
  }
  imagesByFolder[folderName].push(images[path].default);
});

const campaignClimateImages = imagesByFolder['kampanj'];
const graphicProfileImages = imagesByFolder['graphicprofile'];
const magasindesignImages = imagesByFolder['magasindesign'];
const hammaroadventureImages = imagesByFolder['hammaroadventure'];
const drawingProgImages = imagesByFolder['riteditor'];
const cocktailsanddreamsImages = imagesByFolder['cocktailsanddreams'];
const brunchncrunchImages = imagesByFolder['brunchncrunch'];
const showcaseImages = imagesByFolder['showcase'];
const hangmanImages = imagesByFolder['hangman'];
const texteditorImages = imagesByFolder['texteditor'];
const businessSystemImages = imagesByFolder['businesssystem'];
const nollningsmarkenImages = imagesByFolder['nollningsmarken'];
const nollningsbiblarImages = imagesByFolder['nollningsbiblar'];
const jeopardyImages = imagesByFolder['jeopardy'];
const todoImages = imagesByFolder['todo'];
const movieRaterImages = imagesByFolder['movierater'];

const campaignClimate = projectDataStatic.find((project) => project.id === 1);
const graphicprofile = projectDataStatic.find((project) => project.id === 2);
const magasindesign = projectDataStatic.find((project) => project.id === 3);
const hammaroadventure = projectDataStatic.find((project) => project.id === 4);
const drawingProg = projectDataStatic.find((project) => project.id === 5);
const cocktailsanddreams = projectDataStatic.find((project) => project.id === 6);
const brunchncrunch = projectDataStatic.find((project) => project.id === 7);
const showcase = projectDataStatic.find((project) => project.id === 8);
const hangman = projectDataStatic.find((project) => project.id === 9);
const texteditor = projectDataStatic.find((project) => project.id === 10);
const businessSystem = projectDataStatic.find((project) => project.id === 11);
const nollningsmarken = projectDataStatic.find((project) => project.id === 12);
const nollningsbiblar = projectDataStatic.find((project) => project.id === 13);
const jeopardy = projectDataStatic.find((project) => project.id === 14);
const todo = projectDataStatic.find((project) => project.id === 15);
const movieRater = projectDataStatic.find((project) => project.id === 16);

const projectsDataEn = [
  {
    id: 1,
    title: campaignClimate?.title || "Unknown Project",
    date: campaignClimate?.date || "Unknown",
    techniques: campaignClimate?.techniques || "Unknown",
    reason: 'group project at university',
    github: '',
    description: '<b>Task:</b> The task was to create a fictive campaign based on climate and sustainability, with the theme of meat consumption, emissions from the consumption of goods and services, or emissions from domestic transport. By choosing a sender and defining the target group, we would thus create an idea for a campaign that had a chance to influence the intended target group.'
                +'<br><br><b>Result:</b> The solution was a campaign for the sender "All Matters", aimed at young women, to choose the menstrual cup instead of disposable products such as tampons and pads. Below is a poster I created for the purpose.',
    thumbnail: campaignClimateImages[0],
    images: [
      { url: campaignClimateImages[0], description: "" },

    ]
  },
  {
    id: 2,
    title: graphicprofile?.title || "Unknown Project",
    date: graphicprofile?.date || "Unknown",
    techniques: graphicprofile?.techniques || "Unknown",
    reason: 'solo project at university',
    github: '',
    description: '<b>Task:</b> Update the graphic profile of Swenströmskas Stenugnsbageri by conducting a brand, market, target audience, and competitor analysis. Create a simplified graphic manual that outlines guidelines for the logo, color scheme, imagery style, typography, and examples of how the new identity is applied across relevant brand materials.'
      + '<br><br><b>Result:</b> The solution was a simple brand manual containing illustrations and descriptive text on how to use the updated brand. The guiding principles for the brand are craftsmanship, closeness, calm, and experience. The target audience consists of environmentally conscious customers who appreciate natural and locally produced ingredients. Key trends to leverage include sustainability, environmental awareness, and local roots. To stand out from competitors, an alternative logo has been chosen that reflects the company’s business concept and culture by conveying a sense of craftsmanship, organic values, and closeness. The colors are warm and nature-inspired, and the typography is handwritten to provide a personal and unique feel. Graphic elements are used to decorate and visualize the brand, and the imagery chosen is warm, homely, and intimate.',
    thumbnail: graphicProfileImages[0],
    images: [
      { url: graphicProfileImages[0], description: "" },
      { url: graphicProfileImages[1], description: "" },
      { url: graphicProfileImages[2], description: "" },
      { url: graphicProfileImages[3], description: "" },
    ]
  },
  {
    id: 3,
    title: hammaroadventure?.title || "Unknown Project",
    date: hammaroadventure?.date || "Unknown",
    techniques: hammaroadventure?.techniques || "Unknown",
    reason: 'solo project at university',
    github: '',
    description: '<b>Task:</b> Create a design for an application that makes it appealing for people to visit Hammarö county.'
    + '<br><br><b>Result:</b> The solution was a design for an application where users can collect points by answering quiz questions correctly and visiting locations in Hammarö. These points lead to various rewards, such as discounts or free entry to events or places in Hammarö, through a rewards ladder. The target audience is families with children, with the main focus on engaging children, but the app should also feel appropriate for parents to use without seeming too childish. Therefore, the design choices feature playful colors, illustrations, and a clear layout.',
    thumbnail: hammaroadventureImages[6],
    images: [
      { url: hammaroadventureImages[0], description: "" },
      { url: hammaroadventureImages[1], description: "" },
      { url: hammaroadventureImages[2], description: "" },
      { url: hammaroadventureImages[3], description: "" },
      { url: hammaroadventureImages[4], description: "" },
      { url: hammaroadventureImages[5], description: "" },
      
    ]
  },
  {
    id: 4,
    title: magasindesign?.title || "Unknown Project",
    date: magasindesign?.date || "Unknown",
    techniques: magasindesign?.techniques || "Unknown",
    reason: 'solo project at university',
    github: '',
    description: '<b>Task:</b> Create a magazine aimed at a chosen audience and that adheres to established typographic rules and design principles. It should include a feature article with an interview, and at least 50% of the images/illustrations should be self-created.'
      + '<br><br><b>Result:</b> The solution was an interior design magazine aimed at an audience interested in decorating tips, effective home styling, and the latest interior design trends. The magazine was designed to be stylish, simple, and elegant, making it accessible and easy for readers to absorb the information and apply it in their own homes. The focus was on a well-balanced layout with clear hierarchy, a mix of fonts, and selective use of color to unify the design.',
    thumbnail: magasindesignImages[3],
    images: [
      { url: magasindesignImages[0], description: "" },
      { url: magasindesignImages[1], description: "" },
      { url: magasindesignImages[2], description: "" },

    ]
  },
  {
    id: 5,
    title: drawingProg?.title || "Unknown Project",
    date: drawingProg?.date || "Unknown",
    techniques: drawingProg?.techniques || "Unknown",
    reason: 'solo project at university',
    github: '',
    description: '<b>Task:</b> Create a drawing program using the MVC pattern by implementing a pre-programmed drawing engine.'
      + '<br><br><b>Result:</b> The solution was a simple program where the user can create circles, rectangles, and lines in any line thickness and color. When selecting a circle or rectangle, a fill color can also be chosen. Upon starting the program, an existing file is opened if available; otherwise, a new file is created, and the drawing is saved when the program is closed. The solution incorporates the MVC, facade, and composite patterns.',
    thumbnail: drawingProgImages[0],
    images: [
      { url: drawingProgImages[0], description: "" },

    ]
  },
  {
    id: 6,
    title: cocktailsanddreams?.title || "Unknown Project",
    date: cocktailsanddreams?.date || "Unknown",
    techniques: cocktailsanddreams?.techniques || "Unknown",
    reason: 'solo project at university',
    github: cocktailsanddreams?.github || "Unknown",
    website: cocktailsanddreams?.website || "Unknown",
    description: '<b>Task:</b> Create an interactive and responsive website that displays content from a REST API via JSON.'
      + '<br><br><b>Result:</b> The solution was a website where users can search for cocktail recipes using various search options and filters. The site is interactive, allowing users to access different categories and recipes in multiple ways. Visit the website via the link below.',
    thumbnail: cocktailsanddreamsImages[4],
    images: [
      { url: cocktailsanddreamsImages[0], description: "Homepage with search function and filtering" },
      { url: cocktailsanddreamsImages[1], description: "Results after searching by ingredient" },
      { url: cocktailsanddreamsImages[2], description: "Results after filtering by glass type" },
      { url: cocktailsanddreamsImages[3], description: "A single cocktail recipe" },

    ]
  },
  {
    id: 7,
    title: brunchncrunch?.title || "Unknown Project",
    date: brunchncrunch?.date || "Unknown",
    techniques: brunchncrunch?.techniques || "Unknown",
    reason: 'solo project at university',
    github: brunchncrunch?.github || "Unknown",
    website: brunchncrunch?.website || "Unknown",
    description: '<b>Task:</b> Create a fictional website using Bootstrap with a focus on the design process. Requirements include at least four sections, mobile-first design, responsiveness, a global menu, and animations.'
      + '<br><br><b>Result:</b> The solution was a single-page website for a brunch restaurant with easy navigation and colors that reflect organic and energetic themes. On mobile, the text in the different sections animates into view with a fade effect from below. On larger screens, the text animates in from the sides. This was done to create a greater sense of depth on the website.',
    thumbnail: brunchncrunchImages[8],
    images: [
      { url: brunchncrunchImages[0], description: "Homepage" },
      { url: brunchncrunchImages[1], description: "This week's deal and opening hours" },
      { url: brunchncrunchImages[2], description: "An automatically changing gallery of dishes and categories linking to the menu" },
      { url: brunchncrunchImages[3], description: "Information about event and deal opportunities" },
      { url: brunchncrunchImages[4], description: "Information about the restaurant" },
      { url: brunchncrunchImages[5], description: "Contact page" },
      { url: brunchncrunchImages[6], description: "Displays the latest uploaded images from their Instagram account" },
      { url: brunchncrunchImages[7], description: "Information in the footer" },
    ]
  },
  {
    id: 8,
    title: showcase?.title || "Unknown Project",
    date: showcase?.date || "Unknown",
    techniques: showcase?.techniques || "Unknown",
    reason: 'group project at university',
    github: showcase?.github || "Unknown",
    description: '<b>Task:</b> In a team, create a website where students can create an account and upload projects to collaborate with other students, resulting in a portfolio. The target audience is described as young and creative students who are interested in expressing their creativity, inspiring others, and finding a community. This should be presented through a custom theme in WordPress, with the help of plugins. The project’s focus is on the design process.'
      + '<br><br><b>Role:</b> My main role was to code the CSS and adjust plugins to create custom PODS, templates, and appropriate functionality in WordPress. The entire team was involved in the design process and concept development.'
      + '<br><br><b>Result:</b> The solution was a website with easy navigation and creative colors to create contrast against the white background and keep the focus on the project images. A project can be linked to multiple accounts and connected to a course, which users can click on to access all projects related to that account/course.'
      + '<br><br><b>Brand Promise:</b> At ShowCase, we promise to provide students with a platform where they can showcase their creativity, share interests with like-minded individuals, and build a community that inspires innovation and growth.',
    thumbnail: showcaseImages[8],
    images: [
      { url: showcaseImages[0], description: "Homepage" },
      { url: showcaseImages[1], description: "Gallery showing all uploaded projects" },
      { url: showcaseImages[2], description: "A single project by a student" },
      { url: showcaseImages[3], description: "Lists all courses" },
      { url: showcaseImages[4], description: "Information about a specific course and uploaded projects within that course" },
      { url: showcaseImages[5], description: "Lists all accounts" },
      { url: showcaseImages[6], description: "A user's profile" },
      { url: showcaseImages[7], description: "Page where you can create an account" },
    ]
  },
  {
    id: 9,
    title: hangman?.title || "Unknown Project",
    date: hangman?.date || "Unknown",
    techniques: hangman?.techniques || "Unknown",
    reason: 'solo project at university',
    github: hangman?.github || "Unknown",
    description: '<b>Task:</b> Create an application for the game Hangman. At the start of the game, a word is randomly chosen, and the player tries to guess the word by selecting one letter at a time. If a guessed letter is not in the word, the player loses a life, and the illustration begins to be drawn. If the player selects the wrong letter 7 times, they lose. If the player guesses the correct letters before 7 incorrect attempts, they win.'
      + '<br><br><b>Result:</b> The solution was an application with a homepage introducing the game. From there, the player can choose to start the game or read the game instructions. When playing the game, it functions as described in the task.',
      thumbnail: hangmanImages[6],
      images: [
      { url: hangmanImages[0], description: "Game homepage" },
      { url: hangmanImages[1], description: "Showing game rules when clicking on \"?\"" },
      { url: hangmanImages[2], description: "Game board" },
      { url: hangmanImages[3], description: "Game board during gameplay" },
      { url: hangmanImages[4], description: "Popup when the player has lost the game" },
      { url: hangmanImages[5], description: "Popup when the player has won the game" },

    ]
  },
  {
    id: 10,
    title: texteditor?.title || "Unknown Project",
    date: texteditor?.date || "Unknown",
    techniques: texteditor?.techniques || "Unknown",
    reason: 'solo project at university',
    github: '',
    description: '<b>Task:</b> Create a text editor where you can create a new file, open, and save a file.'
      + '<br><br><b>Result:</b>  The solution was a program as described in the task. The user is also prompted to save any unsaved files before closing the program or when opening a file. Characters, words, and lines are counted and displayed as well.',
      thumbnail: texteditorImages[0],
      images: [
      { url: texteditorImages[0], description: "" },

    ]
  },
  {
    id: 11,
    title: businessSystem?.title || "Unknown Project",
    date: businessSystem?.date || "Unknown",
    techniques: businessSystem?.techniques || "Unknown",
    reason: 'solo project at university',
    github: businessSystem?.github || "Unknown",
    description: '<b>Task:</b> Design and implement a business system to be used in a fictive physical store selling media (e.g., books, movies, games). The system should be used by employees in the store to handle both checkout management and inventory management. The store should be integrated with a central warehouse exposed via the web. The program should synchronize inventory levels and prices with the central warehouse.'
      + '<br><br><b>Result:</b>  The solution was a program as described in the task, where the user can choose between two main views: one for inventory management and one for checkout management. In the inventory management view, the user can add new products, remove products, and increase the quantity of items in the system. In the checkout management view, the user can add products to a shopping cart and "sell" a product, i.e., decrease the quantity of products in the system. Both views feature a product list tailored to specific needs, and they work with the same CSV file. This CSV file is opened at the start of the program and saved when the program ends. The system integrates with a central warehouse exposed via an API. The attributes that are integrated and updated are the local products\' prices and inventory levels when the user clicks a button in the inventory management view.',
      thumbnail: businessSystemImages[0],
      images: [
      { url: businessSystemImages[0], description: "View for Inventory management" }, 
      { url: businessSystemImages[1], description: "View for adding a new product to the system" }, 
      { url: businessSystemImages[2], description: "View for Checkout management " }, 
      { url: businessSystemImages[3], description: "View for checking the shopping cart" },
    ]
  },
  {
    id: 12,
    title: nollningsmarken?.title || "Unknown Project",
    date: nollningsmarken?.date || "Unknown",
    techniques: nollningsmarken?.techniques || "Unknown",
    reason: 'group project',
    github: '',
    description: 'Together with two others, I designed these patches for my former student association, Linda Carlstad, for the introductory weeks at Karlstad University. These patches are intended to decorate student overalls and showcase the theme of that year\'s introduction activities for the student association.',
    thumbnail: nollningsmarkenImages[6],
    images: [
      { url: nollningsmarkenImages[0], description: "2022 theme Super Mario" },
      { url: nollningsmarkenImages[1], description: "2022 theme Super Mario on overall" },
      { url: nollningsmarkenImages[2], description: "2023 theme Scooby Doo" },
      { url: nollningsmarkenImages[3], description: "2023 theme Scooby Doo on overall" },
      { url: nollningsmarkenImages[4], description: "2024 theme Pokémon" },
      { url: nollningsmarkenImages[5], description: "2024 theme Pokémon on overall" },
    ]
  },
  {
    id: 13,
    title: nollningsbiblar?.title || "Unknown Project",
    date: nollningsbiblar?.date || "Unknown",
    techniques: nollningsbiblar?.techniques || "Unknown",
    reason: 'group project',
    github: '',
    description: 'Together with another person, I designed these brochures for my former student association, Linda Carlstad, for the introductory weeks at Karlstad University. These brochures are intended to inform new and returning students about what the introduction will entail, including the responsible individuals, schedule, songs, and more. The design reflects the theme of that year\'s introduction for the student association.',
    thumbnail: nollningsbiblarImages[6],
    images: [
      { url: nollningsbiblarImages[0], description: "Front and back of brochure 2022, theme Super Mario" },
      { url: nollningsbiblarImages[1], description: "Example of inside of brochure 2022, theme Super Mario" },
      { url: nollningsbiblarImages[2], description: "Front and back of brochure 2023, theme Scooby Doo" },
      { url: nollningsbiblarImages[3], description: "Example of inside of brochure 2023, theme Scooby Doo" },
      { url: nollningsbiblarImages[4], description: "Front and back of brochure 2024, theme Pokémon" },
      { url: nollningsbiblarImages[5], description: "Example of inside of brochure 2024, theme Pokémon" },

    ]
  },
  {
    id: 14,
    title: jeopardy?.title || "Unknown Project",
    date: jeopardy?.date || "Unknown",
    techniques: jeopardy?.techniques || "Unknown",
    reason: 'solo project in my free time',
    github: jeopardy?.github || "Unknown",
    website: jeopardy?.website || "Unknown",
    description: 'This is a web-based, interactive trivia game inspired by the classic TV show Jeopardy. A game leader challenges players with category-based questions across various themes. Depending on the players\' answers, they receive positive or negative points based on the question\'s value. The game is designed to deliver an engaging experience with an intuitive layout and smooth animations. Note that the web application does not include a built-in feature for players to "buzz in" to answer questions, but this can easily be managed using external tools. The game is not mobile friendly.<br><br>Since the game is currently hosted on GitHub Pages, certain functionalities have been adapted accordingly. For instance, users cannot open a new tab directly from the game\'s instruction page to the page displaying all the answers for the host to read during gameplay. Instead, answers are displayed in the current tab, while a new tab opens for the homepage, allowing the game to continue.<br><br>The game is still under development.',
    thumbnail: jeopardyImages[7], 
    images: [
      { url: jeopardyImages[0], description: "Homepage" },
      { url: jeopardyImages[1], description: "Game Instructions" },
      { url: jeopardyImages[2], description: "Game Settings, add players and choose theme" },
      { url: jeopardyImages[3], description: "Gameboard" },      
      { url: jeopardyImages[4], description: "Questionpage where players can get minus point if they answer wrong" },
      { url: jeopardyImages[5], description: "Answerpage where players can get plus point if they answer correct" },
      { url: jeopardyImages[6], description: "Scoreboard, where first, second and third place receive a trophy according to rank" },      
    ]
  },
  {
    id: 15,
    title: todo?.title || "Unknown Project",
    date: todo?.date || "Unknown",
    techniques: todo?.techniques || "Unknown",
    reason: 'solo project in my free time',
    github: todo?.github || "Unknown",
    website: '',
    description: 'A simple todo web application with filtering according to the status of the tasks, the list is sorting tasks according to date and animation when the status changes. Not mobile compatible and no connected database added.',
    thumbnail: todoImages[4], 
    images: [
      { url: todoImages[0], description: "List of tasks with different statuses" },
      { url: todoImages[1], description: "Filtered list only showing tasks with status \"In Progress\"" },
      { url: todoImages[2], description: "Filtered list without tasks but would only show tasks with status \"Completed\"" },
      { url: todoImages[3], description: "The form on the left for adding a task and the filters (the circles at the top) are fixed, and only the list of tasks scrolls" },      
    ]
  },
  {
      id: 16,
      title: movieRater?.title || "Unknown Project",
      date: movieRater?.date || "Unknown",
      techniques: movieRater?.techniques || "Unknown",
      reason: 'solo project in my free time',
      github: movieRater?.github || "Unknown",
      website: '',
      description: 'A full-stack application built using popular frameworks such as Django, React, and React Native, with a foundation in JavaScript and Python. The project includes a backend RESTful API, a front-end web application, and mobile applications for both Android and iOS.<br><br>The application implements user authentication (registration and login), full CRUD operations (create, read, update, delete), and custom API endpoints. The communication between the API and the web application is fully functional, and the app features styling as well as restrictions on certain sections, which are only accessible to authenticated users.<br><br>Mockups coming soon.',
      thumbnail: movieRaterImages[0], 
      images: [
        // { url: movieRaterImages[0], description: "" },
       
      ]
    },

  // {
    //   id: **,
    //   title: *?.title || "Unknown Project",
    //   date: *?.date || "Unknown",
    //   techniques: *?.techniques || "Unknown",
    //   reason: 'soloprojekt på fritiden',
    //   github: *?.github || "Unknown",
    //   website: '',
    //   description: '',
    //   thumbnail: *[4], 
    //   images: [
    //     { url: *[0], description: "" },
       
    //   ]
    // },
];

export default projectsDataEn;
