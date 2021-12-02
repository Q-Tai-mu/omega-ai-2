<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-11-17 17:18:26
 * @LastEditTime: 2021-12-02 14:39:55
 * @LastEditors: MArio
-->
<template>
  <div id="layout">
    <TitleBlock />
     <div class="layoutPan">
         <HomePage v-show="view === 'No1On'" />
     </div>
  </div>
</template>

<script>
import TitleBlock from "../components/TitleBlock";
import HomePage from "../components/HomePage";
export default {
  name: "layout",
  components: { TitleBlock,HomePage},
  computed: {
    view() {
      return this.$store.getters.getView;
    },
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

}
</style>
