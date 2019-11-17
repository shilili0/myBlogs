<template>
  <div class="myInfos">
    <a-button type="primary" @click="showMyDetailInfo">我的详细信息</a-button>
    <a-drawer
      title="Basic Drawer"
      placement="left"
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
  </div>
</template>

<script>

import Vue from 'vue';
import { Drawer, Button } from 'ant-design-vue';
Vue.use(Drawer);
Vue.use(Button);
  export default {
    data() {
      return {
        visible: false,
      }
    },
    methods: {
      showMyDetailInfo(){
        this.visible = true;
      },
      onClose() {
        this.visible = false;
      },
    }
  }
</script>
