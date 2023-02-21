import { createApp } from 'vue'
import App from './App.vue'
import styles from "@/assets/styles.css"
import VScrollEffect from '@/directives/VScrollEffect';

const app = createApp(App)

app.directive('scrolleffect',VScrollEffect);
app.mount('#app')
