document.querySelector("sector.carousel >footer")
.addEventListener("click",(event)=>{
    const hash=event.target.getattribute ("href");
    const slide=document.querySelector(hash);
    if(!slide);
    if(slide.scrollIntoViewIfNeeded){
        event.preventDefault();
        slide.scrollIntoViewIfNeeded();
        history.replaceState(undefined,undefined,hash);
    }
    else if (slide.scrollIntoView){
        event.preventDefault();
        slide.scrollIntoView({block:"end, inline:"nearest"});
    }
})