<template>
  <div id="app">
    <common-header @openSearch="open =!open" />
    <search-form v-if="open" />
    <router-view/>
  </div>
</template>

<script>
import {Header as CommonHeader} from './layouts'
import {SearchForm} from './components'

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
  }
}
</script>
