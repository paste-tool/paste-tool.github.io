document.getElementById("paste-form").onsubmit=async function(e){if(e.preventDefault(),""!==document.getElementById("id_content").value){if(document.getElementById("switch").checked&&""!==document.getElementById("password").value){let e=await SEA.encrypt(document.getElementById("id_content").value,document.getElementById("password").value);document.getElementById("id_title").value}else{document.getElementById("id_title").value,document.getElementById("id_content").value}let t=generateKeyPair().publicKey;user.get(t).set(e).once(async function(){await db.get(t).set(this),window.location.replace("./"+t)})}},document.getElementById("switch").onclick=function(){!0===document.getElementById("switch").checked?document.getElementById("input-password").style.display="block":document.getElementById("input-password").style.display="none"};
