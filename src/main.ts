import './assets/main.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);

app.use(router);

app.mixin({
  computed: {
    username(this: any) {
      // We will see what params is shortly
      return this.$route.params.username;
    },
  },
  methods: {
    goBack(this: any) {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
  },
});

app.mount('#app');