<template>
  <div id="output">
    <textarea readonly></textarea>
  </div>
</template>

<style scoped>
textarea {
  resize: none;
  border: 1px solid #888;
  height: 400px;
  width: 600px;
}

div #output {
  display: inline-flex;
  float: right;
  width: 40%;
  margin-top: 50px;
  margin-right: 50px;
}
</style>