<template>
<div id="hotbar-action">
    <img :src="skill.Icon">
</div>
</template>
<script>
export default{
    data(){

    },
    props:{
        skill:Object
    }
}
</script>
<style scoped>
div{
    height:30px;
    width:30px;
}
</style>