<template>
  <div class="c-profileBox">

    <div class="left-box">
      <!-- <img src="https://www.pakutaso.com/shared/img/thumb/elly181027B003_TP_V.jpg" /> -->
      <img :src="`${user.icon}`" />
      <p>{{ user.name }}</p>
    </div>

    <div class="right-box">
      <h3>自己紹介文</h3>
      <div class="w__intro">
        {{ user.intro }}
      </div>

      <div class="actionBtn">
        <button
          type="button"
        >
          フォロー
        </button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ProfileBox',
  props: ['user']
}
</script>

<style lang="scss" scoped>
@import './ProfileBox';
</style>
