<template>
  <div>
    <A href="#" class="hover:opacity-70">
      <Img alt="PARADOX" :link="Linksrc"></Img>
    </A>
  </div>
</template>

<script>
import A from '../atoms/A'
import Img from '../atoms/Img'

export default {
  components: {
    A,
    Img,
  },
  data() {
    return {
      Linksrc: 'https://www.prdx.co.jp/web-production/images/common/logo.png',
    }
  },
}
</script>
