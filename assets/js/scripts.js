!(function () {
    for (var e = document.querySelectorAll("h1[id],h2[id],h3[id],h4[id],h5[id],h6[id]"), t = 0; t < e.length; t++) {
        var i = document.createElement("img");
        i.setAttribute("src", "https://e-labinnovations.github.io/assets/img/link-symbol.svg");
        var r = document.createElement("a");
        r.setAttribute("href", "#" + e[t].getAttribute("id")), r.classList.add("anchor"), r.appendChild(i), e[t].insertBefore(r, e[t].firstChild);
    }
})();
var Zepto = (function () {
    function u(t) {
        return null == t ? String(t) : q[z.call(t)] || "object";
    }
    function a(t) {
        return "function" == u(t);
    }
    function o(t) {
        return null != t && t == t.window;
    }
    function s(t) {
        return null != t && t.nodeType == t.DOCUMENT_NODE;
    }
    function r(t) {
        return "object" == u(t);
    }
    function c(t) {
        return r(t) && !o(t) && Object.getPrototypeOf(t) == Object.prototype;
    }
    function l(t) {
        return "number" == typeof t.length;
    }
    function h(t) {
        return t
            .replace(/::/g, "/")
            .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
            .replace(/([a-z\d])([A-Z])/g, "$1_$2")
            .replace(/_/g, "-")
            .toLowerCase();
    }
    function n(t) {
        return t in e ? e[t] : (e[t] = new RegExp("(^|\\s)" + t + "(\\s|$)"));
    }
    function f(t, e) {
        return "number" != typeof e || U[h(t)] ? e : e + "px";
    }
    function i(t) {
        return "children" in t
            ? N.call(t.children)
            : b.map(t.childNodes, function (t) {
                  return 1 == t.nodeType ? t : void 0;
              });
    }
    function p(t, e) {
        return null == e ? b(t) : b(t).filter(e);
    }
    function d(t, e, n, i) {
        return a(e) ? e.call(t, n, i) : e;
    }
    function m(t, e, n) {
        null == n ? t.removeAttribute(e) : t.setAttribute(e, n);
    }
    function v(t, e) {
        var n = t.className || "",
            i = n && n.baseVal !== y;
        return e === y ? (i ? n.baseVal : n) : void (i ? (n.baseVal = e) : (t.className = e));
    }
    function g(e) {
        try {
            return e ? "true" == e || ("false" != e && ("null" == e ? null : +e + "" == e ? +e : /^[\[\{]/.test(e) ? b.parseJSON(e) : e)) : e;
        } catch (t) {
            return e;
        }
    }
    var y,
        x,
        b,
        w,
        L,
        E,
        j = [],
        N = j.slice,
        S = j.filter,
        C = window.document,
        T = {},
        e = {},
        U = { "column-count": 1, columns: 1, "font-weight": 1, "line-height": 1, opacity: 1, "z-index": 1, zoom: 1 },
        O = /^\s*<(\w+|!)[^>]*>/,
        P = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Z = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        M = /^(?:body|html)$/i,
        A = /([A-Z])/g,
        $ = ["val", "css", "html", "text", "data", "width", "height", "offset"],
        t = C.createElement("table"),
        D = C.createElement("tr"),
        k = { tr: C.createElement("tbody"), tbody: t, thead: t, tfoot: t, td: D, th: D, "*": C.createElement("div") },
        _ = /complete|loaded|interactive/,
        R = /^[\w-]*$/,
        q = {},
        z = q.toString,
        F = {},
        H = C.createElement("div"),
        V = {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable",
        },
        J =
            Array.isArray ||
            function (t) {
                return t instanceof Array;
            };
    return (
        (F.matches = function (t, e) {
            if (!e || !t || 1 !== t.nodeType) return !1;
            var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
            if (n) return n.call(t, e);
            var i,
                r = t.parentNode,
                o = !r;
            return o && (r = H).appendChild(t), (i = ~F.qsa(r, e).indexOf(t)), o && H.removeChild(t), i;
        }),
        (L = function (t) {
            return t.replace(/-+(.)?/g, function (t, e) {
                return e ? e.toUpperCase() : "";
            });
        }),
        (E = function (n) {
            return S.call(n, function (t, e) {
                return n.indexOf(t) == e;
            });
        }),
        (F.fragment = function (t, e, n) {
            var i, r, o;
            return (
                P.test(t) && (i = b(C.createElement(RegExp.$1))),
                i ||
                    (t.replace && (t = t.replace(Z, "<$1></$2>")),
                    e === y && (e = O.test(t) && RegExp.$1),
                    e in k || (e = "*"),
                    ((o = k[e]).innerHTML = "" + t),
                    (i = b.each(N.call(o.childNodes), function () {
                        o.removeChild(this);
                    }))),
                c(n) &&
                    ((r = b(i)),
                    b.each(n, function (t, e) {
                        -1 < $.indexOf(t) ? r[t](e) : r.attr(t, e);
                    })),
                i
            );
        }),
        (F.Z = function (t, e) {
            return ((t = t || []).__proto__ = b.fn), (t.selector = e || ""), t;
        }),
        (F.isZ = function (t) {
            return t instanceof F.Z;
        }),
        (F.init = function (t, e) {
            var n, i;
            if (!t) return F.Z();
            if ("string" == typeof t)
                if ("<" == (t = t.trim())[0] && O.test(t)) (n = F.fragment(t, RegExp.$1, e)), (t = null);
                else {
                    if (e !== y) return b(e).find(t);
                    n = F.qsa(C, t);
                }
            else {
                if (a(t)) return b(C).ready(t);
                if (F.isZ(t)) return t;
                if (J(t))
                    (i = t),
                        (n = S.call(i, function (t) {
                            return null != t;
                        }));
                else if (r(t)) (n = [t]), (t = null);
                else if (O.test(t)) (n = F.fragment(t.trim(), RegExp.$1, e)), (t = null);
                else {
                    if (e !== y) return b(e).find(t);
                    n = F.qsa(C, t);
                }
            }
            return F.Z(n, t);
        }),
        ((b = function (t, e) {
            return F.init(t, e);
        }).extend = function (e) {
            var n,
                t = N.call(arguments, 1);
            return (
                "boolean" == typeof e && ((n = e), (e = t.shift())),
                t.forEach(function (t) {
                    !(function t(e, n, i) {
                        for (x in n) i && (c(n[x]) || J(n[x])) ? (c(n[x]) && !c(e[x]) && (e[x] = {}), J(n[x]) && !J(e[x]) && (e[x] = []), t(e[x], n[x], i)) : n[x] !== y && (e[x] = n[x]);
                    })(e, t, n);
                }),
                e
            );
        }),
        (F.qsa = function (t, e) {
            var n,
                i = "#" == e[0],
                r = !i && "." == e[0],
                o = i || r ? e.slice(1) : e,
                a = R.test(o);
            return s(t) && a && i ? ((n = t.getElementById(o)) ? [n] : []) : 1 !== t.nodeType && 9 !== t.nodeType ? [] : N.call(a && !i ? (r ? t.getElementsByClassName(o) : t.getElementsByTagName(e)) : t.querySelectorAll(e));
        }),
        (b.contains = C.documentElement.contains
            ? function (t, e) {
                  return t !== e && t.contains(e);
              }
            : function (t, e) {
                  for (; e && (e = e.parentNode); ) if (e === t) return !0;
                  return !1;
              }),
        (b.type = u),
        (b.isFunction = a),
        (b.isWindow = o),
        (b.isArray = J),
        (b.isPlainObject = c),
        (b.isEmptyObject = function (t) {
            var e;
            for (e in t) return !1;
            return !0;
        }),
        (b.inArray = function (t, e, n) {
            return j.indexOf.call(e, t, n);
        }),
        (b.camelCase = L),
        (b.trim = function (t) {
            return null == t ? "" : String.prototype.trim.call(t);
        }),
        (b.uuid = 0),
        (b.support = {}),
        (b.expr = {}),
        (b.map = function (t, e) {
            var n,
                i,
                r,
                o,
                a = [];
            if (l(t)) for (i = 0; i < t.length; i++) null != (n = e(t[i], i)) && a.push(n);
            else for (r in t) null != (n = e(t[r], r)) && a.push(n);
            return 0 < (o = a).length ? b.fn.concat.apply([], o) : o;
        }),
        (b.each = function (t, e) {
            var n, i;
            if (l(t)) {
                for (n = 0; n < t.length; n++) if (!1 === e.call(t[n], n, t[n])) return t;
            } else for (i in t) if (!1 === e.call(t[i], i, t[i])) return t;
            return t;
        }),
        (b.grep = function (t, e) {
            return S.call(t, e);
        }),
        window.JSON && (b.parseJSON = JSON.parse),
        b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
            q["[object " + e + "]"] = e.toLowerCase();
        }),
        (b.fn = {
            forEach: j.forEach,
            reduce: j.reduce,
            push: j.push,
            sort: j.sort,
            indexOf: j.indexOf,
            concat: j.concat,
            map: function (n) {
                return b(
                    b.map(this, function (t, e) {
                        return n.call(t, e, t);
                    })
                );
            },
            slice: function () {
                return b(N.apply(this, arguments));
            },
            ready: function (t) {
                return (
                    _.test(C.readyState) && C.body
                        ? t(b)
                        : C.addEventListener(
                              "DOMContentLoaded",
                              function () {
                                  t(b);
                              },
                              !1
                          ),
                    this
                );
            },
            get: function (t) {
                return t === y ? N.call(this) : this[0 <= t ? t : t + this.length];
            },
            toArray: function () {
                return this.get();
            },
            size: function () {
                return this.length;
            },
            remove: function () {
                return this.each(function () {
                    null != this.parentNode && this.parentNode.removeChild(this);
                });
            },
            each: function (n) {
                return (
                    j.every.call(this, function (t, e) {
                        return !1 !== n.call(t, e, t);
                    }),
                    this
                );
            },
            filter: function (e) {
                return a(e)
                    ? this.not(this.not(e))
                    : b(
                          S.call(this, function (t) {
                              return F.matches(t, e);
                          })
                      );
            },
            add: function (t, e) {
                return b(E(this.concat(b(t, e))));
            },
            is: function (t) {
                return 0 < this.length && F.matches(this[0], t);
            },
            not: function (e) {
                var n = [];
                if (a(e) && e.call !== y)
                    this.each(function (t) {
                        e.call(this, t) || n.push(this);
                    });
                else {
                    var i = "string" == typeof e ? this.filter(e) : l(e) && a(e.item) ? N.call(e) : b(e);
                    this.forEach(function (t) {
                        i.indexOf(t) < 0 && n.push(t);
                    });
                }
                return b(n);
            },
            has: function (t) {
                return this.filter(function () {
                    return r(t) ? b.contains(this, t) : b(this).find(t).size();
                });
            },
            eq: function (t) {
                return -1 === t ? this.slice(t) : this.slice(t, +t + 1);
            },
            first: function () {
                var t = this[0];
                return t && !r(t) ? t : b(t);
            },
            last: function () {
                var t = this[this.length - 1];
                return t && !r(t) ? t : b(t);
            },
            find: function (t) {
                var n = this;
                return t
                    ? "object" == typeof t
                        ? b(t).filter(function () {
                              var e = this;
                              return j.some.call(n, function (t) {
                                  return b.contains(t, e);
                              });
                          })
                        : 1 == this.length
                        ? b(F.qsa(this[0], t))
                        : this.map(function () {
                              return F.qsa(this, t);
                          })
                    : b();
            },
            closest: function (t, e) {
                var n = this[0],
                    i = !1;
                for ("object" == typeof t && (i = b(t)); n && !(i ? 0 <= i.indexOf(n) : F.matches(n, t)); ) n = n !== e && !s(n) && n.parentNode;
                return b(n);
            },
            parents: function (t) {
                for (var e = [], n = this; 0 < n.length; )
                    n = b.map(n, function (t) {
                        return (t = t.parentNode) && !s(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0;
                    });
                return p(e, t);
            },
            parent: function (t) {
                return p(E(this.pluck("parentNode")), t);
            },
            children: function (t) {
                return p(
                    this.map(function () {
                        return i(this);
                    }),
                    t
                );
            },
            contents: function () {
                return this.map(function () {
                    return N.call(this.childNodes);
                });
            },
            siblings: function (t) {
                return p(
                    this.map(function (t, e) {
                        return S.call(i(e.parentNode), function (t) {
                            return t !== e;
                        });
                    }),
                    t
                );
            },
            empty: function () {
                return this.each(function () {
                    this.innerHTML = "";
                });
            },
            pluck: function (e) {
                return b.map(this, function (t) {
                    return t[e];
                });
            },
            show: function () {
                return this.each(function () {
                    var t, e, n;
                    "none" == this.style.display && (this.style.display = ""),
                        "none" == getComputedStyle(this, "").getPropertyValue("display") &&
                            (this.style.display =
                                ((t = this.nodeName),
                                T[t] || ((e = C.createElement(t)), C.body.appendChild(e), (n = getComputedStyle(e, "").getPropertyValue("display")), e.parentNode.removeChild(e), "none" == n && (n = "block"), (T[t] = n)),
                                T[t]));
                });
            },
            replaceWith: function (t) {
                return this.before(t).remove();
            },
            wrap: function (e) {
                var n = a(e);
                if (this[0] && !n)
                    var i = b(e).get(0),
                        r = i.parentNode || 1 < this.length;
                return this.each(function (t) {
                    b(this).wrapAll(n ? e.call(this, t) : r ? i.cloneNode(!0) : i);
                });
            },
            wrapAll: function (t) {
                if (this[0]) {
                    b(this[0]).before((t = b(t)));
                    for (var e; (e = t.children()).length; ) t = e.first();
                    b(t).append(this);
                }
                return this;
            },
            wrapInner: function (r) {
                var o = a(r);
                return this.each(function (t) {
                    var e = b(this),
                        n = e.contents(),
                        i = o ? r.call(this, t) : r;
                    n.length ? n.wrapAll(i) : e.append(i);
                });
            },
            unwrap: function () {
                return (
                    this.parent().each(function () {
                        b(this).replaceWith(b(this).children());
                    }),
                    this
                );
            },
            clone: function () {
                return this.map(function () {
                    return this.cloneNode(!0);
                });
            },
            hide: function () {
                return this.css("display", "none");
            },
            toggle: function (e) {
                return this.each(function () {
                    var t = b(this);
                    (e === y ? "none" == t.css("display") : e) ? t.show() : t.hide();
                });
            },
            prev: function (t) {
                return b(this.pluck("previousElementSibling")).filter(t || "*");
            },
            next: function (t) {
                return b(this.pluck("nextElementSibling")).filter(t || "*");
            },
            html: function (n) {
                return 0 in arguments
                    ? this.each(function (t) {
                          var e = this.innerHTML;
                          b(this).empty().append(d(this, n, t, e));
                      })
                    : 0 in this
                    ? this[0].innerHTML
                    : null;
            },
            text: function (n) {
                return 0 in arguments
                    ? this.each(function (t) {
                          var e = d(this, n, t, this.textContent);
                          this.textContent = null == e ? "" : "" + e;
                      })
                    : 0 in this
                    ? this[0].textContent
                    : null;
            },
            attr: function (e, n) {
                var t;
                return "string" != typeof e || 1 in arguments
                    ? this.each(function (t) {
                          if (1 === this.nodeType)
                              if (r(e)) for (x in e) m(this, x, e[x]);
                              else m(this, e, d(this, n, t, this.getAttribute(e)));
                      })
                    : this.length && 1 === this[0].nodeType
                    ? !(t = this[0].getAttribute(e)) && e in this[0]
                        ? this[0][e]
                        : t
                    : y;
            },
            removeAttr: function (t) {
                return this.each(function () {
                    1 === this.nodeType &&
                        t.split(" ").forEach(function (t) {
                            m(this, t);
                        }, this);
                });
            },
            prop: function (e, n) {
                return (
                    (e = V[e] || e),
                    1 in arguments
                        ? this.each(function (t) {
                              this[e] = d(this, n, t, this[e]);
                          })
                        : this[0] && this[0][e]
                );
            },
            data: function (t, e) {
                var n = "data-" + t.replace(A, "-$1").toLowerCase(),
                    i = 1 in arguments ? this.attr(n, e) : this.attr(n);
                return null !== i ? g(i) : y;
            },
            val: function (e) {
                return 0 in arguments
                    ? this.each(function (t) {
                          this.value = d(this, e, t, this.value);
                      })
                    : this[0] &&
                          (this[0].multiple
                              ? b(this[0])
                                    .find("option")
                                    .filter(function () {
                                        return this.selected;
                                    })
                                    .pluck("value")
                              : this[0].value);
            },
            offset: function (o) {
                if (o)
                    return this.each(function (t) {
                        var e = b(this),
                            n = d(this, o, t, e.offset()),
                            i = e.offsetParent().offset(),
                            r = { top: n.top - i.top, left: n.left - i.left };
                        "static" == e.css("position") && (r.position = "relative"), e.css(r);
                    });
                if (!this.length) return null;
                var t = this[0].getBoundingClientRect();
                return { left: t.left + window.pageXOffset, top: t.top + window.pageYOffset, width: Math.round(t.width), height: Math.round(t.height) };
            },
            css: function (t, e) {
                if (arguments.length < 2) {
                    var n,
                        i = this[0];
                    if (!i) return;
                    if (((n = getComputedStyle(i, "")), "string" == typeof t)) return i.style[L(t)] || n.getPropertyValue(t);
                    if (J(t)) {
                        var r = {};
                        return (
                            b.each(t, function (t, e) {
                                r[e] = i.style[L(e)] || n.getPropertyValue(e);
                            }),
                            r
                        );
                    }
                }
                var o = "";
                if ("string" == u(t))
                    e || 0 === e
                        ? (o = h(t) + ":" + f(t, e))
                        : this.each(function () {
                              this.style.removeProperty(h(t));
                          });
                else
                    for (x in t)
                        t[x] || 0 === t[x]
                            ? (o += h(x) + ":" + f(x, t[x]) + ";")
                            : this.each(function () {
                                  this.style.removeProperty(h(x));
                              });
                return this.each(function () {
                    this.style.cssText += ";" + o;
                });
            },
            index: function (t) {
                return t ? this.indexOf(b(t)[0]) : this.parent().children().indexOf(this[0]);
            },
            hasClass: function (t) {
                return (
                    !!t &&
                    j.some.call(
                        this,
                        function (t) {
                            return this.test(v(t));
                        },
                        n(t)
                    )
                );
            },
            addClass: function (n) {
                return n
                    ? this.each(function (t) {
                          if ("className" in this) {
                              w = [];
                              var e = v(this);
                              d(this, n, t, e)
                                  .split(/\s+/g)
                                  .forEach(function (t) {
                                      b(this).hasClass(t) || w.push(t);
                                  }, this),
                                  w.length && v(this, e + (e ? " " : "") + w.join(" "));
                          }
                      })
                    : this;
            },
            removeClass: function (e) {
                return this.each(function (t) {
                    if ("className" in this) {
                        if (e === y) return v(this, "");
                        (w = v(this)),
                            d(this, e, t, w)
                                .split(/\s+/g)
                                .forEach(function (t) {
                                    w = w.replace(n(t), " ");
                                }),
                            v(this, w.trim());
                    }
                });
            },
            toggleClass: function (n, i) {
                return n
                    ? this.each(function (t) {
                          var e = b(this);
                          d(this, n, t, v(this))
                              .split(/\s+/g)
                              .forEach(function (t) {
                                  (i === y ? !e.hasClass(t) : i) ? e.addClass(t) : e.removeClass(t);
                              });
                      })
                    : this;
            },
            scrollTop: function (t) {
                if (this.length) {
                    var e = "scrollTop" in this[0];
                    return t === y
                        ? e
                            ? this[0].scrollTop
                            : this[0].pageYOffset
                        : this.each(
                              e
                                  ? function () {
                                        this.scrollTop = t;
                                    }
                                  : function () {
                                        this.scrollTo(this.scrollX, t);
                                    }
                          );
                }
            },
            scrollLeft: function (t) {
                if (this.length) {
                    var e = "scrollLeft" in this[0];
                    return t === y
                        ? e
                            ? this[0].scrollLeft
                            : this[0].pageXOffset
                        : this.each(
                              e
                                  ? function () {
                                        this.scrollLeft = t;
                                    }
                                  : function () {
                                        this.scrollTo(t, this.scrollY);
                                    }
                          );
                }
            },
            position: function () {
                if (this.length) {
                    var t = this[0],
                        e = this.offsetParent(),
                        n = this.offset(),
                        i = M.test(e[0].nodeName) ? { top: 0, left: 0 } : e.offset();
                    return (
                        (n.top -= parseFloat(b(t).css("margin-top")) || 0),
                        (n.left -= parseFloat(b(t).css("margin-left")) || 0),
                        (i.top += parseFloat(b(e[0]).css("border-top-width")) || 0),
                        (i.left += parseFloat(b(e[0]).css("border-left-width")) || 0),
                        { top: n.top - i.top, left: n.left - i.left }
                    );
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent || C.body; t && !M.test(t.nodeName) && "static" == b(t).css("position"); ) t = t.offsetParent;
                    return t;
                });
            },
        }),
        (b.fn.detach = b.fn.remove),
        ["width", "height"].forEach(function (i) {
            var r = i.replace(/./, function (t) {
                return t[0].toUpperCase();
            });
            b.fn[i] = function (e) {
                var t,
                    n = this[0];
                return e === y
                    ? o(n)
                        ? n["inner" + r]
                        : s(n)
                        ? n.documentElement["scroll" + r]
                        : (t = this.offset()) && t[i]
                    : this.each(function (t) {
                          (n = b(this)).css(i, d(this, e, t, n[i]()));
                      });
            };
        }),
        ["after", "prepend", "before", "append"].forEach(function (e, a) {
            var s = a % 2;
            (b.fn[e] = function () {
                var e,
                    i,
                    r = b.map(arguments, function (t) {
                        return "object" == (e = u(t)) || "array" == e || null == t ? t : F.fragment(t);
                    }),
                    o = 1 < this.length;
                return r.length < 1
                    ? this
                    : this.each(function (t, e) {
                          (i = s ? e : e.parentNode), (e = 0 == a ? e.nextSibling : 1 == a ? e.firstChild : 2 == a ? e : null);
                          var n = b.contains(C.documentElement, i);
                          r.forEach(function (t) {
                              if (o) t = t.cloneNode(!0);
                              else if (!i) return b(t).remove();
                              i.insertBefore(t, e),
                                  n &&
                                      (function t(e, n) {
                                          n(e);
                                          for (var i = 0, r = e.childNodes.length; i < r; i++) t(e.childNodes[i], n);
                                      })(t, function (t) {
                                          null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || (t.type && "text/javascript" !== t.type) || t.src || window.eval.call(window, t.innerHTML);
                                      });
                          });
                      });
            }),
                (b.fn[s ? e + "To" : "insert" + (a ? "Before" : "After")] = function (t) {
                    return b(t)[e](this), this;
                });
        }),
        (F.Z.prototype = b.fn),
        (F.uniq = E),
        (F.deserializeValue = g),
        (b.zepto = F),
        b
    );
})();
(window.Zepto = Zepto),
    void 0 === window.$ && (window.$ = Zepto),
    (function (l) {
        function h(t) {
            return t._zid || (t._zid = e++);
        }
        function a(t, e, n, i) {
            if ((e = f(e)).ns) var r = ((o = e.ns), new RegExp("(?:^| )" + o.replace(" ", " .* ?") + "(?: |$)"));
            var o;
            return (L[h(t)] || []).filter(function (t) {
                return !(!t || (e.e && t.e != e.e) || (e.ns && !r.test(t.ns)) || (n && h(t.fn) !== h(n)) || (i && t.sel != i));
            });
        }
        function f(t) {
            var e = ("" + t).split(".");
            return { e: e[0], ns: e.slice(1).sort().join(" ") };
        }
        function p(t, e) {
            return (t.del && !n && t.e in i) || !!e;
        }
        function d(t) {
            return E[t] || (n && i[t]) || t;
        }
        function c(r, t, e, o, a, s, u) {
            var n = h(r),
                c = L[n] || (L[n] = []);
            t.split(/\s/).forEach(function (t) {
                if ("ready" == t) return l(document).ready(e);
                var n = f(t);
                (n.fn = e),
                    (n.sel = a),
                    n.e in E &&
                        (e = function (t) {
                            var e = t.relatedTarget;
                            return !e || (e !== this && !l.contains(this, e)) ? n.fn.apply(this, arguments) : void 0;
                        });
                var i = (n.del = s) || e;
                (n.proxy = function (t) {
                    if (!(t = v(t)).isImmediatePropagationStopped()) {
                        t.data = o;
                        var e = i.apply(r, t._args == y ? [t] : [t].concat(t._args));
                        return !1 === e && (t.preventDefault(), t.stopPropagation()), e;
                    }
                }),
                    (n.i = c.length),
                    c.push(n),
                    "addEventListener" in r && r.addEventListener(d(n.e), n.proxy, p(n, u));
            });
        }
        function m(e, t, n, i, r) {
            var o = h(e);
            (t || "").split(/\s/).forEach(function (t) {
                a(e, t, n, i).forEach(function (t) {
                    delete L[o][t.i], "removeEventListener" in e && e.removeEventListener(d(t.e), t.proxy, p(t, r));
                });
            });
        }
        function v(i, r) {
            return (
                (r || !i.isDefaultPrevented) &&
                    (r || (r = i),
                    l.each(t, function (t, e) {
                        var n = r[t];
                        (i[t] = function () {
                            return (this[e] = s), n && n.apply(r, arguments);
                        }),
                            (i[e] = j);
                    }),
                    (r.defaultPrevented !== y ? r.defaultPrevented : "returnValue" in r ? !1 === r.returnValue : r.getPreventDefault && r.getPreventDefault()) && (i.isDefaultPrevented = s)),
                i
            );
        }
        function g(t) {
            var e,
                n = { originalEvent: t };
            for (e in t) r.test(e) || t[e] === y || (n[e] = t[e]);
            return v(n, t);
        }
        var y,
            e = 1,
            x = Array.prototype.slice,
            b = l.isFunction,
            w = function (t) {
                return "string" == typeof t;
            },
            L = {},
            o = {},
            n = "onfocusin" in window,
            i = { focus: "focusin", blur: "focusout" },
            E = { mouseenter: "mouseover", mouseleave: "mouseout" };
        (o.click = o.mousedown = o.mouseup = o.mousemove = "MouseEvents"),
            (l.event = { add: c, remove: m }),
            (l.proxy = function (t, e) {
                var n = 2 in arguments && x.call(arguments, 2);
                if (b(t)) {
                    var i = function () {
                        return t.apply(e, n ? n.concat(x.call(arguments)) : arguments);
                    };
                    return (i._zid = h(t)), i;
                }
                if (w(e)) return n ? (n.unshift(t[e], t), l.proxy.apply(null, n)) : l.proxy(t[e], t);
                throw new TypeError("expected function");
            }),
            (l.fn.bind = function (t, e, n) {
                return this.on(t, e, n);
            }),
            (l.fn.unbind = function (t, e) {
                return this.off(t, e);
            }),
            (l.fn.one = function (t, e, n, i) {
                return this.on(t, e, n, i, 1);
            });
        var s = function () {
                return !0;
            },
            j = function () {
                return !1;
            },
            r = /^([A-Z]|returnValue$|layer[XY]$)/,
            t = { preventDefault: "isDefaultPrevented", stopImmediatePropagation: "isImmediatePropagationStopped", stopPropagation: "isPropagationStopped" };
        (l.fn.delegate = function (t, e, n) {
            return this.on(e, t, n);
        }),
            (l.fn.undelegate = function (t, e, n) {
                return this.off(e, t, n);
            }),
            (l.fn.live = function (t, e) {
                return l(document.body).delegate(this.selector, t, e), this;
            }),
            (l.fn.die = function (t, e) {
                return l(document.body).undelegate(this.selector, t, e), this;
            }),
            (l.fn.on = function (e, r, n, o, a) {
                var s,
                    u,
                    i = this;
                return e && !w(e)
                    ? (l.each(e, function (t, e) {
                          i.on(t, r, n, e, a);
                      }),
                      i)
                    : (w(r) || b(o) || !1 === o || ((o = n), (n = r), (r = y)),
                      (b(n) || !1 === n) && ((o = n), (n = y)),
                      !1 === o && (o = j),
                      i.each(function (t, i) {
                          a &&
                              (s = function (t) {
                                  return m(i, t.type, o), o.apply(this, arguments);
                              }),
                              r &&
                                  (u = function (t) {
                                      var e,
                                          n = l(t.target).closest(r, i).get(0);
                                      return n && n !== i ? ((e = l.extend(g(t), { currentTarget: n, liveFired: i })), (s || o).apply(n, [e].concat(x.call(arguments, 1)))) : void 0;
                                  }),
                              c(i, e, o, n, r, u || s);
                      }));
            }),
            (l.fn.off = function (t, n, e) {
                var i = this;
                return t && !w(t)
                    ? (l.each(t, function (t, e) {
                          i.off(t, n, e);
                      }),
                      i)
                    : (w(n) || b(e) || !1 === e || ((e = n), (n = y)),
                      !1 === e && (e = j),
                      i.each(function () {
                          m(this, t, e, n);
                      }));
            }),
            (l.fn.trigger = function (t, e) {
                return (
                    ((t = w(t) || l.isPlainObject(t) ? l.Event(t) : v(t))._args = e),
                    this.each(function () {
                        t.type in i && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : l(this).triggerHandler(t, e);
                    })
                );
            }),
            (l.fn.triggerHandler = function (n, i) {
                var r, o;
                return (
                    this.each(function (t, e) {
                        ((r = g(w(n) ? l.Event(n) : n))._args = i),
                            (r.target = e),
                            l.each(a(e, n.type || n), function (t, e) {
                                return (o = e.proxy(r)), !r.isImmediatePropagationStopped() && void 0;
                            });
                    }),
                    o
                );
            }),
            "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (e) {
                l.fn[e] = function (t) {
                    return 0 in arguments ? this.bind(e, t) : this.trigger(e);
                };
            }),
            (l.Event = function (t, e) {
                w(t) || (t = (e = t).type);
                var n = document.createEvent(o[t] || "Events"),
                    i = !0;
                if (e) for (var r in e) "bubbles" == r ? (i = !!e[r]) : (n[r] = e[r]);
                return n.initEvent(t, i, !0), v(n);
            });
    })(Zepto),
    (function (dh) {
        function fh(t, e, n, i) {
            return t.global ? ((r = e || vh), (o = n), (a = i), (s = dh.Event(o)), dh(r).trigger(s, a), !s.isDefaultPrevented()) : void 0;
            var r, o, a, s;
        }
        function ih(t, e) {
            var n = e.context;
            return !1 !== e.beforeSend.call(n, t, e) && !1 !== fh(e, n, "ajaxBeforeSend", [t, e]) && void fh(e, n, "ajaxSend", [t, e]);
        }
        function jh(t, e, n, i) {
            var r = n.context,
                o = "success";
            n.success.call(r, t, o, e), i && i.resolveWith(r, [t, o, e]), fh(n, r, "ajaxSuccess", [e, n, t]), lh(o, e, n);
        }
        function kh(t, e, n, i, r) {
            var o = i.context;
            i.error.call(o, n, e, t), r && r.rejectWith(o, [n, e, t]), fh(i, o, "ajaxError", [n, i, t || e]), lh(e, n, i);
        }
        function lh(t, e, n) {
            var i,
                r = n.context;
            n.complete.call(r, e, t), fh(n, r, "ajaxComplete", [e, n]), (i = n).global && !--dh.active && fh(i, null, "ajaxStop");
        }
        function mh() {}
        function oh(t, e) {
            return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?");
        }
        function qh(t, e, n, i) {
            return dh.isFunction(e) && ((i = n), (n = e), (e = void 0)), dh.isFunction(n) || ((i = n), (n = void 0)), { url: t, data: e, success: n, dataType: i };
        }
        var sh,
            th,
            uh = 0,
            vh = window.document,
            wh = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            xh = /^(?:text|application)\/javascript/i,
            yh = /^(?:text|application)\/xml/i,
            zh = "application/json",
            Ah = "text/html",
            Bh = /^\s*$/,
            Ch = vh.createElement("a");
        (Ch.href = window.location.href),
            (dh.active = 0),
            (dh.ajaxJSONP = function (n, i) {
                if (!("type" in n)) return dh.ajax(n);
                var r,
                    o,
                    t = n.jsonpCallback,
                    a = (dh.isFunction(t) ? t() : t) || "jsonp" + ++uh,
                    s = vh.createElement("script"),
                    u = window[a],
                    e = function (t) {
                        dh(s).triggerHandler("error", t || "abort");
                    },
                    c = { abort: e };
                return (
                    i && i.promise(c),
                    dh(s).on("load error", function (t, e) {
                        clearTimeout(o), dh(s).off().remove(), "error" != t.type && r ? jh(r[0], c, n, i) : kh(null, e || "error", c, n, i), (window[a] = u), r && dh.isFunction(u) && u(r[0]), (u = r = void 0);
                    }),
                    !1 === ih(c, n)
                        ? e("abort")
                        : ((window[a] = function () {
                              r = arguments;
                          }),
                          (s.src = n.url.replace(/\?(.+)=\?/, "?$1=" + a)),
                          vh.head.appendChild(s),
                          0 < n.timeout &&
                              (o = setTimeout(function () {
                                  e("timeout");
                              }, n.timeout))),
                    c
                );
            }),
            (dh.ajaxSettings = {
                type: "GET",
                beforeSend: mh,
                success: mh,
                error: mh,
                complete: mh,
                context: null,
                global: !0,
                xhr: function () {
                    return new window.XMLHttpRequest();
                },
                accepts: { script: "text/javascript, application/javascript, application/x-javascript", json: zh, xml: "application/xml, text/xml", html: Ah, text: "text/plain" },
                crossDomain: !1,
                timeout: 0,
                processData: !0,
                cache: !0,
            }),
            (dh.ajax = function (Ji) {
                var Ki,
                    ii,
                    Mh,
                    Li = dh.extend({}, Ji || {}),
                    Mi = dh.Deferred && dh.Deferred();
                for (sh in dh.ajaxSettings) void 0 === Li[sh] && (Li[sh] = dh.ajaxSettings[sh]);
                (Mh = Li).global && 0 == dh.active++ && fh(Mh, null, "ajaxStart"),
                    Li.crossDomain || (((Ki = vh.createElement("a")).href = Li.url), (Ki.href = Ki.href), (Li.crossDomain = Ch.protocol + "//" + Ch.host != Ki.protocol + "//" + Ki.host)),
                    Li.url || (Li.url = window.location.toString()),
                    (ii = Li).processData && ii.data && "string" != dh.type(ii.data) && (ii.data = dh.param(ii.data, ii.traditional)),
                    !ii.data || (ii.type && "GET" != ii.type.toUpperCase()) || ((ii.url = oh(ii.url, ii.data)), (ii.data = void 0));
                var Ni = Li.dataType,
                    Oi = /\?.+=\?/.test(Li.url);
                if ((Oi && (Ni = "jsonp"), (!1 !== Li.cache && ((Ji && !0 === Ji.cache) || ("script" != Ni && "jsonp" != Ni))) || (Li.url = oh(Li.url, "_=" + Date.now())), "jsonp" == Ni))
                    return Oi || (Li.url = oh(Li.url, Li.jsonp ? Li.jsonp + "=?" : !1 === Li.jsonp ? "" : "callback=?")), dh.ajaxJSONP(Li, Mi);
                var Pi,
                    Qi = Li.accepts[Ni],
                    Ri = {},
                    Si = function (t, e) {
                        Ri[t.toLowerCase()] = [t, e];
                    },
                    Ti = /^([\w-]+:)\/\//.test(Li.url) ? RegExp.$1 : window.location.protocol,
                    Ui = Li.xhr(),
                    Vi = Ui.setRequestHeader;
                if (
                    (Mi && Mi.promise(Ui),
                    Li.crossDomain || Si("X-Requested-With", "XMLHttpRequest"),
                    Si("Accept", Qi || "*/*"),
                    (Qi = Li.mimeType || Qi) && (-1 < Qi.indexOf(",") && (Qi = Qi.split(",", 2)[0]), Ui.overrideMimeType && Ui.overrideMimeType(Qi)),
                    (Li.contentType || (!1 !== Li.contentType && Li.data && "GET" != Li.type.toUpperCase())) && Si("Content-Type", Li.contentType || "application/x-www-form-urlencoded"),
                    Li.headers)
                )
                    for (th in Li.headers) Si(th, Li.headers[th]);
                if (
                    ((Ui.setRequestHeader = Si),
                    !(Ui.onreadystatechange = function () {
                        if (4 == Ui.readyState) {
                            (Ui.onreadystatechange = mh), clearTimeout(Pi);
                            var Zi,
                                $i = !1;
                            if ((200 <= Ui.status && Ui.status < 300) || 304 == Ui.status || (0 == Ui.status && "file:" == Ti)) {
                                (Ni =
                                    Ni ||
                                    ((fi = Li.mimeType || Ui.getResponseHeader("content-type")) && (fi = fi.split(";", 2)[0]), (fi && (fi == Ah ? "html" : fi == zh ? "json" : xh.test(fi) ? "script" : yh.test(fi) && "xml")) || "text")),
                                    (Zi = Ui.responseText);
                                try {
                                    "script" == Ni ? eval(Zi) : "xml" == Ni ? (Zi = Ui.responseXML) : "json" == Ni && (Zi = Bh.test(Zi) ? null : dh.parseJSON(Zi));
                                } catch (t) {
                                    $i = t;
                                }
                                $i ? kh($i, "parsererror", Ui, Li, Mi) : jh(Zi, Ui, Li, Mi);
                            } else kh(Ui.statusText || null, Ui.status ? "error" : "abort", Ui, Li, Mi);
                        }
                        var fi;
                    }) === ih(Ui, Li))
                )
                    return Ui.abort(), kh(null, "abort", Ui, Li, Mi), Ui;
                if (Li.xhrFields) for (th in Li.xhrFields) Ui[th] = Li.xhrFields[th];
                var Wi = !("async" in Li) || Li.async;
                for (th in (Ui.open(Li.type, Li.url, Wi, Li.username, Li.password), Ri)) Vi.apply(Ui, Ri[th]);
                return (
                    0 < Li.timeout &&
                        (Pi = setTimeout(function () {
                            (Ui.onreadystatechange = mh), Ui.abort(), kh(null, "timeout", Ui, Li, Mi);
                        }, Li.timeout)),
                    Ui.send(Li.data ? Li.data : null),
                    Ui
                );
            }),
            (dh.get = function () {
                return dh.ajax(qh.apply(null, arguments));
            }),
            (dh.post = function () {
                var t = qh.apply(null, arguments);
                return (t.type = "POST"), dh.ajax(t);
            }),
            (dh.getJSON = function () {
                var t = qh.apply(null, arguments);
                return (t.dataType = "json"), dh.ajax(t);
            }),
            (dh.fn.load = function (t, e, n) {
                if (!this.length) return this;
                var i,
                    r = this,
                    o = t.split(/\s/),
                    a = qh(t, e, n),
                    s = a.success;
                return (
                    1 < o.length && ((a.url = o[0]), (i = o[1])),
                    (a.success = function (t) {
                        r.html(i ? dh("<div>").html(t.replace(wh, "")).find(i) : t), s && s.apply(r, arguments);
                    }),
                    dh.ajax(a),
                    this
                );
            });
        var Dh = encodeURIComponent;
        dh.param = function (t, e) {
            var n = [];
            return (
                (n.add = function (t, e) {
                    dh.isFunction(e) && (e = e()), null == e && (e = ""), this.push(Dh(t) + "=" + Dh(e));
                }),
                (function n(i, t, r, o) {
                    var a,
                        s = dh.isArray(t),
                        u = dh.isPlainObject(t);
                    dh.each(t, function (t, e) {
                        (a = dh.type(e)), o && (t = r ? o : o + "[" + (u || "object" == a || "array" == a ? t : "") + "]"), !o && s ? i.add(e.name, e.value) : "array" == a || (!r && "object" == a) ? n(i, e, r, t) : i.add(t, e);
                    });
                })(n, t, e),
                n.join("&").replace(/%20/g, "+")
            );
        };
    })(Zepto),
    (function (o) {
        (o.fn.serializeArray = function () {
            var n,
                i,
                e = [],
                r = function (t) {
                    return t.forEach ? t.forEach(r) : void e.push({ name: n, value: t });
                };
            return (
                this[0] &&
                    o.each(this[0].elements, function (t, e) {
                        (i = e.type),
                            (n = e.name) && "fieldset" != e.nodeName.toLowerCase() && !e.disabled && "submit" != i && "reset" != i && "button" != i && "file" != i && (("radio" != i && "checkbox" != i) || e.checked) && r(o(e).val());
                    }),
                e
            );
        }),
            (o.fn.serialize = function () {
                var e = [];
                return (
                    this.serializeArray().forEach(function (t) {
                        e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value));
                    }),
                    e.join("&")
                );
            }),
            (o.fn.submit = function (t) {
                if (0 in arguments) this.bind("submit", t);
                else if (this.length) {
                    var e = o.Event("submit");
                    this.eq(0).trigger(e), e.isDefaultPrevented() || this.get(0).submit();
                }
                return this;
            });
    })(Zepto),
    (function (n) {
        "__proto__" in {} ||
            n.extend(n.zepto, {
                Z: function (t, e) {
                    return (t = t || []), n.extend(t, n.fn), (t.selector = e || ""), (t.__Z = !0), t;
                },
                isZ: function (t) {
                    return "array" === n.type(t) && "__Z" in t;
                },
            });
        try {
            getComputedStyle(void 0);
        } catch (t) {
            var e = getComputedStyle;
            window.getComputedStyle = function (t) {
                try {
                    return e(t);
                } catch (t) {
                    return null;
                }
            };
        }
    })(Zepto);
!(function (s) {
    "use strict";
    function n(s) {
        return new RegExp("(^|\\s+)" + s + "(\\s+|$)");
    }
    var a, t, c;
    function e(s, e) {
        (a(s, e) ? c : t)(s, e);
    }
    c =
        "classList" in document.documentElement
            ? ((a = function (s, e) {
                  return s.classList.contains(e);
              }),
              (t = function (s, e) {
                  s.classList.add(e);
              }),
              function (s, e) {
                  s.classList.remove(e);
              })
            : ((a = function (s, e) {
                  return n(e).test(s.className);
              }),
              (t = function (s, e) {
                  a(s, e) || (s.className = s.className + " " + e);
              }),
              function (s, e) {
                  s.className = s.className.replace(n(e), " ");
              });
    var i = { hasClass: a, addClass: t, removeClass: c, toggleClass: e, has: a, add: t, remove: c, toggle: e };
    "function" == typeof define && define.amd ? define(i) : (s.classie = i);
})(window);
!(function (e, o) {
    "function" == typeof define && define.amd ? define(o) : "object" == typeof exports ? (module.exports = o(require, exports, module)) : (e.ouibounce = o());
})(this, function (e, o, i) {
    return function (e, o) {
        "use strict";
        var i = o || {},
            n = i.aggressive || !1,
            t = l(i.sensitivity, 20),
            r = l(i.timer, 1e3),
            u = l(i.delay, 0),
            c = i.callback || function () {},
            a = k(i.cookieExpire) || "",
            s = i.cookieDomain ? ";domain=" + i.cookieDomain : "",
            d = i.cookieName ? i.cookieName : "viewedOuibounceModal",
            m = !0 === i.sitewide ? ";path=/" : "",
            f = null,
            v = document.documentElement;
        function l(e, o) {
            return void 0 === e ? o : e;
        }
        function k(e) {
            var o = 24 * e * 60 * 60 * 1e3,
                i = new Date();
            return i.setTime(i.getTime() + o), "; expires=" + i.toUTCString();
        }
        function p(e) {
            e.clientY > t || (f = setTimeout(w, u));
        }
        function y() {
            f && (clearTimeout(f), (f = null));
        }
        setTimeout(function () {
            if (T()) return;
            v.addEventListener("mouseleave", p), v.addEventListener("mouseenter", y), v.addEventListener("keydown", b);
        }, r);
        var E = !1;
        function b(e) {
            E || (e.metaKey && 76 === e.keyCode && ((E = !0), (f = setTimeout(w, u))));
        }
        function x(e, o) {
            return (
                (function () {
                    for (var e = document.cookie.split("; "), o = {}, i = e.length - 1; 0 <= i; i--) {
                        var n = e[i].split("=");
                        o[n[0]] = n[1];
                    }
                    return o;
                })()[e] === o
            );
        }
        function T() {
            return x(d, "true") && !n;
        }
        function w() {
            T() || (e && (e.style.display = "block"), c(), D());
        }
        function D(e) {
            var o = e || {};
            void 0 !== o.cookieExpire && (a = k(o.cookieExpire)),
                !0 === o.sitewide && (m = ";path=/"),
                void 0 !== o.cookieDomain && (s = ";domain=" + o.cookieDomain),
                void 0 !== o.cookieName && (d = o.cookieName),
                (document.cookie = d + "=true" + a + s + m),
                v.removeEventListener("mouseleave", p),
                v.removeEventListener("mouseenter", y),
                v.removeEventListener("keydown", b);
        }
        return { fire: w, disable: D, isDisabled: T };
    };
});
!(function () {
    "use strict";
    var e,
        t = document.querySelector(".recommendation"),
        n = !1;
    t &&
        (t.querySelector(".message button").addEventListener("click", function () {
            return o(), !1;
        }),
        document.addEventListener(
            "stillReading",
            function (e) {
                n && ((t.style.bottom = "-100%"), (n = !1));
            },
            !1
        ),
        document.addEventListener(
            "finishedReading",
            function (e) {
                n || ((t.style.bottom = "0%"), (n = !0));
            },
            !1
        ));
    function o() {
        0 != document.body.scrollTop || 0 != document.documentElement.scrollTop ? (window.scrollBy(0, -50), (e = setTimeout(o, 10))) : clearTimeout(e);
    }
})();
!(function (n) {
    "use strict";
    var i = n.document.documentElement;
    function s() {
        var t = i.clientHeight,
            e = n.innerHeight;
        return t < e ? e : t;
    }
    function a() {
        return n.pageYOffset || i.scrollTop;
    }
    function o(t, e) {
        var i = t.offsetHeight,
            n = a(),
            o = n + s(),
            r = (function (t) {
                for (var e = 0, i = 0; isNaN(t.offsetTop) || (e += t.offsetTop), isNaN(t.offsetLeft) || (i += t.offsetLeft), (t = t.offsetParent); );
                return { top: e, left: i };
            })(t).top;
        return r + i * (e = e || 0) <= o && n <= r + i - i * e;
    }
    function r(t) {
        if (t) {
            var e = new Image();
            (e.onload = function () {
                t.src = e.src;
            }),
                (e.src = t.getAttribute("data-url"));
        }
    }
    function t(t, e) {
        (this.el = t),
            (this.options = (function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                return t;
            })(this.defaults, e)),
            this._init();
    }
    (t.prototype = {
        defaults: { minDuration: 0, maxDuration: 0, viewportFactor: 0 },
        _init: function () {
            (this.items = Array.prototype.slice.call(document.querySelectorAll("#" + this.el.id + " > article"))), (this.itemsCount = this.items.length), (this.itemsRenderedCount = 0), (this.didScroll = !1);
            var i = this;
            i.items.forEach(function (t, e) {
                o(t) && (i._checkTotalRendered(), classie.add(t, "shown"), r(t.querySelector(".preload")));
            }),
                n.addEventListener(
                    "scroll",
                    function () {
                        i._onScrollFn();
                    },
                    !1
                ),
                n.addEventListener(
                    "resize",
                    function () {
                        i._resizeHandler();
                    },
                    !1
                );
        },
        _onScrollFn: function () {
            var t = this;
            this.didScroll ||
                ((this.didScroll = !0),
                setTimeout(function () {
                    t._scrollPage();
                }, 60));
        },
        _scrollPage: function () {
            var n = this;
            this.items.forEach(function (i, t) {
                classie.has(i, "shown") ||
                    classie.has(i, "animate") ||
                    !o(i, n.options.viewportFactor) ||
                    setTimeout(function () {
                        var t = a() + s() / 2;
                        if (
                            ((n.el.style.WebkitPerspectiveOrigin = "50% " + t + "px"),
                            (n.el.style.MozPerspectiveOrigin = "50% " + t + "px"),
                            (n.el.style.perspectiveOrigin = "50% " + t + "px"),
                            n._checkTotalRendered(),
                            n.options.minDuration && n.options.maxDuration)
                        ) {
                            var e = Math.random() * (n.options.maxDuration - n.options.minDuration) + n.options.minDuration + "s";
                            (i.style.WebkitAnimationDuration = e), (i.style.MozAnimationDuration = e), (i.style.animationDuration = e);
                        }
                        classie.add(i, "animate"), r(i.querySelector(".preload"));
                    }, 25);
            }),
                (this.didScroll = !1);
        },
        _resizeHandler: function () {
            var t = this;
            this.resizeTimeout && clearTimeout(this.resizeTimeout),
                (this.resizeTimeout = setTimeout(function () {
                    t._scrollPage(), (t.resizeTimeout = null);
                }, 1e3));
        },
        _checkTotalRendered: function () {
            ++this.itemsRenderedCount, this.itemsRenderedCount === this.itemsCount && n.removeEventListener("scroll", this._onScrollFn);
        },
    }),
        (n.AnimOnScroll = t);
})(window);
!(function (c) {
    c.fn.simpleJekyllSearch = function (e) {
        var l = c.extend(
                {
                    jsonFile: "/search.json",
                    jsonFormat: "title,tags,categories,url,date",
                    template: '<li><article><a href="{url}"><span class="entry-category">{categories}</span> {title} <span class="entry-date"><time datetime="{date}">{date}</time></span></a></article></li>',
                    searchResults: ".search-results",
                    limit: "10",
                    noResults: "<p>Oh no! We didn't find anything :(</p>",
                },
                e
            ),
            a = l.jsonFormat.split(","),
            o = [],
            s = this,
            i = c(l.searchResults);
        function r() {
            i.children().remove();
        }
        l.jsonFile.length &&
            i.length &&
            c.ajax({
                type: "GET",
                url: l.jsonFile,
                dataType: "json",
                success: function (e, t, n) {
                    (o = e),
                        s.keyup(function (e) {
                            var t, n, s;
                            c(this).val().length
                                ? ((n = c(this).val()),
                                  (s = []),
                                  c.each(o, function (e, t) {
                                      for (e = 0; e < a.length; e++) void 0 !== t[a[e]] && -1 !== t[a[e]].toLowerCase().indexOf(n.toLowerCase()) && (s.push(t), (e = a.length));
                                  }),
                                  (t = s),
                                  r(),
                                  i.append(c(l.searchResultsTitle)),
                                  t.length
                                      ? c.each(t, function (e, t) {
                                            if (e < l.limit) {
                                                for (var n = l.template, e = 0; e < a.length; e++) {
                                                    var s = new RegExp("{" + a[e] + "}", "g");
                                                    n = n.replace(s, t[a[e]]);
                                                }
                                                i.append(c(n));
                                            }
                                        })
                                      : i.append(l.noResults))
                                : r();
                        });
                },
                error: function (e, t, n) {
                    console.log("***ERROR in simpleJekyllSearch.js***"), console.log(e), console.log(t), console.log(n);
                },
            });
    };
})(Zepto);
!(function (e, t) {
    "function" == typeof define && define.amd ? define([], t(e)) : "object" == typeof exports ? (module.exports = t(e)) : (e.smoothScroll = t(e));
})("undefined" != typeof global ? global : this.window || this.global, function (y) {
    "use strict";
    var n,
        t,
        c,
        O,
        o = {},
        r = "querySelector" in document && "addEventListener" in y,
        S = { selector: "[data-scroll]", selectorHeader: "[data-scroll-header]", speed: 500, easing: "easeInOutCubic", offset: 0, updateURL: !0, callback: function () {} },
        I = function () {
            var n = {},
                o = !1,
                e = 0,
                t = arguments.length;
            "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && ((o = arguments[0]), e++);
            for (
                var r = function (e) {
                    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (o && "[object Object]" === Object.prototype.toString.call(e[t]) ? (n[t] = I(!0, n[t], e[t])) : (n[t] = e[t]));
                };
                e < t;
                e++
            ) {
                r(arguments[e]);
            }
            return n;
        },
        H = function (e) {
            return null === e ? 0 : ((t = e), Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight) + e.offsetTop);
            var t;
        };
    o.animateScroll = function (i, u, e) {
        var t,
            n = (t = i ? i.getAttribute("data-options") : null) && "object" == typeof JSON && "function" == typeof JSON.parse ? JSON.parse(t) : {},
            s = I(s || S, e || {}, n),
            l =
                "#" ===
                (u =
                    "#" +
                    (function (e) {
                        for (var t, n = String(e), o = n.length, r = -1, a = "", c = n.charCodeAt(0); ++r < o; ) {
                            if (0 === (t = n.charCodeAt(r))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                            a +=
                                (1 <= t && t <= 31) || 127 == t || (0 === r && 48 <= t && t <= 57) || (1 === r && 48 <= t && t <= 57 && 45 === c)
                                    ? "\\" + t.toString(16) + " "
                                    : 128 <= t || 45 === t || 95 === t || (48 <= t && t <= 57) || (65 <= t && t <= 90) || (97 <= t && t <= 122)
                                    ? n.charAt(r)
                                    : "\\" + n.charAt(r);
                        }
                        return a;
                    })(u.substr(1)))
                    ? y.document.documentElement
                    : y.document.querySelector(u),
            f = y.pageYOffset;
        c || (c = y.document.querySelector(s.selectorHeader)), O || (O = H(c));
        var d,
            h,
            p,
            o,
            r,
            m = (function (e, t, n) {
                var o = 0;
                if (e.offsetParent) for (; (o += e.offsetTop), (e = e.offsetParent); );
                return 0 <= (o = o - t - n) ? o : 0;
            })(l, O, parseInt(s.offset, 10)),
            g = m - f,
            b = Math.max(y.document.body.scrollHeight, y.document.documentElement.scrollHeight, y.document.body.offsetHeight, y.document.documentElement.offsetHeight, y.document.body.clientHeight, y.document.documentElement.clientHeight),
            v = 0;
        (o = u),
            (r = s.updateURL),
            y.history.pushState && (r || "true" === r) && "file:" !== y.location.protocol && y.history.pushState(null, null, [y.location.protocol, "//", y.location.host, y.location.pathname, y.location.search, o].join(""));
        var a = function () {
            var e, t, n, o, r, a, c;
            (h = 1 < (h = (v += 16) / parseInt(s.speed, 10)) ? 1 : h),
                (p =
                    f +
                    g *
                        ((e = s.easing),
                        (t = h),
                        "easeInQuad" === e && (n = t * t),
                        "easeOutQuad" === e && (n = t * (2 - t)),
                        "easeInOutQuad" === e && (n = t < 0.5 ? 2 * t * t : (4 - 2 * t) * t - 1),
                        "easeInCubic" === e && (n = t * t * t),
                        "easeOutCubic" === e && (n = --t * t * t + 1),
                        "easeInOutCubic" === e && (n = t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
                        "easeInQuart" === e && (n = t * t * t * t),
                        "easeOutQuart" === e && (n = 1 - --t * t * t * t),
                        "easeInOutQuart" === e && (n = t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t),
                        "easeInQuint" === e && (n = t * t * t * t * t),
                        "easeOutQuint" === e && (n = 1 + --t * t * t * t * t),
                        "easeInOutQuint" === e && (n = t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t),
                        n || t)),
                y.scrollTo(0, Math.floor(p)),
                (o = p),
                (r = m),
                (a = d),
                (c = y.pageYOffset),
                (o == r || c == r || y.innerHeight + c >= b) && (clearInterval(a), l.focus(), s.callback(i, u));
        };
        0 === y.pageYOffset && y.scrollTo(0, 0), (d = setInterval(a, 16));
    };
    var a = function (e) {
            var t = (function (e, t) {
                var n,
                    o,
                    r = t.charAt(0),
                    a = "classList" in document.documentElement;
                for ("[" === r && 1 < (n = (t = t.substr(1, t.length - 2)).split("=")).length && ((o = !0), (n[1] = n[1].replace(/"/g, "").replace(/'/g, ""))); e && e !== document; e = e.parentNode) {
                    if ("." === r)
                        if (a) {
                            if (e.classList.contains(t.substr(1))) return e;
                        } else if (new RegExp("(^|\\s)" + t.substr(1) + "(\\s|$)").test(e.className)) return e;
                    if ("#" === r && e.id === t.substr(1)) return e;
                    if ("[" === r && e.hasAttribute(n[0])) {
                        if (!o) return e;
                        if (e.getAttribute(n[0]) === n[1]) return e;
                    }
                    if (e.tagName.toLowerCase() === t) return e;
                }
                return null;
            })(e.target, n.selector);
            t && "a" === t.tagName.toLowerCase() && (e.preventDefault(), o.animateScroll(t, t.hash, n));
        },
        i = function (e) {
            t ||
                (t = setTimeout(function () {
                    (t = null), (O = H(c));
                }, 66));
        };
    return (
        (o.destroy = function () {
            n && (y.document.removeEventListener("click", a, !1), y.removeEventListener("resize", i, !1), (O = c = t = n = null));
        }),
        (o.init = function (e) {
            r && (o.destroy(), (n = I(S, e || {})), (c = y.document.querySelector(n.selectorHeader)), (O = H(c)), y.document.addEventListener("click", a, !1), c && y.addEventListener("resize", i, !1));
        }),
        o
    );
});
!(function () {
    for (var n = document.links, o = 0, t = n.length; o < t; o++) n[o].hostname != window.location.hostname && (n[o].target = "_blank");
})();
!(function () {
    "use strict";
    var e = document.querySelector(".post-content"),
        v = document.querySelector(".time-bar"),
        y = !0;
    if (e && v) {
        var g = 0,
            E = e.scrollHeight,
            h = v.querySelector(".completed"),
            S = v.querySelector(".remaining"),
            f = v.querySelector(".time-completed"),
            I = v.querySelector(".time-remaining");
        document.addEventListener("scroll", function () {
            var e,
                t,
                n = window.pageYOffset || document.documentElement.scrollTop;
            if (((v.style.bottom = g < n && y ? "0%" : "-100%"), n <= E)) {
                var r = n / E,
                    i = (100 * r).toFixed(2),
                    o = 100 - parseFloat(i);
                (h.style.width = i.toString() + "%"), (S.style.width = o.toString() + "%");
                var s = 60 * parseInt(v.getAttribute("data-minutes")),
                    a = parseInt(r * s),
                    c = parseInt(a / 60),
                    d = parseInt(60 * (a / 60 - c)),
                    u = s - a,
                    l = parseInt(u / 60),
                    m = parseInt(60 * (u / 60 - l));
                (c = c < 10 ? "0" + c : c),
                    (d = d < 10 ? "0" + d : d),
                    (l = l < 10 ? "0" + l : l),
                    (m = m < 10 ? "0" + m : m),
                    (f.innerText = c + ":" + d),
                    (I.innerText = l + ":" + m),
                    (y = !0),
                    (t = document.createEvent("CustomEvent")).initCustomEvent("stillReading"),
                    document.dispatchEvent(t);
            } else {
                (h.style.width = "100%"), (S.style.width = "0%");
                var p = parseInt(v.getAttribute("data-minutes"));
                (p = p < 10 ? "0" + p : p), (f.innerText = "00:00"), (I.innerText = p + ":00"), (y = !1), (e = document.createEvent("CustomEvent")).initCustomEvent("finishedReading"), document.dispatchEvent(e);
            }
            g = n;
        });
    }
})();
!(function (o, e, a) {
    o("#menu").click(function () {
        o("body").addClass("push-menu-to-right"), o("#sidebar").addClass("open"), o(".overlay").addClass("show");
    }),
        o("#mask").click(function () {
            o("body").removeClass("push-menu-to-right"), o("#sidebar").removeClass("open"), o(".overlay").removeClass("show");
        }),
        o(e).scroll(function () {
            0 < o(this).scrollTop() ? o("body").addClass("light") : o("body").removeClass("light");
        });
    var s = o(".modal .close");
    s.on("click", function () {
        s.parent().parent().addClass("closed");
    });
    var c = o(".modal.exit");
    c.length &&
        ouibounce(c[0], {
            aggressive: !0,
            callback: function () {
                c.find(".close").on("click", function () {
                    c.hide();
                });
            },
        });
    var l = { close: o(".icon-remove-sign"), searchform: o(".search-form"), canvas: o("body"), dothis: o(".dosearch") };
    function n() {
        o(".search-wrapper").toggleClass("active"), l.searchform.toggleClass("active"), l.canvas.removeClass("search-overlay");
    }
    l.dothis.on("click", function () {
        o(".search-wrapper").toggleClass("active"), l.searchform.toggleClass("active"), l.searchform.find("input").focus(), l.canvas.toggleClass("search-overlay"), o(".search-field").simpleJekyllSearch();
    }),
        l.close.on("click", n),
        document.addEventListener("keyup", function (e) {
            27 == e.keyCode && o(".search-overlay").length && n();
        }),
        1 <= document.getElementsByClassName("home").length && new AnimOnScroll(document.getElementById("grid"), { minDuration: 0.4, maxDuration: 0.7, viewportFactor: 0.2 }),
        smoothScroll.init({ selectorHeader: ".bar-header", speed: 500, updateURL: !1 });
})(Zepto, window);
//# sourceMappingURL=scripts.min.js.map
