import lodash from 'lodash';
import axios from 'axios';
import Vuex from 'vuex';

window._ = lodash;
window.axios = axios;

window.axios.defaults.headers.common['X-CSRF-TOKEN'] = window.Laravel.csrfToken;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
