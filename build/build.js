import { defineComponent as d, computed as u, openBlock as n, createElementBlock as o, normalizeClass as c, toDisplayString as m, ref as f, watch as p, nextTick as v, Fragment as g, renderList as k, createBlock as _, createCommentVNode as M } from "vue";
import { __ as h } from "lkt-i18n";
const i = {
  validationMessages: {
    default: {
      "ko-min-str": "",
      "ko-min-num": "",
      "ko-max-str": "",
      "ko-max-num": "",
      "ko-email": "",
      "ko-empty": ""
    }
  }
}, V = (t, a = "default") => {
  let e = i.validationMessages[a] && i.validationMessages[a][t] ? i.validationMessages[a][t] : "";
  return e || (e = ""), e;
}, y = /* @__PURE__ */ d({
  __name: "ValidationItem",
  props: {
    code: { default: "" },
    stack: { default: "default" }
  },
  setup(t) {
    const a = t, e = u(() => {
      let s = V(a.code, a.stack);
      return s.startsWith("__:") ? h(s.substring(3)) : s;
    });
    return (s, r) => (n(), o("div", {
      class: c(["lkt-field-validation-message", "code-" + s.code])
    }, m(e.value), 3));
  }
}), C = {
  key: 0,
  class: "lkt-field-validation-info"
}, F = /* @__PURE__ */ d({
  __name: "LktFieldValidations",
  props: {
    items: { default: () => [] },
    stack: { default: "default" }
  },
  setup(t) {
    const a = t, e = f(!1);
    return p(() => a.items, (s) => {
      e.value = !0, v(() => e.value = !1);
    }, { deep: !0 }), (s, r) => e.value ? M("", !0) : (n(), o("div", C, [
      (n(!0), o(g, null, k(s.items, (l) => (n(), _(y, {
        code: l,
        stack: s.stack,
        key: l
      }, null, 8, ["code", "stack"]))), 128))
    ]));
  }
}), L = {
  install: (t) => {
    t.component("lkt-field-validations") === void 0 && t.component("lkt-field-validations", F);
  }
}, S = (t, a, e = "default") => {
  e || (e = "default"), i.validationMessages[e] || (i.validationMessages[e] = {}), i.validationMessages[e][t] = a;
};
export {
  L as default,
  S as setFieldValidationMessage
};
