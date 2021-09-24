<template>
  <div id="hotbar1x12" style="display: flex;">
    <div>
        <input type="text" required pattern="([1-9]|10)" v-model="hotbar.Number" style="font-size:x-large;vertical-align:middle;width:40px;height:40px;text-align:right;">
    </div>
    <div v-for="(n,i) in 12" :key="n">
      <HotbarButton v-model="value.Actions[i]" />
    </div>
  </div>
</template>
<script>
import HotbarButton from "@/components/Hotbar/HotbarButton.vue";
export default {
  components: {
    HotbarButton,
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