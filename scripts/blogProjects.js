var rawData = [
  {
    title:       'BusMall Marketing Analysis',
    category:    'Code Fellows 201',
    url:         'http://www.gkatchmar.com/market-analysis-app/',
    lastMod:     '2016-08-09',
    body:        '<p>Code Fellows 201 assignment #3. <img src="images/BusMall01.jpg" class="pull-right"></p><p>This application displays three random, non-repeated images that the user votes on for their preferred product. This is iterated 15 times at which point the user can start again, see their vote data in table format or quit. The images were resized to be consistent using batch processing (IrfanView) and displayed using Flexbox.</p><p>Later, the data table was replaced with a bar chart imploemented with the Canvas.js add-in. Then JSON local storage was implemented allowing for a second voting track, this time storing the total votes of all users which would be useful to marketers on the server side of the application. A second Canvas.js bar chart was also added for dispaying this second voting track, requiring a more flexible "on-the-fly" definition of the data feeding the charts.<img src="images/BusMall02.jpg" class="pull-left"></p><p>Finally, some CSS transitions were added to give the randomly-generated images sliding behavior.</p>'
  },
  {
    title:       'Cookie Stand',
    category:    'Code Fellows 201',
    url:         'https://gnkatchmar.github.io/cookie-stand/',
    lastMod:     '2016-07-25',
    body:        '<p>Code Fellows 201 assignment #2<img src="images/Cookie01.jpg" class="pull-left"></p></p>This project introduced Object Oriented Programming to simulate random sales of a chain of cookie stands, first using object literals, then a more sophisticated constructor function.</p></p>The concept of a Style Guide was first introduced, leading to a much more attractive appearance than Guessing Game including much showing and hiding of various HTML elements based on context.<img src="images/Cookie02.jpg" class="pull-right"></p></p>Later, a form was added allowing the user to add new cookie stands to the generated random sales reports (which in turn, had transitioned from lists to tables). Throughout, toLocaleString was used both to generate ne hours of operation and to add commas to better format the totals in the reports.</p>'
  },
  {
    title:       'Personal Website',
    category:    'Personal',
    url:         'http://www.gkatchmar.com',
    lastMod:     '2016-08-27',
    body:        '<p>First launched in February 2015 as an adjunct to my Code Oregon 1.0/Treehouse online educational process, this website has yet to be substantially redesigned to reflect the concepts addressed in my current Code Oregon 2.0/Code Fellows path. </p><img src="images/Gkat01.jpg" class="pull-right"><p>It basically serves as a repository for my personal interests, as of late, a hosting service for a saved copy of my Treehouse profile (not accessible otherwise without paying $25/month!), and for projects that, for one reason or another, do not work properly using Github Pages for hosting.</p><p>The Home page features an imported jQuery looped slideshow of my cat, Chester falling asleep. The Restaurant Rankings page accumulates more than five years worth of (mostly positive) dining experiences. The Cocktails Guide pages features three interesting infographics. The Portland Dining Guide is simply a multi-tabbed Google Sheet in an iframe. The About page is self-explanatory with links to my Treehouse Achievement Badges and my resume on LinkedIn.<p>'
  },
  {
    title:       'Portland Weekend Brunch Finder',
    category:    'Code Fellows 201',
    url:         'https://gnkatchmar.github.io/Code201Final',
    lastMod:     '2016-08-23',
    body:        '<p>Code Fellows 201 assignment #4.<img src="images/Final01.jpg" class="pull-left"></p><p>I pitched the idea of using my preexisting spreadsheet of Portland brunch locations as the basis for a class final project. It was voted "most popular" of the three projects and four other classmates (Jade Dhabolt, Rosemary Joe, Nathan Pickard, and Cheryl Cruz) joined me to make it happen.</p>First, the spreadsheet was built out, adding urls, latitude, longitude, and later, Google Place IDs. Using concatenation, the spreadsheet was then used to build the data array of 100+ restaurants (and later, a pulldown menu).</p><p><img src="images/Final02.jpg" class="pull-right">For the Home page, Jade used Google Places\' cache of restaurant-specific images to great effect where three random restaurants are displayed. He also added the option of having the user opt into geolocation, thus narrowing the restaurants displayed to those closest to the user.</p><p>For the Search page, Jade used Google Maps to display restaurants based on the user input for neighborhoods and desired time (only restuarants open at that time are displayed). Also, using the same user input, Rosemary designed the text display of same.</p><p>I designed the Review page, a "mini-Yelp" that uses local storage to somewhat mimic a database backend for the application.</p><p>Jade, with some assistance from Nathan and Cheryl, was responsible for the look and feel of the website. After some discussion, the group decided upon a "sophisticated" appearance over a "whimsical" approach which would have featured bacon-shaped buttons, bearded hipster servers, etc.</p>'
  },
  {
    title:       'Simple Guessing Game',
    category:    'Code Fellows 201',
    url:         'https://gnkatchmar.github.io/201_Assign2',
    lastMod:     '2016-07-10',
    body:        '<p>Code Fellows 201 assignment #1.<img src="images/Guess01.jpg" class="pull-right"></p></p>A rudimentary guessing game, this demonstrates the starting point of my Code Fellows 201 education and serves as the basis for demonstrating the progress made with each ensuing assignment.</p></p>After a short biographical desription with minimal CSS, a button inititates a simple three question yes/no quiz about the biographical details, followed by a fourth question involving guessing a number between one and ten.</p></p>Some "flair" is added at the end where pictures of Pinky and the Brain are used to demonstrate incorrect and correct guesses. Throughout, various Git processes were learned culminating with posting the final project to GitHub Pages.</p>'
  },
  {
    title:       'Treehouse Achievement Badges',
    category:    'Treehouse',
    url:         'http://www.gkatchmar.com/Gregory%20Katchmar.html',
    lastMod:     '2016-02-18',
    body:        '<p>From February 2015 through February 2016, I participated in the Code Oregon 1.0/Treehouse program. </p><img src="images/Badges01.jpg" class="pull-left">Per their website, "As you progress through Tracks and the Library, you\'ll earn points for completing videos and quizzes and earn badges for bigger accomplishments. Show off your badges on your own sites and apps!"</p>'
  },
];
