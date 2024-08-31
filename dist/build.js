import { defineComponent as v, computed as u, openBlock as l, createElementBlock as d, normalizeClass as g, createBlock as h, resolveDynamicComponent as M, createCommentVNode as x, createTextVNode as _, toDisplayString as S, ref as p, watch as w, nextTick as y, Fragment as C, renderList as V } from "vue";
import { __ as I } from "lkt-i18n";
import { fill as b } from "lkt-string-tools";
const n = {
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
}, k = (s, e = "default") => {
  let t = n.validationMessages[e] && n.validationMessages[e][s] ? n.validationMessages[e][s] : "";
  return t || (t = ""), t;
}, F = /* @__PURE__ */ v({
  __name: "ValidationItem",
  props: {
    validation: {},
    stack: { default: "default" }
  },
  setup(s) {
    const e = s, t = u(() => {
      let a = k(e.validation.code, e.stack), o = {
        min: e.validation.min,
        max: e.validation.max
      }, f = k(e.validation.status + "-" + e.validation.code, e.stack);
      return f && (a = f), a ? a.startsWith("__:") ? I(a.substring(3), o) : b(a, o, ":", "") : e.validation.code;
    }), c = u(() => n.iconSlot !== ""), r = u(() => n.iconSlot), i = u(() => {
      let a = [];
      return a.push("code-" + e.validation.code), a.push("is-" + e.validation.status), a.join(" ");
    });
    return (a, o) => (l(), d("div", {
      class: g(["lkt-field-validation-message", i.value])
    }, [
      c.value ? (l(), h(M(r.value), { key: 0 })) : x("", !0),
      _(" " + S(t.value), 1)
    ], 2));
  }
});
class m {
  constructor(e, t) {
    this.code = "", this.status = "info", this.min = 0, this.max = 0, this.code = e, this.status = t;
  }
  setMin(e) {
    return this.min = e, this;
  }
  setMax(e) {
    return this.max = e, this;
  }
  static createMinStr(e, t = "ko") {
    return new m("min-str", t).setMin(e);
  }
  static createMaxStr(e, t = "ko") {
    return new m("max-str", t).setMax(e);
  }
}
const B = {
  key: 0,
  class: "lkt-field-validation-info"
}, L = /* @__PURE__ */ v({
  __name: "LktFieldValidations",
  props: {
    items: { default: () => [] },
    stack: { default: "default" },
    min: { default: 0 },
    max: { default: 0 }
  },
  setup(s) {
    const e = s, t = p([]), c = () => {
      let i = [];
      return e.items.forEach((a) => {
        if (typeof a == "string") {
          let o = new m(a.replace("ko-", ""), "ko").setMin(e.min).setMax(e.max);
          i.push(o);
        } else
          i.push(a);
      }), t.value = i, i;
    };
    c();
    const r = p(!1);
    return w(() => e.items, (i) => {
      r.value = !0, c(), y(() => r.value = !1);
    }, { deep: !0 }), (i, a) => r.value ? x("", !0) : (l(), d("div", B, [
      (l(!0), d(C, null, V(t.value, (o) => (l(), h(F, {
        validation: o,
        stack: i.stack,
        key: o.code
      }, null, 8, ["validation", "stack"]))), 128))
    ]));
  }
}), T = {
  install: (s) => {
    s.component("lkt-field-validations") === void 0 && s.component("lkt-field-validations", L);
  }
}, j = (s, e, t = "default") => {
  t || (t = "default"), n.validationMessages[t] || (n.validationMessages[t] = {}), n.validationMessages[t][s] = e;
}, z = (s) => (n.iconSlot = s, !0);
export {
  T as default,
  z as setFieldValidationIconSlot,
  j as setFieldValidationMessage
};
