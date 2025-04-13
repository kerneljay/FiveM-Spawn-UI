var ce = Object.defineProperty
var ue = (e, t, n) =>
  t in e
    ? ce(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n)
var B = (e, t, n) => ue(e, typeof t != "symbol" ? t + "" : t, n)
;(function () {
  const t = document.createElement("link").relList
  if (t && t.supports && t.supports("modulepreload")) return
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s)
  new MutationObserver((s) => {
    for (const r of s)
      if (r.type === "childList")
        for (const p of r.addedNodes)
          p.tagName === "LINK" && p.rel === "modulepreload" && i(p)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(s) {
    const r = {}
    return (
      s.integrity && (r.integrity = s.integrity),
      s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    )
  }
  function i(s) {
    if (s.ep) return
    s.ep = !0
    const r = n(s)
    fetch(s.href, r)
  }
})()
function F() {}
function se(e) {
  return e()
}
function X() {
  return Object.create(null)
}
function j(e) {
  e.forEach(se)
}
function re(e) {
  return typeof e == "function"
}
function ae(e, t) {
  return e != e
    ? t == t
    : e !== t || (e && typeof e == "object") || typeof e == "function"
}
function fe(e) {
  return Object.keys(e).length === 0
}
function l(e, t) {
  e.appendChild(t)
}
function oe(e, t, n) {
  e.insertBefore(t, n || null)
}
function R(e) {
  e.parentNode && e.parentNode.removeChild(e)
}
function de(e, t) {
  for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t)
}
function m(e) {
  return document.createElement(e)
}
function N(e) {
  return document.createTextNode(e)
}
function k() {
  return N(" ")
}
function T(e, t, n, i) {
  return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i)
}
function d(e, t, n) {
  n == null
    ? e.removeAttribute(t)
    : e.getAttribute(t) !== n && e.setAttribute(t, n)
}
function pe(e) {
  return Array.from(e.childNodes)
}
function Y(e, t) {
  ;(t = "" + t), e.data !== t && (e.data = t)
}
let q
function A(e) {
  q = e
}
const x = [],
  Z = []
let S = []
const ee = [],
  me = Promise.resolve()
let W = !1
function he() {
  W || ((W = !0), me.then(le))
}
function H(e) {
  S.push(e)
}
const V = new Set()
let L = 0
function le() {
  if (L !== 0) return
  const e = q
  do {
    try {
      for (; L < x.length; ) {
        const t = x[L]
        L++, A(t), ge(t.$$)
      }
    } catch (t) {
      throw ((x.length = 0), (L = 0), t)
    }
    for (A(null), x.length = 0, L = 0; Z.length; ) Z.pop()()
    for (let t = 0; t < S.length; t += 1) {
      const n = S[t]
      V.has(n) || (V.add(n), n())
    }
    S.length = 0
  } while (x.length)
  for (; ee.length; ) ee.pop()()
  ;(W = !1), V.clear(), A(e)
}
function ge(e) {
  if (e.fragment !== null) {
    e.update(), j(e.before_update)
    const t = e.dirty
    ;(e.dirty = [-1]),
      e.fragment && e.fragment.p(e.ctx, t),
      e.after_update.forEach(H)
  }
}
function _e(e) {
  const t = [],
    n = []
  S.forEach((i) => (e.indexOf(i) === -1 ? t.push(i) : n.push(i))),
    n.forEach((i) => i()),
    (S = t)
}
const ye = new Set()
function ve(e, t) {
  e && e.i && (ye.delete(e), e.i(t))
}
function te(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e)
}
function we(e, t, n) {
  const { fragment: i, after_update: s } = e.$$
  i && i.m(t, n),
    H(() => {
      const r = e.$$.on_mount.map(se).filter(re)
      e.$$.on_destroy ? e.$$.on_destroy.push(...r) : j(r), (e.$$.on_mount = [])
    }),
    s.forEach(H)
}
function be(e, t) {
  const n = e.$$
  n.fragment !== null &&
    (_e(n.after_update),
    j(n.on_destroy),
    n.fragment && n.fragment.d(t),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []))
}
function $e(e, t) {
  e.$$.dirty[0] === -1 && (x.push(e), he(), e.$$.dirty.fill(0)),
    (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31)
}
function ke(e, t, n, i, s, r, p = null, v = [-1]) {
  const f = q
  A(e)
  const o = (e.$$ = {
    fragment: null,
    ctx: [],
    props: r,
    update: F,
    not_equal: s,
    bound: X(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (f ? f.$$.context : [])),
    callbacks: X(),
    dirty: v,
    skip_bound: !1,
    root: t.target || f.$$.root,
  })
  p && p(o.root)
  let g = !1
  if (
    ((o.ctx = n
      ? n(e, t.props || {}, (h, _, ...E) => {
          const y = E.length ? E[0] : _
          return (
            o.ctx &&
              s(o.ctx[h], (o.ctx[h] = y)) &&
              (!o.skip_bound && o.bound[h] && o.bound[h](y), g && $e(e, h)),
            _
          )
        })
      : []),
    o.update(),
    (g = !0),
    j(o.before_update),
    (o.fragment = i ? i(o.ctx) : !1),
    t.target)
  ) {
    if (t.hydrate) {
      const h = pe(t.target)
      o.fragment && o.fragment.l(h), h.forEach(R)
    } else o.fragment && o.fragment.c()
    t.intro && ve(e.$$.fragment), we(e, t.target, t.anchor), le()
  }
  A(f)
}
class Le {
  constructor() {
    B(this, "$$")
    B(this, "$$set")
  }
  $destroy() {
    be(this, 1), (this.$destroy = F)
  }
  $on(t, n) {
    if (!re(n)) return F
    const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = [])
    return (
      i.push(n),
      () => {
        const s = i.indexOf(n)
        s !== -1 && i.splice(s, 1)
      }
    )
  }
  $set(t) {
    this.$$set &&
      !fe(t) &&
      ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1))
  }
}
const xe = "4"
typeof window < "u" &&
  (window.__svelte || (window.__svelte = { v: new Set() })).v.add(xe)
function ne(e, t, n) {
  const i = e.slice()
  return (i[6] = t[n]), i
}
function ie(e) {
  let t, n
  return {
    c() {
      ;(t = m("div")),
        d(t, "class", "spawn_ui_image svelte-1emrk3u"),
        d(
          t,
          "style",
          (n =
            "background-image: url('" +
            e[6].image +
            "'); " +
            (e[6] === e[0][2] ? "" : "filter: brightness(0.85); opacity: 0.3;"))
        )
    },
    m(i, s) {
      oe(i, t, s)
    },
    p(i, s) {
      s & 1 &&
        n !==
          (n =
            "background-image: url('" +
            i[6].image +
            "'); " +
            (i[6] === i[0][2]
              ? ""
              : "filter: brightness(0.85); opacity: 0.3;")) &&
        d(t, "style", n)
    },
    d(i) {
      i && R(t)
    },
  }
}
function Se(e) {
  let t,
    n,
    i,
    s,
    r,
    p,
    v,
    f,
    o = e[0][2].name + "",
    g,
    h,
    _,
    E,
    y,
    D,
    z = e[0][2].price + "",
    I,
    G,
    w,
    P,
    J,
    O,
    K,
    C,
    M,
    U,
    b = te(e[0]),
    a = []
  for (let c = 0; c < b.length; c += 1) a[c] = ie(ne(e, b, c))
  return {
    c() {
      ;(t = m("main")), (n = m("div")), (i = m("div"))
      for (let c = 0; c < a.length; c += 1) a[c].c()
      ;(s = k()),
        (r = m("div")),
        (p = m("h1")),
        (p.textContent = "Select Spawn Location"),
        (v = k()),
        (f = m("h1")),
        (g = N(o)),
        (h = k()),
        (_ = m("h1")),
        (E = N("Respawn Fee: ")),
        (y = m("span")),
        (D = N("£")),
        (I = N(z)),
        (G = k()),
        (w = m("div")),
        (P = m("div")),
        (P.innerHTML =
          '<img src="./assets/arrow.png" alt="Previous" class="svelte-1emrk3u"/>'),
        (J = k()),
        (O = m("div")),
        (O.innerHTML =
          '<img src="./assets/arrow.png" alt="Next" class="svelte-1emrk3u"/>'),
        (K = k()),
        (C = m("h1")),
        (C.textContent = "Spawn"),
        d(i, "class", "spawn_ui_images svelte-1emrk3u"),
        d(n, "class", "spawn_ui_options svelte-1emrk3u"),
        d(p, "class", " svelte-1emrk3u"),
        d(f, "class", "location_name svelte-1emrk3u"),
        d(_, "class", " svelte-1emrk3u"),
        d(P, "class", "spawn_ui_arrow svelte-1emrk3u"),
        d(O, "class", "spawn_ui_arrow svelte-1emrk3u"),
        d(w, "class", "spawn_ui_arrows svelte-1emrk3u"),
        d(C, "class", "location_spawn_button svelte-1emrk3u"),
        d(r, "class", "spawn_location_info svelte-1emrk3u"),
        d(t, "class", "spawn_ui_container svelte-1emrk3u")
    },
    m(c, $) {
      oe(c, t, $), l(t, n), l(n, i)
      for (let u = 0; u < a.length; u += 1) a[u] && a[u].m(i, null)
      l(t, s),
        l(t, r),
        l(r, p),
        l(r, v),
        l(r, f),
        l(f, g),
        l(r, h),
        l(r, _),
        l(_, E),
        l(_, y),
        l(y, D),
        l(y, I),
        l(r, G),
        l(r, w),
        l(w, P),
        l(w, J),
        l(w, O),
        l(r, K),
        l(r, C),
        M ||
          ((U = [T(P, "click", e[2]), T(O, "click", e[1]), T(C, "click", Pe)]),
          (M = !0))
    },
    p(c, [$]) {
      if ($ & 1) {
        b = te(c[0])
        let u
        for (u = 0; u < b.length; u += 1) {
          const Q = ne(c, b, u)
          a[u] ? a[u].p(Q, $) : ((a[u] = ie(Q)), a[u].c(), a[u].m(i, null))
        }
        for (; u < a.length; u += 1) a[u].d(1)
        a.length = b.length
      }
      $ & 1 && o !== (o = c[0][2].name + "") && Y(g, o),
        $ & 1 && z !== (z = c[0][2].price + "") && Y(I, z)
    },
    i: F,
    o: F,
    d(c) {
      c && R(t), de(a, c), (M = !1), j(U)
    },
  }
}
const Ee = 5
function Pe() {
  console.log("Spawn button clicked!")
}
function Oe(e, t, n) {
  let i = [
      {
        name: "Sandy Shores",
        image: "https://i.imgur.com/0CnFPWc.png",
        coords: { x: 123, y: 456, z: 789 },
        price: "2000",
        permissions: {},
      },
      {
        name: "St Thomas",
        image: "https://i.imgur.com/0CnFPWc.png",
        coords: { x: 223, y: 556, z: 889 },
        price: "3000",
        permissions: {},
      },
      {
        name: "Paleto Bay",
        image: "https://i.imgur.com/0CnFPWc.png",
        coords: { x: 323, y: 656, z: 989 },
        price: "2500",
        permissions: {},
      },
      {
        name: "London Hospital",
        image: "https://i.imgur.com/0CnFPWc.png",
        coords: { x: 423, y: 756, z: 1089 },
        price: "3500",
        permissions: {},
      },
      {
        name: "Mission Row Police Station",
        image: "https://i.postimg.cc/6w7LyyGD/JVjOlF2.png",
        coords: { x: 523, y: 856, z: 1189 },
        price: "4000",
        permissions: { perms: "police.menu" },
      },
    ],
    s = 0,
    r = f()
  function p() {
    ;(s = (s + 1) % i.length), n(0, (r = f()))
  }
  function v() {
    ;(s = (s - 1 + i.length) % i.length), n(0, (r = f()))
  }
  window.addEventListener("message", function (o) {
    o.data.type === "updateLocations" && o.data.locations &&
      ((i = o.data.locations),
      n(0, (r = f())),
      (document.querySelector(".spawn_ui_container").style.display = "flex"), console.log("Received nui message"))
  })
  function f() {
    return Array.from({ length: Ee }, (o, g) => i[(s + g) % i.length])
  }
  return [r, p, v]
}
class Ce extends Le {
  constructor(t) {
    super(), ke(this, t, Oe, Se, ae, {})
  }
}
new Ce({ target: document.getElementById("app") })
