
const CARDS_IMAGE = `https://deckofcardsapi.com/static/img`
//${id}.png
const faceCardValues = {"ACE": 11, "KING": 10, "QUEEN": 10, "JACK": 10 };

function dealCards(cards){

};


const deckId = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`.deck_id
const cards = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`
const card1value = cards[0].value
const card1Img = cards[0].image
const card2value = cards[1].value
const card2Img = cards[1].image

let value1;
try{
  value1 = parseInt(card1value)
}catch{
  value1 =faceCardValues[card1value]
}
//Given a deck of cards - 52 (somehow we'll pull this from a shuffled  API)
//Grab 1 card, do not replace, then grab a second card
//From the card we ascertain its value somehow ***
//Is the prop a card? idk