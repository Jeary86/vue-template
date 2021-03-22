<template>
    <div class="home">
        <h1>{{name}}</h1>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return{
               name:'vue-template'
            }
        },
        mounted(){


        },
        methods :{

        }
    }
</script>

<style lang="less" scoped>
    .home{
        width: 100%;text-align: center;
    }
</style>
