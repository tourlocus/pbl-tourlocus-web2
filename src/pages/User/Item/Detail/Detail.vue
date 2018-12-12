<template>
  <div class="p-itemDetail">
    <div class="container">

      <!-- 読み込み中 -->
      <template v-if="isLoading">
        <el-container
          v-loading.fullscreen="isLoading"
        />
      </template>

      <div class="main" v-else>

        <!-- 記事部分 -->
        <div class="w-inner_main">

          <!-- コンテンツの表示 -->
          <template>
            <!-- ヘッダー部 -->
            <div class="w-item_header">
              <div class="w-header_item1">
                <!-- 更新日時 -->
                <p> {{ item.updated_at | dateFormat }}</p>

                <!-- 作成者が自分の場合 -->
                <template v-if="item.userName === user.name">
                  <div class="w-edit">
                    <el-dropdown trigger="click">
                      <span>
                        <i class="fas fa-ellipsis-v" />
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>編集</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                </template>

                <!-- 作成が自分以外の場合、お気に入り -->
                <template v-else>
                  <!-- status: 1 = true -->
                  <template v-if="item.status">
                    <span class="favorite">
                      <i class="fas fa-heart" />
                    </span>
                  </template>

                  <!-- status: 0 = false -->
                  <template v-else>
                    <span class="dislike">
                      <i class="fas fa-heart" />
                    </span>
                  </template>

                </template>

              </div>

              <!-- アイコン、タイトル -->
              <div class="w-header_item2">
                <router-link :to="`/users/${item.userName}`" class="w-user_info">
                  <img :src="`http://localhost:3000/uploads/${item.userIcon}`" />
                  <span>@{{ item.userName }}</span>
                </router-link>
                <div class="w-title">
                  <h3>{{ item.title }}</h3>
                </div>
              </div>

              <!-- タグ -->
              <div class="w-header_item3">
                <router-link
                  v-for="(tag, i) in item.tags"
                  :key="i"
                  :to="`/tags/${tag.name}`"
                  class="w-tag"
                >
                  {{ tag.name }}
                </router-link>
              </div>

            </div>

            <!-- メディア部分 -->
            <div class="w-media_section mtmb">
              <template v-if="item.mediaFiles.length > 0">
                <el-carousel
                  :interval="15000"
                  indicator-position="outside"
                >
                  <el-carousel-item
                    v-for="(image, i) in item.mediaFiles"
                    :key="i"
                  >
                    <img :src="`http://localhost:3000/uploads/${image.url}`" />
                  </el-carousel-item>
                </el-carousel>
              </template>
            </div>

            <!-- 本文 -->
            <div class="w-content_main">
              <el-input
                type="textarea"
                :value="item.content"
                readonly
                autosize
              />
            </div>

          </template>

        </div>

        <!-- コメント部分 -->
        <!-- ログインしている場合 -->
        <template v-if="user.isAuth">
          <div class="w-comment_main">

            <!-- Comment-Inner -->
            <div class="w-comment-inner_main">
              <div class="w-comment_header">
                <h3>コメントを投稿する</h3>
              </div>

              <!-- コメントフォーム -->
              <form class="w-comment_form">
                <div class="w-comment_body">
                  <el-input
                    type="textarea"
                    v-model="comment"
                  />
                </div>
                <div class="w-actionBtn">
                  <el-input
                    type="submit"
                    v-loading="isSubmitLoading"
                    :disabled="invalidCheck"
                  />
                </div>
              </form>
            </div>

          </div>
        </template>

        <!-- ログインしていない場合 -->
        <template v-else>
          <div class="w-annonymouse_main">
            <p>すでにアカウントを持っている方はログイン</p>
          </div>
        </template>

      </div>

    </div>
  </div>
</template>

<script>
import {Item} from '../../../../api'
import {Sleep} from '../../../../utils'
import moment from 'moment'
import {mapState} from 'vuex'

export default {
  name: 'ItemDetail',
  data () {
    return {
      isLoading: false,
      isSubmitLoading: false,
      item: null,
      comment: ''
    }
  },
  filters: {
    dateFormat (v) {
      return moment(v).format('YYYY年MM月DD日') + 'に更新'
    }
  },
  computed: {
    ...mapState('user', {
      user: state => state
    }),
    invalidCheck () {
      if (this.comment) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    updateIsLoading (v) {
      this.isLoading = v
    },
    updateIsSubmitLoading (v) {
      this.isSubmitLoading = v
    }
  },
  async created () {
    const name = this.$route.params.params
    const id = this.$route.params.id
    this.updateIsLoading(true)
    await Item.getDetail(name, id)
      .then(async res => {
        await Sleep(2000)
        this.item = res
        this.updateIsLoading(false)
      })
      .catch(async () => {
        await Sleep(2000)
        this.$message('データの取得に失敗しました')
        this.updateIsLoading(false)
      })
  }
}
</script>

<style lang="scss" scoped>
@import './Detail';
</style>
