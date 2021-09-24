<template>
  <div id="friend">
    <div id="gcd">
      <img :src="jobs[friend.name].Icon" width="30px" height="30px" />
      <p>{{ friend.name }}</p>
      <svg
        v-if="friend.show"
        @click="toggle"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
      <svg
        v-if="!friend.show"
        @click="toggle"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
    <div id="traits" v-if="friend.show">
      <div id="trait" v-for="trait in friend.traits" :key="trait.name">
        <span
          ><img
            :src="jobs[friend.name].Skills[trait.name].Icon"
            width="30px"
            height="30px"
        /></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
    friend: Object,
    jobs: { String: Object },
  },
  methods:{
    toggle(){
      this.friend.show = !this.friend.show;
    }
  }
};
</script>

<style scoped>
#gcd {
  display: flex;
  height: 30px;
  align-items: center;
  background-color: rgb(187, 245, 245);
}
p{
    white-space: nowrap;
}
#trait {
  height: 30px;
  align-items: center;
  text-align: right;
  background-color: rgb(187, 245, 245);
}
svg{
    margin-left:auto;
}
</style>