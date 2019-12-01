! function (e) {
  function i(n) {
    if (t[n]) return t[n].exports;
    var a = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(a.exports, a, a.exports, i), a.l = !0, a.exports
  }
  var t = {};
  i.m = e, i.c = t, i.i = function (e) {
    return e
  }, i.d = function (e, t, n) {
    i.o(e, t) || Object.defineProperty(e, t, {
      configurable: !1,
      enumerable: !0,
      get: n
    })
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return i.d(t, "a", t), t
  }, i.o = function (e, i) {
    return Object.prototype.hasOwnProperty.call(e, i)
  }, i.p = "", i(i.s = 0)
}([function (e, i) {
  (() => {
    function e(e) {
      if (void 0 === e || null === e) return;
      let i = null,
        t = null;
      "object" == typeof e ? (i = e.url, t = e.loaded) : "string" == typeof e && (i = e);
      let n = document.createElement("link");
      n.rel = "stylesheet", n.type = "text/css", n.href = i, n.media = "all", n.onload = (() => {
        t && t()
      }), document.head.appendChild(n)
    }

    function i(e, t) {
      if (0 === e.length) return void (t && t());
      let n = e.shift(),
        a = document.createElement("script"),
        o = null,
        l = null,
        r = null;
      "object" == typeof n ? (({
        url: o,
        shouldSkip: l,
        loaded: r
      } = n), l() ? (r && r(), i(e, t)) : a.onload = (() => {
        r && r(), i(e, t)
      })) : "string" == typeof n && (o = n, a.onload = (() => {
        i(e, t)
      })), a.src = o, document.head.appendChild(a)
    }

    function t(e) {
      this.message = e, this.toString = (() => this.message)
    }

    function n() {
      // e(`https://unpkg.com/wildfire/dist/${o}/static/wildfire.css`);
      let t = [];
      window.Vue || t.push("https://zsdycs.cn/js/vue.js"), t.push("firebase" === o ?
        "https://zsdycs.cn/js/firebase.js" : "https://zsdycs.cn/js/wilddog.js"), t
          .push(`/js/wildfire.min.js`), i(t, () => {
            window.wildfire.default.install(window.Vue, {
              databaseProvider: o,
              databaseConfig: l,
              pageURL: d,
              pageTitle: r,
              theme: f,
              locale: s,
              defaultAvatarURL: c
            }), new window.Vue({
              el: "#wildfire"
            })
          })
    }

    function a(e) {
      const i = window._i18n.t(e);
      let t = document.getElementById("wf-loading-modal");
      t.className = `wf wf-theme-${f}`;
      let n = t.children[1];
      n.innerHTML = i, n.style.color = "red"
    }
    const {
      databaseProvider: o,
      databaseConfig: l,
      pageTitle: r = document.title,
      pageURL: d = window.location.href,
      locale: s = "en",
      theme: f = "light",
      defaultAvatarURL: c = "https://zsdycs.cn/images/sun.svg"
    } = window.wildfireConfig();
    window._i18n = new function (e = {}, i = null, n = "en") {
      return this.translation = e, this.locale = n, this.fallback = i, this.t = (e => {
        let i = this.translation[this.locale];
        if (i || (i = this.translation[this.fallback]), !i) throw new t(
          `Translation for locale "${this.locale}" not found.`);
        const n = e.split(".");
        if (0 === n.length) throw new t("Empty translation key.");
        for (let a = 0; a < n.length; a++)
          if (!(i = i[n[a]])) return setTimeout(() => {
            throw new t(`Translation for key "${e}" not found.`)
          }), e;
        return i
      }), {
          t: this.t
        }
    }({
      en: {
        error: {
          invalidDatabaseProvider: 'Please check your config: "databaseProvider" should be "firebase" or "wilddog".',
          multipleWildfireThread: '"wildfire-thread" not found, please follow the steps in documentation.',
          noDatabaseConfig: 'Please check your config: missing "databaseConfig"'
        },
        text: {
          poweringWildfire: "Powering Wildfire..."
        }
      },
      "zh-CN": {
        error: {
          invalidDatabaseProvider: '请检查你的配置： "databaseProvider" 应该为 "firebase" 或者 "wilddog"。',
          multipleWildfireThread: "未检测到 “wildfire-thread”，请依照文档所示步骤添加。",
          noDatabaseConfig: '请检查你的配置： 找不到 "databaseConfig"'
        },
        text: {
          poweringWildfire: "正在启动野火……"
        }
      }
    }, "en", s),
      function () {
        const e =
          `.wildfire_thread{font-family:'Helvetica Neue',arial,sans-serif;width: 100%;margin:0 auto}[v-cloak]{display:none}#wf-loading-modal{font-size:12px;display:flex;flex-direction:column;height:300px;color:#656c7a;justify-content:center;align-items:center}#wf-loading-modal img{width:66px;height:66px}@keyframes flickerAnimation{0%{opacity:1}40%{opacity:0}100%{opacity:1}}@-o-keyframes flickerAnimation{0%{opacity:1}40%{opacity:0}100%{opacity:1}}@-moz-keyframes flickerAnimation{0%{opacity:1}40%{opacity:0}100%{opacity:1}}@-webkit-keyframes flickerAnimation{0%{opacity:1}40%{opacity:0}100%{opacity:1}}.animate-flicker{-webkit-animation:flickerAnimation 1.5s infinite;-moz-animation:flickerAnimation 1.5s infinite;-o-animation:flickerAnimation 1.5s infinite;animation:flickerAnimation 1.5s infinite}`;
        let i = document.createElement("style");
        i.type = "text/css", i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e)),
          document.head.appendChild(i), document.getElementsByClassName("wildfire_thread")[0].innerHTML =
          `\n      <div id="wf-loading-modal" class="wf wf-theme-${f} animate-flicker">\n        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M389.699 251.826s-13.403 19.689-41.493 36.356c0 0 20.344-171.938-112.212-201.8 33.962 124.643-43.199 159.794-71.326 93.943-46.971 62.713-11.307 117.427-11.307 117.427-19.26 2.775-35.439-18.267-35.439-18.267-.145 2.592-.225 5.202-.225 7.83 0 76.383 61.921 138.303 138.303 138.303s138.303-61.921 138.303-138.303c0-12.27-1.605-24.163-4.604-35.489z' fill='%23f36b38'/%3E%3Cpath d='M389.699 251.826s-13.403 19.689-41.493 36.356c0 0 18.22-154.012-92.206-195.825v333.261c76.383 0 138.303-61.921 138.303-138.303 0-12.27-1.605-24.163-4.604-35.489z' fill='%23db450d'/%3E%3Cpath d='M316.654 364.964c0 33.498-27.156 60.654-60.654 60.654s-60.654-27.156-60.654-60.654c0-17.93 7.78-34.042 20.147-45.146 23.451 31.86 56.87-16.469 30.826-51.761 0-.001 70.335 8.813 70.335 96.907z' fill='%23fbda35'/%3E%3Cpath d='M256 270.385v155.232c33.498 0 60.654-27.156 60.654-60.654 0-67.563-41.371-88.492-60.654-94.578z' fill='%23f7ba35'/%3E%3C/svg%3E%0A" alt="Wildfire - Provided by Lahk">\n        <span>${window._i18n.t("text.poweringWildfire")}</span>\n      </div>\n      <div id="wildfire" v-cloak><wildfire></wildfire></div>\n      `
      }(), setTimeout(function () {
        0 !== document.getElementsByClassName("wildfire_thread").length ? "firebase" === o || "wilddog" === o ? l ? n() :
          a("error.noDatabaseConfig") : a("error.invalidDatabaseProvider") : a("error.wildfireThreadNotFound")
      }, 1e3)
  })()
}]);
