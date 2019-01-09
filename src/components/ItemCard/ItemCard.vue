<template>
    <section class="card">
        <img class="card-img" src="img" alt="">
        <div class="card-content">
            <img class="card-icon" v-show="icon" :src="icon">
            <div class="username">
                {{username}}
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
    'username': {},
    'icon': {},
    'photo': {},
    'title': {},
    'content': {}
  }
}

</script>

<style lang="scss" scoped>
    @import "./ItemCard";
</style>
