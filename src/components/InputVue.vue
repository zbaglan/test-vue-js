<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label>File &nbsp;
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload"/>
      </label>
      <button v-on:click="$emit('readFile', file)">
        <i class="fa-lg fa-solid fa-file-arrow-up">
          {{ nameButton }}
        </i>
      </button>

    </div>
  </div>
</template>

<script>

export default {
  props: {
    nameButton: Text
  },
  data() {
    return {
      file: ''
    }
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    }
  }
}
</script>

<style scoped>
textarea {
  resize: none;
  border: 1px solid #888;
  height: 400px;
  width: 600px;
}

div #input {
  display: inline-flex;
  float: left;
  width: 40%;
  margin-top: 50px;
  margin-left: 50px;
}

input[type="file"]{
  position: absolute;
  top: -500px;
}
</style>
