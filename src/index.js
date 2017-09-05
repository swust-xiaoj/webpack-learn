import './index.css';
// import Icon from './123.png';
import printMe from './print.js';
import _ from 'lodash';
import { cube } from './math.js';

function component() {
    var ele = document.createElement('div');
    // ele.innerHTML = _.join(['hello', 'webpack'])
    ele.innerHTML = 'hello webpack cube(5) is' + cube(5);
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