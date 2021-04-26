<template>
    <button class="button" :class="['button--'+type,round?'is-round':'',circle?'is-circle':'']">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "index",
        props:{
            type : {
                type: String,
                default : 'default'
            },
            round : {
                type : Boolean,
                default : false
            },
            circle : {
                type : Boolean,
                default : false
            }
        },
        data(){
            return{

            }
        }
    }
</script>

<style lang="less" scoped>

    .button{
        padding: 12px 20px;border-radius: 8px;line-height: 1;
    }

    /*button:nth-of-type(n+2){*/
    /*margin-left: 20px;*/
    /*}*/

    .button+.button{
        margin-left: 20px;
    }

    .button--default{
        background-color: #409eff;color: #FFFFFF;border: 1px solid #409eff;
    }

    .is-round{
        border-radius: 30px;padding: 12px 23px;
    }
    .is-circle{
        border-radius: 50%;padding: 12px;
    }
</style>
