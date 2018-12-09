import _ from 'lodash';
import printMe from './print.js';
import './styles.css';

function component() {
  let element = document.createElement('div');
  let button = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  button.innerHTML = "print";
  button.onclick = printMe;

  element.appendChild(button);
  
  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // Re-render "component" to update the click handlers
    document.body.appendChild(element);
   })
 }
