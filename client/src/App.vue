<template>
  <b-container class="px-0" fluid>
      <!-- <b-row align-h="center">
        <b-nav fixed-top>
          <b-nav-item>
              <router-link to="/" class="nav-link">Home</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/create" class="nav-link">Create Post</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/posts" class="nav-link">Posts</router-link>
            </b-nav-item>
        </b-nav>
      </b-row> -->
      <br />
      <transition name="fade">
        <router-view></router-view>
      </transition>
  </b-container>
</template>
<script>
export default {};
</script>