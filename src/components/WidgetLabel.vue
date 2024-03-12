<template>
  <label
    :for="htmlFor"
    class="font-[400] text-[14px] leading-[17px] text-start flex justify-start items-center"
  >
    <div class="relative pr-[0.8rem] pt-[0.5rem]">
      <p>{{ label }}</p>
      <div v-if="enableTooltip" class="absolute top-0 right-0">
        <Tooltip :tooltip-text="tooltipText" />
      </div>
    </div>
  </label>
</template>

<script>
import Tooltip from './Tooltip.vue'

export default {
  components: {
    Tooltip
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    enableTooltip: {
      type: Boolean,
      default: false
    },
    tooltipText: {
      type: String,
      default: ''
    },
    htmlFor: {
      type: String,
      default: ''
    }
  }
}
</script>
