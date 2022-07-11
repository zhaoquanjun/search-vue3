<template>
  <div class="search-item-reset--wrapper" :class="{ 'item-flex--wrapper': itemData?.type == 'inputNumberRange' }">
    <!-- 纯文字 -->
    <el-input
      type="text"
      :prefix-icon="getPrefixIcon()"
      :maxlength="getInputLengthLimit()"
      :style="formatCssText()"
      v-model="itemData.searchVal"
      :placeholder="'请输入' + (itemData?.placeholder || itemData?.labelName)"
      @change="handleChangeInputValue"
      @keyup.enter="handleKeyupEvent"
      v-if="itemData?.type == 'input'"
    />
    <!-- 纯数字 -->
    <el-input
      type="text"
      :prefix-icon="getPrefixIcon()"
      :maxlength="getInputLengthLimit()"
      :style="formatCssText()"
      v-model="itemData.searchVal"
      :placeholder="'请输入' + (itemData?.placeholder || itemData?.labelName)"
      @change="handleChangeInputValue"
      @keyup.enter="handleKeyupEvent"
      v-if="itemData?.type == 'inputNumber'"
    />
    <!-- 数字范围输入框 -->
    <template v-if="itemData.type == 'inputNumberRange'">
      <el-input
        class="numberInput"
        :prefix-icon="getPrefixIcon()"
        :maxlength="getInputLengthLimit()"
        :style="formatCssText()"
        v-model.trim="itemData.searchVal[0]"
        :placeholder="'请输入' + (itemData?.frontPlaceholder || itemData.labelName)"
        clearable
        @input="handleChangeInputNumberRangeValue($event, 0)"
      />
      <span class="divider">-</span>
      <el-input
        class="numberInput"
        :prefix-icon="getPrefixIcon()"
        :maxlength="getInputLengthLimit()"
        :style="formatCssText()"
        v-model.trim="itemData.searchVal[1]"
        :placeholder="'请输入' + (itemData?.backPlaceholder || itemData.labelName)"
        clearable
        @input="handleChangeInputNumberRangeValue($event, 1)"
        @clear="handleClearInputNumberRangeValue"
      />
      <p class="suffix-text" v-if="itemData.suffixText">
        {{ itemData.suffixText }}
      </p>
    </template>
    <!-- 下拉单&多选框 -->
    <template v-if="itemData.type == 'select'">
      <el-select
        :style="formatCssText()"
        :multiple="itemData.multiple"
        :collapse-tags="itemData.multiple"
        :collapse-tags-tooltip="itemData.multiple"
        :placeholder="'请选择' + (itemData?.placeholder || itemData.labelName)"
        v-model="itemData.searchVal"
        clearable
        @change="handleChangeSelectValue"
      >
        <el-option v-for="item in itemData.options" :key="item.id" :label="item.name" :value="String(item.id)">
        </el-option>
      </el-select>
      <p class="suffix-text" v-if="itemData.suffixText">
        {{ itemData.suffixText }}
      </p>
    </template>
    <!-- radio 类型的单选 -->
    <template v-if="itemData.type == 'radio'">
      <el-radio-group v-model="itemData.searchVal" @change="handleChangeRadioValue">
        <el-radio :label="item.id" v-for="(item, index) in itemData.options" :key="index">{{ item.name }}</el-radio>
      </el-radio-group>
    </template>
    <!-- checkbox 类型的多选 -->
    <template v-if="itemData.type == 'checkbox'">
      <el-checkbox-group v-model="itemData.searchVal" @change="handleChangeCheckboxValue">
        <el-checkbox :label="item.id" v-for="item in itemData.options" :key="item.id">{{ item.name }}</el-checkbox>
      </el-checkbox-group>
    </template>
    <template v-if="itemData.type == 'cascader'">
      <el-cascader
        ref="cascader"
        v-model="itemData.searchVal"
        :options="itemData.options"
        :placeholder="'请选择' + (itemData?.placeholder || itemData?.labelName)"
        :props="{
          checkStrictly: false,
          value: 'id',
          label: 'name',
          children: 'subLit',
          multiple: true,
        }"
        collapse-tags
        clearable
        :style="formatCssText(itemData.elplusCssText)"
        @change="handleChangeCascader"
      />
      <p class="suffix-text" v-if="itemData.suffixText">
        {{ itemData.suffixText }}
      </p>
    </template>
    <!-- 日期单独选择器 - 精确到日 -->
    <template v-if="itemData.type == 'dateRange'">
      <el-date-picker
        v-model="itemData.searchVal"
        type="daterange"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        :value-format="itemData.formatter || 'YYYY-MM-DD'"
        :style="formatCssText()"
        @change="handleSelectQuickDate"
      >
      </el-date-picker>
    </template>
    <!-- 日期选择器 - 精确到秒 -->
    <template v-if="itemData.type == 'datetimeRange'">
      <el-date-picker
        v-model="itemData.searchVal"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        :value-format="itemData.formatter || 'YYYY-MM-DD HH:mm:ss'"
        :style="formatCssText(itemData.elplusCssText)"
        @change="handleSelectQuickDate"
        :default-time="defaultTime"
      >
      </el-date-picker>
    </template>
    <!-- 快速选择器 -->
    <template v-if="itemData.type == 'list'">
      <ul class="qk-list">
        <li
          class="list-item"
          v-for="item in itemData.options"
          :id="item.id"
          :key="item.id"
          :class="{
            active: getActiveNode(item.id),
          }"
          @click="handleSelectListValue(item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </template>
    <!-- 快速时间 + 自由时间选择器 -->
    <template v-if="itemData.type == 'qkdataRange' || itemData.type == 'qkdatetimeRange'">
      <ul class="qkdate-list">
        <li
          class="list-item"
          v-for="(item, index) in itemData.options"
          :key="index"
          :class="{
            active: getActiveNode(getQuickDate(item.days)) && isQuick,
          }"
          @click.stop="handleSelectQuickDate(item.days)"
        >
          {{ item.label }}
        </li>
        <el-date-picker
          :class="{ active: !isQuick }"
          v-model="itemData.searchVal"
          :type="itemData.type == 'qkdate' ? 'daterange' : 'datetimerange'"
          :default-time="itemData.type == 'qkdate' ? new Date() : defaultTime"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          :disabledDate="itemData.disabledDate"
          @change="handleSelectQuickDate"
        >
        </el-date-picker>
      </ul>
    </template>
    <!-- 按钮区 -->
    <template v-if="itemData.type == 'btns'">
      <template v-for="(btn, index) in itemData.list" :key="index">
        <el-button
          class="define-btn"
          :type="btn.btnType || 'primary'"
          :style="formatCssText(btn.elplusCssText)"
          @click.stop="btnEvent(btn?.eventType)"
          v-if="btn.type == 'btn'"
          >{{ btn.text || '查询' }}</el-button
        >
        <div
          class="folder-btn define-btn reset-btn"
          :style="formatCssText(btn.elplusCssText)"
          @click="handleToggleBlock"
          v-if="btn.type == 'folderbtn'"
        >
          <span>{{ isFolder ? btn.text1 : btn.text2 }}</span>
          <el-icon :class="[{ unfolder: !isFolder }, btn.fontName]"><ArrowDown /></el-icon>
        </div>
        <span
          class="define-btn text-btn reset-btn"
          :style="formatCssText(btn.elplusCssText)"
          @click.stop="btnEvent(btn?.eventType)"
          v-if="btn.type == 'textbtn'"
          >{{ btn.text }}</span
        >
      </template>
    </template>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
export default {
  props: {
    itemData: {
      type: Object,
      default: () => {
        return null
      },
    },
    index: {
      type: Number,
      default: 0,
    },
    cindex: {
      type: Number,
      default: -1,
    },
    isFolder: Boolean,
  },
  emits: ['searchFn', 'btnEvent'],
  setup(props, { emit }) {
    const state = reactive({
      isQuick: false,
      defaultTime: [new Date(2000, 1, 1, 0, 0, 0), new Date(2000, 2, 1, 23, 59, 59)],
    })

    const cascader = ref(null)

    // 属性设置方法
    const asMethods = {
      /**
       * @name 获取前置icon
       */
      getPrefixIcon() {
        return props.itemData?.prefixIcon || ''
      },
      /**
       * @name 格式化CSS
       */
      formatCssText() {
        const cssText = props.itemData.elplusCssText
        if (typeof cssText == 'object') {
          let str = ''
          Array.from(Object.keys(cssText)).forEach(key => {
            str += key + ':' + cssText[key]
          })
          return str
        }

        if (typeof cssText == 'string') return cssText

        return ''
      },
      /**
       * @name input-max-length
       */
      getInputLengthLimit() {
        return props.itemData?.maxLength || 20
      },
    }

    // 更新 value 值得方法
    const valueMethods = {
      /**
       * @name input输入
       * @param val 选中的数据
       * @param source 当前搜索栏源数据
       */
      handleChangeInputValue(val) {
        const temp = JSON.parse(JSON.stringify(props.itemData))
        if (temp.type == 'inputnumber') {
          temp.searchVal = val.replace(/^0(0+)|[^\d]+/g, '')
        }

        valueMethods.searchFn(temp)
      },
      /**
       * @name
       */
      handleKeyupEvent() {
        const temp = JSON.parse(JSON.stringify(props.itemData))
        if (temp.type == 'inputnumber') {
          temp.searchVal = temp.searchVal.replace(/^0(0+)|[^\d]+/g, '')
        }

        valueMethods.searchFn(temp)
      },
      /**
       * @name 修改数字区间数据
       * @param { number / string } val 返回值
       * @param { number } index 索引
       */
      handleChangeInputNumberRangeValue(val, index) {
        const temp = JSON.parse(JSON.stringify(props.itemData))
        temp.searchVal[index] = val.replace(/^0(0+)|[^\d]+/g, '')
        if (temp.searchVal[1] == '') return
        valueMethods.searchFn(temp)
      },
      /**
       * @name 清空inputnumberrange后面得值
       */
      handleClearInputNumberRangeValue() {
        const temp = JSON.parse(JSON.stringify(props.itemData))
        if (!temp.immediate) {
          temp.searchVal = ['', '']
        }

        if (temp.searchVal[1] == '') return
        valueMethods.searchFn(temp)
      },
      /**
       * @name checkbox下拉选择
       * @param val 选中的数据
       */
      handleChangeSelectValue(val) {
        const temp = JSON.parse(JSON.stringify(props.itemData))
        temp.searchVal = val
        valueMethods.searchFn(temp)
      },
      /**
       * @name radio 单选
       * @param { string } val 选中的值
       */
      handleChangeRadioValue(val) {
        const temp = JSON.parse(JSON.stringify(props?.itemData))
        temp.searchVal = val
        valueMethods.searchFn(temp)
      },
      /**
       * @name checkbox 多选
       * @param { string } val 选中的值
       */
      handleChangeCheckboxValue(val) {
        const temp = JSON.parse(JSON.stringify(props?.itemData))
        temp.searchVal = val
        valueMethods.searchFn(temp)
      },
      /**
       * @name 级联选择
       */
      handleChangeCascader(val) {
        const temp = JSON.parse(JSON.stringify(props?.itemData))
        temp.searchVal = val
        valueMethods.searchFn(temp)
      },
      /**
       * @name 日期选择
       * @param { array } val 选择后得数据
       */
      handleSelectQuickDate(val) {
        const types = ['qkdateRange', 'qkdateeRange', 'dateRange']
        const temp = JSON.parse(JSON.stringify(props?.itemData))
        if (typeof val == 'number') {
          state.isQuick = true
          const newDate = valueMethods.getQuickDate(val)
          if (JSON.stringify(temp.searchVal) == JSON.stringify(newDate)) {
            temp.searchVal = ['', '']
          } else {
            temp.searchVal = newDate
          }
        } else {
          state.isQuick = false
          // Null || Array 类型 需要用length去判断
          if (val && val.length) {
            const dateArr = toRefs(val)
            const prev = valueMethods.formatDate(
              dateArr[0].value,
              types.includes(props?.itemData.type) ? 'YYYY-MM-DD' : 'YYYY-MM-DD hh:mm:ss'
            )
            const next = valueMethods.formatDate(
              dateArr[1].value,
              types.includes(props?.itemData.type) ? 'YYYY-MM-DD' : 'YYYY-MM-DD hh:mm:ss'
            )
            temp.searchVal = [prev, next]
          }
        }

        valueMethods.searchFn(temp)
      },
      /**
       * @name 获取快速选择日期时间段
       * @param days 要校验的时间
       */
      getQuickDate(days) {
        const todayStr = new Date().getTime()
        const prevDay = valueMethods.formatDate(todayStr + days * 24 * 60 * 60 * 1000, 'YYYY-MM-DD') + ' 00:00:00'
        const prevDayLastTime =
          valueMethods.formatDate(todayStr + days * 24 * 60 * 60 * 1000, 'YYYY-MM-DD') + ' 23:59:59'
        const currentDay = valueMethods.formatDate(todayStr, 'YYYY-MM-DD') + ' 23:59:59'
        if (days == -1) {
          return [prevDay, prevDayLastTime]
        } else {
          return [prevDay, currentDay]
        }
      },
      /**
       * @name list类型获取选中节点
       */
      getActiveNode(value) {
        if (Array.isArray(value)) {
          return JSON.stringify(props?.itemData.searchVal) == JSON.stringify(value)
        } else {
          return props?.itemData?.searchVal?.includes(String(value))
        }
      },
      /**
       * @name type是list的选择
       * @param { object } item 选中数据
       */
      handleSelectListValue(item) {
        const temp = JSON.parse(JSON.stringify(props?.itemData))
        let oVal = temp?.searchVals || []
        if (!temp.multiple) {
          // 单选
          oVal = oVal[0] == item.id ? [] : [item.id]
        } else {
          // 多选
          if (oVal.includes(item.id)) {
            oVal = oVal.filter(vk => vk != item.id)
          } else {
            oVal.push(...[item.id])
          }
        }

        temp.searchVal = oVal
        valueMethods.searchFn(temp)
      },
      handleToggleBlock() {
        valueMethods.btnEvent('toggle')
      },
      /**
       * @name 搜索事件
       */
      searchFn(data) {
        emit('searchFn', {
          index: props.index,
          cindex: props.cindex,
          data: data,
        })
      },
      /**
       * @name 按钮事件
       * @param { string } type 事件类型
       */
      btnEvent(type) {
        emit('btnEvent', type)
      },
      /**
       * @name 格式化时间
       * @param date 要格式化得时间
       * @param format 格式类型
       */
      formatDate(date, format = 'YYYY-MM-DD hh:mm:ss') {
        if (isNaN(new Date(date).getTime())) {
          throw new Error(`${date} 不是一个有效的时间`)
        }

        if (!(date instanceof Date)) {
          date = new Date(date)
        }

        const o = {
          'Y+': date.getFullYear(),
          'M+': date.getMonth() + 1,
          'D+': date.getDate(),
          'h+': date.getHours(),
          'm+': date.getMinutes(),
          's+': date.getSeconds(),
        }

        for (let k in o) {
          if (new RegExp(`(${k})`).test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : `0${o[k]}`.substr(-RegExp.$1.length))
          }
        }

        return format
      },
    }

    return {
      ...toRefs(state),
      ...asMethods,
      ...valueMethods,
      cascader,
    }
  },
}
</script>

<style lang="scss" scoped>
.search-item-reset--wrapper {
  margin-right: 16px;

  .qk-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .list-item {
      margin-left: 8px;
      padding: 0 24px;
      line-height: 30px;
      font-size: 12px;
      border: 1px solid #e2e4eb;
      border-radius: 4px;

      &:first-of-type {
        margin-left: 0;
      }

      &.active {
        color: #3661f0;
        border-color: #3661f0;
        z-index: 11;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }

  .qkdate-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .list-item {
      margin-right: 8px;
      padding: 0 24px;
      line-height: 30px;
      font-size: 12px;
      border: 1px solid #e2e4eb;
      border-radius: 4px;

      &:hover {
        cursor: pointer;
      }

      &.active {
        color: #3661f0;
        border-color: #3661f0;
        z-index: 11;
      }
    }
  }

  .define-btn {
    margin-right: 16px;
    line-height: 32px;
  }

  .folder-btn {
    display: flex;
    align-items: center;

    i {
      margin-left: 4px;
    }
  }

  .reset-btn {
    color: #3661f0;

    &:hover {
      color: #5e80f3;
      cursor: pointer;
    }
  }
}

.item-flex--wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .divider {
    margin: 0 8px;
    color: #b1b8c4;
  }

  .suffix-text {
    padding-left: 8px;
    font-size: 12px;
    color: #666666;
    white-space: nowrap;
  }
}
</style>
