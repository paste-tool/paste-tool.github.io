!function(){var e=window.localStorage.getItem("keypair");document.getElementById("keypair-value").value=e,document.getElementById("changePair").onsubmit=function(t){t.preventDefault();const n=document.getElementById("keypair").value;if(""!==n)try{JSON.parse(e),window.localStorage.setItem("keypair",n),e=n,document.getElementById("keypair-value").value=e,document.getElementById("keypair").value=""}catch(e){document.getElementById("errorbox").textContent=e}},document.getElementById("copy-keypair").onclick=function(){navigator.clipboard.writeText(e),document.getElementById("copy-keypair").innerText="Copied",setTimeout(function(){document.getElementById("copy-keypair").innerText="🔗 Copy"},3e3)},document.getElementById("edit-keypair").addEventListener("click",function e(t){document.getElementById("edit-keypair-container").style.display="block",document.getElementById("edit-keypair").removeEventListener("click",e)})}();
