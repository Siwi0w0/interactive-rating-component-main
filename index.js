const mainBox = document.querySelector(".mainbox");
const thankYou = document.querySelector(".thank-you");
const sbmtBtn = document.getElementById("submit-btn");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".rtng-btn");

sbmtBtn.addEventListener("click", function () {
    if (rating.innerText === ''){
        
    } else {
        thankYou.classList.remove("hide");
        mainBox.classList.add("hide");
    }
        
    });

rates.forEach(function (rate) {
    rate.addEventListener("click", () => 
    rating.innerHTML = rate.innerHTML);
});

