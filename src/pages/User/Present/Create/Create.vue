<template>
  <div class="p-create-present">
    <div class="container">

    <button v-on:click="addmain">+</button>

      <div class="main">

        <div class="cp_ipselect">
          <select class="cp_sl06" required>
          <option value="" hidden disabled selected></option>
          <option value="1">travel okinawa</option>
          <option value="2">travel kyoto</option>
          <option value="3">travel 上司</option>
          <option value="4">travel 親戚</option>
          </select>
          <span class="cp_sl06_highlight"></span>
          <span class="cp_sl06_selectbar"></span>
        <label class="cp_sl06_selectlabel">記事選択</label>
        </div>

      <div class="present">

      <div class="w__field mt20mb20">
        <label>商品名</label>
        <div class="input">
          <input
            type="text"
            name="title"
          />
        </div>
        <div
          class="form__errors"
          v-if="errors.has('title')"
        >
          商品名は必須です
        </div>
      </div>

      <div class="amount">
        <label>個数</label>
        <div class="input">
          <input
            type="text"
            name="amount"
          />
        </div>
        <div
          class="form__errors"
          v-if="errors.has('amount')"
        >
          個数は必須です
        </div>
      </div>

      <div class="price">
        <label>価格</label>
        <div class="input">
          <input
            type="text"
            name="price"
          />
        </div>
        <div
          class="form__errors"
          v-if="errors.has('price')"
        >
          価格は必須です
        </div>
      </div>

      <div class="cp_ipselect">
        <select class="cp_sl06" required>
        <option value="" hidden disabled selected></option>
        <option value="1">両親</option>
        <option value="2">友達</option>
        <option value="3">上司</option>
        <option value="4">親戚</option>
        </select>
        <span class="cp_sl06_highlight"></span>
        <span class="cp_sl06_selectbar"></span>
      <label class="cp_sl06_selectlabel">送る相手</label>
      </div>

      <div class="w__field mt20mb20">
        <label>感想</label>
        <div class="input">
          <textarea
            name="content"
          />
        </div>
        <div
          class="form__error"
          v-if="errors.has('content')"
        >
          感想は必須です
        </div>
      </div>

      <div class="file">
        ファイルの選択
        <input type="file" v-on:change="onFileChange">
        </div>

        <img class="showimg" v-show="uploadedImage" :src="uploadedImage" />

      <div class="actionBtn">
        <input
          type="submit"
          value="投稿する"
        />
      </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreatePresent',
  data() {
    return {
      name: "",
      uploadedImage: "",
    };
  },
  methods: {
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      this.createImage(files[0]);
    },
    createImage(file) {
      let reader = new FileReader();
      reader.onload = e => {
        this.uploadedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  }
};
</script>

<style lang="scss" scoped>
@import "./Create";
</style>
