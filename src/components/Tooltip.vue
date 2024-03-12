<template>
  <div class="relative inline-block" @mouseenter="isHover = true" @mouseleave="isHover = false">
    <div
      class="bg-white text-green w-[12px] h-[12px] border-solid border-[1px] border-green flex items-center justify-center rounded-full cursor-pointer"
    >
      <span class="text-[8px] font-bold">i</span>
    </div>
    <div
      v-if="isHover"
      class="absolute z-10 border-[1px] border-solid border-black bg-white text-black text-xs py-1 px-2 rounded whitespace-no-wrap bottom-3 left-1/2 transform -translate-x-1/2 transition-opacity duration-300"
    >
      {{ tooltipText || '' }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tooltipText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isHover: false
    }
  }
}
</script>
