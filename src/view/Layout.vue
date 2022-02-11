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
            <HomePage v-if="view === 'No1On'" :t-img="eImg"/>
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
        data() {
            return {
                bImg: "",
                eImg: ""
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
            setTimeout(this.setLayoutBackground, 3000);
            setTimeout(this.onSetView, 3000);
        },
        methods: {
            ...mapMutations(["SET_VIEW"]),
            onSetView() {
                console.log();
                this.view = "No1On";
            },
            setLayoutBackground() {
                this.$Message.success("启动更换背景");
                axios.get("https://raw.githubusercontent.com/Q-Tai-mu/omega-ai-2/main/public/background.json").then((resp) => {
                    this.bImg = " background: url(" + resp.data["bImg"] + ") no-repeat;background-size: 100% 100%;";
                    this.eImg = " background: url(" + resp.data["tImg"] + ") ;";
                }).catch((err) => {
                    this.$Message.error("背景更换失败,目前网络通信不佳！");
                    this.bImg = " background-color: #f3f3f3;";
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
        /*background: url("https://pic.netbian.com/uploads/allimg/220211/004115-16445112750af5.jpg") no-repeat;*/
        background-size: 100% 100%;
    }
</style>
