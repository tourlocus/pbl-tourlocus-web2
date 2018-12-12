<template>
  <div class="p-itemCreate">
    <div class="container">
      <div class="main">

        <!-- フォーム -->
        <form @submit.prevent="handleSubmit">

          <!-- タグ -->
          <div class="w-field_tag">
            <label>タグ</label>
            <vue-tags-input
              v-model="tag"
              :tags="form.tags"
              :max-tags="3"
              placeholder="地域に関することを3つまで"
              @tags-changed="newTags => form.tags = newTags"
            />
          </div>

          <!-- タイトル -->
          <div class="w-field_title mtmb">
            <label>タイトル</label>
            <el-input
              maxlength="30"
              v-model.trim="form.title"
              name="title"
              v-validate="{required: true}"
              placeholder="〇〇に行ってきた。"
            />
            <div
              class="form__error"
              v-if="errors.has('title')"
            >
              タイトルは必須です
            </div>

          </div>

          <!-- ファイル -->
          <div class="w-field_media">
            <label for="file" class="w-file">
              画像を選択
              <input
                type="file"
                name="file[]"
                id="file"
                multiple
                accept="image/*"
                @change="handleFileSelect"
              />
            </label>

            <!-- カルーセル -->
            <template v-if="images.length > 0">
              <el-carousel
                class="mtmb"
                :interval="15000"
                indicator-position="outside"
              >
                <el-carousel-item
                  v-for="(image, i) in images"
                  :key="i"
                >
                  <img :src="`${image}`" />
                </el-carousel-item>
              </el-carousel>
            </template>
          </div>

          <!-- 本文 -->
          <div class="w-field_body mtmb">
            <label>本文</label>
            <el-input
              v-model="form.content"
              name="content"
              v-validate="{required: true}"
              type="textarea"
            />
            <div
              class="form__error"
              v-if="errors.has('content')"
            >
              本文は必須です
            </div>
          </div>

          <!-- サブミット -->
          <div class="w-actionBtn">
            <el-input
              type="submit"
              value="投稿する"
              v-loading="isLoading"
            />
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
import {Item} from '../../../../api'
import {mapState} from 'vuex'
import VueTagsInput from '@johmun/vue-tags-input'

export default {
  name: 'ItemCreate',
  components: {
    VueTagsInput
  },
  data () {
    return {
      form: {
        tags: [],
        title: '',
        files: [],
        content: ''
      },
      tag: '',
      images: [],
      isLoading: false
    }
  },
  computed: {
    ...mapState('user', {
      cred: state => state
    })
  },
  methods: {
    updateIsLoading (v) {
      this.isLoading = v
    },
    // ファイルセレクト
    handleFileSelect (e) {
      const files = e.target.files

      if (files.length !== 0) {
        this.form.files.length = 0
        this.images.length = 0

        for (let i = 0; i < files.length; i++) {
          this.readFile(files[i])
        }
      }
    },
    // ファイルの読み込み
    readFile (file) {
      const vm = this
      const reader = new FileReader()
      this.form.files.push(file)

      reader.onload = e => {
        vm.images.push(e.target.result)
      }
      reader.readAsDataURL(file)
    },
    // サブミット
    handleSubmit () {
      this.$validator.validateAll().then(async result => {
        if (result) {
          this.updateIsLoading(true)
          await Item.createItem(this.cred, this.form)
            .then(() => {
              this.updateIsLoading(false)
            })
            .catch(() => {
              this.$message('投稿できませんでした。')
              this.updateIsLoading(false)
            })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Create';
</style>
