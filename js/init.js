!function(){const e=GUN({peers:["https://gun-us.herokuapp.com/gun","https://gun-rs.iris.to/gun"]}).user().recall({sessionStorage:!0});window.onload=async function(){if(null!==window.localStorage.getItem("keypair"))e.auth(JSON.parse(window.localStorage.getItem("keypair")));else{const t=await SEA.pair();e.auth(t,({err:e})=>{e?console.log(e):window.localStorage.setItem("keypair",JSON.stringify(t))})}},"serviceWorker"in navigator&&navigator.serviceWorker.register("/service.js"),document.getElementById("paste-form").onsubmit=async function(t){if(t.preventDefault(),""!==document.getElementById("id_content").value){let t={syntax:document.getElementById("id_syntax").selectedOptions[0].value};const n=btoa(String.fromCharCode.apply(null,window.crypto.getRandomValues(new Uint8Array(24)))),o=encodeURIComponent(btoa(String.fromCharCode.apply(null,window.crypto.getRandomValues(new Uint8Array(24))))),a=JSON.parse(window.localStorage.getItem("keypair")).pub,l=await SEA.encrypt(document.getElementById("id_title").value,n),c=await SEA.encrypt(document.getElementById("id_content").value,n);if(document.getElementById("toggle").checked)if(""!==document.getElementById("password").value){let e=document.getElementById("password").value;t.title=await SEA.encrypt(l,e),t.content=await SEA.encrypt(c,e),t.encrypted=!0}else t.title=l,t.content=c,t.encrypted=!1;else t.title=l,t.content=c,t.encrypted=!1;const i=btoa(`${a}/${o}/${n}`);e.get(o).set(t).once(function(){window.location.replace("./"+i)})}},document.getElementById("toggle").onclick=function(){!0===document.getElementById("toggle").checked?document.getElementById("input-password").style.display="block":document.getElementById("input-password").style.display="none"}}();
