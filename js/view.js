! function() {
    async function t(t, i, o, e) {
        document.title = t;
        var l = o.split(/\r\n|\r|\n/),
            n = "";
        for (let t = 0; t < l.length - 1; t++) n = n + "<span class=normal><a>" + (t + 1) + "</a></span><br>";
        n = n + "<span class=normal><a>" + l.length + "</a></span>", document.body.innerHTML = `<div id=container><div class=topbuttons><a href="/" title="Create paste" class="button button-primary">New</a><a href="${window.location.origin}/terms" title="Terms of Use" class="button button-primary">Terms of Use</a><a href="${window.location.origin}/license" title="License" class="button button-primary">License</a></div><h1>${t}</h1><div class="row actionbuttons"><a href="/${i}/raw" title="Plaintext">RAW TEXT</a></div><table class=highlighttable><tr><td class=linenos><div class=linenodiv><pre>${n}</pre></div></td><td class=code><div class=highlight><pre><code class="language-${e}">${o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}</code></pre></div></td></tr></table></div><p style="color:#fff"><input type="text" value="${window.location.href}" readonly><button id="copy-link" style="color:#fff" onclick="copyLink()">🔗 Copy Link</button></p>`
    }
    window.copyLink = function() {
        navigator.clipboard.writeText(window.location.href), document.getElementById("copy-link").innerText = "Copied", setTimeout(function() {
            document.getElementById("copy-link").innerText = "🔗 Copy Link"
        }, 3e3)
    }, window.onload = async function() {
        var i = GUN({
                peers: ["https://gun-us.herokuapp.com/gun", "https://gun-rs.iris.to/gun"]
            });
        const e = window.location.pathname.split("/")[1],
            [l, n, h] = atob(e).split("/");
        const a = i.get("~" + l).get(n),
            g = (await SEA.decrypt(await a.get("content"), h)).toString(),
            c = (await SEA.decrypt(await a.get("title"), h)).toString(),
            d = await a.get("syntax"),
            s = await a.get("encrypted");
        if (void 0 !== g)
            if ("raw" === window.location.pathname.split("/")[2])
                if (void 0 !== s && s && null !== window.localStorage.getItem(e)) {
                    let t = (await SEA.decrypt(g, window.localStorage.getItem(e))).toString();
                    if (void 0 !== t) {
                        let i = document.createElement("pre");
                        i.textContent = t, document.body.appendChild(i)
                    } else {
                        let t = document.createElement("pre");
                        t.textContent = g, document.body.appendChild(t)
                    }
                } else {
                    let t = document.createElement("pre");
                    t.textContent = g, document.body.appendChild(t)
                }
        else {
            let i = document.createElement("link"),
                l = document.createElement("link");
            i.rel = "stylesheet", l.rel = "stylesheet", i.href = window.location.origin + "/css/style.css", l.href = window.location.origin + "/css/main.css";
            let n = document.createElement("style");
            if (n.innerHTML = "pre{line-height:125%}td.linenos .normal{color:inherit;background-color:transparent;padding-left:5px;padding-right:5px}span.linenos{color:inherit;background-color:transparent;padding-left:5px;padding-right:5px}td.linenos .special{color:#000;background-color:#ffffc0;padding-left:5px;padding-right:5px}span.linenos.special{color:#000;background-color:#ffffc0;padding-left:5px;padding-right:5px}.highlight .hll{background-color:#ffc}.highlight{background:#121212}.highlight .c{color:#408080;font-style:italic}.highlight .err{border:1px solid red}.highlight .k{color:green;font-weight:700}.highlight .o{color:#666}.highlight .ch{color:#408080;font-style:italic}.highlight .cm{color:#408080;font-style:italic}.highlight .cp{color:#bc7a00}.highlight .cpf{color:#408080;font-style:italic}.highlight .c1{color:#408080;font-style:italic}.highlight .cs{color:#408080;font-style:italic}.highlight .gd{color:#a00000}.highlight .ge{font-style:italic}.highlight .gr{color:red}.highlight .gh{color:navy;font-weight:700}.highlight .gi{color:#00a000}.highlight .go{color:#888}.highlight .gp{color:navy;font-weight:700}.highlight .gs{font-weight:700}.highlight .gu{color:purple;font-weight:700}.highlight .gt{color:#04d}.highlight .kc{color:green;font-weight:700}.highlight .kd{color:green;font-weight:700}.highlight .kn{color:green;font-weight:700}.highlight .kp{color:green}.highlight .kr{color:green;font-weight:700}.highlight .kt{color:#b00040}.highlight .m{color:#666}.highlight .s{color:#ba2121}.highlight .na{color:#7d9029}.highlight .nb{color:green}.highlight .nc{color:#00f;font-weight:700}.highlight .no{color:#800}.highlight .nd{color:#a2f}.highlight .ni{color:#999;font-weight:700}.highlight .ne{color:#d2413a;font-weight:700}.highlight .nf{color:#00f}.highlight .nl{color:#a0a000}.highlight .nn{color:#00f;font-weight:700}.highlight .nt{color:green;font-weight:700}.highlight .nv{color:#19177c}.highlight .ow{color:#a2f;font-weight:700}.highlight .w{color:#bbb}.highlight .mb{color:#666}.highlight .mf{color:#666}.highlight .mh{color:#666}.highlight .mi{color:#666}.highlight .mo{color:#666}.highlight .sa{color:#ba2121}.highlight .sb{color:#ba2121}.highlight .sc{color:#ba2121}.highlight .dl{color:#ba2121}.highlight .sd{color:#ba2121;font-style:italic}.highlight .s2{color:#ba2121}.highlight .se{color:#b62;font-weight:700}.highlight .sh{color:#ba2121}.highlight .si{color:#b68;font-weight:700}.highlight .sx{color:green}.highlight .sr{color:#b68}.highlight .s1{color:#ba2121}.highlight .ss{color:#19177c}.highlight .bp{color:green}.highlight .fm{color:#00f}.highlight .vc{color:#19177c}.highlight .vg{color:#19177c}.highlight .vi{color:#19177c}.highlight .vm{color:#19177c}.highlight .il{color:#666}.linenos{padding-right:0}.softwrap{white-space:pre-wrap}h1 i{color:#888}td.code{padding-left:0}#copy-success{color:#fff;font-weight:700}", document.head.appendChild(i), document.head.appendChild(l), document.head.appendChild(n), "boolean" == typeof s && s) {
                if (null !== window.localStorage.getItem(e)) {
                    let i = window.localStorage.getItem(e),
                        o = (await SEA.decrypt(g, i)).toString(),
                        l = (await SEA.decrypt(c, i)).toString();
                    if (void 0 !== o) return void await t(l, e, o, d)
                } else if ("" !== window.location.search) {
                    let i = new URL(window.location.href).searchParams.get("key"),
                        o = (await SEA.decrypt(g, i)).toString(),
                        l = (await SEA.decrypt(c, i)).toString();
                    if (void 0 !== o) return void await t(l, e, o, d)
                }
                document.body.innerHTML = `<div id=container><div class=topbuttons><a href="/" title="Create paste" class="button button-primary">New</a><a href="${window.location.origin}/terms" title="Terms of Use" class="button button-primary">Terms of Use</a><a href="${window.location.origin}/license" title="License" class="button button-primary">License</a></div><h1>${r}</h1><div class="row actionbuttons"><a href="/${o}/raw" title="Plaintext">RAW TEXT</a></div><br><p>This paste is encrypted</p><div class=row><div class="twelve columns"><form id=decryptpaste><label for=password>Password</label><input type=text name=password title=Password id=password><input type=submit value="Confirm"></form><p id=errorbox style="color:red"></p></div></div></div><p style="color:#fff"><input type="text" value="${window.location.href}" readonly><button id="copy-link" style="color:#fff" onclick="copyLink()">🔗 Copy Link</button></p>`, document.getElementById("decryptpaste").onsubmit = async function(i) {
                    if (i.preventDefault(), "" === document.getElementById("password").value) return;
                    const o = document.getElementById("password").value,
                        l = await SEA.decrypt(c, o);
                    if (void 0 === l) return void(document.getElementById("errorbox").innerHTML = "Incorrect password");
                    const n = await SEA.decrypt(g, o);
                    window.localStorage.setItem(e, o), await t(l, e, n, d)
                }
            } else await t(c, e, g, d)
        } else document.body.innerHTML = "<p>Not found</p>"
    }
}();