let scrollContainer=document.querySelector(".gallery");
let backBtn=document.getElementById("backBtn");
let nextBtn=document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft+=evt.deltaY;
    scrollContainer.style.scrollBehavior="auto";
});
nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft+=900;
})
backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft-=900;
})

let autoScroll;

scrollContainer.addEventListener("mouseover", () => {
    autoScroll = setInterval(() => {
        scrollContainer.scrollLeft += 3; // Increase increment for faster scrolling
    }, 10); // Lower interval time for smoother scrolling
});

scrollContainer.addEventListener("mouseout", () => {
    clearInterval(autoScroll); // Stop auto-scrolling when the cursor leaves the gallery
});
