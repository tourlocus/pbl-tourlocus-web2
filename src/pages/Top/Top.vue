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


        <div id="Articlecard">
          <article-card v-for="item in article"
          v-bind:key="item.id"
          v-bind:username="item.username"
          v-bind:icon="item.icon"
          v-bind:photo="item.photo"
          v-bind:title="item.title"
          v-bind:content="item.content">
          </article-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Header as CommonHeader} from '../../layouts'
import {SearchForm} from '../../components'
import Vue from 'vue'

Vue.component('article-card', {
  template: '<section class="card">' +
    '<img class="card-img" src="../../assets/photo1.jpg" alt="">' +
    '<div class="card-content">' +
    '<img class="card-icon" src="../../assets/icon1.png">' +
    '<div class="username">' +
    '{{username}}' +
    '</div>' +
    '<h1 class="card-title">{{title}}</h1>' +
    '<p class="card-text">{{content}}</p>' +
    '</div>' +
    '<div class="card-link">' +
    '<a href="#"></a>' +
    '<a href="#">もっと見る</a>' +
    '</div></section>',
  props: ['id', 'username', 'title', 'content']
})

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
          id: '1',
          username: 'ho',
          icon: 'sample.png',
          title: 'samplesample',
          content: 'samplesamplesamnplesample'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import './Top';
</style>
