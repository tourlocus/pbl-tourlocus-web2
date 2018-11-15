<template>
  <div class="p-favorite">
    <div class="container">
      <div class="main">
        <profile-box :user="user" />

        <div class="section-main">
          <div class="tab">
            <ul>
              <li>
                <router-link :to="`/users/${user.name}`">Items</router-link>
              </li>
              <li>
                <router-link :to="`/users/${user.name}/favorites`">Favorites</router-link>
              </li>
              <li class="current">
                <router-link :to="`/users/${user.name}/followers`">Followers</router-link>
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
import {mapState} from 'vuex'

export default {
  name: 'MyPage',
  components: {
    ProfileBox
  },
  computed: {
    ...mapState('auth', {
      user: state => state.userInfo
    })
  }
}
</script>

<style lang="scss" scoped>
@import "./Followers";
</style>
