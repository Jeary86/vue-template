<template>
    <transition name="fade-box">
        <div class="loading" v-if="isShow">
            <div class="loading-box">

                <div v-if="type === 'balls' " class="balls">
                    <svg x="0px" y="0px" viewBox="0 0 30 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                        <path transform="translate(-8 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12">
                          <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keyTimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"></animateTransform>
                        </path>
                        <path transform="translate(2 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12">
                          <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keyTimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"></animateTransform>
                        </path>
                        <path transform="translate(12 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12">
                          <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keyTimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"></animateTransform>
                        </path>
                        <path transform="translate(24 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12">
                          <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keyTimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"></animateTransform>
                        </path>
                    </svg>
                </div>

                <div v-if="type === 'bars' " class="bars">
                    <svg x="0px" y="0px" viewBox="0 0 30 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                        <rect x="0" y="13" width="4" height="5">
                          <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
                          <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
                        </rect>
                        <rect x="10" y="13" width="4" height="5">
                          <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
                          <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
                        </rect>
                        <rect x="20" y="13" width="4" height="5">
                          <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
                          <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
                        </rect>
                    </svg>
                </div>

                <div v-if="type === 'spin' " class="spin">
                    <svg x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                        <path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
                            <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform>
                        </path>
                    </svg>
                </div>

                <span class="loading-txt">{{message}}</span>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "loading",
        props:{
            isShow : {
                type : Boolean,
                default : false
            },
            message : {
                type: String,
                default: 'Loading加载中...'
            },
            type :{
                type : String,
                default : 'balls'
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

    .loading{
        width: 100%;height: 100%;position: absolute;z-index: 2021;
        background-color: rgba(0,0,0,0.5);text-align:center;

        .loading-box {
            /*display: flex;align-items: center;flex-direction: column;justify-content: center;
            width: 260px;position: absolute;
            background: #e7e7e7;border-radius: 10px;
            left: 50%;margin-left: -(260px/2);
            top:30%;padding: 20px 0;*/
            display: inline-block;padding: 20px 50px;
            position: relative;
            background: #e7e7e7;border-radius: 10px;
            margin: 0 auto;
            top:30%;
        }

        .balls{
            width: 80px;fill: #409eff;position: relative;left: 50%;margin-left: -(80px/2);
        }
        .bars{
            width: 50px;fill: #409eff;position: relative;left: 50%;margin-left: -(50px/2);
        }
        .spin{
            width: 60px;fill: #409eff;position: relative;left: 50%;margin-left: -(60px/2);
        }

        .loading-txt {
            font-size: 26px;color: #000;
        }
    }
</style>
