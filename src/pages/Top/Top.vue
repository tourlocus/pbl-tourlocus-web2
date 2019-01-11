<template>
  <div class="p-top">
    <div class="container">
      <div class="main">

        <div class="tabs">
          <a href="#" class="square_btn" v-on:click="ChangeNew" >新着順</a>
          <a href="#" class="square_btn" v-on:click="ChangePopular">人気順</a>
        </div>
        <ItemCard v-show="favorite == false" v-for="item in items"
        v-bind:key="item.length"
        :id="item.id"
        :user_id="item.user_id"
        :user_name="item.user_name"
        :user_icon="item.user_icon"
        :media="item.media"
        :title="item.title"
        :content="item.content"
        >
        </ItemCard>

        <ItemCard v-show="favorite == true" v-for="item in popular"
        v-bind:key="item.length"
        :id="item.id"
        :user_id="item.user_id"
        :user_name="item.user_name"
        :user_icon="item.user_icon"
        :media="item.media"
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
      items: [],
      popular: [],
      favorite: false
    }
  },
  methods: {
    ChangePopular: function () {
      if (this.favorite === false) {
        this.favorite = true
      }
    },
    ChangeNew: function () {
      if (this.favorite === true) {
        this.favorite = false
      }
    }
  },
  created: function () {
    const self = this
    Axios.get('http://localhost:3000/articles')
      .then((res) => {
        self.items = res.data.items
        self.popular = res.data.popular
      })
  }
}
</script>

<style lang="scss" scoped>
@import './Top';
</style>
