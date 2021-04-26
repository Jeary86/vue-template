<template>
    <transition name="fade-box">
        <div class="box_wrapper" v-if="isShow" @click="onClickColse">
            <div class="message-box" ref="message" :class="isActive ? 'show-alert' : 'hide-alert'">
                <div class="btn_close">
                   x
                </div>
                {{message}}
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "alert",
        props: {
            title: {
                type: String,
                default: ""
            },
            message: {
                type: String,
                default: ""
            },
            duration: {
                type: Number,
                default: 500 //默认1000毫秒消失
            }
        },
        data() {
            return {
                isShow: false, //是否显示标识
                isActive : true
            };
        },
        mounted(){

        },
        methods: {
            show() {
                this.isShow = true;
            },
            hide() {
                this.isShow = false;
                this.remove();//移除
            },
            onClickColse(){

                this.isActive = false

                this.$nextTick(()=>{
                    this.isShow = false;
                    setTimeout(this.hide, this.duration);
                })

            }
        }
    }
</script>

<style lang="less" scoped>

    .fade-box-enter-active, .fade-box-leave-active {
        transition: opacity 0.5s;
    }
    .fade-box-enter, .fade-box-leave-to {
        opacity: 0;
    }

    .box_wrapper{
        width: 100%;height: 100%;position: absolute;background-color: rgba(0,0,0,0.5);z-index: 2021;

        .message-box{
            width: 500px;left: 50%;margin-left: -(500px/2);
            top:50%;margin-top: -260px;
            background-color: #FFF;border-radius:10px;position: relative;
            padding: 60px 40px;text-align: center;
            /*word-wrap : break-word;*/
            word-break: break-all;

            .btn_close{
                width: 40px;position: absolute;right: 8px;top:8px;
            }

        }

        .show-alert{
            animation: show-alert 0.5s;
        }

        @keyframes show-alert{
            0%{transform: translate(0px,-20px);opacity: 0}
            100%{transform: translate(0px,0px);opacity: 1}
        }

        .hide-alert{
            animation: hide-alert 0.5s;
            transform: translate(0px,0px);opacity: 0
        }

        @keyframes hide-alert{
            0%{transform: translate(0px,0px);opacity: 1}
            100%{transform: translate(0px,-20px);opacity: 0}
        }

    }
</style>
