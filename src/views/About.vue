<template>
    <div class="about">
        <h1>{{name}}</h1>

        <Button @click.native="onClickBack" round>返回</Button>
    </div>
</template>

<script>
    import Button from "../components/button";
    export default {
        name: "About",
        components: {Button},
        data(){
            return{
                name : 'vue-template-about'
            }
        },
        mounted(){

        },
        methods:{
            onClickBack(){
                this.$store.dispatch('setLoaderName','home')
            }
        }
    }
</script>

<style lang="less" scoped>
    .about{
        width: 100%;text-align: center;position: absolute;
    }
</style>
