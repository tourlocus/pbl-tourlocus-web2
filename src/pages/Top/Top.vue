<template>
  <div class="p-top">
    <div class="container">
      <div class="main">

        <div class="tabs">
          <a href="#" class="square_btn">新着順</a>
          <a href="#" class="square_btn">人気順</a>
        </div>
        <ItemCard v-for="item in articles"
        v-bind:key="item.id"
        >
        </ItemCard>
      </div>
    </div>
  </div>
</template>

<script>
import {Header as CommonHeader} from '../../layouts'
import {SearchForm, ItemCard} from '../../components'

export default {
  name: 'Top',
  components: {
    CommonHeader,
    SearchForm,
    ItemCard
  },
  data () {
    return {
      articles: [
        {
          id: '1',
          username: 'hogehoge',
          icon: 'sample.png',
          photo: 'sample.jpg',
          title: 'タイトル',
          content: '本文'
        },
        {
          id: '1',
          username: 'hogehoge',
          icon: 'sample.png',
          photo: 'sample.jpg',
          title: 'タイトル',
          content: '本文'
        },
        {
          id: '1',
          username: 'hogehoge',
          icon: 'sample.png',
          photo: 'sample.jpg',
          title: 'タイトル',
          content: '本文'
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
