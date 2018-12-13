<template>
  <div class="p-top">
    <div class="container">
      <div class="main">
        <h1 class="result">姫路城での検索結果</h1>
        <div class="tabs">
          <a class="filter">四季選択</a>
          <a href="#" class="season_btn">春</a>
          <a href="#" class="x_season_btn">夏</a>
          <a href="#" class="season_btn">秋</a>
          <a href="#" class="season_btn">冬</a>
        </div>

        <div class="tabs">
          <a href="#" class="square_btn">新着順</a>
          <a href="#" class="square_btn">人気順</a>
        </div>

    <section class="card">
        <img class="card-img" src="../../assets/summer.jpg" alt="">
        <div class="card-content">
            <img class="card-icon" src="../../assets/icon.png">
            <div class="username">
                RekisiOtaku
            </div>
            <h1 class="card-title">夏の姫路城の美しさ</h1>
            <p class="card-text">夏の姫路、綺麗な青空の中にポツリと浮かぶ白鷺のように白い城。「姫路城」日本に存在するお城の中でも群を抜いて美しいお城。その夏の姿に迫る！...</p>
        </div>
        <div class="card-link">
            <a href="http://localhost:8080/"></a>
            <a href="#">もっと見る</a>
        </div>
    </section>

    <section class="card">
        <img class="card-img" src="../../assets/himeji-summer.jpg" alt="">
        <div class="card-content">
            <img class="card-icon" src="../../assets/icon2.png">
            <div class="username">
                NoBrains
            </div>
            <h1 class="card-title">姫路城に行ってきました</h1>
            <p class="card-text">今回ゎひめし゛し゛ょぅにぃってきたょ(*´ω｀*)
              ひさ゛し☀ちょうゃは゛(｀；ω；´)
              かれひ。っひ。にっれてぃってもらっただけだしぉしろなんて分からなぃけと゛(；´Д｀)とてもぉぉきくてひ゛っくりしちゃったぁ(*˘︶˘*).｡.:*♡</p>
        </div>
        <div class="card-link">
            <a href="http://localhost:8080/"></a>
            <a href="#">もっと見る</a>
        </div>
    </section>

    <section class="card">
        <img class="card-img" src="../../assets/summer3.jpg" alt="">
        <div class="card-content">
            <img class="card-icon" src="../../assets/icon3.png">
            <div class="username">
                hortensia
            </div>
            <h1 class="card-title">国宝『姫路城』</h1>
            <p class="card-text">姫路城は、兵庫県の姫路市にある日本の城。江戸時代初期に建てられた天守や櫓等の主要建築物が現存し、国宝や重要文化財に指定されている。また、主郭部を含む中堀の内側は「姫路城跡」として国の特別史跡に指定されている。また、ユネスコの世界遺産リストにも登録され、日本100名城などに選定されて...</p>
        </div>
        <div class="card-link">
            <a href="http://localhost:8080/"></a>
            <a href="#">もっと見る</a>
        </div>
    </section>

        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Top',
  components: {},
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import './Top';
</style>
