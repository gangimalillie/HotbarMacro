<template>
  <div id="hud" style="text-align:center;margin:0 auto;">
    <Hotbar1x12 v-for="(n,index) in value.Hotbars.length" :key="index" v-model="value.Hotbars[index]"/>
  </div>
</template>
<script>
import Hotbar1x12 from "@/components/Hotbar/Hotbar1x12";
export default {
  components: {
    Hotbar1x12,
  },
  props: {
    value: Object,
  },
  computed: {
    hotbar: {
      get: function () {
        return this.value;
      },
      set: function (newValue) {
        this.$emit("input", newValue);
      },
    },
  }
};
</script>