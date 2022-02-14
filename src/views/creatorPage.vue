<template>
  <div class="h-screen">
    <Header />
    <div id="main" class="h-full pl-16 pr-8">
      <div id="workBench" class="pt-20 w-2/3">
        <form
          class="mb-3 ml-40 flex flex-col"
          v-for="(formItem, formIndex) in formList"
          :key="formItem.formId"
          :index="formIndex"
        >
          <a class="w-full">
            <p class="w-1/5 self-center text-3xl">场景{{ formIndex + 1 }}</p>
          </a>
          <div class="flex">
            <ul class="flex flex-col gap-3">
              <li
                class="flex"
                v-for="(inputItem, inputIndex) in formList[formIndex].inputList"
                :key="inputItem.inputId"
                :index="inputIndex"
              >
                <a class="self-center">描述{{ inputIndex + 1 }}</a>
                <span
                  class="rounded-lg border-4 border-gray-200 h-36 w-96 pl-3 pb-2.5 flex relative"
                >
                  <textarea
                    class="w-11/12 resize-none mt-3 mr-3 bg-transparent overflow-y-scroll focus:outline-none"
                    v-model="inputItem.info"
                  />
                  <button
                    @click="onDropInput(formIndex, inputIndex)"
                    title="删除当前描述"
                    class="rounded-lg w-5 h-5 absolute top-0 right-0 hover:text-red-600 text-xl"
                  >
                    ╳
                  </button>
                  <button
                    title="清空当前描述"
                    class="rounded-lg mb-2 mr-1 w-5 h-5 absolute bottom-0 right-0 hover:text-red-600 text-xl"
                  >
                    ←
                  </button>
                </span>
              </li>
            </ul>
            <a
              title="新增描述"
              @click="onAddInput(formIndex)"
              class="rounded-full w-9 py-1 px-3 cursor-pointer select-none ml-3 bg-blue-300 self-end"
              >+</a
            >
          </div>
        </form>
        <a @click="onAddForm" class="ml-3 bg-red-100 self-end">+</a>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header.vue";
export default {
  name: "creatorPage",
  data() {
    return {
      formIndex: 0,
      formList: [
        {
          formId: 1,
          inputIndex: 0,
          inputList: [
            {
              inputId: "a",
              info: "",
            },
          ],
        },
      ],
    };
  },
  methods: {
    onAddInput(t) {
      this.formList[t].inputIndex++;
      this.formList[t].inputList.push({
        inputId: String.fromCharCode(this.formList[t].inputIndex + 97),
        info: "",
      });
    },
    onAddForm() {
      this.formIndex++;
      this.formList.push({
        formId: this.formIndex + 1,
        inputIndex: 1,
        inputList: [
          {
            inputId: "a",
            info: "",
          },
        ],
      });
    },
    onDropInput(tF, tI) {
      if (this.formList[tF].inputList.length < 2) {
        this.formList.splice(tF, 1);
      } else {
        this.formList[tF].inputList.splice(tI, 1);
      }
    },
  },
  components: {
    Header,
  },
};
</script>

<style></style>
