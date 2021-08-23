<script lang="ts" setup>
import {defineProps} from "vue";

const props = defineProps({
  title: {
    type: String,
    default: () => "Hello"
  },
  data: {
    type: Object,
    default: () => ({name: "Hfunc"})
  }
})

</script>

<template lang="pug">
.h-template
  span {{props.title+" "}}
  span {{props.data.name}}
</template>

<style lang="stylus">
.h-template__body
  display flex
  flex-direction row
  place-content center
  color #b385f0ff

.h-template
  @extend .h-template__body
</style>