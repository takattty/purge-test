<template>
  <Button>
    <!-- <a :href="link">{{ msg }}</a> -->
    <a><slot></slot></a>
  </Button>
</template>

<script>
import Button from '../atoms/Button'

export default {
  components: {
    Button,
  },
  // props: {
  //   msg: { type: String, default: 'Default msg' },
  //   link: { type: String, default: 'https://google.com' },
  // },
}
</script>
