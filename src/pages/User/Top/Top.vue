<template>
  <div class="p-mypage">
    <div class="container">
      <div class="main">
        <profile-box />

        <div class="section-main">
          <div class="tab">
            <ul>
              <li class="current">
                <router-link to="/taro">Items</router-link>
              </li>
              <li>
                <router-link to="/taro/favorites">Favorites</router-link>
              </li>
              <li>
                <router-link to="/taro/followers">Followers</router-link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {ProfileBox} from '../../../components'

export default {
  name: 'MyPage',
  components: {
    ProfileBox
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
@import "./Top";
</style>
