<template>
    <section class="card">
        <img class="card-img" src="../../assets/photo1.jpg" alt="">
        <div class="card-content">
            <img class="card-icon" src="../../assets/icon1.png">
            <div class="username">
                {{username}}
            </div>
            <h1 class="card-title">{{title}}</h1>
            <p class="card-text">{{content}}</p>
        </div>
        <div class="card-link">
            <a href="#"></a>
            <a href="#">もっと見る</a>
        </div>
    </section>
</template>

<script>
export default {
 name: 'ArticleCard'
}
</script>