<template>
  <div class="p-notification">
    <div class="container">
      <div class="main">
        <div class="tab">
          <ul>
            <li>
              <router-link to="/settings/account">アカウント</router-link>
            </li>
            <li>
              <router-link to="/settings/password">パスワード</router-link>
            </li>
            <li class="current">
              <router-link to="/settings/notification">メールアドレスと通知</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notification'
}
</script>

<style lang="scss" scoped>
@import './Notification';
</style>
