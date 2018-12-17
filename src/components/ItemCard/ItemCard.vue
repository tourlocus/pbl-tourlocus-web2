<template>
  <div class="c-itemCard">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <img :src="`http://localhost:3000/uploads/${user.icon}`"
          style="width: 40px; height: 40px;"
        />
        <span style="position: relative; bottom: 10px;">{{ item.title }}</span>
        <el-button
          style="float: right;" type="text"
          @click="toItemPage(user.user_name, item.article_id)"
        >
          Open
        </el-button>
      </div>
      <div class="card-body">
        {{ item.content }}
      </div>
    </el-card>
  </div>
</template>

<script>
import router from '../../router'

export default {
  name: 'ItemCard',
  props: ['item', 'user'],
  methods: {
    toItemPage (name, id) {
      const redirectURL = `/users/${name}/items/${id}`
      router.push(redirectURL)
    }
  }
}
</script>
