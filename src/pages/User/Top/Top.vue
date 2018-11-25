<template>
  <div class="p-mypage">
    <div class="container">
      <div class="main">
        <profile-box :user="user" />

        <div class="section-main">
          <div class="tab">
            <ul>
              <li class="current">
                <router-link :to="`/users/${user.name}`">Items</router-link>
              </li>
              <li>
                <router-link :to="`/users/${user.name}/favorites`">Favorites</router-link>
              </li>
              <li>
                <router-link :to="`/users/${user.name}/followers`">Followers</router-link>
              </li>
            </ul>
          </div>

          <div class="content">
            <item-card
              v-for="(article ,i) in articles"
              :key="i"
              :name="user.name"
              :img="user.icon"
              :id="article.id"
              :updated_at="article.updated_at"
              :title="article.title"
              :tags="article.tags"
            />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {ProfileBox, ItemCard} from '../../../components'
import {User} from '../../../api'
import {getUser, getArticleItems} from '../../../utils'

export default {
  name: 'MyPage',
  data () {
    return {
      user: {},
      articles: []
    }
  },
  components: {
    ProfileBox,
    ItemCard
  },
  computed: {},
  async created () {
    const params = this.$route.params.params
    const result = await User.getItems(params)
    this.user = getUser(result)
    this.articles = getArticleItems(result)
  }
}
</script>

<style lang="scss" scoped>
@import "./Top";
</style>
