const hourAll = document.querySelector(".hour");
const minuteAll = document.querySelector(".minute");
const secondAll = document.querySelector(".second");
const timeAll = document.querySelector(".time");
const dateAll = document.querySelector(".date");
const button = document.querySelector(".mode");

const days = [ "Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" ];

const months = [ "Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec" ];


button.addEventListener("click" , (e) => {
    const html = document.querySelector("html");

    if(html.classList.contains("dark"))
    {
        html.classList.remove("dark")
        e.target.innerHTML = " Dark Mode ";
    }

    else
    {
        html.classList.add("dark");
        e.target.innerHTML = " Light Mode ";
    }
})

function setTime() {

    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    hourAll.style.transform = ` translate(-50% , -100%) rotate(${scale(hoursForClock ,0 , 12 , 0 , 360)}deg)`;

    minuteAll.style.transform = `translate(-50% , -100%) rotate(${scale(minutes ,0 , 60 ,0 , 360)}deg)`;

    secondAll.style.transform = `translate(-50% , -100%) rotate(${scale(seconds ,0 , 60 ,0 , 360)}deg)`;

    timeAll.innerHTML = `${hoursForClock} : ${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;

    dateAll.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
  
  setTime();
  
  setInterval(setTime, 1000);