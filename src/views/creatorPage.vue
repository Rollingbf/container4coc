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
          tag="div"
        >
          <a class="w-full">
            <p class="w-1/5 self-center text-3xl">场景{{ formIndex + 1 }}</p>
          </a>
          <div class="flex">
            <ul class="flex flex-col gap-3">
              <li
                class="flex"
                v-for="(inputItem, inputIndex) in formList[formIndex].inputList"
                :key="inputItem.inputIndex"
                :index="inputIndex"
              >
                <input
                  @blur="onTextAreaBlur"
                  v-model="inputItem.inputLabel"
                  class="self-center w-24 mr-2 font-yahei text-lg focus:border-blue-400 border-2 border-gray-300 rounded-xl p-1.5"
                  placeholder="描述:"
                />
                <span
                  class="rounded-lg border-4 border-gray-200 h-36 w-96 pl-3 pb-2.5 flex relative"
                >
                  <textarea
                    @blur="onTextAreaBlur"
                    class="w-11/12 resize-none mt-3 mr-3 bg-transparent overflow-y-scroll rounded-md border-2 focus:border-green-500 focus:ring"
                    v-model="inputItem.info"
                  />
                  <a
                    @mousedown="onDropInput(formIndex, inputIndex)"
                    @mouseleave="onCancelDrop"
                    title="长按删除描述"
                    class="rounded-lg w-5 h-5 absolute top-0 right-0 select-none hover:text-red-600 text-xl"
                  >
                    ╳
                  </a>
                  <a
                    @click.prevent="onResetInput(formIndex, inputIndex)"
                    title="清空当前描述"
                    class="rounded-lg mb-2 mr-1 w-5 h-5 absolute bottom-0 right-0 select-none hover:text-red-600 text-xl"
                  >
                    ←
                  </a>
                </span>
              </li>
            </ul>
            <a
              title="新增描述"
              @click="onAddInput(formIndex)"
              class="rounded-full p-1.5 cursor-pointer select-none ml-3 bg-blue-300 self-end text-white text-2xl"
              >+</a
            >
          </div>
          <a
            title="长按2秒删除场景"
            @mousedown="onDropForm(formIndex)"
            @mouseleave="onCancelDrop"
            class="rounded-2xl mt-3 bg-red-600 cursor-pointer p-1.5 w-20 select-none text-white font-yahei font-semibold"
            >删除场景</a
          >
        </form>
        <div class="flex justify-between">
          <div class="ml-40 mt-5">
            <a
              @click="onAddForm"
              class="rounded-2xl p-1.5 bg-purple-500 cursor-pointer self-end select-none text-white font-yahei font-semibold"
              >创建新场景
            </a>
            <a
              title="恢复到上一次离开输入框时的状态"
              @click="onRevive"
              class="rounded-2xl ml-3 p-1.5 bg-yellow-500 cursor-pointer self-end select-none text-white font-yahei font-semibold"
              >恢复所有场景
            </a>
          </div>
          <a
            @click="reachTop"
            class="rounded-2xl p-1.5 bg-green-500 cursor-pointer self-end select-none text-white font-yahei font-semibold"
            >回到顶部
          </a>
        </div>
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
      dropLoop: 0,
      formIndex: 0,
      formList: [
        {
          formId: 1,
          inputIndex: 0,
          inputList: [
            {
              inputLabel: "",
              info: "",
            },
          ],
        },
      ],
      tempSave: [],
      dragIndex: "",
    };
  },
  methods: {
    onAddForm() {
      this.formIndex++;
      this.formList.push({
        formId: this.formIndex + 1,
        inputIndex: 0,
        inputList: [
          {
            inputLabel: "",
            info: "",
          },
        ],
      });
    },
    onAddInput(tF) {
      let flag = this.formList[tF].inputIndex;
      if (this.formList[tF].inputList[flag].inputLabel !== "") {
        this.formList[tF].inputIndex++;
        this.formList[tF].inputList.push({
          inputLabel: "",
          info: "",
        });
      } else {
        alert("请先输入当前描述的标题");
      }
    },
    onDropForm(tF) {
      if (this.formList.length < 2) {
        alert("仅剩一个场景,请使用描述清空或描述删除");
      }
      clearInterval(this.dropLoop);
      this.dropLoop = setTimeout(() => {
        this.formList.splice(tF, 1);
        this.formIndex--;
      }, 2000);
    },
    onCancelDrop() {
      clearInterval(this.dropLoop);
    },
    onDropInput(tF, tI) {
      clearInterval(this.dropLoop);
      if (this.formList[tF].inputList.length < 2) {
        if (tF < 1) {
          alert("仅剩一个场景,请使用描述清空");
        } else {
          this.dropLoop = setTimeout(() => {
            this.formList.splice(tF, 1);
            this.formIndex--;
          }, 1000);
        }
      } else {
        this.dropLoop = setTimeout(() => {
          this.formList[tF].inputList.splice(tI, 1);
          this.formList[tF].inputIndex--;
        }, 1000);
      }
    },
    onResetInput(tF, tI) {
      this.formList[tF].inputList[tI].info = "";
    },
    onTextAreaBlur() {
      this.tempSave = JSON.parse(JSON.stringify(this.formList));
    },
    onRevive() {
      this.formList = JSON.parse(JSON.stringify(this.tempSave));
    },
    reachTop() {
      let timer = null;
      cancelAnimationFrame(timer);
      timer = requestAnimationFrame(function (fn) {
        let oTop =
          document.body.scrollTop || document.documentElement.scrollTop;
        if (oTop > 0) {
          scrollBy(0, -50);
          timer = requestAnimationFrame(fn);
        } else {
          cancelAnimationFrame(timer);
        }
      });
    },
  },
  components: {
    Header,
  },
};
</script>

<style></style>
