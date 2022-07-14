import { reactive, ref, toRefs, resolveComponent, openBlock, createElementBlock, normalizeClass, createBlock, normalizeStyle, withKeys, createCommentVNode, Fragment, createVNode, toDisplayString, withCtx, renderList, createTextVNode, withModifiers, createElementVNode, watch, onMounted, nextTick, onBeforeUnmount } from "vue";
var index$2 = /* @__PURE__ */ (() => ':root{--xxy-color-primary--1: #3661F0;--xxy-color-primary--2: #3057D7;--xxy-color-primary--3: #5E80F3;--xxy-color-primary--4: rgba(36, 99, 249, .05);--xxy-color-dark--1: #222222;--xxy-color-dark--2: #666666;--xxy-color-dark--3: #50596D;--xxy-color-dark--4: #858B9C;--xxy-color-dark--5: 30323a;--xxy-color-light--1: #B1B8C4;--xxy-color-light--2: #E2E4EB;--xxy-color-light--3: #EAEFFD;--xxy-color-light--4: #F4F9FC;--xxy-color-light--5: #F9FAFC;--xxy-color-light--6: #F4F5F9;--xxy-color-light--7: #FFFFFF;--xxy-color-light--8: #F0F2F5;--xxy-color-bright--1: #FF5B60;--xxy-color-shdow--1: rgba(0, 0, 0, .15);--xxy-color-shdow--2: rgba(0, 0, 0, .08);--xxy-color-shdow--3: rgba(54, 97, 240, .3);--xxy-color-linear--1: #96A3FF, #4E54FF;--xxy-color-linear--2: #FFC63E, #FF9222;--xxy-color-linear--3: #FF8F92, #FC102A;--xxy-color-linear--5: #00E6BB, #00A49D;--xxy-color-linear--4: #15B6EF, #5ED4FF;--xxy-font-family: PingFangSC-Medium, PingFang SC, tahoma, arial, "helvetica neue", "hiragino sans gb", "microsoft yahei ui", "microsoft yahei", simsun, sans-serif;--xxy-font-size--1: 20px;--xxy-font-size--2: 18px;--xxy-font-size--3: 16px;--xxy-font-size--4: 14px;--xxy-font-size--5: 12px;--xxy-padding-fpage: 20px;--xxy-padding-spage--tb: 10px;--xxy-padding-spage--lr: 12px;--xxy-padding-btn--large: 9px 27px;--xxy-padding-btn--default: 5px 24px;--xxy-padding-btn--small: 2px 10px;--xxy-margin-form: 24px;--xxy-shaodw-size--page: 0px 4px 16px 0px;--xxy-shadow-size--block: 0px 2px 8px 0px;--xxy-border-style--1: solid;--xxy-border-style--2: dashed;--xxy-border-style--3: dotted;--xxy-border-width--1: 1px;--xxy-border-width--2: 2px;--xxy-border-width--3: 3px;--xxy-border-radius-s: 4px;--xxy-border-radius-l: 8px;--xxy-border-radius-r: 50%;--el-color-primary: #3661F0;--el-border-color: #E2E4EB}*{margin:0;padding:0}html,body{font-family:var(--xxy-font-family);font-size:var(--xxy-font-size--4);font-weight:400;color:var(--xxy-color-dark--1);width:100%;height:100%;min-width:1280px;background-color:#fff;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-ms-overflow-style:none}ul,ol,li{list-style:none}*:before,*:after{box-sizing:inherit}a:focus,a:active{outline:none}a,a:focus,a:hover{cursor:pointer;color:inherit;text-decoration:none}div:focus{outline:none}.clearfix{zoom:1}.clearfix:after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0}.icon{width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px white inset!important}::-webkit-scrollbar-button{display:none}::-webkit-scrollbar-corner{background-color:transparent}::-webkit-scrollbar{width:8px;height:8px;-webkit-appearance:none}::-webkit-scrollbar-thumb{background-color:#0003;background-clip:padding-box;border-radius:10px;cursor:pointer}::-webkit-scrollbar-thumb:hover{cursor:pointer;background-color:#0006;visibility:visible}.el-button{--xxy-btn-padding: var(--xxy-padding-btn--default);--xxy-btn-padding--large: var(--xxy-padding-btn--large);--xxy-btn-padding--small: var(--xxy-padding-btn--small);--xxy-btn-font: var(--xxy-font-size--4);--xxy-btn-font--small: var(--xxy-font-size--5);--xxy-btn-color-bg--primary: var(--xxy-color-primary--1);--xxy-btn-color-bg--primary-hover: var(--xxy-color-primary--3);--xxy-btn-color-bg--primary-focus: var(--xxy-color-primary--2);--xxy-btn-color-bg--default: var(--xxy-color-light--7);--xxy-btn-color-font--default: var(--xxy-color-dark--1);--xxy-btn-color-font--default-hover: var(--xxy-color-primary--1);--xxy-btn-color-font--default-focus: var(--xxy-color-primary--2);--xxy-btn-color-font--primary: var(--xxy-color-light--7);--xxy-btn-color-font--text: var(--xxy-color-primary--1);--xxy-btn-color-font--text-hover: var(--xxy-color-primary--3);--xxy-btn-border-width: var(--xxy-border-width--1);--xxy-btn-border-style: var(--xxy-border-style--1);--xxy-btn-border-color--detault: var(--xxy-color-light--2);--xxy-btn-border-color--detault-hover: var(--xxy-color-primary--1);--xxy-btn-border-color--detault-focus: var(--xxy-color-primary--2);--xxy-btn-border-color--primary: var(--xxy-color-primary--1);--xxy-btn-border-color--primary-hover: var(--xxy-color-primary--3);--xxy-btn-border-color--primary-focus: var(--xxy-color-primary--2);--xxy-btn-border-radius: var(--xxy-border-radius-s);--xxy-btn-shadow: var(--xxy-shadow-size--block) var(--xxy-color-shdow--3)}.el-button{padding:var(--xxy-btn-padding);font-size:var(--xxy-btn-font);color:var(--xxy-btn-color-font--default);border-width:var(--xxy-btn-border-width);border-style:var(--xxy-btn-border-style);border-color:var(--xxy-btn-border-color--detault);border-radius:var(--xxy-btn-border-radius);background:var(--xxy-btn-color-bg--default);min-height:32px}.el-button:hover{color:var(--xxy-color-primary--1);border-color:var(--xxy-color-primary--1)}.el-button:focus{color:var(--xxy-btn-color-font--default-focus);border-color:var(--xxy-btn-border-color--primary-focus)}.el-button.is-disabled{opacity:.3}.el-button.el-button--primary{color:var(--xxy-btn-color-font--primary);border-color:var(--xxy-btn-border-color--primary);background:var(--xxy-btn-color-bg--primary)}.el-button.el-button--primary:hover{border-color:var(--xxy-btn-border-color--primary-hover);background:var(--xxy-btn-color-bg--primary-hover)}.el-button.el-button--primary:focus{border-color:var(--xxy-btn-border-color--primary-focus);background:var(--xxy-btn-color-bg--primary-focus)}.el-button.el-button--primary.is-strong{box-shadow:var(--xxy-btn-shadow)}.el-button.el-button--primary.is-disabled:hover{border-color:var(--xxy-btn-border-color--primary);background:var(--xxy-btn-color-bg--primary)}.el-button.el-button--text{border:none;color:var(--xxy-btn-color-font--text);background:transparent}.el-button.el-button--text:hover{color:var(--xxy-btn-color-font--text-hover)}.el-button.el-button--text:focus{color:var(--xxy-btn-color-font--default-focus)}.el-button.el-button--text.is-disabled{opacity:.3}.el-button.el-button--large{padding:var(--xxy-btn-padding--large);min-height:40px;line-height:40px}.el-button.el-button--small{padding:var(--xxy-btn-padding--small);font-size:var(--xxy-btn-font--small);min-height:24px;line-height:24px}.el-link{margin-right:8px}.el-link.el-link--primary:hover{color:var(--xxy-btn-border-color--primary-hover)}.el-form{--xxy-form-font-size--label: var(--xxy-font-size--4);--xxy-form-font-color--label: var(--xxy-color-dark--4)}.el-form .el-form-item{margin-bottom:24px}.el-form .el-form-item .el-form-item__label{padding-right:8px;font-size:var(--xxy-form-font-size--label);font-weight:400;color:var(--xxy-form-font-color--label);white-space:nowrap}.el-form .el-form-item .el-form-item__content .el-form-item__error{padding-top:0}.el-input{--xxy-input-font-size: var(--xxy-font-size--4);--xxy-input-font-color: var(--xxy-color-dark--1);--xxy-input-border-color: var(--xxy-color-light--2);--xxy-input-border-radius: var(--xxy-border-radius-s);--xxy-input-bg-color--disabled: var(--xxy-color-light--6);--xxy-input-border-color--focus: var(--xxy-color-primary--1)}.el-input .el-input__wrapper{padding:0 16px}.el-input .el-input__wrapper .el-input__prefix .el-input__prefix-inner .el-input__icon{margin-right:4px}.el-input .el-input__wrapper .el-input__inner{font-size:var(--xxy-input-font-size);color:var(--xxy-input-font-color);border-color:var(--xxy-input-border-color);border-radius:var(--xxy-input-border-radius)}.el-input .el-input__wrapper .el-input__suffix{display:flex;align-items:center;width:24px}.el-input .el-input__wrapper .el-input__suffix .el-input__suffix-inner i{margin-left:0}.el-input .el-input__wrapper.is-focus{box-shadow:0 0 0 1px var(--xxy-input-border-color--focus)}.el-input.qyk-input--small,.el-input.qyk-input--small .el-input__inner{height:32px;line-height:32px}.el-input.is-disabled .el-input__wrapper{box-shadow:none}.el-input.is-disabled .el-input__wrapper .el-input__inner{border-color:var(--xxy-input-border-color);background-color:var(--xxy-input-bg-color--disabled)}.el-textarea{--xxy-textarea-border-color--focus: var(--xxy-color-primary--1)}.el-textarea .el-textarea__inner:focus{box-shadow:0 0 0 1px var(--xxy-textarea-border-color--focus)}.el-select{--xxy-select-font-size: var(--xxy-font-size--4);--xxy-select-font-color: var(--xxy-color-dark--1);--xxy-select-border-color: var(--xxy-color-light--2);--xxy-select-border-radius: var(--xxy-border-radius-s);--xxy-select-border-color--focus: var(--xxy-color-primary--1)}:root{--xxy-select-popver-font-color: var(--xxy-color-dark--2);--xxy-select-popver-font-color--select: var(--xxy-color-primary--1);--xxy-select-popver-font-color--hover: var(--xxy-color-primary--4);--xxy-select-popver-border-color--focus: var(--xxy-color-primary--1);--xxy-select-popver-shadow-size: var(--xxy-shadow-size--block);--xxy-select-popver-shadow-color: var(--xxy-color-shdow--1)}.el-select .el-input{max-width:100%}.el-select .el-input .el-input__wrapper{padding-right:0}.el-select .el-input .el-input__inner{font-size:var(--xxy-select-font-size);color:var(--xxy-select-font-color);border-color:var(--xxy-select-border-color);border-radius:var(--xxy-select-border-radius)}.el-select .el-input.is-focus .el-input__wrapper{box-shadow:0 0 0 1px var(--xxy-select-border-color--focus)!important}.el-select .el-input.is-focus .el-input__inner{border-color:var(--xxy-select-border-color--focus)}.el-select__popper{box-shadow:var(--xxy-select-popver-shadow-size --xxy-select-popver-shadow-color)}.el-select__popper .el-select-dropdown{border-radius:var(--xxy-select-popver-border-color--focus)}.el-select__popper .el-select-dropdown .el-scrollbar .el-select-dropdown__wrap .el-select-dropdown__list .el-select-dropdown__item{padding-left:16px;color:var(--xxy-select-popver-font-color);height:32px;line-height:32px}.el-select__popper .el-select-dropdown .el-scrollbar .el-select-dropdown__wrap .el-select-dropdown__list .el-select-dropdown__item:hover{background-color:var(--xxy-select-popver-font-color--hover)}.el-select__popper .el-select-dropdown .el-scrollbar .el-select-dropdown__wrap .el-select-dropdown__list .selected{color:var(--xxy-select-popver-font-color--select)}:root{--xxy-cascader-font-color: var(--xxy-color-dark--2);--xxy-cascader-font-size: var(--xxy-font-size--4);--xxy-cascader-font-color--active: var(--xxy-color-primary--1);--xxy-cascader-border-color--focus: var(--xxy-color-primary--1)}.el-cascader .el-input{max-width:100%}.el-cascader .el-input .el-input__wrapper{padding-right:0}.el-cascader .el-input.is-focus .el-input__wrapper{box-shadow:0 0 0 1px var(--xxy-cascader-border-color--focus)}.el-cascader .el-cascader__tags{flex-wrap:nowrap;width:240px}.el-cascader .el-cascader__tags .el-tag.el-tag--info:nth-child(1){width:140px}.el-cascader .el-cascader__tags .el-tag.el-tag--info.el-tag--small{padding:0 4px}.el-cascader__dropdown .el-cascader-panel .el-cascader-menu{color:var(--xxy-cascader-font-color)}.el-cascader__dropdown .el-cascader-panel .el-cascader-menu .el-cascader-menu__wrap .el-cascader-menu__list .el-cascader-node{padding:6px 12px;font-size:var(--xxy-cascader-font-size);height:auto;line-height:normal}.el-cascader__dropdown .el-cascader-panel .el-cascader-menu .el-cascader-menu__wrap .el-cascader-menu__list .el-cascader-node .el-checkbox{margin-right:0;height:auto}.el-cascader__dropdown .el-cascader-panel .el-cascader-menu .el-cascader-menu__wrap .el-cascader-menu__list .el-cascader-node .el-cascader-node__prefix{left:8px}.el-cascader__dropdown .el-cascader-panel .el-cascader-menu .el-cascader-menu__wrap .el-cascader-menu__list .el-cascader-node.is-active,.el-cascader__dropdown .el-cascader-panel .el-cascader-menu .el-cascader-menu__wrap .el-cascader-menu__list .el-cascader-node.is-selectable.in-checked-path,.el-cascader__dropdown .el-cascader-panel .el-cascader-menu .el-cascader-menu__wrap .el-cascader-menu__list .el-cascader-node.in-active-path{font-weight:400;color:var(--xxy-cascader-font-color--active)}.el-date-editor{--xxy-dateeditor-font-size: var(--xxy-font-size--4)}.el-date-editor{width:260px;height:32px;line-height:32px}.el-date-editor .el-input__icon{width:20px;line-height:32px}.el-date-editor .el-range-separator{line-height:24px}.el-date-editor .el-range-input{font-size:var(--xxy-dateeditor-font-size)}.el-dropdown .el-dropdown-link .el-icon{vertical-align:bottom;transition:transform .25s ease}.el-dropdown .el-dropdown-link:hover{cursor:pointer}.el-radio{--xxy-checkbox-select-color: var(--xxy-color-primary--1)}.el-radio-group .el-radio.is-checked .el-radio__input .el-radio__inner{border-color:var(--xxy-checkbox-select-color);background-color:var(--xxy-checkbox-select-color)}.el-radio-group .el-radio.is-checked .el-radio__label{color:var(--xxy-checkbox-select-color)}.el-checkbox{--xxy-checkbox-select-color: var(--xxy-color-primary--1)}.el-checkbox .el-checkbox__input.is-indeterminate .el-checkbox__inner,.el-checkbox .el-checkbox__input.is-checked .el-checkbox__inner{border-color:var(--xxy-checkbox-select-color);background-color:var(--xxy-checkbox-select-color)}.el-checkbox-group .el-checkbox .el-checkbox__input.is-checked{color:red}.el-checkbox-group .el-checkbox .el-checkbox__input.is-checked .el-checkbox__inner{border-color:var(--xxy-checkbox-select-color);background-color:var(--xxy-checkbox-select-color)}.el-message-box{--xxy-messagebox-font-size: var(--xxy-font-size--4);--xxy-messagebox-font-size--icon: var(--xxy-font-size--3);--xxy-messagebox-font-color: var(--xxy-color-dark--1);--xxy-messagebox-font-color--desc: var(--xxy-color-dark--4);--xxy-messagebox-border-radius: var(--xxy-border-radius-s);--xxy-messagebox-border-width: var(--xxy-border-width--1);--xxy-messagebox-border-style: var(--xxy-border-style--1);--xxy-messagebox-border-color: var(--xxy-color-light--8)}.el-overlay{display:flex;justify-content:center;align-items:center}.el-overlay .el-message-box{padding-bottom:0}.el-overlay .el-message-box .el-message-box__header{padding:16px;border-bottom:var(--xxy-messagebox-border-width) var(--xxy-messagebox-border-style) var(--xxy-messagebox-border-color);display:flex;align-items:center}.el-overlay .el-message-box .el-message-box__header .el-message-box__title{line-height:20px;font-size:var(--xxy-messagebox-font-size);font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:var(--xxy-messagebox-font-color)}.el-overlay .el-message-box .el-message-box__content{padding:20px 16px 40px;font-size:var(--xxy-messagebox-font-size);font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:var(--xxy-messagebox-font-color)}.el-overlay .el-message-box .el-message-box__content .descript{margin-top:10px;color:var(--xxy-messagebox-font-color--desc);line-height:20px}.el-overlay .el-message-box .el-message-box__btns{border-top:var(--xxy-messagebox-border-width) var(--xxy-messagebox-border-style) var(--xxy-messagebox-border-color);padding:20px 16px}.el-dialog{--xxy-dialog-font-size: var(--xxy-font-size--4);--xxy-dialog-font-size--icon: var(--xxy-font-size--3);--xxy-dialog-font-color: var(--xxy-color-dark--1);--xxy-dialog-font-color--desc: var(--xxy-color-dark--4);--xxy-dialog-border-radius: var(--xxy-border-radius-s);--xxy-dialog-border-width: var(--xxy-border-width--1);--xxy-dialog-border-style: var(--xxy-border-style--1);--xxy-dialog-border-color: var(--xxy-color-light--8)}.el-overlay,.el-overlay .el-overlay-dialog{display:flex;justify-content:center;align-items:center}.el-overlay .el-overlay-dialog .el-dialog{margin:0;border:none;border-radius:var(--xxy-dialog-border-radius);overflow:hidden}.el-overlay .el-overlay-dialog .el-dialog .el-dialog__header{margin:0;padding:16px;border-bottom:var(--xxy-dialog-border-width) var(--xxy-dialog-border-style) var(--xxy-dialog-border-color);display:flex;align-items:center}.el-overlay .el-overlay-dialog .el-dialog .el-dialog__header .el-dialog__title{line-height:20px;font-size:var(--xxy-dialog-font-size);font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:var(--xxy-dialog-font-color)}.el-overlay .el-overlay-dialog .el-dialog .el-dialog__header button{top:16px}.el-overlay .el-overlay-dialog .el-dialog .el-dialog__header button .el-dialog__close,.el-overlay .el-overlay-dialog .el-dialog .el-dialog__header button .el-message-box__close{font-size:var(--xxy-dialog-font-size--icon);color:var(--xxy-dialog-font-color)}.el-overlay .el-overlay-dialog .el-dialog .el-dialog__header .el-dialog__headerbtn{top:20px;right:20px;width:16px;height:16px}.el-overlay .el-overlay-dialog .el-dialog .el-dialog__body{padding:20px 16px 40px;font-size:var(--xxy-dialog-font-size);font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:var(--xxy-dialog-font-color)}.el-overlay .el-overlay-dialog .el-dialog .el-dialog__body .descript{margin-top:10px;color:var(--xxy-dialog-font-color--desc);line-height:20px}.el-overlay .el-overlay-dialog .el-dialog .el-dialog__footer{border-top:var(--xxy-dialog-border-width) var(--xxy-dialog-border-style) var(--xxy-dialog-border-color);padding:20px 16px}.xy-search-group--wrapper{padding-bottom:16px;width:100%;transition:all .35s ease}.xy-search-group--wrapper .search-inner--container{display:flex;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;padding:16px 16px 0;overflow:hidden}.xy-search-group--wrapper .search-inner--container .search-item{display:flex;justify-content:flex-start;align-items:flex-start;min-width:100%}.xy-search-group--wrapper .search-inner--container .search-item .label{margin-bottom:16px;min-width:100px;font-size:12px;line-height:30px;text-align:right}.xy-search-group--wrapper .search-inner--container .search-item .value :deep(> div){margin-bottom:16px}.xy-search-group--wrapper .search-inner--container .search-item .has-more-conditions{display:flex;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap}.xy-search-group--wrapper .search-inner--container .search-item .has-more-conditions .more-seach-conditions{margin-right:16px}.xy-search-group--wrapper .search-inner--container .search-item .has-more-conditions .more-seach-conditions .search-item-reset--wrapper{margin-right:0}.xy-search-group--wrapper .search-inner--container .inline{min-width:auto}.search-item-reset--wrapper{margin-right:16px;margin-bottom:16px}.search-item-reset--wrapper .qk-list{display:flex;justify-content:flex-start;align-items:center}.search-item-reset--wrapper .qk-list .list-item{margin-left:8px;padding:0 24px;line-height:30px;font-size:12px;border:1px solid #e2e4eb;border-radius:4px}.search-item-reset--wrapper .qk-list .list-item:first-of-type{margin-left:0}.search-item-reset--wrapper .qk-list .list-item.active{color:#3661f0;border-color:#3661f0;z-index:11}.search-item-reset--wrapper .qk-list .list-item:hover{cursor:pointer}.search-item-reset--wrapper .qkdate-list{display:flex;justify-content:flex-start;align-items:center}.search-item-reset--wrapper .qkdate-list .list-item{margin-right:8px;padding:0 24px;line-height:30px;font-size:12px;border:1px solid #e2e4eb;border-radius:4px}.search-item-reset--wrapper .qkdate-list .list-item:hover{cursor:pointer}.search-item-reset--wrapper .qkdate-list .list-item.active{color:#3661f0;border-color:#3661f0;z-index:11}.search-item-reset--wrapper .define-btn{margin-right:16px;line-height:32px}.search-item-reset--wrapper .folder-btn{display:flex;align-items:center}.search-item-reset--wrapper .folder-btn i{margin-left:4px}.search-item-reset--wrapper .reset-btn{color:#3661f0}.search-item-reset--wrapper .reset-btn:hover{color:#5e80f3;cursor:pointer}.item-flex--wrapper{display:flex;justify-content:flex-start;align-items:center}.item-flex--wrapper .divider{margin:0 8px;color:#b1b8c4}.item-flex--wrapper .suffix-text{padding-left:8px;font-size:12px;color:#666;white-space:nowrap}\n')();
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {
  props: {
    itemData: {
      type: Object,
      default: () => {
        return null;
      }
    },
    index: {
      type: Number,
      default: 0
    },
    cindex: {
      type: Number,
      default: -1
    },
    isFolder: Boolean
  },
  emits: ["searchFn", "btnEvent"],
  setup(props, { emit }) {
    const state = reactive({
      isQuick: false,
      defaultTime: [new Date(2e3, 1, 1, 0, 0, 0), new Date(2e3, 2, 1, 23, 59, 59)]
    });
    const cascader = ref(null);
    const asMethods = {
      getPrefixIcon() {
        var _a;
        return ((_a = props.itemData) == null ? void 0 : _a.prefixIcon) || "";
      },
      formatCssText() {
        const cssText = props.itemData.elplusCssText;
        if (typeof cssText == "object") {
          let str = "";
          Array.from(Object.keys(cssText)).forEach((key) => {
            str += key + ":" + cssText[key];
          });
          return str;
        }
        if (typeof cssText == "string")
          return cssText;
        return "";
      },
      getInputLengthLimit() {
        var _a;
        return ((_a = props.itemData) == null ? void 0 : _a.maxLength) || 20;
      }
    };
    const valueMethods = {
      handleChangeInputValue(val) {
        const temp = JSON.parse(JSON.stringify(props.itemData));
        if (temp.type == "inputnumber") {
          temp.searchVal = val.replace(/^0(0+)|[^\d]+/g, "");
        }
        valueMethods.searchFn(temp);
      },
      handleKeyupEvent() {
        const temp = JSON.parse(JSON.stringify(props.itemData));
        if (temp.type == "inputnumber") {
          temp.searchVal = temp.searchVal.replace(/^0(0+)|[^\d]+/g, "");
        }
        valueMethods.searchFn(temp);
      },
      handleChangeInputNumberRangeValue(val, index2) {
        const temp = JSON.parse(JSON.stringify(props.itemData));
        temp.searchVal[index2] = val.replace(/^0(0+)|[^\d]+/g, "");
        if (temp.searchVal[1] == "")
          return;
        valueMethods.searchFn(temp);
      },
      handleClearInputNumberRangeValue() {
        const temp = JSON.parse(JSON.stringify(props.itemData));
        if (!temp.immediate) {
          temp.searchVal = ["", ""];
        }
        if (temp.searchVal[1] == "")
          return;
        valueMethods.searchFn(temp);
      },
      handleChangeSelectValue(val) {
        const temp = JSON.parse(JSON.stringify(props.itemData));
        temp.searchVal = val;
        valueMethods.searchFn(temp);
      },
      handleChangeRadioValue(val) {
        const temp = JSON.parse(JSON.stringify(props == null ? void 0 : props.itemData));
        temp.searchVal = val;
        valueMethods.searchFn(temp);
      },
      handleChangeCheckboxValue(val) {
        const temp = JSON.parse(JSON.stringify(props == null ? void 0 : props.itemData));
        temp.searchVal = val;
        valueMethods.searchFn(temp);
      },
      handleChangeCascader(val) {
        const temp = JSON.parse(JSON.stringify(props == null ? void 0 : props.itemData));
        temp.searchVal = val;
        valueMethods.searchFn(temp);
      },
      handleSelectQuickDate(val) {
        const types = ["qkdateRange", "qkdateeRange", "dateRange"];
        const temp = JSON.parse(JSON.stringify(props == null ? void 0 : props.itemData));
        if (typeof val == "number") {
          state.isQuick = true;
          const newDate = valueMethods.getQuickDate(val);
          if (JSON.stringify(temp.searchVal) == JSON.stringify(newDate)) {
            temp.searchVal = ["", ""];
          } else {
            temp.searchVal = newDate;
          }
        } else {
          state.isQuick = false;
          if (val && val.length) {
            const dateArr = toRefs(val);
            const prev = valueMethods.formatDate(dateArr[0].value, types.includes(props == null ? void 0 : props.itemData.type) ? "YYYY-MM-DD" : "YYYY-MM-DD hh:mm:ss");
            const next = valueMethods.formatDate(dateArr[1].value, types.includes(props == null ? void 0 : props.itemData.type) ? "YYYY-MM-DD" : "YYYY-MM-DD hh:mm:ss");
            temp.searchVal = [prev, next];
          }
        }
        valueMethods.searchFn(temp);
      },
      getQuickDate(days) {
        const todayStr = new Date().getTime();
        const prevDay = valueMethods.formatDate(todayStr + days * 24 * 60 * 60 * 1e3, "YYYY-MM-DD") + " 00:00:00";
        const prevDayLastTime = valueMethods.formatDate(todayStr + days * 24 * 60 * 60 * 1e3, "YYYY-MM-DD") + " 23:59:59";
        const currentDay = valueMethods.formatDate(todayStr, "YYYY-MM-DD") + " 23:59:59";
        if (days == -1) {
          return [prevDay, prevDayLastTime];
        } else {
          return [prevDay, currentDay];
        }
      },
      getActiveNode(value) {
        var _a, _b;
        if (Array.isArray(value)) {
          return JSON.stringify(props == null ? void 0 : props.itemData.searchVal) == JSON.stringify(value);
        } else {
          return (_b = (_a = props == null ? void 0 : props.itemData) == null ? void 0 : _a.searchVal) == null ? void 0 : _b.includes(String(value));
        }
      },
      handleSelectListValue(item) {
        const temp = JSON.parse(JSON.stringify(props == null ? void 0 : props.itemData));
        let oVal = (temp == null ? void 0 : temp.searchVals) || [];
        if (!temp.multiple) {
          oVal = oVal[0] == item.id ? [] : [item.id];
        } else {
          if (oVal.includes(item.id)) {
            oVal = oVal.filter((vk) => vk != item.id);
          } else {
            oVal.push(...[item.id]);
          }
        }
        temp.searchVal = oVal;
        valueMethods.searchFn(temp);
      },
      handleToggleBlock() {
        valueMethods.btnEvent("toggle");
      },
      searchFn(data) {
        emit("searchFn", {
          index: props.index,
          cindex: props.cindex,
          data
        });
      },
      btnEvent(type) {
        emit("btnEvent", type);
      },
      formatDate(date, format = "YYYY-MM-DD hh:mm:ss") {
        if (isNaN(new Date(date).getTime())) {
          throw new Error(`${date} \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\u65F6\u95F4`);
        }
        if (!(date instanceof Date)) {
          date = new Date(date);
        }
        const o = {
          "Y+": date.getFullYear(),
          "M+": date.getMonth() + 1,
          "D+": date.getDate(),
          "h+": date.getHours(),
          "m+": date.getMinutes(),
          "s+": date.getSeconds()
        };
        for (let k in o) {
          if (new RegExp(`(${k})`).test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : `0${o[k]}`.substr(-RegExp.$1.length));
          }
        }
        return format;
      }
    };
    return {
      ...toRefs(state),
      ...asMethods,
      ...valueMethods,
      cascader
    };
  }
};
const _hoisted_1$1 = /* @__PURE__ */ createElementVNode("span", { class: "divider" }, "-", -1);
const _hoisted_2$1 = {
  key: 0,
  class: "suffix-text"
};
const _hoisted_3$1 = {
  key: 0,
  class: "suffix-text"
};
const _hoisted_4$1 = {
  key: 0,
  class: "suffix-text"
};
const _hoisted_5 = {
  key: 9,
  class: "qk-list"
};
const _hoisted_6 = ["id", "onClick"];
const _hoisted_7 = {
  key: 10,
  class: "qkdate-list"
};
const _hoisted_8 = ["onClick"];
const _hoisted_9 = ["onClick"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const _component_el_input = resolveComponent("el-input");
  const _component_el_option = resolveComponent("el-option");
  const _component_el_select = resolveComponent("el-select");
  const _component_el_radio = resolveComponent("el-radio");
  const _component_el_radio_group = resolveComponent("el-radio-group");
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_el_checkbox_group = resolveComponent("el-checkbox-group");
  const _component_el_cascader = resolveComponent("el-cascader");
  const _component_el_date_picker = resolveComponent("el-date-picker");
  const _component_el_button = resolveComponent("el-button");
  const _component_ArrowDown = resolveComponent("ArrowDown");
  const _component_el_icon = resolveComponent("el-icon");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["search-item-reset--wrapper", { "item-flex--wrapper": ((_a = $props.itemData) == null ? void 0 : _a.type) == "inputNumberRange" }])
  }, [
    ((_b = $props.itemData) == null ? void 0 : _b.type) == "input" ? (openBlock(), createBlock(_component_el_input, {
      key: 0,
      type: "text",
      "prefix-icon": _ctx.getPrefixIcon(),
      maxlength: _ctx.getInputLengthLimit(),
      style: normalizeStyle(_ctx.formatCssText()),
      modelValue: $props.itemData.searchVal,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $props.itemData.searchVal = $event),
      placeholder: "\u8BF7\u8F93\u5165" + (((_c = $props.itemData) == null ? void 0 : _c.placeholder) || ((_d = $props.itemData) == null ? void 0 : _d.labelName)),
      onChange: _ctx.handleChangeInputValue,
      onKeyup: withKeys(_ctx.handleKeyupEvent, ["enter"])
    }, null, 8, ["prefix-icon", "maxlength", "style", "modelValue", "placeholder", "onChange", "onKeyup"])) : createCommentVNode("", true),
    ((_e = $props.itemData) == null ? void 0 : _e.type) == "inputNumber" ? (openBlock(), createBlock(_component_el_input, {
      key: 1,
      type: "text",
      "prefix-icon": _ctx.getPrefixIcon(),
      maxlength: _ctx.getInputLengthLimit(),
      style: normalizeStyle(_ctx.formatCssText()),
      modelValue: $props.itemData.searchVal,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $props.itemData.searchVal = $event),
      placeholder: "\u8BF7\u8F93\u5165" + (((_f = $props.itemData) == null ? void 0 : _f.placeholder) || ((_g = $props.itemData) == null ? void 0 : _g.labelName)),
      onChange: _ctx.handleChangeInputValue,
      onKeyup: withKeys(_ctx.handleKeyupEvent, ["enter"])
    }, null, 8, ["prefix-icon", "maxlength", "style", "modelValue", "placeholder", "onChange", "onKeyup"])) : createCommentVNode("", true),
    $props.itemData.type == "inputNumberRange" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
      createVNode(_component_el_input, {
        class: "numberInput",
        "prefix-icon": _ctx.getPrefixIcon(),
        maxlength: _ctx.getInputLengthLimit(),
        style: normalizeStyle(_ctx.formatCssText()),
        modelValue: $props.itemData.searchVal[0],
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $props.itemData.searchVal[0] = $event),
        modelModifiers: { trim: true },
        placeholder: "\u8BF7\u8F93\u5165" + (((_h = $props.itemData) == null ? void 0 : _h.frontPlaceholder) || $props.itemData.labelName),
        clearable: "",
        onInput: _cache[3] || (_cache[3] = ($event) => _ctx.handleChangeInputNumberRangeValue($event, 0))
      }, null, 8, ["prefix-icon", "maxlength", "style", "modelValue", "placeholder"]),
      _hoisted_1$1,
      createVNode(_component_el_input, {
        class: "numberInput",
        "prefix-icon": _ctx.getPrefixIcon(),
        maxlength: _ctx.getInputLengthLimit(),
        style: normalizeStyle(_ctx.formatCssText()),
        modelValue: $props.itemData.searchVal[1],
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $props.itemData.searchVal[1] = $event),
        modelModifiers: { trim: true },
        placeholder: "\u8BF7\u8F93\u5165" + (((_i = $props.itemData) == null ? void 0 : _i.backPlaceholder) || $props.itemData.labelName),
        clearable: "",
        onInput: _cache[5] || (_cache[5] = ($event) => _ctx.handleChangeInputNumberRangeValue($event, 1)),
        onClear: _ctx.handleClearInputNumberRangeValue
      }, null, 8, ["prefix-icon", "maxlength", "style", "modelValue", "placeholder", "onClear"]),
      $props.itemData.suffixText ? (openBlock(), createElementBlock("p", _hoisted_2$1, toDisplayString($props.itemData.suffixText), 1)) : createCommentVNode("", true)
    ], 64)) : createCommentVNode("", true),
    $props.itemData.type == "select" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
      createVNode(_component_el_select, {
        style: normalizeStyle(_ctx.formatCssText()),
        multiple: $props.itemData.multiple,
        "collapse-tags": $props.itemData.multiple,
        "collapse-tags-tooltip": $props.itemData.multiple,
        placeholder: "\u8BF7\u9009\u62E9" + (((_j = $props.itemData) == null ? void 0 : _j.placeholder) || $props.itemData.labelName),
        modelValue: $props.itemData.searchVal,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $props.itemData.searchVal = $event),
        clearable: "",
        onChange: _ctx.handleChangeSelectValue
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($props.itemData.options, (item) => {
            return openBlock(), createBlock(_component_el_option, {
              key: item.id,
              label: item.name,
              value: String(item.id)
            }, null, 8, ["label", "value"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["style", "multiple", "collapse-tags", "collapse-tags-tooltip", "placeholder", "modelValue", "onChange"]),
      $props.itemData.suffixText ? (openBlock(), createElementBlock("p", _hoisted_3$1, toDisplayString($props.itemData.suffixText), 1)) : createCommentVNode("", true)
    ], 64)) : createCommentVNode("", true),
    $props.itemData.type == "radio" ? (openBlock(), createBlock(_component_el_radio_group, {
      key: 4,
      modelValue: $props.itemData.searchVal,
      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $props.itemData.searchVal = $event),
      onChange: _ctx.handleChangeRadioValue
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.itemData.options, (item, index2) => {
          return openBlock(), createBlock(_component_el_radio, {
            label: item.id,
            key: index2
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(item.name), 1)
            ]),
            _: 2
          }, 1032, ["label"]);
        }), 128))
      ]),
      _: 1
    }, 8, ["modelValue", "onChange"])) : createCommentVNode("", true),
    $props.itemData.type == "checkbox" ? (openBlock(), createBlock(_component_el_checkbox_group, {
      key: 5,
      modelValue: $props.itemData.searchVal,
      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $props.itemData.searchVal = $event),
      onChange: _ctx.handleChangeCheckboxValue
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.itemData.options, (item) => {
          return openBlock(), createBlock(_component_el_checkbox, {
            label: item.id,
            key: item.id
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(item.name), 1)
            ]),
            _: 2
          }, 1032, ["label"]);
        }), 128))
      ]),
      _: 1
    }, 8, ["modelValue", "onChange"])) : createCommentVNode("", true),
    $props.itemData.type == "cascader" ? (openBlock(), createElementBlock(Fragment, { key: 6 }, [
      createVNode(_component_el_cascader, {
        ref: "cascader",
        modelValue: $props.itemData.searchVal,
        "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $props.itemData.searchVal = $event),
        options: $props.itemData.options,
        placeholder: "\u8BF7\u9009\u62E9" + (((_k = $props.itemData) == null ? void 0 : _k.placeholder) || ((_l = $props.itemData) == null ? void 0 : _l.labelName)),
        props: {
          checkStrictly: false,
          value: "id",
          label: "name",
          children: "subLit",
          multiple: true
        },
        "collapse-tags": "",
        clearable: "",
        style: normalizeStyle(_ctx.formatCssText($props.itemData.elplusCssText)),
        onChange: _ctx.handleChangeCascader
      }, null, 8, ["modelValue", "options", "placeholder", "style", "onChange"]),
      $props.itemData.suffixText ? (openBlock(), createElementBlock("p", _hoisted_4$1, toDisplayString($props.itemData.suffixText), 1)) : createCommentVNode("", true)
    ], 64)) : createCommentVNode("", true),
    $props.itemData.type == "dateRange" ? (openBlock(), createBlock(_component_el_date_picker, {
      key: 7,
      modelValue: $props.itemData.searchVal,
      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $props.itemData.searchVal = $event),
      type: "daterange",
      "range-separator": "\u81F3",
      "start-placeholder": "\u5F00\u59CB\u65F6\u95F4",
      "end-placeholder": "\u7ED3\u675F\u65F6\u95F4",
      "value-format": $props.itemData.formatter || "YYYY-MM-DD",
      style: normalizeStyle(_ctx.formatCssText()),
      onChange: _ctx.handleSelectQuickDate
    }, null, 8, ["modelValue", "value-format", "style", "onChange"])) : createCommentVNode("", true),
    $props.itemData.type == "datetimeRange" ? (openBlock(), createBlock(_component_el_date_picker, {
      key: 8,
      modelValue: $props.itemData.searchVal,
      "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $props.itemData.searchVal = $event),
      type: "datetimerange",
      "range-separator": "\u81F3",
      "start-placeholder": "\u5F00\u59CB\u65F6\u95F4",
      "end-placeholder": "\u7ED3\u675F\u65F6\u95F4",
      "value-format": $props.itemData.formatter || "YYYY-MM-DD HH:mm:ss",
      style: normalizeStyle(_ctx.formatCssText($props.itemData.elplusCssText)),
      onChange: _ctx.handleSelectQuickDate,
      "default-time": _ctx.defaultTime
    }, null, 8, ["modelValue", "value-format", "style", "onChange", "default-time"])) : createCommentVNode("", true),
    $props.itemData.type == "list" ? (openBlock(), createElementBlock("ul", _hoisted_5, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.itemData.options, (item) => {
        return openBlock(), createElementBlock("li", {
          class: normalizeClass(["list-item", {
            active: _ctx.getActiveNode(item.id)
          }]),
          id: item.id,
          key: item.id,
          onClick: ($event) => _ctx.handleSelectListValue(item)
        }, toDisplayString(item.name), 11, _hoisted_6);
      }), 128))
    ])) : createCommentVNode("", true),
    $props.itemData.type == "qkdataRange" || $props.itemData.type == "qkdatetimeRange" ? (openBlock(), createElementBlock("ul", _hoisted_7, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.itemData.options, (item, index2) => {
        return openBlock(), createElementBlock("li", {
          class: normalizeClass(["list-item", {
            active: _ctx.getActiveNode(_ctx.getQuickDate(item.days)) && _ctx.isQuick
          }]),
          key: index2,
          onClick: withModifiers(($event) => _ctx.handleSelectQuickDate(item.days), ["stop"])
        }, toDisplayString(item.label), 11, _hoisted_8);
      }), 128)),
      createVNode(_component_el_date_picker, {
        class: normalizeClass({ active: !_ctx.isQuick }),
        modelValue: $props.itemData.searchVal,
        "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $props.itemData.searchVal = $event),
        type: $props.itemData.type == "qkdate" ? "daterange" : "datetimerange",
        "default-time": $props.itemData.type == "qkdate" ? new Date() : _ctx.defaultTime,
        "range-separator": "\u81F3",
        "start-placeholder": "\u5F00\u59CB\u65F6\u95F4",
        "end-placeholder": "\u7ED3\u675F\u65F6\u95F4",
        disabledDate: $props.itemData.disabledDate,
        onChange: _ctx.handleSelectQuickDate
      }, null, 8, ["class", "modelValue", "type", "default-time", "disabledDate", "onChange"])
    ])) : createCommentVNode("", true),
    $props.itemData.type == "btns" ? (openBlock(true), createElementBlock(Fragment, { key: 11 }, renderList($props.itemData.list, (btn, index2) => {
      return openBlock(), createElementBlock(Fragment, { key: index2 }, [
        btn.type == "btn" ? (openBlock(), createBlock(_component_el_button, {
          key: 0,
          class: "define-btn",
          type: btn.btnType || "primary",
          style: normalizeStyle(_ctx.formatCssText(btn.elplusCssText)),
          onClick: withModifiers(($event) => _ctx.btnEvent(btn == null ? void 0 : btn.eventType), ["stop"])
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(btn.text || "\u67E5\u8BE2"), 1)
          ]),
          _: 2
        }, 1032, ["type", "style", "onClick"])) : createCommentVNode("", true),
        btn.type == "folderbtn" ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "folder-btn define-btn reset-btn",
          style: normalizeStyle(_ctx.formatCssText(btn.elplusCssText)),
          onClick: _cache[13] || (_cache[13] = (...args) => _ctx.handleToggleBlock && _ctx.handleToggleBlock(...args))
        }, [
          createElementVNode("span", null, toDisplayString($props.isFolder ? btn.text1 : btn.text2), 1),
          createVNode(_component_el_icon, {
            class: normalizeClass([{ unfolder: !$props.isFolder }, btn.fontName])
          }, {
            default: withCtx(() => [
              createVNode(_component_ArrowDown)
            ]),
            _: 2
          }, 1032, ["class"])
        ], 4)) : createCommentVNode("", true),
        btn.type == "textbtn" ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: "define-btn text-btn reset-btn",
          style: normalizeStyle(_ctx.formatCssText(btn.elplusCssText)),
          onClick: withModifiers(($event) => _ctx.btnEvent(btn == null ? void 0 : btn.eventType), ["stop"])
        }, toDisplayString(btn.text), 13, _hoisted_9)) : createCommentVNode("", true)
      ], 64);
    }), 128)) : createCommentVNode("", true)
  ], 2);
}
var SearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var MapShim = function() {
  if (typeof Map !== "undefined") {
    return Map;
  }
  function getIndex(arr, key) {
    var result = -1;
    arr.some(function(entry, index2) {
      if (entry[0] === key) {
        result = index2;
        return true;
      }
      return false;
    });
    return result;
  }
  return function() {
    function class_1() {
      this.__entries__ = [];
    }
    Object.defineProperty(class_1.prototype, "size", {
      get: function() {
        return this.__entries__.length;
      },
      enumerable: true,
      configurable: true
    });
    class_1.prototype.get = function(key) {
      var index2 = getIndex(this.__entries__, key);
      var entry = this.__entries__[index2];
      return entry && entry[1];
    };
    class_1.prototype.set = function(key, value) {
      var index2 = getIndex(this.__entries__, key);
      if (~index2) {
        this.__entries__[index2][1] = value;
      } else {
        this.__entries__.push([key, value]);
      }
    };
    class_1.prototype.delete = function(key) {
      var entries = this.__entries__;
      var index2 = getIndex(entries, key);
      if (~index2) {
        entries.splice(index2, 1);
      }
    };
    class_1.prototype.has = function(key) {
      return !!~getIndex(this.__entries__, key);
    };
    class_1.prototype.clear = function() {
      this.__entries__.splice(0);
    };
    class_1.prototype.forEach = function(callback, ctx) {
      if (ctx === void 0) {
        ctx = null;
      }
      for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
        var entry = _a[_i];
        callback.call(ctx, entry[1], entry[0]);
      }
    };
    return class_1;
  }();
}();
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
var global$1 = function() {
  if (typeof global !== "undefined" && global.Math === Math) {
    return global;
  }
  if (typeof self !== "undefined" && self.Math === Math) {
    return self;
  }
  if (typeof window !== "undefined" && window.Math === Math) {
    return window;
  }
  return Function("return this")();
}();
var requestAnimationFrame$1 = function() {
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame.bind(global$1);
  }
  return function(callback) {
    return setTimeout(function() {
      return callback(Date.now());
    }, 1e3 / 60);
  };
}();
var trailingTimeout = 2;
function throttle(callback, delay) {
  var leadingCall = false, trailingCall = false, lastCallTime = 0;
  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }
    if (trailingCall) {
      proxy();
    }
  }
  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  function proxy() {
    var timeStamp = Date.now();
    if (leadingCall) {
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      }
      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }
    lastCallTime = timeStamp;
  }
  return proxy;
}
var REFRESH_DELAY = 20;
var transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
var mutationObserverSupported = typeof MutationObserver !== "undefined";
var ResizeObserverController = function() {
  function ResizeObserverController2() {
    this.connected_ = false;
    this.mutationEventsAdded_ = false;
    this.mutationsObserver_ = null;
    this.observers_ = [];
    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
  }
  ResizeObserverController2.prototype.addObserver = function(observer) {
    if (!~this.observers_.indexOf(observer)) {
      this.observers_.push(observer);
    }
    if (!this.connected_) {
      this.connect_();
    }
  };
  ResizeObserverController2.prototype.removeObserver = function(observer) {
    var observers2 = this.observers_;
    var index2 = observers2.indexOf(observer);
    if (~index2) {
      observers2.splice(index2, 1);
    }
    if (!observers2.length && this.connected_) {
      this.disconnect_();
    }
  };
  ResizeObserverController2.prototype.refresh = function() {
    var changesDetected = this.updateObservers_();
    if (changesDetected) {
      this.refresh();
    }
  };
  ResizeObserverController2.prototype.updateObservers_ = function() {
    var activeObservers = this.observers_.filter(function(observer) {
      return observer.gatherActive(), observer.hasActive();
    });
    activeObservers.forEach(function(observer) {
      return observer.broadcastActive();
    });
    return activeObservers.length > 0;
  };
  ResizeObserverController2.prototype.connect_ = function() {
    if (!isBrowser || this.connected_) {
      return;
    }
    document.addEventListener("transitionend", this.onTransitionEnd_);
    window.addEventListener("resize", this.refresh);
    if (mutationObserverSupported) {
      this.mutationsObserver_ = new MutationObserver(this.refresh);
      this.mutationsObserver_.observe(document, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      });
    } else {
      document.addEventListener("DOMSubtreeModified", this.refresh);
      this.mutationEventsAdded_ = true;
    }
    this.connected_ = true;
  };
  ResizeObserverController2.prototype.disconnect_ = function() {
    if (!isBrowser || !this.connected_) {
      return;
    }
    document.removeEventListener("transitionend", this.onTransitionEnd_);
    window.removeEventListener("resize", this.refresh);
    if (this.mutationsObserver_) {
      this.mutationsObserver_.disconnect();
    }
    if (this.mutationEventsAdded_) {
      document.removeEventListener("DOMSubtreeModified", this.refresh);
    }
    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
  };
  ResizeObserverController2.prototype.onTransitionEnd_ = function(_a) {
    var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
    var isReflowProperty = transitionKeys.some(function(key) {
      return !!~propertyName.indexOf(key);
    });
    if (isReflowProperty) {
      this.refresh();
    }
  };
  ResizeObserverController2.getInstance = function() {
    if (!this.instance_) {
      this.instance_ = new ResizeObserverController2();
    }
    return this.instance_;
  };
  ResizeObserverController2.instance_ = null;
  return ResizeObserverController2;
}();
var defineConfigurable = function(target, props) {
  for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
    var key = _a[_i];
    Object.defineProperty(target, key, {
      value: props[key],
      enumerable: false,
      writable: false,
      configurable: true
    });
  }
  return target;
};
var getWindowOf = function(target) {
  var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
  return ownerGlobal || global$1;
};
var emptyRect = createRectInit(0, 0, 0, 0);
function toFloat(value) {
  return parseFloat(value) || 0;
}
function getBordersSize(styles) {
  var positions = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }
  return positions.reduce(function(size, position) {
    var value = styles["border-" + position + "-width"];
    return size + toFloat(value);
  }, 0);
}
function getPaddings(styles) {
  var positions = ["top", "right", "bottom", "left"];
  var paddings = {};
  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var value = styles["padding-" + position];
    paddings[position] = toFloat(value);
  }
  return paddings;
}
function getSVGContentRect(target) {
  var bbox = target.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
function getHTMLElementContentRect(target) {
  var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }
  var styles = getWindowOf(target).getComputedStyle(target);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom;
  var width = toFloat(styles.width), height = toFloat(styles.height);
  if (styles.boxSizing === "border-box") {
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, "left", "right") + horizPad;
    }
    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, "top", "bottom") + vertPad;
    }
  }
  if (!isDocumentElement(target)) {
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight;
    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }
    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }
  return createRectInit(paddings.left, paddings.top, width, height);
}
var isSVGGraphicsElement = function() {
  if (typeof SVGGraphicsElement !== "undefined") {
    return function(target) {
      return target instanceof getWindowOf(target).SVGGraphicsElement;
    };
  }
  return function(target) {
    return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === "function";
  };
}();
function isDocumentElement(target) {
  return target === getWindowOf(target).document.documentElement;
}
function getContentRect(target) {
  if (!isBrowser) {
    return emptyRect;
  }
  if (isSVGGraphicsElement(target)) {
    return getSVGContentRect(target);
  }
  return getHTMLElementContentRect(target);
}
function createReadOnlyRect(_a) {
  var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
  var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype);
  defineConfigurable(rect, {
    x,
    y,
    width,
    height,
    top: y,
    right: x + width,
    bottom: height + y,
    left: x
  });
  return rect;
}
function createRectInit(x, y, width, height) {
  return { x, y, width, height };
}
var ResizeObservation = function() {
  function ResizeObservation2(target) {
    this.broadcastWidth = 0;
    this.broadcastHeight = 0;
    this.contentRect_ = createRectInit(0, 0, 0, 0);
    this.target = target;
  }
  ResizeObservation2.prototype.isActive = function() {
    var rect = getContentRect(this.target);
    this.contentRect_ = rect;
    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
  };
  ResizeObservation2.prototype.broadcastRect = function() {
    var rect = this.contentRect_;
    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;
    return rect;
  };
  return ResizeObservation2;
}();
var ResizeObserverEntry = function() {
  function ResizeObserverEntry2(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);
    defineConfigurable(this, { target, contentRect });
  }
  return ResizeObserverEntry2;
}();
var ResizeObserverSPI = function() {
  function ResizeObserverSPI2(callback, controller, callbackCtx) {
    this.activeObservations_ = [];
    this.observations_ = new MapShim();
    if (typeof callback !== "function") {
      throw new TypeError("The callback provided as parameter 1 is not a function.");
    }
    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
  }
  ResizeObserverSPI2.prototype.observe = function(target) {
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    if (typeof Element === "undefined" || !(Element instanceof Object)) {
      return;
    }
    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    if (observations.has(target)) {
      return;
    }
    observations.set(target, new ResizeObservation(target));
    this.controller_.addObserver(this);
    this.controller_.refresh();
  };
  ResizeObserverSPI2.prototype.unobserve = function(target) {
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    if (typeof Element === "undefined" || !(Element instanceof Object)) {
      return;
    }
    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    if (!observations.has(target)) {
      return;
    }
    observations.delete(target);
    if (!observations.size) {
      this.controller_.removeObserver(this);
    }
  };
  ResizeObserverSPI2.prototype.disconnect = function() {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
  };
  ResizeObserverSPI2.prototype.gatherActive = function() {
    var _this = this;
    this.clearActive();
    this.observations_.forEach(function(observation) {
      if (observation.isActive()) {
        _this.activeObservations_.push(observation);
      }
    });
  };
  ResizeObserverSPI2.prototype.broadcastActive = function() {
    if (!this.hasActive()) {
      return;
    }
    var ctx = this.callbackCtx_;
    var entries = this.activeObservations_.map(function(observation) {
      return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });
    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
  };
  ResizeObserverSPI2.prototype.clearActive = function() {
    this.activeObservations_.splice(0);
  };
  ResizeObserverSPI2.prototype.hasActive = function() {
    return this.activeObservations_.length > 0;
  };
  return ResizeObserverSPI2;
}();
var observers = typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : new MapShim();
var ResizeObserver = function() {
  function ResizeObserver2(callback) {
    if (!(this instanceof ResizeObserver2)) {
      throw new TypeError("Cannot call a class as a function.");
    }
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);
    observers.set(this, observer);
  }
  return ResizeObserver2;
}();
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(method) {
  ResizeObserver.prototype[method] = function() {
    var _a;
    return (_a = observers.get(this))[method].apply(_a, arguments);
  };
});
var index$1 = function() {
  if (typeof global$1.ResizeObserver !== "undefined") {
    return global$1.ResizeObserver;
  }
  return ResizeObserver;
}();
const _sfc_main = {
  name: "QJsearch",
  props: {
    searchData: {
      type: [Array, Object],
      default: () => {
        return [];
      }
    },
    initVisibleCount: [Number, String],
    wrapperStyles: {
      type: [String, Object],
      default: ""
    }
  },
  components: {
    SearchItem
  },
  setup(props, { emit }) {
    const state = reactive({
      copySearchData: null,
      isFolder: true,
      wh: 1e3,
      observe: null
    });
    const transitionWrapper = ref(null);
    const list = ref(null);
    const methods = {
      searchFn(result) {
        if (result.cindex == -1) {
          state.copySearchData[result == null ? void 0 : result.index] = result.data;
        } else {
          state.copySearchData[result == null ? void 0 : result.index].more[result == null ? void 0 : result.cindex] = result.data;
        }
        emit("searchFn", state.copySearchData);
      },
      btnEvent(type) {
        if (type == "toggle") {
          state.isFolder = !state.isFolder;
          nextTick(() => {
            state.wh = methods.getTagsBlockSize();
          });
        }
        if (type == "search") {
          emit("searchFn", state.copySearchData);
        }
      },
      formatCssText() {
        if (props == null ? void 0 : props.wrapperStyles) {
          const cssText = props == null ? void 0 : props.wrapperStyles;
          if (typeof cssText == "object") {
            let str = "";
            Array.from(Object.keys(cssText)).forEach((key) => {
              str += key + ":" + cssText[key];
            });
            return str;
          }
          if (typeof cssText == "string")
            return cssText;
        }
        return "";
      },
      getTagsBlockSize() {
        let h = 0;
        if (list.value) {
          if (state.isFolder) {
            h = getFoldSize();
          } else {
            h = getUnFoldSize();
          }
          return h;
        }
        function getFoldSize() {
          let h2 = 0;
          let count = 0;
          let num = Number(props.initVisibleCount);
          if (props.initVisibleCount) {
            Array.from(list.value).filter((vn) => vn.nodeType == 1).forEach((vk) => {
              if (num > 0) {
                if (vk.getAttribute("data-style") == "inline") {
                  if (count >= 1) {
                    count = 0;
                  } else {
                    count += 1;
                    num--;
                    h2 += Number(vk.clientHeight);
                    h2 += parseInt(window.getComputedStyle(vk, null).marginTop);
                    h2 += parseInt(window.getComputedStyle(vk, null).marginBottom);
                  }
                } else {
                  num--;
                  h2 += Number(vk.clientHeight);
                  h2 += parseInt(window.getComputedStyle(vk, null).marginTop);
                  h2 += parseInt(window.getComputedStyle(vk, null).marginBottom);
                }
              }
            });
          }
          return h2 - 1;
        }
        function getUnFoldSize() {
          let h2 = 0;
          let count = 0;
          const lists = Array.from(list.value).filter((vn) => vn.nodeType == 1).reverse();
          lists.forEach((vk, index2) => {
            if (vk.getAttribute("data-style") == "inline") {
              if (count >= 1) {
                count = 0;
              } else {
                count += 1;
                h2 += Number(vk.clientHeight);
                h2 += parseInt(window.getComputedStyle(vk, null).marginTop);
                if (index2 !== lists.length - 1)
                  h2 += parseInt(window.getComputedStyle(vk, null).marginBottom);
              }
            } else {
              h2 += Number(vk.clientHeight);
              h2 += parseInt(window.getComputedStyle(vk, null).marginTop);
              if (index2 !== lists.length - 1)
                h2 += parseInt(window.getComputedStyle(vk, null).marginBottom);
            }
          });
          return h2 + 20;
        }
      },
      seachTransBlockSizeObserve() {
        state.observe = new index$1(() => {
          state.wh = methods.getTagsBlockSize();
        });
        state.observe.observe(transitionWrapper == null ? void 0 : transitionWrapper.value);
      }
    };
    watch(() => props.searchData, (val) => {
      var _a;
      if (val) {
        if (Array.isArray(val)) {
          state.copySearchData = ((_a = props.searchData) == null ? void 0 : _a.length) ? JSON.parse(JSON.stringify(props.searchData)) : [];
        }
        if (Object.prototype.toString.call(val) == "[object Object]") {
          state.copySearchData = [JSON.parse(JSON.stringify(val))];
        }
      }
    }, { immediate: true });
    onMounted(() => {
      transitionWrapper.value.style.transition = "";
      state.wh = methods.getTagsBlockSize();
      nextTick(() => {
        transitionWrapper.value.style.transition = "height 0.25s ease";
        methods.seachTransBlockSizeObserve();
      });
    });
    onBeforeUnmount(() => {
      state.observe && state.observe.unobserve(transitionWrapper == null ? void 0 : transitionWrapper.value);
    });
    return {
      ...toRefs(state),
      ...methods,
      transitionWrapper,
      list
    };
  }
};
const _hoisted_1 = ["data-style"];
const _hoisted_2 = {
  key: 0,
  class: "label"
};
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_search_item = resolveComponent("search-item");
  return openBlock(), createElementBlock("div", {
    class: "xy-search-group--wrapper",
    style: normalizeStyle(_ctx.formatCssText())
  }, [
    createElementVNode("div", {
      class: "search-inner--container",
      style: normalizeStyle({ height: _ctx.wh + "px" }),
      ref: "transitionWrapper"
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.copySearchData, (item, index2) => {
        return openBlock(), createElementBlock("div", {
          class: normalizeClass(["search-item", { inline: (item == null ? void 0 : item.display) == "inline" }]),
          "data-style": item == null ? void 0 : item.display,
          key: index2,
          ref_for: true,
          ref: "list"
        }, [
          (item == null ? void 0 : item.labelVisibel) || (item == null ? void 0 : item.labelName) ? (openBlock(), createElementBlock("p", _hoisted_2, [
            (item == null ? void 0 : item.labelName) ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(item.labelName), 1)) : createCommentVNode("", true),
            (item == null ? void 0 : item.labelName) ? (openBlock(), createElementBlock("span", _hoisted_4, "\uFF1A")) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          createElementVNode("div", {
            class: normalizeClass(["value", { "has-more-conditions": item.more }])
          }, [
            createVNode(_component_search_item, {
              itemData: item,
              index: index2,
              isFolder: _ctx.isFolder,
              onSearchFn: _ctx.searchFn,
              onBtnEvent: _ctx.btnEvent
            }, null, 8, ["itemData", "index", "isFolder", "onSearchFn", "onBtnEvent"]),
            item.more ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(item.more, (more, idx) => {
              return openBlock(), createElementBlock("div", {
                class: "more-seach-conditions",
                key: idx
              }, [
                createVNode(_component_search_item, {
                  itemData: more,
                  index: index2,
                  cindex: idx,
                  isFolder: _ctx.isFolder,
                  onSearchFn: _ctx.searchFn,
                  onBtnEvent: _ctx.btnEvent
                }, null, 8, ["itemData", "index", "cindex", "isFolder", "onSearchFn", "onBtnEvent"])
              ]);
            }), 128)) : createCommentVNode("", true)
          ], 2)
        ], 10, _hoisted_1);
      }), 128))
    ], 4)
  ], 4);
}
var QJsearch = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const coms = [QJsearch];
const install = function(Vue) {
  coms.forEach((com) => {
    Vue.component(com.name, com);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
var index = {
  install,
  ...coms
};
export { index as default };
//# sourceMappingURL=QJsearch.es.js.map
