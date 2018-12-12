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
                autocomplete="off"
                v-model.trim="form.email"
                v-validate="{required: true}"
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
                autocomplete="off"
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
            <el-input
              type="submit"
              value="ログイン"
              v-loading="isLoading"
            />
          </div>

        </form>

      </div>
    </div>
  </div>
</template>

<script>
import {User} from '../../api'
import {mapActions} from 'vuex'

export default {
  name: 'SingIn',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
    ...mapActions('user', ['Login']),
    updateIsLoading (v) {
      this.isLoading = v
    },
    handleSubmit () {
      this.$validator.validateAll().then(async result => {
        if (result) {
          this.updateIsLoading(true)
          await User.SignInRequest(this.form)
            .then(res => {
              this.updateIsLoading(false)
              this.Login(res)
            })
            .catch(() => {
              this.$message('ログインに失敗しました')
              this.updateIsLoading(false)
            })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./SignIn";
</style>
