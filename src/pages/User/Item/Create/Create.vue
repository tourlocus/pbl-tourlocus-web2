<template>
  <div class="p-itemCreate">
    <div class="container">
      <div class="main">
        <form
          @submit.prevent="handleSubmit"
          class="w__form"
        >

          <div class="w__field-tag">
            <label>タグ</label>
            <input-tag
              v-model.trim="form.tags"
              :limit="5"
            />
          </div>

          <div class="w__field mt20mb20">
            <label>タイトル</label>
            <div class="input">
              <input
                type="text"
                name="title"
                v-model.trim="form.title"
                v-validate="'required'"
              />
            </div>
            <div
              class="form__errors"
              v-if="errors.has('title')"
            >
              タイトルは必須です
            </div>
          </div>

          <div class="w__field-file">
            <label for="file" class="file">
              ファイルを選択
              <input
                type="file"
                name="file"
                id="file"
                multiple
                @change="handleChangeFile"
              />
            </label>
            <template v-if="images.length > 0">
              <el-carousel
                class="mt20mb20"
              >
                <el-carousel-item
                  v-for="(image, index) in images"
                  :key="index"
                >
                  <img :src="`${image}`" />
                </el-carousel-item>
              </el-carousel>
            </template>
          </div>

          <div class="w__field mt20mb20">
            <label>本文</label>
            <div class="input">
              <textarea
                name="content"
                v-model.trim="form.content"
                v-validate="'required'"
              />
            </div>
            <div
              class="form__error"
              v-if="errors.has('content')"
            >
              本文は必須です
            </div>
          </div>

          <div class="actionBtn">
            <input
              type="submit"
              value="投稿する"
            />
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
import InputTag from 'vue-input-tag'
import {mapActions} from 'vuex'

export default {
  name: 'ItemCreate',
  components: {
    InputTag
  },
  data () {
    return {
      form: {
        tags: [],
        title: '',
        files: [],
        content: ''
      },
      images: []
    }
  },
  methods: {
    ...mapActions('article', ['createItem']),
    handleChangeFile (e) {
      e.preventDefault()

      if (e.target.files.length !== 0) {
        this.form.files.length = 0
        this.images.length = 0
        const files = e.target.files

        for (let i = 0; i < files.length; i++) {
          this.showImage(files[i])
        }
      }
    },
    showImage (file) {
      this.form.files.push(file)
      const reader = new FileReader()
      const vm = this
      reader.onload = e => {
        vm.images.push(e.target.result)
      }
      reader.readAsDataURL(file)
    },
    handleSubmit () {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.createItem(this.form)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Create';
</style>
