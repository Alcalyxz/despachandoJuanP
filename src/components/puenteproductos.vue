<template>
  <div>
  </div>
</template>

<script>
export default {
  name: "puente",
  mounted() {
    this.$router.push("/menus").catch(() => {});
  },
  

};
</script>

<style scoped>
</style>