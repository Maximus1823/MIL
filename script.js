const cards = {
  about: {
    title: "a little about me ♡",
    html: `
      <p class="lead">Hi! I'm Alex, a grade 12 student from Pasay City National Science High School. This is just a small place where i can put the things that feel like me.</p>
      <p>I like making things, whether that's drawing, building a small project, or messing around with things.</p>
      <div class="card-grid">
        <div class="mini-card"><h3>Birthdate:</h3><p>february 10, 2009</p></div>
        <div class="mini-card"><h3></h3><p></p></div>
        <div class="mini-card"><h3>hobbies</h3><p>I like sleeping</p></div>
        <div class="mini-card"><h3>I LOVE MONEY</h3><p>Especially Blue Bills</p></div>
      </div>`
  },
  favorites: {
    title: "Things i like ✿",
    html: `
      <p class="lead">a very serious collection of very unserious favorites.</p>
      <div>
        <span class="sticker">Mobile Legends</span><span class="sticker">Pokémon Champions</span><span class="sticker">Transformers</span><span class="sticker">Roblox</span>
        <span class="sticker">carbonara</span><span class="sticker">Monster Hunter</span><span class="sticker">Money</span><span class="sticker">The Lord of Mysteries</span>
        <span class="sticker">green</span><span class="sticker">Attack on Titan</span><span class="sticker">Cyberpunk: Edgerunners</span>
      </div>
      <p>i also read webtoons/manhwa like <b>Omniscient Reader's Viewpoint</b>, <b>Villain to Kill</b>, <b>The Legend of Song</b>, and <b>The Knight Only Lives Today</b>.</p>`
  },
  art: {
    title: "My art corner ✎",
    html: `
      <p class="lead">i like painting and drawing because sometimes it's easier to express a feeling with an image than with words.</p>
      <div class="card-grid">
        <div class="mini-card"><h3>drawing</h3><p>characters, random ideas, and whatever i feel like sketching.</p></div>
        <div class="mini-card"><h3>design</h3><p>i enjoy making interfaces that feel simple and nice to look at.</p></div>
      </div>
      <p>I'm mainly a <b>Traditional Artist</b>. </p>`
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
        Unity / Blender<br>
        <br>
      </div>`
  },
  quote: {
    title: "My Socials♡",
    html: `
      <div class="big-note">The 3 social media apps that I currently use are:</div>
      <div class="social-list">
      <button class="social-btn" onclick="showSocial('instagram')">
      📷 Instagram →
      </button>
      
      <button class="social-btn" onclick="showSocial('tiktok')">
      <span>♪</span>
      <span>TikTok</span>
      <span>↗</span>
      </button>
      
      <button class="social-btn" onclick="showSocial('facebook')">
      <span>☁</span>
      <span>Facebook</span>
      <span>↗</span>
      </button>

      </div>

      <div id="socialDetails" class="social-details">
      <p>pick one!♡</p>
      </div>
      `
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

const backdrop = document.getElementById("backdrop");
const socialInfo = {
  instagram: {
    title: "My Instagram 📷",
    text: "My identity on Instagram is basically a doomscroller and a reposter. I usually spend my time scrolling through my feed, watching reels, and looking at different posts. Most of the time, I use Instagram for entertainment and to keep myself updated with things that interest me. The content I share is usually anything funny or relatable that matches my mood. As for posting, I do not post very often, and when I do, I mostly share pictures.",
    username: "@maxl.musl",
    link:"https://www.instagram.com/maxl.musl?dlrf=YW8yNTRqeTR6cWgy"
  },
  tiktok: {
    title: "TikTok ♪",
    description: "My identity on TikTok is pretty much the same as on Instagram, but I spend more time doomscrolling. I usually spend hours scrolling through my For You Page, watching random videos, and entertaining myself with the content that appears on my feed. I share almost anything as long as it makes me laugh or catches my interest. I do not usually post videos or share posts publicly, but I have countless drafts of myself doing TikTok dances that I have never posted",
    username: "@maximus.1823",
    link: "https://www.tiktok.com/@maximus.1823?_r=1&_t=ZS-9B8ZRPXwvNo"
  },
  facebook: {
    title: "Facebook ☁",
    description: "My identity on Facebook is not that active since I do not use the app very often. When I do use it, I mostly use it to stay updated on important announcements and news, such as updates from Pasay PIO and Kolehiyo. I usually scroll through my feed to check for information that might be useful or relevant to me. I do not really share posts or publish anything on Facebook because I mainly use it as a source of information and updates.",
    username: "Alexander Rogado",
    link: "https://www.facebook.com/share/1EAGxjRDwi/"
  }
};

function showSocial(platform) {
  const social = socialInfo[platform];
  const details = document.getElementById("socialDetails");

  details.innerHTML = `
    <h3>${social.title}</h3>
    <p>${social.description}</p>
    <p class="social-username">${social.username}</p>
    <a href="${social.link}" target="_blank"
       rel="noopener noreferrer" class="contact-button">
       visit my ${platform} →
    </a>
  `;

  clickSound();
}
