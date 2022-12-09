let summary = 0; //изначальная позиция (меняется по 100)
let numbers = document.getElementsByClassName('slide');
let amount = numbers.length; //кол-во слайдов (так же надо изменить щирину слайдера(bronAnim) в стилях)
let slideBox = document.querySelector('.bronAnim');
let visibleAmount = 1;//кол-во отображаемых слайдов;
let visible = 100/visibleAmount; //ширина видимых слайдов
let slide = document.querySelector('.slide');
slide.style.width = visible;


slideBox.style.width = amount*visible + '%';
function plus() {
    summary -= visible;
    if(summary < -((amount*visible)-100)){
        summary = 0;
    }
    slider = document.querySelector('.bronAnim')
    slider.style.left =  summary + '%';
}

function minus() {
    summary += visible;
    if(summary >= visible){
        summary = -((amount*visible)-100);
    }
    slider = document.querySelector('.bronAnim')
    slider.style.left = summary + '%';
}


function AutoSlider() {
    let timerId = 1;
    document.getElementById('auto').classList.toggle('checked');
    let radio = document.getElementById('autoRadio')
    if (radio.checked) {
        console.log(1);
        radio.setAttribute("checked", "checked")
        timerId = setInterval(() => plus(), 8000);
    }
    else {
        clearInterval(timerId);
        console.log(2);
        radio.removeAttribute("checked")
    }
}
