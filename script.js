document.addEventListener("DOMContentLoaded", function(){

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const continueBtn = document.getElementById("continueBtn");
const replayBtn = document.getElementById("replayBtn");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const letterText = document.getElementById("letterText");
const bgMusic = document.getElementById("bgMusic");

let heartInterval;

/* YES BUTTON */
yesBtn.addEventListener("click", function(){

  bgMusic.volume = 0.5;
  bgMusic.play().catch(()=>{});

  page1.style.display = "none";
  page2.style.display = "flex";

  showLetter();
  startHearts();
});

/* MOVE NO BUTTON (Desktop + Mobile + GitHub Safe) */

function moveNoButton(){

    const x = Math.random() * 120 - 60;
    const y = Math.random() * 80 - 40;


  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseenter", moveNoButton);  // desktop
noBtn.addEventListener("click", function(e){         // mobile tap
  e.preventDefault();
  moveNoButton();
});

/* CONTINUE */
continueBtn.addEventListener("click", function(){
  page2.style.display = "none";
  page3.style.display = "flex";
});

/* REPLAY */
replayBtn.addEventListener("click", function(){

  page3.style.display = "none";
  page2.style.display = "none";
  page1.style.display = "flex";

  letterText.innerHTML = "";
  continueBtn.classList.add("hidden");

});

/* TYPING EFFECT */
function showLetter(){

const message = `
From the moment you came into my life,
everything changed in the most beautiful way.

Your smile feels like sunshine,
your laugh feels like home.

If love had a definition,
it would simply be you.

So today I just want to say…

I choose you.
Every single time. ❤️
`;

letterText.innerHTML = "";
continueBtn.classList.add("hidden");

let i = 0;

function typing(){
  if(i < message.length){
    letterText.innerHTML += message.charAt(i);
    i++;
    setTimeout(typing, 30);
  } else {
    continueBtn.classList.remove("hidden"); // ONLY after typing ends
  }
}

typing();
}

/* FLOATING HEARTS */

function startHearts(){

if(heartInterval) return;

const hearts = ["💖","💗","💘","💞","🩷","🤍","❤️‍🔥"];

heartInterval = setInterval(()=>{

  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];
  heart.style.left = Math.random()*100 + "vw";

  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),6000);

},500);

}

});
