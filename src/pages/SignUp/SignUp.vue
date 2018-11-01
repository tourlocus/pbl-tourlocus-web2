<template>
  <div class="p-sign-up">
    <div class="container">
      <div class="main">
        <div class="title">
          <h3>新規登録</h3>
        </div>

        <form
          @submit.prevent="handleSubmit"
          class="form"
        >
          <div class="w__field">
            <label>ユーザー名</label>
            <div class="input">
              <input
                type="text"
                v-model.trim="form.name"
                name="name"
                autocomplete="off"
                v-validate="'required|max:20'"
              />
            </div>
            <div v-if="errors.has('name')">
              ユーザー名は必須です
            </div>
          </div>

          <div class="w__field mt20mb20">
            <label>メールアドレス</label>
            <div class="input">
              <input
                name="email"
                type="email"
                v-validate="'required'"
                autocomplete="off"
                v-model.trim="form.email"
              />
            </div>
            <div v-if="errors.has('email')">
              メールアドレスは必須です
            </div>
          </div>

          <div class="w__password mt20mb20">
            <div class="w__row">
              <div class="w__col">
                <label>パスワード</label>
                <div class="input">
                  <input
                    type="password"
                    name="password"
                    v-validate="'required|min:8'"
                    v-model.trim="form.password"
                  />
                </div>
                <div v-if="errors.has('password')">
                  パスワードは必須です
                </div>
                <small v-else-if="form.password <= 8">
                  パスワードは8文字以上で入力してください
                </small>
              </div>

              <div class="w__col">
                <label>確認用パスワード</label>
                <div class="input">
                  <input
                    type="password"
                    v-model.trim="confirmPassword"
                  />
                </div>
              </div>
            </div>

            <div v-if="passwordCheck">
              パスワードが一致していません
            </div>
          </div>

          <div class="w__field">
            <label>生年月日</label>
            <div class="input">
              <input
                type="text"
                name="birthday"
                v-validate="'required'"
                autocomplete="off"
                v-model.trim="form.birthday"
              />
            </div>

            <div v-if="errors.has('birthday')">
              生年月日は必須です
            </div>
          </div>

          <div class="gender mt20mb20">
            <div class="w__gender">
              <label>性別</label>
              <div class="w__row">
                <div class="w__col">
                  <input
                    type="radio"
                    id="man"
                    name="gender"
                    v-validate="'required'"
                    v-model="form.gender"
                  />
                  <label for="man">男 性</label>
                </div>

                <div class="w__col">
                  <input
                    type="radio"
                    id="woman"
                    name="gender"
                    v-model="form.gender"
                  />
                  <label for="woman">女性</label>
                </div>

              </div>
            </div>

            <div v-if="errors.has('gender')">
              性別は必須です
            </div>
          </div>

          <div class="actionBtn">
            <input
              type="submit"
              value="登録する"
            />
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SignUp',
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        birthday: '',
        gender: ''
      },
      confirmPassword: ''
    }
  },
  computed: {
    // パスワードチェック
    passwordCheck () {
      if (this.form.password && this.confirmPassword) {
        if (this.form.password === this.confirmPassword) {
          return false
        } else {
          return true
        }
      }
    },

    //
    formValidate () {
      if (
        this.name &&
        this.gender &&
        this.passwordCheck === false
      ) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$validator.validateAll().then(result => {
        if (result) {
          console.log('ok')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './SignUp';
</style>
