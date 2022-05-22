<template>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Дәмді кондитерлік үйі</title>
    <link rel="stylesheet" href="style-analayze.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  </head>

  <body>

  <div class="container">
    <div class="row h-100">
      <div class="col-sm-6">
        <div class="tools-bar form">
          <InputVue
              v-bind:nameButton="'Upload'"
              v-on:readFile="readFile"
          />
        </div>
        <div class="text-area">
                <textarea v-model="content" class="form-control">
                </textarea>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="tools-bar text-end form">
          <button type="submit" class="btn">Download<i class="fa-lg fa-solid fa-file-arrow-down"></i></button>
          <button type="submit" class="btn">Copy<i class="fa-lg fa-solid fa-copy"></i></button>
        </div>
        <div class="text-area">
                <textarea class="form-control" v-model="data">
                </textarea>
        </div>
      </div>
      <div class="mt-5 text-center">
        <button v-on:click="submitAnalyseFile" class="btn btn-analyze">Талдау</button>
      </div>

    </div>
  </div>

  </body>
</template>

<script>
import axios from 'axios'
import InputVue from "@/components/InputVue";

export default {
  name: 'App',
  components: {InputVue},
  data() {
    return {
      data: '',
      content: '',
      file: ''
    }
  },
  methods: {
    async submitAnalyseFile() {
      const response = await axios.post('http://localhost:9090/api/v1/analyse', {value: this.content},
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
      ).then(function (response) {
        console.log('success');
        return response.data;
      }).catch(function () {
        console.log('failure')
      });

      this.data = response;
    },
    readFile(file) {
      this.content = '';
      this.file = file;
      const reader = new FileReader();
      if (file.name.includes(".txt")) {
        reader.onload = (res) => {
          this.content = res.target.result;
        };
        reader.onerror = (err) => console.log(err);
        reader.readAsText(file);
      } else {
        this.content = "check the console for file output";
        reader.onload = (res) => {
          console.log(res.target.result);
        };
        reader.onerror = (err) => console.log(err);
        reader.readAsText(file);
      }
    }
  }
}
</script>

<style>
body {
  min-height: 100vh;
  font: normal 16px sans-serif;
}

header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #121212;
  padding: 18px 100px 18px;
  background-color: #96CEB4;
}

header nav {
  display: flex;
}

header nav li {
  margin: 0 15px;
}

ul, nav {
  list-style: none;
}

a {
  text-decoration: none !important;
  color: #2A2D34 !important;
  cursor: pointer;
}

a:hover {
  opacity: 1;
  color: #000;
}

.fa {
  height: 1rem;
  width: 1rem;
}

textarea {
  height: 300px;
}

.form {
  margin-top: 70px;
  margin-bottom: 10px;
}

button,
button:active:focus {
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}

.btn-analyze {
  background-color: #96CEB4 !important;
  color: #fff;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  padding: 10px 60px !important;
}

</style>
