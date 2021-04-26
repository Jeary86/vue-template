import Vue from 'vue'

import AlertComponent  from './alert'

const AlertConstructor = Vue.extend(AlertComponent)

const Alery = {
    install: function(Vue){

        Vue.prototype.$alert = function (props) {

            const comp = new AlertConstructor({ propsData: props })

            comp.$mount();

            document.body.appendChild(comp.$el);

            comp.remove = () => {
                document.body.removeChild(comp.$el)
                comp.$destroy()
            }

            return comp.show()
        };
    }
}

export default Alery
