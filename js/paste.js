document.getElementById("paste-form").onsubmit=function(e){if(e.preventDefault(),""!==document.getElementById("id_content").value){let e={title:document.getElementById("id_title").value,content:document.getElementById("id_content").value},t=generateKeyPair().publicKey;user.get(t).set(e).once(async function(){await db.get(t).set(this),window.location.replace("./"+t)})}};
