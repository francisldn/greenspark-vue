<template>
  <main class="flex w-full h-full items-center justify-between sm:p-16 lg:p-24 p-4">
    <div class="flex flex-col px-[36px] pt-[36px] pb-[139px] bg-light-yellow shadow-[0_10px_20px_0px_rgb(0,0,0,0.2)] w-full rounded-[8px] min-w-[375px]">
      <h1 class="font-[700] text-[30px] leading-[36px] mb-[12px] text-center lg:text-start">
        Per product widgets
      </h1>
      <hr class="border-[2px] border-solid border-divider w-full mb-[20px]" />
      <ProductList />
    </div>
  </main>
</template>

<script lang="ts">
import ProductList from './components/ProductList.vue'

export default {
  components: { ProductList },
}
</script>
