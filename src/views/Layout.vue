<template>
    <div class="Layout">
        <transition name="fade">
            <!--mode="out-in"-->
            <Loading v-if="loaderName === 'loading'"  />
            <Home v-if="loaderName === 'home'" />
            <About v-if="loaderName === 'about'" />
        </transition>
    </div>
</template>

<script>
    import Loading from "./Loading"
    import Home from "./Home"
    import About from "./About";
    import { mapGetters } from 'vuex'
    export default {
        name: "Layout",
        components: {About, Loading, Home},
        data(){
            return {

            }
        },
        computed: {
            ...mapGetters(['loaderName']),
        },
        watch : {
            loaderName(val){
                console.log(val)
            },
        },
        mounted(){

        }
    }
</script>

<style lang="less" scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.8s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .page-on-enter {
        transform: translate3d(100%, 0, 0);
    }

    .page-on-leave-to {
        transform: translate3d(-100%, 0, 0);
    }

    .page-off-enter {
        transform: translate3d(-100%, 0, 0);
    }

    .page-off-leave-to {
        transform: translate3d(100%, 0, 0);
    }

    .page-off-enter-active,
    .page-off-leave-active,
    .page-on-enter-active,
    .page-on-leave-active {
        transition: transform 0.5s ease;
    }


</style>
