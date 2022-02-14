<template>
  <div class="h-screen">
    <Header />
    <div id="main" class="h-full pl-16 pr-8">
      <div id="workBench" class="pt-20">
        <form
          class="mb-3"
          v-for="(formItem, formIndex) in formList"
          :key="formItem.formId"
          :index="formIndex"
        >
          <div
            v-for="(inputItem, inputIndex) in formList[formIndex].inputList"
            :key="inputItem.inputId"
            :index="inputIndex"
          >
            <input class="rounded-lg bg-gray-200" v-model="inputItem.info" />
          </div>
          <a @click="onAddInput" class="ml-3 bg-red-100">+</a>
        </form>
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
    onAddInput() {
      this.formList[this.formIndex].inputIndex++;
      this.formList[this.formIndex].inputList.push({
        inputId: String.fromCharCode(
          this.formList[this.formIndex].inputIndex + 97
        ),
        info: "",
      });
      console.log(this.formList);
    },
  },
  components: {
    Header,
  },
};
</script>

<style></style>
