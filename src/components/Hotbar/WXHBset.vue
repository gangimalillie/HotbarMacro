<template>
  <div id="hud" style="text-align: center; margin: 0 auto">
    <div style="display: flex ">
      <HotbarCross v-model="value.Hotbars[0]" :pos="'top'" />
      <div style="width:100px;"></div>
      <HotbarCross v-model="value.Hotbars[1]" :pos="'top'" />
    </div>
    <div style="display: flex;text-align: center;justify-content:center;">
      <HotbarCross v-model="value.Hotbars[2]" :pos="'bottom'" />
      <div style="border-right:1px solid;width:10px;"></div>
      <div style="width:10px;"></div>
      <HotbarCross v-model="value.Hotbars[3]" :pos="'bottom'" />
    </div>
    <div style="display: flex;text-align: center;justify-content:center;">
      <HotbarCross v-model="value.Hotbars[4]" :pos="'bottom'" />
      <div style="width:10px;"></div>
      <HotbarCross v-model="value.Hotbars[5]" :pos="'bottom'" />
    </div>
  </div>
</template>
<script>
import HotbarCross from "@/components/Hotbar/HotbarCross";
export default {
  components: {
    HotbarCross,
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
  },
};
</script>