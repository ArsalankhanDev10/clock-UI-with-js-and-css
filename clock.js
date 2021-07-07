var state = false;

function toggle() {
    var body = document.getElementById("body");
    var clock = document.getElementById("clock");
    var mode = document.getElementById("bt");
    var center = document.getElementById("center");
    var second = document.getElementById("second");
    var text = document.getElementById("text");

    if (state) {
        body.style.backgroundColor = "#c1c1c4";
        clock.className = "clock1";
        mode.innerText = "Dark Mode";
        mode.style.background = "#111";
        mode.style.color = "#eee";
        center.style.background = "#363436";
        second.style.background = "#363436";
        state = false;
    } else {
        body.style.backgroundColor = "#1c1f1c";
        clock.className = "clock2";
        mode.innerText = "Ligt Mode";
        mode.style.background = "#eee";
        mode.style.color = "#111";
        center.style.background = "#cbc";
        second.style.background = "#cbc";
        text.style.color = "	#FFD700";

        state = true;
    }
}

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);