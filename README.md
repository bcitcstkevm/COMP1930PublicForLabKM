# COMP1930PublicForLabKM
This is team 3s work for projects 1930 at BCIT. We are creating a movie match maker website. Currently a work in progress.
This webpage is optimized to work on Chrome.

You may visit a hosted version at:https://website-b059f.firebaseapp.com/ 

Please note the CSS does not work for every browser.

index.html - log in/sign up page(default home page)
- "Try it" button currently links to 404 page. When completed it should log in using a guest id to let the user try              our website.

index.css - contains CSS code for index.html
index.js - contains javascript code for index.html

ques.html - first questionnaire page, basic questions to let algorithm set profile movie values.
ques.css - contains CSS code for ques.html
ques.js - contains javascript code for ques.html

ques_movie_ratings.html - movie ratings page, optional for users, provides a more accurate algorithm value based on answers.                      (Not connected to firebase at the moment)

ques_movie_ratings.css - contains CSS code for ques_movie_ratings.html
ques_movie_ratings.js - contains javascript code for ques_movie_ratings.html

main.html - movie recommendations page, main page after logging in.
- Buttons for "No Country for Old Men" and "Bohemian Rhapsody" shows functionality. "Watch now" button for Bohemian Rhapsody links to the Cineplex page to purchase movie tickets.
- "Watch now" button when completed should lead to another page within MovieMatch that shows a brief sypnosis, embedded trailer, and a 5 star rating system which will affect user profile's algorithm value, altering the recommended movie list.

main.css - contains CSS code for main.html
main.css - contains CSS code for main.html

main_static.html - main page without text identifiers for movies, closer to how the final page will look but we used main.html for the presetation to show us reading from firebase. Finished product will have 3 horizontal sections of recommendations (Within your comfort zone, Take a gamble, It's been a while) for more variety of suggestions.
main_static.css - contains CSS code for main_static.html
main_static.css - contains CSS code for main_static.html
