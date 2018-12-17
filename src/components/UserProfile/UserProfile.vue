<template>
  <div class="c__user_profile">

    <!-- プロフィール -->
    <div class="w-profile">
      <div class="w-section1">
        <img :src="`http://localhost:3000/uploads/${icon}`" />

        <div class="w-name">
          <span>@{{ name }}</span>
          <template v-if="me.name == name">
            <el-button size="mini">プロフィールを編集</el-button>
          </template>
          <template v-else>
            <el-button size="mini">フォローする</el-button>
          </template>
        </div>
      </div>

      <!-- 右側 -->
      <div class="w-intro">
        <div class="w-section2">
          <h3>自己紹介文</h3>

          <div class="w-greeting">{{ intro }}</div>
        </div>

        <div class="w-follow">
          <router-link :to="`/users/${me.name}/follow`">{{ follow }}フォロー</router-link>
          <router-link :to="`/users/${me.name}/follower`">{{ follower }} フォロワー</router-link>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'UserProfileComponent',
  props: ['name', 'icon', 'intro', 'me', 'follow', 'follower'],
  created () {
  }
}
</script>

<style lang="scss" scoped>
@import "./UserProfile";
</style>
