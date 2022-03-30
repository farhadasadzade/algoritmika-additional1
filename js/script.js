
const subnav = document.getElementById('subnav')

function subnavBtn() {
    if(subnav.style.display == 'none') {
        subnav.style.display = 'flex';
    }else {
        subnav.style.display = 'none';
    }
}

const info1 = document.getElementById('info1');
const info2 = document.getElementById('info2');

function infoOpen1() {
    info1.style.display = 'block';
    info2.style.display = 'none';
}

function infoOpen2() {
    info2.style.display = 'block';
    info1.style.display = 'none';
}

const intromobile = document.getElementById('intro-mobile')

function introOpen() {
    intromobile.style.display = 'block';
}

function introClose() {
    intromobile.style.display = 'none';
}