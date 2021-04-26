<template>
    <div id="loading">
        <!--<b>这是一个loading</b>-->
        <div class="loading_pic">
            <img src="../assets/loading.png" />
        </div>
        <p>{{number}}%</p>
        <div class="bg"></div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import * as PIXI from 'pixi.js';
    export default {
        name: "Loading",
        data(){
            return{
                number:0,
            }
        },
        computed: {
            ...mapGetters(['loaderName']),
        },
        mounted(){
            this.preload()
        },
        methods:{
            preload () {
                return new Promise((resolve, reject) => {
                    global.loader = new PIXI.Loader()
                    const loadFiles = require('../loadFiles.json');
                    const startTime = new Date().getTime()

                    const names = []

                    Array.from(loadFiles).forEach(item => {

                        let name = item.substring(0, item.indexOf("."));
                        let path = require('../assets/' + item);
                        // names.push({id:name,src:path})

                        global.loader.add(name,path)
                        names.push(name)

                    })
                    global.loader.onProgress.add((e) => {
                        // console.log(e.progress)
                    })

                    console.log(names)

                    this.loadingInterval = setInterval(() => {
                        const loadingTime = new Date().getTime() - startTime
                        this.realProgress = global.loader.progress * (loadingTime / 300) //至少要loading 3秒（假loading）
                        this.number = Math.round(this.realProgress)
                        // this.aniIndex = Math.round(this.progress * 6 / 100)

                        if (this.number >= 100) {
                            this.number = 100
                            clearInterval(this.loadingInterval)

                            this.resolve()
                        }
                    }, 100)

                    global.loader.onError.add((err) => {
                        console.log(err)
                    })

                    global.loader.load(() => {
                        // resolve()
                    })
                })
            },
            resolve(){
                this.$store.dispatch('setLoaderName','home')
            }
        }
    }
</script>

<style lang="less" scoped>
    #loading{
        width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 8888; display: block;overflow: hidden;
        p{
            color: #000;position:absolute;top:50%;text-align: center; margin-top: 100px;z-index: 999;font-size: 35px;width:100%;
        }
        .loading_pic{
            width:247px;position:absolute;z-index:88;
            left:50%;margin-left:-(247px/2);top:50%;margin-top:-300px;
        }
        .bg{
            width: 100%;height:100%;position: absolute;
            background-image: url('../assets/loading_bg.jpg');
            /*background-repeat: no-repeat;*/
        }
    }
</style>
