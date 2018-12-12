<template>
  <div id="app">
    <common-header
      :isAuth="user.isAuth"
      :name="user.name"
    />
    <router-view />
  </div>
</template>

<script>
import {Header as CommonHeader} from './layouts'
import {mapState} from 'vuex'

export default {
  name: 'App',
  components: {
    CommonHeader
  },
  computed: {
    ...mapState('user', {
      user: state => state
    })
  }
}
</script>
