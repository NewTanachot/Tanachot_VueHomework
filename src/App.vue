<template>
  <div style="margin: 15px">
    <router-link class="link" :to="{ path: '/' }">Portfolio</router-link>
    <router-link class="link" :to="{ path: '/contact' }"
      >Contact me</router-link
    >
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.link {
  display: inline-block;
  margin: 10px;
  text-decoration: none;
  color: inherit;
  font-size: 28px;
}

.link:hover {
  color: #eeeee4;
}

.router-link-exact-active {
  color: #FFFF33;
  border-bottom: 3px solid #FFFF33;
}
</style>
