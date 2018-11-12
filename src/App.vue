<template>
  <div id="app">
    <common-header
      :logStatus="logState"
      :userName='loginUserName'
      @openSearch="open =!open"
    />
    <search-form v-if="open" />
    <router-view/>
  </div>
</template>

<script>
import {Header as CommonHeader} from './layouts'
import {SearchForm} from './components'
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    CommonHeader,
    SearchForm
  },
  data () {
    return {
      open: false
    }
  },
  computed: {
    ...mapGetters('auth', [
      'logState',
      'loginUserName'
    ])
  }
}
</script>
