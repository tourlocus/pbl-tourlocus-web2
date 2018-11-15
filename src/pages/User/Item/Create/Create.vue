<template>
  <div class="p-itemCreate">
    <div class="container">
      <div class="main">
        <form
          @submit.prevent="handleSubmit"
          class="w__form"
        >

          <div class="w__field-tag">
            <label>タグ
              <span>(地域に関することを３つまで)</span>
            </label>
            <el-tag
              v-for="(tag, i) in form.tags"
              :key="i"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
            >
              {{ tag }}
            </el-tag>
            <template v-if="form.tags.length < 3">
              <el-input
                v-model="inputValue"
                v-if="inputVisible"
                ref="saveTagInput"
                size="mini"
                class="input-new-tag"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
              />
              <el-button
                v-else
                size="small"
                @click="showInput"
                class="button-new-tag"
              >
                New Tag
              </el-button>
            </template>
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
                style="text-align: center;"
                class="mt20mb20"
                indicator-position="outside"
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
import {mapActions} from 'vuex'

export default {
  name: 'ItemCreate',
  data () {
    return {
      form: {
        tags: [],
        title: '',
        files: [],
        content: ''
      },
      images: [],
      inputVisible: false,
      inputValue: ''
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
    },
    handleClose (tag) {
      this.form.tags.splice(this.form.tags.indexOf(tag), 1)
    },
    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm () {
      const inputValue = this.inputValue
      if (inputValue) {
        this.form.tags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Create';
</style>
