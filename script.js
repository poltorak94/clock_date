(function () {

    const hour = document.querySelector('#clock-hour');
    const minute = document.querySelector('#clock-minute');
    const second = document.querySelector('#clock-second');

    function clock() {

        let now = new Date();

        let h = now.getHours();
        let d = now.getDay()
        let m = now.getMinutes();
        let s = now.getSeconds();
        let ms = now.getMilliseconds();

        second.style.transform = `rotate(${s * 6 + ms * .006}deg)`;
        minute.style.transform = `rotate(${m * 6 + s * .1}deg)`;
        hour.style.transform = `rotate(${h * 30 + m * .5}deg)`;

        setTimeout(clock, 20);
    }

    clock();

    let date = new Date();
    let day = date.getDate();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[new Date().getMonth()];
    if (day < 10) {
        day = '0' + day;
    };
    console.log(day)

    document.getElementsByClassName('clock-day')[0].innerText = day;
    document.getElementsByClassName('clock-month')[0].innerText = month;


})();
