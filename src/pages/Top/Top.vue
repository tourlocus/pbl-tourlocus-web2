<template>
  <div class="p-top">
    <div class="container">
      <div class="main">
        <div class="tabs">
          <router-link to="/">閲覧数</router-link>
          <router-link to="/">性別</router-link>
          <router-link to="/">年代別</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Header as CommonHeader} from '../../layouts'
import {SearchForm} from '../../components'

export default {
  name: 'Top',
  components: {
    CommonHeader,
    SearchForm
  },
  data () {
    return {}
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import './Top';
</style>
