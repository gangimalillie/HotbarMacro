<template>
  <div
    id="friend"
    :style="`top:${40 + tlstate.fromtop(timeline, index-1) * 30}px;`"
  >
    <div id="gcds" v-for="gcd in friend.gcds" :key="gcd.name">
      <div id="gcd" :style="`left:${gcd.sec * 30}px;`">
        <img
          :src="jobs[friend.name].Skills[gcd.name].Icon"
          width="30px"
          height="30px"
        />
      </div>
    </div>
    <div v-if="friend.show">
      <div
        id="traits"
        v-for="(trait, i) in friend.traits"
        :key="trait.name"
        :style="`top:${(i + 1) * 30}px`"
      >
        <div
          id="trait"
          v-for="sec in trait.sec"
          :key="sec"
          :style="`left:${sec * tlstate.widthpersec}px;`"
        >
          <img
            :src="jobs[friend.name].Skills[trait.name].Icon"
            width="30px"
            height="30px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    friend: Object,
    jobs: { String, Object },
    index: Number,
    tlstate: Object,
    timeline: Object,
  },
};
</script>

<style scoped>
#trait {
  position: absolute;
  display: flex;
  height: 30px;
  width: 30px;
  color: black;
  background-color: white;
  border: solid 1px #6091d3;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
}
#friend {
  position: absolute;
}
#traits {
  position: absolute;
}
#gcds {
  position: absolute;
}
#gcd {
  position: absolute;
}
</style>