<template>
  <div id="header">
    <div class="main">
      <div class="title">
        <router-link to="/">Tour Locus</router-link>
      </div>

      <template>
        <form class="w__search-form pc-only">
          <input type="search" />
        </form>
      </template>

      <template>
        <div class="tablet-only w__search-icon">
          <i class="fas fa-search"
            @click="openSearch"
          />
        </div>
      </template>

      <template>
        <div class="w__before-login pc-only">
          <router-link to="/signup">新規登録</router-link>
          <router-link to="/signin">ログイン</router-link>
        </div>
        <div class="w__before-login tablet-only">
          <el-dropdown trigger="click">
            <div>
              <i class="fas fa-user" />
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/signup">新規登録</router-link>
              </el-dropdown-item>

              <el-dropdown-item>
                <router-link to="/signin">ログイン</router-link>
              </el-dropdown-item>

            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </template>
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
