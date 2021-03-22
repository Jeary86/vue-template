<template>
    <div id="app">
        <FlipEquipment @screen="screenChange" />
        <Layout />
    </div>
</template>

<script>
    import Layout from "./views/Layout";
    import FlipEquipment from "./components/FlipEquipment";

    export default {
        name: 'app',
        data(){
          return{
              isScreen : false,
          }
        },
        mounted(){

        },
        methods:{
            screenChange(e){
                console.log(e)
            }
        },
        components: {FlipEquipment, Layout},
    }
</script>

<style scoped lang="less">
    #app {
        width: 100%;
        height: 100%;
        position: absolute;
        overflow:hidden;
        color: #2c3e50;
    }
</style>
