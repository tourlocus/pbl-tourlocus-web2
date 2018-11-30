<template>
  <div class="p-itemCreate">
    <div class="container">
      <div class="main">
        <form class="w__form">

          <div class="w__field-tag">
            <label>タグ</label>
          </div>

          <div class="w__field mt20mb20">
            <label>タイトル</label>
            <div class="input">
              <input
                type="text"
                name="title"
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
import {mapState} from 'vuex'

export default {
  name: 'ItemCreate',
  data () {
    return {
      images: []
    }
  },
  computed: {
    ...mapState('user', {
      cred: state => state
    })
  },
  methods: {
    handleChangeFile (e) {
      e.preventDefault()

      if (e.target.files.length !== 0) {
        this.images.length = 0
        const files = e.target.files

        for (let i = 0; i < files.length; i++) {
          this.showImage(files[i])
        }
      }
    },
    showImage (file) {
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
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Create';
</style>
