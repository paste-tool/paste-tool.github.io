!function(){async function t(t,e,n){document.title=t,document.getElementById("title").textContent=t;var o=e.split(/\r\n|\r|\n/),a="";for(let t=0;t<o.length-1;t++)a=a+"<span class=normal><a>"+(t+1)+"</a></span><br>";a=a+"<span class=normal><a>"+o.length+"</a></span>",document.getElementById("data").innerHTML=`<table class=highlighttable><tr><td class=linenos><div class="numbers" class=linenodiv><pre>${a}</pre></div></td><td class=code><div class=highlight><pre><code class="language-${n}">${e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}</code></pre></div></td></tr></table>`}window.copyLink=function(){navigator.clipboard.writeText(window.location.href),document.getElementById("copy-link").innerText="Copied",setTimeout(function(){document.getElementById("copy-link").innerText="🔗 Copy"},3e3)},window.onload=async function(){var e=GUN({peers:["https://gun-us.herokuapp.com/gun","https://gun-rs.iris.to/gun"]});const n=decodeURIComponent(window.location.pathname.split("/")[1]);var o;o=n,document.body.innerHTML=`<div id=container><div class=topbuttons><a href="/" title="Create paste" class="button button-primary">New</a><a href="/terms" title="Terms of Use" class="button button-primary">Terms of Use</a><a href="/license" title="License" class="button button-primary">License</a><a href=/settings title=Settings class="button button-primary">Settings</a></div><h1 id="title"></h1><div class="row actionbuttons"><a href="/${o}/raw" title="Plaintext">RAW TEXT</a></div><br><div id="data"><p>Loading paste...</p></div></div><p style="color:#fff"><input type="text" value="${window.location.href}" readonly><button id="copy-link" style="color:#fff" onclick="copyLink()">🔗 Copy</button></p>`;const[a,i,r]=atob(n).split("/");e.get("~"+a).get(i,async function(e){const o=(await SEA.decrypt(e.content,r)).toString(),a=(await SEA.decrypt(e.title,r)).toString(),i=e.syntax,l=e.encrypted;if(void 0!==o)if("raw"===window.location.pathname.split("/")[2])if(void 0!==l&&l&&null!==window.localStorage.getItem(n)){let t=(await SEA.decrypt(o,window.localStorage.getItem(n))).toString();if(void 0!==t){let e=document.createElement("pre");e.textContent=t,document.body.appendChild(e)}else{let t=document.createElement("pre");t.textContent=o,document.body.appendChild(t)}}else{let t=document.createElement("pre");t.textContent=o,document.body.appendChild(t)}else if("boolean"==typeof l&&l){if(null!==window.localStorage.getItem(n)){let e=window.localStorage.getItem(n),r=(await SEA.decrypt(o,e)).toString(),l=(await SEA.decrypt(a,e)).toString();if(void 0!==r)return void await t(l,r,i)}document.getElementById("data").innerHTML='<p>This paste is encrypted</p><div class=row><div class="twelve columns"><form id=decryptpaste><label for=password>Password</label><input type=text name=password title=Password id=password><input type=submit value="Confirm"></form><p id=errorbox style="color:red"></p></div></div>',document.getElementById("decryptpaste").onsubmit=async function(e){if(e.preventDefault(),""===document.getElementById("password").value)return;const r=document.getElementById("password").value,l=(await SEA.decrypt(a,r)).toString();if(void 0===l)return void(document.getElementById("errorbox").innerHTML="Incorrect password");const d=(await SEA.decrypt(o,r)).toString();window.localStorage.setItem(n,r),await t(l,d,i)}}else await t(a,o,i);else document.body.innerHTML="<p>Not found</p>"})}}();
