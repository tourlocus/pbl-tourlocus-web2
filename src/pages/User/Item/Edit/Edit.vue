<template>
  <div class="p-itemEdit">
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
                v-validate="'required'"
                v-model.trim="form.title"
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
            <template v-if="form.file.length > 0">
              <el-carousel
                style="text-align: center"
                class="mt20mb20"
                indicator-position="outside"
              >
                <el-carousel-item
                  v-for="(image, index) in form.file"
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
                v-model.trim="form.content"
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
import {Item} from '../../../../api'
import {tagFormat, mediaFormat} from '../../../../utils/arrayFormat'
// import cloneDeep from 'lodash/cloneDeep'

export default {
  name: 'ItemEdit',
  components: {
    InputTag
  },
  data () {
    return {
      form: {
        title: '',
        content: '',
        file: [],
        tags: []
      },
      inputVisible: false,
      inputValue: ''
    }
  },
  computed: {},
  methods: {
    handleChangeFile (e) {
      e.preventDefault()

      if (e.target.files.length !== 0) {
        const files = e.target.files
        this.form.file.length = 0

        for (let i = 0; i < files.length; i++) {
          this.showImage(files[i])
        }
      }
    },
    showImage (file) {
      const reader = new FileReader()
      const vm = this
      reader.onload = e => {
        vm.form.file.push(e.target.result)
      }
      reader.readAsDataURL(file)
    },
    handleSubmit () {
      this.$validator.validateAll().then(result => {
        if (result) {
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

  },
  async created () {
    const id = this.$route.params.id
    const {title, content, mediaFiles, tags} = await Item.getEdit(id)
    this.form.title = title
    this.form.content = content
    this.form.file = mediaFormat(mediaFiles)
    this.form.tags = tagFormat(tags)
  }
}
</script>

<style lang="scss" scoped>
@import './Edit';
</style>
