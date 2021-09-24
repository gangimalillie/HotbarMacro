<template>
  <div id="header" style="z-index:1;">
    <div id="phases">
      <div
        id="phase"
        v-for="phase in timeline.phases"
        :key="phase.name"
        :style="style(phase)"
      >
        {{ phase.name }}
      </div>
    </div>
    <div id="scales">
      <div
        v-for="(n, i) in timeline.totalSec"
        :key="i"
        style="position: absolute"
      >
        <div
          id="scale"
          v-show="(i - timeline.count) % 5 === 0"
          :style="`left:${i * tlstate.widthpersec}px;width:${tlstate.widthpersec * 5}px;height:${tlstate.objectcount(timeline)*30+20}px;`"
        >
          <div id="second">{{ i - timeline.count }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    timeline: Object,
    jobs: { String: Object },
    tlstate:Object
  },
  methods: {
    style(phase) {
      var left = phase.start * this.tlstate.widthpersec - this.tlstate.width;
      var width = phase.dulation * this.tlstate.widthpersec+1;
      return `left:${left}px;width:${width}px;`;
    },
  }
};
</script>
<style scoped>
#phases {
  position: absolute;
}
#phase {
  position: absolute;
  background-color: aqua;
  height: 20px;
  border: solid 1px #6091d3;
}
#scales {
  position: absolute;
}
#scale {
  position: absolute;
  border-left: 1px solid black;
  background-color: white;
  top: 20px;
  text-align: left;
}
#second {
  font-size: 14px;
  height:20px;
  background-color:azure;
}
</style>