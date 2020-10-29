

-deck oojs class
-make add buttons work to use user has many decks and decks has many questions relationships 
-post users/user_id/decks/deck_id with a fetch and form data includes the deck_id user_id question_id 
-goes to deck#update method add a question to that deck, no need to involve user or question controller 
-render json deck including questions 
-it will hide the main deck and show the users deck with that question using startDeck and renderQuestion 

- restyle content_2 div
-make sure JWT is working, how to access current_user in code 
-maybe display explanations on selecting answer 



add: 
patch fetch request to add the wuestion to that deck 

show user deck 
fetch request to user show page to display user deck with question 


why is login so slow now?  is it the question serializer that's fetching questions and the decks they belong to? 