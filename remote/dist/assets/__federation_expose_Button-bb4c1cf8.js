import{importShared as u}from"./__federation_fn_import.js";import{r as f}from"./index-938f3533.js";var n={},l={get exports(){return n},set exports(e){n=e}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=f,m=Symbol.for("react.element"),d=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,y=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,o){var r,s={},a=null,c=null;o!==void 0&&(a=""+o),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(c=t.ref);for(r in t)x.call(t,r)&&!j.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:m,type:e,key:a,ref:c,props:s,_owner:y.current}}i.Fragment=d;i.jsx=p;i.jsxs=p;(function(e){e.exports=i})(l);const v=n.jsx,k=n.jsxs;const{useState:E}=await u("react"),S=()=>{const[e,t]=E(0);return v("div",{children:k("button",{id:"click-btn",className:"shared-btn",onClick:()=>t(o=>o+1),children:["Click me: ",e]})})};export{S as Button,k as a,S as default,v as j};
