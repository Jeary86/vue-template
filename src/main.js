import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './css/main.less'
import './components/loadComponent.js'
import ShareStore from "./store/ShareStore";
import WechatShare from './util/WechatShare';

Vue.config.productionTip = false;

if ( process.env.NODE_ENV === 'production') {
    new WechatShare(ShareStore.state.cn);
}

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
