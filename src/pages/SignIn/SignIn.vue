<template>
  <div class="p-sign-in">
    <div class="container">
      <div class="main">
        <div class="title">
          <h3>新規登録</h3>
        </div>

        <form
          class="form"
          @submit.prevent="handleSubmit"
        >

          <div class="w__field mt20mb20">
            <label>メールアドレス</label>
            <div class="input">
              <input
                type="email"
                name="email"
                v-model.trim="form.email"
                v-validate="'required'"
              />
            </div>
            <div
              class="form__error"
              v-if="errors.has('email')"
            >
              メールアドレスが入力されていません
            </div>
          </div>

          <div class="w__field mt20mb20">
            <label>パスワード</label>
            <div class="input">
              <input
                type="password"
                name="password"
                v-model.trim="form.password"
                v-validate="'required'"
              />
            </div>
            <div
              class="form__error"
              v-if="errors.has('password')"
            >
              パスワードが入力されていません
            </div>
          </div>

          <div class="actionBtn">
            <input
              type="submit"
              value="ログイン"
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
  name: 'SingIn',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['signIn']),
    handleSubmit () {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.signIn(this.form)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./SignIn";
</style>
