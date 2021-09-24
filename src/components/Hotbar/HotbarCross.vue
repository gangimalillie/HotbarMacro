<template>
  <div id="hotbarcross">
    <div v-if="pos === 'top'">
      SET:
      <select name="num" v-model="hotbar.Number">
        <option
          v-for="num in 10"
          :key="num"
          :value="num"
          style="
            font-size: x-large;
            vertical-align: middle;
            width: 40px;
            height: 40px;
          "
        >
          {{ num }}
        </option>
      </select>
      /<select name="job" v-model="hotbar.LR">
        <option v-for="lr in ['L','R']" :key="lr" :value="lr">
          {{ lr }}
        </option>
      </select>
    </div>
    <div style="display:flex;items-align:middle;">
        <div width="40px" style="margin:auto;">
        <HotbarButton v-model="value.Actions[0]" />
        </div>
        <div width="40px" >
        <HotbarButton v-model="value.Actions[1]" />
        <HotbarButton v-model="value.Actions[3]" />
        </div>
        <div width="40px" style="margin:auto;">
        <HotbarButton v-model="value.Actions[2]" />
        </div>
        <div width="40px" style="margin:auto;">
        <HotbarButton v-model="value.Actions[4]" />
        </div>
        <div width="40px">
        <HotbarButton v-model="value.Actions[5]" />
        <HotbarButton v-model="value.Actions[7]" />
        </div>
        <div width="40px" style="margin:auto;">
        <HotbarButton v-model="value.Actions[6]" />
        </div>
    </div>
    <div v-if="pos === 'bottom'">
      SET:
      <select name="num" v-model="hotbar.Number">
        <option
          v-for="num in 10"
          :key="num"
          :value="num"
          style="
            font-size: x-large;
            vertical-align: middle;
            width: 40px;
            height: 40px;
          "
        >
          {{ num }}
        </option>
      </select>
      /<select name="job" v-model="hotbar.LR">
        <option v-for="lr in ['L','R']" :key="lr" :value="lr">
          {{ lr }}
        </option>
      </select>
    </div>
  </div>
</template>
<script>
import HotbarButton from "@/components/Hotbar/HotbarButton.vue";
export default {
    data(){
        return{

        }
    },
  components: {
    HotbarButton,
  },
  props: {
    value: Object,
    pos:String,
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
<style scoped>
select {
  -webkit-appearance: menulist-button;
  appearance: menulist-button;
  background-color: #ffe0ff;
}
</style>