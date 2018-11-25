<template>
  <div class="c-itemcard">

    <div class="card-header">
      <p>{{ updated_at | dateFormat }}</p>
      <div class="card-title">
        <router-link :to="`/users/${name}`">
          <img :src="`${img}`" />
        </router-link>
        <router-link
          :to="`/users/${name}/items/${id}`"
          class="item-article-title"
        >
          {{title}}
        </router-link>
      </div>
    </div>

    <div class="card-tag-name">
      <router-link
        :to="`/tags/${tag}`"
        v-for="(tag, i) in tags"
        :key="i"
      >
        {{tag.tag}}
      </router-link>
    </div>

    <div class="card-body">
    </div>

  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'ItemCardComponent',
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    tags: {
      type: Array,
      default: () => null,
      required: false
    },
    updated_at: {
      type: String,
      default: '',
      required: true
    },
    img: {
      type: String,
      default: '',
      required: true
    },
    name: {
      type: String,
      default: '',
      required: true
    },
    id: {
      type: Number,
      default: 99999,
      required: true
    }
  },
  filters: {
    dateFormat (v) {
      return moment(v).format('YYYY年MM月DD日') + 'に更新'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./ItemCard";
</style>
