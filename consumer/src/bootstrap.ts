import { loadRemote } from '@module-federation/enhanced/runtime';
import './index.css';

const remote = loadRemote('federation_provider/add');

remote.then((module) => module.add)
  .then((add) => add(10, 20));

document.querySelector('#root')!.innerHTML = `
<div class="content">
  <h1>Hello from consumer</h1>
</div>
`;
