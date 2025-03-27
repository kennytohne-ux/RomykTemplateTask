const slider = document.querySelector('.slider');
const numbers = document.querySelectorAll('.numbers p');
let counter = 1;
const slides = document.querySelector('.slides');
const num = slider.querySelectorAll('.item');

function slide(){
    setInterval(() => {
        slider.style.transform = `translateX(-${counter * 100}%)`;
        counter++;
    
        if (counter >= num.length){
            counter = 0;
        }
        update();
    }, 3000);
}
numbers[0].style.color = '#fc95c4';
function update(){
    if(counter == 2){
        numbers[0].style.color = '#000';
        numbers[2].style.color = '#000';
        numbers[3].style.color = '#000';
        numbers[1].style.color = '#fc95c4';
    }
    else if(counter == 3){
        numbers[0].style.color = '#000';
        numbers[1].style.color = '#000';
        numbers[3].style.color = '#000';
        numbers[2].style.color = '#fc95c4';
    }
    else if(counter == 0){
        numbers[0].style.color = '#000';
        numbers[2].style.color = '#000';
        numbers[1].style.color = '#000';
        numbers[3].style.color = '#fc95c4';
    }
    else if(counter == 1) {
        numbers[1].style.color = '#000';
        numbers[2].style.color = '#000';
        numbers[3].style.color = '#000';
        numbers[0].style.color = '#fc95c4';
    }
}


slide();