<template>
  <!-- <Button>
    <a :href="link">{{ msg }}</a>
   <a><slot></slot></a>
  </Button> -->
  <a>
    <Button />
  </a>
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
