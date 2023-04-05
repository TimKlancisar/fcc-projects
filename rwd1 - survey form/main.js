const details = document.querySelectorAll('.player-details');
const circles = document.querySelectorAll('.circle');
const progressLeft = document.getElementById('progressLeft');
const progressRight = document.getElementById('progressRight');
const price = document.getElementById('price');
const date = document.getElementById('date');

const update = (radio) => {
    switch(radio) {
        case 0:
            circles.forEach((circle, i) => i === 2 ? circle.classList.remove('active-circle') : circle.classList.add('active-circle'));
            progressLeft.style.width = "45%";
            progressRight.style.width = 0;
            price.innerText = '€80';
            date.innerText = '29.7.2023 - 6.8.2022';
        break;
        case 1:
            circles.forEach((circle, i) => i === radio ? circle.classList.add('active-circle') : circle.classList.remove('active-circle'));
            progressLeft.style.width = 0;
            progressRight.style.width = 0;
            price.innerText = '€30';
            date.innerText = '5.8.2023 - 6.8.2022';
        break;
        case 2:
            circles.forEach((circle, i) => i === 0 ? circle.classList.remove('active-circle') : circle.classList.add('active-circle'));
            progressLeft.style.width = 0;
            progressRight.style.width = "45%";
            price.innerText = '€80';
            date.innerText = '5.8.2023 - 13.8.2022';
        break;
        default:
            circles.forEach((circle) => circle.classList.add('active-circle'));
            progressLeft.style.width = '45%';
            progressRight.style.width = '45%';
            price.innerText = '€120';
            date.innerText = '29.7.2023 - 13.8.2022';
    }
}
const disableDetails = (nonPlayer) => {
    console.log(details)
    details.forEach((detail) => detail.disabled = nonPlayer)
}