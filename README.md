<p align="center">QJsearch -  A search component depend on Vue3 and Element-Plus</p>

- 💪 Vue 3 Composition API
- 🔥 Written in Javascript


## Getting Started

Allright, if you want to implement a quick search, maybe you could use this.</br>
It mainly includes common form search and quick list search.</br>
Hope it can help complete your work smoothly


## Install

npm
```
npm install qjsearch 
```
cnpm
```
cnpm install qjsearch
```
yarn
```
yarn add qjsearch
```


## Use

This is a Component for Vue</br>
So you can registere it in Vue</br>

1. 引入注册
```
import Vue from 'vue'
import QJsearch from 'qjsearch'
Vue.use(QJsearch)
```
2. 在模板中使用
> - searchData：搜索条件数据（Array | Object）
> - initVisibleCount: 收起展示得行数（rows）
> - searchFn：触发搜索得回调函数
```
<QJsearch :searchData="searchData" :initVisibleCount="2" @searchFn="searchCallback" />
```

## Field Definitions

1. type: 搜索条件类型
   1. input 普通表单
   2. inputNumber 数字类型表单
   3. inputNumberRange 数字区间表单
   4. radio 表单单选
   5. checkbox 表单复选
   6. select 表单下拉
   7. dateRange / datetimeRange / qkdateRange / qkdatetimeRange 时间区间选择(年-月-日 / 年 - 月 - 日 时：分：秒) (qk + 'xxx' 携带快速选择范围：昨天、一周内... 可自定义)
   8. list 列表快速选择
   9. cascader 级联选择  
   10. btns 按钮区域（btn / folderbtn / textbtn）
2. propValueName: 参数字段prop
3. labelName: 表单label name
4. placeholder：表单placehoder（xxx + range 类型：placeholder1 placeholder2）
5. labelVisibel：label是否可见 默认是可见得
6. searchVal： 搜索条件value值
7. display: block / inline 块级 or 行内
8. wrapperCssText： 表单元素容器样式 （string / object）
8. elplusCssText: 表单元素样式
9. immediate：是否立即执行搜索 默认是 false
10. suffixText：表单后缀量级单位
11. disabledDate：不可选择时间区间
12. more: 更多：Array 是一个自己选择条件集合
```
searchData -> eg:
const searchData = ref([
      {
        type: 'input',
        propValueName: 'enterpriseName',
        labelName: '企业名称',
        labelVisibel: true,
        placeholder: '请输入企业名称',
        searchVal: '',
        display: 'inline',
        wrapperCssText: 'width: 400px',
        elplusCssText: { width: '400px' }, // 可以接受字符串或者对象格式
        immediate: false,
      },
      {
        type: 'btns',
        labelVisible: false,
        list: [
          {
            type: 'folderbtn',
            text1: '展开更多筛选条件',
            text2: '收起更多筛选条件',
          },
        ],
        attr: {
          display: 'inline',
        },
      },
      {
        type: 'inputNumber',
        propValueName: 'num',
        labelName: '数量',
        labelVisibel: true,
        searchVal: '',
        immediate: false,
      },
      {
        type: 'inputNumberRange',
        propValueName: 'num',
        labelName: '数量',
        labelVisibel: true,
        searchVal: ['', ''],
        immediate: false,
      },
      {
        type: 'select',
        propValueName: 'regTimeList',
        labelName: '企业经营实力',
        labelVisibel: true,
        options: [
          {
            name: '1年之内',
            id: '1',
          },
          {
            name: '2年之内',
            id: '2',
          },
        ],
        immediate: false,
        multiple: true,
        more: [
          {
            type: 'select',
            propValueName: 'financeList',
            options: [
              {
                name: 'A轮',
                id: 'A',
              },
              {
                name: 'B轮',
                id: 'B',
              },
            ],
            immediate: false,
            labelName: '融资轮次',
            elplusCssText: { width: '180px' },
            multiple: true,
            wrapperCssText: { 'margin-right': '20px' },
          },
          {
            type: 'inputNumberRange',
            propValueName: 'capital',
            searchVal: ['', ''],
            labelVisible: false,
            immediate: false,
            maxLength: 10,
            labelName: '注册资本',
            suffixText: '万注册资本',
            wrapperCssText: { 'margin-right': '20px' },
          },
          {
            type: 'dateRange',
            propValueName: 'recentVisitTime',
            labelName: '最近来访时间',

            immediate: false,
            disabledDate: time => {
              return time.getTime() >= Date.now() || time.getTime() < new Date('2022-01-31')
            },
          },
        ],
      },
      {
        type: 'list',
        propValueName: 'level',
        labelVisibel: true,
        options: [
          {
            name: 'A轮',
            id: 'A',
          },
          {
            name: 'B轮',
            id: 'B',
          },
        ],
        immediate: false,
        labelName: '企业等级',
        searchVal: ['A'],
        multiple: true,
        wrapperCssText: { 'margin-right': '20px' },
      },
      {
        type: 'qkdatetimeRange',
        propValueName: 'firstAccessTime',
        labelVisibel: true,
        labelName: '首访时间',
        immediate: false,
        disabledDate: time => {
          return time.getTime() >= Date.now() || time.getTime() < new Date('2022-01-31')
        },
        options: [
          {
            days: -1,
            label: '昨天',
          },
          {
            days: 0,
            label: '今天',
          },
          {
            days: -29,
            label: '最近1个月',
          },
        ],
      },
      {
        type: 'radio',
        propValueName: 'years',
        labelName: '经营时长',
        labelVisibel: true,
        options: [
          {
            name: '1年之内',
            id: '1',
          },
          {
            name: '2年之内',
            id: '2',
          },
        ],
        immediate: false,
      },
      {
        type: 'checkbox',
        propValueName: 'years1',
        labelName: '经营时长',
        labelVisibel: true,
        options: [
          {
            name: '1年之内',
            id: '1',
          },
          {
            name: '2年之内',
            id: '2',
          },
        ],
        immediate: false,
      },
      {
        type: 'cascader',
        propValueName: 'industryList',
        labelName: '企业属性',
        options: [
          {
            id: '1',
            name: '农、林、牧、渔业',
            subLit: [
              {
                id: '2',
                name: '农业',
                subLit: [
                  {
                    id: '3',
                    name: '谷物种植',
                    subLit: null,
                  },
                  {
                    id: '8',
                    name: '豆类、油料和薯类种植',
                    subLit: null,
                  },
                  {
                    id: '12',
                    name: '棉、麻、糖、烟草种植',
                    subLit: null,
                  },
                  {
                    id: '17',
                    name: '蔬菜、食用菌及园艺作物种植',
                    subLit: null,
                  },
                  {
                    id: '22',
                    name: '水果种植',
                    subLit: null,
                  },
                  {
                    id: '28',
                    name: '坚果、含油果、香料和饮料作物种植',
                    subLit: null,
                  },
                  {
                    id: '34',
                    name: '中药材种植',
                    subLit: null,
                  },
                  {
                    id: '37',
                    name: '草种植及割草',
                    subLit: null,
                  },
                  {
                    id: '40',
                    name: '其他农业',
                    subLit: null,
                  },
                ],
              },
            ],
          },
        ],
        immediate: false,
      },
      {
        type: 'btns',
        labelVisibel: true,
        list: [
          {
            type: 'btn',
            btnType: 'primary'
          },
        ]
      },
    ])
```