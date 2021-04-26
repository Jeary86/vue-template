import Vue from 'vue'

import LoadingComponent from './loading.vue'

let showLoading = false // 存储loading显示状态
let loadingNode = null // 存储loading节点元素
const LoadingConstructor = Vue.extend(LoadingComponent)


const Loading = {
    install: function(Vue){
        Vue.prototype.$vloading = function (tips,type, method) {
            if (method === 'hide') {
                loadingNode.isShow = showLoading = false

                this.$nextTick(function(){
                    document.body.removeChild(loadingNode.$el)
                    loadingNode.$destroy()
                })


            } else {

                if (showLoading) {
                    return
                }

                loadingNode = new LoadingConstructor({
                    propsData: {
                        isShow: showLoading,
                        message: tips,
                        type: type
                    }
                })

                loadingNode.$mount()
                document.body.appendChild(loadingNode.$el)
                loadingNode.isShow = showLoading = true
            }
        };

        ['show', 'hide'].forEach(function (method) {
            Vue.prototype.$vloading[method] = function (tips, type) {
                return Vue.prototype.$vloading(tips, type,method)
            }
        })
    }
}
export default Loading
