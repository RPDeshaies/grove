import './style.css';

import { h, render } from 'https://unpkg.com/preact?module';
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

function App(props) {
  return html`
  
  <h1>Hello ${props.name}!</h1>
  
  <${Grove}/>
  `;
}

function Grove(props) {
  return html`
    <div class="container">
      <div></div>
      <div></div>
      <div></div>
    </div>
  `;
}

render(html`<${App} name="World" />`, document.querySelector('#root'));

function grovedata
