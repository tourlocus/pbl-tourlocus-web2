<template>
  <div class="p-top">
    <div class="container">
      <div class="main">
        <div class="tabs">
          <a href="#" class="square_btn">新着順</a>
          <a href="#" class="square_btn">人気順</a>
        </div>

        <section class="card">
          <img class="card-img" src="../../assets/photo1.jpg" alt="">
          <div class="card-content">
            <img class="card-icon" src="../../assets/icon1.png">
            <div class="username">
              {{username}}
            </div>
            <h1 class="card-title">{{title}}</h1>
            <p class="card-text">{{content}}</p>
          </div>
          <div class="card-link">
            <a href="#"></a>
            <a href="#">もっと見る</a>
          </div>
        </section>

        <section class="card">
          <img class="card-img" src="../../assets/photo1.jpg" alt="">
          <div class="card-content">
            <img class="card-icon" src="../../assets/icon1.png">
            <div class="username">
              {{username}}
            </div>
            <h1 class="card-title">{{title}}2</h1>
            <p class="card-text">content</p>
          </div>
          <div class="card-link">
            <a href="#"></a>
            <a href="#">もっと見る</a>
          </div>
        </section>

        <section class="card">
          <img class="card-img" src="../../assets/photo1.jpg" alt="">
          <div class="card-content">
            <img class="card-icon" src="../../assets/icon1.png">
            <div class="username">
              {{username}}
            </div>
            <h1 class="card-title">{{title}}3</h1>
            <p class="card-text" id="lengthcheck">{{content}}</p>
          </div>
          <div class="card-link">
            <a href="#"></a>
            <a href="#">もっと見る</a>
          </div>
        </section>

        <section class="card">
          <img class="card-img" src="../../assets/photo1.jpg" alt="">
          <div class="card-content">
            <img class="card-icon" src="../../assets/icon1.png">
            <div class="username">
              {{username}}
            </div>
            <h1 class="card-title">{{title}}4</h1>
            <p class="card-text">{{content}}</p>
          </div>
          <div class="card-link">
            <a href="#"></a>
            <a href="#">もっと見る</a>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
import {Header as CommonHeader} from '../../layouts'
import {SearchForm} from '../../components'

export default {
  name: 'Top',
  components: {
    CommonHeader,
    SearchForm
  },
  data () {
    return {
      articles: [
        {
        userid: '',
        username: '',
        icon: '',
        title: '沖縄に行ってきた',
        content: '海外旅行ではないのでパスポートもいらず、安価で南国の雰囲気を満喫することができます。そんな魅力ある沖縄旅行に行ってきました！今回は、実際に行った沖縄旅行の体験談について詳しく紹介していきます！沖縄旅行の参考にしてみてください♪'
        }
        ],
      username: '@hogehoge',
      title: '沖縄に行ってきた',
      content: '海外旅行ではないのでパスポートもいらず、安価で南国の雰囲気を満喫することができます。そんな魅力ある沖縄旅行に行ってきました！今回は、実際に行った沖縄旅行の体験談について詳しく紹介していきます！沖縄旅行の参考にしてみてください♪'
    }
    },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import './Top';
</style>
