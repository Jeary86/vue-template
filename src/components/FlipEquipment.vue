<template>
    <div class="flip-equipment" v-if="isFile">
        <div id="fullscreen_tips">
            <div class="mod-orient-layer">
                <i class="mod-orient-layer_icon"></i>
                <div class="mod-orient-layer_desc">为了更好的体验，请使用竖屏浏览</div>
            </div>
        </div>
    </div>
</template>

<script>
    import BrowserUtil from '../util/BrowserUtil'
    export default {
        name: "FlipEquipment",
        data(){
          return{
              isFile : false
          }
        },
        mounted(){
            this.loaderComplete()
        },
        methods : {
            loaderComplete(){
                let t = this;

                // document.body.addEventListener('touchmove', function (e) {
                //     e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
                // }, {passive: false}); //passive 参数不能省略，用来兼容ios和android

                // ===== 判断客户端

                t.isEquipment()

                // ===== 判断是否转屏
                t.flipEquipment();

                window.addEventListener('orientationchange', function(e){
                    t.flipEquipment();
                });
                // ===== 判断是否转屏
            },
            isEquipment(){
                let t = this;

                const isMobile = BrowserUtil.isMobile();

                if(isMobile){
                    t.isFile = false;
                    this.$emit('screen', true);
                    console.log(isMobile + ":移动端");
                }else{
                    t.isFile = true;
                    this.$emit('screen', false);
                    console.log(isMobile + ":网页端");
                }
            },
            flipEquipment(){
                let t = this;
                if (window.orientation == 0 || window.orientation == 180) {
                    let orientation = 'portrait';
                    t.isFile = false;
                    console.log(orientation)
                    return false;
                }else if (window.orientation == 90 || window.orientation == -90) {
                    let orientation = 'landscape';
                    t.isFile = true;
                    console.log(orientation)
                    return false;
                }
            }
        }
    }
</script>

<style scoped>

</style>