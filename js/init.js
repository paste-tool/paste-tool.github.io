const db=GUN({peers:['https://gun-us.herokuapp.com/gun'}),user=db.user().recall({sessionStorage:!0});function login(e,r){user.auth(e,r,({err:e})=>{e&&console.log(e)})}window.onload=function(){if(null!==localStorage.getItem("address")&&null!==localStorage.getItem("privateKey"))user.auth(localStorage.getItem("address"),localStorage.getItem("privateKey"));else{let e=generateKeyPair();user.create(e.address,e.privateKey,({err:r})=>{r?console.log(r):(localStorage.setItem("address",e.address),localStorage.setItem("privateKey",e.privateKey),login(e.address,e.privateKey))})}},"serviceWorker"in navigator&&navigator.serviceWorker.register("/service.js");
