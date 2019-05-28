<template>
  <div>
    <cmtbox :id="gid"></cmtbox>
  </div>
</template>

<script>
import cmtbox from "../subcomponents/comment.vue";

export default {
  data() {
    return {
      gid:'', 
    }
  },
  components:{
    cmtbox
  }
};
</script>

<style lang="scss" scoped>

</style>
