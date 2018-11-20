<template>
  <div class="p-edit-present">
    <div class="container">

    <button @click="addmain" class="addmain">+</button>
    <button @click="deletemain" class="deletemain">-</button>

      <div class="main">
        <form
          @submit.prevent="handleSubmit"
          class="w__form"
        >
        <div class="cp_ipselect">
          <select class="cp_sl06" required>
            <option value="" hidden disabled selected></option>
            <option value="1">aaa</option>
            <option value="1">iii</option>
            <option value="1">uuu</option>
            <option value="1">eee</option>
            <option value="1">ooo</option>
          </select>
          <span class="cp_sl06_highlight"></span>
          <span class="cp_sl06_selectbar"></span>
          <label class="cp_sl06_selectlabel">記事選択</label>
        </div>

        <div class="present" v-show="form3">

          <div class="w__field mt20mb20">
            <label>商品名</label>
            <div class="input">
              <input
               type="text"
                name="title"
              />
            </div>
            <div
              class="form__errors"
              v-if="errors.has('title')"
            >
              商品名は必須です
            </div>
          </div>

          <div class="amount">
            <label>個数</label>
            <div class="input">
              <input
                type="text"
              name="amount"
              />
            </div>
            <div
              class="form__errors"
              v-if="errors.has('amount')"
            >
              個数は必須です
            </div>
          </div>

          <div class="price">
            <label>価格</label>
            <div class="input">
              <input
                type="text"
                name="price"
              />
            </div>
            <div
              class="form__errors"
              v-if="errors.has('price')"
            >
              価格は必須です
            </div>
          </div>

          <div class="cp_ipselect">
            <select class="cp_sl06" required>
              <option value="" hidden disabled selected></option>
              <option value="1">両親</option>
              <option value="2">友達</option>
              <option value="3">上司</option>
              <option value="4">親戚</option>
            </select>
            <span class="cp_sl06_highlight"></span>
            <span class="cp_sl06_selectbar"></span>
          <label class="cp_sl06_selectlabel">送る相手</label>
          </div>

          <div class="w__field mt20mb20">
            <label>感想</label>
            <div class="input">
              <textarea
                name="content"
              />
            </div>
            <div
              class="form__error"
              v-if="errors.has('content')"
            >
              感想は必須です
            </div>
          </div>

          <div class="file">
            ファイルの選択
            <input type="file" v-on:change="handleChange3">
          </div>
          <img class="showimg" v-show="showImage3" :src="showImage3" />
        </div>

        <div class="present" v-show="form2">

          <div class="w__field mt20mb20">
            <label>商品名</label>
            <div class="input">
              <input
                type="text"
                name="title"
              />
            </div>
            <div
              class="form__errors"
              v-if="errors.has('title')"
            >
              商品名は必須です
            </div>
          </div>

          <div class="amount">
            <label>個数</label>
            <div class="input">
              <input
                type="text"
                name="amount"
              />
            </div>
            <div
              class="form__errors"
              v-if="errors.has('amount')"
            >
              個数は必須です
            </div>
          </div>

          <div class="price">
            <label>価格</label>
            <div class="input">
              <input
                type="text"
                name="price"
              />
            </div>
            <div
              class="form__errors"
              v-if="errors.has('price')"
            >
              価格は必須です
            </div>
          </div>

          <div class="cp_ipselect">
            <select class="cp_sl06" required>
            <option value="" hidden disabled selected></option>
            <option value="1">両親</option>
            <option value="2">友達</option>
            <option value="3">上司</option>
            <option value="4">親戚</option>
            </select>
            <span class="cp_sl06_highlight"></span>
            <span class="cp_sl06_selectbar"></span>
          <label class="cp_sl06_selectlabel">送る相手</label>
          </div>

          <div class="w__field mt20mb20">
            <label>感想</label>
            <div class="input">
              <textarea
                name="content"
              />
            </div>
            <div
              class="form__error"
              v-if="errors.has('content')"
            >
              感想は必須です
            </div>
          </div>

          <div class="file">
            ファイルの選択
            <input type="file" v-on:change="handleChangeFile2">
          </div>
          <img class="showimg" v-show="showImage2" :src="showImage2" />
        </div>

        <div class="present">

          <div class="w__field mt20mb20">
            <label>商品名</label>
            <div class="input">
              <input
                type="text"
                name="title"
              />
            </div>
          <div
            class="form__errors"
            v-if="errors.has('title')"
          >
            商品名は必須です
          </div>
        </div>

        <div class="amount">
          <label>個数</label>
          <div class="input">
            <input
              type="text"
              name="amount"
            />
          </div>
          <div
            class="form__errors"
            v-if="errors.has('amount')"
          >
            個数は必須です
          </div>
        </div>

        <div class="price">
          <label>価格</label>
          <div class="input">
            <input
              type="text"
              name="price"
            />
          </div>
          <div
            class="form__errors"
            v-if="errors.has('price')"
          >
            価格は必須です
          </div>
        </div>

        <div class="cp_ipselect">
          <select class="cp_sl06" required>
          <option value="" hidden disabled selected></option>
          <option value="1">両親</option>
          <option value="2">友達</option>
          <option value="3">上司</option>
          <option value="4">親戚</option>
          </select>
          <span class="cp_sl06_highlight"></span>
          <span class="cp_sl06_selectbar"></span>
        <label class="cp_sl06_selectlabel">送る相手</label>
        </div>

        <div class="w__field mt20mb20">
          <label>感想</label>
          <div class="input">
            <textarea
              name="content"
            />
          </div>
          <div
            class="form__error"
            v-if="errors.has('content')"
          >
            感想は必須です
          </div>
        </div>

        <div class="file">
          ファイルの選択
          <input
          type="file"
          v-on:change="handleChangeFile1"
          />
            <img class="showimg"
            v-show="uploadedImage1"
            :src="uploadedImage1"
            />
        </div>
        <div class="actionBtn">
          <input
            type="submit"
            value="投稿する"
          />
        </div>
      </div>
      </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditPresent',
  data () {
    return {
      name: '',
      uploadedImage1: '',
      uploadedImage2: '',
      uploadedImage3: '',
      form2: false,
      form3: false
    }
  },
  methods: {
    handleChangeFile1 (e) {
      let files = e.target.files || e.dataTransfer.files
      this.showImage1(files[0])
    },
    handleChangeFile2 (e) {
      e.preventDefault()
      if (e.target.files.length !== 0) {
        this.images.lemgth = 0
        const files = e.target.files
        this.showImage2(files[0])
      }
    },
    handleChangeFile3 (e) {
      e.preventDefault()
      if (e.target.files.length !== 0) {
        this.images.lemgth = 0
        let files = e.target.files
        this.showImage3(files[0])
      }
    },
    showImage1 (file) {
      const reader = new FileReader()
      reader.onload = e => {
        this.uploadedImage1 = e.target.result
      }
      reader.readAsDataURL(file)
    },
    showImage2 (file) {
      const reader = new FileReader()
      reader.onload = e => {
        this.uploadedImage2 = e.target.result
      }
      reader.readAsDataURL(file)
    },
    showImage3 (file) {
      const reader = new FileReader()
      reader.onload = e => {
        this.uploadedImage3 = e.target.result
      }
      reader.readAsDataURL(file)
    },
    addmain () {
      if (this.form2 === false && this.form3 === false) {
        this.form2 = true
      } else if (this.form2 === true && this.form3 === false) {
        this.form3 = true
      }
    },
    deletemain () {
      if (this.form2 === true && this.form3 === true) {
        this.form3 = false
      } else if (this.form2 === true && this.form3 === false) {
        this.form2 = false
      }
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
@import "./Edit";
</style>
