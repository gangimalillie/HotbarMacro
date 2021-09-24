<template>
  <div id="content">
    <vHeader />
    <vTLHeader :contentName='tl.contentName' />
    <vTLContent :timeline='tl' :jobs='jobs'/>
  </div>
</template>
<script>
import vHeader from "@/components/Header.vue";
import vTLHeader from "@/components/Timeline/TLHeader.vue";
import vTLContent from "@/components/Timeline/TLContent.vue";
import jobs from "../assets/jobs.json";
import tl from "../assets/test.json";

export default {
  data(){
    return{
      jobs:jobs,
      tl:tl
    }
  },
  components: {
    vHeader,
    vTLHeader,
    vTLContent,
  },
  mounted(){
    //console.log(this.tl.contentName);
  }
};
</script>