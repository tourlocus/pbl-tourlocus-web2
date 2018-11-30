<template>
  <div class="p-mypage">
    <div class="container">
      <div class="main">

        <!-- 読み込み中 -->
        <template v-if="isLoading">
        </template>

        <!-- コンテンツ表示 -->
        <template v-else>
          <user-profile
            :name="user.userName"
            :icon="user.icon"
            :intro="user.intro"
            :param="param.params"
          />

          <div class="tab">
            <ul>
              <li>
                <router-link to="/">Items</router-link>
              </li>
              <li>
                <router-link to="/">Favorites</router-link>
              </li>
            </ul>
          </div>

        </template>

      </div>
    </div>
  </div>
</template>

<script>
import {User} from '../../../api'
import {UserProfile} from '../../../components'
import {mapState} from 'vuex'

export default {
  name: 'MyPage',
  components: {
    UserProfile
  },
  data () {
    return {
      user: null,
      isLoading: false
    }
  },
  computed: {
    ...mapState('route', {
      param: state => state.params
    })
  },
  methods: {
    updateIsLoading (v) {
      this.isLoading = v
    }
  },
  async created () {
    this.updateIsLoading(true)
    this.user = await User.getItems(this.$route.params.params)
    this.updateIsLoading(false)
  }
}
</script>

<style lang="scss" scoped>
@import "./Top";
</style>
