<template>
  <QJsearch :searchData="searchData" :initVisibleCount="2" @searchFn="searchCallback" />
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const searchData = ref([
      {
        type: 'input',
        propValueName: 'enterpriseName',
        labelName: '企业名称',
        selectName: '企业名称',
        labelVisibel: true,
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
        display: 'inline',
      },
      {
        type: 'inputNumber',
        propValueName: 'num',
        labelName: '数量',
        selectName: '数量',
        labelVisibel: true,
        searchVal: '',
        immediate: false,
      },
      {
        type: 'inputNumberRange',
        propValueName: 'num',
        labelName: '数量',
        selectName: '数量',
        labelVisibel: true,
        searchVal: ['', ''],
        immediate: false,
      },
      {
        type: 'select',
        propValueName: 'regTimeList',
        selectName: '注册时间',
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
          {
            name: '3年之内',
            id: '3',
          },
          {
            name: '4年之内',
            id: '4',
          },
          {
            name: '5年之内',
            id: '5',
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
              {
                name: 'C轮',
                id: 'C',
              },
              {
                name: 'D轮',
                id: 'D',
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
            isSquare: true,
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
            selectName: '最近来访时间',

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
          {
            name: 'C轮',
            id: 'C',
          },
          {
            name: 'D轮',
            id: 'D',
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
        selectName: '首访时间',
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
        selectName: '注册时间',
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
          {
            name: '3年之内',
            id: '3',
          },
          {
            name: '4年之内',
            id: '4',
          },
          {
            name: '5年之内',
            id: '5',
          },
        ],
        immediate: false,
      },
      {
        type: 'checkbox',
        propValueName: 'years1',
        selectName: '注册时间',
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
          {
            name: '3年之内',
            id: '3',
          },
          {
            name: '4年之内',
            id: '4',
          },
          {
            name: '5年之内',
            id: '5',
          },
        ],
        immediate: false,
      },
      {
        type: 'cascader',
        propValueName: 'industryList',
        labelName: '企业属性',
        selectName: '行业',
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
              {
                id: '42',
                name: '林业',
                subLit: [
                  {
                    id: '43',
                    name: '林木育种和育苗',
                    subLit: null,
                  },
                  {
                    id: '46',
                    name: '造林和更新',
                    subLit: null,
                  },
                  {
                    id: '48',
                    name: '森林经营、管护和改培',
                    subLit: null,
                  },
                  {
                    id: '51',
                    name: '木材和竹材采运',
                    subLit: null,
                  },
                  {
                    id: '54',
                    name: '林产品采集',
                    subLit: null,
                  },
                ],
              },
              {
                id: '57',
                name: '畜牧业',
                subLit: [
                  {
                    id: '58',
                    name: '牲畜饲养',
                    subLit: null,
                  },
                  {
                    id: '65',
                    name: '家禽饲养',
                    subLit: null,
                  },
                  {
                    id: '70',
                    name: '狩猎和捕捉动物',
                    subLit: null,
                  },
                  {
                    id: '72',
                    name: '其他畜牧业',
                    subLit: null,
                  },
                ],
              },
              {
                id: '76',
                name: '渔业',
                subLit: [
                  {
                    id: '77',
                    name: '水产养殖',
                    subLit: null,
                  },
                  {
                    id: '80',
                    name: '水产捕捞',
                    subLit: null,
                  },
                ],
              },
              {
                id: '83',
                name: '农、林、牧、渔专业及辅助性活动',
                subLit: [
                  {
                    id: '84',
                    name: '农业专业及辅助性活动',
                    subLit: null,
                  },
                  {
                    id: '91',
                    name: '林业专业及辅助性活动',
                    subLit: null,
                  },
                  {
                    id: '96',
                    name: '畜牧专业及辅助性活动',
                    subLit: null,
                  },
                  {
                    id: '100',
                    name: '渔业专业及辅助性活动',
                    subLit: null,
                  },
                ],
              },
            ],
          },
          {
            id: '103',
            name: '采矿业',
            subLit: [
              {
                id: '104',
                name: '煤炭开采和洗选业',
                subLit: [
                  {
                    id: '105',
                    name: '烟煤和无烟煤开采洗选',
                    subLit: null,
                  },
                  {
                    id: '107',
                    name: '褐煤开采洗选',
                    subLit: null,
                  },
                  {
                    id: '109',
                    name: '其他煤炭采选',
                    subLit: null,
                  },
                ],
              },
              {
                id: '111',
                name: '石油和天然气开采业',
                subLit: [
                  {
                    id: '112',
                    name: '石油开采',
                    subLit: null,
                  },
                  {
                    id: '115',
                    name: '天然气开采',
                    subLit: null,
                  },
                ],
              },
              {
                id: '118',
                name: '黑色金属矿采选业',
                subLit: [
                  {
                    id: '119',
                    name: '铁矿采选',
                    subLit: null,
                  },
                  {
                    id: '121',
                    name: '锰矿、铬矿采选',
                    subLit: null,
                  },
                  {
                    id: '123',
                    name: '其他黑色金属矿采选',
                    subLit: null,
                  },
                ],
              },
              {
                id: '125',
                name: '有色金属矿采选业',
                subLit: [
                  {
                    id: '126',
                    name: '常用有色金属矿采选',
                    subLit: null,
                  },
                  {
                    id: '135',
                    name: '贵金属矿采选',
                    subLit: null,
                  },
                  {
                    id: '139',
                    name: '稀有稀土金属矿采选',
                    subLit: null,
                  },
                ],
              },
              {
                id: '144',
                name: '非金属矿采选业',
                subLit: [
                  {
                    id: '145',
                    name: '土砂石开采',
                    subLit: null,
                  },
                  {
                    id: '150',
                    name: '化学矿开采',
                    subLit: null,
                  },
                  {
                    id: '152',
                    name: '采盐',
                    subLit: null,
                  },
                  {
                    id: '154',
                    name: '石棉及其他非金属矿采选',
                    subLit: null,
                  },
                ],
              },
              {
                id: '159',
                name: '开采专业及辅助性活动',
                subLit: [
                  {
                    id: '160',
                    name: '煤炭开采和洗选专业及辅助性活动',
                    subLit: null,
                  },
                  {
                    id: '162',
                    name: '石油和天然气开采专业及辅助性活动',
                    subLit: null,
                  },
                  {
                    id: '164',
                    name: '其他开采专业及辅助性活动',
                    subLit: null,
                  },
                ],
              },
              {
                id: '166',
                name: '其他采矿业',
                subLit: [
                  {
                    id: '167',
                    name: '其他采矿业',
                    subLit: null,
                  },
                ],
              },
            ],
          },
          {
            id: '169',
            name: '制造业',
            subLit: [
              {
                id: '170',
                name: '农副食品加工业',
                subLit: [
                  {
                    id: '171',
                    name: '谷物磨制',
                    subLit: null,
                  },
                  {
                    id: '177',
                    name: '饲料加工',
                    subLit: null,
                  },
                  {
                    id: '180',
                    name: '植物油加工',
                    subLit: null,
                  },
                  {
                    id: '183',
                    name: '制糖业',
                    subLit: null,
                  },
                  {
                    id: '185',
                    name: '屠宰及肉类加工',
                    subLit: null,
                  },
                  {
                    id: '189',
                    name: '水产品加工',
                    subLit: null,
                  },
                  {
                    id: '194',
                    name: '蔬菜、菌类、水果和坚果加工',
                    subLit: null,
                  },
                  {
                    id: '198',
                    name: '其他农副食品加工',
                    subLit: null,
                  },
                ],
              },
              {
                id: '203',
                name: '食品制造业',
                subLit: [
                  {
                    id: '204',
                    name: '焙烤食品制造',
                    subLit: null,
                  },
                  {
                    id: '207',
                    name: '糖果、巧克力及蜜饯制造',
                    subLit: null,
                  },
                  {
                    id: '210',
                    name: '方便食品制造',
                    subLit: null,
                  },
                  {
                    id: '215',
                    name: '乳制品制造',
                    subLit: null,
                  },
                  {
                    id: '219',
                    name: '罐头食品制造',
                    subLit: null,
                  },
                  {
                    id: '224',
                    name: '调味品、发酵制品制造',
                    subLit: null,
                  },
                  {
                    id: '228',
                    name: '其他食品制造',
                    subLit: null,
                  },
                ],
              },
              {
                id: '235',
                name: '酒、饮料和精制茶制造业',
                subLit: [
                  {
                    id: '236',
                    name: '酒的制造',
                    subLit: null,
                  },
                  {
                    id: '243',
                    name: '饮料制造',
                    subLit: null,
                  },
                  {
                    id: '250',
                    name: '精制茶加工',
                    subLit: null,
                  },
                ],
              },
              {
                id: '252',
                name: '烟草制品业',
                subLit: [
                  {
                    id: '253',
                    name: '烟叶复烤',
                    subLit: null,
                  },
                  {
                    id: '255',
                    name: '卷烟制造',
                    subLit: null,
                  },
                  {
                    id: '257',
                    name: '其他烟草制品制造',
                    subLit: null,
                  },
                ],
              },
              {
                id: '259',
                name: '纺织业',
                subLit: [
                  {
                    id: '260',
                    name: '棉纺织及印染精加工',
                    subLit: null,
                  },
                  {
                    id: '264',
                    name: '毛纺织及染整精加工',
                    subLit: null,
                  },
                  {
                    id: '268',
                    name: '麻纺织及染整精加工',
                    subLit: null,
                  },
                  {
                    id: '272',
                    name: '丝绢纺织及印染精加工',
                    subLit: null,
                  },
                  {
                    id: '276',
                    name: '化纤织造及印染精加工',
                    subLit: null,
                  },
                  {
                    id: '279',
                    name: '针织或钩针编织物及其制品制造',
                    subLit: null,
                  },
                  {
                    id: '283',
                    name: '家用纺织制成品制造',
                    subLit: null,
                  },
                  {
                    id: '288',
                    name: '产业用纺织制成品制造',
                    subLit: null,
                  },
                ],
              },
              {
                id: '294',
                name: '纺织服装、服饰业',
                subLit: [
                  {
                    id: '295',
                    name: '机织服装制造',
                    subLit: null,
                  },
                  {
                    id: '298',
                    name: '针织或钩针编织服装制造',
                    subLit: null,
                  },
                  {
                    id: '301',
                    name: '服饰制造',
                    subLit: null,
                  },
                ],
              },
              {
                id: '303',
                name: '皮革、毛皮、羽毛及其制品和制鞋业',
                subLit: [
                  {
                    id: '304',
                    name: '皮革鞣制加工',
                    subLit: null,
                  },
                  {
                    id: '306',
                    name: '皮革制品制造',
                    subLit: null,
                  },
                  {
                    id: '311',
                    name: '毛皮鞣制及制品加工',
                    subLit: null,
                  },
                  {
                    id: '315',
                    name: '羽毛（绒）加工及制品制造',
                    subLit: null,
                  },
                  {
                    id: '318',
                    name: '制鞋业',
                    subLit: null,
                  },
                ],
              },
              {
                id: '324',
                name: '木材加工和木、竹、藤、棕、草制品业',
                subLit: [
                  {
                    id: '325',
                    name: '木材加工',
                    subLit: null,
                  },
                  {
                    id: '330',
                    name: '人造板制造',
                    subLit: null,
                  },
                  {
                    id: '335',
                    name: '木质制品制造',
                    subLit: null,
                  },
                  {
                    id: '342',
                    name: '竹、藤、棕、草等制品制造',
                    subLit: null,
                  },
                ],
              },
              {
                id: '347',
                name: '家具制造业',
                subLit: [
                  {
                    id: '348',
                    name: '木质家具制造',
                    subLit: null,
                  },
                  {
                    id: '350',
                    name: '竹、藤家具制造',
                    subLit: null,
                  },
                  {
                    id: '352',
                    name: '金属家具制造',
                    subLit: null,
                  },
                  {
                    id: '354',
                    name: '塑料家具制造',
                    subLit: null,
                  },
                  {
                    id: '356',
                    name: '其他家具制造',
                    subLit: null,
                  },
                ],
              },
              {
                id: '358',
                name: '造纸和纸制品业',
                subLit: [
                  {
                    id: '359',
                    name: '纸浆制造',
                    subLit: null,
                  },
                  {
                    id: '362',
                    name: '造纸',
                    subLit: null,
                  },
                  {
                    id: '366',
                    name: '纸制品制造',
                    subLit: null,
                  },
                ],
              },
              {
                id: '369',
                name: '印刷和记录媒介复制业',
                subLit: [
                  {
                    id: '370',
                    name: '印刷',
                    subLit: null,
                  },
                  {
                    id: '374',
                    name: '装订及印刷相关服务',
                    subLit: null,
                  },
                  {
                    id: '376',
                    name: '记录媒介复制',
                    subLit: null,
                  },
                ],
              },
              {
                id: '378',
                name: '文教、工美、体育和娱乐用品制造业',
                subLit: [
                  {
                    id: '379',
                    name: '文教办公用品制造',
                    subLit: null,
                  },
                  {
                    id: '385',
                    name: '乐器制造',
                    subLit: null,
                  },
                  {
                    id: '390',
                    name: '工艺美术及礼仪用品制造',
                    subLit: null,
                  },
                  {
                    id: '400',
                    name: '体育用品制造',
                    subLit: null,
                  },
                  {
                    id: '406',
                    name: '玩具制造',
                    subLit: null,
                  },
                  {
                    id: '414',
                    name: '游艺器材及娱乐用品制造',
                    subLit: null,
                  },
                ],
              },
              {
                id: '418',
                name: '石油、煤炭及其他燃料加工业',
                subLit: [
                  {
                    id: '419',
                    name: '精炼石油产品制造',
                    subLit: null,
                  },
                  {
                    id: '422',
                    name: '煤炭加工',
                    subLit: null,
                  },
                  {
                    id: '428',
                    name: '核燃料加工',
                    subLit: null,
                  },
                  {
                    id: '430',
                    name: '生物质燃料加工',
                    subLit: null,
                  },
                ],
              },
              {
                id: '433',
                name: '化学原料和化学制品制造业',
                subLit: [
                  {
                    id: '434',
                    name: '基础化学原料制造',
                    subLit: null,
                  },
                  {
                    id: '440',
                    name: '肥料制造',
                    subLit: null,
                  },
                  {
                    id: '447',
                    name: '农药制造',
                    subLit: null,
                  },
                  {
                    id: '450',
                    name: '涂料、油墨、颜料及类似产品制造',
                    subLit: null,
                  },
                  {
                    id: '457',
                    name: '合成材料制造',
                    subLit: null,
                  },
                  {
                    id: '462',
                    name: '专用化学产品制造',
                    subLit: null,
                  },
                  {
                    id: '471',
                    name: '炸药、火工及焰火产品制造',
                    subLit: null,
                  },
                  {
                    id: '474',
                    name: '日用化学产品制造',
                    subLit: null,
                  },
                ],
              },
              {
                id: '480',
                name: '医药制造业',
                subLit: [
                  {
                    id: '481',
                    name: '化学药品原料药制造',
                    subLit: null,
                  },
                  {
                    id: '483',
                    name: '化学药品制剂制造',
                    subLit: null,
                  },
                  {
                    id: '485',
                    name: '中药饮片加工',
                    subLit: null,
                  },
                  {
                    id: '487',
                    name: '中成药生产',
                    subLit: null,
                  },
                  {
                    id: '489',
                    name: '兽用药品制造',
                    subLit: null,
                  },
                  {
                    id: '491',
                    name: '生物药品制品制造',
                    subLit: null,
                  },
                  {
                    id: '494',
                    name: '卫生材料及医药用品制造',
                    subLit: null,
                  },
                  {
                    id: '496',
                    name: '药用辅料及包装材料',
                    subLit: null,
                  },
                ],
              },
              {
                id: '498',
                name: '化学纤维制造业',
                subLit: [
                  {
                    id: '499',
                    name: '纤维素纤维原料及纤维制造',
                    subLit: null,
                  },
                  {
                    id: '502',
                    name: '合成纤维制造',
                    subLit: null,
                  },
                  {
                    id: '510',
                    name: '生物基材料制造',
                    subLit: null,
                  },
                ],
              },
              {
                id: '513',
                name: '橡胶和塑料制品业',
                subLit: [
                  {
                    id: '514',
                    name: '橡胶制品业',
                    subLit: null,
                  },
                  {
                    id: '522',
                    name: '塑料制品业',
                    subLit: null,
                  },
                ],
              },
              {
                id: '532',
                name: '非金属矿物制品业',
                subLit: [
                  {
                    id: '533',
                    name: '水泥、石灰和石膏制造',
                    subLit: null,
                  },
                  {
                    id: '536',
                    name: '石膏、水泥制品及类似制品制造',
                    subLit: null,
                  },
                  {
                    id: '542',
                    name: '砖瓦、石材等建筑材料制造',
                    subLit: null,
                  },
                  {
                    id: '548',
                    name: '玻璃制造',
                    subLit: null,
                  },
                  {
                    id: '552',
                    name: '玻璃制品制造',
                    subLit: null,
                  },
                  {
                    id: '561',
                    name: '玻璃纤维和玻璃纤维增强塑料制品制造',
                    subLit: null,
                  },
                  {
                    id: '564',
                    name: '陶瓷制品制造',
                    subLit: null,
                  },
                  {
                    id: '572',
                    name: '耐火材料制品制造',
                    subLit: null,
                  },
                  {
                    id: '576',
                    name: '石墨及其他非金属矿物制品制造',
                    subLit: null,
                  },
                ],
              },
              {
                id: '579',
                name: '黑色金属冶炼和压延加工业',
                subLit: [
                  {
                    id: '580',
                    name: '炼铁',
                    subLit: null,
                  },
                  {
                    id: '582',
                    name: '炼钢',
                    subLit: null,
                  },
                  {
                    id: '584',
                    name: '钢压延加工',
                    subLit: null,
                  },
                  {
                    id: '586',
                    name: '铁合金冶炼',
                    subLit: null,
                  },
                ],
              },
              {
                id: '588',
                name: '有色金属冶炼和压延加工业',
                subLit: [
                  {
                    id: '589',
                    name: '常用有色金属冶炼',
                    subLit: null,
                  },
                  {
                    id: '599',
                    name: '贵金属冶炼',
                    subLit: null,
                  },
                  {
                    id: '603',
                    name: '稀有稀土金属冶炼',
                    subLit: null,
                  },
                  {
                    id: '607',
                    name: '有色金属合金制造',
                    subLit: null,
                  },
                  {
                    id: '609',
                    name: '有色金属压延加工',
                    subLit: null,
                  },
                ],
              },
              {
                id: '615',
                name: '金属制品业',
                subLit: [
                  {
                    id: '616',
                    name: '结构性金属制品制造',
                    subLit: null,
                  },
                  {
                    id: '619',
                    name: '金属工具制造',
                    subLit: null,
                  },
                  {
                    id: '625',
                    name: '集装箱及金属包装容器制造',
                    subLit: null,
                  },
                  {
                    id: '629',
                    name: '金属丝绳及其制品制造',
                    subLit: null,
                  },
                  {
                    id: '631',
                    name: '建筑、安全用金属制品制造',
                    subLit: null,
                  },
                  {
                    id: '636',
                    name: '金属表面处理及热处理加工',
                    subLit: null,
                  },
                  {
                    id: '638',
                    name: '搪瓷制品制造',
                    subLit: null,
                  },
                  {
                    id: '643',
                    name: '金属制日用品制造',
                    subLit: null,
                  },
                  {
                    id: '648',
                    name: '铸造及其他金属制品制造',
                    subLit: null,
                  },
                ],
              },
              {
                id: '654',
                name: '通用设备制造业',
                subLit: [
                  {
                    id: '655',
                    name: '锅炉及原动设备制造',
                    subLit: null,
                  },
                  {
                    id: '662',
                    name: '金属加工机械制造',
                    subLit: null,
                  },
                  {
                    id: '669',
                    name: '物料搬运设备制造',
                    subLit: null,
                  },
                  {
                    id: '678',
                    name: '泵、阀门、压缩机及类似机械制造',
                    subLit: null,
                  },
                  {
                    id: '685',
                    name: '轴承、齿轮和传动部件制造',
                    subLit: null,
                  },
                  {
                    id: '690',
                    name: '烘炉、风机、包装等设备制造',
                    subLit: null,
                  },
                  {
                    id: '698',
                    name: '文化、办公用机械制造',
                    subLit: null,
                  },
                  {
                    id: '705',
                    name: '通用零部件制造',
                    subLit: null,
                  },
                  {
                    id: '711',
                    name: '其他通用设备制造业',
                    subLit: null,
                  },
                ],
              },
              {
                id: '716',
                name: '专用设备制造业',
                subLit: [
                  {
                    id: '717',
                    name: '采矿、冶金、建筑专用设备制造',
                    subLit: null,
                  },
                  {
                    id: '725',
                    name: '化工、木材、非金属加工专用设备制造',
                    subLit: null,
                  },
                  {
                    id: '732',
                    name: '食品、饮料、烟草及饲料生产专用设备制造',
                    subLit: null,
                  },
                  {
                    id: '737',
                    name: '印刷、制药、日化及日用品生产专用设备制造',
                    subLit: null,
                  },
                  {
                    id: '745',
                    name: '纺织、服装和皮革加工专用设备制造',
                    subLit: null,
                  },
                  {
                    id: '750',
                    name: '电子和电工机械专用设备制造',
                    subLit: null,
                  },
                  {
                    id: '755',
                    name: '农、林、牧、渔专用机械制造',
                    subLit: null,
                  },
                  {
                    id: '764',
                    name: '医疗仪器设备及器械制造',
                    subLit: null,
                  },
                  {
                    id: '773',
                    name: '环保、邮政、社会公共服务及其他专用设备制造',
                    subLit: null,
                  },
                ],
              },
              {
                id: '782',
                name: '汽车制造业',
                subLit: [
                  {
                    id: '783',
                    name: '汽车整车制造',
                    subLit: null,
                  },
                  {
                    id: '786',
                    name: '汽车用发动机制造',
                    subLit: null,
                  },
                  {
                    id: '788',
                    name: '改装汽车制造',
                    subLit: null,
                  },
                  {
                    id: '790',
                    name: '低速汽车制造',
                    subLit: null,
                  },
                  {
                    id: '792',
                    name: '电车制造',
                    subLit: null,
                  },
                  {
                    id: '794',
                    name: '汽车车身、挂车制造',
                    subLit: null,
                  },
                  {
                    id: '796',
                    name: '汽车零部件及配件制造',
                    subLit: null,
                  },
                ],
              },
              {
                id: '798',
                name: '铁路、船舶、航空航天和其他运输设备制造业',
                subLit: [
                  {
                    id: '799',
                    name: '铁路运输设备制造',
                    subLit: null,
                  },
                  {
                    id: '807',
                    name: '城市轨道交通设备制造',
                    subLit: null,
                  },
                  {
                    id: '809',
                    name: '船舶及相关装置制造',
                    subLit: null,
                  },
                  {
                    id: '818',
                    name: '航空、航天器及设备制造',
                    subLit: null,
                  },
                  {
                    id: '824',
                    name: '摩托车制造',
                    subLit: null,
                  },
                  {
                    id: '827',
                    name: '自行车和残疾人座车制造',
                    subLit: null,
                  },
                  {
                    id: '830',
                    name: '助动车制造',
                    subLit: null,
                  },
                  {
                    id: '832',
                    name: '非公路休闲车及零配件制造',
                    subLit: null,
                  },
                  {
                    id: '834',
                    name: '潜水救捞及其他未列明运输设备制造',
                    subLit: null,
                  },
                ],
              },
              {
                id: '838',
                name: '电气机械和器材制造业',
                subLit: [
                  {
                    id: '839',
                    name: '电机制造',
                    subLit: null,
                  },
                  {
                    id: '844',
                    name: '输配电及控制设备制造',
                    subLit: null,
                  },
                  {
                    id: '851',
                    name: '电线、电缆、光缆及电工器材制造',
                    subLit: null,
                  },
                  {
                    id: '857',
                    name: '电池制造',
                    subLit: null,
                  },
                  {
                    id: '863',
                    name: '家用电力器具制造',
                    subLit: null,
                  },
                  {
                    id: '872',
                    name: '非电力家用器具制造',
                    subLit: null,
                  },
                  {
                    id: '876',
                    name: '照明器具制造',
                    subLit: null,
                  },
                  {
                    id: '882',
                    name: '其他电气机械及器材制造',
                    subLit: null,
                  },
                ],
              },
              {
                id: '885',
                name: '计算机、通信和其他电子设备制造业',
                subLit: [
                  {
                    id: '886',
                    name: '计算机制造',
                    subLit: null,
                  },
                  {
                    id: '893',
                    name: '通信设备制造',
                    subLit: null,
                  },
                  {
                    id: '896',
                    name: '广播电视设备制造',
                    subLit: null,
                  },
                  {
                    id: '902',
                    name: '雷达及配套设备制造',
                    subLit: null,
                  },
                  {
                    id: '904',
                    name: '非专业视听设备制造',
                    subLit: null,
                  },
                  {
                    id: '908',
                    name: '智能消费设备制造',
                    subLit: null,
                  },
                  {
                    id: '914',
                    name: '电子器件制造',
                    subLit: null,
                  },
                  {
                    id: '922',
                    name: '电子元件及电子专用材料制造',
                    subLit: null,
                  },
                  {
                    id: '929',
                    name: '其他电子设备制造',
                    subLit: null,
                  },
                ],
              },
              {
                id: '931',
                name: '仪器仪表制造业',
                subLit: [
                  {
                    id: '932',
                    name: '通用仪器仪表制造',
                    subLit: null,
                  },
                  {
                    id: '940',
                    name: '专用仪器仪表制造',
                    subLit: null,
                  },
                  {
                    id: '950',
                    name: '钟表与计时仪器制造',
                    subLit: null,
                  },
                  {
                    id: '952',
                    name: '光学仪器制造',
                    subLit: null,
                  },
                  {
                    id: '954',
                    name: '衡器制造',
                    subLit: null,
                  },
                  {
                    id: '956',
                    name: '其他仪器仪表制造业',
                    subLit: null,
                  },
                ],
              },
              {
                id: '958',
                name: '其他制造业',
                subLit: [
                  {
                    id: '959',
                    name: '日用杂品制造',
                    subLit: null,
                  },
                  {
                    id: '962',
                    name: '核辐射加工',
                    subLit: null,
                  },
                  {
                    id: '964',
                    name: '其他未列明制造业',
                    subLit: null,
                  },
                ],
              },
              {
                id: '966',
                name: '废弃资源综合利用业',
                subLit: [
                  {
                    id: '967',
                    name: '金属废料和碎屑加工处理',
                    subLit: null,
                  },
                  {
                    id: '969',
                    name: '非金属废料和碎屑加工处理',
                    subLit: null,
                  },
                ],
              },
              {
                id: '971',
                name: '金属制品、机械和设备修理业',
                subLit: [
                  {
                    id: '972',
                    name: '金属制品修理',
                    subLit: null,
                  },
                  {
                    id: '974',
                    name: '通用设备修理',
                    subLit: null,
                  },
                  {
                    id: '976',
                    name: '专用设备修理',
                    subLit: null,
                  },
                  {
                    id: '978',
                    name: '铁路、船舶、航空航天等运输设备修理',
                    subLit: null,
                  },
                  {
                    id: '983',
                    name: '电气设备修理',
                    subLit: null,
                  },
                  {
                    id: '985',
                    name: '仪器仪表修理',
                    subLit: null,
                  },
                  {
                    id: '987',
                    name: '其他机械和设备修理业',
                    subLit: null,
                  },
                ],
              },
            ],
          },
          {
            id: '989',
            name: '电力、热力、燃气及水生产和供应业',
            subLit: [
              {
                id: '990',
                name: '电力、热力生产和供应业',
                subLit: [
                  {
                    id: '991',
                    name: '电力生产',
                    subLit: null,
                  },
                  {
                    id: '1000',
                    name: '电力供应',
                    subLit: null,
                  },
                  {
                    id: '1002',
                    name: '热力生产和供应',
                    subLit: null,
                  },
                ],
              },
              {
                id: '1004',
                name: '燃气生产和供应业',
                subLit: [
                  {
                    id: '1005',
                    name: '燃气生产和供应业',
                    subLit: null,
                  },
                  {
                    id: '1009',
                    name: '生物质燃气生产和供应业',
                    subLit: null,
                  },
                ],
              },
              {
                id: '1011',
                name: '水的生产和供应业',
                subLit: [
                  {
                    id: '1012',
                    name: '自来水生产和供应',
                    subLit: null,
                  },
                  {
                    id: '1014',
                    name: '污水处理及其再生利用',
                    subLit: null,
                  },
                  {
                    id: '1016',
                    name: '海水淡化处理',
                    subLit: null,
                  },
                  {
                    id: '1018',
                    name: '其他水的处理、利用与分配',
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

    const searchCallback = data => {
      console.log(data)
    }

    return {
      searchData,
      searchCallback,
    }
  },
}
</script>
<style></style>
