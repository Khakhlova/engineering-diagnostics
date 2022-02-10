const slideService = document.getElementById("serviceList");
const progressBar = document.getElementById("scrollBar");

function scrollProgress() {
    const elemScroll = slideService.scrollLeft;
    const elemWidth = slideService.scrollWidth - slideService.clientWidth;
    const scrolled = (elemScroll / elemWidth) * 100;
    progressBar.style.width = scrolled + '%';
}


slideService.addEventListener('scroll', scrollProgress);

slideService.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    slideService.scrollLeft += evt.deltaY;
})



    