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
        :id="item.id"
        :userid="item.user_id"
        :username="item.username"
        :icon="item.icon"
        :photo="item.photo"
        :title="item.title"
        :content="item.content"
        >
        </ItemCard>
      </div>
    </div>
  </div>
</template>

<script>
import {Header as CommonHeader} from '../../layouts'
import {SearchForm, ItemCard} from '../../components'
import Axios from 'axios'
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
      ],
      favorite: 'false'
    }
  },
  methods: {
  },
  created: function () {
    const self = this
    Axios.get('http://localhost:3000/articles')
      .then((res) => {
        self.articles = res.data
      })
  }
}
</script>

<style lang="scss" scoped>
@import './Top';
</style>
