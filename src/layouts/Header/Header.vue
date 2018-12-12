<template>
  <div id="header">
    <div class="main">

      <!-- title -->
      <div class="title">
        <div class="pc-only">
          <router-link to="/">Tour Locus</router-link>
        </div>
        <div class="tablet-only">
          <router-link to="/">
            <img
              src="../../assets/logo.png"
              width="40px"
              height="40px"
            />
          </router-link>
        </div>

        <div class="pc-only">
          <div class="search">
            <el-input prefix-icon="el-icon-search" />
          </div>
        </div>

      </div>

      <!-- ログイン後 -->
      <template v-if="isAuth">
        <div class="nava">

          <div class="w-icon__group">
            <div class="pc-only">
              <div class="btn-group">
                <el-button icon="el-icon-edit" @click="toItemCreate">記事を書く</el-button>
                <el-button icon="el-icon-plus">お土産</el-button>
              </div>
            </div>

            <!-- tablet, mobile  -->
            <div class="tablet-only">
              <div class="icon-group">
                <span @click="toItemCreate">
                  <i class="fas fa-edit" />
                </span>

                <span>
                  <i class="fas fa-plus" />
                </span>

                <span>
                  <i class="fas fa-search" />
                </span>
              </div>
            </div>
          </div>

          <div class="menu">
            <el-dropdown trigger="click">
              <span>
                <i class="fas fa-ellipsis-v" />
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <router-link :to="`/users/${name}`">マイページ</router-link>
                </el-dropdown-item>
                <el-dropdown-item>ログアウト</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
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
                  <el-dropdown-item>ログイン</el-dropdown-item>
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
  computed: {},
  methods: {
    toItemCreate () {
      this.$router.push(`/users/${this.name}/items/create`)
    },
    toMyPage () {
      this.$router.push(`/users/${this.name}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Header';
</style>
