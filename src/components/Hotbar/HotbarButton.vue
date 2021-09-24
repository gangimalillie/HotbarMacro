<template>
  <div id="hotbarbutton" height="44px">
    <div height="44px">
      <img
        v-if="Object.keys(action).length>2"
        :src="action.Icon?action.Icon:''"
        onerror="this.onerror = null;"
        alt=''
        width="40px"
        height="40px"
        style="border-radius: 4px;display:block;border:1px solid;"
        @dragleave.prevent
        @dragover.prevent
        @drop.prevent="drop($event)"
        @dblclick="ondbclick"
      />
      <div
        v-else
        width="40px"
        height="40px"
        style="border-radius: 4px; background-color: #d3d3d3;width:40px;height:40px; border:1px solid;"
        @dragleave.prevent
        @dragover.prevent
        @drop.prevent="drop($event)"
        @dblclick="ondbclick"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: Object,
  },
  computed: {
    action: {
      cache: false,
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      },
    },
  },
  methods: {
    drop(event) {
      event.preventDefault();
      this.action = JSON.parse(event.dataTransfer.getData("application/json"));
    },
    ondbclick() {
      this.action = new Object();
    },
  }
};
</script>