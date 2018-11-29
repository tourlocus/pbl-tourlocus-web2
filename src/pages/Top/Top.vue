<template>
  <div class="p-top">
    <div class="container">
      <div class="main">
        <div class="tabs">
          <a href="#" class="square_btn">新着順</a>
          <a href="#" class="square_btn">人気順</a>
        </div>

        <div class="memo">
          <span class="masking-tape">
          </span><p>おきなわ</p>
        </div>

        <section class="card">
          <img class="card-img" src="../../assets/photo1.jpg" alt="">
          <div class="card-content">
            <img class="card-icon" src="../../assets/icon1.png">
            <div class="username">
              {{username}}
            </div>
            <h1 class="card-title">沖縄に行ってきた</h1>
            <p class="card-text">沖縄といえばやはり海なのですが、今回私は海ではなく、公園にフォーカスを当ててみました</p>
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
      username: '@hogehoge',
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
