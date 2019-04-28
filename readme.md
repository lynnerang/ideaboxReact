# IdeaBox in React

## Table of contents
* [General Info](#General-Info)
* [Built Using](#Built-Using) 
* [Screenshots](#Screenshots)
* [How to Use](#How-to-Use)
* [Setup](#Setup)
* [License](#License)

## General Info

<h4 align="middle">This project involved rebuilding a previous project for recording and archiving ideas in React as opposed to vanilla JavaScript.  The focus was to become more familiar with the differences between application structure in vanilla JS versus a framework like React, and to become more comfortable coding in React.</h4>

This is the original comp and project specifications provided for the project:

<img src="http://frontend.turing.io/assets/images/projects/ideabox/ideabox-triples-01.jpg" alt="Original mock we worked from">


## Built Using

- React
- SCSS
- localStorage
- Webpack


## Screenshots

<img src="https://user-images.githubusercontent.com/43159025/53117304-d40a5180-3507-11e9-98c7-9ab7e78dccfc.png" alt="Desktop">
<img src="https://user-images.githubusercontent.com/43159025/53121286-213ef100-3511-11e9-8f14-946655a04c1b.png" alt="Top of website on mobile">


## Features

- [x] Viewing list of user-entered ideas, saved to local storage
- [x] Adding, editing, and deleting of ideas
- [x] Searing by keywords in title or body with real-time results
- [x] Character counter and feedback on input validity
- [x] 5 quality levels for upvoting, downvoting, and filtering on ideas


## How to Use

Fill in the empty text boxes with a title and body for your new ideas. Upon pressing save, the application saves your idea in the list below and will be retained when you close the browser and come back. Every new idea starts with the quality of 'Mehhh' and allows you to vote up through 4 other quality options by clicking the upvote and downvote buttons. Additionally, you can update the title and body section of existing cards. When you fill up the page with more than ten ideas, it will show you your most recent ten and you can press the 'Show More...' button to view them all. You can search and filter through your ideas by using the search box and/or filter buttons and the list will update accordingly.


## Setup

View the application live: <a href="https://lynnerang.github.io/ideaboxReact">ideaboxReact on GitHub Pages</a>.

OR

Download a copy for yourself using the following instructions.

Run the following command in your terminal:

git clone https://github.com/lynnerang/ideaboxReact.git
Then run the following command to install dependencies:

npm install
To view the app in action, run the following command in your terminal:

npm start
Then, go to http://localhost:3000/ in your browser to see the application run.


## License

All credit goes to Turing School of Software for providing the project specifications and design.


