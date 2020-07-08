import { h, app } from 'hyperapp';
import hyperx from 'hyperx';
import './index.css'
const html = hyperx(h);

const state = {
    count: 0
}

const Inc = state => ({ ...state, count: state.count + 1});
const Dec = state => ({ ...state, count: state.count - 1});

const view = state => html`<div>
    <div class="foo">no u ${state.count}</div>
    <button onClick=${Inc}> + </button>
    <button onClick=${Dec}> - </button>
</div>`;

app({
    init: state,
    view: view,
    node: document.getElementById("app"),
});
