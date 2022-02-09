<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-11-17 17:18:26
 * @LastEditTime: 2021-12-02 17:18:49
 * @LastEditors: MArio
-->
<template>
    <div id="layout" :style="bImg">
        <TitleBlock/>
        <div class="layoutPan">
            <HomePage v-if="view === 'No1On'"/>
            <HelloWorld v-if="view === 'No2On'" msg="豚悦资源搜索器"/>
        </div>
    </div>
</template>

<script>
    import TitleBlock from "../components/TitleBlock";
    import HomePage from "../components/HomePage";
    import HelloWorld from "../components/HelloWorld";
    import {mapMutations} from "vuex";
    import axios from "axios";

    export default {
        name: "layout",
        components: {TitleBlock, HomePage, HelloWorld},
        data(){
            return {
                bImg:""
            }
        },
        computed: {
            view: {
                get() {
                    return this.$store.getters.getView;
                },
                set(val) {
                    this.SET_VIEW(val);
                },
            },
        },
        created() {
            setTimeout(this.onSetView, 3000);

        },
        methods: {
            ...mapMutations(["SET_VIEW"]),
            onSetView() {
                console.log();
                this.view = "No1On";
            },
            setLayoutBackground() {
                axios.get().then((resp) => {
                  this.bImg = " background: url("+resp.data["bImg"]+") no-repeat;";
                }).catch((err) => {
                    console.log(err);
                })
            }
        },
    };
</script>

<style scoped>
    .layoutPan {
        padding-top: 55px;
        width: 100%;
        height: 100%;
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 15px;
    }

    #layout {
        width: 100%;
        height: 100%;
        /* min-width: 1334px;
              min-height: 830px; */
        border-block-color: #fff;
        background-color: #f3f3f3;
        border-radius: 5px;
        background: url(".././assets/2054106.jpg") no-repeat;
        background-size: 100% 100%;
    }
</style>
