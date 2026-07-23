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
soundBtn.addEventListener("click",async()=>{
  try{
    if(bgm.paused){
      await bgm.play();
      soundBtn.classList.add("playing");
    }else{
      bgm.pause();
      soundBtn.classList.remove("playing");
    }
  }catch{
    soundBtn.classList.remove("playing");
  }
});
