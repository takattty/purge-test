<template>
  <img class="m-0 p-0 align-bottom" :src="link" />
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: 'https://www.prdx.co.jp/web-production/images/common/logo.png',
    },
  },
}
</script>
