<template>
  <div class="container">
    <div>
      <H1></H1>
      <Logo />
      <h1 class="title">purge-test</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green text-center"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey text-center"
        >
          GitHub
        </a>
      </div>
      <Img />
      <A />
      <A href="#" class="bg-red-500">開発事例</A>
      <Li />
      <Li class="bg-red-500">開発事例</Li>
    </div>
  </div>
</template>

<script>
import H1 from '../components/molecules/H1'
import Img from '../components/atoms/Img'
import A from '../components/atoms/A'
import Li from '../components/atoms/List'

export default {
  components: {
    H1,
    Img,
    A,
    Li,
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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

.links {
  padding-top: 15px;
}
</style>
