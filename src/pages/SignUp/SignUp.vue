<template>
  <div class="p-sign-up">
    <div class="container">
      <div class="main">
        <div class="title">
          <h3>新規登録</h3>
        </div>

        <form
          class="form"
          @submit.prevent="handleSubmit"
        >
          <div class="w__field">
            <label>ユーザー名</label>
            <div class="input">
              <input
                type="text"
                placeholder="hogehoge"
                v-model.trim="form.name"
                name="name"
                autocomplete="off"
                v-validate="'required|max:20'"
              />
            </div>
            <div
              class="form__error"
              v-if="errors.has('name')"
            >
              ユーザー名は必須です
            </div>
          </div>

          <div class="w__field mt20mb20">
            <label>メールアドレス</label>
            <div class="input">
              <input
                name="email"
                type="email"
                placeholder="hogehoge@example.com"
                v-validate="'required'"
                autocomplete="off"
                v-model.trim="form.email"
              />
            </div>
            <div
              class="form__error"
              v-if="errors.has('email')"
            >
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
                <div
                  class="form__error"
                  v-if="errors.has('password')"
                >
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

            <div
              class="form__error"
              v-if="passwordCheck"
            >
              パスワードが一致していません
            </div>
          </div>

          <div class="w__field">
            <label>生年月日</label>
            <div class="input">
              <input
                type="text"
                name="birthday"
                placeholder="1996-04-01"
                maxlength="10"
                v-validate="'required|date_format:YYYY-MM-DD'"
                autocomplete="off"
                v-model.trim="form.birthday"
              />
            </div>

            <div
              class="form__error"
              v-if="birthdayCheck"
            >
              ありえない年齢が入力されています
            </div>

            <div
              class="form__error"
              v-else-if="errors.has('birthday') && !birthdayCheck"
            >
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
                    value="0"
                    v-validate="'required|included:0,1'"
                    v-model="form.gender"
                  />
                  <label for="man">男 性</label>
                </div>

                <div class="w__col">
                  <input
                    type="radio"
                    id="woman"
                    name="gender"
                    value="1"
                    v-model="form.gender"
                  />
                  <label for="woman">女性</label>
                </div>

              </div>
            </div>

            <div
              class="form__error"
              v-if="errors.has('gender')"
            >
              性別は必須です
            </div>
          </div>

          <div class="actionBtn">
            <el-input
              type="submit"
              value="登録する"
              v-loading="isLoading"
            />
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
=======
import {User} from '../../api'
>>>>>>> origin/release
import {mapActions} from 'vuex'

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
      confirmPassword: '',
      isLoading: false
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

    birthdayCheck () {
      if (this.form.birthday) {
        const inputYear = new Date(this.form.birthday).getFullYear()
        const NowYear = new Date().getFullYear()
        if (NowYear - inputYear > 100) {
          return true
        } else {
          return false
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
<<<<<<< HEAD
    ...mapActions('auth', ['signUp']),
=======
    ...mapActions('user', ['Login']),
    updateIsLoading (v) {
      this.isLoading = v
    },
>>>>>>> origin/release
    handleSubmit () {
      this.$validator.validateAll().then(async result => {
        if (result) {
<<<<<<< HEAD
          this.signUp(this.form)
=======
          this.updateIsLoading(true)
          await User.signUpRequest(this.form)
            .then(res => {
              this.updateIsLoading(false)
              this.Login(res)
            })
            .catch(() => {
              this.$message('新規登録に失敗しました。')
              this.updateIsLoading(false)
            })
>>>>>>> origin/release
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './SignUp';
</style>
