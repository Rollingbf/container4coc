<template>
  <div>
    <header class="h-16 bg-gray-200 py-2.5 pl-20 pr-5 flex justify-between">
      <a class="flex">
        <span class="self-center font-serif text-2xl">coc应用平台</span>
      </a>
      <ul class="flex gap-5">
        <li class="self-center">
          <input
            type="text"
            class="px-3 rounded-full h-9 border-2 focus:outline-none focus:border-green-300 focus:ring"
            placeholder="你可能可以搜索到..."
          />
        </li>
        <li class="self-center">
          <a class="font-sans text-lg hover:text-green-500">指南文档</a>
        </li>
        <li class="self-center">
          <a class="font-sans text-lg hover:text-green-500">Github页面</a>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: "navHeader",
  data() {
    return {};
  },
};
</script>

<style></style>
