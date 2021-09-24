<template>
  <div id="actionlist" :style="`width:${(iconSize+4) * rowCount}px;`">
    <div :style="`display:flex;flex-wrap:wrap;`">
      <div v-for="Action in Object.values(this.Actions).filter((ac)=>ac.Class==`ウェポンスキル`)" :key="Action.Name">
        <ActionIcon :Action="Action" :Size="iconSize" />
      </div>
    </div>
    <div :style="`display:flex;flex-wrap:wrap;`">
      <div v-for="Action in Object.values(this.Actions).filter((ac)=>ac.Class==`魔法`)" :key="Action.Name">
        <ActionIcon :Action="Action" :Size="iconSize" />
      </div>
    </div>
    <div :style="`display:flex;flex-wrap:wrap;`">
      <div v-for="Action in Object.values(this.Actions).filter((ac)=>ac.Class==`アビリティ`)" :key="Action.Name">
        <ActionIcon :Action="Action" :Size="iconSize" />
      </div>
    </div>
  </div>
</template>
<script>
import ActionIcon from "@/components/Hotbar/ActionIcon.vue";
export default {
  data() {
    return {
      iconSize: 40,
      rowCount: 5,
    };
  },
  components: {
    ActionIcon,
  },
  props: {
    Actions: Object,
  }
};
</script>
<style scoped>
</style>