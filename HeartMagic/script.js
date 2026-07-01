const heart = document.getElementById("heart");
const tapBtn = document.getElementById("tapBtn");

const statusText = document.getElementById("status");

const magicCard = document.getElementById("magicCard");
const magicMessage = document.getElementById("magicMessage");

const againBtn = document.getElementById("againBtn");
const shareBtn = document.getElementById("shareBtn");
const crushBtn = document.getElementById("crushBtn");

// Replace with your own destination URL
const DESTINATION_URL = "https://www.effectivecpmnetwork.com/xjdztq0h?key=496d4e5897cf74343299a6ccfb1e8512";

let taps = 0;

const messages = [
`🌹 <strong>Someone is thinking about you...</strong><br><br>
Maybe they're much closer than you realize.<br><br>
❤️ Ready to continue?`,

`💌 <strong>A hidden admirer may have noticed you.</strong><br><br>
Do you want to discover more?`,

`✨ <strong>Your heart has attracted someone's attention.</strong><br><br>
Continue if you're curious...`
];

function pulseHeart(){

    heart.animate([
        {transform:"scale(1)"},
        {transform:"scale(1.18)"},
        {transform:"scale(0.95)"},
        {transform:"scale(1)"}
    ],{
        duration:350
    });

}

function floatingHeart(){

    const h=document.createElement("div");

    h.innerHTML="❤️";

    h.style.position="fixed";
    h.style.left=Math.random()*window.innerWidth+"px";
    h.style.top=(window.innerHeight+20)+"px";
    h.style.fontSize=(18+Math.random()*20)+"px";
    h.style.pointerEvents="none";
    h.style.zIndex="9999";
    h.style.transition="all 3.5s linear";
    h.style.opacity="1";

    document.body.appendChild(h);

    requestAnimationFrame(()=>{

        h.style.transform=`translateY(-${window.innerHeight+200}px) rotate(${Math.random()*360}deg)`;

        h.style.opacity="0";

    });

    setTimeout(()=>{

        h.remove();

    },3500);

}

function celebrate(){

    for(let i=0;i<25;i++){

        setTimeout(floatingHeart,i*50);

    }

}

function reveal(){

    taps++;

    pulseHeart();

    if(navigator.vibrate){

        navigator.vibrate(70);

    }

    if(taps===1){

        statusText.innerHTML="✨ Keep touching...";

    }

    else if(taps===2){

        statusText.innerHTML="💖 Almost there...";

    }

    else{

       celebrate();

// Open Adsterra Direct Link
window.open(
    "https://www.effectivecpmnetwork.com/czt9j0my?key=a8d401f17c68cf0b3789e88d9b2524f1",
    "_blank",
    "noopener,noreferrer"
);

statusText.innerHTML = "⏳ Preparing your magic...";

tapBtn.style.display = "none";

let time = 5;

const countdown = setInterval(() => {

    statusText.innerHTML = `⏳ Preparing your magic... ${time}`;

    time--;

    if (time < 0) {

        clearInterval(countdown);

        statusText.innerHTML = "🎉 Magic Unlocked";

        magicMessage.innerHTML =
            messages[Math.floor(Math.random() * messages.length)];

        magicCard.style.display = "block";

        taps = 0;

    }

}, 1000);

heart.addEventListener("click",reveal);

tapBtn.addEventListener("click",reveal);

againBtn.addEventListener("click",()=>{

    magicCard.style.display="none";

    tapBtn.style.display="block";

    statusText.innerHTML="Waiting for your touch...";

});

shareBtn.addEventListener("click",()=>{

    if(navigator.share){

        navigator.share({

            title:"Someone Is Thinking About You ❤️",

            text:"Touch the heart and unlock the magic ❤️",

            url:window.location.href

        });

    }else{

        navigator.clipboard.writeText(window.location.href);

        alert("Link copied ❤️");

    }

});

crushBtn.addEventListener("click",()=>{

    window.open(

        DESTINATION_URL,

        "_blank",

        "noopener,noreferrer"

    );

});
