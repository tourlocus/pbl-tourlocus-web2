<template>
  <div class="p-mypage">
    <div class="container">
      <div class="main">

        <!-- 読み込み中 -->
        <template v-if="isLoading">
          <el-container
            v-loading.fullscreen="isLoading"
          />
        </template>

        <!-- コンテンツ表示 -->
        <template v-else>
          <user-profile
            :name="user.user_name"
            :icon="user.icon"
            :intro="user.intro"
            :me="me"
          />

          <!-- タブ -->
          <el-tabs
            v-model="activeTabName"
            type="card"
          >
            <el-tab-pane label="Items" name="Items">
              <!-- 自分の記事一覧 -->
            </el-tab-pane>

            <el-tab-pane label="Favorites" name="Favorites">
              <!-- お気に入り記事一覧 -->
            </el-tab-pane>

          </el-tabs>
        </template>

      </div>
    </div>
  </div>
</template>

<script>
import {User} from '../../../api'
import {UserProfile} from '../../../components'
import {mapState} from 'vuex'
import {Sleep} from '../../../utils'

export default {
  name: 'MyPage',
  components: {
    UserProfile
  },
  data () {
    return {
      user: null,
      activeTabName: 'Items',
      isLoading: false
    }
  },
  computed: {
    ...mapState('user', {
      me: state => state
    })
  },
  methods: {
    updateIsLoading (v) {
      this.isLoading = v
    }
  },
  async created () {
    this.updateIsLoading(true)
    await User.getItems(this.$route.params.params)
      .then(async res => {
        await Sleep(2000)
        this.user = res
        this.updateIsLoading(false)
      })
      .catch(async () => {
        await Sleep(2000)
        this.$message('エラーが発生しました')
        this.updateIsLoading(false)
      })
  }
}
</script>

<style lang="scss" scoped>
@import "./Top";
</style>
