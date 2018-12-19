<template>
  <div class="p-top">
    <div class="container">
      <div class="main">
        <el-tabs type="card">
          <el-tab-pane label="新着順">
            <div v-for="(item, i) in items.items" :key="i">
              <top-page-item-card
                :item="item"
                style="margin-bottom: 26px;"
              />
            </div>
          </el-tab-pane>
          <el-tab-pane label="人気順">
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import {Item} from '../../api'
import TopPageItemCard from '@/components/TopPageItemCard/TopPageItemCard'

export default {
  name: 'Top',
  components: {
    TopPageItemCard
  },
  data () {
    return {
      items: ''
    }
  },
  methods: {},
  async created () {
    this.items = await Item.getItemLists()
  }
}
</script>

<style lang="scss" scoped>
@import './Top';
</style>
