<template>
  <div id="timeline">
    <vTLHeader :timeline="timeline" :jobs="jobs" :tlstate="tlstate"/>
    <vTLEnemy
      v-for="(enemy, index) in timeline.enemies"
      :enemy="enemy"
      :index="index"
      :tlstate="tlstate"
      :key="enemy.name"
    />
    <vTLFriend
      v-for="(friend, index) in timeline.friends"
      :friend="friend"
      :jobs="jobs"
      :index="index"
      :tlstate="tlstate"
      :timeline="timeline"
      :key="friend.name"
    />
  </div>
</template>
<script>
import vTLHeader from "@/components/Timeline/TLTlScale.vue";
import vTLEnemy from "@/components/Timeline/TLtlenemy.vue";
import vTLFriend from "@/components/Timeline/TLtlfriend.vue";

export default {
  data() {
    return {};
  },
  components: {
    vTLHeader,
    vTLEnemy,
    vTLFriend,
  },
  props: {
    timeline: Object,
    jobs: { String: Object },
    tlstate: Object,
  },
};
</script>

<style scoped>
#timeline {
  position: relative;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
}
</style>