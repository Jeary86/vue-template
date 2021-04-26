<template>
    <div class="home">

        <h1>{{name}}</h1>

        <Button @click.native="onClickAbout1">loading</Button>

        <Button @click.native="onClickAbout2" round>loading2</Button>

        <Button @click.native="onClickAbout3" round>loading3</Button>

        <Button circle>圆</Button>

        <br><br>

        <Button @click.native="onClickAbout4">scroll</Button>
        <Button @click.native="onClickAbout5" round>alert</Button>

        <br><br>

        <Button @click.native="onClickAbout6" round>跳转到about</Button>

        <v-scroll :isShow.sync="isShowScroll">
            <p>11111</p><p>11111</p><p>11111</p><p>11111</p><p>11111</p><p>11111</p><p>11111</p><p>11111</p><p>11111</p>
            <p>11111</p><p>11111</p><p>11111</p><p>11111</p><p>11111</p><p>11111</p><p>11111</p><p>11111</p><p>11111</p>
            <p>11111</p><p>11111</p><p>11111</p><p>11111</p><p>11111</p><p>11111</p><p>11111</p><p>11111</p><p>11111</p>
            <p>11111</p><p>11111</p><p>11111</p><p>11111</p><p>11111</p><p>11111</p><p>11111</p><p>11111</p><p>11111</p>
        </v-scroll>


    </div>
</template>

<script>
    import Button from "../components/button";
    export default {
        name: "Home",
        components: {Button},
        data(){
            return{
                name:'vue-template-home',
                isShowScroll : false,
                duration : 1000,
            }
        },
        mounted(){


        },
        methods :{
            onClickAbout1(){

                this.$vloading.show();

                setTimeout(()=>{
                    this.$vloading.hide()
                },this.duration)

            } ,
            onClickAbout2(){

                this.$vloading.show('拼命加载中...','bars');

                setTimeout(()=>{
                    this.$vloading.hide()
                },this.duration)

            },
            onClickAbout3(){

                this.$vloading.show('拼命加载中...','spin');
                setTimeout(()=>{
                    this.$vloading.hide()
                },this.duration)

            },
            onClickAbout4(){

                this.isShowScroll = true

            },
            onClickAbout5(){
                this.$alert({message : 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'})
            },
            onClickAbout6(){
                this.$store.dispatch('setLoaderName','about')
            }
        }
    }
</script>

<style lang="less" scoped>
    .home{
        width: 100%;text-align: center;position: absolute;
    }
</style>
