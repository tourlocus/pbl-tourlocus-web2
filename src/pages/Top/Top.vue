<template>
  <div class="p-top">
    <div class="container">
      <div class="main">

        <div class="tabs">
          <a href="#" class="square_btn">新着順</a>
          <a href="#" class="square_btn">人気順</a>
        </div>

        <div id="ItemCard">
          <ItemCard v-for="item in articles"
          v-bind:key="item.id"
          v-bind:username="item.username"
          v-bind:icon="item.icon"
          v-bind:photo="item.photo"
          v-bind:title="item.title"
          v-bind:content="item.content">
          </ItemCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Header as CommonHeader} from '../../layouts'
import {SearchForm, ItemCard} from '../../components'

new Vue({
  el: '#ItemCard',
  data: {
    articles: [
      {
        id: 1,
        username: 'hogehoge',
        photo: '../../assets.pphoto1.jpg',
        icon: '../../accets.icon1.png',
        title: 'title',
        content: 'main_text'
      }
    ]
  }
})

export default {
  name: 'Top',
  components: {
    CommonHeader,
    SearchForm,
    ItemCard
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import './Top';
</style>
