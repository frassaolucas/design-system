import{e as r}from"./index.32dc04db.js";import{j as u}from"./jsx-runtime.9028db2f.js";const i=r.createContext({});function C(t){return n;function n(o){const e=s(o.components);return u(t,{...o,allComponents:e})}}function s(t){const n=r.useContext(i);return r.useMemo(()=>typeof t=="function"?t(n):{...n,...t},[n,t])}const f={};function c({components:t,children:n,disableParentContext:o}){let e;return o?e=typeof t=="function"?t({}):t||f:e=s(t),u(i.Provider,{value:e,children:n})}export{i as M,c as a,s as u,C as w};
