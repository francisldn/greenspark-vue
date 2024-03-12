<template>
  <main class="flex w-full h-full items-center justify-between sm:p-16 lg:p-24 p-4">
    <div class="flex flex-col px-[36px] pt-[36px] pb-[139px] bg-light-yellow shadow-[0_10px_20px_0px_rgb(0,0,0,0.2)] w-full rounded-[8px] min-w-[375px]">
      <h1 class="font-[700] text-[30px] leading-[36px] mb-[12px] text-center lg:text-start">
        Per product widgets
      </h1>
      <hr class="border-[2px] border-solid border-divider w-full mb-[20px]" />
      <div v-if="data" class="flex flex-col gap-y-[42px] lg:gap-x-[20px] justify-between items-center lg:items-start lg:flex-row flex-1">
        <Widget
          v-for="product in data" :key="product.id"
          :title="`This product ${product.action}`"
          :subtitle="`${product.type === 'carbon' ? product.amount + 'kgs of' : product.amount} ${product.type}`"
          :bg-color="headerBackground[data && data.indexOf(product)]"
          :text-color="headerColor[data?.indexOf(product)]"
          :is-link-to-profile="product.linked"
          :badge-color="getBadgeColor(product.selectedColor)"
          :is-activate="product.active"
        />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import { getData } from './api/data.api'
import Widget from './components/Widget.vue'
import { BadgeColor } from './utils/BadgeColor'
import { headerBackground, headerColor } from './utils/WidgetHeader'
import type { ProductDataType } from './types/ProductData'


export default {
  components: { Widget },
  setup() {
    const data = ref<ProductDataType[]|undefined>([])

    onMounted(async () => {
      data.value = await getData()
    })

    const getBadgeColor = (color: string | undefined): BadgeColor | string => {
      if (color) {
        return BadgeColor[color.toUpperCase() as keyof typeof BadgeColor] || ''
      }
      return '';
    };

    return { data, headerBackground, headerColor, BadgeColor, getBadgeColor }
  }
}
</script>
