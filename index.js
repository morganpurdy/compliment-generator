// array of quotes
//sources: good housekeeping, forbes, huffington post
var newName;
var quotes = ["you are a poetic and noble land mermaid.", "you are the greatest human being ever invented.", "your brain is almost as perfect as your face!", "you are a perfect sunflower.", "you are a beautiful rule-breaking moth.", "you are a beautiful, talented, brilliant, powerful musk ox.", "you are a beautiful tropical fish. You’re smart as a whip and you’re cool under pressure.", "you are a cunning, pliable, chestnut-haired sunfish.", "oh you beautiful, naïve, sophisticated newborn baby.", "you are an opalescent tree shark.", "you are a rainbow infused space unicorn.", "shut your mouth. You have all the strengths.", "you are a beautiful, sassy mannequin come to life." ];

// button click to generate quote
document.querySelector('.generate').addEventListener('click', function() {
// randomization of quotes from array
var quote = quotes[Math.floor(Math.random() * quotes.length)];

  // make p class visible
 document.querySelector(".quoteDisplay").style.visibility = "visible";

// display quote with new name
  newName = document.querySelector('.new-name').value;
  document.querySelector(".quoteDisplay").textContent = newName + quote;
});
