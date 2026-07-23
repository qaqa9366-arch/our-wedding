const pages=[...document.querySelectorAll(".page")];
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.28});
pages.forEach(page=>observer.observe(page));

const notice=document.getElementById("copyNotice");
document.querySelectorAll("[data-copy]").forEach(button=>{
  button.addEventListener("click",async()=>{
    const value=button.dataset.copy;
    try{
      await navigator.clipboard.writeText(value);
    }catch{
      const textarea=document.createElement("textarea");
      textarea.value=value;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    notice.textContent="계좌번호가 복사되었습니다.";
    setTimeout(()=>notice.textContent="",1600);
  });
});

const soundBtn=document.getElementById("soundBtn");
const bgm=document.getElementById("bgm");
bgm.volume=.32;

let userPausedMusic=false;

async function startMusic(){
  if(userPausedMusic || !bgm.paused) return;
  try{
    await bgm.play();
    soundBtn.classList.add("playing");
  }catch{
    soundBtn.classList.remove("playing");
  }
}

// 브라우저가 허용하는 경우에는 페이지 로드 직후 바로 재생합니다.
window.addEventListener("load",startMusic,{once:true});

// 소리 있는 자동재생이 차단된 모바일 브라우저에서는
// 방문자의 첫 터치·클릭·키 입력과 동시에 자연스럽게 음악을 시작합니다.
["pointerdown","touchstart","keydown"].forEach(eventName=>{
  document.addEventListener(eventName,startMusic,{once:true,passive:true});
});

soundBtn.addEventListener("click",async event=>{
  event.stopPropagation();
  try{
    if(bgm.paused){
      userPausedMusic=false;
      await bgm.play();
      soundBtn.classList.add("playing");
    }else{
      userPausedMusic=true;
      bgm.pause();
      soundBtn.classList.remove("playing");
    }
  }catch{
    soundBtn.classList.remove("playing");
  }
});
