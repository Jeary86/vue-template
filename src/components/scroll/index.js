import Vue from 'vue'

import ScrollComponent  from './scroll'

const Scroll = {
    install: function(Vue){

        Vue.component('v-scroll',ScrollComponent)

    }
}

export default Scroll
