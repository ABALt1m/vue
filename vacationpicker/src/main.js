import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    createApp
} from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const test = document.querySelector('.test');
if (test) {
    test.style.background = "grey";
} else {
    test.style.background = "green";
}