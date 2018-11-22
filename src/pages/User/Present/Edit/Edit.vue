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
          <select class="cp_sl06" required v-model="article_id">
            <option value="" hidden disabled selected></option>
            <option value="item1">item1</option>
            <option value="item2">item2</option>
            <option value="item3">item3</option>
            <option value="item4">item4</option>
          </select>
          <span class="cp_sl06_highlight"></span>
          <span class="cp_sl06_selectbar"></span>
          <label class="cp_sl06_selectlabel">記事選択</label>
        </div>

        <div class="present" v-if="form3">

          <div class="w__field mt20mb20">
            <label>商品名</label>
            <div class="input">
              <input
                type="text"
                name="present_name3"
                required
                v-model.trim="presents[2].present_name"
              />
            </div>
          </div>

          <div class="amount">
            <label>個数</label>
            <div class="input">
              <input
                type="text"
                name="present_amount3"
                required
                v-model.trim="presents[2].present_amount"
              />
            </div>
          </div>

          <div class="price">
            <label>価格</label>
            <div class="input">
              <input
                type="text"
                name="present_price3"
                required
                v-model.trim="presents[2].present_price"
              />
            </div>
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
          <img class="showimg" v-show="presents[2].photo" :src="presents[2].photo" />

          <div class="file">
            ファイルの選択
            <input type="file" v-on:change="onFileChange3">
          </div>
        </div>

        <div class="present" v-if="form2">

          <div class="w__field mt20mb20">
            <label>商品名</label>
            <div class="input">
              <input
                type="text"
                name="present_name2"
                required
                v-model.trim="presents[1].present_name"
              />
            </div>
          </div>

          <div class="amount">
            <label>個数</label>
            <div class="input">
              <input
                type="text"
                name="present_amount2"
                required
                v-model.trim="presents[1].present_amount"
              />
            </div>
          </div>

          <div class="price">
            <label>価格</label>
            <div class="input">
              <input
                type="text"
                name="present_price2"
                required
                v-model.trim="presents[1].present_price"
              />
            </div>
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

          <img class="showimg" v-show="presents[1].photo" :src="presents[1].photo" />
          <div class="file">
            ファイルの選択
            <input type="file" v-on:change="onFileChange2">
          </div>

        </div>

        <div class="present">

          <div class="w__field mt20mb20">
            <label>商品名</label>
            <div class="input">
              <input
                type="text"
                name="present_name"
                required
                v-model.trim="presents[0].present_name"
              />
            </div>
          </div>

          <div class="amount">
            <label>個数</label>
            <div class="input">
              <input
                type="text"
                name="present_amount"
                required
                v-model.trim="presents[0].present_amount"
              />
            </div>
          </div>

          <div class="price">
            <label>価格</label>
            <div class="input">
              <input
                type="text"
                name="present_price"
                required
                v-model.trim="presents[0].present_price"
              />
            </div>
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

          <img class="showimg" v-show="presents[0].photo" :src="presents[0].photo" />
          <div class="file">
            ファイルの選択
            <input type="file" v-on:change="onFileChange1">
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
  name: 'CreatePresent',
  data () {
    return {
      article_id: '',
      presents: [
        {
          present_name: '',
          present_amount: '',
          present_price: '',
          required: '',
          impression: '',
          photo: ''
        },
        {
          present_name: '',
          present_amount: '',
          present_price: '',
          required: '',
          impression: '',
          photo: ''
        },
        {
          present_name: '',
          present_amount: '',
          present_price: '',
          required: '',
          impression: '',
          photo: ''
        }
      ],
      form2: false,
      form3: false
    }
  },
  methods: {
    onFileChange1 (e) {
      let files = e.target.files || e.dataTransfer.files
      this.createImage1(files[0])
    },
    createImage1 (file) {
      let reader = new FileReader()
      reader.onload = e => {
        this.presents[0].photo = e.target.result
      }
      reader.readAsDataURL(file)
    },
    onFileChange2 (e) {
      let files = e.target.files || e.dataTransfer.files
      this.createImage2(files[0])
    },
    createImage2 (file) {
      let reader = new FileReader()
      reader.onload = e => {
        this.presents[1].photo = e.target.result
      }
      reader.readAsDataURL(file)
    },
    onFileChange3 (e) {
      let files = e.target.files || e.dataTransfer.files
      this.createImage3(files[0])
    },
    createImage3 (file) {
      let reader = new FileReader()
      reader.onload = e => {
        this.presents[2].photo = e.target.result
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
      console.log(JSON.stringify(this.presents) + JSON.stringify(this.article_id))
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./Edit";
</style>
