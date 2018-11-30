<template>
  <div class="c__user_profile">

    <!-- プロフィール -->
    <div class="w-profile">
      <div class="w-section1">
        <img :src="`http://localhost:3000/uploads/${icon}`" />

        <div class="w-name">
          <span>@{{ name }}</span>
          <template v-if="param == name">
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
          <p>フォロー</p>
          <p>フォロワー</P>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'UserProfileComponent',
  props: ['name', 'icon', 'intro', 'param'],
  created () {
    console.log(this.param)
  }
}
</script>

<style lang="scss" scoped>
@import "./UserProfile";
</style>
