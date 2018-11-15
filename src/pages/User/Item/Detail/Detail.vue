<template>
  <div class="p-itemDetail">
    <div class="container">
      <div class="main">
        <!-- 記事部分 -->
        <div class="w__item-main">
          <div class="w__item-header">
            <router-link :to="`/users/${article.userName}`">
              <template v-if="article.userIcon">
                <img :src="`${endpoints}${article.userIcon}`" />
              </template>
              <h3>{{ article.userName }}</h3>
            </router-link>
            <p>{{ article.updated_at | dateFormat }}</p>
          </div>

          <div class="w__item-title">
            <h3>{{ article.title }}</h3>
          </div>

          <div class="w__item-tag">
            <ul>
              <li v-for="(tag, i) in article.tags" :key="i">
                <router-link :to="`tags/${tag.name}`">
                  {{ tag.name }}
                </router-link>
              </li>
            </ul>
          </div>

          <div
            class="w__media"
          >
            <el-carousel
              style="text-align: center"
              class="mt20mb20"
              indicator-position="outside"
            >
              <el-carousel-item
                v-for="(media, i) in article.mediaFiles"
                :key="i"
              >
                <img :src="`${endpoints}${media.url}`" />
              </el-carousel-item>
            </el-carousel>
          </div>

          <div class="w__content">
            <p>本文</p>
            <div class="w__content-main">
              {{ article.content }}
            </div>
          </div>

        </div>

        <div
          class="comment-main"
        >
          <div class="comment-header">
            <template v-if="user.icon">
              <img :src="`${user.icon}`" />
              <h3>コメントを投稿する</h3>
            </template>
          </div>

          <div class="comment-body">
            <textarea
              placeholder="コメントを入力してください"
            />
          </div>

          <div class="comment-footer">
            <input type="submit" value="投稿" />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {Item} from '../../../../api'
import {format} from '../../../../utils/dateFormat'
import {mapState} from 'vuex'

export default {
  name: 'ItemDetail',
  data () {
    return {
      endpoints: 'http://localhost:3000/uploads/',
      article: []
    }
  },
  filters: {
    dateFormat (v) {
      return format(v)
    }
  },
  computed: {
    ...mapState('auth', {
      user: state => state.userInfo
    })
  },
  async created () {
    const id = Number(this.$route.params.id)
    this.article = await Item.getDetail(id)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import './Detail';
</style>
