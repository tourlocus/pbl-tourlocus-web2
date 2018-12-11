<template>
  <div class="p-create-present">
    <div class="container">

    <button @click="addmain" class="addmain">+</button>
    <button @click="deletemain" class="deletemain">-</button>

      <div class="main">

        <form
          @submit.prevent="handleSubmit"
          class="w__form"
        >

          <div class="cp_ipselect">
          <select class="cp_sl06" v-model="article_id">
            <option value="" hidden disabled selected></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <span class="cp_sl06_highlight"></span>
          <span class="cp_sl06_selectbar"></span>
        <label class="cp_sl06_selectlabel">記事選択</label>
        </div>
        <div class="present" v-if="form3">

          <img class="showimg" v-show="image3" :src="image3" />
          <div class="file">
            写真の選択
            <input type="file" v-on:change="onFileChange3">
          </div>

          <div class="cp_ipselect">
            <select class="cp_sl06" omiyage v-model="presents[2].present_type">
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
            <select class="cp_sl06" required v-model="presents[2].required">
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
                name="present_amount3"
                required
                v-model.number="presents[2].present_amount"
              />人
            </div>
          </div>

          <div class="price">
            <label>単価</label>
            <div class="input">
              <input
                type="number"
                name="present_price3"
                required
                v-model.number="presents[2].present_price"
              />円
            </div>
          </div>

          <div class="w__field mt20mb20">
            <label>感想</label>
            <div class="input">
              <textarea
                name="impression3"
                required
                v-model.trim="presents[2].impression"
              />
            </div>
          </div>

        </div>

        <div class="present" v-if="form2">

          <img class="showimg" v-show="image2" :src="image2" />
          <div class="file">
            写真の選択
            <input type="file" v-on:change="onFileChange2">
          </div>

          <div class="cp_ipselect">
            <select class="cp_sl06" omiyage v-model="presents[1].present_type">
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
            <select class="cp_sl06" required v-model="presents[1].required">
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
                name="present_amount2"
                required
                v-model.number="presents[1].present_amount"
              />人
            </div>
          </div>

          <div class="price">
            <label>単価</label>
            <div class="input">
              <input
                type="number"
                name="present_price2"
                required
                v-model.number="presents[1].present_price"
              />円
            </div>
          </div>

          <div class="w__field mt20mb20">
            <label>感想</label>
            <div class="input">
              <textarea
                name="impression2"
                required
                v-model.trim="presents[1].impression"
              />
            </div>
          </div>

        </div>

        <div class="present">

          <img class="showimg" v-show="image1" :src="image1" />
          <div class="file">
            写真の選択
            <input type="file" v-on:change="onFileChange1">
          </div>

          <div class="cp_ipselect">
            <select class="cp_sl06" omiyage v-model="presents[0].present_type">
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
            <select class="cp_sl06" required v-model="presents[0].required">
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
                v-model.number="presents[0].present_amount"
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
                v-model.number="presents[0].present_price"
              />円
            </div>
          </div>

          <div class="w__field mt20mb20">
            <label>感想</label>
            <div class="input">
              <textarea
                required
                name="impression"
                v-model.trim="presents[0].impression"
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
export default {
  name: 'CreatePresent',
  data () {
    return {
      isLoading: false,
      article_name: '記事a',
      article_id: '1',
      presents: [
        {
          present_name: '洋菓子',
          present_amount: '1',
          present_price: '1',
          required: '両親',
          impression: 'impression1',
          photo: null
        },
        {
          present_name: '洋菓子',
          present_amount: '2',
          present_price: '2',
          required: '友達',
          impression: 'impression2',
          photo: null
        },
        {
          present_name: '洋菓子',
          present_amount: '3',
          present_price: '3',
          required: '親戚',
          impression: 'impression3',
          photo: null
        }
      ],
      form2: false,
      form3: false,
      image1: '',
      image2: '',
      image3: ''
    }
  },
  methods: {
    updateIsLoading (v) {
      this.isLoading = v
    },
    onFileChange1: function (e) {
      e.preventDefault()
      let files = e.target.files
      this.presents[0].photo = files[0]
      this.createImage1(files[0])
    },
    createImage1 (file) {
      let reader = new FileReader()
      reader.onload = e => {
        this.image1 = e.target.result
      }
      reader.readAsDataURL(file)
    },
    onFileChange2: function (e) {
      e.preventDefault()
      let files = e.target.files
      this.presents[1].photo = files[0]
      this.createImage2(files[0])
    },
    createImage2 (file) {
      let reader = new FileReader()
      reader.onload = e => {
        this.image2 = e.target.result
      }
      reader.readAsDataURL(file)
    },
    onFileChange3: function (e) {
      e.preventDefault()
      let files = e.target.files
      this.presents[2].photo = files[0]
      this.createImage3(files[0])
    },
    createImage3 (file) {
      let reader = new FileReader()
      reader.onload = e => {
        this.image3 = e.target.result
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
      const form = new FormData()
      form.append('article_id', this.article_id)
      form.append('photo1', this.presents[0].photo)
      form.append('photo2', this.presents[1].photo)
      form.append('photo3', this.presents[2].photo)

      var status

      axios.post('http://localhost:3000/presents/create', {
        presents: [
          {
            present_name: this.presents[0].present_name,
            present_amount: this.presents[0].present_amount,
            present_price: this.presents[0].present_price,
            required: this.presents[0].required,
            impression: this.presents[0].impression,
            image: "image1",
            impression: this.presents[0].impression
          },
          {
            present_name: this.presents[1].present_name,
            present_amount: this.presents[1].present_amount,
            present_price: this.presents[1].present_price,
            required: this.presents[1].required,
            impression: this.presents[1].impression,
            image: "image2",
            impression: this.presents[1].impression
          },
          {
            present_name: this.presents[2].present_name,
            present_amount: this.presents[2].present_amount,
            present_price: this.presents[2].present_price,
            required: this.presents[2].required,
            impression: this.presents[2].impression,
            image: "image3",
            impression: this.presents[2].impression
          }
        ],
        article_id: this.article_id
      }
      ).then(response => {
        axios.post('http://localhost:3000/presents/create_image', form)
      }).catch(err => {
        console.log('err:', err)
      })
      this.$validator.validateAll().then(async result => {
        if (result) {
          this.updateIsLoading(true)
          await Item.createItem(this.cred, this.form)
            .then(() => {
              this.updateIsLoading(false)
            })
            .catch(() => {
              this.$message('投稿できませんでした')
              this.updateIsLoading(false)
            })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./Create";
</style>
