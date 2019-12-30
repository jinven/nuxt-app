<template>
  <div class="container">
    <div class="main">
      <div>
        <ul>
          <li>
            <nuxt-link to="/">
              首页
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/logo">
              logo
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">
              about
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/user">
              user
            </nuxt-link>
          </li>
          <li>
            <NuxtLink to="/section">
              Section
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/child/123">
              Child 123
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/child/234">
              Child 234
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/main">
              Main page with named view in layout
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/nest">
              Nest
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/nest/123">
              Nest/123
            </NuxtLink>
          </li>
        </ul>
      </div>
      <hr>
      <div>
        <NuxtLink to="/">
          Players
        </NuxtLink>
      </div>
      <div>
        <ul class="players">
          <li v-for="user in users" :key="user.id">
            <NuxtLink :to="'/'+user.id">
              {{ user.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="right">
        <NuxtChild :key="$route.params.id" />
      </div>
      <div>
        <div class="left">
          <NuxtChild name="left" />
        </div>
        <div class="content">
          <NuxtChild />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Stage',
    asyncData ({ env }) {
        return { users: env.users }
    },
    middleware: 'stats'
}
</script>

<style>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.main {
    margin: auto;
    max-width: 420px;
    padding: 10px;
}

.left {
    max-width: 150px;
    display: inline-block;
    vertical-align: top;
    border: 1px;
}

.left:empty {
    display: none;
}

.content {
    display: inline-block;
}

ul{
    list-style: none;
}

ul a{
  text-decoration: none;
}

.page-enter-active, .page-leave-active {
  transition: opacity .4s, transform .4s;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  opacity: 1;
}
.page-enter, .page-leave-active {
  opacity: 0.5;
  transform: rotateY(100deg);
}
.container {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  box-sizing: border-box;
}
.left {
  width: 50%;
  position: absolute;
  top: 0;
  left: 0;
}
.right {
  width: 50%;
  position: absolute;
  top: 0;
  right: 0;
}
.players {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.players li a {
  display: block;
  border: 1px #ddd solid;
  padding: 10px;
  text-align: left;
  color: #222;
  text-decoration: none;
}
.players li a:hover {
  color: orange;
}
</style>
