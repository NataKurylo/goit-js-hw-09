const t=document.body,e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");let n=null;function r(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}e.addEventListener("click",(function(){e.setAttribute("disabled",""),t.style.backgroundColor=`${r()}`,n=setInterval((()=>{t.style.backgroundColor=`${r()}`}),1e3),o.toggleAttribute("disabled","")})),o.addEventListener("click",(function(){clearInterval(n),e.toggleAttribute("disabled",""),o.setAttribute("disabled","")}));
//# sourceMappingURL=01-color-switcher.5edc2440.js.map
