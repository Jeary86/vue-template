<template>
    <transition name="fade-scroll">
        <div class="scroll" v-show="isShow">
            <div class="scroll-box swiper-container">
                <div class="btn_close" @click="onClickBtnClose">
                    x
                </div>
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "scroll",
        props:{
            isShow : {
                type : Boolean,
                default : false
            },
            message: {
                type: String,
                default: ""
            },
        },
        data(){
            return{
                swiper : null
            }
        },
        watch : {
            isShow(val){
                let t = this
                if (val){
                    t.$nextTick(()=>{
                        t.swiper.init()
                    })

                }
            }
        },
        mounted(){

            let t = this

            t.$nextTick(()=>{

                 t.swiper = new Swiper('.swiper-container', {
                    // scrollbar: '.swiper-scrollbar',
                    direction: 'vertical',
                    slidesPerView: 'auto',
                    mousewheelControl: true,
                    freeMode: true,
                    roundLengths : true, //防止文字模糊
                });
            })

        },
        methods:{
            onClickBtnClose(){
                this.$emit('update:isShow',false)
            }
        }
    }
</script>

<style lang="less" scoped>

    .fade-scroll-enter-active, .fade-scroll-leave-active {
        transition: opacity 0.5s;
    }
    .fade-scroll-enter, .fade-scroll-leave-to {
        opacity: 0;
    }

    .swiper-slide {
        height: auto;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 50px 23px 50px 28px;
    }

    .scroll{
        width: 100%;height: 100%;position: fixed;background-color: rgba(0,0,0,0.5);z-index: 2021;top:0;
        .scroll-box{
            width: 621px;position: absolute;height: calc(100% - 100px);max-height: 1215px;
            left: 50%;margin-left: -(621px/2);margin-top: 50px;
            background-color: #FFFFFF;
        }

        .btn_close{
            width: 50px;position: fixed;z-index: 8;right: 70px;
        }
    }

</style>
