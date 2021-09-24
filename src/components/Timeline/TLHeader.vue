<template>
  <div id="tlheader">
    <h1>{{ contentName }}</h1>
    <h2>タイムライン管理ツール</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  props: {
    contentName: String,
  },
};
</script>
<style scoped>
div {
  display: flex;
  align-items: flex-end;
}
</style>