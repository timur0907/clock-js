// DOM - Document Object Model
// document - это объект который возвращает HTML документ

// console.dir(document);

// .querySelector() - возвращает первый элемент в документе, который соответствует укзанному селектору. Если нету совпадений возвращает null

// console.dir(document.querySelector('.s'));


const sec = document.querySelector('.s'), /* Секундная стрелка */
      min = document.querySelector('.m'), /* Минутная стрелка */
      hour = document.querySelector('.h'), /* Часовая стрелка */
      hours = document.querySelector('.hours'), /* Цифровые часы (час) */
      minutes = document.querySelector('.minutes'); /* Цировые часы (минуты) */
      
function clock() {
    let time = new Date(),
        seconds = time.getSeconds() * 6,
        minute = time.getMinutes() * 6,
        watch = time.getHours() * 30;
        
        sec.style.transform = `rotate(${seconds}deg)`;
        min.style.transform = `rotate(${minute}deg)`;
        hour.style.transform = `rotate(${watch}deg)`;

        let h = time.getHours(),
            m = time.getMinutes();
            hours.innerHTML = h < 10 ? '0' + h : h;
            minutes.innerHTML = m < 10 ? '0' + m : m;
        
        
        setTimeout(()=> clock(), 10);
        
        // console.log(hours.innerHTML = 'Victor');
    // console.log(sec.style);
    // console.log(watch, minute, seconds);
    
}
clock();




// рекурсия - это когда функция вызывает саму себя

// function recurs (i = 0) {
//     if(i < 100) {
//         i++;
//         console.log(i);
//         recurs(i)
//     }
// }
// recurs();


// -----------------------Табы------------------
const links = document.querySelectorAll('.tabsItem'),
      tabs = document.querySelectorAll('.tabsContentItem'); 
    //   console.log(links);
for(let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        for(let x = 0; x < links.length; x++) {
            links[x].classList.remove('active');
            tabs[x].classList.remove('active');
        }
        tab(this, tabs[i]);
    })
}

function tab(linkItem, tabItem) {
    linkItem.classList.add('active');
    tabItem.classList.add('active');
}
// ---------------------Секундомер-------------------
let indicator = document.querySelector('.tabsLink__span'),
    stopHours = document.querySelector('.stopwatch__hours'),
    stopMinutes = document.querySelector('.stopwatch__minutes'),
    stopSeconds = document.querySelector('.stopwatch__seconds'),
    stopMlSeconds = document.querySelector('.stopwatch__ml-seconds'),
    stopBtn = document.querySelector('.stopwatch__btn'),
    interval;
    
stopBtn.addEventListener('click', function(){
    indicator.classList.remove('active');
    indicator.classList.remove('active_clear');
    
    if(this.innerHTML == 'start') {
        this.innerHTML = 'stop';
        stopWatch();
        indicator.classList.add('active');
    }
    else if(this.innerHTML == 'stop') {
        this.innerHTML = 'clear';
        clearTimeout(interval);
        indicator.classList.add('active_clear');
    }
    else if(this.innerHTML == 'clear') {
        this.innerHTML = 'start';
        stopHours.innerHTML = 0;
        stopMinutes.innerHTML = 0;
        stopSeconds.innerHTML = 0;
        stopMlSeconds.innerHTML = 0;
    }
})


function stopWatch() {
    if(stopMlSeconds.innerHTML < 10) {
        stopMlSeconds.innerHTML++;
    }
    if(stopMlSeconds.innerHTML == 10) {
        stopMlSeconds.innerHTML = 0;
        stopSeconds.innerHTML++;
    }
    if(stopSeconds.innerHTML == 60) {
        stopSeconds.innerHTML = 0;
        stopMinutes.innerHTML++;
    }
    if(stopMinutes.innerHTML == 60) {
        stopMinutes.innerHTML = 0;
        stopHours.innerHTML++;
    }
    interval = setTimeout(stopWatch, 100);
}







let fn = (x, y)  => {
    y += 4;
    x += 3;  
    return x * y;  
}
console.log(fn(2, 3));