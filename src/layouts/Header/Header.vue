<template>
  <div id="header">
    <div class="main">

      <!-- title -->
      <div class="title">
        <router-link to="/">Tour Locus</router-link>

        <div class="pc-only">
          <div class="search">
            <el-input prefix-icon="el-icon-search" />
          </div>
        </div>

        <div class="tablet-only">
          <div class="search">
            <el-input
              prefix-icon="el-icon-search"
            />
          </div>
        </div>

      </div>

      <!-- ログイン後 -->
      <template v-if="isAuth">
      </template>

      <!-- ログイン前 -->
      <template v-else>
        <!-- desktop -->
        <div class="pc-only">
          <div class="navb">
            <router-link to="/signin">ログイン</router-link>
            <router-link to="/signup">新規登録</router-link>
          </div>
        </div>

        <!-- tablet, mobile -->
        <div class="tablet-only">
          <div class="nav">
            <div class="menu">
              <el-dropdown trigger="click">
                <span>
                  <i class="fas fa-user" />
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>新規登録</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>

          </div>
        </div>
      </template>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  props: ['isAuth', 'name'],
  components: {},
  computed: {}
}
</script>

<style lang="scss" scoped>
@import './Header';
</style>
