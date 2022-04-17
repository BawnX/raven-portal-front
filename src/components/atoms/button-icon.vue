<template>
  <button :class="color" v-on:mouseleave="isVisible = false" v-on:mouseover="isVisible = true">
    <slot></slot>
    <span v-if="isVisible" :class="isVisible ? '' : 'invisible'">{{ textShow }}</span>
  </button>
</template>

<script lang="ts" setup>
import {ref, watchEffect} from "vue";

const props = defineProps({
  isActive: {
    default: false,
    type: Boolean
  },
  textShow: {
    default: "",
    type: String
  }
})

let color = ref("gray")
const isVisible = ref(false)

watchEffect(() => {
  if (props.isActive) {
    color.value = 'orange'
  }
  if (!props.isActive) {
    color.value = 'gray'
  }
})

</script>

<style lang="scss">
.orange {
  @apply bg-orange-400 hover:bg-orange-500 hover:stroke-white  hover:text-white animation-button button;
}

.gray {
  @apply bg-gray-400 hover:bg-gray-600 hover:stroke-white hover:text-white button animation-button;
}

.animation-button{
  @apply hover:transition ease-in-out delay-200 duration-300 transform hover:scale-125 transition-all;
}

.button {
  @apply rounded-full flex items-center px-1;
}
</style>
