(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{478:function(module,exports,__webpack_require__){__webpack_require__(479),__webpack_require__(639),__webpack_require__(640),__webpack_require__(857),__webpack_require__(852),__webpack_require__(859),__webpack_require__(860),__webpack_require__(858),__webpack_require__(854),__webpack_require__(861),__webpack_require__(855),__webpack_require__(856),__webpack_require__(862),module.exports=__webpack_require__(839)},546:function(module,exports){},640:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(345)},839:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(345).configure)([__webpack_require__(840),__webpack_require__(850)],module,!1)}).call(this,__webpack_require__(196)(module))},840:function(module,exports,__webpack_require__){var map={"./stories/Introduction.stories.mdx":841};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=840},841:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(21),__webpack_require__(432),__webpack_require__(5),__webpack_require__(13),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(57),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(218),_excluded=(__webpack_require__(842),__webpack_require__(843),__webpack_require__(844),__webpack_require__(845),__webpack_require__(846),__webpack_require__(847),__webpack_require__(848),__webpack_require__(849),["components"]);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.b,{title:"README",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n\n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n\n"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h1",{id:"based-components"},"Based Components"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"This component library isn't like your typical design system (like Material-UI, Ant Design, Bootstrap etc). I wanted to create a highly customisable library that has all the basics covered and easy ways to scaffold a component."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"This is essentially a library where the functionality is ready made, but the styles and extra logic are left entirely up to the developer."))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"README",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},842:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/code-brackets.2e1112d7.svg"},843:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/colors.a4bd0486.svg"},844:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/comments.a3859089.svg"},845:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/direction.b770f9af.svg"},846:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/flow.edad2ac1.svg"},847:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/plugin.d494b228.svg"},848:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/repo.6d496322.svg"},849:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/stackalt.dba9fbb3.svg"},850:function(module,exports,__webpack_require__){var map={"./stories/Button.stories.tsx":853};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=850},853:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"text",(function(){return Button_stories_text})),__webpack_require__.d(__webpack_exports__,"kind",(function(){return Button_stories_kind})),__webpack_require__.d(__webpack_exports__,"shape",(function(){return Button_stories_shape})),__webpack_require__.d(__webpack_exports__,"customStyles",(function(){return Button_stories_customStyles})),__webpack_require__.d(__webpack_exports__,"isLoading",(function(){return Button_stories_isLoading}));__webpack_require__(13);var _templateObject,_templateObject2,react=__webpack_require__(0),styled_components_browser_esm=(__webpack_require__(21),__webpack_require__(432),__webpack_require__(5),__webpack_require__(52),__webpack_require__(11),__webpack_require__(120));function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var rotateSpinner=Object(styled_components_browser_esm.c)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]))),Wrapper=styled_components_browser_esm.b.div(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: ",";\n  height: ",";\n  border: "," solid\n    ",";\n  border-radius: 50%;\n  border-right-color: transparent;\n  animation: "," 0.75s linear infinite;\n"])),(function(_ref){var size=_ref.size,loadingSize=_ref.loadingSize;return(loadingSize||size)+"px"}),(function(_ref2){var size=_ref2.size,loadingSize=_ref2.loadingSize;return(loadingSize||size)+"px"}),(function(_ref3){var size=_ref3.size;return(size&&size/15)+"px"}),(function(_ref4){return _ref4.loadingColor}),rotateSpinner);try{Wrapper.displayName="Wrapper",Wrapper.__docgenInfo={description:"",displayName:"Wrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},loadingColor:{defaultValue:null,description:"",name:"loadingColor",required:!1,type:{name:"string"}},loadingSize:{defaultValue:null,description:"",name:"loadingSize",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/LoadingSpinner/styles.tsx#Wrapper"]={docgenInfo:Wrapper.__docgenInfo,name:"Wrapper",path:"src/LoadingSpinner/styles.tsx#Wrapper"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__(26);function loading_spinner_LoadingSpinner(_ref){var _ref$loading=_ref.loading,loading=void 0===_ref$loading||_ref$loading,_ref$size=_ref.size,size=void 0===_ref$size?30:_ref$size,_ref$loadingColor=_ref.loadingColor,loadingColor=void 0===_ref$loadingColor?"#fff":_ref$loadingColor,_ref$loadingSize=_ref.loadingSize,loadingSize=void 0===_ref$loadingSize?30:_ref$loadingSize;return loading?Object(jsx_runtime.jsx)(Wrapper,{size:size,loadingColor:loadingColor,loadingSize:loadingSize}):null}var loading_spinner=loading_spinner_LoadingSpinner;try{loading_spinner_LoadingSpinner.displayName="LoadingSpinner",loading_spinner_LoadingSpinner.__docgenInfo={description:"",displayName:"LoadingSpinner",props:{loading:{defaultValue:{value:"true"},description:"",name:"loading",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"30"},description:"",name:"size",required:!1,type:{name:"number"}},loadingColor:{defaultValue:{value:"#fff"},description:"",name:"loadingColor",required:!1,type:{name:"string"}},loadingSize:{defaultValue:{value:"30"},description:"",name:"loadingSize",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/LoadingSpinner/loading-spinner.tsx#LoadingSpinner"]={docgenInfo:loading_spinner_LoadingSpinner.__docgenInfo,name:"LoadingSpinner",path:"src/LoadingSpinner/loading-spinner.tsx#LoadingSpinner"})}catch(__react_docgen_typescript_loader_error){}try{LoadingSpinner.displayName="LoadingSpinner",LoadingSpinner.__docgenInfo={description:"",displayName:"LoadingSpinner",props:{loading:{defaultValue:{value:"true"},description:"",name:"loading",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"30"},description:"",name:"size",required:!1,type:{name:"number"}},loadingColor:{defaultValue:{value:"#fff"},description:"",name:"loadingColor",required:!1,type:{name:"string"}},loadingSize:{defaultValue:{value:"30"},description:"",name:"loadingSize",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/LoadingSpinner/index.tsx#LoadingSpinner"]={docgenInfo:LoadingSpinner.__docgenInfo,name:"LoadingSpinner",path:"src/LoadingSpinner/index.tsx#LoadingSpinner"})}catch(__react_docgen_typescript_loader_error){}var styles_templateObject,styles_templateObject2,_templateObject3,anim="0, 0, 0.38, 0.9",KIND_COLOURS={primary:{main:"#0f62fe",counter:"#fff",hovered:"#0353e9"},secondary:{main:"#393939",counter:"#fff",hovered:"#4c4c4c"},tertiary:{main:"#fff",counter:"#0f62fe",hovered:"#0f62fe",hoveredColor:"#fff",outline:"#0f62fe"},danger:{main:"#da1e28",counter:"#fff",hovered:"#b81921"},ghost:{main:"#fff",counter:"#0f62fe",hovered:"#e5e5e5"}};function styles_taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var BasedButton=styled_components_browser_esm.b.button(_templateObject3||(_templateObject3=styles_taggedTemplateLiteralLoose(["\n  display: inline-flex;\n  flex-direction: ",";\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem 1rem;\n  min-width: 80px;\n  min-height: 35px;\n  border-width: 0;\n  border-style: none;\n  outline: none;\n  text-decoration: none;\n  appearance: none;\n  cursor: ",";\n  transition: 0.125s ease;\n\n  ","\n  ","\n\n  &.default {\n    border-radius: 0;\n  }\n  &.pill {\n    border-radius: 30px;\n  }\n  &.round {\n    border-radius: 50%;\n    padding-left: 14px;\n    padding-right: 14px;\n  }\n\n  p {\n    margin: 0;\n  }\n"])),(function(_ref){return _ref.isLoading?"row":"column"}),(function(_ref2){return _ref2.disabled?"default":"pointer"}),(function(_ref3){return function getKindStyles(kind){var _KIND_COLOURS$kind=KIND_COLOURS[kind],main=_KIND_COLOURS$kind.main,counter=_KIND_COLOURS$kind.counter,hovered=_KIND_COLOURS$kind.hovered,hoveredColor=_KIND_COLOURS$kind.hoveredColor,outline=_KIND_COLOURS$kind.outline;return Object(styled_components_browser_esm.a)(styles_templateObject||(styles_templateObject=styles_taggedTemplateLiteralLoose(["\n    background: ",";\n    color: ",";\n    border: 1px solid ",";\n    transition: background 70ms cubic-bezier(","),\n      box-shadow 70ms cubic-bezier(","),\n      border-color 70ms cubic-bezier(","),\n      outline 70ms cubic-bezier(",");\n\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n  "])),main,counter,outline||"transparent",anim,anim,anim,anim,hovered,hoveredColor&&hoveredColor?hoveredColor&&hoveredColor:counter)}(_ref3.kind)}),(function(_ref4){return function getActiveStyles(kind){var _KIND_COLOURS$kind2=KIND_COLOURS[kind],main=_KIND_COLOURS$kind2.main,counter=_KIND_COLOURS$kind2.counter,outline=_KIND_COLOURS$kind2.outline;return Object(styled_components_browser_esm.a)(styles_templateObject2||(styles_templateObject2=styles_taggedTemplateLiteralLoose(["\n    &:focus {\n      border-color: ",";\n      box-shadow: inset 0 0 0 1px ",", inset 0 0 0 2px ",";\n      background-color: ",";\n      color: ",";\n    }\n  "])),outline||main,main,counter,outline||main,outline?main:counter)}(_ref4.kind)}));try{BasedButton.displayName="BasedButton",BasedButton.__docgenInfo={description:"",displayName:"BasedButton",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}},kind:{defaultValue:null,description:"",name:"kind",required:!1,type:{name:"string"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"CSSProperties"}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"string"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},loadingColor:{defaultValue:null,description:"",name:"loadingColor",required:!1,type:{name:"string"}},loadingSize:{defaultValue:null,description:"",name:"loadingSize",required:!1,type:{name:"number"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}},iconPre:{defaultValue:null,description:"",name:"iconPre",required:!1,type:{name:"ReactNode"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"ReactNode"}},rest:{defaultValue:null,description:"",name:"rest",required:!1,type:{name:"any"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Button/styles.tsx#BasedButton"]={docgenInfo:BasedButton.__docgenInfo,name:"BasedButton",path:"src/Button/styles.tsx#BasedButton"})}catch(__react_docgen_typescript_loader_error){}var SHAPE_default="default",KIND_primary="primary",_excluded=["text","type","className","kind","children","customStyles","shape","isLoading","loadingColor","loadingSize","isActive","disabled","iconPre","iconEnd","onClick"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Button_button=Object(react.forwardRef)((function(_ref,ref){var text=_ref.text,_ref$type=_ref.type,type=void 0===_ref$type?"button":_ref$type,className=_ref.className,_ref$kind=_ref.kind,kind=void 0===_ref$kind?KIND_primary:_ref$kind,children=_ref.children,customStyles=_ref.customStyles,_ref$shape=_ref.shape,shape=void 0===_ref$shape?SHAPE_default:_ref$shape,_ref$isLoading=_ref.isLoading,isLoading=void 0!==_ref$isLoading&&_ref$isLoading,_ref$loadingColor=_ref.loadingColor,loadingColor=void 0===_ref$loadingColor?"#fff":_ref$loadingColor,_ref$loadingSize=_ref.loadingSize,loadingSize=void 0===_ref$loadingSize?30:_ref$loadingSize,_ref$isActive=_ref.isActive,isActive=void 0!==_ref$isActive&&_ref$isActive,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,iconPre=_ref.iconPre,iconEnd=_ref.iconEnd,onClick=_ref.onClick,rest=_objectWithoutProperties(_ref,_excluded);return Object(jsx_runtime.jsx)(BasedButton,Object.assign({ref:ref,type:type,style:customStyles,className:[className,shape].join(" "),onClick:onClick,kind:kind,isLoading:isLoading,isActive:isActive,disabled:disabled,iconPre:iconPre,iconEnd:iconEnd},rest,{children:isLoading?Object(jsx_runtime.jsx)(loading_spinner,{loadingColor:loadingColor,loadingSize:loadingSize}):Object(jsx_runtime.jsxs)(react.Fragment,{children:[iconPre||null,Object(jsx_runtime.jsx)("span",{children:text})||null,children||null,iconEnd||null]})}))}));try{button.displayName="button",button.__docgenInfo={description:"",displayName:"button",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},kind:{defaultValue:{value:"KIND.primary"},description:"",name:"kind",required:!1,type:{name:"string"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"CSSProperties"}},shape:{defaultValue:{value:"SHAPE.default"},description:"",name:"shape",required:!1,type:{name:"string"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},loadingColor:{defaultValue:{value:"#fff"},description:"",name:"loadingColor",required:!1,type:{name:"string"}},loadingSize:{defaultValue:{value:"30"},description:"",name:"loadingSize",required:!1,type:{name:"number"}},isActive:{defaultValue:{value:"false"},description:"",name:"isActive",required:!1,type:{name:"boolean"}},iconPre:{defaultValue:null,description:"",name:"iconPre",required:!1,type:{name:"ReactNode"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Button/button.tsx#button"]={docgenInfo:button.__docgenInfo,name:"button",path:"src/Button/button.tsx#button"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Button",decorators:[function(Story){return Object(jsx_runtime.jsx)(Story,{})}]};var Button_stories_text=function text(){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(Button_button,{text:"Some text",kind:"primary"}),Object(jsx_runtime.jsx)(Button_button,{text:"Different text",kind:"danger"})]})},Button_stories_kind=function kind(){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(Button_button,{text:"Primary",kind:"primary"}),Object(jsx_runtime.jsx)(Button_button,{text:"Secondary",kind:"secondary"}),Object(jsx_runtime.jsx)(Button_button,{text:"Tertiary",kind:"tertiary"}),Object(jsx_runtime.jsx)(Button_button,{text:"Danger",kind:"danger"}),Object(jsx_runtime.jsx)(Button_button,{text:"Ghost",kind:"ghost"})]})},Button_stories_shape=function shape(){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(Button_button,{text:"Default",shape:"default"}),Object(jsx_runtime.jsx)(Button_button,{text:"Pill",shape:"pill"}),Object(jsx_runtime.jsx)(Button_button,{text:"Round",shape:"round"}),Object(jsx_runtime.jsx)(Button_button,{text:"Square",shape:"square"})]})},Button_stories_customStyles=function customStyles(){return Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:Object(jsx_runtime.jsx)(Button_button,{text:"Custom",customStyles:{background:"pink",height:70,width:200,borderRadius:5}})})},Button_stories_isLoading=function isLoading(){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(Button_button,{isLoading:!0}),Object(jsx_runtime.jsx)(Button_button,{isLoading:!0,loadingSize:10}),Object(jsx_runtime.jsx)(Button_button,{isLoading:!0,loadingColor:"pink"})]})};Button_stories_text.parameters=Object.assign({storySource:{source:'() => (\n  <>\n    <Button text="Some text" kind="primary" />\n    <Button text="Different text" kind="danger" />\n  </>\n)'}},Button_stories_text.parameters),Button_stories_kind.parameters=Object.assign({storySource:{source:'() => (\n  <>\n    <Button text="Primary" kind="primary" />\n    <Button text="Secondary" kind="secondary" />\n    <Button text="Tertiary" kind="tertiary" />\n    <Button text="Danger" kind="danger" />\n    <Button text="Ghost" kind="ghost" />\n  </>\n)'}},Button_stories_kind.parameters),Button_stories_shape.parameters=Object.assign({storySource:{source:'() => (\n  <>\n    <Button text="Default" shape="default" />\n    <Button text="Pill" shape="pill" />\n    <Button text="Round" shape="round" />\n    <Button text="Square" shape="square" />\n  </>\n)'}},Button_stories_shape.parameters),Button_stories_customStyles.parameters=Object.assign({storySource:{source:"() => (\n  <>\n    <Button\n      text=\"Custom\"\n      customStyles={{\n        background: 'pink',\n        height: 70,\n        width: 200,\n        borderRadius: 5,\n      }}\n    />\n  </>\n)"}},Button_stories_customStyles.parameters),Button_stories_isLoading.parameters=Object.assign({storySource:{source:'() => (\n  <>\n    <Button isLoading />\n    <Button isLoading loadingSize={10} />\n    <Button isLoading loadingColor="pink" />\n  </>\n)'}},Button_stories_isLoading.parameters)},862:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(21),__webpack_require__(5),__webpack_require__(49),__webpack_require__(424),__webpack_require__(836),__webpack_require__(46),__webpack_require__(837),__webpack_require__(838),__webpack_require__(423);var client_api=__webpack_require__(869),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[478,2,3]]]);