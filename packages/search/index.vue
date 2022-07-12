<template>
  <div class="xy-search-group--wrapper" :style="formatCssText()">
    <div class="search-inner--container" :style="{ height: wh + 'px' }" ref="transitionWrapper">
      <div
        class="search-item"
        :class="{ inline: item?.attr?.display == 'inline' }"
        :data-style="item?.attr?.display"
        v-for="(item, index) in copySearchData"
        :key="index"
        ref="list"
      >
        <p class="label" v-if="item?.labelVisibel || item?.labelName">
          <span v-if="item?.labelName">{{ item.labelName }}</span>
          <span v-if="item?.labelName">：</span>
        </p>
        <div class="value" :class="{ 'has-more-conditions': item.more }">
          <search-item :itemData="item" :index="index" :isFolder="isFolder" @searchFn="searchFn" @btnEvent="btnEvent" />
          <template v-if="item.more">
            <div class="more-seach-conditions" v-for="(more, idx) in item.more" :key="idx">
              <search-item
                :itemData="more"
                :index="index"
                :cindex="idx"
                :isFolder="isFolder"
                @searchFn="searchFn"
                @btnEvent="btnEvent"
              />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs, nextTick, watch, onMounted, onBeforeUnmount } from 'vue'
import SearchItem from './searchItem.vue'
import ResizeObserver from 'resize-observer-polyfill'
export default {
  name: 'QJsearch',
  props: {
    searchData: {
      type: [Array, Object],
      default: () => {
        return []
      },
    },
    initVisibleCount: [Number, String],
    wrapperStyles: {
      type: [String, Object],
      default: '',
    },
  },
  components: {
    SearchItem,
  },
  setup(props, { emit }) {
    const state = reactive({
      copySearchData: null,
      isFolder: true,
      wh: 1000,
      observe: null,
    })

    const transitionWrapper = ref(null)
    const list = ref(null)

    const methods = {
      /**
       * @name 搜索回调
       */
      searchFn(result) {
        if (result.cindex == -1) {
          state.copySearchData[result?.index] = result.data
        } else {
          state.copySearchData[result?.index].more[result?.cindex] = result.data
        }
        emit('searchFn', state.copySearchData)
      },
      /**
       * @name 按钮事件回调
       */
      btnEvent(type) {
        // 收起展开事件
        if (type == 'toggle') {
          state.isFolder = !state.isFolder
          nextTick(() => {
            state.wh = methods.getTagsBlockSize()
          })
        }
        // 搜索事件
        if (type == 'search') {
          emit('searchFn', state.copySearchData)
        }
      },
      /**
       * @name 格式化CSS
       */
      formatCssText() {
        if (props?.wrapperStyles) {
          const cssText = props?.wrapperStyles
          if (typeof cssText == 'object') {
            let str = ''
            Array.from(Object.keys(cssText)).forEach(key => {
              str += key + ':' + cssText[key]
            })
            return str
          }

          if (typeof cssText == 'string') return cssText
        }

        return ''
      },
      /**
       * @name 获取tags部分的size
       *
       */
      getTagsBlockSize() {
        let h = 0
        if (list.value) {
          if (state.isFolder) {
            h = getFoldSize()
          } else {
            h = getUnFoldSize()
          }
          // 20 是上边距
          return h
        }

        function getFoldSize() {
          let h = 0
          let count = 0
          let num = Number(props.initVisibleCount)
          if (props.initVisibleCount) {
            Array.from(list.value)
              .filter(vn => vn.nodeType == 1)
              .forEach(vk => {
                if (num > 0) {
                  if (vk.getAttribute('data-style') == 'inline') {
                    if (count >= 1) {
                      count = 0
                    } else {
                      count += 1
                      num--
                      h += Number(vk.clientHeight)
                      h += parseInt(window.getComputedStyle(vk, null).marginTop)
                      h += parseInt(window.getComputedStyle(vk, null).marginBottom)
                    }
                  } else {
                    num--
                    h += Number(vk.clientHeight)
                    h += parseInt(window.getComputedStyle(vk, null).marginTop)
                    h += parseInt(window.getComputedStyle(vk, null).marginBottom)
                  }
                }
              })
          }
          return h - 1
        }

        function getUnFoldSize() {
          let h = 0
          let count = 0
          const lists = Array.from(list.value)
            .filter(vn => vn.nodeType == 1)
            .reverse()

          lists.forEach((vk, index) => {
            if (vk.getAttribute('data-style') == 'inline') {
              if (count >= 1) {
                count = 0
              } else {
                count += 1
                h += Number(vk.clientHeight)
                h += parseInt(window.getComputedStyle(vk, null).marginTop)
                if (index !== lists.length - 1) h += parseInt(window.getComputedStyle(vk, null).marginBottom)
              }
            } else {
              h += Number(vk.clientHeight)
              h += parseInt(window.getComputedStyle(vk, null).marginTop)
              if (index !== lists.length - 1) h += parseInt(window.getComputedStyle(vk, null).marginBottom)
            }
          })
          return h
        }
      },
      seachTransBlockSizeObserve() {
        state.observe = new ResizeObserver(() => {
          state.wh = methods.getTagsBlockSize()
        })
        state.observe.observe(transitionWrapper?.value)
      },
    }

    watch(
      () => props.searchData,
      val => {
        if (val) {
          if (Array.isArray(val)) {
            state.copySearchData = props.searchData?.length ? JSON.parse(JSON.stringify(props.searchData)) : []
          }
          if (Object.prototype.toString.call(val) == '[object Object]') {
            state.copySearchData = [JSON.parse(JSON.stringify(val))]
          }
        }
      },
      { immediate: true }
    )

    onMounted(() => {
      transitionWrapper.value.style.transition = ''
      state.wh = methods.getTagsBlockSize()
      nextTick(() => {
        transitionWrapper.value.style.transition = 'height 0.25s ease'
        methods.seachTransBlockSizeObserve()
      })
    })

    onBeforeUnmount(() => {
      state.observe && state.observe.unobserve(transitionWrapper?.value)
    })

    return {
      ...toRefs(state),
      ...methods,
      transitionWrapper,
      list,
    }
  },
}
</script>

<style lang="scss" scoped>
.xy-search-group--wrapper {
  padding-bottom: 16px;
  width: 100%;
  transition: all 0.35s ease;

  .search-inner--container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 16px 16px 0;
    overflow: hidden;

    .search-item {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      min-width: 100%;

      .label {
        margin-bottom: 16px;
        min-width: 100px;
        font-size: 12px;
        line-height: 30px;
        text-align: right;
      }

      .value {
        :deep(> div) {
          margin-bottom: 16px;
        }
      }

      .has-more-conditions {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;

        .more-seach-conditions {
          margin-right: 16px;

          .search-item-reset--wrapper {
            margin-right: 0;
          }
        }
      }
    }

    .inline {
      min-width: auto;
    }
  }
}
</style>
