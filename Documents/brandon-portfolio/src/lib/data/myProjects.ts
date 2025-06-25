import westernedu from '$lib/assets/projects/westernedu.png';
import boxelder from '$lib/assets/projects/boxelder.png';
import trackvia from '$lib/assets/projects/trackvia.png';
import leadav from '$lib/assets/projects/leadav.png';
import knudson from '$lib/assets/projects/knudson.png';
import omtrial from '$lib/assets/projects/omtrial.png';
import campos from '$lib/assets/projects/campos.png';
import angularSort from '$lib/assets/projects/Angular-Sort.jpg';
import angularFilter from '$lib/assets/projects/Angular-Filter.jpg';
import photoGallery from '$lib/assets/projects/responsive-photo-gallery.jpg';
import drawingApp from '$lib/assets/projects/drawing-add.jpg';
import e2eTests from '$lib/assets/projects/E2E-tests-1.png';
import canvasDrawing from '$lib/assets/projects/Canvas-DrawingApp-VanillaJS.png';
import theMason from '$lib/assets/projects/The-Mason.png';

interface ProjectDetails {
  id: number;
  name: string;
  image: string;
  desc: string;
  havLink: boolean;
  link: string;
  tag: string;
  buttontext: string;
}

const myProjects: Record<string, ProjectDetails> = {
  project1: {
    id: 1,
    name: 'Western Colorado University',
    image: westernedu,
    desc: 'This was an all hands on deck project. Easily the largest site the team and I built. I am currently handling most client updates to the site. This includes building new pages, forms, and various components across the site. I also have handled content updates on this site.',
    havLink: true,
    link: 'https://western.edu',
    tag: 'Wordpress',
    buttontext: 'Site Link'
  },
  project2: {
    id: 2,
    name: 'Boxeder Consulting',
    image: boxelder,
    desc: 'I played a support role on this site, but wound up building quite a few pieces of this. I also played a heavy role in the clients QA requests before we launched this site. I was able to contribute to building major components on the site as well as fix and optimize for mobile.',
    havLink: true,
    link: 'https://boxelderconsulting.com',
    tag: 'Custom Wordpress',
    buttontext: 'Site Link'
  },
  project3: {
    id: 3,
    name: 'TrackVia',
    image: trackvia,
    desc: 'On this site I was tasked with building out a custom pricing component as well as the show/hide "More Details" table feature found below it. This was great experience coming in on a site that another developer built and contributing a component build. I was given a design for this page and executed it.',
    havLink: true,
    link: 'https://trackvia.com/pricing',
    tag: 'Custom Wordpress',
    buttontext: 'Site Link'
  },
  project4: {
    id: 4,
    name: 'Lead AV',
    image: leadav,
    desc: 'This was my first project at Blennd as lead developer on a project. I learned a ton about the process at Blennd starting with the design to developer hand off. From there we analyze each component and talk through the functionality and get an initial estimate of time. Though I was nervous attempting my first project, I created an awesome website with some cool javaScript functionality and animations. Specifically in the homepage hero of the site. This was my first work with Advanced Custom Fields and tying it into Wordpress. I created a custom javascript typewriter effect, but figured out how to tie this into ACF so the client is able to pick and choose what words this cycles through on the back end of the site. Along with learning a lot about the development process, this site was unique in that the client requested this site be ADA compliant. This was also my first experience with ADA on a website. Learning how to make a website ADA compliant is a truly valuable skill that I wound up using on other sites as well. I never realized how color schemes could matter so much to being accessible and how slight of a color change could make such an enormous difference to accessibility of a site.',
    havLink: true,
    link: 'https://leadaudiovisual.com',
    tag: 'Custom Wordpress',
    buttontext: 'Site Link'
  },
  project5: {
    id: 5,
    name: 'Knudson Manufacturing',
    image: knudson,
    desc: 'This was my third project at Blennd that I was the primary developer on. This was very fun design to develop into a full site. This site utilized custom post types for the projects section as well as the team sections here. This site really taught me a lot to make me more comfortable with PHP and Advanced Custom Fields. There were also a lot of cut patterns and animations built into the design. It is awesome to build a site from beginning to launch and see the final product look as good as I felt about this site.',
    havLink: true,
    link: 'https://knudsonmfg.com',
    tag: 'Custom Wordpress',
    buttontext: 'Site Link'
  },
  project6: {
    id: 6,
    name: 'Ogborn Mihm LLC',
    image: omtrial,
    desc: 'This site featured some more complex components and animations. We also utilized some complex custom post types for the expansive team section. This section features a lot of data in separate tabs. This utilized bootstrap tabs and allows the user to pull in specific data for each section. I learned a ton working on this site. The animations on this site are clean and a lot of Advanced Custom Fields were used to populate the team sections as well as the interior pages for the team. I also learned more about filtering out categories as we had to exclude certain categories across the site such as Videos, which were used to pull into a specific component, but we did not want to see those videos populating in the blog section on this site.',
    havLink: true,
    link: 'https://omtrial.com',
    tag: 'Custom Wordpress',
    buttontext: 'Site Link'
  },
  project7: {
    id: 7,
    name: 'Campos EPC',
    image: campos,
    desc: 'This was my most recent project at Blennd that I developed from beginning to launch. The site came out looking great, and I learned a lot about being flexible as components of this site changed a few times per the clients needs. This site utilized a few different templates to provide distinct interior pages for the clients services. I continue to improve on development skills with every project I touch.',
    havLink: true,
    link: 'https://camposepc.com',
    tag: 'Custom Wordpress',
    buttontext: 'Site Link'
  },
  project8: {
    id: 8,
    name: 'AngularJS Sort Function',
    image: angularSort,
    desc: 'Most of my time spent at my internship at Devetry involved working with the AngularJS framework. I loved working with this javaScript framework and hope to get chances to work with this in the future! One of my primary tasks while working here was to develop a custom sort on a few of the tables on a project with an enormous codebase. This was interesting as I have not worked with a codebase so large before. After looking up a few things and going through a tutorial or two, I felt comfortable tackling this challenge. My first attempt looked promising as I used a function called by the ng-click directive to allow clicking on the table header title of each column to sort the column by ascending or descending order. The only issue was that there was nothing showing that this functionality was available at first glance without knowing the functionality was there. My solution to this was returning the arrow-down class on the else statement instead of a blank string! This solution shows the sort arrow next to the header title at all times, which shows the user that this sort capability is available just by looking at the table. This functionality pairs perfectly with the filter functionality described in the next project on my portfolio. To see a working demo and corresponding code for this project please see the JSFiddle below.',
    havLink: true,
    link: 'http://jsfiddle.net/Zucktime12/yo32tdm4/2/embedded/result',
    tag: 'AngularJS',
    buttontext: 'Demo'
  },
  project9: {
    id: 9,
    name: 'AngularJS Filter on a table',
    image: angularFilter,
    desc: 'Another one of my primary tasks while working here was to develop a filter on a table which allows the user to search by any of the columns. The greatest challenge to creating this was trying to get the filter to actually filter by each corresponding column as this was my first experience with AngularJS. Also, a difficult function to figure out was being able to filter multiple columns at the same time. Originally I had written a complex function that worked, but there was a much simpler way to get AngularJS to do exactly what I wanted to do. This functionality pairs perfectly with the sort function described in my first portfolio item allowing the use of a table with both filter and sort capabilities! This was truly a great learning experience and amazing introduction to a language I fell in love with. Please see JSFiddle below for the demo and corresponding code.',
    havLink: true,
    link: 'http://jsfiddle.net/Zucktime12/bzqa32s8',
    tag: 'AngularJS',
    buttontext: 'Demo'
  },
  project10: {
    id: 10,
    name: 'Photo Gallery Search',
    image: photoGallery,
    desc: 'This project was one of my favorite in learning JavaScript and jQuery. It also allowed me to reinforce some of my html and css skills. I started the project by building out the gallery using HTML and CSS to follow the design of the mockup provided to me. My next step was to find a plugin for a lightbox feature. I researched and found the plugin Magnific Popup, which I loved! I was able to implement this into my project fairly easily and formatted the lightbox to look identical to the mockup with the caption centered below the image. The most daunting part of this project was creating the search box that allows the user to search images by the caption and only show results matching what is input into the search box. After many failed plugin attempts I decided to research how I could code this my self with JavaScript. I researched and found what I needed to make this work with some simple JavaScript and jQuery. I had to target my searchbox with an ID and make a function that ran on each keyup so that the searchbox would search in live time. The function logged the value of the user input and converted each value to lowercase so there would be no discrepancy regardless of the user typing in upper or lowercase. The function then would hide or show images in the gallery based on if the input from the user matched anything in the caption text. See the JSfiddle below for the demo.',
    havLink: true,
    link: 'http://jsfiddle.net/Zucktime12/a4mfdw4m/embedded/result',
    tag: 'HTML, CSS',
    buttontext: 'Demo'
  },
  project11: {
    id: 11,
    name: 'Javascript Drawing Application',
    image: drawingApp,
    desc: 'This project was one of the coolest ones I created. This demo was taught to me from one of my courses. This simple drawing application allows the user to either choose from the preset color pallet or create their own color to add to the pallet to draw with. The html template was provided to me with none of the JavaScript or jQuery functionality working. The first major problem was to figure out how to get the new color button to work and toggle the screen that accessed the sliders used for color creation! I did this by setting each of the sliders to have a range from 0 to 255 to include the entire color spectrum. Once this is selected by the user the colors are logged into an RGB element to produce a color. This color is previewed to the left of the sliders so the user can see what they are adding to the pallet. The next part of the project invloced appending the new color to the pallet when the user clicks the "Add Color" button. At this point, I was learning a lot about the .append and .click commands in order to make the new color active as the user clicked the "Add Color" button. The final part of the project was getting the user to be able to physically draw on the canvas with the colors they selected. This process familiarized me with the .mouseDown, .mousemove, and .mouseup events to get the application to correctly draw only when the user has the mouse clicked down and moves to any point on the canvas. See the JSfiddle below for a demo of this project.',
    havLink: true,
    link: 'http://jsfiddle.net/Zucktime12/t9wwnqfj/embedded/result',
    tag: 'JavaScript',
    buttontext: 'Demo'
  },
  project12: {
    id: 12,
    name: 'End to End Testing',
    image: e2eTests,
    desc: 'During my internship with Devetry, one of the most important things I worked on was End to End testing using Protractor. This was a difficult task at first as this was my first experience with such a large codebase as well as my first experience with ProtractorJS. Practicing writing end to end tests for the application significantly improved my understanding of the AngularJS framework as well as providing me a good base knowledge of End-to-End testing in general. Over the course of a few weeks I was writing my own tests for new pieces of the application being developed. Please see the above code snippets for some of my examples of End to End tests I wrote during my time at Devetry.',
    havLink: false,
    link: '',
    tag: 'AngularJS, Protractor',
    buttontext: 'Test'
  },
  project13: {
    id: 13,
    name: 'HTML5 Canvas',
    image: canvasDrawing,
    desc: 'This project is slightly different from the previous drawing application I created. In this project I used a flag to make it so the user would only draw on the canvas when the mousedown event is triggered. The variable isDrawing is initially set to false and this is switched to true when the user fires the mousedown event. Once the mouseup event is fired by the drawing will stop. In order to be able to draw on the canvas we used the offsetX and offsetY properties to tell the program to only draw where the mouse is clicked down. I achieved this by initially starting the offsetX and offsetY values to 0 but updating the values to where the mouse location is once the user clicks down or fires the mousedown event. Unlike the user is unable to choose a color in this project. Instead by using the hsl property, the color constantly changes based on this hsl value as the user draws. This was a really cool feature to learn and the colors will continue to cycle as long as the user continues to draw. Another new feature I learned was making the line width increase or decrease as the user draws on the canvas. For this we set the linewidth of the to a certain length and increased or decreased the value as the user moves the mouse to draw. I implemented a function to switch directions once the width reached a certain value so once you reach the min or max value it will begin to increase or decrease the opposite direction creating a really cool drawing effect as seen in the screenshot. I have created a JSfiddle for this application so try it out yourself by clicking the link below and simply begin drawing!',
    havLink: true,
    link: 'http://jsfiddle.net/Zucktime12/htbb17gw/embedded/result/',
    tag: 'JavaScript',
    buttontext: 'Demo'
  },
  project15: {
    id: 15,
    name: 'The Mason',
    image: theMason,
    desc: 'The Mason was one of my first and favorite projects to work on at Outspoke. They are a high end apartment complex in St. Petersburg, FL. We host most of the sites we build on Flywheel which was a service I had to learn. This specific project I was in charge of building out pages and the site according to a composition in the program Sketch App. This program is great for the designer to hand off to the developer in order to copy the design ui. <br>Wordpress and CSSs were my biggest skills learned and practiced on this site. This was my first taste of the site Salient theme, which is the most common theme we use to build sites for clients. Aside from learning the different layouts for pages, I learned a ton about Salient settings and how they set settings can make a site build significantly smoother. Iâ��ve built a custom navigation with CSS and Jquery which is the part of the site I was most proud of. This was a great start to improving my wordpress knowledge and I truly developed my skills after working on this project.',
    havLink: true,
    link: 'https://themasonstpete.com',
    tag: 'Wordpress',
    buttontext: 'Site Link'
  }
};

export default myProjects;