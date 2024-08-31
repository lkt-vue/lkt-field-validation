import { defineComponent as x, computed as l, openBlock as m, createElementBlock as p, normalizeClass as d, createBlock as f, resolveDynamicComponent as w, createCommentVNode as v, createTextVNode as g, toDisplayString as C, ref as h, watch as S, nextTick as y, Fragment as b, renderList as T } from "vue";
import { __ as q } from "lkt-i18n";
import { fill as E } from "lkt-string-tools";
const o = {
  iconSlot: "",
  validationMessages: {
    default: {
      "ko-num-between": "",
      "ko-min-str": "",
      "ko-min-num": "",
      "ko-max-str": "",
      "ko-max-num": "",
      "ko-email": "",
      "ko-empty": "",
      "ko-min-numbers": "",
      "ko-max-numbers": "",
      "ko-min-chars": "",
      "ko-max-chars": "",
      "ko-min-upper-chars": "",
      "ko-max-upper-chars": "",
      "ko-min-lower-chars": "",
      "ko-max-lower-chars": "",
      "ko-min-special-chars": "",
      "ko-max-special-chars": ""
    }
  }
}, M = (r, e = "default") => {
  let t = o.validationMessages[e] && o.validationMessages[e][r] ? o.validationMessages[e][r] : "";
  return t || (t = ""), t;
}, N = /* @__PURE__ */ x({
  __name: "ValidationItem",
  props: {
    validation: {},
    stack: { default: "default" }
  },
  setup(r) {
    const e = r, t = l(() => {
      let s = M(e.validation.code, e.stack), i = {
        min: e.validation.min,
        max: e.validation.max,
        value: e.validation.equalToValue
      }, k = M(e.validation.status + "-" + e.validation.code, e.stack);
      return k && (s = k), s ? s.startsWith("__:") ? q(s.substring(3), i) : E(s, i, ":", "") : e.validation.code;
    }), c = l(() => o.iconSlot !== ""), u = l(() => o.iconSlot), n = l(() => {
      let s = [];
      return s.push("code-" + e.validation.code), s.push("is-" + e.validation.status), s.join(" ");
    });
    return (s, i) => (m(), p("div", {
      class: d(["lkt-field-validation-message", n.value])
    }, [
      c.value ? (m(), f(w(u.value), { key: 0 })) : v("", !0),
      g(" " + C(t.value), 1)
    ], 2));
  }
});
class a {
  constructor(e, t) {
    this.code = "", this.status = "info", this.min = 0, this.max = 0, this.equalToValue = void 0, this.code = e, this.status = t;
  }
  setMin(e) {
    return this.min = e, this;
  }
  setMax(e) {
    return this.max = e, this;
  }
  setEqualToValue(e) {
    return this.equalToValue = e, this;
  }
  static createEmpty(e = "ko") {
    return new a("empty", e);
  }
  static createEmail(e = "ko") {
    return new a("email", e);
  }
  static createMinStr(e, t = "ko") {
    return new a("min-str", t).setMin(e);
  }
  static createMaxStr(e, t = "ko") {
    return new a("max-str", t).setMax(e);
  }
  static createMinNum(e, t = "ko") {
    return new a("min-num", t).setMin(e);
  }
  static createMaxNum(e, t = "ko") {
    return new a("max-num", t).setMax(e);
  }
  static createNumBetween(e, t, c = "ko") {
    return new a("max-num", c).setMin(e).setMax(t);
  }
  static createMinNumbers(e, t = "ko") {
    return new a("min-numbers", t).setMin(e);
  }
  static createMaxNumbers(e, t = "ko") {
    return new a("max-numbers", t).setMax(e);
  }
  static createMinUpperChars(e, t = "ko") {
    return new a("min-upper-chars", t).setMin(e);
  }
  static createMaxUpperChars(e, t = "ko") {
    return new a("max-upper-chars", t).setMax(e);
  }
  static createMinLowerChars(e, t = "ko") {
    return new a("min-lower-chars", t).setMin(e);
  }
  static createMaxLowerChars(e, t = "ko") {
    return new a("max-lower-chars", t).setMax(e);
  }
  static createMinSpecialChars(e, t = "ko") {
    return new a("min-special-chars", t).setMin(e);
  }
  static createMaxSpecialChars(e, t = "ko") {
    return new a("max-special-chars", t).setMax(e);
  }
  static createMinChars(e, t = "ko") {
    return new a("min-chars", t).setMin(e);
  }
  static createMaxChars(e, t = "ko") {
    return new a("max-chars", t).setMax(e);
  }
  static createEqualTo(e, t = "ko") {
    return new a("equal-to", t).setEqualToValue(e);
  }
}
const I = {
  key: 0,
  class: "lkt-field-validation-info"
}, L = /* @__PURE__ */ x({
  __name: "LktFieldValidations",
  props: {
    items: { default: () => [] },
    stack: { default: "default" },
    min: { default: 0 },
    max: { default: 0 }
  },
  setup(r) {
    const e = r, t = h([]), c = () => {
      let n = [];
      return e.items.forEach((s) => {
        if (typeof s == "string") {
          let i = new a(s.replace("ko-", ""), "ko").setMin(e.min).setMax(e.max);
          n.push(i);
        } else
          n.push(s);
      }), t.value = n, n;
    };
    c();
    const u = h(!1);
    return S(() => e.items, (n) => {
      u.value = !0, c(), y(() => u.value = !1);
    }, { deep: !0 }), (n, s) => u.value ? v("", !0) : (m(), p("div", I, [
      (m(!0), p(b, null, T(t.value, (i) => (m(), f(N, {
        validation: i,
        stack: n.stack,
        key: i.code
      }, null, 8, ["validation", "stack"]))), 128))
    ]));
  }
}), j = {
  install: (r) => {
    r.component("lkt-field-validations") === void 0 && r.component("lkt-field-validations", L);
  }
}, z = (r, e, t = "default") => {
  t || (t = "default"), o.validationMessages[t] || (o.validationMessages[t] = {}), o.validationMessages[t][r] = e;
}, W = (r) => (o.iconSlot = r, !0);
export {
  a as FieldValidation,
  j as default,
  W as setFieldValidationIconSlot,
  z as setFieldValidationMessage
};
