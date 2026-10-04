const cards = {
  about: {
    title: "a little about me ♡",
    html: `
      <p class="lead">hi! i'm alex, a grade 12 student from Pasay City National Science High School. this is just a small place where i can put the things that feel like me.</p>
      <p>i like making things, whether that's drawing something random, building a small project, writing a poem, or messing around with code until it works.</p>
      <div class="card-grid">
        <div class="mini-card"><h3>born</h3><p>february 10, 2009</p></div>
        <div class="mini-card"><h3>favorite day</h3><p>saturday, because no school ♡</p></div>
        <div class="mini-card"><h3>hobbies</h3><p>badminton, dancing, drawing</p></div>
        <div class="mini-card"><h3>I LOVE MONEY</h3><p>Especially Blue Bills</p></div>
      </div>`
  },
  favorites: {
    title: "things i like ✿",
    html: `
      <p class="lead">a very serious collection of very unserious favorites.</p>
      <div>
        <span class="sticker">Mobile Legends</span><span class="sticker">Pokémon Champions</span><span class="sticker">Wildrift</span><span class="sticker">Roblox</span>
        <span class="sticker">carbonara</span><span class="sticker">pork sinigang</span><span class="sticker">siomai</span><span class="sticker">egg + tomato</span>
        <span class="sticker">green</span><span class="sticker">Attack on Titan</span><span class="sticker">Cyberpunk: Edgerunners</span>
      </div>
      <p>i also read webtoons/manhwa like <b>Omniscient Reader's Viewpoint</b>, <b>Villain to Kill</b>, <b>The Legend of Song</b>, and <b>The Knight Only Lives Today</b>.</p>`
  },
  art: {
    title: "my art corner ✎",
    html: `
      <p class="lead">i like painting and drawing because sometimes it's easier to express a feeling with an image than with words.</p>
      <div class="card-grid">
        <div class="mini-card"><h3>drawing</h3><p>characters, random ideas, and whatever i feel like sketching.</p></div>
        <div class="mini-card"><h3>design</h3><p>i enjoy making interfaces that feel simple and nice to look at.</p></div>
      </div>
      <p>my main art tool is <b>Clip Studio Paint</b>. i also use Figma when i want to play around with layouts.</p>`
  },
  code: {
    title: "my little toolbox &lt;/&gt;",
    html: `
      <p class="lead">the things i use when i'm making something.</p>
      <div class="code-paper">
        C<br>
        Python<br>
        HTML / CSS / JavaScript<br>
        GitHub / Gatsby<br>
        Figma<br>
        Unity / Blender<br>
        <br>
        // still learning, still breaking things, still fixing them.
      </div>`
  },
  quote: {
    title: "a thought i keep ♡",
    html: `
      <div class="big-note">“Chasing perfection is useless. The more you strive for perfection, the more you stray away from it. I just want to make it all worth it.”</div>
      <p class="lead">i'm currently improving myself, one small thing at a time.</p>`
  },
  contact: {
    title: "say hi ✉",
    html: `
      <p class="lead">if you somehow ended up here, thanks for visiting my little desktop.</p>
      <p>THANKSIES</p>
      <a class="contact-button" href="mailto:rogadoalexander@gmail.com">send me a little message →</a>`
  }
};

const backdrop = document.getElementById("backdrop");
const cardContent = document.getElementById("cardContent");
const cardDate = document.getElementById("cardDate");
const closeBtn = document.getElementById("closeBtn");
const soundBtn = document.getElementById("soundBtn");
let soundOn = true;
let audio;

function clickSound(){
  if(!soundOn) return;
  audio ||= new (window.AudioContext || window.webkitAudioContext)();
  const osc = audio.createOscillator();
  const gain = audio.createGain();
  osc.frequency.value = 520;
  gain.gain.setValueAtTime(.035, audio.currentTime);
  gain.gain.exponentialRampToValueAtTime(.001, audio.currentTime + .12);
  osc.connect(gain).connect(audio.destination);
  osc.start();
  osc.stop(audio.currentTime + .12);
}
function openCard(key){
  const card = cards[key];
  cardContent.innerHTML = `<h2>${card.title}</h2>${card.html}`;
  cardDate.textContent = new Date().toLocaleDateString("en-PH",{month:"short",day:"numeric",year:"numeric"});
  backdrop.hidden = false;
  document.body.style.overflow = "hidden";
  clickSound();
}
function closeCard(){
  backdrop.hidden = true;
  document.body.style.overflow = "";
}
document.querySelectorAll(".desktop-icon").forEach(btn => {
  btn.addEventListener("click",()=>openCard(btn.dataset.card));
});
closeBtn.addEventListener("click",closeCard);
backdrop.addEventListener("click",e=>{if(e.target===backdrop)closeCard()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeCard()});

soundBtn.addEventListener("click",()=>{
  soundOn=!soundOn;
  soundBtn.textContent=`sound: ${soundOn?"on":"off"}`;
  if(soundOn) clickSound();
});

document.getElementById("themeBtn").addEventListener("click",()=>{
  document.body.classList.toggle("night");
  clickSound();
});

function updateClock(){
  document.getElementById("clock").textContent = new Date().toLocaleTimeString("en-PH",{hour:"numeric",minute:"2-digit"});
}
updateClock(); setInterval(updateClock,30000);
