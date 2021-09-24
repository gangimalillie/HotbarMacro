<template>
  <div id="tlcontent">
    <vObject :timeline="timeline" :jobs="jobs" :tlstate="tlstate"/>
    <vTimeline :timeline="timeline" :jobs="jobs" :tlstate="tlstate"/>
    <vProperty />
  </div>
</template>
<script>
import vObject from "@/components/Timeline/TLObject.vue";
import vTimeline from "@/components/Timeline/TLTimeline.vue";
import vProperty from "@/components/Timeline/TLProperty.vue";

export default {
  data() {
    return {
      tlstate: {
        widthpersec: 12,
        width: 0,
        height: 0,
        objectcount:(timeline)=>timeline.enemies.reduce((s,e)=>s+(e.show?1:0),0)+timeline.friends.reduce((s,f)=>s+(f.show?f.traits.length+1:1),0),
        fromtop:(timeline,index)=>{
          var count = timeline.enemies.reduce((s,e)=>s+(e.show?1:0),0);
          for(var i=0;i<index+1;i++) count+=timeline.friends[i].show?timeline.friends[i].traits.length+1:1
          return count;
          }
      },
    };
  },
  components: {
    vObject,
    vTimeline,
    vProperty,
  },
  props: {
    timeline: Object,
    jobs: { String: Object },
  }
};
</script>
<style scoped>
#tlcontent {
  display: flex;
  width: 100%;
}
</style>