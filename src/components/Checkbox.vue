<template>
    <div class="flex justify-between relative text-green font-[400] text-[14px] w-full">
      <WidgetLabel :for="checkboxId" label="Link to Public Profile" :enable-tooltip="true" tooltip-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      
      <div
        class="flex w-[36px] h-[36px] rounded-full -mr-[9px] -mt-[1px] z-0"
        :class="{ 'bg-light-green opacity-50': isHover }"
        @mouseenter="setHover(true)"
        @mouseleave="setHover(false)"
      ></div>
      
      <div
        :id="checkboxId"
        role="checkbox"
        :aria-checked="isLinkToProfile"
        tabindex="0"
        class="absolute right-0 top-2 z-10 w-[18px] h-[18px] flex justify-center items-center border-solid border-[2px] border-black hover:border-green rounded-sm cursor-pointer"
        :class="{ 'bg-green border-green border-solid border-[2px] text-white': isLinkToProfile}"
        @click="toggleLinkToProfile"
        @mouseenter="setHover(true)"
        @mouseleave="setHover(false)"
      >
        <svg
          v-if="isLinkToProfile"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          :stroke-width="4"
          width="16"
          height="16"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
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
      const isLinkToProfile = ref(props.defaultStatus)
      const isHover = ref(false)
      const checkboxId = ref('public-profile')
  
      const setHover = (value: boolean) => {
        isHover.value = value
      }
  
      const toggleLinkToProfile = () => {
        isLinkToProfile.value = !isLinkToProfile.value
      }
  
      return {
        isLinkToProfile,
        isHover,
        checkboxId,
        setHover,
        toggleLinkToProfile
      }
    }
  }
  </script>
  