<template>
  <div class="c-topPageItemCard">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <img :src="`http://localhost:3000/uploads/${item.user_icon}`"
          style="width: 40px; height: 40px"
        />
        <span style="position: relative; bottom: 10px">
          <router-link :to="`/users/${item.user_name}/items/${item.id}`">
            {{ item.title }}
          </router-link>
        </span>
      </div>
      <div class="card-body">
        {{ item.content }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'topPageItemCard',
  props: ['item']
}
</script>

<style lang="scss" scoped>

</style>
