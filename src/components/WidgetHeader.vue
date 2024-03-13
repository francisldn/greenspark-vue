<template>
  <div :class="[bgColor, textColor, 'flex flex-1 justify-start items-center gap-[12px] lg:gap-[10%] rounded-[5.95px] px-[5%] py-[12.65px] w-full']">
    <div class="w-[39.7px] flex flex-col gap-[2px] items-center">
      <img :src="imageSrc" alt="logo-icon" width="32.26" height="32.26" />
      <p class="text-[9.18px] tracking-[-0.01rem]">greenspark</p>
    </div>
    <div class="flex flex-col gap-[3.97px]">
      <h4 class="text-[12.41px] font-[400] leading-[15.07px]">{{ title }}</h4>
      <p class="text-[17.86px] leading-[21.7px] font-[700] tracking-wide">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import subtract_dark from '../assets/subtract_dark.svg';
import subtract from '../assets/subtract.svg';
import { headerColor } from '../utils/WidgetHeader';
import { computed, ref } from 'vue';

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    bgColor: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const textColor = computed(() => headerColor[props.bgColor as keyof typeof headerColor]);
    const imageSrc = computed(() => textColor.value === 'text-green' ? subtract_dark : subtract);

    return {
      imageSrc,
      textColor
    };
  }
};
</script>