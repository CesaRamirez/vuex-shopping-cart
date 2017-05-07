import './bootstrap';
import Vue from 'vue';

window.Vue = Vue;

Vue.use(Vuex);

const app = new Vue({
    el: '#app'
});
