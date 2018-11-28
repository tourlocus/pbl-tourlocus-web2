<template>
  <div id="header">
    <div class="main">
      <div class="title">
        <router-link to="/">Tour Locus</router-link>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  components: {},
  computed: {},
  methods: {
    openSearch () {
      this.$emit('openSearch')
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Header';
</style>
