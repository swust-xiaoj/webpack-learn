import './index.css';
// import Icon from './123.png';
import printMe from './print.js';

function component() {
    var ele = document.createElement('div');
    ele.innerHTML = 'hello webpack';
    ele.classList.add('hello');

    var btn = document.createElement('button');
    btn.innerHTML = 'click me';
    btn.onclick = printMe;

    ele.appendChild(btn);

    // var myIcon = new Image();
    // myIcon.src = Icon;
    // ele.appendChild(myIcon);

    return ele;
}

document.body.appendChild(component());