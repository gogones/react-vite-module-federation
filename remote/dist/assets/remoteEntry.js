import{_ as l}from"./preload-helper-101896b7.js";const a=new Set(["Module","__esModule","default","_export_sfc"]);let h={"./Button":()=>(c(["style-e5d0c620.css"]),f("./__federation_expose_Button-bb4c1cf8.js").then(e=>Object.keys(e).every(t=>a.has(t))?()=>e.default:()=>e)),"./RemoteApp":()=>(c(["style-e5d0c620.css"]),f("./__federation_expose_RemoteApp-67c1b214.js").then(e=>Object.keys(e).every(t=>a.has(t))?()=>e.default:()=>e))};const i={},c=e=>{const t=import.meta.url;if(typeof t>"u"){console.warn('The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".');return}const o=t.substring(0,t.lastIndexOf("remoteEntry.js"));e.forEach(n=>{const r=o+n;if(r in i)return;i[r]=!0;const s=document.head.appendChild(document.createElement("link"));s.href=r,s.rel="stylesheet"})};async function f(e){return l(()=>import(e),[])}const p=e=>h[e](),u=e=>{globalThis.__federation_shared__=globalThis.__federation_shared__||{},Object.entries(e).forEach(([t,o])=>{const n=Object.keys(o)[0],r=Object.values(o)[0],s=r.scope||"default";globalThis.__federation_shared__[s]=globalThis.__federation_shared__[s]||{};const _=globalThis.__federation_shared__[s];(_[t]=_[t]||{})[n]=r})};export{c as dynamicLoadingCss,p as get,u as init};
