// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/LandingPage.vue';
import Products from './components/Products.vue'; // Example component for Products
import Orders from './components/Orders.vue'; // Example component for Orders
import Customers from './components/Customers.vue'; // Example component for Customers

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/ecommerce/products', component: Products },
  { path: '/ecommerce/orders', component: Orders },
  { path: '/ecommerce/customers', component: Customers }
  // Add more routes as needed
];

const router = new VueRouter({
  routes,
  mode: 'history' // Use HTML5 History API for clean URLs (optional)
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
