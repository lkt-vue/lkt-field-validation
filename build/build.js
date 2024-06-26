import { defineComponent as l, computed as d, openBlock as n, createElementBlock as o, toDisplayString as r, Fragment as u, renderList as c, createBlock as m } from "vue";
import { __ as f } from "lkt-i18n";
const i = {
  validationMessages: {
    default: {
      "ko-min-str": "",
      "ko-min-num": "",
      "ko-max-str": "",
      "ko-max-num": "",
      "ko-email": ""
    }
  }
}, _ = (s, t = "default") => {
  let e = i.validationMessages[t] && i.validationMessages[t][s] ? i.validationMessages[t][s] : "";
  return e || (e = ""), e;
}, p = { class: "lkt-field-validation-message" }, g = /* @__PURE__ */ l({
  __name: "ValidationItem",
  props: {
    code: { default: "" },
    stack: { default: "default" }
  },
  setup(s) {
    const t = s, e = d(() => {
      let a = _(t.code, t.stack);
      return a.startsWith("__:") ? f(a.substring(3)) : a;
    });
    return (a, M) => (n(), o("div", p, r(e.value), 1));
  }
}), v = { class: "lkt-field-validation-info" }, k = /* @__PURE__ */ l({
  __name: "LktFieldValidations",
  props: {
    items: { default: () => [] },
    stack: { default: "default" }
  },
  setup(s) {
    return (t, e) => (n(), o("div", v, [
      (n(!0), o(u, null, c(t.items, (a) => (n(), m(g, {
        code: a,
        stack: t.stack
      }, null, 8, ["code", "stack"]))), 256))
    ]));
  }
}), V = {
  install: (s) => {
    s.component("lkt-field-validations") === void 0 && s.component("lkt-field-validations", k);
  }
}, x = (s, t, e = "default") => {
  e || (e = "default"), i.validationMessages[e] || (i.validationMessages[e] = {}), i.validationMessages[e][s] = t;
};
export {
  V as default,
  x as setFieldValidationMessage
};
