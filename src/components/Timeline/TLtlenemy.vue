<template>
  <div id="enemy" :style="`top:${40+index*30}px;`">
    <div
      id="move"
      v-for="move in enemy.moves"
      :key="move.sec"
      :style="`left:${move.start * tlstate.widthpersec}px;`"
    >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    enemy: Object,
    index: Number,
    tlstate: Object,
  },
};
</script>

<style scoped>
#move {
  position: absolute;
  display:flex;
  height: 30px;
  width: 30px;
  color: black;
  background-color: white;
  border: solid 1px #6091d3;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
}
#enemy {
  position:absolute;
}
</style>