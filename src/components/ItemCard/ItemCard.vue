<template>
    <section class="card">
        <img class="card-img" src="img" alt="">
        <div class="card-content">
            <img class="card-icon" v-show="user_icon" :src="user_icon">
            <div class="username">
                {{user_name}}
            </div>
            <h1 class="card-title">{{title}}</h1>
            <p class="card-text">{{content}}</p>
        </div>
        <div class="card-link">
            <router-link :to="'/articles/' + id">もっと見る</router-link>
        </div>
    </section>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    'id': {},
    'user_id': {},
    'user_name': {},
    'user_icon': {},
    'media': {},
    'title': {},
    'content': {}
  }
}

</script>

<style lang="scss" scoped>
    @import "./ItemCard";
</style>
