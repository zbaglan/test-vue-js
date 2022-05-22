<template>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Дәмді кондитерлік үйі</title>
  </head>

  <body>

  <header>
    <h2>- Home -</h2>

    <nav>
      <li><router-link to="/">Басты бет</router-link>></li>
      <li><router-link to="/stemming">Стемминг</router-link>></li>
      <li><router-link to="/analyse">Талдау</router-link>></li>
<!--      <li><a href="segment.html">Сегментация</a></li>-->
    </nav>
  </header>


  <router-view />


  </body>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>

</style>
