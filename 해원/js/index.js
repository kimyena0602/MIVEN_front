// document.addEventListener('DOMContentLoaded', function(){
//     const yearBox = document.getElementsByClassName("year-box");
//     yearBox.addEventListener('click', zoomIn);

//     function zoomIn(event){
//         yearBox.style.transform = "scale(1000)";
//         yearBox.style.zIndex = 1;
//         yearBox.style.transition = "all 0.5s";
//     };
// });

document.addEventListener('DOMContentLoaded', function() {
    const yearBoxes = document.getElementsByClassName("year-box");

    for (const yearBox of yearBoxes) {
        yearBox.addEventListener('click', zoomIn);
    }

    function zoomIn(event) {
        const clickedYearBox = event.currentTarget;
        clickedYearBox.style.transform = "scale(1000)";
        clickedYearBox.style.zIndex = 1;
        clickedYearBox.style.transition = "ease-in 15s";
    }
});
