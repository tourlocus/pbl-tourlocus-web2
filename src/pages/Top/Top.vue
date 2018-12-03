<template>
  <div class="p-top">
    <div class="container">
      <div class="main">

        <div class="tabs">
          <a href="#" class="square_btn">新着順</a>
          <a href="#" class="square_btn">人気順</a>
        </div>

        <div id="Articlecard">
          <article-card v-for="item in article"
          v-bind:key="item.id"
          v-bind:username="item.username"
          v-bind:icon="item.icon"
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
import ArticleCard from './ArticleCard'

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
          id: '',
          username: '',
          icon: '',
          title: '',
          content: ''
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
