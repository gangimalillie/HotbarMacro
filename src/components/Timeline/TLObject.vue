<template>
  <div id="tlobject">
    <div id="header">{{ this.tlstate.objectcount(timeline) }}</div>
    <!--<vmemo v-for="memo in timeline.decriptions" :memo="memo" :key="memo.decription"/>-->
    <venemy
      v-for="(enemy,i) in timeline.enemies"
      :enemy="enemy"
      :tlstate="tlstate"
      :last="i+1==timeline.enemies.length"
      :key="enemy.name"
    />
    <vfriend
      v-for="friend in timeline.friends"
      :friend="friend"
      :key="friend.name"
      :tlstate="tlstate"
      :jobs="jobs"
    />
    <div id="space"></div>
  </div>
</template>

<script>
import venemy from "@/components/Timeline/TLEnemy.vue";
import vfriend from "@/components/Timeline/TLFriend.vue";

export default {
  props: {
    timeline: Object,
    jobs: { String: Object },
    tlstate: Object,
  },
  components: {
    venemy,
    vfriend,
  },
};
</script>

<style scoped>
#header {
  height: 41px;
}
#space {
  height: 16px;
}
</style>