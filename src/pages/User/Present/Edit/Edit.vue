<template>
  <div class="p-edit-present">
    <div class="container">
      <div class="main">

        <form @submit.prevent="handleSubmit">

        <div class="present">

          <img class="showimg" v-show="image" :src="image" />
          <div class="file">
            写真の選択
            <input type="file" v-on:change="onFileChange">
          </div>

          <div class="cp_ipselect">
            <select required class="cp_sl06" omiyage v-model="presents.present_name">
              <option value="" hidden disabled selected></option>
              <option value="洋菓子">洋菓子</option>
              <option value="和菓子">和菓子</option>
              <option value="キーホルダー">キーホルダー</option>
              <option value="人形">人形</option>
              <option value="飲料">飲料</option>
              <option value="その他">その他</option>
            </select>
            <span class="cp_sl06_highlight"></span>
            <span class="cp_sl06_selectbar"></span>
            <label class="cp_sl06_selectlabel">種類</label>
          </div>

          <div class="cp_ipselect">
            <select class="cp_sl06" required v-model="presents.required">
              <option value="" hidden disabled selected></option>
              <option value="両親">両親</option>
              <option value="友達">友達</option>
              <option value="上司">上司</option>
              <option value="親戚">親戚</option>
            </select>
            <span class="cp_sl06_highlight"></span>
            <span class="cp_sl06_selectbar"></span>
          <label class="cp_sl06_selectlabel">送る相手</label>
          </div>

          <div class="amount">
            <label>人数</label>
            <div class="input">
              <input
                type="number"
                name="present_amount"
                required
                v-model.number="presents.present_amount"
              />人
            </div>
          </div>

          <div class="price">
            <label>単価</label>
            <div class="input">
              <input
                type="number"
                name="present_price"
                required
                v-model.number="presents.present_price"
              />円
            </div>
          </div>

          <div class="w__field mt20mb20">
            <label>感想</label>
            <div class="input">
              <textarea
                required
                name="impression"
                maxlength="255"
                v-model.trim="presents.impression"
              />
            </div>
          </div>

          <div class="w-actionBtn">
            <el-input
              type="submit"
              value="投稿する"
              v-loading="isLoading"
            />
          </div>

        </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {Sleep} from '../../../../utils'
import {mapState} from 'vuex'

export default {
  name: 'EditPresent',
  data () {
    return {
      article_id: '',
      article_name: '',
      presents: {
        present_name: '',
        present_amount: '',
        present_price: '',
        required: '',
        impression: '',
        photo: null
      },
      image: '',
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
    updateIsSubmitLoading (v) {
      this.isSubmitLoading = v
    },
    onFileChange: function (e) {
      e.preventDefault()
      let files = e.target.files
      this.presents.photo = files[0]
      this.createImage(files[0])
    },
    createImage (file) {
      let reader = new FileReader()
      reader.onload = e => {
        this.image = e.target.result
      }
      reader.readAsDataURL(file)
    },
    handleSubmit () {
      const form = new FormData()
      form.append('article_id', this.article_id)
      form.append('present_name', this.presents.present_name)
      form.append('present_amount', this.presents.present_amount)
      form.append('present_price', this.presents.present_price)
      form.append('required', this.presents.required)
      form.append('impression', this.presents.impression)
      form.append('photo', this.presents.photo)

      this.$validator.validateAll().then(async result => {
        if (result) {
          this.updateIsSubmitLoading(true)
          await axios({
            url: `http://localhost:3000/presents/update`,
            method: 'PUT',
            headers: {
              client: this.cred.client,
              uid: this.cred.uid,
              'access-token': this.cred.accessToken,
              'Content-Type': 'multipart/form-data'
            },
            data: form
          })
            .then(() => {
              this.$message('更新しました。')
              this.updateIsSubmitLoading(false)
            })
            .catch(() => {
              this.$message('更新できませんでした。')
              this.updateIsSubmitLoading(false)
            })
        }
      })
    }
  },
  async created () {
    this.updateIsLoading(true)
    await axios({
      url: `http://localhost:3000/presents/edit/${this.$route.params.id}`,
      method: 'GET',
      headers: {
        client: this.cred.client,
        uid: this.cred.uid,
        'access-token': this.cred.accessToken
      }
    })
      .then(async res => {
        this.presents.present_name = res.data.present_name
        this.presents.present_amount = res.data.present_amount
        this.presents.present_price = res.data.present_price
        this.presents.required = res.data.required
        this.presents.impression = res.data.impression
        this.image = 'http://localhost:3000/' + res.data.photo
        this.article_id = res.data.article_id
        this.article_name = res.data.article_name
        this.updateIsLoading(false)
      })
      .catch(async () => {
        await Sleep(2000)
        this.updateIsLoading(false)
        this.$message('記事を取得できませんでした')
      })
  }
}
</script>

<style lang="scss" scoped>
@import "./Edit";
</style>
