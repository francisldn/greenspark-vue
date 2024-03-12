<template>
    <div class="flex justify-between items-center relative text-green font-[400] text-[14px] w-full">
      <WidgetLabel :for="toggleId" label="Activate badge" />
      <div
        :id="toggleId"
        role="checkbox"
        :aria-checked="isActivate"
        tabindex="0"
        class="relative z-0 w-[40px] h-[20px] flex border-[0.59px] rounded-[29.5px] shadow-[inset_0_0_5px_0_#afc6bd] border-solid border-light-green"
        :class="{ 'justify-end bg-green': isActivate, 'justify-start': !isActivate }"
        @click="toggleActivation"
        @mouseenter="setHover(true)"
        @mouseleave="setHover(false)"
      >
        <div
          class="flex justify-center items-center z-10 rounded-full h-[28px] w-[28px] -mt-[4px] -ml-[4px]"
          :class="{ 'bg-light-green opacity-50 z-10 relative': isHover, '-mr-[5px]': isActivate }"
        ></div>
        <div
          class="absolute z-20 h-[20px] w-[20px] rounded-full border-[2px] border-solid border-yellow bg-white -top-[0.05rem]"
          :class="{ 'bg-white !opacity-100': isHover, '-right-[0.08rem]': isActivate, 'left-0': !isActivate }"
        ></div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue'
  import WidgetLabel from './WidgetLabel.vue'
  
  export default {
    components: {
      WidgetLabel
    },
    props: {
      defaultStatus: {
        type: Boolean,
        required: true
      }
    },
    setup(props) {
      const isActivate = ref(props.defaultStatus)
      const isHover = ref(false)
      const toggleId = 'activate-badge'
  
      const toggleActivation = () => {
        isActivate.value = !isActivate.value
      }
  
      const setHover = (value: boolean) => {
        isHover.value = value
      }
  
      return {
        isActivate,
        isHover,
        toggleId,
        toggleActivation,
        setHover
      }
    }
  }
  </script>  