<template>
    <section class="card">
        <img class="card-img" src="../assets/photo1.jpg" alt="">
        <div class="card-content">
            <img class="card-icon" src="../icon1.png">
            <div class="username">
                {{username}}
            </div>
            <h1 class="card-title">{{title}}</h1>
            <p class="card-text">{{content}}</p>
        </div>
        <div class="card-link">
            <a href="http://localhost:8080/"></a>
            <a href="#">もっと見る</a>
        </div>
    </section>
</template>

<script>
Vue.component('card', {
    props: ['articles'],
    template:
    <ItemCard v-for="item in articles"
          v-bind:key="item.id"
          v-bind:username="item.username"
          v-bind:icon="item.icon"
          v-bind:photo="item.photo"
          v-bind:title="item.title"
          v-bind:content="item.content">
    </ItemCard>
})

export default {
    name: 'ItemCard',
    props: {src: {}},
    methods: {
  }
}
</script>

<style lang="scss" scoped>
    @import "./ItemCard";
</style>
