<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">purge-test</h1>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer" class="button--green text-center"> Documentation </a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" rel="noopener noreferrer" class="button--grey text-center"> GitHub </a>
      </div>
    </div>
    <div>
      <!-- <ButtonLink link="./creative" msg="default ButtonLikn"></ButtonLink> -->
      <ButtonLink href="./creative">buttonLink</ButtonLink>
    </div>
    <div>
      <!-- <A /> -->
      <a href="#" class="no-underline from-black cursor-pointer break-all hover:opacity-70 hover:duration-300 hover:ease-in_out_expo">
        <img :src="image" alt="PARADOX" class="m-0 p-0 align-bottom" />
      </a>
    </div>
  </div>
</template>

<script>
import ButtonLink from '../components/atoms/ButtonLink'
// import A from '../components/atoms/A'

export default {
  components: {
    ButtonLink,
    // A,
  },
  props: {
    image: {
      type: String,
      default: 'https://picsum.photos/id/0/478/67',
    },
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
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
