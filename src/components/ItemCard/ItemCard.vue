<template>
    <section class="card">
        <img class="card-img" :src="`http://localhost:3000/uploads/` + media">
        <div class="card-content">
            <img :src="`http://localhost:3000/uploads/` + user_icon"
          style="width: 40px; height: 40px"
        />
            <div class="username">
                {{user_name}}
            </div>
            <h1 class="card-title">{{title}}</h1>
            <p class="card-text">{{content.substr("0","150")}}...</p>
        </div>
        <div class="card-link">
            <router-link :to="'/users/' + user_name + '/items/' + id">もっと見る</router-link>
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
