  const btn = document.getElementById("btn1");

  btn.addEventListener("click", ()=>{
    window.location.href = "https://zomi.finance/#/trade";
  })


  const btnn = document.getElementById("btn4");
  btnn.addEventListener("click", ()=>{
    window.location.href = "https://zomi.finance/#/trade";
  })

  const twitter = document.getElementById("twitter");

  twitter.addEventListener("click", () => {
    window.location.href = "https://twitter.com/zomi.finance";
  })

  const medium = document.getElementById("medium");

  medium.addEventListener("click", () => {
    window.location.href = "https://zomifinance.medium.com/";
  })

  const github = document.getElementById("github");

  github.addEventListener("click", () => {
    window.location.href = "https://github.com/zomi";
  })

  const telegram = document.getElementById("telegram");

  telegram.addEventListener("click", () => {
    window.location.href = "https://t.me/zomichat";
  })

  const discord = document.getElementById("discord");

  discord.addEventListener("click", () => {
    window.location.href = "https://discord.com/invite/senshilabs";
  })


  
var modal = document.getElementById("modal");
var btns = document.getElementById("btn2");


var closeBtn = document.getElementsByClassName("close")[0];


btns.onclick = function() {
    modal.style.display = "block";
};


closeBtn.onclick = function() {
    modal.style.display = "none";
};


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};



  