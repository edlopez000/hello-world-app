export const projects = [
  {
    projectTitle: 'Personal Website',
    url: 'https://hopeworks-personal.netlify.app/',
    image:
      'https://ealr-hopeworks-portfolio.netlify.app/media/carousel/personalSite.jpg',
    purpose:
      'This project started as a way to showcase my skills in HTML, CSS, and JavaScript. It’s the first website I put together after acquiring basic knowledge.',
    objective:
      'The site introduces the visitor to the world of First Person View drones and provides a broad overview of the hobby.',
    approach:
      'I created the site using VS Code with Git as my preferred version control system from scratch. I host the source code on Github and deploy the site using Netlify.',
    projectDuration: 'Approximately a week',
    funFact:
      'I worked with an API (Youtube iframe API) for the first time and it’s shown on the index page, I scripted a behavior to occur on mouseout and mouseover events. I also used DOM manipulation to provide a ‘simulated’ drone experience on the ‘Getting Started’ page.',
  },
  {
    projectTitle: 'Wordpress',
    url: 'https://thefitnessprimer.wordpress.com/',
    purpose:
      'This project functioned as a way to increase familiarity with the most popular platform for website creation, Wordpress.',
    objective:
      'The site introduces the visitor to the biggest two facets of fitness, training and dieting.',
    approach:
      'I used the vanilla Wordpress editor to create blog posts and pages. In terms of content, I collected some of the notes I took at the beginning of one of my many fitness phases.',
    projectDuration: 'Approximately 4 days',
    funFact:
      'There’s a weight tracking spreadsheet that I have used to great success that I think would be a perfect mobile app and that is a future project I will embark on.',
  },
  {
    projectTitle: 'GIS',
    purpose:
      'This project served as an introduction into Geographic Information Systems through ArcGIS Online.',
    objective:
      'The map illustrates the populations at risk in the case of a hurricane by using georeferenced data provided by the United States Census Bureau. It does this by highlighting the percentage of households without a vehicle.',
    approach:
      'This map was created through the use of ArcGIS Online which is the web companion to ESRI’s enterprise desktop application ArcGIS Pro. ',
    projectDuration: 'Approximately 3 days',
    funFact:
      'This particular project led me down a rabbit hole of GIS-related topics. The discipline has many layers and fields that go hand-in-hand with tech from creating web maps using the most popular JavaScript frameworks like React to serving as a vehicle to learn database administration through tools like PostGIS.',
  },
  {
    projectTitle: 'Production Test',
    url: 'https://hopeworks-production-retest.netlify.app/',
    purpose:
      'This project served as an exercise in web consulting. I was provided a website from 2002 and told to make it as modern as possible.',
    objective:
      'The scope of this project was to modernize the corporate website of a web solutions company by using modern web technologies and current design principles.',
    approach:
      'Originally, I began to use the Bootstrap CSS framework to build a responsive version of the original web 1.0 site. This accomplished my modern technology goal but the design language portion was left unaccomplished.I solved this by using a bootstrap template as the main foundational structure of the website. In this template, I learned the correct and common uses of Bootstrap and it served as a form of documentation for me to learn from.',
    projectDuration: 'Approximately a week',
    funFact:
      'I am continuing to use Bootstrap for all of my web development projects. I am planning on experimenting with other CSS frameworks like TailwindCSS.',
  },
  {
    projectTitle: 'GIS Certificate Generator',
    url: 'https://hopeworks-gis-cert.netlify.app/',
    purpose:
      'This project was of my own initiative and it functioned as a way to put the past 4 months of programming experience to the test by identifying a need and creating a tool which can help satisfy that need. Some background: Hopeworks has a certificate which it provides at the end of the GIS module, sadly the name and date fields are not populated, I sought to fix this.',
    objective:
      'Create a tool in which users can input their full names and date of training completion and receive a GIS certificate.',
    approach:
      'This project being one of my own devising could have gone in hundreds of ways. In the end, I settled on using a canvas element to manipulate a template image file which I created. This was primarily possible through the use of JavaScript to grab the name and date from the form and manipulate that data accordingly.',
    projectDuration: 'Approximately 2 days',
    funFact:
      'I learned a bunch about the canvas element and it’s evolution in HTML over the years. I also got to do a surprising amount of method chaining to get the name and date strings to look how I wanted.',
  },
];
