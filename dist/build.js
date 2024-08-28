import { defineComponent as u, computed as r, openBlock as s, createElementBlock as d, normalizeClass as p, createBlock as c, resolveDynamicComponent as v, createCommentVNode as f, createTextVNode as k, toDisplayString as g, ref as _, watch as M, nextTick as x, Fragment as S, renderList as h } from "vue";
import { __ as V } from "lkt-i18n";
import { fill as y } from "lkt-string-tools";
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
      "ko-empty": ""
    }
  }
}, C = (t, a = "default") => {
  let e = n.validationMessages[a] && n.validationMessages[a][t] ? n.validationMessages[a][t] : "";
  return e || (e = ""), e;
}, F = /* @__PURE__ */ u({
  __name: "ValidationItem",
  props: {
    code: { default: "" },
    stack: { default: "default" },
    min: { default: 0 },
    max: { default: 0 }
  },
  setup(t) {
    const a = t, e = r(() => {
      let o = C(a.code, a.stack), l = {
        min: a.min,
        max: a.max
      };
      return o.startsWith("__:") ? V(o.substring(3), l) : y(o, l, ":", "");
    }), i = r(() => n.iconSlot !== ""), m = r(() => n.iconSlot);
    return (o, l) => (s(), d("div", {
      class: p(["lkt-field-validation-message", "code-" + o.code])
    }, [
      i.value ? (s(), c(v(m.value), { key: 0 })) : f("", !0),
      k(" " + g(e.value), 1)
    ], 2));
  }
}), B = {
  key: 0,
  class: "lkt-field-validation-info"
}, I = /* @__PURE__ */ u({
  __name: "LktFieldValidations",
  props: {
    items: { default: () => [] },
    stack: { default: "default" },
    min: { default: 0 },
    max: { default: 0 }
  },
  setup(t) {
    const a = t, e = _(!1);
    return M(() => a.items, (i) => {
      e.value = !0, x(() => e.value = !1);
    }, { deep: !0 }), (i, m) => e.value ? f("", !0) : (s(), d("div", B, [
      (s(!0), d(S, null, h(i.items, (o) => (s(), c(F, {
        code: o,
        stack: i.stack,
        key: o,
        min: i.min,
        max: i.max
      }, null, 8, ["code", "stack", "min", "max"]))), 128))
    ]));
  }
}), D = {
  install: (t) => {
    t.component("lkt-field-validations") === void 0 && t.component("lkt-field-validations", I);
  }
}, N = (t, a, e = "default") => {
  e || (e = "default"), n.validationMessages[e] || (n.validationMessages[e] = {}), n.validationMessages[e][t] = a;
}, T = (t) => (n.iconSlot = t, !0);
export {
  D as default,
  T as setFieldValidationIconSlot,
  N as setFieldValidationMessage
};
