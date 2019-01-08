<template>
    <section class="card">
        <img class="card-img" src="" alt="">
        <div class="card-content">
            <img class="card-icon" src="">
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
