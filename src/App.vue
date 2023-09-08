<template>
  <TheNavigationbar/>
  <div class="container">
    <div class="col-md-12">
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavigationbar from "./components/TheNavigationbar.vue";
export default {
  name: "App",
  components: {
    TheNavigationbar,
  },
};
</script>

<style></style>
