import './index.css'
import { rerenderAllTree } from './render.jsx';
import state from './redux/state.js';



rerenderAllTree(state);