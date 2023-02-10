let btn = document.getElementById('btn');
let output= document.getElementById('output');

let quotes =
['"I am no bird; and no net ensnares me: I am a free human being with an independent will."― Charlotte Brontë, Jane Eyre',
'"The truth will set you free, but first it will piss you off."― Joe Klaas, Twelve Steps to Happiness',
'“Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.”― Virginia Woolf, A Room of Ones Own',
'“The most courageous act is still to think for yourself. Aloud.”― Coco Chanel',
'“War is peace.Freedom is slavery.Ignorance is strength.”― George Orwell, 1984',
'“Some tourists think Amsterdam is a city of sin, but in truth it is a city of freedom. And in freedom, most people find sin.”― John Green, The Fault in Our Stars',
'“Freedom is not worth having if it does not include the freedom to make mistakes.”― Mahatma Gandhi',
'“When a man is denied the right to live the life he believes in, he has no choice but to become an outlaw.”― Nelson Mandela',
'“People demand freedom of speech as a compensation for the freedom of thought which they seldom use.”― Søren Kierkegaard'];

btn.addEventListener('click', function(){
    var randomQuote= quotes[Math.floor(Math.random() * quotes.length)];
    output.innerHTML= randomQuote;
})
