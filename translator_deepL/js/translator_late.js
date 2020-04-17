!
function(e) {
	var t = {};

	function n(r) {
		if (t[r]) return t[r].exports;
		var o = t[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
	}
	n.m = e, n.c = t, n.d = function(e, t, r) {
		n.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: r
		})
	}, n.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, n.t = function(e, t) {
		if (1 & t && (e = n(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var r = Object.create(null);
		if (n.r(r), Object.defineProperty(r, "default", {
			enumerable: !0,
			value: e
		}), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function(t) {
			return e[t]
		}.bind(null, o));
		return r
	}, n.n = function(e) {
		var t = e && e.__esModule ?
		function() {
			return e.
		default
		} : function() {
			return e
		};
		return n.d(t, "a", t), t
	}, n.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, n.p = "", n(n.s = 335)
}([function(e, t, n) {
	var r = n(5),
		o = n(15),
		a = n(18),
		i = n(16),
		s = n(27),
		c = function e(t, n, c) {
			var u, l, f, d, p = t & e.F,
				g = t & e.G,
				h = t & e.P,
				_ = t & e.B,
				v = g ? r : t & e.S ? r[n] || (r[n] = {}) : (r[n] || {}).prototype,
				m = g ? o : o[n] || (o[n] = {}),
				y = m.prototype || (m.prototype = {});
			for (u in g && (c = n), c) f = ((l = !p && v && void 0 !== v[u]) ? v : c)[u], d = _ && l ? s(f, r) : h && "function" == typeof f ? s(Function.call, f) : f, v && i(v, u, f, t & e.U), m[u] != f && a(m, u, d), h && y[u] != f && (y[u] = f)
		};
	r.core = o, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) ||
		function(e, t) {
			var n = [],
				r = !0,
				o = !1,
				a = void 0;
			try {
				for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
			} catch (e) {
				o = !0, a = e
			} finally {
				try {
					r || null == s.
					return ||s.
					return ()
				} finally {
					if (o) throw a
				}
			}
			return n
		}(e, t) ||
		function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}()
	}
	function o(e) {
		return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}
	n.r(t);
	var a = new Object(null);

	function i(e) {
		var t = !1,
			n = Date.now();
		if (e.runningRequests.splice(0).forEach(function(r) {
			r.finished || (e.runningRequests.push(r), r.blockingUntil > n && (t |= !0))
		}), !t && e.waitingRequest) {
			var r = e.waitingRequest;
			e.waitingRequest = !1, r.blockingUntil = Date.now() + r.blockingDuration, e.runningRequests.push(r), r.command().then(function() {
				r.finished && console.warn("SHOULD NOT HAPPEN"), r.finished = !0;
				try {
					r.id > e.maxResultId ? (e.maxResultId = r.id, r.success.apply(this, arguments)) : r.failure("Outdated result")
				} finally {
					i(e)
				}
			}, function() {
				r.finished = !0, setTimeout(function() {
					i(e)
				}), r.failure.apply(this, arguments)
			})
		}
	}
	function s(e, t, n) {
		var r = a[e];
		return void 0 === r && (a[e] = r = {
			requestId: 0,
			maxResultId: -10,
			waitingRequest: void 0,
			runningRequests: []
		}), new Promise(function(e, o) {
			var a = {
				id: r.requestId++,
				command: t,
				blockingUntil: void 0,
				blockingDuration: n || 1e3,
				success: e,
				failure: o,
				finished: !1
			},
				c = r.waitingRequest;
			r.waitingRequest = a, c && (c.finished = !0, c.failure(s.FAILURE_REASON__CANCELED)), i(r)
		})
	}
	s.FAILURE_REASON__CANCELED = {
		failure: "FAILURE_REASON__CANCELED"
	}, s.isEmpty = function(e) {
		var t = a[e];
		return !t || (i(t), !t.waitingRequest && !t.runningRequests.length)
	}, s.delayIfEmpty = function(e, t) {
		s.isEmpty() && s(e, function() {
			return new Promise(function(e, n) {
				setTimeout(e, t)
			})
		}, t)
	};
	var c = {
		rawValues: new Object(null),
		values: new Object(null),
		listenerInitialized: !1
	};
	var u = !1,
		l = {
			setVerbose: function(e) {
				return u = e
			},
			createCallOnce: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = [],
					n = function() {
						for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
						for (; t.length > 0;) t.shift().apply(null, n)
					};
				return n.push = function(e) {
					return t.push(e)
				}, e && n.push(e), n
			},
			createDebouncedProcedure: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
					n = 0,
					r = l.createMultiProcedure(),
					a = function e() {
						for (var t = arguments.length, a = new Array(t), i = 0; i < t; i++) a[i] = arguments[i];
						void 0 !== ("undefined" == typeof window ? "undefined" : o(window)) && (n && window.clearTimeout(n), n = window.setTimeout(function() {
							return r.apply(void 0, a)
						}, e.timeout))
					};
				return a.push = r.push, a.timeout = e, t && r.push(t), a
			},
			createMultiProcedure: function() {
				var e = [],
					t = function() {
						for (var t = e.splice(0), n = 0; n < t.length; ++n)"REMOVE" != t[n].apply(null, arguments) && e.push(t[n])
					};
				return t.push = function(t) {
					e.push(t)
				}, t.remove = function(t) {
					var n = e.indexOf(t);
					n < 0 ? console.warn("[U.remove] Callback not found", t) : e.splice(n, 1)
				}, t._procedures = e, t
			},
			value: function(e) {
				var t = e,
					n = l.createMultiProcedure(),
					r = function() {
						if (0 == arguments.length) return t;
						var e = t;
						(t = arguments[0]) !== e && n(t)
					};
				return r.onValueChanged = n, r
			},
			createValues: function(e, t) {
				if (Array.isArray(e)) {
					var n = [];
					return e.forEach(function(e) {
						return n.push(l.value(e))
					}), n
				}
				var r = new Object(null);
				for (var a in e) if (e.hasOwnProperty(a)) {
					var i = e[a];
					t && i && "object" === o(i) || Array.isArray(i) ? r[a] = l.createValues(i) : r[a] = i && "function" == typeof i ? i : l.value(i)
				}
				return r
			},
			executeOnlyLatestWhenDoneProcedure: function() {
				var e, t = !1;
				return function(n) {
					e = n, t ||
					function n() {
						if (e) {
							t = !0;
							var r = e;
							e = void 0, r(n)
						} else t = !1
					}()
				}
			},
			sessionValue: function(e, t) {
				var n = window.sessionStorage.getItem(e),
					r = l.value(null === n ? t : JSON.parse(n));
				return void 0 !== ("undefined" == typeof window ? "undefined" : o(window)) && l.withValue(r, function(t) {
					return window.sessionStorage.setItem(e, JSON.stringify(t))
				}), r
			},
			persistentValue: function(e, t, n) {
				try {
					var r = e.match(/^(?:([^.]*)\.)?(.*)$/),
						o = r[1] || "persistentStorage",
						a = r[2],
						i = "undefined" != typeof window && (c.rawValues[o] || window.localStorage && (c.rawValues[o] = JSON.parse(window.localStorage.getItem(o) || "{}"))) || new Object(null),
						s = c.values[o] || (c.values[o] = new Object(null));
					if (s[a]) return s[a];
					var u = function() {
							if ("undefined" != typeof window) {
								var e = JSON.stringify(i);
								"{}" === e ? window.localStorage && window.localStorage.removeItem(o) : window.localStorage && window.localStorage.setItem(o, e)
							}
						},
						f = [];
					Object.keys(i).forEach(function(e) {
						if (e.endsWith("__%expires")) {
							var t = e.substr(0, e.length - 10);
							(i[e] < Date.now() / 1e3 || void 0 === i[t]) && f.push(t)
						}
					}), f.length && (f.forEach(function(e) {
						delete i[e], delete i[e + "__%expires"]
					}), u());
					var d = l.value(void 0);
					return d.onValueChanged.push(function(e) {
						i[a] = e, n && (i[a + "__%expires"] = Math.floor(Date.now() / 1e3) + n), u()
					}), s[a] = d, d(void 0 === i[a] ? t : i[a]), d
				} catch (e) {
					return console.warn("Could not create persistentValue", e), l.value(t)
				}
			},
			computedValue: function(e, t) {
				var n = l.value(),
					r = Array.isArray(e) ? e : [e];

				function o() {
					n(t.apply(t, r.map(function(e) {
						return e()
					})))
				}
				return o(), r.forEach(function(e) {
					e.onValueChanged && e.onValueChanged.push(o)
				}), n
			},
			isSimilar: function e(t, n) {
				return t === n || o(t) === o(n) && !! t && !! n && (Array.isArray(t) && t.every(function(t, r) {
					return e(t, n[r])
				}) || "object" === o(t) && Object.entries(t).every(function(t) {
					var o = r(t, 2),
						a = o[0],
						i = o[1];
					return e(n[a], i)
				}) && Object.entries(n).every(function(n) {
					var o = r(n, 2),
						a = o[0],
						i = o[1];
					return e(t[a], i)
				}))
			},
			notify: function(e, t) {
				if (l.__listenerRegistry) {
					var n = l.__listenerRegistry[e],
						r = Array.prototype.slice.call(arguments, 1);
					u && console.log("[Event] Notify '" + e + "' -> " + (n ? n._procedures.length : 0) + " listeners", {
						args: r,
						listeners: n ? n._procedures : []
					}), n && n.apply(null, r)
				}
			},
			listenOn: function(e, t) {
				u && console.log("[Event] Listen on '" + e + "'", {
					listener: t
				}), l.__listenerRegistry || (l.__listenerRegistry = new Object(null)), l.__listenerRegistry[e] || (l.__listenerRegistry[e] = l.createMultiProcedure()), l.__listenerRegistry[e].push(t)
			},
			urlWithParameter: function(e, t, n) {
				var r = e.match(/([^?#]*)(\?[^#]*)?(#.*)?$/),
					o = [],
					a = !1;
				return r[2] && r[2].substr(1).split("&").forEach(function(e) {
					e === t || e.startsWith(t + "=") ? (!a && null !== n && o.push(t + "=" + encodeURIComponent(n)), a = !0) : e && o.push(e)
				}), !a && null !== n && o.push(t + "=" + encodeURIComponent(n)), r[1] + (o.length ? "?" + o.join("&") : "") + (r[3] || "")
			},
			urlWithParameters: function(e, t) {
				return Object.keys(t).forEach(function(n) {
					e = l.urlWithParameter(e, n, t[n])
				}), e
			},
			scheduleNonConcurrentRequest: s,
			setTimeout_consolidated: function e(t, n, r) {
				var o = e._timers || (e._timers = new Object(null));
				return o[t] && clearTimeout(o[t]), o[t] = setTimeout(function() {
					o[t] = void 0, n()
				}, r)
			},
			withValue: function(e, t) {
				var n = Array.isArray(e) ? e : [e];

				function r() {
					return t && "REMOVE" === t.apply(null, n.map(function(e) {
						return e()
					})) && (n = t = void 0), t ? void 0 : "REMOVE"
				}
				r(), n && n.forEach(function(e) {
					e.onValueChanged && e.onValueChanged.push(r)
				})
			}
		};
	l.createValueWrapper = l.value, l.createPersistentValueWrapper = l.persistentValue, l.createConnectedValueWrapper = l.computedValue, l.createValueWrappers = l.createValues, "undefined" != typeof window && (window.U = l, window.M && window.M.registerAsync("U", l)), t.
default = l
}, function(e, t, n) {
	"use strict";
	window.M && window.M.registerAsync("$", window.jQuery), t.a = window.jQuery
}, , function(e, t) {
	e.exports = function(e) {
		try {
			return !!e()
		} catch (e) {
			return !0
		}
	}
}, function(e, t) {
	var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
	"number" == typeof __g && (__g = n)
}, function(e, t, n) {
	var r = n(7);
	e.exports = function(e) {
		if (!r(e)) throw TypeError(e + " is not an object!");
		return e
	}
}, function(e, t) {
	function n(e) {
		return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}
	e.exports = function(e) {
		return "object" === n(e) ? null !== e : "function" == typeof e
	}
}, function(e, t, n) {
	var r = n(66)("wks"),
		o = n(37),
		a = n(5).Symbol,
		i = "function" == typeof a;
	(e.exports = function(e) {
		return r[e] || (r[e] = i && a[e] || (i ? a : o)("Symbol." + e))
	}).store = r
}, function(e, t, n) {
	var r = n(6),
		o = n(95),
		a = n(26),
		i = Object.defineProperty;
	t.f = n(11) ? Object.defineProperty : function(e, t, n) {
		if (r(e), t = a(t, !0), r(n), o) try {
			return i(e, t, n)
		} catch (e) {}
		if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
		return "value" in n && (e[t] = n.value), e
	}
}, function(e, t, n) {
	var r = n(25),
		o = Math.min;
	e.exports = function(e) {
		return e > 0 ? o(r(e), 9007199254740991) : 0
	}
}, function(e, t, n) {
	e.exports = !n(4)(function() {
		return 7 != Object.defineProperty({}, "a", {
			get: function() {
				return 7
			}
		}).a
	})
}, function(e, t, n) {
	"use strict";
	n.d(t, "a", function() {
		return i
	});
	var r = n(1);

	function o(e, t) {
		for (var n = 0; n < t.length; n++) {
			var r = t[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
		}
	}
	var a = "[FeatureManager]",
		i = function() {
			function e() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
				!
				function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this._featureEntries = {}, this.dbg = !1, this._nameBasePath = c(t)
			}
			var t, n, i;
			return t = e, (n = [{
				key: "_getFeatureEntry",
				value: function(e) {
					return this._featureEntries[e] || (this._featureEntries[e] = {
						id: e,
						state: void 0,
						onAvailable: void 0,
						value: void 0,
						doLazyResolve: void 0
					})
				}
			}, {
				key: "with",
				value: function(e) {
					var t = this,
						n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
					return new Promise(function(o, a) {
						e = e.map(function(e) {
							return t._resolveName(e)
						});
						var i = (Array.isArray(e) ? e : [e]).map(function(e) {
							return t._getFeatureEntry(e)
						}),
							s = !1;

						function c() {
							if (!s) {
								var e = [],
									t = [];
								return i.forEach(function(n) {
									"resolved" === n.state ? e.push(n.value) : t.push(n)
								}), t.length || (s = !0, n && n.apply(void 0, e), o(e)), t
							}
						}
						var u = c();
						u.length && u.forEach(function(e) {
							return (e.onAvailable || (e.onAvailable = r.
						default.createCallOnce())).push(c)
						})
					})
				}
			}, {
				key: "require",
				value: function(e) {
					var t = this,
						n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
					return new Promise(function(o, i) {
						e = e.map(function(e) {
							return t._resolveName(e)
						});
						var s, c = (Array.isArray(e) ? e : [e]).map(function(e) {
							return t._getFeatureEntry(e)
						}),
							u = !1;

						function l() {
							if (!u) {
								var e = [],
									t = [];
								return c.forEach(function(n) {
									"resolved" === n.state ? e.push(n.value) : t.push(n)
								}), t.length ? t.forEach(function(e) {
									return e.state = "requested"
								}) : (u = !0, s && clearTimeout(s), n && n.apply(void 0, e), o(e)), t
							}
						}
						var f = l();
						f.length && (s = setTimeout(function() {
							return console.error(a, "Required features are not available. ", "\nRequested:", c.map(function(e) {
								return e.id
							}), "\nMissing:", f.filter(function(e) {
								return "resolved" !== e.state
							}).map(function(e) {
								return e.id
							}))
						}, 1e3), f.forEach(function(e) {
							return (e.onAvailable || (e.onAvailable = r.
						default.createCallOnce())).push(l)
						}), f.forEach(function(e) {
							return e.doLazyResolve && e.doLazyResolve()
						}))
					})
				}
			}, {
				key: "define",
				value: function(e, t, n) {
					var r = this;
					e = this._resolveName(e), t = t.map(function(e) {
						return r._resolveName(e)
					});
					var o = this._getFeatureEntry(e);
					void 0 !== o.state && "requested" !== o.state && console.error(a, "Feature '".concat(e, "' already registered:"), o), o.state = "pending", this.require(t, function() {
						for (var t = arguments.length, o = new Array(t), a = 0; a < t; a++) o[a] = arguments[a];
						return r.register(e, n.apply(null, o))
					})
				}
			}, {
				key: "defineFeature_lazy",
				value: function(e, t, n) {
					var o = this;
					e = this._resolveName(e), t = t.map(function(e) {
						return o._resolveName(e)
					});
					var i = this._getFeatureEntry(e);
					"requested" === i.state ? this.define(e, t, n) : (void 0 !== i.state && console.error(a, "Feature '".concat(e, "' already registered:"), i), i.state = "passive", (i.doLazyResolve || (i.doLazyResolve = r.
				default.createCallOnce())).push(function() {
						return o.require(t).then(function(t) {
							return o.register(e, n.apply(null, t))
						})
					}))
				}
			}, {
				key: "register",
				value: function(e, t) {
					e = this._resolveName(e);
					var n = this._getFeatureEntry(e);
					"resolved" === n.state && console.error(a, "Feature '".concat(e, "' already registered:"), n), n.value = t, n.state = "resolved", this.dbg && console.log(a, "New feature '".concat(e, "'"), t), n.onAvailable && n.onAvailable(t)
				}
			}, {
				key: "get",
				value: function(e) {
					return this._getFeatureEntry(this._resolveName(e)).value
				}
			}, {
				key: "_resolveName",
				value: function(e) {
					return c(this._nameBasePath, e)
				}
			}, {
				key: "apply",
				value: function(e) {
					e = this._resolveName(e);
					var t = s.get(e);
					if (!t) throw new Error("[FeatureManager.apply] unknown feature type ".concat(e));
					this.define(e, t.requirements, t.featureInitializer)
				}
			}]) && o(t.prototype, n), i && o(t, i), e
		}(),
		s = new Map;

	function c() {
		return "/" + u.apply(void 0, arguments)
	}
	function u() {
		for (var e = "", t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
		return n.forEach(function(t) {
			return e = t.startsWith("/") ? t : e + "/" + t
		}), l(e)
	}
	function l(e) {
		var t = [];
		return e.split("/").forEach(function(n) {
			if (".." === n) {
				if (!t.length) throw new Error("[cleanupPath] invalid path ".concat(e, " & "));
				t.pop()
			} else "." !== n && n.length && t.push(n)
		}), t.join("/")
	}
	i.defineType = function(e, t, n) {
		e = c(e), s.has(e) ? console.warn("[FeatureManager.defineType] ".concat(e, " is already defined!")) : s.set(e, {
			requirements: t,
			featureInitializer: n
		})
	}, i.defineType("foo/bar", [], function() {
		return console.log("init foo/bar"), "foo/bar"
	}), i._cleanupPath = l, i._joinPath = u, "undefined" != typeof window && window.M && window.M.registerAsync("FeatureManager", i)
}, function(e, t, n) {
	var r = n(28);
	e.exports = function(e) {
		return Object(r(e))
	}
}, function(e, t, n) {
	var r = n(0),
		o = n(4),
		a = n(28),
		i = /"/g,
		s = function(e, t, n, r) {
			var o = String(a(e)),
				s = "<" + t;
			return "" !== n && (s += " " + n + '="' + String(r).replace(i, "&quot;") + '"'), s + ">" + o + "</" + t + ">"
		};
	e.exports = function(e, t) {
		var n = {};
		n[e] = t(s), r(r.P + r.F * o(function() {
			var t = "" [e]('"');
			return t !== t.toLowerCase() || t.split('"').length > 3
		}), "String", n)
	}
}, function(e, t) {
	var n = e.exports = {
		version: "2.6.3"
	};
	"number" == typeof __e && (__e = n)
}, function(e, t, n) {
	var r = n(5),
		o = n(18),
		a = n(17),
		i = n(37)("src"),
		s = Function.toString,
		c = ("" + s).split("toString");
	n(15).inspectSource = function(e) {
		return s.call(e)
	}, (e.exports = function(e, t, n, s) {
		var u = "function" == typeof n;
		u && (a(n, "name") || o(n, "name", t)), e[t] !== n && (u && (a(n, i) || o(n, i, e[t] ? "" + e[t] : c.join(String(t)))), e === r ? e[t] = n : s ? e[t] ? e[t] = n : o(e, t, n) : (delete e[t], o(e, t, n)))
	})(Function.prototype, "toString", function() {
		return "function" == typeof this && this[i] || s.call(this)
	})
}, function(e, t) {
	var n = {}.hasOwnProperty;
	e.exports = function(e, t) {
		return n.call(e, t)
	}
}, function(e, t, n) {
	var r = n(9),
		o = n(36);
	e.exports = n(11) ?
	function(e, t, n) {
		return r.f(e, t, o(1, n))
	} : function(e, t, n) {
		return e[t] = n, e
	}
}, function(e, t, n) {
	var r = n(52),
		o = n(28);
	e.exports = function(e) {
		return r(o(e))
	}
}, function(e, t, n) {
	var r = n(49),
		o = n(36),
		a = n(19),
		i = n(26),
		s = n(17),
		c = n(95),
		u = Object.getOwnPropertyDescriptor;
	t.f = n(11) ? u : function(e, t) {
		if (e = a(e), t = i(t, !0), c) try {
			return u(e, t)
		} catch (e) {}
		if (s(e, t)) return o(!r.f.call(e, t), e[t])
	}
}, function(e, t, n) {
	"use strict";
	var r = n(4);
	e.exports = function(e, t) {
		return !!e && r(function() {
			t ? e.call(null, function() {}, 1) : e.call(null)
		})
	}
}, function(e, t) {
	e.exports = function(e) {
		if ("function" != typeof e) throw TypeError(e + " is not a function!");
		return e
	}
}, function(e, t, n) {
	var r = n(0),
		o = n(15),
		a = n(4);
	e.exports = function(e, t) {
		var n = (o.Object || {})[e] || Object[e],
			i = {};
		i[e] = t(n), r(r.S + r.F * a(function() {
			n(1)
		}), "Object", i)
	}
}, function(e, t, n) {
	var r = n(27),
		o = n(52),
		a = n(13),
		i = n(10),
		s = n(214);
	e.exports = function(e, t) {
		var n = 1 == e,
			c = 2 == e,
			u = 3 == e,
			l = 4 == e,
			f = 6 == e,
			d = 5 == e || f,
			p = t || s;
		return function(t, s, g) {
			for (var h, _, v = a(t), m = o(v), y = r(s, g, 3), T = i(m.length), S = 0, b = n ? p(t, T) : c ? p(t, 0) : void 0; T > S; S++) if ((d || S in m) && (_ = y(h = m[S], S, v), e)) if (n) b[S] = _;
			else if (_) switch (e) {
			case 3:
				return !0;
			case 5:
				return h;
			case 6:
				return S;
			case 2:
				b.push(h)
			} else if (l) return !1;
			return f ? -1 : u || l ? l : b
		}
	}
}, function(e, t) {
	var n = Math.ceil,
		r = Math.floor;
	e.exports = function(e) {
		return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
	}
}, function(e, t, n) {
	var r = n(7);
	e.exports = function(e, t) {
		if (!r(e)) return e;
		var n, o;
		if (t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
		if ("function" == typeof(n = e.valueOf) && !r(o = n.call(e))) return o;
		if (!t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
		throw TypeError("Can't convert object to primitive value")
	}
}, function(e, t, n) {
	var r = n(22);
	e.exports = function(e, t, n) {
		if (r(e), void 0 === t) return e;
		switch (n) {
		case 1:
			return function(n) {
				return e.call(t, n)
			};
		case 2:
			return function(n, r) {
				return e.call(t, n, r)
			};
		case 3:
			return function(n, r, o) {
				return e.call(t, n, r, o)
			}
		}
		return function() {
			return e.apply(t, arguments)
		}
	}
}, function(e, t) {
	e.exports = function(e) {
		if (null == e) throw TypeError("Can't call method on  " + e);
		return e
	}
}, function(e, t, n) {
	"use strict";

	function r(e) {
		return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}
	if (n(11)) {
		var o = n(35),
			a = n(5),
			i = n(4),
			s = n(0),
			c = n(64),
			u = n(88),
			l = n(27),
			f = n(46),
			d = n(36),
			p = n(18),
			g = n(47),
			h = n(25),
			_ = n(10),
			v = n(115),
			m = n(41),
			y = n(26),
			T = n(17),
			S = n(53),
			b = n(7),
			E = n(13),
			w = n(80),
			x = n(39),
			C = n(33),
			A = n(40).f,
			O = n(82),
			L = n(37),
			R = n(8),
			N = n(24),
			P = n(54),
			I = n(50),
			D = n(84),
			k = n(43),
			M = n(57),
			F = n(45),
			U = n(83),
			q = n(108),
			j = n(9),
			G = n(20),
			B = j.f,
			W = G.f,
			V = a.RangeError,
			H = a.TypeError,
			$ = a.Uint8Array,
			Y = Array.prototype,
			J = u.ArrayBuffer,
			z = u.DataView,
			K = N(0),
			Q = N(2),
			X = N(3),
			Z = N(4),
			ee = N(5),
			te = N(6),
			ne = P(!0),
			re = P(!1),
			oe = D.values,
			ae = D.keys,
			ie = D.entries,
			se = Y.lastIndexOf,
			ce = Y.reduce,
			ue = Y.reduceRight,
			le = Y.join,
			fe = Y.sort,
			de = Y.slice,
			pe = Y.toString,
			ge = Y.toLocaleString,
			he = R("iterator"),
			_e = R("toStringTag"),
			ve = L("typed_constructor"),
			me = L("def_constructor"),
			ye = c.CONSTR,
			Te = c.TYPED,
			Se = c.VIEW,
			be = N(1, function(e, t) {
				return Ae(I(e, e[me]), t)
			}),
			Ee = i(function() {
				return 1 === new $(new Uint16Array([1]).buffer)[0]
			}),
			we = !! $ && !! $.prototype.set && i(function() {
				new $(1).set({})
			}),
			xe = function(e, t) {
				var n = h(e);
				if (n < 0 || n % t) throw V("Wrong offset!");
				return n
			},
			Ce = function(e) {
				if (b(e) && Te in e) return e;
				throw H(e + " is not a typed array!")
			},
			Ae = function(e, t) {
				if (!(b(e) && ve in e)) throw H("It is not a typed array constructor!");
				return new e(t)
			},
			Oe = function(e, t) {
				return Le(I(e, e[me]), t)
			},
			Le = function(e, t) {
				for (var n = 0, r = t.length, o = Ae(e, r); r > n;) o[n] = t[n++];
				return o
			},
			Re = function(e, t, n) {
				B(e, t, {
					get: function() {
						return this._d[n]
					}
				})
			},
			Ne = function(e) {
				var t, n, r, o, a, i, s = E(e),
					c = arguments.length,
					u = c > 1 ? arguments[1] : void 0,
					f = void 0 !== u,
					d = O(s);
				if (null != d && !w(d)) {
					for (i = d.call(s), r = [], t = 0; !(a = i.next()).done; t++) r.push(a.value);
					s = r
				}
				for (f && c > 2 && (u = l(u, arguments[2], 2)), t = 0, n = _(s.length), o = Ae(this, n); n > t; t++) o[t] = f ? u(s[t], t) : s[t];
				return o
			},
			Pe = function() {
				for (var e = 0, t = arguments.length, n = Ae(this, t); t > e;) n[e] = arguments[e++];
				return n
			},
			Ie = !! $ && i(function() {
				ge.call(new $(1))
			}),
			De = function() {
				return ge.apply(Ie ? de.call(Ce(this)) : Ce(this), arguments)
			},
			ke = {
				copyWithin: function(e, t) {
					return q.call(Ce(this), e, t, arguments.length > 2 ? arguments[2] : void 0)
				},
				every: function(e) {
					return Z(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0)
				},
				fill: function(e) {
					return U.apply(Ce(this), arguments)
				},
				filter: function(e) {
					return Oe(this, Q(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0))
				},
				find: function(e) {
					return ee(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0)
				},
				findIndex: function(e) {
					return te(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0)
				},
				forEach: function(e) {
					K(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0)
				},
				indexOf: function(e) {
					return re(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0)
				},
				includes: function(e) {
					return ne(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0)
				},
				join: function(e) {
					return le.apply(Ce(this), arguments)
				},
				lastIndexOf: function(e) {
					return se.apply(Ce(this), arguments)
				},
				map: function(e) {
					return be(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0)
				},
				reduce: function(e) {
					return ce.apply(Ce(this), arguments)
				},
				reduceRight: function(e) {
					return ue.apply(Ce(this), arguments)
				},
				reverse: function() {
					for (var e, t = Ce(this).length, n = Math.floor(t / 2), r = 0; r < n;) e = this[r], this[r++] = this[--t], this[t] = e;
					return this
				},
				some: function(e) {
					return X(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0)
				},
				sort: function(e) {
					return fe.call(Ce(this), e)
				},
				subarray: function(e, t) {
					var n = Ce(this),
						r = n.length,
						o = m(e, r);
					return new(I(n, n[me]))(n.buffer, n.byteOffset + o * n.BYTES_PER_ELEMENT, _((void 0 === t ? r : m(t, r)) - o))
				}
			},
			Me = function(e, t) {
				return Oe(this, de.call(Ce(this), e, t))
			},
			Fe = function(e) {
				Ce(this);
				var t = xe(arguments[1], 1),
					n = this.length,
					r = E(e),
					o = _(r.length),
					a = 0;
				if (o + t > n) throw V("Wrong length!");
				for (; a < o;) this[t + a] = r[a++]
			},
			Ue = {
				entries: function() {
					return ie.call(Ce(this))
				},
				keys: function() {
					return ae.call(Ce(this))
				},
				values: function() {
					return oe.call(Ce(this))
				}
			},
			qe = function(e, t) {
				return b(e) && e[Te] && "symbol" != r(t) && t in e && String(+t) == String(t)
			},
			je = function(e, t) {
				return qe(e, t = y(t, !0)) ? d(2, e[t]) : W(e, t)
			},
			Ge = function(e, t, n) {
				return !(qe(e, t = y(t, !0)) && b(n) && T(n, "value")) || T(n, "get") || T(n, "set") || n.configurable || T(n, "writable") && !n.writable || T(n, "enumerable") && !n.enumerable ? B(e, t, n) : (e[t] = n.value, e)
			};
		ye || (G.f = je, j.f = Ge), s(s.S + s.F * !ye, "Object", {
			getOwnPropertyDescriptor: je,
			defineProperty: Ge
		}), i(function() {
			pe.call({})
		}) && (pe = ge = function() {
			return le.call(this)
		});
		var Be = g({}, ke);
		g(Be, Ue), p(Be, he, Ue.values), g(Be, {
			slice: Me,
			set: Fe,
			constructor: function() {},
			toString: pe,
			toLocaleString: De
		}), Re(Be, "buffer", "b"), Re(Be, "byteOffset", "o"), Re(Be, "byteLength", "l"), Re(Be, "length", "e"), B(Be, _e, {
			get: function() {
				return this[Te]
			}
		}), e.exports = function(e, t, n, r) {
			var u = e + ((r = !! r) ? "Clamped" : "") + "Array",
				l = "get" + e,
				d = "set" + e,
				g = a[u],
				h = g || {},
				m = g && C(g),
				y = !g || !c.ABV,
				T = {},
				E = g && g.prototype,
				w = function(e, n) {
					B(e, n, {
						get: function() {
							return function(e, n) {
								var r = e._d;
								return r.v[l](n * t + r.o, Ee)
							}(this, n)
						},
						set: function(e) {
							return function(e, n, o) {
								var a = e._d;
								r && (o = (o = Math.round(o)) < 0 ? 0 : o > 255 ? 255 : 255 & o), a.v[d](n * t + a.o, o, Ee)
							}(this, n, e)
						},
						enumerable: !0
					})
				};
			y ? (g = n(function(e, n, r, o) {
				f(e, g, u, "_d");
				var a, i, s, c, l = 0,
					d = 0;
				if (b(n)) {
					if (!(n instanceof J || "ArrayBuffer" == (c = S(n)) || "SharedArrayBuffer" == c)) return Te in n ? Le(g, n) : Ne.call(g, n);
					a = n, d = xe(r, t);
					var h = n.byteLength;
					if (void 0 === o) {
						if (h % t) throw V("Wrong length!");
						if ((i = h - d) < 0) throw V("Wrong length!")
					} else if ((i = _(o) * t) + d > h) throw V("Wrong length!");
					s = i / t
				} else s = v(n), a = new J(i = s * t);
				for (p(e, "_d", {
					b: a,
					o: d,
					l: i,
					e: s,
					v: new z(a)
				}); l < s;) w(e, l++)
			}), E = g.prototype = x(Be), p(E, "constructor", g)) : i(function() {
				g(1)
			}) && i(function() {
				new g(-1)
			}) && M(function(e) {
				new g, new g(null), new g(1.5), new g(e)
			}, !0) || (g = n(function(e, n, r, o) {
				var a;
				return f(e, g, u), b(n) ? n instanceof J || "ArrayBuffer" == (a = S(n)) || "SharedArrayBuffer" == a ? void 0 !== o ? new h(n, xe(r, t), o) : void 0 !== r ? new h(n, xe(r, t)) : new h(n) : Te in n ? Le(g, n) : Ne.call(g, n) : new h(v(n))
			}), K(m !== Function.prototype ? A(h).concat(A(m)) : A(h), function(e) {
				e in g || p(g, e, h[e])
			}), g.prototype = E, o || (E.constructor = g));
			var O = E[he],
				L = !! O && ("values" == O.name || null == O.name),
				R = Ue.values;
			p(g, ve, !0), p(E, Te, u), p(E, Se, !0), p(E, me, g), (r ? new g(1)[_e] == u : _e in E) || B(E, _e, {
				get: function() {
					return u
				}
			}), T[u] = g, s(s.G + s.W + s.F * (g != h), T), s(s.S, u, {
				BYTES_PER_ELEMENT: t
			}), s(s.S + s.F * i(function() {
				h.of.call(g, 1)
			}), u, {
				from: Ne,
				of: Pe
			}), "BYTES_PER_ELEMENT" in E || p(E, "BYTES_PER_ELEMENT", t), s(s.P, u, ke), F(u), s(s.P + s.F * we, u, {
				set: Fe
			}), s(s.P + s.F * !L, u, Ue), o || E.toString == pe || (E.toString = pe), s(s.P + s.F * i(function() {
				new g(1).slice()
			}), u, {
				slice: Me
			}), s(s.P + s.F * (i(function() {
				return [1, 2].toLocaleString() != new g([1, 2]).toLocaleString()
			}) || !i(function() {
				E.toLocaleString.call([1, 2])
			})), u, {
				toLocaleString: De
			}), k[u] = L ? O : R, o || L || p(E, he, R)
		}
	} else e.exports = function() {}
}, , function(e, t, n) {
	function r(e) {
		return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}
	var o = n(37)("meta"),
		a = n(7),
		i = n(17),
		s = n(9).f,
		c = 0,
		u = Object.isExtensible ||
	function() {
		return !0
	}, l = !n(4)(function() {
		return u(Object.preventExtensions({}))
	}), f = function(e) {
		s(e, o, {
			value: {
				i: "O" + ++c,
				w: {}
			}
		})
	}, d = e.exports = {
		KEY: o,
		NEED: !1,
		fastKey: function(e, t) {
			if (!a(e)) return "symbol" == r(e) ? e : ("string" == typeof e ? "S" : "P") + e;
			if (!i(e, o)) {
				if (!u(e)) return "F";
				if (!t) return "E";
				f(e)
			}
			return e[o].i
		},
		getWeak: function(e, t) {
			if (!i(e, o)) {
				if (!u(e)) return !0;
				if (!t) return !1;
				f(e)
			}
			return e[o].w
		},
		onFreeze: function(e) {
			return l && d.NEED && u(e) && !i(e, o) && f(e), e
		}
	}
}, function(e, t) {
	var n = {}.toString;
	e.exports = function(e) {
		return n.call(e).slice(8, -1)
	}
}, function(e, t, n) {
	var r = n(17),
		o = n(13),
		a = n(67)("IE_PROTO"),
		i = Object.prototype;
	e.exports = Object.getPrototypeOf ||
	function(e) {
		return e = o(e), r(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? i : null
	}
}, function(e, t, n) {
	"use strict";
	n.r(t);
	n(282).
default;
	"undefined" != typeof window && window.M && window.M.registerAsync("LMT_Utils", i()), t.
default = i();
	var r = /\s+/g,
		o = /\s+(?=\S|$)|[^\s？。．！]+(?=[\s？。．！]|$)|[ ？。．！]/g;

	function a(e) {
		var t = [];
		return e.replace(o, function(e, n) {
			t.push({
				isWhitespacePart: !! e.match(/\s/),
				text: e
			})
		}), t
	}
	function i() {
		return {
			collapseWhitespaces: function(e) {
				return e.replace(r, " ")
			},
			dev_sealProxy: function(e) {
				return window.dl_pageState && window.dl_pageState.devMode && window.Proxy ? new Proxy(e, {
					get: function(e, t) {
						if (t in e) return e[t];
						throw new Error("[dev_sealProxy] Property error '" + t + "'")
					},
					set: function(e, t, n) {
						if (e.hasOwnProperty(t)) return e[t] = n, !0;
						throw new Error("[dev_sealProxy] Can't set property '" + t + "' on sealed object.")
					}
				}) : e
			},
			getStringChangeRange: function(e, t) {
				for (var n = e.split("\n"), r = t.split("\n"), o = 0; n.length && n[n.length - 1] === r[r.length - 1];) n.pop(), r.pop();
				for (; n.length && n[0] === r[0];) o += n[0].length + 1, n.shift(), r.shift();
				var a = "",
					i = "";
				if (n.length) {
					for (var s = n.join("\n"), c = r.join("\n"), u = 0; u < s.length && s.charAt(u) === c.charAt(u);)++u, ++o;
					for (var l = s.length - 1, f = c.length - 1; l >= u && f >= u && s.charAt(l) === c.charAt(f);)--l, --f;
					a = s.substr(u, l - u + 1), i = c.substr(u, f - u + 1)
				}
				return [o, a, i]
			},
			splitIntoBatches: function(e, t, n) {
				var r = [],
					o = 0,
					a = [];
				return e.forEach(function(e, i) {
					var s = n ? n(e, i) : 1;
					o + s <= t || 0 == a.length ? o += s : (r.push(a), o = s, a = []), a.push(e)
				}), a.length && r.push(a), r
			},
			splitTextIntoParts: a,
			getOffsetForNormalizedOffset: function(e, t) {
				for (var n = 0, r = a(e), o = r.length, i = 0; i < o; i += 1) {
					var s = r[i];
					if (n += s.text.length, s.isWhitespacePart ? t -= 0 === i ? 0 : 1 : t -= s.text.length, t <= 0) return n += t < 0 ? t : 0
				}
			},
			createThrottledEventHandler: function(e, t) {
				var n = 0;
				return function() {
					var r = (new Date).getTime();
					if (!(r - n < e)) return n = r, t.apply(void 0, arguments)
				}
			},
			PersistStorage: function() {
				var e, t;
				if ("undefined" != typeof window && window.localStorage && window.localStorage.getItem && window.localStorage.setItem) e = function(e, t) {
					window.localStorage.setItem(e, t)
				}, t = function(e) {
					return window.localStorage.getItem(e)
				};
				else {
					var n = new Object(null);
					e = function(e, t) {
						n[e] = t
					}, t = function(e) {
						return n[e]
					}
				}
				return {
					getValue: function(e, n) {
						try {
							var r = JSON.parse(t(e) || "")
						} catch (e) {
							return n
						}
						return void 0 === r ? n : r
					},
					setValue: function(t, n) {
						e(t, JSON.stringify(n))
					}
				}
			}(),
			toXML: function(e) {
				var t = [];

				function n(e) {
					return e ? Object.keys(e).map(function(t) {
						return " " + t + '="' + e[t] + '"'
					}).join("") : ""
				}
				function r(e) {
					for (var t = "", n = e; n > 0; --n) t += " ";
					return t
				}
				function o(e) {
					return ("" + e).replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;")
				}
				return function e(t, a, i) {
					Array.isArray(a) ? a.forEach(function(n) {
						return e(t, n, i)
					}) : a.meta ? t.push(r(i) + "<?" + a.meta + n(a.attr) + "?>") : a.tag ? a.content && "string" == typeof a.content ? t.push(r(i) + "<" + a.tag + n(a.attr) + ">" + o(a.content) + "</" + a.tag + ">") : (t.push(r(i) + "<" + a.tag + n(a.attr) + ">"), a.content && e(t, a.content, i + 1), t.push(r(i) + "</" + a.tag + ">")) : a && t.push(r(i) + o(a))
				}(t, e, 0), t.join("\n")
			}
		}
	}
}, function(e, t) {
	e.exports = !1
}, function(e, t) {
	e.exports = function(e, t) {
		return {
			enumerable: !(1 & e),
			configurable: !(2 & e),
			writable: !(4 & e),
			value: t
		}
	}
}, function(e, t) {
	var n = 0,
		r = Math.random();
	e.exports = function(e) {
		return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
	}
}, function(e, t, n) {
	var r = n(97),
		o = n(68);
	e.exports = Object.keys ||
	function(e) {
		return r(e, o)
	}
}, function(e, t, n) {
	var r = n(6),
		o = n(98),
		a = n(68),
		i = n(67)("IE_PROTO"),
		s = function() {},
		c = function() {
			var e, t = n(65)("iframe"),
				r = a.length;
			for (t.style.display = "none", n(91).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), c = e.F; r--;) delete c.prototype[a[r]];
			return c()
		};
	e.exports = Object.create ||
	function(e, t) {
		var n;
		return null !== e ? (s.prototype = r(e), n = new s, s.prototype = null, n[i] = e) : n = c(), void 0 === t ? n : o(n, t)
	}
}, function(e, t, n) {
	var r = n(97),
		o = n(68).concat("length", "prototype");
	t.f = Object.getOwnPropertyNames ||
	function(e) {
		return r(e, o)
	}
}, function(e, t, n) {
	var r = n(25),
		o = Math.max,
		a = Math.min;
	e.exports = function(e, t) {
		return (e = r(e)) < 0 ? o(e + t, 0) : a(e, t)
	}
}, function(e, t, n) {
	var r = n(9).f,
		o = n(17),
		a = n(8)("toStringTag");
	e.exports = function(e, t, n) {
		e && !o(e = n ? e : e.prototype, a) && r(e, a, {
			configurable: !0,
			value: t
		})
	}
}, function(e, t) {
	e.exports = {}
}, function(e, t, n) {
	var r = n(8)("unscopables"),
		o = Array.prototype;
	null == o[r] && n(18)(o, r, {}), e.exports = function(e) {
		o[r][e] = !0
	}
}, function(e, t, n) {
	"use strict";
	var r = n(5),
		o = n(9),
		a = n(11),
		i = n(8)("species");
	e.exports = function(e) {
		var t = r[e];
		a && t && !t[i] && o.f(t, i, {
			configurable: !0,
			get: function() {
				return this
			}
		})
	}
}, function(e, t) {
	e.exports = function(e, t, n, r) {
		if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
		return e
	}
}, function(e, t, n) {
	var r = n(16);
	e.exports = function(e, t, n) {
		for (var o in t) r(e, o, t[o], n);
		return e
	}
}, function(e, t, n) {
	var r = n(7);
	e.exports = function(e, t) {
		if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
		return e
	}
}, function(e, t) {
	t.f = {}.propertyIsEnumerable
}, function(e, t, n) {
	var r = n(6),
		o = n(22),
		a = n(8)("species");
	e.exports = function(e, t) {
		var n, i = r(e).constructor;
		return void 0 === i || null == (n = r(i)[a]) ? t : o(n)
	}
}, function(e, t, n) {
	"use strict";
	n.r(t);
	var r = n(93),
		o = n(2),
		a = n(1),
		i = /^\n*[^\n]+\n|.*$/,
		s = {
			applyTextareaStyleToOverlay: function(e, t, n) {
				var r = Object(o.a)(e),
					a = Object(o.a)(t),
					i = r.hasClass("lmt__textarea--iOSTextareaFix"),
					s = r.dlCSS("font-family", "font-size", "font-stretch", "font-weight", "line-height", "margin", "overflow-x", "overflow-y", "padding-bottom", "padding-left", "padding-right", "padding-top"),
					c = "number" == typeof n ? n : r.height(),
					u = r[0].getBoundingClientRect().width - (i ? 6 : 0);
				a.attr("lang", r.attr("lang")).css(s).height(c).innerWidth(u), i && a.css("padding-left", parseInt(a.css("padding-left")) + 3 + "px")
			},
			copyTextFromInputElement: function(e) {
				var t = Object(o.a)(e);
				return navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(t.val()) : new Promise(function(e, n) {
					var o = a.
				default.createCallOnce();
					if (t.focus().get(0).select(), r.
				default.isIPad || r.
				default.isIPhone) {
						var i = document.createRange();
						i.selectNodeContents(t[0]);
						var s = window.getSelection();
						s.removeAllRanges(), s.addRange(i), t[0].setSelectionRange(0, 9999999), o.push(function() {
							t.attr("contentEditable", !1)
						})
					}
					try {
						document.execCommand("copy") ? (o(), e()) : (o(), n("Could not copy."))
					} catch (e) {
						o(), console.warn("Unable to copy"), n(e)
					}
				})
			},
			copyToClipboard: function(e, t) {
				return navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(e) : new Promise(function(n, r) {
					var a = Object(o.a)("<textarea id='tmp'></textarea>").css({
						position: "absolute",
						opacity: 0,
						left: 0,
						width: "100px"
					}).appendTo(t || Object(o.a)("body")).val(e);
					setTimeout(function() {
						a.remove()
					}, 1e3), s.copyTextFromInputElement(a).then(function(e) {
						a.remove(), n(e)
					}, function(e) {
						a.remove(), console.warn(e), r(e)
					})
				})
			},
			getWindowWidth: function() {
				return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
			},
			_getTextareaTextPositionDummy: function(e, t) {
				var n = Object(o.a)(e),
					r = n.data("_posDummy");
				if (!r) {
					var a = Object(o.a)("<div></div>").addClass("lmt__textarea_base_style").css({
						position: "absolute",
						transform: "translate(-500%, -500%)"
					}).appendTo(n.parent());
					t && a.css({
						transform: "translate(0%, 0%)",
						top: "300px",
						"background-color": "#fff",
						outline: "2px solid red",
						"z-index": 2e3
					});
					var i = Object(o.a)("<span></span>").css("outline", "1px solid green").appendTo(a),
						s = Object(o.a)("<span></span>").css("outline", "1px solid red").css("display", "inline-block").css("position", "relative").css("height", "1em").appendTo(a),
						c = Object(o.a)("<span></span>").css("outline", "1px solid blue").appendTo(a);
					r = {
						$container: a,
						$prefix: i,
						$marker: s,
						$postfix: c,
						getPixelOffset: function(e, t) {
							var r = n.hasClass("lmt__textarea--iOSTextareaFix");
							a.css(n.dlCSS("padding-top", "padding-bottom", "padding-left", "padding-right", "margin", "overflow-x", "overflow-y", "font-family", "font-size", "font-stretch", "font-weight")).css("line-height", n.css("line-height")).height(n.height()).innerWidth(n[0].getBoundingClientRect().width - (r ? 6 : 0)), r && a.css("padding-left", parseInt(a.css("padding-left")) + 3 + "px"), i.text(e), c.text(t);
							var o = s.position();
							return o.top <= 1 && o.left <= 1 && (o = c.position()), o.top -= n.scrollTop(), o
						}
					}, n.data("_posDummy", r)
				}
				return r
			},
			getTextareaPixelOffsetForCursorOffset: function(e, t, n) {
				var r = Object(o.a)(e).val();
				return s._getTextareaTextPositionDummy(e, n).getPixelOffset(r.substr(0, t), r.substr(t).match(i)[0])
			},
			smoothScroll: function(e, t) {
				var n = Math.min(t, e.scrollHeight - e.clientHeight),
					r = Date.now(),
					o = Date.now() + 2e3,
					a = e.scrollTop;
				!
				function t() {
					var i = Date.now(),
						s = e.scrollTop;
					if (a !== s && e.parentElement.querySelector(":hover"));
					else if (i > o || Math.abs(s - n) < 1) e.scrollTop = n;
					else {
						var c = i - r;
						r = i;
						var u = .8 * s + .2 * n - s;
						(u = Math.max(.7 * -c, Math.min(.7 * c, u))) > 0 && u < 1 ? u = 1 : u < 0 && u > -1 && (u = -1), e.scrollTop = s + u, a = e.scrollTop, requestAnimationFrame(t)
					}
				}()
			}
		};
	window.M && window.M.registerAsync("LMT_UI_Utils", s), t.
default = s
}, function(e, t, n) {
	var r = n(32);
	e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
		return "String" == r(e) ? e.split("") : Object(e)
	}
}, function(e, t, n) {
	var r = n(32),
		o = n(8)("toStringTag"),
		a = "Arguments" == r(function() {
			return arguments
		}());
	e.exports = function(e) {
		var t, n, i;
		return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
			try {
				return e[t]
			} catch (e) {}
		}(t = Object(e), o)) ? n : a ? r(t) : "Object" == (i = r(t)) && "function" == typeof t.callee ? "Arguments" : i
	}
}, function(e, t, n) {
	var r = n(19),
		o = n(10),
		a = n(41);
	e.exports = function(e) {
		return function(t, n, i) {
			var s, c = r(t),
				u = o(c.length),
				l = a(i, u);
			if (e && n != n) {
				for (; u > l;) if ((s = c[l++]) != s) return !0
			} else for (; u > l; l++) if ((e || l in c) && c[l] === n) return e || l || 0;
			return !e && -1
		}
	}
}, function(e, t) {
	t.f = Object.getOwnPropertySymbols
}, function(e, t, n) {
	var r = n(0),
		o = n(28),
		a = n(4),
		i = n(71),
		s = "[" + i + "]",
		c = RegExp("^" + s + s + "*"),
		u = RegExp(s + s + "*$"),
		l = function(e, t, n) {
			var o = {},
				s = a(function() {
					return !!i[e]() || "​" != "​" [e]()
				}),
				c = o[e] = s ? t(f) : i[e];
			n && (o[n] = c), r(r.P + r.F * s, "String", o)
		},
		f = l.trim = function(e, t) {
			return e = String(o(e)), 1 & t && (e = e.replace(c, "")), 2 & t && (e = e.replace(u, "")), e
		};
	e.exports = l
}, function(e, t, n) {
	var r = n(8)("iterator"),
		o = !1;
	try {
		var a = [7][r]();
		a.
		return = function() {
			o = !0
		}, Array.from(a, function() {
			throw 2
		})
	} catch (e) {}
	e.exports = function(e, t) {
		if (!t && !o) return !1;
		var n = !1;
		try {
			var a = [7],
				i = a[r]();
			i.next = function() {
				return {
					done: n = !0
				}
			}, a[r] = function() {
				return i
			}, e(a)
		} catch (e) {}
		return n
	}
}, function(e, t, n) {
	"use strict";
	var r = n(6);
	e.exports = function() {
		var e = r(this),
			t = "";
		return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
	}
}, function(e, t, n) {
	"use strict";

	function r(e) {
		return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}
	var o = n(53),
		a = RegExp.prototype.exec;
	e.exports = function(e, t) {
		var n = e.exec;
		if ("function" == typeof n) {
			var i = n.call(e, t);
			if ("object" !== r(i)) throw new TypeError("RegExp exec method returned something other than an Object or null");
			return i
		}
		if ("RegExp" !== o(e)) throw new TypeError("RegExp#exec called on incompatible receiver");
		return a.call(e, t)
	}
}, function(e, t, n) {
	"use strict";
	n(125);
	var r = n(16),
		o = n(18),
		a = n(4),
		i = n(28),
		s = n(8),
		c = n(85),
		u = s("species"),
		l = !a(function() {
			var e = /./;
			return e.exec = function() {
				var e = [];
				return e.groups = {
					a: "7"
				}, e
			}, "7" !== "".replace(e, "$<a>")
		}),
		f = function() {
			var e = /(?:)/,
				t = e.exec;
			e.exec = function() {
				return t.apply(this, arguments)
			};
			var n = "ab".split(e);
			return 2 === n.length && "a" === n[0] && "b" === n[1]
		}();
	e.exports = function(e, t, n) {
		var d = s(e),
			p = !a(function() {
				var t = {};
				return t[d] = function() {
					return 7
				}, 7 != "" [e](t)
			}),
			g = p ? !a(function() {
				var t = !1,
					n = /a/;
				return n.exec = function() {
					return t = !0, null
				}, "split" === e && (n.constructor = {}, n.constructor[u] = function() {
					return n
				}), n[d](""), !t
			}) : void 0;
		if (!p || !g || "replace" === e && !l || "split" === e && !f) {
			var h = /./ [d],
				_ = n(i, d, "" [e], function(e, t, n, r, o) {
					return t.exec === c ? p && !o ? {
						done: !0,
						value: h.call(t, n, r)
					} : {
						done: !0,
						value: e.call(n, t, r)
					} : {
						done: !1
					}
				}),
				v = _[0],
				m = _[1];
			r(String.prototype, e, v), o(RegExp.prototype, d, 2 == t ?
			function(e, t) {
				return m.call(e, this, t)
			} : function(e) {
				return m.call(e, this)
			})
		}
	}
}, function(e, t, n) {
	var r = n(27),
		o = n(106),
		a = n(80),
		i = n(6),
		s = n(10),
		c = n(82),
		u = {},
		l = {};
	(t = e.exports = function(e, t, n, f, d) {
		var p, g, h, _, v = d ?
		function() {
			return e
		} : c(e), m = r(n, f, t ? 2 : 1), y = 0;
		if ("function" != typeof v) throw TypeError(e + " is not iterable!");
		if (a(v)) {
			for (p = s(e.length); p > y; y++) if ((_ = t ? m(i(g = e[y])[0], g[1]) : m(e[y])) === u || _ === l) return _
		} else for (h = v.call(e); !(g = h.next()).done;) if ((_ = o(h, m, g.value, t)) === u || _ === l) return _
	}).BREAK = u, t.RETURN = l
}, function(e, t, n) {
	var r = n(5).navigator;
	e.exports = r && r.userAgent || ""
}, function(e, t, n) {
	"use strict";
	var r = n(5),
		o = n(0),
		a = n(16),
		i = n(47),
		s = n(31),
		c = n(61),
		u = n(46),
		l = n(7),
		f = n(4),
		d = n(57),
		p = n(42),
		g = n(72);
	e.exports = function(e, t, n, h, _, v) {
		var m = r[e],
			y = m,
			T = _ ? "set" : "add",
			S = y && y.prototype,
			b = {},
			E = function(e) {
				var t = S[e];
				a(S, e, "delete" == e ?
				function(e) {
					return !(v && !l(e)) && t.call(this, 0 === e ? 0 : e)
				} : "has" == e ?
				function(e) {
					return !(v && !l(e)) && t.call(this, 0 === e ? 0 : e)
				} : "get" == e ?
				function(e) {
					return v && !l(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
				} : "add" == e ?
				function(e) {
					return t.call(this, 0 === e ? 0 : e), this
				} : function(e, n) {
					return t.call(this, 0 === e ? 0 : e, n), this
				})
			};
		if ("function" == typeof y && (v || S.forEach && !f(function() {
			(new y).entries().next()
		}))) {
			var w = new y,
				x = w[T](v ? {} : -0, 1) != w,
				C = f(function() {
					w.has(1)
				}),
				A = d(function(e) {
					new y(e)
				}),
				O = !v && f(function() {
					for (var e = new y, t = 5; t--;) e[T](t, t);
					return !e.has(-0)
				});
			A || ((y = t(function(t, n) {
				u(t, y, e);
				var r = g(new m, t, y);
				return null != n && c(n, _, r[T], r), r
			})).prototype = S, S.constructor = y), (C || O) && (E("delete"), E("has"), _ && E("get")), (O || x) && E(T), v && S.clear && delete S.clear
		} else y = h.getConstructor(t, e, _, T), i(y.prototype, n), s.NEED = !0;
		return p(y, e), b[e] = y, o(o.G + o.W + o.F * (y != m), b), v || h.setStrong(y, e, _), y
	}
}, function(e, t, n) {
	for (var r, o = n(5), a = n(18), i = n(37), s = i("typed_array"), c = i("view"), u = !(!o.ArrayBuffer || !o.DataView), l = u, f = 0, d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9;)(r = o[d[f++]]) ? (a(r.prototype, s, !0), a(r.prototype, c, !0)) : l = !1;
	e.exports = {
		ABV: u,
		CONSTR: l,
		TYPED: s,
		VIEW: c
	}
}, function(e, t, n) {
	var r = n(7),
		o = n(5).document,
		a = r(o) && r(o.createElement);
	e.exports = function(e) {
		return a ? o.createElement(e) : {}
	}
}, function(e, t, n) {
	var r = n(15),
		o = n(5),
		a = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
	(e.exports = function(e, t) {
		return a[e] || (a[e] = void 0 !== t ? t : {})
	})("versions", []).push({
		version: r.version,
		mode: n(35) ? "pure" : "global",
		copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
	})
}, function(e, t, n) {
	var r = n(66)("keys"),
		o = n(37);
	e.exports = function(e) {
		return r[e] || (r[e] = o(e))
	}
}, function(e, t) {
	e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t, n) {
	var r = n(32);
	e.exports = Array.isArray ||
	function(e) {
		return "Array" == r(e)
	}
}, function(e, t, n) {
	var r = n(7),
		o = n(6),
		a = function(e, t) {
			if (o(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
		};
	e.exports = {
		set: Object.setPrototypeOf || ("__proto__" in {} ?
		function(e, t, r) {
			try {
				(r = n(27)(Function.call, n(20).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
			} catch (e) {
				t = !0
			}
			return function(e, n) {
				return a(e, n), t ? e.__proto__ = n : r(e, n), e
			}
		}({}, !1) : void 0),
		check: a
	}
}, function(e, t) {
	e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}, function(e, t, n) {
	var r = n(7),
		o = n(70).set;
	e.exports = function(e, t, n) {
		var a, i = t.constructor;
		return i !== n && "function" == typeof i && (a = i.prototype) !== n.prototype && r(a) && o && o(e, a), e
	}
}, function(e, t) {
	e.exports = Math.sign ||
	function(e) {
		return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
	}
}, function(e, t) {
	var n = Math.expm1;
	e.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17) ?
	function(e) {
		return 0 == (e = +e) ? e : e > -1e-6 && e < 1e-6 ? e + e * e / 2 : Math.exp(e) - 1
	} : n
}, function(e, t, n) {
	var r = n(25),
		o = n(28);
	e.exports = function(e) {
		return function(t, n) {
			var a, i, s = String(o(t)),
				c = r(n),
				u = s.length;
			return c < 0 || c >= u ? e ? "" : void 0 : (a = s.charCodeAt(c)) < 55296 || a > 56319 || c + 1 === u || (i = s.charCodeAt(c + 1)) < 56320 || i > 57343 ? e ? s.charAt(c) : a : e ? s.slice(c, c + 2) : i - 56320 + (a - 55296 << 10) + 65536
		}
	}
}, function(e, t, n) {
	"use strict";
	var r = n(35),
		o = n(0),
		a = n(16),
		i = n(18),
		s = n(43),
		c = n(124),
		u = n(42),
		l = n(33),
		f = n(8)("iterator"),
		d = !([].keys && "next" in [].keys()),
		p = function() {
			return this
		};
	e.exports = function(e, t, n, g, h, _, v) {
		c(n, t, g);
		var m, y, T, S = function(e) {
				if (!d && e in x) return x[e];
				switch (e) {
				case "keys":
				case "values":
					return function() {
						return new n(this, e)
					}
				}
				return function() {
					return new n(this, e)
				}
			},
			b = t + " Iterator",
			E = "values" == h,
			w = !1,
			x = e.prototype,
			C = x[f] || x["@@iterator"] || h && x[h],
			A = C || S(h),
			O = h ? E ? S("entries") : A : void 0,
			L = "Array" == t && x.entries || C;
		if (L && (T = l(L.call(new e))) !== Object.prototype && T.next && (u(T, b, !0), r || "function" == typeof T[f] || i(T, f, p)), E && C && "values" !== C.name && (w = !0, A = function() {
			return C.call(this)
		}), r && !v || !d && !w && x[f] || i(x, f, A), s[t] = A, s[b] = p, h) if (m = {
			values: E ? A : S("values"),
			keys: _ ? A : S("keys"),
			entries: O
		}, v) for (y in m) y in x || a(x, y, m[y]);
		else o(o.P + o.F * (d || w), t, m);
		return m
	}
}, function(e, t, n) {
	var r = n(78),
		o = n(28);
	e.exports = function(e, t, n) {
		if (r(t)) throw TypeError("String#" + n + " doesn't accept regex!");
		return String(o(e))
	}
}, function(e, t, n) {
	var r = n(7),
		o = n(32),
		a = n(8)("match");
	e.exports = function(e) {
		var t;
		return r(e) && (void 0 !== (t = e[a]) ? !! t : "RegExp" == o(e))
	}
}, function(e, t, n) {
	var r = n(8)("match");
	e.exports = function(e) {
		var t = /./;
		try {
			"/./" [e](t)
		} catch (n) {
			try {
				return t[r] = !1, !"/./" [e](t)
			} catch (e) {}
		}
		return !0
	}
}, function(e, t, n) {
	var r = n(43),
		o = n(8)("iterator"),
		a = Array.prototype;
	e.exports = function(e) {
		return void 0 !== e && (r.Array === e || a[o] === e)
	}
}, function(e, t, n) {
	"use strict";
	var r = n(9),
		o = n(36);
	e.exports = function(e, t, n) {
		t in e ? r.f(e, t, o(0, n)) : e[t] = n
	}
}, function(e, t, n) {
	var r = n(53),
		o = n(8)("iterator"),
		a = n(43);
	e.exports = n(15).getIteratorMethod = function(e) {
		if (null != e) return e[o] || e["@@iterator"] || a[r(e)]
	}
}, function(e, t, n) {
	"use strict";
	var r = n(13),
		o = n(41),
		a = n(10);
	e.exports = function(e) {
		for (var t = r(this), n = a(t.length), i = arguments.length, s = o(i > 1 ? arguments[1] : void 0, n), c = i > 2 ? arguments[2] : void 0, u = void 0 === c ? n : o(c, n); u > s;) t[s++] = e;
		return t
	}
}, function(e, t, n) {
	"use strict";
	var r = n(44),
		o = n(109),
		a = n(43),
		i = n(19);
	e.exports = n(76)(Array, "Array", function(e, t) {
		this._t = i(e), this._i = 0, this._k = t
	}, function() {
		var e = this._t,
			t = this._k,
			n = this._i++;
		return !e || n >= e.length ? (this._t = void 0, o(1)) : o(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
	}, "values"), a.Arguments = a.Array, r("keys"), r("values"), r("entries")
}, function(e, t, n) {
	"use strict";
	var r, o, a = n(58),
		i = RegExp.prototype.exec,
		s = String.prototype.replace,
		c = i,
		u = (r = /a/, o = /b*/g, i.call(r, "a"), i.call(o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
		l = void 0 !== /()??/.exec("")[1];
	(u || l) && (c = function(e) {
		var t, n, r, o, c = this;
		return l && (n = new RegExp("^" + c.source + "$(?!\\s)", a.call(c))), u && (t = c.lastIndex), r = i.call(c, e), u && r && (c.lastIndex = c.global ? r.index + r[0].length : t), l && r && r.length > 1 && s.call(r[0], n, function() {
			for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0)
		}), r
	}), e.exports = c
}, function(e, t, n) {
	"use strict";
	var r = n(75)(!0);
	e.exports = function(e, t, n) {
		return t + (n ? r(e, t).length : 1)
	}
}, function(e, t, n) {
	var r, o, a, i = n(27),
		s = n(103),
		c = n(91),
		u = n(65),
		l = n(5),
		f = l.process,
		d = l.setImmediate,
		p = l.clearImmediate,
		g = l.MessageChannel,
		h = l.Dispatch,
		_ = 0,
		v = {},
		m = function() {
			var e = +this;
			if (v.hasOwnProperty(e)) {
				var t = v[e];
				delete v[e], t()
			}
		},
		y = function(e) {
			m.call(e.data)
		};
	d && p || (d = function(e) {
		for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
		return v[++_] = function() {
			s("function" == typeof e ? e : Function(e), t)
		}, r(_), _
	}, p = function(e) {
		delete v[e]
	}, "process" == n(32)(f) ? r = function(e) {
		f.nextTick(i(m, e, 1))
	} : h && h.now ? r = function(e) {
		h.now(i(m, e, 1))
	} : g ? (a = (o = new g).port2, o.port1.onmessage = y, r = i(a.postMessage, a, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(e) {
		l.postMessage(e + "", "*")
	}, l.addEventListener("message", y, !1)) : r = "onreadystatechange" in u("script") ?
	function(e) {
		c.appendChild(u("script")).onreadystatechange = function() {
			c.removeChild(this), m.call(e)
		}
	} : function(e) {
		setTimeout(i(m, e, 1), 0)
	}), e.exports = {
		set: d,
		clear: p
	}
}, function(e, t, n) {
	"use strict";
	var r = n(5),
		o = n(11),
		a = n(35),
		i = n(64),
		s = n(18),
		c = n(47),
		u = n(4),
		l = n(46),
		f = n(25),
		d = n(10),
		p = n(115),
		g = n(40).f,
		h = n(9).f,
		_ = n(83),
		v = n(42),
		m = "prototype",
		y = "Wrong index!",
		T = r.ArrayBuffer,
		S = r.DataView,
		b = r.Math,
		E = r.RangeError,
		w = r.Infinity,
		x = T,
		C = b.abs,
		A = b.pow,
		O = b.floor,
		L = b.log,
		R = b.LN2,
		N = o ? "_b" : "buffer",
		P = o ? "_l" : "byteLength",
		I = o ? "_o" : "byteOffset";

	function D(e, t, n) {
		var r, o, a, i = new Array(n),
			s = 8 * n - t - 1,
			c = (1 << s) - 1,
			u = c >> 1,
			l = 23 === t ? A(2, -24) - A(2, -77) : 0,
			f = 0,
			d = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
		for ((e = C(e)) != e || e === w ? (o = e != e ? 1 : 0, r = c) : (r = O(L(e) / R), e * (a = A(2, -r)) < 1 && (r--, a *= 2), (e += r + u >= 1 ? l / a : l * A(2, 1 - u)) * a >= 2 && (r++, a /= 2), r + u >= c ? (o = 0, r = c) : r + u >= 1 ? (o = (e * a - 1) * A(2, t), r += u) : (o = e * A(2, u - 1) * A(2, t), r = 0)); t >= 8; i[f++] = 255 & o, o /= 256, t -= 8);
		for (r = r << t | o, s += t; s > 0; i[f++] = 255 & r, r /= 256, s -= 8);
		return i[--f] |= 128 * d, i
	}
	function k(e, t, n) {
		var r, o = 8 * n - t - 1,
			a = (1 << o) - 1,
			i = a >> 1,
			s = o - 7,
			c = n - 1,
			u = e[c--],
			l = 127 & u;
		for (u >>= 7; s > 0; l = 256 * l + e[c], c--, s -= 8);
		for (r = l & (1 << -s) - 1, l >>= -s, s += t; s > 0; r = 256 * r + e[c], c--, s -= 8);
		if (0 === l) l = 1 - i;
		else {
			if (l === a) return r ? NaN : u ? -w : w;
			r += A(2, t), l -= i
		}
		return (u ? -1 : 1) * r * A(2, l - t)
	}
	function M(e) {
		return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
	}
	function F(e) {
		return [255 & e]
	}
	function U(e) {
		return [255 & e, e >> 8 & 255]
	}
	function q(e) {
		return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
	}
	function j(e) {
		return D(e, 52, 8)
	}
	function G(e) {
		return D(e, 23, 4)
	}
	function B(e, t, n) {
		h(e[m], t, {
			get: function() {
				return this[n]
			}
		})
	}
	function W(e, t, n, r) {
		var o = p(+n);
		if (o + t > e[P]) throw E(y);
		var a = e[N]._b,
			i = o + e[I],
			s = a.slice(i, i + t);
		return r ? s : s.reverse()
	}
	function V(e, t, n, r, o, a) {
		var i = p(+n);
		if (i + t > e[P]) throw E(y);
		for (var s = e[N]._b, c = i + e[I], u = r(+o), l = 0; l < t; l++) s[c + l] = u[a ? l : t - l - 1]
	}
	if (i.ABV) {
		if (!u(function() {
			T(1)
		}) || !u(function() {
			new T(-1)
		}) || u(function() {
			return new T, new T(1.5), new T(NaN), "ArrayBuffer" != T.name
		})) {
			for (var H, $ = (T = function(e) {
				return l(this, T), new x(p(e))
			})[m] = x[m], Y = g(x), J = 0; Y.length > J;)(H = Y[J++]) in T || s(T, H, x[H]);
			a || ($.constructor = T)
		}
		var z = new S(new T(2)),
			K = S[m].setInt8;
		z.setInt8(0, 2147483648), z.setInt8(1, 2147483649), !z.getInt8(0) && z.getInt8(1) || c(S[m], {
			setInt8: function(e, t) {
				K.call(this, e, t << 24 >> 24)
			},
			setUint8: function(e, t) {
				K.call(this, e, t << 24 >> 24)
			}
		}, !0)
	} else T = function(e) {
		l(this, T, "ArrayBuffer");
		var t = p(e);
		this._b = _.call(new Array(t), 0), this[P] = t
	}, S = function(e, t, n) {
		l(this, S, "DataView"), l(e, T, "DataView");
		var r = e[P],
			o = f(t);
		if (o < 0 || o > r) throw E("Wrong offset!");
		if (o + (n = void 0 === n ? r - o : d(n)) > r) throw E("Wrong length!");
		this[N] = e, this[I] = o, this[P] = n
	}, o && (B(T, "byteLength", "_l"), B(S, "buffer", "_b"), B(S, "byteLength", "_l"), B(S, "byteOffset", "_o")), c(S[m], {
		getInt8: function(e) {
			return W(this, 1, e)[0] << 24 >> 24
		},
		getUint8: function(e) {
			return W(this, 1, e)[0]
		},
		getInt16: function(e) {
			var t = W(this, 2, e, arguments[1]);
			return (t[1] << 8 | t[0]) << 16 >> 16
		},
		getUint16: function(e) {
			var t = W(this, 2, e, arguments[1]);
			return t[1] << 8 | t[0]
		},
		getInt32: function(e) {
			return M(W(this, 4, e, arguments[1]))
		},
		getUint32: function(e) {
			return M(W(this, 4, e, arguments[1])) >>> 0
		},
		getFloat32: function(e) {
			return k(W(this, 4, e, arguments[1]), 23, 4)
		},
		getFloat64: function(e) {
			return k(W(this, 8, e, arguments[1]), 52, 8)
		},
		setInt8: function(e, t) {
			V(this, 1, e, F, t)
		},
		setUint8: function(e, t) {
			V(this, 1, e, F, t)
		},
		setInt16: function(e, t) {
			V(this, 2, e, U, t, arguments[2])
		},
		setUint16: function(e, t) {
			V(this, 2, e, U, t, arguments[2])
		},
		setInt32: function(e, t) {
			V(this, 4, e, q, t, arguments[2])
		},
		setUint32: function(e, t) {
			V(this, 4, e, q, t, arguments[2])
		},
		setFloat32: function(e, t) {
			V(this, 4, e, G, t, arguments[2])
		},
		setFloat64: function(e, t) {
			V(this, 8, e, j, t, arguments[2])
		}
	});
	v(T, "ArrayBuffer"), v(S, "DataView"), s(S[m], i.VIEW, !0), t.ArrayBuffer = T, t.DataView = S
}, function(e, t, n) {
	"use strict";
	n.r(t);
	var r = n(1),
		o = "[RPC]",
		a = !1,
		i = 1e4 * Math.round(1e4 * Math.random()),
		s = {
			REMOTE_ERROR: "REMOTE_ERROR",
			INVALID_RESPONSE_JSONRPC: "INVALID_RESPONSE_JSONRPC",
			INVALID_RESPONSE_JSON: "INVALID_RESPONSE_JSON",
			REQUEST_FAILED: "REQUEST_FAILED"
		},
		c = r.
	default.createMultiProcedure(),
		u = r.
	default.createMultiProcedure();
	var l = {
		connectTo: function(e) {
			var t = e.url,
				n = e.method || "GET",
				l = !! e.withCredentials,
				f = e.f_str ||
			function(e) {
				return e
			}, d = !1;

			function p(e) {
				return function(p, g) {
					var h = ++i,
						_ = f(JSON.stringify({
							jsonrpc: "2.0",
							method: e,
							params: void 0 === p ? [] : p,
							id: h
						}), h);

					function v(e) {
						a && console.log(o, t, _, e)
					}
					return new Promise(function(e, o) {
						function a(e, t, n) {
							var r = {
								errorType: e,
								code: t,
								data: n
							};
							try {
								u && u(r)
							} catch (e) {
								console.warn(e)
							}
							o(r)
						}
						var i = new XMLHttpRequest;
						i.withCredentials = l, i.onreadystatechange = function() {
							if (i.readyState === XMLHttpRequest.DONE) if (200 === i.status)!
							function(t) {
								try {
									var n = JSON.parse(t);
									if (n.error) v(t), a(s.REMOTE_ERROR, n.error.code, n.error.message);
									else if (n.jsonrpc) {
										try {
											c && c(n.jsonrpc)
										} catch (e) {
											console.warn(e)
										}
										d ? setTimeout(function() {
											return e(n.result)
										}, d) : e(n.result)
									} else v(t), a(s.INVALID_RESPONSE_JSONRPC, void 0, t)
								} catch (e) {
									v(t), "undefined" != typeof window && (window._jsonErrorData = t), a(s.INVALID_RESPONSE_JSON, void 0, t)
								}
							}(i.responseText);
							else {
								var n, r = {
									xhr: i,
									status: i.status,
									basename: t,
									responseText: i.responseText
								};
								console.warn(r);
								try {
									r.responseData = JSON.parse(i.responseText).error, n = r.responseData.code
								} catch (e) {}
								a(s.REQUEST_FAILED, n, r)
							}
						};
						var f = "GET" === n ? r.
					default.urlWithParameter(t, "rq", _):
						t;
						if (g && g.queryParams) for (var p in g.queryParams) g.queryParams.hasOwnProperty(p) && (f = r.
					default.urlWithParameter(f, p, g.queryParams[p]));
						if (i.open("GET" === n ? "GET" : "POST", f, !0), i.setRequestHeader("Content-type", "text/plain"), g && g.headers) for (var h in g.headers) g.headers.hasOwnProperty(h) && i.setRequestHeader(h, g.headers[h]);
						i.send("GET" === n ? null : _)
					})
				}
			}
			return {
				getFunction: p,
				callFunction: function(e) {
					for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
					return p(e).apply(void 0, n)
				},
				setDebugDelay: function(e) {
					return d = e
				}
			}
		},
		_onSuccessHook: c,
		_onErrorHook: u,
		ErrorTypes: s
	};
	"undefined" != typeof window && window.M && window.M.registerAsync("RPC", l), t.
default = l
}, function(e, t, n) {
	t.f = n(8)
}, function(e, t, n) {
	var r = n(5).document;
	e.exports = r && r.documentElement
}, function(e, t, n) {
	"use strict";
	var r = n(25),
		o = n(28);
	e.exports = function(e) {
		var t = String(o(this)),
			n = "",
			a = r(e);
		if (a < 0 || a == 1 / 0) throw RangeError("Count can't be negative");
		for (; a > 0;
		(a >>>= 1) && (t += t)) 1 & a && (n += t);
		return n
	}
}, function(e, t, n) {
	"use strict";
	n.r(t);
	var r = "ontouchstart" in window,
		o = r || !! navigator.msMaxTouchPoints,
		a = window.matchMedia && window.matchMedia("only screen and (max-device-width : 650px)").matches,
		i = window.matchMedia && window.matchMedia("(max-width : 650px)").matches,
		s = navigator.platform && "MacIntel" === navigator.platform && !r,
		c = navigator.userAgent && -1 != navigator.userAgent.indexOf("Win"),
		u = navigator.platform && "Win32" === navigator.platform,
		l = -1 !== navigator.userAgent.indexOf("WOW64") || -1 !== navigator.userAgent.indexOf("Win64"),
		f = s && r,
		d = {
			is_touch_device: o,
			isMobilePhone: a,
			isIPhone: navigator.userAgent && !! navigator.userAgent.match(/[\(\/](iPhone|iPod)/),
			isIPad: navigator.userAgent && !! navigator.userAgent.match(/[\(\/](iPad)/) || f,
			isAndroid: navigator.userAgent && -1 != navigator.userAgent.indexOf("Android"),
			isMobileLayout: i,
			isMac: s,
			isWin: c,
			isWin32bit: u,
			isWin64bit: l
		};
	window.M && window.M.registerAsync("DeviceProps", d), t.
default = d
}, function(e, t, n) {
	"use strict";
	n.r(t);
	var r = n(1),
		o = n(2);

	function a(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) ||
		function(e, t) {
			var n = [],
				r = !0,
				o = !1,
				a = void 0;
			try {
				for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
			} catch (e) {
				o = !0, a = e
			} finally {
				try {
					r || null == s.
					return ||s.
					return ()
				} finally {
					if (o) throw a
				}
			}
			return n
		}(e, t) ||
		function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}()
	}
	var i = "[H2]",
		s = new Object,
		c = (navigator.userAgent || "").search("Trident") >= 0;

	function u(e, t) {
		for (var n = t.trim().split(".");;) {
			var r = n.shift();
			if (!(e && r in e)) return s;
			if (!n.length) return e[r];
			e = e[r]
		}
	}
	function l(e) {
		return e
	}
	function f(e, t, n) {
		null == n ? t("") : n.call ? (n.onValueChanged && (n.onValueChanged.push(t), e.is("input") && e.on("blur", function(e) {
			t(n())
		})), t(n())) : t(n)
	}
	function d(e, t, n, r, o) {
		var a;
		if (e.is("input[type='checkbox']")) a = function(t) {
			e.prop("checked", t)
		}, t.call && e.on("change", function(n) {
			t(r(e.prop("checked")))
		});
		else if (e.is("input[type='radio']")) a = function(t) {
			e.prop("checked", t == e.prop("value"))
		}, t.call && e.on("change", function(n) {
			e.prop("checked") && t(r(e.prop("value")))
		});
		else if (e.is("input[type='file']")) a = function(t) {
			t ? t !== e.get(0).files && console.warn(i, "Setting value to file-input is not allowed.", t) : e.val("")
		}, t.call && e.on("change", function(n) {
			t(e.get(0).files)
		});
		else if (e.is("input") || e.is("select") || e.is("textarea")) {
			var s = o && o.valueCheckFn;
			a = function(t) {
				e.is(":focus") || s && !1 === s(t, {
					value: t,
					source: "data"
				}) || e.val(n(t))
			}, t.call && (e.on("change paste cut blur", function(n) {
				var o = r(e.val());
				s && !1 === s(o, {
					value: o,
					source: "input",
					fastInput: !1
				}) || t(o)
			}), o && o.updateOnKeyUp && e.on("keyup", function(n) {
				setTimeout(function() {
					var n = r(e.val());
					s && !1 === s(n, {
						value: n,
						source: "input",
						fastInput: !0
					}) || t(n)
				})
			}))
		} else a = function(t) {
			e.text(n(t))
		};
		f(e, a, t)
	}
	var p, g = {
		_init: function(e, t, n) {
			t(e.get(0))
		},
		attr: function(e, t, n) {
			var r = n.param;
			f(e, function(t) {
				e.attr(r, t)
			}, t)
		},
		class: function(e, t, n) {
			if (void 0 === n.param) {
				var r;
				f(e, function(t) {
					r && e.removeClass(r), (r = t) && e.addClass(r)
				}, t)
			} else {
				var o = n.param;
				f(e, function(t) {
					t ? e.addClass(o) : e.removeClass(o)
				}, t)
			}
		},
		classIf: function(e, t, n) {
			var r = n.param.split(",");
			if (1 === r.length) {
				var o = r[0];
				f(e, function(t) {
					t ? e.addClass(o) : e.removeClass(o)
				}, t)
			} else {
				if (2 !== r.length) throw new Error(i + "Invalid parameter for classIf");
				var a = r[0],
					s = r[1];
				f(e, function(t) {
					t == a ? e.addClass(s) : e.removeClass(s)
				}, t)
			}
		},
		content: function(e, t, n) {
			f(e, function(t) {
				"string" == typeof t ? e.html(t) : t ? "parentNode" in t || "jquery" in t ? e.empty().append(Object(o.a)(t)) : T(e, t) : e.empty()
			}, t)
		},
		enabled: function(e, t, n) {
			f(e, function(t) {
				t ? e.removeAttr("disabled") : e.attr("disabled", "disabled")
			}, t)
		},
		html: function(e, t, n) {
			f(e, function(t) {
				"string" == typeof t ? e.html(t) : e.empty().append(Object(o.a)(t))
			}, t)
		},
		integer: function(e, t, n) {
			d(e, t, function(e) {
				return Number.parseFloat(e)
			}, function(e) {
				return parseInt(e.replace(/[^\d-,.]*([-\d\s,.]+).*$/, "$1").replace(/\s/g, "")) || 0
			}, n)
		},
		isHidden: function(e, t, n) {
			e.addClass("dl_invisible_by_default"), f(e, function(t) {
				!t ? (e.addClass("dl_visible"), setTimeout(function() {
					e.hasClass("dl_visible") && e.addClass("dl_visible_2")
				})) : e.removeClass("dl_visible").removeClass("dl_visible_2")
			}, t)
		},
		isVisible: function(e, t, n) {
			e.addClass("dl_invisible_by_default"), f(e, function(t) { !! t ? (e.addClass("dl_visible"), setTimeout(function() {
					e.hasClass("dl_visible") && e.addClass("dl_visible_2")
				})) : e.removeClass("dl_visible").removeClass("dl_visible_2")
			}, t)
		},
		number: function(e, t, n) {
			d(e, t, function(e) {
				return Number.parseFloat(e)
			}, function(e) {
				return parseFloat(e.replace(/[^\d-,.]*([-\d\s,.]+).*$/, "$1").replace(/\s/g, "")) || 0
			}, n)
		},
		onAnyclick: function(e, t, n) {
			var a = Object(o.a)(document).data("__dl_onAnyclick");
			a || (a = r.
		default.createMultiProcedure(), Object(o.a)(document).data("__dl_onAnyclick", a).click(function(e) {
				a(e.target)
			}));
			var i = t,
				s = void 0 === n.param || n.param;
			a.push(function(t) {
				if (!e.closest("body").length) return "REMOVE";
				for (var n = t; n; n = n.parentNode) if (n === e.get(0)) return;
				i("__TOGGLE" === s ? !i() : s)
			})
		},
		onClick: function(e, t, n) {
			var r = void 0 === n.param || n.param,
				o = t,
				a = "__TOGGLE" === r ?
			function() {
				return o(!o())
			} : function() {
				return o(r)
			};
			e.click(a), "A" === e.get(0).tagName && e.on("keyup", function(e) {
				return 32 === e.keyCode && a()
			})
		},
		onEvent: function(e, t, n) {
			var r = t;
			e.on(n.param, function(e) {
				return e && r(e)
			})
		},
		options: function(e, t, n) {
			f(e, function(t) {
				e.empty().append(y((t || []).map(function(e) {
					var t = a(e, 2);
					return {
						tag: "option",
						attributes: {
							value: t[0]
						},
						text: t[1]
					}
				})))
			}, t)
		},
		placeholderText: function(e, t, n) {
			for (var r = [e.get(0)], o = function() {
					var n = r.shift();
					if (3 === n.nodeType) {
						var o = n.nodeValue || "";
						o.match(/\${.+}/) &&
						function() {
							var r = o,
								a = n,
								c = t;

							function l() {
								a.nodeValue = r.replace(/\${(.*?)}/g, function(e, t) {
									var n = u(c, t);
									return void 0 === n && console.warn(i, "Placeholder value is undefined: '" + t + "'"), n !== s && void 0 !== n ? n.call ? n() : n : e
								})
							}
							r.replace(/\${(.*?)}/g, function(t, n) {
								var r = u(c, n);
								r !== s ? r && r.onValueChanged && r.onValueChanged.push(function() {
									if (!e.closest("body").length) return "REMOVE";
									l()
								}) : console.warn(i, "Placeholder not found: '" + n + "'")
							}), l()
						}()
					} else if (n.hasChildNodes()) for (var a = 0; a < n.childNodes.length; ++a) r.push(n.childNodes[a])
				}; r.length;) o()
		},
		removeIf: function(e, t, n) {
			f(e, function(t) {
				if (t) return e.remove(), "REMOVE"
			}, t)
		},
		rootClass: function(e, t, n) {
			var r = n.param;
			f(e, function(e) {
				e ? Object(o.a)(document.documentElement).addClass(r) : Object(o.a)(document.documentElement).removeClass(r)
			}, t)
		},
		template: function(e, t, n) {
			f(e, function(t) {
				"string" == typeof t ? e.html(t) : T(e, t)
			}, t)
		},
		text: function(e, t, n) {
			d(e, t, l, l, n)
		},
		trimmedText: function(e, t, n) {
			d(e, t, function(e) {
				return ("" + e).trim()
			}, function(e) {
				return ("" + e).trim()
			}, n)
		},
		setValue: function(e, t, n) {
			t(n.param)
		},
		value: function(e, t, n) {
			d(e, t, l, l, n)
		}
	};

	function h(e, t, n, a) {
		var s = Object(o.a)(e),
			c = (n || "text").replace(/(^[^{:]+):(.*)$/, "$1{$2}").match(/^\s*([^{]+?)\s*($|{(.*)}\s*$)/),
			u = c[1],
			p = void 0,
			h = c[3];
		h && (p = h.startsWith("'") ? h.trim().substr(1, h.length - 2) : h.startsWith('"') ? h.trim().substr(1, h.length - 2) : "false" !== h && ("true" === h || (h.match(/^\d/) ? parseFloat(h) : h.trim())));
		var _ = g[u];
		if (_) _(s, t, {
			type: u,
			param: p,
			updateOnKeyUp: a && a.updateOnKeyUp,
			valueCheckFn: a && a.valueCheckFn
		});
		else {
			var v = (n || "text").replace(/:(.*)$/, "{$1}");
			if ("date" == v) d(s, t, function(e) {
				return kDeepL.formatDate(e)
			}, l, a);
			else if ("dlCharLimit" === v) d(s, t, function(e) {
				return e ? kDeepL.parseLimit(e.toString()).dlLimit() : ""
			}, function(e) {
				return void 0 === e ? 0 : kDeepL.parseLimit(e.toString())
			}, a);
			else if ("dlPriceCurrency" === v) d(s, t, function(e) {
				return kDeepL.formatPriceWithCurrency(e)
			}, function(e) {
				return Number.parseFloat(e.toString().dlPrice())
			}, a);
			else if ("dlPrice" === v) d(s, t, function(e) {
				return kDeepL.formatPrice(e)
			}, function(e) {
				return Number.parseFloat(e.toString().dlPrice())
			}, a);
			else if ("dlPricePrecise" === v) d(s, t, function(e) {
				return kDeepL.formatPrice(e / 100)
			}, function(e) {
				return Number.parseFloat(e.toString().dlPrice())
			}, a);
			else if ("dlPricePreciseCurrency" === v) f(s, function(e) {
				s.html(kDeepL.formatPriceWithCurrency(e / 100))
			}, t);
			else if ("dlPricePreciseCurrencySmall" === v) {
				f(s, function(e) {
					s.html(function(e) {
						return kDeepL.formatPriceWithCurrencySmall(e / 100, "dl_price_smaller")
					}(e))
				}, t)
			} else {
				if ("dlFieldErrors" !== v) throw new Error(i + "Unknown type '" + v + "'");
				f(s, function(e) {
					var t = s.data("_dl_clearFieldErrors");
					t ? t() : (t = r.
				default.createCallOnce(), s.data("_dl_clearFieldErrors", t));
					var n = function(n) {
							e.hasOwnProperty(n) &&
							function() {
								var a = s.find("[name]").add(s.find("[dl-attr]")).add(s.find("[_dl-connected]")).filter(function() {
									return ("," + (this.getAttribute("name") || "") + ",").replace(/\s*/g, "").replace(/,\$0\./g, ",").search("," + n + ",") >= 0
								});
								if (!(a = a.add(s.find("[_dl-connected]").filter(function() {
									var e = Object(o.a)(this).data("__dl_connected");
									return !!e && e.find(function(e) {
										return e.startsWith(n + "::") || e.search("." + n + "::") >= 0
									})
								}))).length) return console.warn("FieldError: Could not apply field error to field: ", n, s[0]), s.css("outline", "1px solid red"), void console.log(s.find("[dl-attr]"));
								var i = r.
							default.createCallOnce();
								t.push(i), a.each(function(t, r) {
									var a = Object(o.a)(r);
									a.addClass("dl_with_field_error"), i.push(function() {
										a.removeClass("dl_with_field_error")
									}), e[n].forEach(function(e) {
										var t = Object(o.a)("<div class='dl_field_error_text'></div>").html(e);
										a.next().is("label") ? t.insertAfter(a.parent()) : a.parent().hasClass("is3_element--error_below") || a.closest(".dl_popup").length ? (t.insertAfter(a), t.addClass("is3_element--error_below")) : "inner" == a.attr("dl-field-error") ? a.html(t) : t.insertAfter(a), i.push(function() {
											t.remove()
										})
									}), "checkbox" !== a.attr("type") ? a.on("blur", i) : a.on("focus", i)
								}), window.setTimeout(function() {
									var e = document.querySelector('.dl_with_field_error:not([type="checkbox"])');
									e && e.focus()
								}, 300)
							}()
						};
					for (var a in e) n(a)
				}, t)
			}
		}
	}
	function _(e, t, n) {
		var a, s = (!0 === n ? {
			debug: !0
		} : n) || {};
		(function(e, t) {
			var n = Object(o.a)(e);
			return (n.is(t) ? n.find(t).addBack() : n.find(t)).toArray()
		})(e, "[dl-attr]").forEach(function(e) {
			var n = Object(o.a)(e);
			if (!c || !n.closest("template").length) {
				var u = n.attr("dl-attr"),
					l = [],
					f = [];
				u.replace(/(^|,)\s*((\S+{[^}]*}\s*:[^,]*)|([^,:]+:[^,]+)|([^,:{}]+))\s*(?=$|,)/g, function(e, t, n, r, o, a) {
					if (a) l.push(a.trim()), f.push(void 0);
					else if (o) {
						var s = o.match(/\s*([^:]+)\s*:\s*(.*?)\s*$/);
						s ? (l.push(s[2]), f.push(s[1])) : console.warn(i, "invalid attr:", u)
					} else if (r) {
						var c = r.match(/\s*([^}]+})\s*:\s*(.*?)\s*$/);
						c ? (l.push(c[2]), f.push(c[1])) : console.warn(i, "invalid attr:", u)
					} else console.warn(i, "invalid attr:", u);
					return ""
				}), n.attr("dl-attr-type") && (f = n.attr("dl-attr-type").split(","));
				var d = (n.attr("dl-attr-check") || "").split(",");
				l.forEach(function(e, o) {
					e = e.trim();
					var i, c = t;
					if (e.startsWith("$$.")) i = (c = a || (a = {}))[e] || (c[e] = r.
				default.value(void 0));
					else {
						for (var u = ("" + e).trim().split("."); c && u.length > 1;) c = c[u.shift()];
						i = c && c[u[0]]
					}
					if (void 0 !== i) {
						var l = (f[o] || "").trim();
						n.data("__dl_connected") || (n.data("__dl_connected", []), n.attr("_dl-connected", 1));
						var p = n.data("__dl_connected"),
							g = e + "::" + l;
						if (!p.find(function(e) {
							return g == e
						})) {
							p.push(g), n.data("__dl_connected", p), s.debug && n.css("border", "1px solid red");
							var _ = {};
							void 0 === n.attr("dl-update-attr-on-input") && void 0 === n.attr("dl-attr-fast-upate") || (_.updateOnKeyUp = !0), d[o] && (_.valueCheckFn = c[d[o]]), h(n, i, l, _)
						}
					}
				})
			}
		})
	}
	function v(e) {
		var t = v._counter || 0;
		Object(o.a)(e || "body").find("label:not([for]) + input, label:not([for]) + select").each(function(e, n) {
			Object(o.a)(n).attr("id") || Object(o.a)(n).attr("id", "__id" + ++t), Object(o.a)(n).prev().attr("for", Object(o.a)(n).attr("id"))
		}), Object(o.a)(e || "body").find("input + label:not([for]) , select + label:not([for])").each(function(e, n) {
			var r = Object(o.a)(n).prev();
			r.attr("id") || r.attr("id", "__id" + ++t), Object(o.a)(n).attr("for", r.attr("id"))
		}), v._counter = t
	}
	function m(e) {
		var t;
		return (t = document.createDocumentFragment ? Object(o.a)(document.createDocumentFragment()) : Object(o.a)("<ft-wrapper></ft-wrapper")).append(e), t.get(0)
	}
	function y(e, t) {
		var n, c = t || {};
		if (Array.isArray(e)) {
			var l = Object(o.a)();
			return e.forEach(function(e) {
				o.a.merge(l, y(e, c))
			}), l
		}
		if (e) {
			var f = function(e, t) {
					var n = Object(o.a)(e);
					v(n);
					var a, l = n.find("[dl-attr]");
					_(n, t, c.debug ? {
						debug: !0
					} : void 0), l.each(function(e, t) {
						t.setAttribute("_dl-attr", (t.hasAttribute("_dl-attr") ? t.getAttribute("_dl-attr") + "," : "") + t.getAttribute("dl-attr")), t.removeAttribute("dl-attr"), t.setAttribute("_dl-attr-type", (t.hasAttribute("_dl-attr-type") ? t.getAttribute("_dl-attr-type") + "," : "") + t.getAttribute("dl-attr-type")), t.removeAttribute("dl-attr-type")
					}), function(e, t, n) {
						e.find("dl-node").each(function(e, r) {
							var o = {
								type: r.getAttribute("type")
							},
								a = Array.from(r.querySelectorAll("dl-bind"));
							a.length ? a.forEach(function(e) {
								var t = e.getAttribute("name");
								e.hasAttribute("value") ? o[t] = e.getAttribute("value") : (o[t] = Array.from(e.childNodes), o[t].forEach(function(e) {
									e.parentNode && e.parentNode.removeChild(e)
								}))
							}) : (o.content = Array.from(r.childNodes), o.content.forEach(function(e) {
								e.parentNode && e.parentNode.removeChild(e)
							})), (r.getAttribute("bind") || "").split(",").forEach(function(e) {
								var n, r, a, c = e.match(/^\s*((\S+)\s*:\s*(\S*)|(\S[^:]+))\s*$/);
								c && (c[2] ? (n = c[2], c[3].startsWith("'") ? a = c[3].substr(1, c[3].length - 2) : r = c[3]) : (n = c[4], r = "$0." + c[4]), r && (a = u(t, r)) === s && (console.warn(i, "Bound attribute ", r, "not found in", t), a = void 0), void 0 !== a && (o[n] = a))
							}), y(o, n).insertAfter(r), r.parentNode && r.parentNode.removeChild(r)
						})
					}(n, t, c), n.find("script").each(function(e, n) {
						var o = n.parentNode;
						o.removeChild(n), (a || (a = r.
					default.createCallOnce())).push(function() {
							window._H2_init = function(e) {
								e(o, t)
							}, o.appendChild(n)
						})
					}), a && setTimeout(a, 50);
					var f = n.find("[autofocus]");
					f.length && setTimeout(function() {
						f.focus()
					}, 50)
				};
			if (c.reusableNodes && c.reusableNodes.has(e)) return Object(o.a)(c.reusableNodes.get(e)).detach();
			var d = {
				$0: e
			};
			if (e.tag) {
				var g = document.createElement(e.tag);
				void 0 !== e.attributes && Object.entries(e.attributes).forEach(function(e) {
					var t = a(e, 2),
						n = t[0],
						r = t[1];
					return h(g, r, "attr{".concat(n, "}"))
				}), void 0 !== e.content && h(g, e.content, "content"), void 0 !== e.class && h(g, e.class, "class"), void 0 !== e.onClick && h(g, e.onClick, "onClick"), void 0 !== e.onInit && h(g, e.onInit, "_init"), void 0 !== e.bindings && e.bindings.forEach(function(e) {
					var t = a(e, 2),
						n = t[0],
						r = t[1];
					return h(g, r, n)
				}), void 0 !== e.value && h(g, e.value, "value"), void 0 !== e.text && h(g, e.text, "text");
				var T = m(g);
				return Object(o.a)(T)
			}
			if (e.type) {
				var S = function(e) {
						var t;
						p || (p = new Object(null));
						var n = p[e];
						if (n || (Object(o.a)("template[dl-template]").each(function(e, t) {
							p[t.attributes["dl-template"].value] = t
						}), n = p[e]), n) {
							if (void 0 !== n.content) t = document.importNode(n.content, !0);
							else {
								for (var r = Object(o.a)("<ft-wrapper></ft-wrapper"), a = 0; a < n.childNodes.length; ++a) r.append(document.importNode(n.childNodes[a], !0));
								t = r.get(0)
							}
							t && t.querySelector && (t = t.querySelector("[dl-template-root]") || t)
						}
						return t
					}(e.type);
				return S || (S = m(Object(o.a)("<div>[[Missing template '" + e.type + "']]</div>")), console.warn(i, "Template not found '" + e.type + "'", "Description:", e)), e._reuseNode && (n = S, n.hasAttribute && n.hasAttribute("dl-template-root") ? [n] : Array.from(n.childNodes)).forEach(function(t) {
					1 === t.nodeType && (t.__H2_nodeDescription = e)
				}), f(S, d), Object(o.a)(S)
			}
			if (e.startsWith && !(e.startsWith(".") || e.startsWith("#") || e.startsWith("<") && e.endsWith(">"))) {
				var b = m(Object(o.a)("<span></span>").html(e));
				return f(b, d), Object(o.a)(b)
			}
			var E = m(Object(o.a)(e).clone());
			return f(E, d), Object(o.a)(E)
		}
		return Object(o.a)()
	}
	function T(e, t) {
		var n, r = Object(o.a)(e);
		r.children().each(function(e, t) {
			t.__H2_nodeDescription && (n || (n = new WeakMap)).set(t.__H2_nodeDescription, t)
		});
		var a = y(t, {
			reusableNodes: n
		});
		return r.empty(), a.each(function(e, t) {
			"FT-WRAPPER" === t.tagName ? r.append(t.childNodes) : r.append(t)
		}), a
	}
	g.anyclick = g.onAnyclick, g.template = g.content, g.boolean = g.value, g.clickTrigger = g.onClick, g.visibility = g.isVisible, g.hidden = g.isHidden;
	var S = {
		addCSSNode: function(e) {
			var t = document.createElement("style");
			return t.setAttribute("type", "text/css"), e && t.appendChild(document.createTextNode(e)), document.getElementsByTagName("head")[0].appendChild(t), t
		},
		connectLabelsToInputs: v,
		connectNodeToValue: h,
		connectNodesToValues: _,
		createNodes: y,
		createNode: function(e, t) {
			var n = y(e, t)[0];
			return (n.children || n.childNodes)[0]
		},
		createContentFromData: function(e, t) {
			var n = T(e, t);
			return n.each(function(e, n) {
				_(n, t)
			}), n
		},
		reloadPageWhenReopened: function() {
			document.addEventListener("visibilitychange", function() {
				document.hidden || (console.log("Reaching page by back-button: reloading..."), document.location.reload())
			})
		},
		createTemplateContainer: function(e) {
			var t = Object(o.a)("<div></div>");
			return h(t, e, "template"), t
		},
		triggerAnyclick: function() {
			Object(o.a)(document).click()
		},
		_logo: function() {
			return "H2.js\n\n  _____////___    \n /   \\        \\   \n/  o  |  \\\\\\   \\/|\n\\__   /  ´´´   /\\|\n \\___/________/   \n       \\\\\\\\       \n"
		}
	};
	window.M && window.M.registerAsync("H2", S), t.
default = S
}, function(e, t, n) {
	e.exports = !n(11) && !n(4)(function() {
		return 7 != Object.defineProperty(n(65)("div"), "a", {
			get: function() {
				return 7
			}
		}).a
	})
}, function(e, t, n) {
	var r = n(5),
		o = n(15),
		a = n(35),
		i = n(90),
		s = n(9).f;
	e.exports = function(e) {
		var t = o.Symbol || (o.Symbol = a ? {} : r.Symbol || {});
		"_" == e.charAt(0) || e in t || s(t, e, {
			value: i.f(e)
		})
	}
}, function(e, t, n) {
	var r = n(17),
		o = n(19),
		a = n(54)(!1),
		i = n(67)("IE_PROTO");
	e.exports = function(e, t) {
		var n, s = o(e),
			c = 0,
			u = [];
		for (n in s) n != i && r(s, n) && u.push(n);
		for (; t.length > c;) r(s, n = t[c++]) && (~a(u, n) || u.push(n));
		return u
	}
}, function(e, t, n) {
	var r = n(9),
		o = n(6),
		a = n(38);
	e.exports = n(11) ? Object.defineProperties : function(e, t) {
		o(e);
		for (var n, i = a(t), s = i.length, c = 0; s > c;) r.f(e, n = i[c++], t[n]);
		return e
	}
}, function(e, t, n) {
	function r(e) {
		return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}
	var o = n(19),
		a = n(40).f,
		i = {}.toString,
		s = "object" == ("undefined" == typeof window ? "undefined" : r(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
	e.exports.f = function(e) {
		return s && "[object Window]" == i.call(e) ?
		function(e) {
			try {
				return a(e)
			} catch (e) {
				return s.slice()
			}
		}(e) : a(o(e))
	}
}, function(e, t, n) {
	"use strict";
	var r = n(38),
		o = n(55),
		a = n(49),
		i = n(13),
		s = n(52),
		c = Object.assign;
	e.exports = !c || n(4)(function() {
		var e = {},
			t = {},
			n = Symbol(),
			r = "abcdefghijklmnopqrst";
		return e[n] = 7, r.split("").forEach(function(e) {
			t[e] = e
		}), 7 != c({}, e)[n] || Object.keys(c({}, t)).join("") != r
	}) ?
	function(e, t) {
		for (var n = i(e), c = arguments.length, u = 1, l = o.f, f = a.f; c > u;) for (var d, p = s(arguments[u++]), g = l ? r(p).concat(l(p)) : r(p), h = g.length, _ = 0; h > _;) f.call(p, d = g[_++]) && (n[d] = p[d]);
		return n
	} : c
}, function(e, t) {
	e.exports = Object.is ||
	function(e, t) {
		return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
	}
}, function(e, t, n) {
	"use strict";
	var r = n(22),
		o = n(7),
		a = n(103),
		i = [].slice,
		s = {};
	e.exports = Function.bind ||
	function(e) {
		var t = r(this),
			n = i.call(arguments, 1),
			c = function r() {
				var o = n.concat(i.call(arguments));
				return this instanceof r ?
				function(e, t, n) {
					if (!(t in s)) {
						for (var r = [], o = 0; o < t; o++) r[o] = "a[" + o + "]";
						s[t] = Function("F,a", "return new F(" + r.join(",") + ")")
					}
					return s[t](e, n)
				}(t, o.length, o) : a(t, o, e)
			};
		return o(t.prototype) && (c.prototype = t.prototype), c
	}
}, function(e, t) {
	e.exports = function(e, t, n) {
		var r = void 0 === n;
		switch (t.length) {
		case 0:
			return r ? e() : e.call(n);
		case 1:
			return r ? e(t[0]) : e.call(n, t[0]);
		case 2:
			return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
		case 3:
			return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
		case 4:
			return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
		}
		return e.apply(n, t)
	}
}, function(e, t, n) {
	var r = n(7),
		o = Math.floor;
	e.exports = function(e) {
		return !r(e) && isFinite(e) && o(e) === e
	}
}, function(e, t) {
	e.exports = Math.log1p ||
	function(e) {
		return (e = +e) > -1e-8 && e < 1e-8 ? e - e * e / 2 : Math.log(1 + e)
	}
}, function(e, t, n) {
	var r = n(6);
	e.exports = function(e, t, n, o) {
		try {
			return o ? t(r(n)[0], n[1]) : t(n)
		} catch (t) {
			var a = e.
			return;
			throw void 0 !== a && r(a.call(e)), t
		}
	}
}, function(e, t, n) {
	var r = n(22),
		o = n(13),
		a = n(52),
		i = n(10);
	e.exports = function(e, t, n, s, c) {
		r(t);
		var u = o(e),
			l = a(u),
			f = i(u.length),
			d = c ? f - 1 : 0,
			p = c ? -1 : 1;
		if (n < 2) for (;;) {
			if (d in l) {
				s = l[d], d += p;
				break
			}
			if (d += p, c ? d < 0 : f <= d) throw TypeError("Reduce of empty array with no initial value")
		}
		for (; c ? d >= 0 : f > d; d += p) d in l && (s = t(s, l[d], d, u));
		return s
	}
}, function(e, t, n) {
	"use strict";
	var r = n(13),
		o = n(41),
		a = n(10);
	e.exports = [].copyWithin ||
	function(e, t) {
		var n = r(this),
			i = a(n.length),
			s = o(e, i),
			c = o(t, i),
			u = arguments.length > 2 ? arguments[2] : void 0,
			l = Math.min((void 0 === u ? i : o(u, i)) - c, i - s),
			f = 1;
		for (c < s && s < c + l && (f = -1, c += l - 1, s += l - 1); l-- > 0;) c in n ? n[s] = n[c] : delete n[s], s += f, c += f;
		return n
	}
}, function(e, t) {
	e.exports = function(e, t) {
		return {
			value: t,
			done: !! e
		}
	}
}, function(e, t, n) {
	n(11) && "g" != /./g.flags && n(9).f(RegExp.prototype, "flags", {
		configurable: !0,
		get: n(58)
	})
}, function(e, t, n) {
	"use strict";
	var r = n(22);

	function o(e) {
		var t, n;
		this.promise = new e(function(e, r) {
			if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
			t = e, n = r
		}), this.resolve = r(t), this.reject = r(n)
	}
	e.exports.f = function(e) {
		return new o(e)
	}
}, function(e, t, n) {
	var r = n(6),
		o = n(7),
		a = n(111);
	e.exports = function(e, t) {
		if (r(e), o(t) && t.constructor === e) return t;
		var n = a.f(e);
		return (0, n.resolve)(t), n.promise
	}
}, function(e, t, n) {
	"use strict";
	var r = n(9).f,
		o = n(39),
		a = n(47),
		i = n(27),
		s = n(46),
		c = n(61),
		u = n(76),
		l = n(109),
		f = n(45),
		d = n(11),
		p = n(31).fastKey,
		g = n(48),
		h = d ? "_s" : "size",
		_ = function(e, t) {
			var n, r = p(t);
			if ("F" !== r) return e._i[r];
			for (n = e._f; n; n = n.n) if (n.k == t) return n
		};
	e.exports = {
		getConstructor: function(e, t, n, u) {
			var l = e(function(e, r) {
				s(e, l, t, "_i"), e._t = t, e._i = o(null), e._f = void 0, e._l = void 0, e[h] = 0, null != r && c(r, n, e[u], e)
			});
			return a(l.prototype, {
				clear: function() {
					for (var e = g(this, t), n = e._i, r = e._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
					e._f = e._l = void 0, e[h] = 0
				},
				delete: function(e) {
					var n = g(this, t),
						r = _(n, e);
					if (r) {
						var o = r.n,
							a = r.p;
						delete n._i[r.i], r.r = !0, a && (a.n = o), o && (o.p = a), n._f == r && (n._f = o), n._l == r && (n._l = a), n[h]--
					}
					return !!r
				},
				forEach: function(e) {
					g(this, t);
					for (var n, r = i(e, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;) for (r(n.v, n.k, this); n && n.r;) n = n.p
				},
				has: function(e) {
					return !!_(g(this, t), e)
				}
			}), d && r(l.prototype, "size", {
				get: function() {
					return g(this, t)[h]
				}
			}), l
		},
		def: function(e, t, n) {
			var r, o, a = _(e, t);
			return a ? a.v = n : (e._l = a = {
				i: o = p(t, !0),
				k: t,
				v: n,
				p: r = e._l,
				n: void 0,
				r: !1
			}, e._f || (e._f = a), r && (r.n = a), e[h]++, "F" !== o && (e._i[o] = a)), e
		},
		getEntry: _,
		setStrong: function(e, t, n) {
			u(e, t, function(e, n) {
				this._t = g(e, t), this._k = n, this._l = void 0
			}, function() {
				for (var e = this._k, t = this._l; t && t.r;) t = t.p;
				return this._t && (this._l = t = t ? t.n : this._t._f) ? l(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : (this._t = void 0, l(1))
			}, n ? "entries" : "values", !n, !0), f(t)
		}
	}
}, function(e, t, n) {
	"use strict";
	var r = n(47),
		o = n(31).getWeak,
		a = n(6),
		i = n(7),
		s = n(46),
		c = n(61),
		u = n(24),
		l = n(17),
		f = n(48),
		d = u(5),
		p = u(6),
		g = 0,
		h = function(e) {
			return e._l || (e._l = new _)
		},
		_ = function() {
			this.a = []
		},
		v = function(e, t) {
			return d(e.a, function(e) {
				return e[0] === t
			})
		};
	_.prototype = {
		get: function(e) {
			var t = v(this, e);
			if (t) return t[1]
		},
		has: function(e) {
			return !!v(this, e)
		},
		set: function(e, t) {
			var n = v(this, e);
			n ? n[1] = t : this.a.push([e, t])
		},
		delete: function(e) {
			var t = p(this.a, function(t) {
				return t[0] === e
			});
			return ~t && this.a.splice(t, 1), !! ~t
		}
	}, e.exports = {
		getConstructor: function(e, t, n, a) {
			var u = e(function(e, r) {
				s(e, u, t, "_i"), e._t = t, e._i = g++, e._l = void 0, null != r && c(r, n, e[a], e)
			});
			return r(u.prototype, {
				delete: function(e) {
					if (!i(e)) return !1;
					var n = o(e);
					return !0 === n ? h(f(this, t)).delete(e) : n && l(n, this._i) && delete n[this._i]
				},
				has: function(e) {
					if (!i(e)) return !1;
					var n = o(e);
					return !0 === n ? h(f(this, t)).has(e) : n && l(n, this._i)
				}
			}), u
		},
		def: function(e, t, n) {
			var r = o(a(t), !0);
			return !0 === r ? h(e).set(t, n) : r[e._i] = n, e
		},
		ufstore: h
	}
}, function(e, t, n) {
	var r = n(25),
		o = n(10);
	e.exports = function(e) {
		if (void 0 === e) return 0;
		var t = r(e),
			n = o(t);
		if (t !== n) throw RangeError("Wrong length!");
		return n
	}
}, function(e, t, n) {
	var r = n(40),
		o = n(55),
		a = n(6),
		i = n(5).Reflect;
	e.exports = i && i.ownKeys ||
	function(e) {
		var t = r.f(a(e)),
			n = o.f;
		return n ? t.concat(n(e)) : t
	}
}, function(e, t, n) {
	var r = n(10),
		o = n(92),
		a = n(28);
	e.exports = function(e, t, n, i) {
		var s = String(a(e)),
			c = s.length,
			u = void 0 === n ? " " : String(n),
			l = r(t);
		if (l <= c || "" == u) return s;
		var f = l - c,
			d = o.call(u, Math.ceil(f / u.length));
		return d.length > f && (d = d.slice(0, f)), i ? d + s : s + d
	}
}, function(e, t, n) {
	var r = n(38),
		o = n(19),
		a = n(49).f;
	e.exports = function(e) {
		return function(t) {
			for (var n, i = o(t), s = r(i), c = s.length, u = 0, l = []; c > u;) a.call(i, n = s[u++]) && l.push(e ? [n, i[n]] : i[n]);
			return l
		}
	}
}, function(e, t, n) {
	"use strict";
	n.r(t);
	var r = n(2);
	t.
default = {
		show: function(e) {
			if (e.content || "") {
				var t = e.timeout || 500,
					n = e.x || 0,
					o = e.y || 0;
				if (e.target) {
					var a = Object(r.a)(e.target).offset();
					n += a.left, o += a.top
				}
				var i = Object(r.a)("<div class='lmt__feedback_message'></div>").html(e.content).css({
					top: o + "px",
					left: n + "px"
				}).appendTo(Object(r.a)("body"));
				e.class && i.addClass(e.class), setTimeout(function() {
					return i.addClass("lmt__feedback_message--visible")
				}), setTimeout(function() {
					i.addClass("lmt__feedback_message--fading"), setTimeout(function() {
						return i.remove()
					}, 400)
				}, t)
			}
		}
	}
}, function(e, t, n) {
	"use strict";
	n.r(t);
	var r = window.M;
	r.dbg_pendingWhenAvailables = {};
	var o = 0;
	if (r.whenAvailable = function(e, t) {
		var n = ++o,
			a = [],
			i = 0,
			s = [],
			c = "string" == typeof e ? [e] : e;

		function u(e) {
			i ? s.push(e) : (r.__verbose() && console.log("[M] whenAvailable", c, "-> ok."), e.apply(void 0, a))
		}
		return c.forEach(function(e, t) {
			var o = r.__getModuleWrapper(e);
			if (o.hasOwnProperty("value")) a.push(o.value);
			else if (++i, a.push(void 0), o.onReady.push(function(e) {
				if (a[t] = e, 0 == --i) for (r.__verbose() && console.log("[M] $" + n + " ... whenAvailable", c, "-> ok."), delete r.dbg_pendingWhenAvailables[n]; s.length;) s.shift().apply(void 0, a)
			}), (e.startsWith("/") || e.startsWith("./")) && !o.isRequested) {
				o.isRequested = !0;
				var u = e + ".js",
					l = new XMLHttpRequest;
				l.onreadystatechange = function() {
					l.readyState === XMLHttpRequest.DONE && (200 === l.status ? (0, eval)("(function(){ var __moduleId='" + e + "';function define(){var p=[__moduleId];for(var i=0;i<arguments.length;++i) p.push(arguments[i]);M.define.apply(M, p);} " + l.responseText + "\n})();") : (console.warn("[M] Could not load module ", e), window._rq = l))
				}, l.open("GET", u, !0), l.send(null)
			}
		}), i && (r.__verbose() && console.log("[M] whenAvailable", c, "-> waiting...", "$" + n), r.dbg_pendingWhenAvailables[n] = s), t && u(t), {
			then: u
		}
	}, r.require = function(e, t) {
		var n = [];
		return ("string" == typeof e ? [e] : e).forEach(function(e) {
			var t = r.__getModuleWrapper(e);
			if (!t.hasOwnProperty("value")) throw new Error("[M] Required module '" + e + "' is not defined.");
			n.push(t.value)
		}), t && t.apply(void 0, n), "string" == typeof e ? n[0] : n
	}, r.requireAsync = function(e, t) {
		var n, o, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5e3,
			i = "string" == typeof e ? [e] : e,
			s = r.whenAvailable(i);
		return s.then(function() {
			n = !0, o && clearTimeout(o)
		}), t && s.then(t), n || (o = setTimeout(function() {
			var e = {};
			throw i.forEach(function(t) {
				return e[t] = void 0 !== r.get(t)
			}), new Error("[M] Could not fulfil requirements after timeout: " + JSON.stringify(e))
		}, a)), s
	}, r.define = function(e, t, n) {
		r.__verbose() && console.log("M.define", e, t, n), r.requireAsync(t).then(function() {
			r.__getModuleWrapper(e).hasOwnProperty("value") ? console.warn("[M] Module '".concat(e, "' already defined. Skipping repeated definition.")) : r.register(e, n.apply(void 0, arguments))
		})
	}, r.register("M", r), r.__delayedCommands) for (; r.__delayedCommands.length;) r.__delayedCommands.shift()();
	t.
default = r
}, , function(e, t, n) {
	var r = n(5).parseInt,
		o = n(56).trim,
		a = n(71),
		i = /^[-+]?0[xX]/;
	e.exports = 8 !== r(a + "08") || 22 !== r(a + "0x16") ?
	function(e, t) {
		var n = o(String(e), 3);
		return r(n, t >>> 0 || (i.test(n) ? 16 : 10))
	} : r
}, function(e, t, n) {
	var r = n(5).parseFloat,
		o = n(56).trim;
	e.exports = 1 / r(n(71) + "-0") != -1 / 0 ?
	function(e) {
		var t = o(String(e), 3),
			n = r(t);
		return 0 === n && "-" == t.charAt(0) ? -0 : n
	} : r
}, function(e, t, n) {
	"use strict";
	var r = n(39),
		o = n(36),
		a = n(42),
		i = {};
	n(18)(i, n(8)("iterator"), function() {
		return this
	}), e.exports = function(e, t, n) {
		e.prototype = r(i, {
			next: o(1, n)
		}), a(e, t + " Iterator")
	}
}, function(e, t, n) {
	"use strict";
	var r = n(85);
	n(0)({
		target: "RegExp",
		proto: !0,
		forced: r !== /./.exec
	}, {
		exec: r
	})
}, function(e, t, n) {
	"use strict";
	var r, o, a, i, s = n(35),
		c = n(5),
		u = n(27),
		l = n(53),
		f = n(0),
		d = n(7),
		p = n(22),
		g = n(46),
		h = n(61),
		_ = n(50),
		v = n(87).set,
		m = n(235)(),
		y = n(111),
		T = n(236),
		S = n(62),
		b = n(112),
		E = c.TypeError,
		w = c.process,
		x = w && w.versions,
		C = x && x.v8 || "",
		A = c.Promise,
		O = "process" == l(w),
		L = function() {},
		R = o = y.f,
		N = !!
	function() {
		try {
			var e = A.resolve(1),
				t = (e.constructor = {})[n(8)("species")] = function(e) {
					e(L, L)
				};
			return (O || "function" == typeof PromiseRejectionEvent) && e.then(L) instanceof t && 0 !== C.indexOf("6.6") && -1 === S.indexOf("Chrome/66")
		} catch (e) {}
	}(), P = function(e) {
		var t;
		return !(!d(e) || "function" != typeof(t = e.then)) && t
	}, I = function(e, t) {
		if (!e._n) {
			e._n = !0;
			var n = e._c;
			m(function() {
				for (var r = e._v, o = 1 == e._s, a = 0, i = function(t) {
						var n, a, i, s = o ? t.ok : t.fail,
							c = t.resolve,
							u = t.reject,
							l = t.domain;
						try {
							s ? (o || (2 == e._h && M(e), e._h = 1), !0 === s ? n = r : (l && l.enter(), n = s(r), l && (l.exit(), i = !0)), n === t.promise ? u(E("Promise-chain cycle")) : (a = P(n)) ? a.call(n, c, u) : c(n)) : u(r)
						} catch (e) {
							l && !i && l.exit(), u(e)
						}
					}; n.length > a;) i(n[a++]);
				e._c = [], e._n = !1, t && !e._h && D(e)
			})
		}
	}, D = function(e) {
		v.call(c, function() {
			var t, n, r, o = e._v,
				a = k(e);
			if (a && (t = T(function() {
				O ? w.emit("unhandledRejection", o, e) : (n = c.onunhandledrejection) ? n({
					promise: e,
					reason: o
				}) : (r = c.console) && r.error && r.error("Unhandled promise rejection", o)
			}), e._h = O || k(e) ? 2 : 1), e._a = void 0, a && t.e) throw t.v
		})
	}, k = function(e) {
		return 1 !== e._h && 0 === (e._a || e._c).length
	}, M = function(e) {
		v.call(c, function() {
			var t;
			O ? w.emit("rejectionHandled", e) : (t = c.onrejectionhandled) && t({
				promise: e,
				reason: e._v
			})
		})
	}, F = function(e) {
		var t = this;
		t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), I(t, !0))
	}, U = function e(t) {
		var n, r = this;
		if (!r._d) {
			r._d = !0, r = r._w || r;
			try {
				if (r === t) throw E("Promise can't be resolved itself");
				(n = P(t)) ? m(function() {
					var o = {
						_w: r,
						_d: !1
					};
					try {
						n.call(t, u(e, o, 1), u(F, o, 1))
					} catch (e) {
						F.call(o, e)
					}
				}) : (r._v = t, r._s = 1, I(r, !1))
			} catch (e) {
				F.call({
					_w: r,
					_d: !1
				}, e)
			}
		}
	};
	N || (A = function(e) {
		g(this, A, "Promise", "_h"), p(e), r.call(this);
		try {
			e(u(U, this, 1), u(F, this, 1))
		} catch (e) {
			F.call(this, e)
		}
	}, (r = function(e) {
		this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
	}).prototype = n(47)(A.prototype, {
		then: function(e, t) {
			var n = R(_(this, A));
			return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = O ? w.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && I(this, !1), n.promise
		},
		catch: function(e) {
			return this.then(void 0, e)
		}
	}), a = function() {
		var e = new r;
		this.promise = e, this.resolve = u(U, e, 1), this.reject = u(F, e, 1)
	}, y.f = R = function(e) {
		return e === A || e === i ? new a(e) : o(e)
	}), f(f.G + f.W + f.F * !N, {
		Promise: A
	}), n(42)(A, "Promise"), n(45)("Promise"), i = n(15).Promise, f(f.S + f.F * !N, "Promise", {
		reject: function(e) {
			var t = R(this);
			return (0, t.reject)(e), t.promise
		}
	}), f(f.S + f.F * (s || !N), "Promise", {
		resolve: function(e) {
			return b(s && this === i ? A : this, e)
		}
	}), f(f.S + f.F * !(N && n(57)(function(e) {
		A.all(e).
		catch (L)
	})), "Promise", {
		all: function(e) {
			var t = this,
				n = R(t),
				r = n.resolve,
				o = n.reject,
				a = T(function() {
					var n = [],
						a = 0,
						i = 1;
					h(e, !1, function(e) {
						var s = a++,
							c = !1;
						n.push(void 0), i++, t.resolve(e).then(function(e) {
							c || (c = !0, n[s] = e, --i || r(n))
						}, o)
					}), --i || r(n)
				});
			return a.e && o(a.v), n.promise
		},
		race: function(e) {
			var t = this,
				n = R(t),
				r = n.reject,
				o = T(function() {
					h(e, !1, function(e) {
						t.resolve(e).then(n.resolve, r)
					})
				});
			return o.e && r(o.v), n.promise
		}
	})
}, , function(e, t) {
	function n(e) {
		return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}
	var r;
	r = function() {
		return this
	}();
	try {
		r = r || new Function("return this")()
	} catch (e) {
		"object" === ("undefined" == typeof window ? "undefined" : n(window)) && (r = window)
	}
	e.exports = r
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) ||
		function(e, t) {
			var n = [],
				r = !0,
				o = !1,
				a = void 0;
			try {
				for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
			} catch (e) {
				o = !0, a = e
			} finally {
				try {
					r || null == s.
					return ||s.
					return ()
				} finally {
					if (o) throw a
				}
			}
			return n
		}(e, t) ||
		function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}()
	}
	n.r(t);
	var o = new Object(null);
	"undefined" != typeof window && (window.location.search.substr(1).split("&").forEach(function(e) {
		var t = r(e.split("=", 2), 2),
			n = t[0],
			a = t[1];
		o[decodeURIComponent(n)] = void 0 === a ? "" : decodeURIComponent(a)
	}), window.M && window.M.registerAsync("queryVars", o)), t.
default = o
}, , function(e, t, n) {
	"use strict";

	function r(e) {
		return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}
	var o = n(5),
		a = n(17),
		i = n(11),
		s = n(0),
		c = n(16),
		u = n(31).KEY,
		l = n(4),
		f = n(66),
		d = n(42),
		p = n(37),
		g = n(8),
		h = n(90),
		_ = n(96),
		v = n(132),
		m = n(69),
		y = n(6),
		T = n(7),
		S = n(19),
		b = n(26),
		E = n(36),
		w = n(39),
		x = n(99),
		C = n(20),
		A = n(9),
		O = n(38),
		L = C.f,
		R = A.f,
		N = x.f,
		P = o.Symbol,
		I = o.JSON,
		D = I && I.stringify,
		k = g("_hidden"),
		M = g("toPrimitive"),
		F = {}.propertyIsEnumerable,
		U = f("symbol-registry"),
		q = f("symbols"),
		j = f("op-symbols"),
		G = Object.prototype,
		B = "function" == typeof P,
		W = o.QObject,
		V = !W || !W.prototype || !W.prototype.findChild,
		H = i && l(function() {
			return 7 != w(R({}, "a", {
				get: function() {
					return R(this, "a", {
						value: 7
					}).a
				}
			})).a
		}) ?
	function(e, t, n) {
		var r = L(G, t);
		r && delete G[t], R(e, t, n), r && e !== G && R(G, t, r)
	} : R, $ = function(e) {
		var t = q[e] = w(P.prototype);
		return t._k = e, t
	}, Y = B && "symbol" == r(P.iterator) ?
	function(e) {
		return "symbol" == r(e)
	} : function(e) {
		return e instanceof P
	}, J = function(e, t, n) {
		return e === G && J(j, t, n), y(e), t = b(t, !0), y(n), a(q, t) ? (n.enumerable ? (a(e, k) && e[k][t] && (e[k][t] = !1), n = w(n, {
			enumerable: E(0, !1)
		})) : (a(e, k) || R(e, k, E(1, {})), e[k][t] = !0), H(e, t, n)) : R(e, t, n)
	}, z = function(e, t) {
		y(e);
		for (var n, r = v(t = S(t)), o = 0, a = r.length; a > o;) J(e, n = r[o++], t[n]);
		return e
	}, K = function(e) {
		var t = F.call(this, e = b(e, !0));
		return !(this === G && a(q, e) && !a(j, e)) && (!(t || !a(this, e) || !a(q, e) || a(this, k) && this[k][e]) || t)
	}, Q = function(e, t) {
		if (e = S(e), t = b(t, !0), e !== G || !a(q, t) || a(j, t)) {
			var n = L(e, t);
			return !n || !a(q, t) || a(e, k) && e[k][t] || (n.enumerable = !0), n
		}
	}, X = function(e) {
		for (var t, n = N(S(e)), r = [], o = 0; n.length > o;) a(q, t = n[o++]) || t == k || t == u || r.push(t);
		return r
	}, Z = function(e) {
		for (var t, n = e === G, r = N(n ? j : S(e)), o = [], i = 0; r.length > i;)!a(q, t = r[i++]) || n && !a(G, t) || o.push(q[t]);
		return o
	};
	B || (c((P = function() {
		if (this instanceof P) throw TypeError("Symbol is not a constructor!");
		var e = p(arguments.length > 0 ? arguments[0] : void 0);
		return i && V && H(G, e, {
			configurable: !0,
			set: function t(n) {
				this === G && t.call(j, n), a(this, k) && a(this[k], e) && (this[k][e] = !1), H(this, e, E(1, n))
			}
		}), $(e)
	}).prototype, "toString", function() {
		return this._k
	}), C.f = Q, A.f = J, n(40).f = x.f = X, n(49).f = K, n(55).f = Z, i && !n(35) && c(G, "propertyIsEnumerable", K, !0), h.f = function(e) {
		return $(g(e))
	}), s(s.G + s.W + s.F * !B, {
		Symbol: P
	});
	for (var ee = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), te = 0; ee.length > te;) g(ee[te++]);
	for (var ne = O(g.store), re = 0; ne.length > re;) _(ne[re++]);
	s(s.S + s.F * !B, "Symbol", {
		for :function(e) {
			return a(U, e += "") ? U[e] : U[e] = P(e)
		}, keyFor: function(e) {
			if (!Y(e)) throw TypeError(e + " is not a symbol!");
			for (var t in U) if (U[t] === e) return t
		},
		useSetter: function() {
			V = !0
		},
		useSimple: function() {
			V = !1
		}
	}), s(s.S + s.F * !B, "Object", {
		create: function(e, t) {
			return void 0 === t ? w(e) : z(w(e), t)
		},
		defineProperty: J,
		defineProperties: z,
		getOwnPropertyDescriptor: Q,
		getOwnPropertyNames: X,
		getOwnPropertySymbols: Z
	}), I && s(s.S + s.F * (!B || l(function() {
		var e = P();
		return "[null]" != D([e]) || "{}" != D({
			a: e
		}) || "{}" != D(Object(e))
	})), "JSON", {
		stringify: function(e) {
			for (var t, n, r = [e], o = 1; arguments.length > o;) r.push(arguments[o++]);
			if (n = t = r[1], (T(t) || void 0 !== e) && !Y(e)) return m(t) || (t = function(e, t) {
				if ("function" == typeof n && (t = n.call(this, e, t)), !Y(t)) return t
			}), r[1] = t, D.apply(I, r)
		}
	}), P.prototype[M] || n(18)(P.prototype, M, P.prototype.valueOf), d(P, "Symbol"), d(Math, "Math", !0), d(o.JSON, "JSON", !0)
}, function(e, t, n) {
	var r = n(38),
		o = n(55),
		a = n(49);
	e.exports = function(e) {
		var t = r(e),
			n = o.f;
		if (n) for (var i, s = n(e), c = a.f, u = 0; s.length > u;) c.call(e, i = s[u++]) && t.push(i);
		return t
	}
}, function(e, t, n) {
	var r = n(0);
	r(r.S, "Object", {
		create: n(39)
	})
}, function(e, t, n) {
	var r = n(0);
	r(r.S + r.F * !n(11), "Object", {
		defineProperty: n(9).f
	})
}, function(e, t, n) {
	var r = n(0);
	r(r.S + r.F * !n(11), "Object", {
		defineProperties: n(98)
	})
}, function(e, t, n) {
	var r = n(19),
		o = n(20).f;
	n(23)("getOwnPropertyDescriptor", function() {
		return function(e, t) {
			return o(r(e), t)
		}
	})
}, function(e, t, n) {
	var r = n(13),
		o = n(33);
	n(23)("getPrototypeOf", function() {
		return function(e) {
			return o(r(e))
		}
	})
}, function(e, t, n) {
	var r = n(13),
		o = n(38);
	n(23)("keys", function() {
		return function(e) {
			return o(r(e))
		}
	})
}, function(e, t, n) {
	n(23)("getOwnPropertyNames", function() {
		return n(99).f
	})
}, function(e, t, n) {
	var r = n(7),
		o = n(31).onFreeze;
	n(23)("freeze", function(e) {
		return function(t) {
			return e && r(t) ? e(o(t)) : t
		}
	})
}, function(e, t, n) {
	var r = n(7),
		o = n(31).onFreeze;
	n(23)("seal", function(e) {
		return function(t) {
			return e && r(t) ? e(o(t)) : t
		}
	})
}, function(e, t, n) {
	var r = n(7),
		o = n(31).onFreeze;
	n(23)("preventExtensions", function(e) {
		return function(t) {
			return e && r(t) ? e(o(t)) : t
		}
	})
}, function(e, t, n) {
	var r = n(7);
	n(23)("isFrozen", function(e) {
		return function(t) {
			return !r(t) || !! e && e(t)
		}
	})
}, function(e, t, n) {
	var r = n(7);
	n(23)("isSealed", function(e) {
		return function(t) {
			return !r(t) || !! e && e(t)
		}
	})
}, function(e, t, n) {
	var r = n(7);
	n(23)("isExtensible", function(e) {
		return function(t) {
			return !!r(t) && (!e || e(t))
		}
	})
}, function(e, t, n) {
	var r = n(0);
	r(r.S + r.F, "Object", {
		assign: n(100)
	})
}, function(e, t, n) {
	var r = n(0);
	r(r.S, "Object", {
		is: n(101)
	})
}, function(e, t, n) {
	var r = n(0);
	r(r.S, "Object", {
		setPrototypeOf: n(70).set
	})
}, function(e, t, n) {
	var r = n(0);
	r(r.P, "Function", {
		bind: n(102)
	})
}, function(e, t, n) {
	var r = n(9).f,
		o = Function.prototype,
		a = /^\s*function ([^ (]*)/;
	"name" in o || n(11) && r(o, "name", {
		configurable: !0,
		get: function() {
			try {
				return ("" + this).match(a)[1]
			} catch (e) {
				return ""
			}
		}
	})
}, function(e, t, n) {
	"use strict";
	var r = n(7),
		o = n(33),
		a = n(8)("hasInstance"),
		i = Function.prototype;
	a in i || n(9).f(i, a, {
		value: function(e) {
			if ("function" != typeof this || !r(e)) return !1;
			if (!r(this.prototype)) return e instanceof this;
			for (; e = o(e);) if (this.prototype === e) return !0;
			return !1
		}
	})
}, function(e, t, n) {
	"use strict";
	var r = n(5),
		o = n(17),
		a = n(32),
		i = n(72),
		s = n(26),
		c = n(4),
		u = n(40).f,
		l = n(20).f,
		f = n(9).f,
		d = n(56).trim,
		p = r.Number,
		g = p,
		h = p.prototype,
		_ = "Number" == a(n(39)(h)),
		v = "trim" in String.prototype,
		m = function(e) {
			var t = s(e, !1);
			if ("string" == typeof t && t.length > 2) {
				var n, r, o, a = (t = v ? t.trim() : d(t, 3)).charCodeAt(0);
				if (43 === a || 45 === a) {
					if (88 === (n = t.charCodeAt(2)) || 120 === n) return NaN
				} else if (48 === a) {
					switch (t.charCodeAt(1)) {
					case 66:
					case 98:
						r = 2, o = 49;
						break;
					case 79:
					case 111:
						r = 8, o = 55;
						break;
					default:
						return +t
					}
					for (var i, c = t.slice(2), u = 0, l = c.length; u < l; u++) if ((i = c.charCodeAt(u)) < 48 || i > o) return NaN;
					return parseInt(c, r)
				}
			}
			return +t
		};
	if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
		p = function(e) {
			var t = arguments.length < 1 ? 0 : e,
				n = this;
			return n instanceof p && (_ ? c(function() {
				h.valueOf.call(n)
			}) : "Number" != a(n)) ? i(new g(m(t)), n, p) : m(t)
		};
		for (var y, T = n(11) ? u(g) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), S = 0; T.length > S; S++) o(g, y = T[S]) && !o(p, y) && f(p, y, l(g, y));
		p.prototype = h, h.constructor = p, n(16)(r, "Number", p)
	}
}, function(e, t, n) {
	var r = n(0);
	r(r.S, "Number", {
		EPSILON: Math.pow(2, -52)
	})
}, function(e, t, n) {
	var r = n(0),
		o = n(5).isFinite;
	r(r.S, "Number", {
		isFinite: function(e) {
			return "number" == typeof e && o(e)
		}
	})
}, function(e, t, n) {
	var r = n(0);
	r(r.S, "Number", {
		isInteger: n(104)
	})
}, function(e, t, n) {
	var r = n(0);
	r(r.S, "Number", {
		isNaN: function(e) {
			return e != e
		}
	})
}, function(e, t, n) {
	var r = n(0),
		o = n(104),
		a = Math.abs;
	r(r.S, "Number", {
		isSafeInteger: function(e) {
			return o(e) && a(e) <= 9007199254740991
		}
	})
}, function(e, t, n) {
	var r = n(0);
	r(r.S, "Number", {
		MAX_SAFE_INTEGER: 9007199254740991
	})
}, function(e, t, n) {
	var r = n(0);
	r(r.S, "Number", {
		MIN_SAFE_INTEGER: -9007199254740991
	})
}, function(e, t, n) {
	var r = n(0),
		o = n(123);
	r(r.S + r.F * (Number.parseFloat != o), "Number", {
		parseFloat: o
	})
}, function(e, t, n) {
	var r = n(0),
		o = n(122);
	r(r.S + r.F * (Number.parseInt != o), "Number", {
		parseInt: o
	})
}, function(e, t, n) {
	var r = n(0),
		o = n(105),
		a = Math.sqrt,
		i = Math.acosh;
	r(r.S + r.F * !(i && 710 == Math.floor(i(Number.MAX_VALUE)) && i(1 / 0) == 1 / 0), "Math", {
		acosh: function(e) {
			return (e = +e) < 1 ? NaN : e > 94906265.62425156 ? Math.log(e) + Math.LN2 : o(e - 1 + a(e - 1) * a(e + 1))
		}
	})
}, function(e, t, n) {
	var r = n(0),
		o = Math.asinh;
	r(r.S + r.F * !(o && 1 / o(0) > 0), "Math", {
		asinh: function e(t) {
			return isFinite(t = +t) && 0 != t ? t < 0 ? -e(-t) : Math.log(t + Math.sqrt(t * t + 1)) : t
		}
	})
}, function(e, t, n) {
	var r = n(0),
		o = Math.atanh;
	r(r.S + r.F * !(o && 1 / o(-0) < 0), "Math", {
		atanh: function(e) {
			return 0 == (e = +e) ? e : Math.log((1 + e) / (1 - e)) / 2
		}
	})
}, function(e, t, n) {
	var r = n(0),
		o = n(73);
	r(r.S, "Math", {
		cbrt: function(e) {
			return o(e = +e) * Math.pow(Math.abs(e), 1 / 3)
		}
	})
}, function(e, t, n) {
	var r = n(0);
	r(r.S, "Math", {
		clz32: function(e) {
			return (e >>>= 0) ? 31 - Math.floor(Math.log(e + .5) * Math.LOG2E) : 32
		}
	})
}, function(e, t, n) {
	var r = n(0),
		o = Math.exp;
	r(r.S, "Math", {
		cosh: function(e) {
			return (o(e = +e) + o(-e)) / 2
		}
	})
}, function(e, t, n) {
	var r = n(0),
		o = n(74);
	r(r.S + r.F * (o != Math.expm1), "Math", {
		expm1: o
	})
}, function(e, t, n) {
	var r = n(0);
	r(r.S, "Math", {
		fround: n(170)
	})
}, function(e, t, n) {
	var r = n(73),
		o = Math.pow,
		a = o(2, -52),
		i = o(2, -23),
		s = o(2, 127) * (2 - i),
		c = o(2, -126);
	e.exports = Math.fround ||
	function(e) {
		var t, n, o = Math.abs(e),
			u = r(e);
		return o < c ? u * (o / c / i + 1 / a - 1 / a) * c * i : (n = (t = (1 + i / a) * o) - (t - o)) > s || n != n ? u * (1 / 0) : u * n
	}
}, function(e, t, n) {
	var r = n(0),
		o = Math.abs;
	r(r.S, "Math", {
		hypot: function(e, t) {
			for (var n, r, a = 0, i = 0, s = arguments.length, c = 0; i < s;) c < (n = o(arguments[i++])) ? (a = a * (r = c / n) * r + 1, c = n) : a += n > 0 ? (r = n / c) * r : n;
			return c === 1 / 0 ? 1 / 0 : c * Math.sqrt(a)
		}
	})
}, function(e, t, n) {
	var r = n(0),
		o = Math.imul;
	r(r.S + r.F * n(4)(function() {
		return -5 != o(4294967295, 5) || 2 != o.length
	}), "Math", {
		imul: function(e, t) {
			var n = +e,
				r = +t,
				o = 65535 & n,
				a = 65535 & r;
			return 0 | o * a + ((65535 & n >>> 16) * a + o * (65535 & r >>> 16) << 16 >>> 0)
		}
	})
}, function(e, t, n) {
	var r = n(0);
	r(r.S, "Math", {
		log10: function(e) {
			return Math.log(e) * Math.LOG10E
		}
	})
}, function(e, t, n) {
	var r = n(0);
	r(r.S, "Math", {
		log1p: n(105)
	})
}, function(e, t, n) {
	var r = n(0);
	r(r.S, "Math", {
		log2: function(e) {
			return Math.log(e) / Math.LN2
		}
	})
}, function(e, t, n) {
	var r = n(0);
	r(r.S, "Math", {
		sign: n(73)
	})
}, function(e, t, n) {
	var r = n(0),
		o = n(74),
		a = Math.exp;
	r(r.S + r.F * n(4)(function() {
		return -2e-17 != !Math.sinh(-2e-17)
	}), "Math", {
		sinh: function(e) {
			return Math.abs(e = +e) < 1 ? (o(e) - o(-e)) / 2 : (a(e - 1) - a(-e - 1)) * (Math.E / 2)
		}
	})
}, function(e, t, n) {
	var r = n(0),
		o = n(74),
		a = Math.exp;
	r(r.S, "Math", {
		tanh: function(e) {
			var t = o(e = +e),
				n = o(-e);
			return t == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (t - n) / (a(e) + a(-e))
		}
	})
}, function(e, t, n) {
	var r = n(0);
	r(r.S, "Math", {
		trunc: function(e) {
			return (e > 0 ? Math.floor : Math.ceil)(e)
		}
	})
}, function(e, t, n) {
	var r = n(0),
		o = n(41),
		a = String.fromCharCode,
		i = String.fromCodePoint;
	r(r.S + r.F * ( !! i && 1 != i.length), "String", {
		fromCodePoint: function(e) {
			for (var t, n = [], r = arguments.length, i = 0; r > i;) {
				if (t = +arguments[i++], o(t, 1114111) !== t) throw RangeError(t + " is not a valid code point");
				n.push(t < 65536 ? a(t) : a(55296 + ((t -= 65536) >> 10), t % 1024 + 56320))
			}
			return n.join("")
		}
	})
}, function(e, t, n) {
	var r = n(0),
		o = n(19),
		a = n(10);
	r(r.S, "String", {
		raw: function(e) {
			for (var t = o(e.raw), n = a(t.length), r = arguments.length, i = [], s = 0; n > s;) i.push(String(t[s++])), s < r && i.push(String(arguments[s]));
			return i.join("")
		}
	})
}, function(e, t, n) {
	"use strict";
	n(56)("trim", function(e) {
		return function() {
			return e(this, 3)
		}
	})
}, function(e, t, n) {
	"use strict";
	var r = n(75)(!0);
	n(76)(String, "String", function(e) {
		this._t = String(e), this._i = 0
	}, function() {
		var e, t = this._t,
			n = this._i;
		return n >= t.length ? {
			value: void 0,
			done: !0
		} : (e = r(t, n), this._i += e.length, {
			value: e,
			done: !1
		})
	})
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(75)(!1);
	r(r.P, "String", {
		codePointAt: function(e) {
			return o(this, e)
		}
	})
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(10),
		a = n(77),
		i = "".endsWith;
	r(r.P + r.F * n(79)("endsWith"), "String", {
		endsWith: function(e) {
			var t = a(this, e, "endsWith"),
				n = arguments.length > 1 ? arguments[1] : void 0,
				r = o(t.length),
				s = void 0 === n ? r : Math.min(o(n), r),
				c = String(e);
			return i ? i.call(t, c, s) : t.slice(s - c.length, s) === c
		}
	})
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(77);
	r(r.P + r.F * n(79)("includes"), "String", {
		includes: function(e) {
			return !!~o(this, e, "includes").indexOf(e, arguments.length > 1 ? arguments[1] : void 0)
		}
	})
}, function(e, t, n) {
	var r = n(0);
	r(r.P, "String", {
		repeat: n(92)
	})
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(10),
		a = n(77),
		i = "".startsWith;
	r(r.P + r.F * n(79)("startsWith"), "String", {
		startsWith: function(e) {
			var t = a(this, e, "startsWith"),
				n = o(Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length)),
				r = String(e);
			return i ? i.call(t, r, n) : t.slice(n, n + r.length) === r
		}
	})
}, function(e, t, n) {
	"use strict";
	n(14)("anchor", function(e) {
		return function(t) {
			return e(this, "a", "name", t)
		}
	})
}, function(e, t, n) {
	"use strict";
	n(14)("big", function(e) {
		return function() {
			return e(this, "big", "", "")
		}
	})
}, function(e, t, n) {
	"use strict";
	n(14)("blink", function(e) {
		return function() {
			return e(this, "blink", "", "")
		}
	})
}, function(e, t, n) {
	"use strict";
	n(14)("bold", function(e) {
		return function() {
			return e(this, "b", "", "")
		}
	})
}, function(e, t, n) {
	"use strict";
	n(14)("fixed", function(e) {
		return function() {
			return e(this, "tt", "", "")
		}
	})
}, function(e, t, n) {
	"use strict";
	n(14)("fontcolor", function(e) {
		return function(t) {
			return e(this, "font", "color", t)
		}
	})
}, function(e, t, n) {
	"use strict";
	n(14)("fontsize", function(e) {
		return function(t) {
			return e(this, "font", "size", t)
		}
	})
}, function(e, t, n) {
	"use strict";
	n(14)("italics", function(e) {
		return function() {
			return e(this, "i", "", "")
		}
	})
}, function(e, t, n) {
	"use strict";
	n(14)("link", function(e) {
		return function(t) {
			return e(this, "a", "href", t)
		}
	})
}, function(e, t, n) {
	"use strict";
	n(14)("small", function(e) {
		return function() {
			return e(this, "small", "", "")
		}
	})
}, function(e, t, n) {
	"use strict";
	n(14)("strike", function(e) {
		return function() {
			return e(this, "strike", "", "")
		}
	})
}, function(e, t, n) {
	"use strict";
	n(14)("sub", function(e) {
		return function() {
			return e(this, "sub", "", "")
		}
	})
}, function(e, t, n) {
	"use strict";
	n(14)("sup", function(e) {
		return function() {
			return e(this, "sup", "", "")
		}
	})
}, function(e, t, n) {
	var r = n(0);
	r(r.S, "Date", {
		now: function() {
			return (new Date).getTime()
		}
	})
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(13),
		a = n(26);
	r(r.P + r.F * n(4)(function() {
		return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
			toISOString: function() {
				return 1
			}
		})
	}), "Date", {
		toJSON: function(e) {
			var t = o(this),
				n = a(t);
			return "number" != typeof n || isFinite(n) ? t.toISOString() : null
		}
	})
}, function(e, t, n) {
	var r = n(0),
		o = n(205);
	r(r.P + r.F * (Date.prototype.toISOString !== o), "Date", {
		toISOString: o
	})
}, function(e, t, n) {
	"use strict";
	var r = n(4),
		o = Date.prototype.getTime,
		a = Date.prototype.toISOString,
		i = function(e) {
			return e > 9 ? e : "0" + e
		};
	e.exports = r(function() {
		return "0385-07-25T07:06:39.999Z" != a.call(new Date(-5e13 - 1))
	}) || !r(function() {
		a.call(new Date(NaN))
	}) ?
	function() {
		if (!isFinite(o.call(this))) throw RangeError("Invalid time value");
		var e = this,
			t = e.getUTCFullYear(),
			n = e.getUTCMilliseconds(),
			r = t < 0 ? "-" : t > 9999 ? "+" : "";
		return r + ("00000" + Math.abs(t)).slice(r ? -6 : -4) + "-" + i(e.getUTCMonth() + 1) + "-" + i(e.getUTCDate()) + "T" + i(e.getUTCHours()) + ":" + i(e.getUTCMinutes()) + ":" + i(e.getUTCSeconds()) + "." + (n > 99 ? n : "0" + i(n)) + "Z"
	} : a
}, function(e, t, n) {
	var r = Date.prototype,
		o = r.toString,
		a = r.getTime;
	new Date(NaN) + "" != "Invalid Date" && n(16)(r, "toString", function() {
		var e = a.call(this);
		return e == e ? o.call(this) : "Invalid Date"
	})
}, function(e, t, n) {
	var r = n(8)("toPrimitive"),
		o = Date.prototype;
	r in o || n(18)(o, r, n(208))
}, function(e, t, n) {
	"use strict";
	var r = n(6),
		o = n(26);
	e.exports = function(e) {
		if ("string" !== e && "number" !== e && "default" !== e) throw TypeError("Incorrect hint");
		return o(r(this), "number" != e)
	}
}, function(e, t, n) {
	var r = n(0);
	r(r.S, "Array", {
		isArray: n(69)
	})
}, function(e, t, n) {
	"use strict";
	var r = n(27),
		o = n(0),
		a = n(13),
		i = n(106),
		s = n(80),
		c = n(10),
		u = n(81),
		l = n(82);
	o(o.S + o.F * !n(57)(function(e) {
		Array.from(e)
	}), "Array", {
		from: function(e) {
			var t, n, o, f, d = a(e),
				p = "function" == typeof this ? this : Array,
				g = arguments.length,
				h = g > 1 ? arguments[1] : void 0,
				_ = void 0 !== h,
				v = 0,
				m = l(d);
			if (_ && (h = r(h, g > 2 ? arguments[2] : void 0, 2)), null == m || p == Array && s(m)) for (n = new p(t = c(d.length)); t > v; v++) u(n, v, _ ? h(d[v], v) : d[v]);
			else for (f = m.call(d), n = new p; !(o = f.next()).done; v++) u(n, v, _ ? i(f, h, [o.value, v], !0) : o.value);
			return n.length = v, n
		}
	})
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(81);
	r(r.S + r.F * n(4)(function() {
		function e() {}
		return !(Array.of.call(e) instanceof e)
	}), "Array", {
		of: function() {
			for (var e = 0, t = arguments.length, n = new("function" == typeof this ? this : Array)(t); t > e;) o(n, e, arguments[e++]);
			return n.length = t, n
		}
	})
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(22),
		a = n(13),
		i = n(4),
		s = [].sort,
		c = [1, 2, 3];
	r(r.P + r.F * (i(function() {
		c.sort(void 0)
	}) || !i(function() {
		c.sort(null)
	}) || !n(21)(s)), "Array", {
		sort: function(e) {
			return void 0 === e ? s.call(a(this)) : s.call(a(this), o(e))
		}
	})
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(24)(0),
		a = n(21)([].forEach, !0);
	r(r.P + r.F * !a, "Array", {
		forEach: function(e) {
			return o(this, e, arguments[1])
		}
	})
}, function(e, t, n) {
	var r = n(215);
	e.exports = function(e, t) {
		return new(r(e))(t)
	}
}, function(e, t, n) {
	var r = n(7),
		o = n(69),
		a = n(8)("species");
	e.exports = function(e) {
		var t;
		return o(e) && ("function" != typeof(t = e.constructor) || t !== Array && !o(t.prototype) || (t = void 0), r(t) && null === (t = t[a]) && (t = void 0)), void 0 === t ? Array : t
	}
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(24)(1);
	r(r.P + r.F * !n(21)([].map, !0), "Array", {
		map: function(e) {
			return o(this, e, arguments[1])
		}
	})
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(24)(2);
	r(r.P + r.F * !n(21)([].filter, !0), "Array", {
		filter: function(e) {
			return o(this, e, arguments[1])
		}
	})
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(24)(3);
	r(r.P + r.F * !n(21)([].some, !0), "Array", {
		some: function(e) {
			return o(this, e, arguments[1])
		}
	})
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(24)(4);
	r(r.P + r.F * !n(21)([].every, !0), "Array", {
		every: function(e) {
			return o(this, e, arguments[1])
		}
	})
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(107);
	r(r.P + r.F * !n(21)([].reduce, !0), "Array", {
		reduce: function(e) {
			return o(this, e, arguments.length, arguments[1], !1)
		}
	})
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(107);
	r(r.P + r.F * !n(21)([].reduceRight, !0), "Array", {
		reduceRight: function(e) {
			return o(this, e, arguments.length, arguments[1], !0)
		}
	})
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(54)(!1),
		a = [].indexOf,
		i = !! a && 1 / [1].indexOf(1, -0) < 0;
	r(r.P + r.F * (i || !n(21)(a)), "Array", {
		indexOf: function(e) {
			return i ? a.apply(this, arguments) || 0 : o(this, e, arguments[1])
		}
	})
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(19),
		a = n(25),
		i = n(10),
		s = [].lastIndexOf,
		c = !! s && 1 / [1].lastIndexOf(1, -0) < 0;
	r(r.P + r.F * (c || !n(21)(s)), "Array", {
		lastIndexOf: function(e) {
			if (c) return s.apply(this, arguments) || 0;
			var t = o(this),
				n = i(t.length),
				r = n - 1;
			for (arguments.length > 1 && (r = Math.min(r, a(arguments[1]))), r < 0 && (r = n + r); r >= 0; r--) if (r in t && t[r] === e) return r || 0;
			return -1
		}
	})
}, function(e, t, n) {
	var r = n(0);
	r(r.P, "Array", {
		copyWithin: n(108)
	}), n(44)("copyWithin")
}, function(e, t, n) {
	var r = n(0);
	r(r.P, "Array", {
		fill: n(83)
	}), n(44)("fill")
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(24)(5),
		a = !0;
	"find" in [] && Array(1).find(function() {
		a = !1
	}), r(r.P + r.F * a, "Array", {
		find: function(e) {
			return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
		}
	}), n(44)("find")
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(24)(6),
		a = "findIndex",
		i = !0;
	a in [] && Array(1)[a](function() {
		i = !1
	}), r(r.P + r.F * i, "Array", {
		findIndex: function(e) {
			return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
		}
	}), n(44)(a)
}, function(e, t, n) {
	n(45)("Array")
}, function(e, t, n) {
	var r = n(5),
		o = n(72),
		a = n(9).f,
		i = n(40).f,
		s = n(78),
		c = n(58),
		u = r.RegExp,
		l = u,
		f = u.prototype,
		d = /a/g,
		p = /a/g,
		g = new u(d) !== d;
	if (n(11) && (!g || n(4)(function() {
		return p[n(8)("match")] = !1, u(d) != d || u(p) == p || "/a/i" != u(d, "i")
	}))) {
		u = function(e, t) {
			var n = this instanceof u,
				r = s(e),
				a = void 0 === t;
			return !n && r && e.constructor === u && a ? e : o(g ? new l(r && !a ? e.source : e, t) : l((r = e instanceof u) ? e.source : e, r && a ? c.call(e) : t), n ? this : f, u)
		};
		for (var h = function(e) {
				e in u || a(u, e, {
					configurable: !0,
					get: function() {
						return l[e]
					},
					set: function(t) {
						l[e] = t
					}
				})
			}, _ = i(l), v = 0; _.length > v;) h(_[v++]);
		f.constructor = u, u.prototype = f, n(16)(r, "RegExp", u)
	}
	n(45)("RegExp")
}, function(e, t, n) {
	"use strict";
	n(110);
	var r = n(6),
		o = n(58),
		a = n(11),
		i = /./.toString,
		s = function(e) {
			n(16)(RegExp.prototype, "toString", e, !0)
		};
	n(4)(function() {
		return "/a/b" != i.call({
			source: "a",
			flags: "b"
		})
	}) ? s(function() {
		var e = r(this);
		return "/".concat(e.source, "/", "flags" in e ? e.flags : !a && e instanceof RegExp ? o.call(e) : void 0)
	}) : "toString" != i.name && s(function() {
		return i.call(this)
	})
}, function(e, t, n) {
	"use strict";
	var r = n(6),
		o = n(10),
		a = n(86),
		i = n(59);
	n(60)("match", 1, function(e, t, n, s) {
		return [function(n) {
			var r = e(this),
				o = null == n ? void 0 : n[t];
			return void 0 !== o ? o.call(n, r) : new RegExp(n)[t](String(r))
		}, function(e) {
			var t = s(n, e, this);
			if (t.done) return t.value;
			var c = r(e),
				u = String(this);
			if (!c.global) return i(c, u);
			var l = c.unicode;
			c.lastIndex = 0;
			for (var f, d = [], p = 0; null !== (f = i(c, u));) {
				var g = String(f[0]);
				d[p] = g, "" === g && (c.lastIndex = a(u, o(c.lastIndex), l)), p++
			}
			return 0 === p ? null : d
		}]
	})
}, function(e, t, n) {
	"use strict";
	var r = n(6),
		o = n(13),
		a = n(10),
		i = n(25),
		s = n(86),
		c = n(59),
		u = Math.max,
		l = Math.min,
		f = Math.floor,
		d = /\$([$&`']|\d\d?|<[^>]*>)/g,
		p = /\$([$&`']|\d\d?)/g;
	n(60)("replace", 2, function(e, t, n, g) {
		return [function(r, o) {
			var a = e(this),
				i = null == r ? void 0 : r[t];
			return void 0 !== i ? i.call(r, a, o) : n.call(String(a), r, o)
		}, function(e, t) {
			var o = g(n, e, this, t);
			if (o.done) return o.value;
			var f = r(e),
				d = String(this),
				p = "function" == typeof t;
			p || (t = String(t));
			var _ = f.global;
			if (_) {
				var v = f.unicode;
				f.lastIndex = 0
			}
			for (var m = [];;) {
				var y = c(f, d);
				if (null === y) break;
				if (m.push(y), !_) break;
				"" === String(y[0]) && (f.lastIndex = s(d, a(f.lastIndex), v))
			}
			for (var T, S = "", b = 0, E = 0; E < m.length; E++) {
				y = m[E];
				for (var w = String(y[0]), x = u(l(i(y.index), d.length), 0), C = [], A = 1; A < y.length; A++) C.push(void 0 === (T = y[A]) ? T : String(T));
				var O = y.groups;
				if (p) {
					var L = [w].concat(C, x, d);
					void 0 !== O && L.push(O);
					var R = String(t.apply(void 0, L))
				} else R = h(w, d, x, C, O, t);
				x >= b && (S += d.slice(b, x) + R, b = x + w.length)
			}
			return S + d.slice(b)
		}];

		function h(e, t, r, a, i, s) {
			var c = r + e.length,
				u = a.length,
				l = p;
			return void 0 !== i && (i = o(i), l = d), n.call(s, l, function(n, o) {
				var s;
				switch (o.charAt(0)) {
				case "$":
					return "$";
				case "&":
					return e;
				case "`":
					return t.slice(0, r);
				case "'":
					return t.slice(c);
				case "<":
					s = i[o.slice(1, -1)];
					break;
				default:
					var l = +o;
					if (0 === l) return n;
					if (l > u) {
						var d = f(l / 10);
						return 0 === d ? n : d <= u ? void 0 === a[d - 1] ? o.charAt(1) : a[d - 1] + o.charAt(1) : n
					}
					s = a[l - 1]
				}
				return void 0 === s ? "" : s
			})
		}
	})
}, function(e, t, n) {
	"use strict";
	var r = n(6),
		o = n(101),
		a = n(59);
	n(60)("search", 1, function(e, t, n, i) {
		return [function(n) {
			var r = e(this),
				o = null == n ? void 0 : n[t];
			return void 0 !== o ? o.call(n, r) : new RegExp(n)[t](String(r))
		}, function(e) {
			var t = i(n, e, this);
			if (t.done) return t.value;
			var s = r(e),
				c = String(this),
				u = s.lastIndex;
			o(u, 0) || (s.lastIndex = 0);
			var l = a(s, c);
			return o(s.lastIndex, u) || (s.lastIndex = u), null === l ? -1 : l.index
		}]
	})
}, function(e, t, n) {
	"use strict";
	var r = n(78),
		o = n(6),
		a = n(50),
		i = n(86),
		s = n(10),
		c = n(59),
		u = n(85),
		l = n(4),
		f = Math.min,
		d = [].push,
		p = !l(function() {
			RegExp(4294967295, "y")
		});
	n(60)("split", 2, function(e, t, n, l) {
		var g;
		return g = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ?
		function(e, t) {
			var o = String(this);
			if (void 0 === e && 0 === t) return [];
			if (!r(e)) return n.call(o, e, t);
			for (var a, i, s, c = [], l = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), f = 0, p = void 0 === t ? 4294967295 : t >>> 0, g = new RegExp(e.source, l + "g");
			(a = u.call(g, o)) && !((i = g.lastIndex) > f && (c.push(o.slice(f, a.index)), a.length > 1 && a.index < o.length && d.apply(c, a.slice(1)), s = a[0].length, f = i, c.length >= p));) g.lastIndex === a.index && g.lastIndex++;
			return f === o.length ? !s && g.test("") || c.push("") : c.push(o.slice(f)), c.length > p ? c.slice(0, p) : c
		} : "0".split(void 0, 0).length ?
		function(e, t) {
			return void 0 === e && 0 === t ? [] : n.call(this, e, t)
		} : n, [function(n, r) {
			var o = e(this),
				a = null == n ? void 0 : n[t];
			return void 0 !== a ? a.call(n, o, r) : g.call(String(o), n, r)
		}, function(e, t) {
			var r = l(g, e, this, t, g !== n);
			if (r.done) return r.value;
			var u = o(e),
				d = String(this),
				h = a(u, RegExp),
				_ = u.unicode,
				v = (u.ignoreCase ? "i" : "") + (u.multiline ? "m" : "") + (u.unicode ? "u" : "") + (p ? "y" : "g"),
				m = new h(p ? u : "^(?:" + u.source + ")", v),
				y = void 0 === t ? 4294967295 : t >>> 0;
			if (0 === y) return [];
			if (0 === d.length) return null === c(m, d) ? [d] : [];
			for (var T = 0, S = 0, b = []; S < d.length;) {
				m.lastIndex = p ? S : 0;
				var E, w = c(m, p ? d : d.slice(S));
				if (null === w || (E = f(s(m.lastIndex + (p ? 0 : S)), d.length)) === T) S = i(d, S, _);
				else {
					if (b.push(d.slice(T, S)), b.length === y) return b;
					for (var x = 1; x <= w.length - 1; x++) if (b.push(w[x]), b.length === y) return b;
					S = T = E
				}
			}
			return b.push(d.slice(T)), b
		}]
	})
}, function(e, t, n) {
	var r = n(5),
		o = n(87).set,
		a = r.MutationObserver || r.WebKitMutationObserver,
		i = r.process,
		s = r.Promise,
		c = "process" == n(32)(i);
	e.exports = function() {
		var e, t, n, u = function() {
				var r, o;
				for (c && (r = i.domain) && r.exit(); e;) {
					o = e.fn, e = e.next;
					try {
						o()
					} catch (r) {
						throw e ? n() : t = void 0, r
					}
				}
				t = void 0, r && r.enter()
			};
		if (c) n = function() {
			i.nextTick(u)
		};
		else if (!a || r.navigator && r.navigator.standalone) if (s && s.resolve) {
			var l = s.resolve(void 0);
			n = function() {
				l.then(u)
			}
		} else n = function() {
			o.call(r, u)
		};
		else {
			var f = !0,
				d = document.createTextNode("");
			new a(u).observe(d, {
				characterData: !0
			}), n = function() {
				d.data = f = !f
			}
		}
		return function(r) {
			var o = {
				fn: r,
				next: void 0
			};
			t && (t.next = o), e || (e = o, n()), t = o
		}
	}
}, function(e, t) {
	e.exports = function(e) {
		try {
			return {
				e: !1,
				v: e()
			}
		} catch (e) {
			return {
				e: !0,
				v: e
			}
		}
	}
}, function(e, t, n) {
	"use strict";
	var r = n(113),
		o = n(48);
	e.exports = n(63)("Map", function(e) {
		return function() {
			return e(this, arguments.length > 0 ? arguments[0] : void 0)
		}
	}, {
		get: function(e) {
			var t = r.getEntry(o(this, "Map"), e);
			return t && t.v
		},
		set: function(e, t) {
			return r.def(o(this, "Map"), 0 === e ? 0 : e, t)
		}
	}, r, !0)
}, function(e, t, n) {
	"use strict";
	var r = n(113),
		o = n(48);
	e.exports = n(63)("Set", function(e) {
		return function() {
			return e(this, arguments.length > 0 ? arguments[0] : void 0)
		}
	}, {
		add: function(e) {
			return r.def(o(this, "Set"), e = 0 === e ? 0 : e, e)
		}
	}, r)
}, function(e, t, n) {
	"use strict";
	var r, o = n(24)(0),
		a = n(16),
		i = n(31),
		s = n(100),
		c = n(114),
		u = n(7),
		l = n(4),
		f = n(48),
		d = i.getWeak,
		p = Object.isExtensible,
		g = c.ufstore,
		h = {},
		_ = function(e) {
			return function() {
				return e(this, arguments.length > 0 ? arguments[0] : void 0)
			}
		},
		v = {
			get: function(e) {
				if (u(e)) {
					var t = d(e);
					return !0 === t ? g(f(this, "WeakMap")).get(e) : t ? t[this._i] : void 0
				}
			},
			set: function(e, t) {
				return c.def(f(this, "WeakMap"), e, t)
			}
		},
		m = e.exports = n(63)("WeakMap", _, v, c, !0, !0);
	l(function() {
		return 7 != (new m).set((Object.freeze || Object)(h), 7).get(h)
	}) && (s((r = c.getConstructor(_, "WeakMap")).prototype, v), i.NEED = !0, o(["delete", "has", "get", "set"], function(e) {
		var t = m.prototype,
			n = t[e];
		a(t, e, function(t, o) {
			if (u(t) && !p(t)) {
				this._f || (this._f = new r);
				var a = this._f[e](t, o);
				return "set" == e ? this : a
			}
			return n.call(this, t, o)
		})
	}))
}, function(e, t, n) {
	"use strict";
	var r = n(114),
		o = n(48);
	n(63)("WeakSet", function(e) {
		return function() {
			return e(this, arguments.length > 0 ? arguments[0] : void 0)
		}
	}, {
		add: function(e) {
			return r.def(o(this, "WeakSet"), e, !0)
		}
	}, r, !1, !0)
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(64),
		a = n(88),
		i = n(6),
		s = n(41),
		c = n(10),
		u = n(7),
		l = n(5).ArrayBuffer,
		f = n(50),
		d = a.ArrayBuffer,
		p = a.DataView,
		g = o.ABV && l.isView,
		h = d.prototype.slice,
		_ = o.VIEW;
	r(r.G + r.W + r.F * (l !== d), {
		ArrayBuffer: d
	}), r(r.S + r.F * !o.CONSTR, "ArrayBuffer", {
		isView: function(e) {
			return g && g(e) || u(e) && _ in e
		}
	}), r(r.P + r.U + r.F * n(4)(function() {
		return !new d(2).slice(1, void 0).byteLength
	}), "ArrayBuffer", {
		slice: function(e, t) {
			if (void 0 !== h && void 0 === t) return h.call(i(this), e);
			for (var n = i(this).byteLength, r = s(e, n), o = s(void 0 === t ? n : t, n), a = new(f(this, d))(c(o - r)), u = new p(this), l = new p(a), g = 0; r < o;) l.setUint8(g++, u.getUint8(r++));
			return a
		}
	}), n(45)("ArrayBuffer")
}, function(e, t, n) {
	var r = n(0);
	r(r.G + r.W + r.F * !n(64).ABV, {
		DataView: n(88).DataView
	})
}, function(e, t, n) {
	n(29)("Int8", 1, function(e) {
		return function(t, n, r) {
			return e(this, t, n, r)
		}
	})
}, function(e, t, n) {
	n(29)("Uint8", 1, function(e) {
		return function(t, n, r) {
			return e(this, t, n, r)
		}
	})
}, function(e, t, n) {
	n(29)("Uint8", 1, function(e) {
		return function(t, n, r) {
			return e(this, t, n, r)
		}
	}, !0)
}, function(e, t, n) {
	n(29)("Int16", 2, function(e) {
		return function(t, n, r) {
			return e(this, t, n, r)
		}
	})
}, function(e, t, n) {
	n(29)("Uint16", 2, function(e) {
		return function(t, n, r) {
			return e(this, t, n, r)
		}
	})
}, function(e, t, n) {
	n(29)("Int32", 4, function(e) {
		return function(t, n, r) {
			return e(this, t, n, r)
		}
	})
}, function(e, t, n) {
	n(29)("Uint32", 4, function(e) {
		return function(t, n, r) {
			return e(this, t, n, r)
		}
	})
}, function(e, t, n) {
	n(29)("Float32", 4, function(e) {
		return function(t, n, r) {
			return e(this, t, n, r)
		}
	})
}, function(e, t, n) {
	n(29)("Float64", 8, function(e) {
		return function(t, n, r) {
			return e(this, t, n, r)
		}
	})
}, function(e, t, n) {
	var r = n(0),
		o = n(22),
		a = n(6),
		i = (n(5).Reflect || {}).apply,
		s = Function.apply;
	r(r.S + r.F * !n(4)(function() {
		i(function() {})
	}), "Reflect", {
		apply: function(e, t, n) {
			var r = o(e),
				c = a(n);
			return i ? i(r, t, c) : s.call(r, t, c)
		}
	})
}, function(e, t, n) {
	var r = n(0),
		o = n(39),
		a = n(22),
		i = n(6),
		s = n(7),
		c = n(4),
		u = n(102),
		l = (n(5).Reflect || {}).construct,
		f = c(function() {
			function e() {}
			return !(l(function() {}, [], e) instanceof e)
		}),
		d = !c(function() {
			l(function() {})
		});
	r(r.S + r.F * (f || d), "Reflect", {
		construct: function(e, t) {
			a(e), i(t);
			var n = arguments.length < 3 ? e : a(arguments[2]);
			if (d && !f) return l(e, t, n);
			if (e == n) {
				switch (t.length) {
				case 0:
					return new e;
				case 1:
					return new e(t[0]);
				case 2:
					return new e(t[0], t[1]);
				case 3:
					return new e(t[0], t[1], t[2]);
				case 4:
					return new e(t[0], t[1], t[2], t[3])
				}
				var r = [null];
				return r.push.apply(r, t), new(u.apply(e, r))
			}
			var c = n.prototype,
				p = o(s(c) ? c : Object.prototype),
				g = Function.apply.call(e, p, t);
			return s(g) ? g : p
		}
	})
}, function(e, t, n) {
	var r = n(9),
		o = n(0),
		a = n(6),
		i = n(26);
	o(o.S + o.F * n(4)(function() {
		Reflect.defineProperty(r.f({}, 1, {
			value: 1
		}), 1, {
			value: 2
		})
	}), "Reflect", {
		defineProperty: function(e, t, n) {
			a(e), t = i(t, !0), a(n);
			try {
				return r.f(e, t, n), !0
			} catch (e) {
				return !1
			}
		}
	})
}, function(e, t, n) {
	var r = n(0),
		o = n(20).f,
		a = n(6);
	r(r.S, "Reflect", {
		deleteProperty: function(e, t) {
			var n = o(a(e), t);
			return !(n && !n.configurable) && delete e[t]
		}
	})
}, function(e, t, n) {
	var r = n(20),
		o = n(33),
		a = n(17),
		i = n(0),
		s = n(7),
		c = n(6);
	i(i.S, "Reflect", {
		get: function e(t, n) {
			var i, u, l = arguments.length < 3 ? t : arguments[2];
			return c(t) === l ? t[n] : (i = r.f(t, n)) ? a(i, "value") ? i.value : void 0 !== i.get ? i.get.call(l) : void 0 : s(u = o(t)) ? e(u, n, l) : void 0
		}
	})
}, function(e, t, n) {
	var r = n(20),
		o = n(0),
		a = n(6);
	o(o.S, "Reflect", {
		getOwnPropertyDescriptor: function(e, t) {
			return r.f(a(e), t)
		}
	})
}, function(e, t, n) {
	var r = n(0),
		o = n(33),
		a = n(6);
	r(r.S, "Reflect", {
		getPrototypeOf: function(e) {
			return o(a(e))
		}
	})
}, function(e, t, n) {
	var r = n(0);
	r(r.S, "Reflect", {
		has: function(e, t) {
			return t in e
		}
	})
}, function(e, t, n) {
	var r = n(0),
		o = n(6),
		a = Object.isExtensible;
	r(r.S, "Reflect", {
		isExtensible: function(e) {
			return o(e), !a || a(e)
		}
	})
}, function(e, t, n) {
	var r = n(0);
	r(r.S, "Reflect", {
		ownKeys: n(116)
	})
}, function(e, t, n) {
	var r = n(0),
		o = n(6),
		a = Object.preventExtensions;
	r(r.S, "Reflect", {
		preventExtensions: function(e) {
			o(e);
			try {
				return a && a(e), !0
			} catch (e) {
				return !1
			}
		}
	})
}, function(e, t, n) {
	var r = n(9),
		o = n(20),
		a = n(33),
		i = n(17),
		s = n(0),
		c = n(36),
		u = n(6),
		l = n(7);
	s(s.S, "Reflect", {
		set: function e(t, n, s) {
			var f, d, p = arguments.length < 4 ? t : arguments[3],
				g = o.f(u(t), n);
			if (!g) {
				if (l(d = a(t))) return e(d, n, s, p);
				g = c(0)
			}
			if (i(g, "value")) {
				if (!1 === g.writable || !l(p)) return !1;
				if (f = o.f(p, n)) {
					if (f.get || f.set || !1 === f.writable) return !1;
					f.value = s, r.f(p, n, f)
				} else r.f(p, n, c(0, s));
				return !0
			}
			return void 0 !== g.set && (g.set.call(p, s), !0)
		}
	})
}, function(e, t, n) {
	var r = n(0),
		o = n(70);
	o && r(r.S, "Reflect", {
		setPrototypeOf: function(e, t) {
			o.check(e, t);
			try {
				return o.set(e, t), !0
			} catch (e) {
				return !1
			}
		}
	})
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(54)(!0);
	r(r.P, "Array", {
		includes: function(e) {
			return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
		}
	}), n(44)("includes")
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(117),
		a = n(62);
	r(r.P + r.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(a), "String", {
		padStart: function(e) {
			return o(this, e, arguments.length > 1 ? arguments[1] : void 0, !0)
		}
	})
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(117),
		a = n(62);
	r(r.P + r.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(a), "String", {
		padEnd: function(e) {
			return o(this, e, arguments.length > 1 ? arguments[1] : void 0, !1)
		}
	})
}, function(e, t, n) {
	n(96)("asyncIterator")
}, function(e, t, n) {
	var r = n(0),
		o = n(116),
		a = n(19),
		i = n(20),
		s = n(81);
	r(r.S, "Object", {
		getOwnPropertyDescriptors: function(e) {
			for (var t, n, r = a(e), c = i.f, u = o(r), l = {}, f = 0; u.length > f;) void 0 !== (n = c(r, t = u[f++])) && s(l, t, n);
			return l
		}
	})
}, function(e, t, n) {
	var r = n(0),
		o = n(118)(!1);
	r(r.S, "Object", {
		values: function(e) {
			return o(e)
		}
	})
}, function(e, t, n) {
	var r = n(0),
		o = n(118)(!0);
	r(r.S, "Object", {
		entries: function(e) {
			return o(e)
		}
	})
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(15),
		a = n(5),
		i = n(50),
		s = n(112);
	r(r.P + r.R, "Promise", {
		finally: function(e) {
			var t = i(this, o.Promise || a.Promise),
				n = "function" == typeof e;
			return this.then(n ?
			function(n) {
				return s(t, e()).then(function() {
					return n
				})
			} : e, n ?
			function(n) {
				return s(t, e()).then(function() {
					throw n
				})
			} : e)
		}
	})
}, function(e, t, n) {
	var r = n(5),
		o = n(0),
		a = n(62),
		i = [].slice,
		s = /MSIE .\./.test(a),
		c = function(e) {
			return function(t, n) {
				var r = arguments.length > 2,
					o = !! r && i.call(arguments, 2);
				return e(r ?
				function() {
					("function" == typeof t ? t : Function(t)).apply(this, o)
				} : t, n)
			}
		};
	o(o.G + o.B + o.F * s, {
		setTimeout: c(r.setTimeout),
		setInterval: c(r.setInterval)
	})
}, function(e, t, n) {
	var r = n(0),
		o = n(87);
	r(r.G + r.B, {
		setImmediate: o.set,
		clearImmediate: o.clear
	})
}, function(e, t, n) {
	for (var r = n(84), o = n(38), a = n(16), i = n(5), s = n(18), c = n(43), u = n(8), l = u("iterator"), f = u("toStringTag"), d = c.Array, p = {
		CSSRuleList: !0,
		CSSStyleDeclaration: !1,
		CSSValueList: !1,
		ClientRectList: !1,
		DOMRectList: !1,
		DOMStringList: !1,
		DOMTokenList: !0,
		DataTransferItemList: !1,
		FileList: !1,
		HTMLAllCollection: !1,
		HTMLCollection: !1,
		HTMLFormElement: !1,
		HTMLSelectElement: !1,
		MediaList: !0,
		MimeTypeArray: !1,
		NamedNodeMap: !1,
		NodeList: !0,
		PaintRequestList: !1,
		Plugin: !1,
		PluginArray: !1,
		SVGLengthList: !1,
		SVGNumberList: !1,
		SVGPathSegList: !1,
		SVGPointList: !1,
		SVGStringList: !1,
		SVGTransformList: !1,
		SourceBufferList: !1,
		StyleSheetList: !0,
		TextTrackCueList: !1,
		TextTrackList: !1,
		TouchList: !1
	}, g = o(p), h = 0; h < g.length; h++) {
		var _, v = g[h],
			m = p[v],
			y = i[v],
			T = y && y.prototype;
		if (T && (T[l] || s(T, l, d), T[f] || s(T, f, v), c[v] = d, m)) for (_ in r) T[_] || a(T, _, r[_], !0)
	}
}, function(e, t, n) {
	(function(e) {
		function t(e) {
			return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
			function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}!
		function(n) {
			"use strict";
			var r, o = Object.prototype,
				a = o.hasOwnProperty,
				i = "function" == typeof Symbol ? Symbol : {},
				s = i.iterator || "@@iterator",
				c = i.asyncIterator || "@@asyncIterator",
				u = i.toStringTag || "@@toStringTag",
				l = "object" === t(e),
				f = n.regeneratorRuntime;
			if (f) l && (e.exports = f);
			else {
				(f = n.regeneratorRuntime = l ? e.exports : {}).wrap = S;
				var d = "suspendedStart",
					p = "suspendedYield",
					g = "executing",
					h = "completed",
					_ = {},
					v = {};
				v[s] = function() {
					return this
				};
				var m = Object.getPrototypeOf,
					y = m && m(m(P([])));
				y && y !== o && a.call(y, s) && (v = y);
				var T = x.prototype = E.prototype = Object.create(v);
				w.prototype = T.constructor = x, x.constructor = w, x[u] = w.displayName = "GeneratorFunction", f.isGeneratorFunction = function(e) {
					var t = "function" == typeof e && e.constructor;
					return !!t && (t === w || "GeneratorFunction" === (t.displayName || t.name))
				}, f.mark = function(e) {
					return Object.setPrototypeOf ? Object.setPrototypeOf(e, x) : (e.__proto__ = x, u in e || (e[u] = "GeneratorFunction")), e.prototype = Object.create(T), e
				}, f.awrap = function(e) {
					return {
						__await: e
					}
				}, C(A.prototype), A.prototype[c] = function() {
					return this
				}, f.AsyncIterator = A, f.async = function(e, t, n, r) {
					var o = new A(S(e, t, n, r));
					return f.isGeneratorFunction(t) ? o : o.next().then(function(e) {
						return e.done ? e.value : o.next()
					})
				}, C(T), T[u] = "Generator", T[s] = function() {
					return this
				}, T.toString = function() {
					return "[object Generator]"
				}, f.keys = function(e) {
					var t = [];
					for (var n in e) t.push(n);
					return t.reverse(), function n() {
						for (; t.length;) {
							var r = t.pop();
							if (r in e) return n.value = r, n.done = !1, n
						}
						return n.done = !0, n
					}
				}, f.values = P, N.prototype = {
					constructor: N,
					reset: function(e) {
						if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(R), !e) for (var t in this)"t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = r)
					},
					stop: function() {
						this.done = !0;
						var e = this.tryEntries[0].completion;
						if ("throw" === e.type) throw e.arg;
						return this.rval
					},
					dispatchException: function(e) {
						if (this.done) throw e;
						var t = this;

						function n(n, o) {
							return s.type = "throw", s.arg = e, t.next = n, o && (t.method = "next", t.arg = r), !! o
						}
						for (var o = this.tryEntries.length - 1; o >= 0; --o) {
							var i = this.tryEntries[o],
								s = i.completion;
							if ("root" === i.tryLoc) return n("end");
							if (i.tryLoc <= this.prev) {
								var c = a.call(i, "catchLoc"),
									u = a.call(i, "finallyLoc");
								if (c && u) {
									if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
									if (this.prev < i.finallyLoc) return n(i.finallyLoc)
								} else if (c) {
									if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
								} else {
									if (!u) throw new Error("try statement without catch or finally");
									if (this.prev < i.finallyLoc) return n(i.finallyLoc)
								}
							}
						}
					},
					abrupt: function(e, t) {
						for (var n = this.tryEntries.length - 1; n >= 0; --n) {
							var r = this.tryEntries[n];
							if (r.tryLoc <= this.prev && a.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
								var o = r;
								break
							}
						}
						o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
						var i = o ? o.completion : {};
						return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, _) : this.complete(i)
					},
					complete: function(e, t) {
						if ("throw" === e.type) throw e.arg;
						return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), _
					},
					finish: function(e) {
						for (var t = this.tryEntries.length - 1; t >= 0; --t) {
							var n = this.tryEntries[t];
							if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), R(n), _
						}
					},
					catch: function(e) {
						for (var t = this.tryEntries.length - 1; t >= 0; --t) {
							var n = this.tryEntries[t];
							if (n.tryLoc === e) {
								var r = n.completion;
								if ("throw" === r.type) {
									var o = r.arg;
									R(n)
								}
								return o
							}
						}
						throw new Error("illegal catch attempt")
					},
					delegateYield: function(e, t, n) {
						return this.delegate = {
							iterator: P(e),
							resultName: t,
							nextLoc: n
						}, "next" === this.method && (this.arg = r), _
					}
				}
			}
			function S(e, t, n, r) {
				var o = t && t.prototype instanceof E ? t : E,
					a = Object.create(o.prototype),
					i = new N(r || []);
				return a._invoke = function(e, t, n) {
					var r = d;
					return function(o, a) {
						if (r === g) throw new Error("Generator is already running");
						if (r === h) {
							if ("throw" === o) throw a;
							return I()
						}
						for (n.method = o, n.arg = a;;) {
							var i = n.delegate;
							if (i) {
								var s = O(i, n);
								if (s) {
									if (s === _) continue;
									return s
								}
							}
							if ("next" === n.method) n.sent = n._sent = n.arg;
							else if ("throw" === n.method) {
								if (r === d) throw r = h, n.arg;
								n.dispatchException(n.arg)
							} else "return" === n.method && n.abrupt("return", n.arg);
							r = g;
							var c = b(e, t, n);
							if ("normal" === c.type) {
								if (r = n.done ? h : p, c.arg === _) continue;
								return {
									value: c.arg,
									done: n.done
								}
							}
							"throw" === c.type && (r = h, n.method = "throw", n.arg = c.arg)
						}
					}
				}(e, n, i), a
			}
			function b(e, t, n) {
				try {
					return {
						type: "normal",
						arg: e.call(t, n)
					}
				} catch (e) {
					return {
						type: "throw",
						arg: e
					}
				}
			}
			function E() {}
			function w() {}
			function x() {}
			function C(e) {
				["next", "throw", "return"].forEach(function(t) {
					e[t] = function(e) {
						return this._invoke(t, e)
					}
				})
			}
			function A(e) {
				var n;
				this._invoke = function(r, o) {
					function i() {
						return new Promise(function(n, i) {
							!
							function n(r, o, i, s) {
								var c = b(e[r], e, o);
								if ("throw" !== c.type) {
									var u = c.arg,
										l = u.value;
									return l && "object" === t(l) && a.call(l, "__await") ? Promise.resolve(l.__await).then(function(e) {
										n("next", e, i, s)
									}, function(e) {
										n("throw", e, i, s)
									}) : Promise.resolve(l).then(function(e) {
										u.value = e, i(u)
									}, function(e) {
										return n("throw", e, i, s)
									})
								}
								s(c.arg)
							}(r, o, n, i)
						})
					}
					return n = n ? n.then(i, i) : i()
				}
			}
			function O(e, t) {
				var n = e.iterator[t.method];
				if (n === r) {
					if (t.delegate = null, "throw" === t.method) {
						if (e.iterator.
						return &&(t.method = "return", t.arg = r, O(e, t), "throw" === t.method)) return _;
						t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
					}
					return _
				}
				var o = b(n, e.iterator, t.arg);
				if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, _;
				var a = o.arg;
				return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = r), t.delegate = null, _) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, _)
			}
			function L(e) {
				var t = {
					tryLoc: e[0]
				};
				1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
			}
			function R(e) {
				var t = e.completion || {};
				t.type = "normal", delete t.arg, e.completion = t
			}
			function N(e) {
				this.tryEntries = [{
					tryLoc: "root"
				}], e.forEach(L, this), this.reset(!0)
			}
			function P(e) {
				if (e) {
					var t = e[s];
					if (t) return t.call(e);
					if ("function" == typeof e.next) return e;
					if (!isNaN(e.length)) {
						var n = -1,
							o = function t() {
								for (; ++n < e.length;) if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
								return t.value = r, t.done = !0, t
							};
						return o.next = o
					}
				}
				return {
					next: I
				}
			}
			function I() {
				return {
					value: r,
					done: !0
				}
			}
		}(function() {
			return this || "object" === ("undefined" == typeof self ? "undefined" : t(self)) && self
		}() || Function("return this")())
	}).call(this, n(277)(e))
}, function(e, t) {
	e.exports = function(e) {
		return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
			enumerable: !0,
			get: function() {
				return e.l
			}
		}), Object.defineProperty(e, "id", {
			enumerable: !0,
			get: function() {
				return e.i
			}
		}), e.webpackPolyfill = 1), e
	}
}, , , , function(e, t, n) {
	"use strict";

	function r(e, t) {
		for (var n = 0; n < t.length; n++) {
			var r = t[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
		}
	}
	n.d(t, "a", function() {
		return a
	});
	var o = 0,
		a = function() {
			function e(t, n, r) {
				var a = r.useContext,
					i = r.smartTargetEditingAvailable;
				!
				function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this._registeredTranslations = new Object(null), this.sourceSentences = [], this.targetSentences = [], this.targetText = void 0, this._id = "LangContext_#" + o+++"_" + t + "_" + JSON.stringify(n), this._sourceLang = t, this._targetLangSettings = n, this._contextEnabled = a, this._smartTargetEditingAvailable = i, this._translationJobParams = new Map, this._translationRequestParams = new Map, this._targetLangSettings.variant && this.setTranslationJobParams("regionVariant", {
					regionalVariant: this._targetLangSettings.variant
				})
			}
			var t, n, a;
			return t = e, (n = [{
				key: "createJobSettings",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
					return {
						langConfig: null !== e ? e : this.getLangConfigForTranslation(),
						priority: t,
						commonJobParams: this.getTranslationJobParams(),
						requestParams: this.getTranslationRequestParams()
					}
				}
			}, {
				key: "clearSentences",
				value: function() {
					this.sourceSentences.splice(0), this.targetSentences.splice(0), this.targetText = ""
				}
			}, {
				key: "getId",
				value: function() {
					return this._id
				}
			}, {
				key: "getLangConfigForTranslation",
				value: function() {
					return {
						source_lang_computed: this._sourceLang,
						target_lang: this._targetLangSettings.lang
					}
				}
			}, {
				key: "getRegisteredTranslation",
				value: function(e) {
					return this._registeredTranslations[e]
				}
			}, {
				key: "getSourceLang",
				value: function() {
					return this._sourceLang
				}
			}, {
				key: "getSourceSentences",
				value: function() {
					return this.sourceSentences
				}
			}, {
				key: "getTargetLang",
				value: function() {
					return this._targetLangSettings.lang
				}
			}, {
				key: "getTargetLangSettings",
				value: function() {
					return this._targetLangSettings
				}
			}, {
				key: "getTargetSentences",
				value: function() {
					return this.targetSentences
				}
			}, {
				key: "isContextEnabled",
				value: function() {
					return this._contextEnabled
				}
			}, {
				key: "isSmartTargetEditingAvailable",
				value: function() {
					return this._smartTargetEditingAvailable
				}
			}, {
				key: "registerTranslation",
				value: function(e, t) {
					this._registeredTranslations[e] = t
				}
			}, {
				key: "setTranslationJobParams",
				value: function(e, t) {
					this._translationJobParams.set(e, t)
				}
			}, {
				key: "setTranslationRequestParams",
				value: function(e, t) {
					this._translationRequestParams.set(e, t)
				}
			}, {
				key: "getTranslationJobParams",
				value: function() {
					var e = {};
					return this._translationJobParams.forEach(function(t) {
						Object.assign(e, t)
					}), e
				}
			}, {
				key: "getTranslationRequestParams",
				value: function() {
					var e = {};
					return this._translationRequestParams.forEach(function(t) {
						Object.assign(e, t)
					}), e
				}
			}]) && r(t.prototype, n), a && r(t, a), e
		}()
}, function(e, t, n) {
	"use strict";
	n.r(t);
	var r = n(129);

	function o() {
		return r.
	default.logging && "undefined" != typeof window ? console.log.bind(window.console):


		function() {}
	}
	"undefined" != typeof window && window.M && window.M.registerAsync("LMT_log", o), t.
default = o
}, , function(e, t, n) {
	var r = n(32);
	e.exports = function(e, t) {
		if ("number" != typeof e && "Number" != r(e)) throw TypeError(t);
		return +e
	}
}, , , , , , , function(e, t, n) {
	"use strict";
	n.r(t);
	n(1), n(94), n(120), n(89), n(93), n(2), n(129);

	function r(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) ||
		function(e, t) {
			var n = [],
				r = !0,
				o = !1,
				a = void 0;
			try {
				for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
			} catch (e) {
				o = !0, a = e
			} finally {
				try {
					r || null == s.
					return ||s.
					return ()
				} finally {
					if (o) throw a
				}
			}
			return n
		}(e, t) ||
		function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}()
	}
	function o(e) {
		return function(e) {
			if (Array.isArray(e)) {
				for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
				return n
			}
		}(e) ||
		function(e) {
			if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
		}(e) ||
		function() {
			throw new TypeError("Invalid attempt to spread non-iterable instance")
		}()
	}
	function a(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = null != arguments[t] ? arguments[t] : {},
				r = Object.keys(n);
			"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
				return Object.getOwnPropertyDescriptor(n, e).enumerable
			}))), r.forEach(function(t) {
				i(e, t, n[t])
			})
		}
		return e
	}
	function i(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}
	window.dl_documentReady || (window.dl_documentReady = function(e) {
		(window.dl_documentReady._callbacks || (window.dl_documentReady._callbacks = [])).push(e)
	}), window.dl_pageState && M.define("dlPageState", ["queryVars"], function(e) {
		var t = window.dl_pageState;
		t.hasFeatureFlag = function(e) {
			return t.featureFlags && t.featureFlags.includes(e)
		};
		var n = e.windows_app_version,
			r = e.macos_app_version,
			o = "";
		return (n || r) && (o = n ? "".concat("windows_app_version", "=").concat(n) : "".concat("macos_app_version", "=").concat(r)), o && (t.isNativeApp = !0, t.nativeAppVersionURLQuery = o), t
	}), window.dl_texts && M.define("dlTexts", [], function() {
		var e = window.dl_texts;
		return e.get = function(t, n) {
			return e.hasOwnProperty(t) ? e[t] : void 0 !== n ? n : (console.warn("[dlTexts] Text not found: '" + t + "'"), t)
		}, e
	}), M.define("dlStats", ["U", "dlAnalytics", "dlPrivacy"], function(e, t, n) {
		return {
			countStats: function(t, r, o) {
				if (n.isDataUseAllowed()) {
					var a = e.persistentValue("s." + t, o);
					a(r(a()))
				}
			},
			getStats: function(t, r) {
				return n.isDataUseAllowed() ? e.persistentValue("s." + t, r) : e.value(0)
			},
			countEvent: function(e, r) {
				n.isDataUseAllowed() && ("number" == typeof r ? t.send({
					action: e,
					value: r
				}) : t.send({
					action: e,
					label: r
				}))
			}
		}
	}), M.define("dlMainMenu", ["kDeepL", "U", "H2", "$"], function(e, t, n, r) {
		var o, a = t.createCallOnce();

		function i(e, t) {
			r(e).hasClass("dl_open") ? a() : function(e, t) {
				a();
				var i = r(e);
				o || (o = n.createTemplateContainer()).insertAfter(".dl_header");
				var s = n.createNodes("string" == typeof t ? {
					type: t
				} : t),
					c = r(s[0].content || s[0].childNodes);
				c.appendTo(o).addClass("dl_open"), setTimeout(function() {
					c.addClass("dl_open_2").on("keydown", function(e) {
						27 === e.keyCode && (a(), i.focus())
					}).find("input").on("keydown", function(e) {
						27 === e.keyCode && (a(), i.focus())
					})
				});
				var u = i.offset();
				u.left = Math.floor(u.left + i.outerWidth()), u.top += i.outerHeight(), c.css(u), i.addClass("dl_open").blur().closest(".dl_header_menu__menu_items").addClass("dl_header_menu__menu_items--open"), a.push(function() {
					i.removeClass("dl_open"), c.removeClass("dl_open_2"), setTimeout(function() {
						c.remove()
					}, 500), i.closest(".dl_header_menu__menu_items").removeClass("dl_header_menu__menu_items--open")
				})
			}(e, t)
		}
		return window.dl_documentReady(function() {
			r("body").click(function(e) {
				0 == r(e.target).closest(".dl_open, .dl_opener").length && a()
			})
		}), window.dlMainMenu = {
			toggleMenu: i,
			toggleAdminMenu: function(t) {
				i(t, {
					type: "dl_administration_menu",
					hasNotes: e._adminNotesAvailable || !1
				})
			}
		}
	}), M.register("dlPriceCalculator", function(e) {
		var t = this;
		Object.defineProperty(t, "characterLimit", {
			get: function() {
				return this._characterLimit
			},
			set: function(e) {
				this._characterLimit = Math.min(Math.max(e, this.productCharacterLimit), 1e12 - 1)
			}
		}), Object.defineProperty(t, "words", {
			get: function() {
				return Math.floor(this._characterLimit / 7)
			},
			set: function(e) {
				this.characterLimit = 7 * e
			}
		}), Object.defineProperty(t, "additionalCharacters", {
			get: function() {
				return Math.max(0, this.characterLimit - this.productCharacterLimit)
			},
			set: function(e) {
				this.characterLimit = this.productCharacterLimit + Math.max(0, window.kDeepL.parseLimit(e))
			}
		}), Object.defineProperty(t, "additionalPrice", {
			get: function() {
				return t.productPrice * t.additionalCharacters / t.productCharacterLimit
			},
			set: function(e) {
				t.additionalCharacters = Math.max(0, window.kDeepL.parsePrice(e) * t.productCharacterLimit / t.productPrice)
			}
		}), Object.defineProperty(t, "price", {
			get: function() {
				return t.productPrice + t.additionalPrice
			},
			set: function(e) {
				t.additionalPrice = Math.min(e, 2e6 - .01) - t.productPrice
			}
		}), void 0 !== e ? (this.productCharacterLimit = window.kDeepL.parseLimit(e.productCharacterLimit), this.characterLimit = Math.max(window.kDeepL.parseLimit(e.characterLimit), this.productCharacterLimit), this.productPrice = window.kDeepL.parsePrice(e.price), this.currency = e.currency) : (this.productCharacterLimit = null, this.characterLimit = null, this.productPrice = null, this.currency = null), this.copyDataTo = function(e) {
			e.productCharacterLimit = this.productCharacterLimit, e.characterLimit = this.characterLimit, e.productPrice = this.productPrice, e.currency = this.currency
		}
	}), M.define("dlPrivacy", ["$", "U", "dlPageState"], function(e, t, n) {
		function r() {
			e.removeCookie("_ga", {
				path: "/",
				domain: ".deepl.com"
			}), e.removeCookie("_gid", {
				path: "/",
				domain: ".deepl.com"
			}), e.removeCookie("_gat", {
				path: "/",
				domain: ".deepl.com"
			}), e.removeCookie("LMTBID", {
				path: "/",
				domain: ".deepl.com"
			}), window.localStorage && localStorage.removeItem("initialReferrer"), window.localStorage && localStorage.removeItem("s"), window.localStorage && localStorage.removeItem("t")
		}
		function o() {
			return t.persistentValue("appPrivacy.doNotSave", !1)
		}
		n.dataUseProhibited && r();
		var a = t.value(n.dataUseProhibited);
		return a.onValueChanged.push(function(t) {
			console.log("[dlPrivacy] dataUseProhibited", t), t ? (e.cookie("data-use-prohibited", "true", {
				expires: 7305,
				path: "/"
			}), n.dataUseProhibited = !0, r()) : (e.removeCookie("data-use-prohibited", {
				path: "/"
			}), n.dataUseProhibited = !1)
		}), {
			getAppDataUseProhibitedValue: o,
			isAppDataUseProhibited: function() {
				return o()()
			},
			setAppDataUseProhibited: function(e) {
				return o()(e)
			},
			getDataUseProhibitedValue: function() {
				return a
			},
			isDataUseProhibited: function() {
				return a()
			},
			isDataUseAllowed: function() {
				return !a()
			},
			setDataUseProhibited: function(e) {
				return a(e)
			}
		}
	}), M.define("dlRPC", ["RPC", "dlPageState", "dlTexts"], function(e, t, n) {
		function r(n) {
			return e.connectTo({
				url: n + "?request_type=jsonrpc&il=" + t.il.toUpperCase().substr(0, 2),
				method: "POST",
				withCredentials: !0
			})
		}
		return {
			getBackend: r,
			getBackend_account: function() {
				return r("https://www.deepl.com/PHP/backend/account.php")
			},
			_callFunction: function(e, t, n) {
				return r(e).callFunction.apply(null, Array.prototype.slice.call(arguments, 1))
			},
			rpcError_to_dlError: function(t) {
				var r = {
					_rpcError: t
				};
				try {
					t.errorType === e.ErrorTypes.REMOTE_ERROR ? (console.log(t), 20 === t.code ? (r.type = "pageError", r.message = JSON.parse(t.data).join("<hr/>") || n["messages/error.internal"] || "An internal error occurred. Please reload the page and try again later.") : 21 === t.code ? (r.type = "fieldErrors", r.errors = JSON.parse(t.data)) : (r.type = "pageError", r.message = n["messages/error.internal"] || "An internal error occurred. Please reload the page and try again later.", console.warn(r))) : t.errorType === e.ErrorTypes.REQUEST_FAILED && (r.type = "pageError", r.message = n["messages/error.networkError"] || "Connection problems. Please try again later.")
				} catch (e) {
					console.error(e)
				}
				return r.type || (r.type = "pageError", r.message = n["messages/error.internal"] || "An internal error occurred. Please reload the page and try again later.", console.warn(r)), r
			}
		}
	}), M.define("dlAnalytics", ["dlPrivacy", "U", "dlPageState", "dlClientState", "RPC"], function(e, t, n, r, o) {
		var i = "[dlAnalytics]",
			s = !1;
		return r.whenAvailable(function() {
			return u({
				eventName: "pageview",
				data: {}
			})
		}), {
			send: c,
			sendDAP: u,
			sendOncePerSession: function(e) {
				var n = e.eventName,
					r = e.eventParams,
					o = t.sessionValue(n, !1),
					a = function() {
						o() || c(r), o(!0)
					};
				return a(), a
			}
		};

		function c(t) {
			var r = t.category,
				o = void 0 === r ? "" : r,
				a = t.action,
				c = void 0 === a ? "" : a,
				u = t.label,
				l = void 0 === u ? "" : u,
				f = t.value,
				d = void 0 === f ? 1 : f,
				p = t.callback,
				g = void 0 === p ? null : p,
				h = t.dryRun,
				_ = void 0 !== h && h;
			if (e.isDataUseAllowed()) {
				var v = {
					hitType: "event",
					eventCategory: o,
					eventAction: c,
					eventLabel: l,
					eventValue: d
				};
				g && (v.hitCallback = g), window.ga ? ((s || _) && console.log(i, "send", v), !s && !_ && window.ga("send", v)) : n.devMode && console.warn(i, "ga not found!")
			}
		}
		function u(n) {
			var r = n.eventName,
				c = void 0 === r ? "" : r,
				u = n.context,
				l = void 0 === u ? "web" : u,
				f = n.data,
				d = void 0 === f ? {} : f;
			if (e.isDataUseAllowed()) {
				var p = t.persistentValue("clientVars.uid")();
				if (p) {
					var g = window.location,
						h = g.origin + g.pathname,
						_ = g.search || "",
						v = h.toLowerCase().includes("translator") ? "" : g.hash || "",
						m = !1;
					setTimeout(function() {
						if (window.ga && window.ga.loaded && window.ga.length > 0) {
							var e = window._gaUserPrefs;
							e && e.ioo && !0 === e.ioo() && (s && console.log(i, "ga opt-out plugin active"), m = !0)
						} else m = !0, s && console.log(i, "ga not existent or not properly loaded", "loaded?", window.ga ? window.ga.loaded : "not existent", window.ga && window.ga.length);
						s && console.log(i, "dap", p, l + "/" + c, h + _ + v, m);
						var t = {
							value: {
								instanceId: p,
								event: l + "/" + c,
								url: h + _ + v,
								data: a({}, d, {
									gaBlocked: m,
									referrer: document.referrer
								})
							}
						};
						s && console.log(i, "really send dap", t), o.connectTo({
							url: "https://s.deepl.com/web/stats?request_type=jsonrpc",
							method: "POST"
						}).callFunction("WebAppPushStatistics", t)
					}, 500)
				}
			}
		}
	}), M.define("dlAppLoginHandling", ["U", "dlRPC", "dlTexts", "$", "dlPageState", "queryVars", "dlHeaderMenu", "H2", "dlLoginController"], function(e, t, n, r, o, a, i, s, c) {
		a.appUser &&
		function() {
			if (a.appUser) {
				var r = a.appUser.trim();
				if (c.isLoggedIn()) t.getBackend_account().callFunction("getUserEmail").then(function(t) {
					var o;
					t.email.toLowerCase() !== r.toLowerCase() ? (console.log("users differ"), o = e.value(!1), s.createTemplateContainer({
						type: "dl_app_user_different_from_logged_in_user",
						popupText: n["messages/appWorkflow.appUserDoesNotMatchLoggedInUser"] || "You are logged in with a user different from your app user. Logout and re-login with appuser?",
						doReload: function() {
							return console.log("[dlAppLoginController] reload"), c.logout().then(function() {
								location.href = "https://www.deepl.com/PHP/pro-account.php?appUser=" + a.appUser
							})
						},
						doCancel: function() {
							console.log("doCancel"), o(!0)
						},
						isRemoved: o
					}).appendTo("body")) : console.log("users equal")
				});
				else {
					i.doOpenLoginMenuWithLogin(r);
					var o = window.location.toString().replace(/(?:\?appUser=[^&]+$)|(appUser=[^&]+&)|(&appUser=[^&]+)/, "");
					window.history.replaceState({}, window.title, o)
				}
			} else console.log("no query vars")
		}()
	}), M.define("dlLoginController", ["U", "RPC", "dlRPC", "dlTexts", "$", "dlPageState", "queryVars"], function(e, t, n, r, o, a, i) {
		var s = n.getBackend_account().getFunction("login"),
			c = a.sessionToken,
			u = e.value( !! c),
			l = e.value(),
			f = e.value();

		function d() {
			return new Promise(function(e) {
				var t = (document.cookie.match(/(?:^| )dl_session=([^;]+)/) || [])[1];
				u() ? t && t === c ? e(!0) : g().then(function() {
					c = !1, u(!1), e(!1)
				}, function() {
					c = !1, u(!1), e(!1)
				}) : t && t !== c ? (c = t, u(!0), e(!0)) : e(!1)
			})
		}
		var p = 0;

		function g() {
			return new Promise(function(e, t) {
				var r = c;
				!l() && p < Date.now() - 1e4 ? (p = Date.now(), n.getBackend_account().callFunction("getLogoutReason", {
					sessionToken: r
				}).then(function(t) {
					t.loggedOutReason && (f(t.loggedOutReasonText), l(t.loggedOutReason), u(!1), e())
				}, t)) : e()
			})
		}
		if (u()) {
			var h = !0;
			t._onSuccessHook.push(function() {
				e.setTimeout_consolidated("dlLoginController_checkStatus", d, 500)
			}), t._onErrorHook.push(function(t) {
				u() && !l() && (h && "REQUEST_FAILED" === t.errorType && 403 == t.data.status && (console.log("[dlLoginController] REJECTED.... need to check!"), h = !1, g().then(function() {
					h = !0
				})), e.setTimeout_consolidated("dlLoginController_checkStatus", d, 500))
			}), document.addEventListener("visibilitychange", d)
		}
		return {
			login: function(e, t, n) {
				return new Promise(function(o, a) {
					e = (e || "").trim(), t = t || "";
					var i = [];
					if (e.length || i.push(r["messages/fieldError.login_emailRequired"]), t.length ? t.length < 8 && i.push(r["messages/fieldError.passwordTooShort"]) : i.push(r["messages/fieldError.login_passwordRequired"]), i.length) {
						var c = {
							message: i.join("<br/>\n")
						};
						console.warn(c), a(c)
					} else s({
						email: e,
						password: t,
						keepLogin: n
					}).then(o, function(e) {
						setTimeout(function() {
							a(t)
						}, 1e3), console.warn(e);
						var t = {
							message: "Login not possible at the moment. Please try again later."
						};
						if (21 == e.code) {
							var n = JSON.parse(e.data),
								r = [];
							for (var o in n) n.hasOwnProperty(o) && r.push(n[o]);
							t.message = r.join("<br/>\n")
						} else if (20 == e.code) {
							var i = JSON.parse(e.data);
							t.message = i[0]
						}
					})
				})
			},
			logout: function() {
				return n.getBackend_account().callFunction("logout").then(function() {
					l("LOCAL_LOGOUT"), f(void 0), o.cookie(-1 !== window.location.href.indexOf("beta.deepl.com") ? "dl_beta_session" : "dl_session", null, {
						domain: -1 !== window.location.href.indexOf("beta.deepl.com") ? ".beta.deepl.com" : ".deepl.com"
					}), u(!1)
				})
			},
			isLoggedIn: u,
			logoutReason: l,
			logoutReasonText: f,
			sessionToken: c,
			checkLoginStatus: d
		}
	}), M.define("dlClientState", ["dlRPC", "dlPageState", "U", "dlPrivacy"], function(e, t, n, a) {
		var i = "[dlClientState]",
			s = t.devMode && !1,
			c = e.getBackend("https://www.deepl.com/PHP/backend/clientState.php").getFunction("getClientState"),
			u = new Map,
			l = 0;

		function f(e) {
			clearTimeout(l), l = setTimeout(g, 1e3 * e)
		}
		var d = 0,
			p = n.value(!1);

		function g() {
			clearTimeout(l), l = 0, d = Date.now(), s && console.log(i, "refresh..");
			var e = {
				v: t.v
			};
			a.isDataUseProhibited() && (e.noData = !0);
			var r = [],
				g = {};
			try {
				g = JSON.parse(window.localStorage.getItem("clientVars") || "{}"), r.push.apply(r, o(Object.keys(g).filter(function(e) {
					return !/__%/.test(e)
				})))
			} catch (e) {
				console.warn(e)
			}
			r.length && (e.clientVars = {}, r.forEach(function(t) {
				var n = g[t];
				void 0 !== n && (e.clientVars[t] = n)
			})), c(e).then(function(e) {
				for (var t in f(18e3), s && console.log(i, "data", e), e) {
					var r = null === e[t] ? void 0 : e[t];
					u.has(t) ? u.get(t)(r) : u.set(t, n.value(r))
				}
				p(!0)
			}, function(e) {
				console.error(i, e), f(120)
			})
		}
		function h() {
			!document.hidden && d + 3e5 < Date.now() && g()
		}
		function _(e, t) {
			u.has(e) ? (u.get(e).onValueChanged.push(t), t(u.get(e)())) : (u.set(e, n.value(void 0)), u.get(e).onValueChanged.push(t))
		}
		return document.addEventListener("visibilitychange", h), navigator.connection && navigator.connection.addEventListener("change", h), setTimeout(g), _("clientVars", function(e) {
			Object.entries(e).forEach(function(e) {
				var t = r(e, 2),
					o = t[0],
					a = t[1];
				return n.persistentValue("clientVars." + o, a, 2592e3)(null === a ? void 0 : a)
			})
		}), {
			_refresh: g,
			withValue: _,
			getValue: function(e) {
				return u.has(e) ? u.get(e)() : void 0
			},
			whenAvailable: function(e) {
				n.withValue(p, function(t) {
					if (t) return e(), "REMOVE"
				})
			}
		}
	}), window.localStorage && M.define("dlEnterpriseAccount", ["dlClientState", "dlPageState", "H2", "U", "$"], function(e, t, n, r, o) {
		var a = "[dlEnterpriseAccount]";
		if (!t.loggedIn) {
			var i, s = t.ep,
				c = r.value(!1);
			return s && (i = {
				type: "dl_enterprise_info",
				name: r.value(s.name),
				logo: r.value(s.logo),
				url: r.value(s.url),
				sizingClass: o(".dl_top_element--wide").length ? "dl_top_element--wide" : "dl_top_element--default_spacing",
				confirmed: c
			}, n.createTemplateContainer(i).insertAfter(".dl_header")), e.withValue("ep", function(e) {
				e && s && e.id === s.id ? (window.localStorage.setItem("dl_ep", JSON.stringify(e)), s = e, i.name(s.name), i.logo(s.logo), i.url(s.url), i.confirmed(!0)) : e && !s ? (console.log(a, "Logging in to Enterprise account: ", e), window.localStorage.setItem("dl_ep", JSON.stringify(e)), n.createTemplateContainer({
					type: "dl_enterpise_login_popup",
					name: e.name,
					logo: e.logo,
					url: e.url
				}).appendTo("body"), o("body").addClass("dl_body--with_popup"), setTimeout(function() {
					location.reload(!0)
				}, 2e3)) : (e || s) && (console.log(a, "Logging out from enterprise account"), window.localStorage.removeItem("dl_ep"), n.createTemplateContainer({
					type: "dl_enterpise_logout_popup",
					name: e.name,
					logo: e.logo
				}).appendTo("body"), o("body").addClass("dl_body--with_popup"), setTimeout(function() {
					location.reload(!0)
				}, 5e3))
			}), {
				isConfirmed: c
			}
		}
		localStorage.removeItem("dl_es")
	}), M.define("dlOutdatedSiteUI", ["dlClientState", "H2"], function(e, t) {
		function n() {
			t.createTemplateContainer({
				type: "dl_outdated_site_popup",
				doReload: function() {
					console.log("[dlOutdatedSiteUI] reload"), location.reload(!0)
				}
			}).appendTo("body")
		}
		return e.withValue("updateNecessary", function(e) {
			e && n()
		}), {
			_showPopup: n
		}
	}), M.define("dlSessionLostUI", ["dlLoginController", "H2", "dlPageState", "U"], function(e, t, n, r) {
		var o = "[dlSessionLostUI]",
			a = !1,
			i = !0;

		function s(r) {
			return function(r) {
				return a && console.log(o, "showPopup:", r), t.createTemplateContainer({
					type: "dl_session_lost_popup",
					logoutReason: r || e.logoutReasonText,
					doReload: function() {
						console.log("[dlOutdatedSiteUI] reload"), n.logoutTarget ? location.href = n.logoutTarget : location.reload(!0)
					}
				})
			}(r).appendTo("body")
		}
		return e.isLoggedIn() && r.withValue([e.isLoggedIn, e.logoutReason], function(e, t) {
			i && !e && t && "LOCAL_LOGOUT" !== t && (a && console.log(o, "loggedOut:", e, t), s())
		}), {
			_showPopup: s,
			setEnabled: function(e) {
				return i = e
			}
		}
	}), M.define("dlDetectKeyboardNav", [], function() {
		document.addEventListener("keyup", function(e) {
			var t = e.key || e.keyCode;
			"Tab" !== t && 9 !== t && 39 !== t && 37 !== t && 39 !== t && "ArrowLeft" !== t && "ArrowRight" !== t || document.documentElement.classList.add("dl--keyboard_focus"), "Escape" !== t && 27 !== t || document.dispatchEvent(new Event("global.keyboard.escape"))
		}, {
			passive: !0
		}), document.addEventListener("click", function() {
			document.documentElement.classList.remove("dl--keyboard_focus")
		}, {
			passive: !0
		})
	}), M.define("dlUserDisplayName", ["U", "dlLoginController"], function(e, t) {
		var n = "[dlUserDisplayName]",
			r = !1,
			o = e.value(void 0),
			a = e.persistentValue("user.displayName", void 0, 604800),
			i = e.persistentValue("user.userDisplayName", void 0, 604800),
			s = !1;

		function c(e) {
			o() || (t.isLoggedIn() ? void 0 === o() && (i() || 0) > Date.now() / 1e3 - 86400 ? o(!0) : e && !s && (r && console.log(n, "Fetching display name!"), s = !0, M.requireAsync(["dlRPC"], function(e) {
				e.getBackend_account().callFunction("getUserDisplayName").then(function(e) {
					a(e.displayName), i(Math.round(Date.now() / 1e3)), s = !1, o(!0)
				}, function(e) {
					setTimeout(function() {
						a("---"), i(void 0), s = !1, o(!0), o(!1)
					}, 1e4)
				})
			})) : (a(void 0), i(void 0), o(!0)))
		}
		return c(!1), t.isLoggedIn.onValueChanged.push(function(e) {
			console.log(n, "login/out", e), o(!1), c(!1)
		}), {
			withDisplayName: function(t) {
				o() ? e.withValue(a, t) : (o.onValueChanged.push(function(n) {
					if (n) return e.withValue(a, t), "REMOVE"
				}), c(!0))
			},
			refreshDisplayName: function() {
				o(!1), c(!0)
			}
		}
	}), M.define("dlUserMenu", ["H2", "U", "dlUserDisplayName"], function(e, t, n) {
		var r = t.value(void 0);
		return n.withDisplayName(r), e.connectNodesToValues("body", {
			userMenu: {
				userDisplayName: r
			}
		}), {
			displayName: r
		}
	}), M.define("dlPageScrollLock", ["U"], function(e) {
		var t = e.value(!1);
		return e.withValue(t, function(e) {
			e ? document.documentElement.classList.add("dl--header_popup_open") : document.documentElement.classList.remove("dl--header_popup_open")
		}), {
			enabledState: t
		}
	}), M.define("dlHeaderMenu", ["H2", "U", "dlPageState", "dlLoginController", "dlPageScrollLock", "DeviceProps", "kDeepL"], function(e, t, n, r, o, a) {
		var i = t.value(!1);

		function s() {
			c(!1), i(!1)
		}
		var c = t.value(!1),
			u = t.value(""),
			l = t.value(""),
			f = t.value(!0);

		function d() {
			var e = t.value();
			i({
				type: "dlMainPopup",
				mainSection: {
					type: "dlMainPopup_LoginMainSection",
					data_login: u,
					data_password: l,
					data_keepLogin: f,
					doOpenPasswordForgotten: p,
					loginError: e,
					doLogin: function() {
						e(!1), r.login(u(), l(), f()).then(function(e) {
							e && e.target ? location.href = e.target : location.reload()
						}, function(t) {
							return e(t.message)
						})
					},
					error: ""
				},
				footerSection: {
					type: "dlMainPopup_SignupFooterSection"
				},
				doCloseMenu: s,
				isOpen: c
			}), c(!0)
		}
		function p() {
			var e = t.value(),
				n = t.value(),
				r = t.value(!1);
			i({
				type: "dlMainPopup",
				mainSection: {
					type: "dlMainPopup_ForgotPasswordSection",
					data_login: u,
					errorMessage: e,
					feedbackMessage: n,
					removeInput: r,
					doOpenLoginMenu: d,
					doSendPasswordLink: function() {
						M.requireAsync(["dlRPC"], function(t) {
							n(!1), e(!1), t.getBackend_account().callFunction("sendPasswordLink", {
								email: u()
							}).then(function(e) {
								r(!0), n(e && e.message && e.message.text || "OK")
							}, function(t) {
								if (console.log(t), t) {
									var n = JSON.parse(t.data);
									Object.keys(n).map(function(t) {
										e(n[t])
									})
								}
							})
						})
					}
				},
				footerSection: {
					type: "dlMainPopup_SignupFooterSection"
				},
				doCloseMenu: s,
				isOpen: c
			}), c(!0)
		}
		function g() {
			var e = a.isMac || a.isWin;
			i({
				type: "dlMainPopup",
				mainSection: {
					type: "dlMainPopup_NavMainSection",
					isDownloadAppHidden: !e
				},
				footerSection: n.loggedIn ? {
					type: "dlMainPopup_LogoutSection",
					doLogout: function() {
						return r.logout().then(function() {
							n.logoutTarget ? location.href = n.logoutTarget : location.reload(!0)
						})
					}
				} : {
					type: "dlMainPopup_LoginSection",
					doOpenLoginMenu: d
				},
				doCloseMenu: s,
				isOpen: c
			}), c(!0)
		}
		return t.withValue(c, function(e) {
			o.enabledState(e)
		}), e.connectNodesToValues("body", {
			dlHeaderMenu: {
				content: i,
				doOpenLoginMenu: d,
				doOpenNavMenu: g
			}
		}), {
			doOpenLoginMenuWithLogin: function(e) {
				u(e), d()
			},
			doOpenLoginMenu: d,
			doOpenNavMenu: g,
			_doCloseMenu: s
		}
	}), M.define("AppMenuButton", ["H2", "DeviceProps", "dlAnalytics"], function(e, t, n) {
		var r = document.querySelector(".dl_header_menu_v2__buttons"),
			o = window.matchMedia && window.matchMedia("(max-width : 650px)").matches;
		if (r && !o) {
			var a = function() {
					n.send({
						category: "app",
						action: "downloadButton",
						label: t.isMac ? "mac" : "windows",
						value: 1
					}), setTimeout(function() {
						return location.href = "/app/thanks"
					}, 1200)
				};
			if (t.isWin) {
				var i = e.createNode({
					type: "dl_headerMenu__appButton_windows",
					downloadURL: "https://www.deepl.com/windows/download/full/DeepLSetup.exe",
					onDownload: a
				});
				r.insertBefore(i, r.firstChild)
			} else if (t.isMac) {
				var s = e.createNode({
					type: "dl_headerMenu__appButton_mac",
					downloadURL: "https://www.deepl.com/macos/download/DeepL.dmg",
					onDownload: a
				});
				r.insertBefore(s, r.firstChild)
			}
		}
	}), M.define("dlInitialReferrer", ["dlAnalytics"], function(e) {
		if (window._initialReferrer) {
			var t = ((document.referrer || "").match(/^https:\/\/[^\/]+/g) || [])[0] || "";
			console.log("Welcome from ".concat(t)), t.indexOf("linguee") >= 0 && e.send({
				category: "pageview",
				action: "referredFirstVisit",
				label: t
			}), e.sendDAP({
				eventName: "initialPageview",
				data: {
					referrer: t
				}
			})
		}
	}), M.requireAsync(["$", "dlStats"], function(e, t) {
		e(function() {
			if (console.log("Welcome to DeepL.com!"), window.dl_documentReady) {
				var e = window.dl_documentReady._callbacks;
				for (window.dl_documentReady = function(e) {
					e()
				}; e && e.length;) try {
					e.shift()()
				} catch (e) {
					console.error(e)
				}
				var n = location.href.match(/qc=(.*)($|&)/);
				n && (t.countEvent("tag", n[1]), t.countStats("t", function(e) {
					return e[n[1]] = 1, JSON.parse(JSON.stringify(e))
				}, {}))
			}
		})
	})
}, function(e, t, n) {
	"use strict";
	n.r(t);
	var r = n(1),
		o = n(89),
		a = n(34);

	function i(e, t) {
		for (var n = 0; n < t.length; n++) {
			var r = t[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
		}
	}
	function s(e) {
		return {
			errorType: "LMT_ERROR_TYPE__UNEXPECTED",
			message: e
		}
	}
	var c = "ERROR_TYPE__RPC_ERROR";

	function u(e, t) {
		return {
			errorType: c,
			rpcError: e,
			statusCode: e && e.data && e.data.status,
			trigger: t
		}
	}
	function l(e, t) {
		return o.
	default.connectTo({
			url: e,
			method: "POST",
			timeout: 12e4,
			withCredentials: t,
			f_str: function(e, t) {
				return e.replace('hod":"', (t + 3) % 13 == 0 || (t + 5) % 29 == 0 ? 'hod" : "' : 'hod": "')
			}
		})
	}
	var f = function() {
			function e(t) {
				var n = t.url,
					o = t.enableJobCaching,
					a = void 0 === o || o,
					i = t.isScheduler,
					s = void 0 === i || i,
					c = t.withCredentials,
					u = void 0 === c ? void 0 : c,
					f = t.rpcConfig,
					d = void 0 === f ? void 0 : f,
					p = t.doFinalizeJobRequestParameters,
					g = void 0 === p ? r.
				default.createMultiProcedure():
					p,
					h = t.doFinalizeSentenceSplittingRequestParameters,
					_ = void 0 === h ? r.
				default.createMultiProcedure():
					h,
					v = t.onRequestFailed,
					m = void 0 === v ? r.
				default.createMultiProcedure():
					v,
					y = t.onRequestSucceeded,
					T = void 0 === y ? r.
				default.createMultiProcedure():
					y,
					S = t.onTranslationsReceived,
					b = void 0 === S ? r.
				default.createMultiProcedure():
					S,
					E = t.dbg,
					w = void 0 !== E && E;
				!
				function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this._translationJobCache = {}, this.onRequestSucceeded = T, this.onTranslationsReceived = b, this.onRequestFailed = m, this.rpcConfig = d, this.conf_splittingRequestBatchSize = 1e4, this.doFinalizeJobRequestParameters = g, this.doFinalizeSentenceSplittingRequestParameters = _, this._dbg = w, this._enableJobCaching = a, this._isScheduler = s, void 0 === u && (u = n.startsWith("https://")), this._rpc_splitTextIntoSentences = l(n, u).getFunction("LMT_split_into_sentences");
				var x = l(n, u).getFunction("LMT_handle_jobs");
				this._rpc_sendTranslationJobs = function(e, t) {
					var n = 1,
						r = Date.now();
					return e.jobs && e.jobs.forEach(function(e) {
						return n += ((e.raw_en_sentence || "").match(/[i]/g) || []).length
					}), s && (e.timestamp = r + (n - r % n)), x(e, t)
				}, this._rpc_sendAdditionalData = s ? l(n, u).getFunction("LMT_handleAdditionalData") : null
			}
			var t, n, c;
			return t = e, (n = [{
				key: "requestSentenceSplitting",
				value: function(e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "translations",
						r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						i = this;
					return new Promise(function(s, c) {
						var l = i._dbg;
						l && console.log("[sentenceSplitting] Request.", e);
						var f = /[.!?":？。．！].*\S.*$/m,
							d = [],
							p = [],
							g = {
								splittedTextblocks: [],
								detectedLang: void 0,
								langIsConfident: void 0,
								splitSentenceRequestUsed: void 0
							};
						if (e.forEach(function(e, t) {
							r || e.length >= 200 || e.match(f) || "TRIGGER__SOURCE_LANG_CHANGED" == n || "TRIGGER__TARGET_LANG_CHANGED" == n ? (d.push(e), p.push(t)) : g.splittedTextblocks[t] = [e]
						}), l && console.log("[sentenceSplitting] textblocksToRequest.", d), d.length) {
							var h = a.
						default.splitIntoBatches(d, i.conf_splittingRequestBatchSize, function(e) {
								return e.length
							});
							l && console.log("[sentenceSplitting] Request batches:", JSON.stringify(h));
							var _ = 0,
								v = function(e) {
									if (h.length) {
										var n = h[0];
										l && console.log("[sentenceSplitting] BATCH:", n);
										var r = {
											texts: n,
											lang: t
										};
										i.doFinalizeSentenceSplittingRequestParameters(r), i._rpc_splitTextIntoSentences(r).then(function(e) {
											h.shift(), i.onRequestSucceeded("splitting"), e.splitted_texts.forEach(function(e) {
												g.splittedTextblocks[p[_]] = e, ++_
											}), void 0 === g.detectedLang && (g.detectedLang = e.lang, g.langIsConfident = e.lang_is_confident, g.splitSentenceRequestUsed = !0), v()
										}, function(t) {
											i.onRequestFailed("splitting", t);
											var n = e || 0;
											if (console.warn("[sentenceSplitting] Error during splitting request (retryNr " + n + ": ", t), n >= 3 || t && t.errorType === o.
										default.ErrorTypes.REQUEST_FAILED && t.data && 403 === t.data.status) c(u(t, "splitting"));
											else {
												var r = 3e3 + 5e3 * n;
												console.log("[sentenceSplitting] Trying again in " + r + "ms!"), setTimeout(function() {
													v(n + 1)
												}, r)
											}
										})
									} else s(g)
								};
							v()
						} else l && console.log("[sentenceSplitting] Only one sentence."), g.splitSentenceRequestUsed = !1, setTimeout(function() {
							s(g)
						})
					})
				}
			}, {
				key: "dev_clearTranslationCache",
				value: function() {
					this._translationJobCache = {}, console.log("[TranslationJobHandler] Clear cache!")
				}
			}, {
				key: "_translationJobs_getCacheKey",
				value: function(e, t) {
					return JSON.stringify(e) + ":" + JSON.stringify(t.langConfig) + ":" + JSON.stringify(t.requestParams || "") + ":" + JSON.stringify(t.commonJobParams || "")
				}
			}, {
				key: "sendTranslationJobs",
				value: function(e, t, n) {
					var r = this;
					return new Promise(function(a, i) {
						var c = r._dbg,
							l = t.langConfig,
							f = void 0 === t.priority ? 1 : t.priority,
							d = r._translationJobs_getCacheKey(e, t),
							p = r._translationJobCache[d];
						if (r._enableJobCaching && p) c && console.log("Using cached translation job result.", t), a(p);
						else {
							var g = function(p) {
									var h = {
										jobs: e,
										lang: l,
										priority: f
									};
									t.commonJobParams && (r._isScheduler ? h.commonJobParams = t.commonJobParams : e.forEach(function(e) {
										return Object.assign(e, t.commonJobParams)
									})), t.requestParams && Object.assign(h, t.requestParams), r.doFinalizeJobRequestParameters(h), r._rpc_sendTranslationJobs(h, r.rpcConfig).then(function(t) {
										r.onRequestSucceeded("translation");
										var n = t.translations;
										if (!Array.isArray(n)) return console.warn("Invalid result:"), console.log("<<<< Result: "), console.log(JSON.stringify(t)), console.log(">>>>"), void i(s("Invalid translation results."));
										if (r.onTranslationsReceived(t, n, e, l), n.length == e.length) {
											var o = Object.keys(r._translationJobCache);
											c && console.log("[sendTranslationJobs] Cache: " + o);
											if (o.length >= 400) for (var u = 0; u < 200; u++) delete r._translationJobCache[o[u]];
											r._translationJobCache[d] = t
										}
										a(t)
									}, function(e) {
										c && console.log("[LMT_Backend]", "rpcError", e);
										var t, a = e.data.responseData && e.data.responseData.timeout;
										(r.onRequestFailed("translation", e), console.warn("[sendTranslationJobs] Error during translation request (retryNr " + p + ": ", e), 1042901 === e.code || 1042902 === e.code || 1042911 === e.code || 1042912 === e.code || !a && !n || p >= 3 || e && e.errorType === o.
									default.ErrorTypes.REQUEST_FAILED && e.data && (403 === e.data.status || 456 === e.data.status)) ? i(u(e, "translation")) : (t = a ? 1e3 * parseFloat(e.data.responseData.timeout, 10) : 3e3 + 5e3 * p, console.log("[sendTranslationJobs] Trying again in " + t + "ms!"), setTimeout(function() {
											g(p + 1)
										}, t))
									})
								};
							g(0)
						}
					})
				}
			}, {
				key: "sendTranslationJobs_batched",
				value: function(e, t, n) {
					var o, i = a.
				default.splitIntoBatches(e, n, function(e) {
						return JSON.stringify(e).length
					}),
						c = 0,
						u = 0,
						l = [],
						f = r.
					default.value(-1),
						d = r.
					default.value(!1),
						p = r.
					default.value(!1),
						g = this;
					i.forEach(function(e) {
						g._translationJobCache[g._translationJobs_getCacheKey(e, t)] || ++c;
						var n = 0;
						e.forEach(function(e) {
							return n += e.raw_en_sentence.length
						}), u += n, l.push(n)
					});
					var h = {
						currentBatchId: f,
						getCurrentResult: function() {
							return o
						},
						getNumberOfJobsInCurrentBatch: function() {
							return i[f()].length
						},
						next: function() {
							return new Promise(function(e, n) {
								if (h.finished()) n(s("Already finished!"));
								else {
									f(f() + 1);
									var r = i[f()];
									g.sendTranslationJobs(r, t, t.priority > 0).then(function(t) {
										h.numRemainingCharacters(h.numRemainingCharacters() - l[f()]), o = t, (f() >= i.length - 1 || d()) && p(!0), e(h)
									}, function(e) {
										d(!0), p(!0), n(e)
									})
								}
							})
						},
						finished: p,
						stopped: d,
						numCharactersToTranslate: r.
					default.value(u),
						numRemainingCharacters:
						r.
					default.value(u),
						numNotCachedBatchesToTranslate:
						r.
					default.value(c)
					};
					return h
				}
			}, {
				key: "sendAdditionalData",
				value: function(e) {
					return this._rpc_sendAdditionalData ? this._rpc_sendAdditionalData(e, this.rpcConfig) : new Promise(function() {
						throw new Error("Additional data handling is not available!")
					})
				}
			}]) && i(t.prototype, n), c && i(t, c), e
		}();
	"undefined" != typeof window && window.M && window.M.registerAsync("LMT_Backend", f), t.
default = f
}, function(e, t, n) {
	"use strict";
	(function(e) {
		n(294), n(303), n(304), n(305), n(306), n(307), n(308), n(309), n(310), n(311), n(276), e._babelPolyfill && "undefined" != typeof console && console.warn && console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."), e._babelPolyfill = !0
	}).call(this, n(128))
}, function(e, t, n) {
	n(131), n(133), n(134), n(135), n(136), n(137), n(138), n(139), n(140), n(141), n(142), n(143), n(144), n(145), n(146), n(147), n(148), n(295), n(149), n(150), n(151), n(296), n(297), n(152), n(298), n(299), n(153), n(154), n(155), n(156), n(157), n(158), n(159), n(160), n(161), n(162), n(163), n(164), n(165), n(166), n(167), n(168), n(169), n(171), n(172), n(173), n(174), n(175), n(176), n(177), n(178), n(179), n(180), n(181), n(182), n(183), n(184), n(185), n(186), n(187), n(188), n(189), n(190), n(191), n(192), n(193), n(194), n(195), n(196), n(197), n(198), n(199), n(200), n(201), n(202), n(203), n(204), n(206), n(207), n(209), n(210), n(211), n(300), n(301), n(212), n(213), n(216), n(217), n(218), n(219), n(220), n(221), n(222), n(223), n(224), n(225), n(226), n(227), n(228), n(84), n(229), n(125), n(230), n(110), n(231), n(232), n(233), n(234), n(126), n(237), n(238), n(239), n(240), n(241), n(242), n(243), n(244), n(245), n(246), n(247), n(248), n(249), n(250), n(251), n(252), n(253), n(254), n(255), n(302), n(256), n(257), n(258), n(259), n(260), n(261), n(262), n(263), n(264), e.exports = n(15)
}, function(e, t, n) {
	"use strict";
	var r = n(53),
		o = {};
	o[n(8)("toStringTag")] = "z", o + "" != "[object z]" && n(16)(Object.prototype, "toString", function() {
		return "[object " + r(this) + "]"
	}, !0)
}, function(e, t, n) {
	var r = n(0),
		o = n(122);
	r(r.G + r.F * (parseInt != o), {
		parseInt: o
	})
}, function(e, t, n) {
	var r = n(0),
		o = n(123);
	r(r.G + r.F * (parseFloat != o), {
		parseFloat: o
	})
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(25),
		a = n(284),
		i = n(92),
		s = 1..toFixed,
		c = Math.floor,
		u = [0, 0, 0, 0, 0, 0],
		l = "Number.toFixed: incorrect invocation!",
		f = function(e, t) {
			for (var n = -1, r = t; ++n < 6;) r += e * u[n], u[n] = r % 1e7, r = c(r / 1e7)
		},
		d = function(e) {
			for (var t = 6, n = 0; --t >= 0;) n += u[t], u[t] = c(n / e), n = n % e * 1e7
		},
		p = function() {
			for (var e = 6, t = ""; --e >= 0;) if ("" !== t || 0 === e || 0 !== u[e]) {
				var n = String(u[e]);
				t = "" === t ? n : t + i.call("0", 7 - n.length) + n
			}
			return t
		},
		g = function e(t, n, r) {
			return 0 === n ? r : n % 2 == 1 ? e(t, n - 1, r * t) : e(t * t, n / 2, r)
		};
	r(r.P + r.F * ( !! s && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !n(4)(function() {
		s.call({})
	})), "Number", {
		toFixed: function(e) {
			var t, n, r, s, c = a(this, l),
				u = o(e),
				h = "",
				_ = "0";
			if (u < 0 || u > 20) throw RangeError(l);
			if (c != c) return "NaN";
			if (c <= -1e21 || c >= 1e21) return String(c);
			if (c < 0 && (h = "-", c = -c), c > 1e-21) if (n = (t = function(e) {
				for (var t = 0, n = e; n >= 4096;) t += 12, n /= 4096;
				for (; n >= 2;) t += 1, n /= 2;
				return t
			}(c * g(2, 69, 1)) - 69) < 0 ? c * g(2, -t, 1) : c / g(2, t, 1), n *= 4503599627370496, (t = 52 - t) > 0) {
				for (f(0, n), r = u; r >= 7;) f(1e7, 0), r -= 7;
				for (f(g(10, r, 1), 0), r = t - 1; r >= 23;) d(1 << 23), r -= 23;
				d(1 << r), f(1, 1), d(2), _ = p()
			} else f(0, n), f(1 << -t, 0), _ = p() + i.call("0", u);
			return _ = u > 0 ? h + ((s = _.length) <= u ? "0." + i.call("0", u - s) + _ : _.slice(0, s - u) + "." + _.slice(s - u)) : h + _
		}
	})
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(4),
		a = n(284),
		i = 1..toPrecision;
	r(r.P + r.F * (o(function() {
		return "1" !== i.call(1, void 0)
	}) || !o(function() {
		i.call({})
	})), "Number", {
		toPrecision: function(e) {
			var t = a(this, "Number#toPrecision: incorrect invocation!");
			return void 0 === e ? i.call(t) : i.call(t, e)
		}
	})
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(19),
		a = [].join;
	r(r.P + r.F * (n(52) != Object || !n(21)(a)), "Array", {
		join: function(e) {
			return a.call(o(this), void 0 === e ? "," : e)
		}
	})
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(91),
		a = n(32),
		i = n(41),
		s = n(10),
		c = [].slice;
	r(r.P + r.F * n(4)(function() {
		o && c.call(o)
	}), "Array", {
		slice: function(e, t) {
			var n = s(this.length),
				r = a(this);
			if (t = void 0 === t ? n : t, "Array" == r) return c.call(this, e, t);
			for (var o = i(e, n), u = i(t, n), l = s(u - o), f = new Array(l), d = 0; d < l; d++) f[d] = "String" == r ? this.charAt(o + d) : this[o + d];
			return f
		}
	})
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		o = n(6),
		a = function(e) {
			this._t = o(e), this._i = 0;
			var t, n = this._k = [];
			for (t in e) n.push(t)
		};
	n(124)(a, "Object", function() {
		var e, t = this._k;
		do {
			if (this._i >= t.length) return {
				value: void 0,
				done: !0
			}
		} while (!((e = t[this._i++]) in this._t));
		return {
			value: e,
			done: !1
		}
	}), r(r.S, "Reflect", {
		enumerate: function(e) {
			return new a(e)
		}
	})
}, function(e, t, n) {
	n(265), e.exports = n(15).Array.includes
}, function(e, t, n) {
	n(266), e.exports = n(15).String.padStart
}, function(e, t, n) {
	n(267), e.exports = n(15).String.padEnd
}, function(e, t, n) {
	n(268), e.exports = n(90).f("asyncIterator")
}, function(e, t, n) {
	n(269), e.exports = n(15).Object.getOwnPropertyDescriptors
}, function(e, t, n) {
	n(270), e.exports = n(15).Object.values
}, function(e, t, n) {
	n(271), e.exports = n(15).Object.entries
}, function(e, t, n) {
	"use strict";
	n(126), n(272), e.exports = n(15).Promise.
	finally
}, function(e, t, n) {
	n(273), n(274), n(275), e.exports = n(15)
}, , , , , function(e, t) {
	function n(e) {
		return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}
	var r = window.dl_pageState,
		o = window.M,
		a = window.$;
	Number.prototype.dlPad = function(e) {
		var t = "00000000000000000000" + this;
		return t.substr(t.length - e)
	}, Number.prototype.dlPrice = function() {
		var e = this.toFixed(2);
		return 0 == e ? (0).toFixed(2) : e
	}, Number.prototype.dlLimit = function() {
		var e = Math.floor(this < 0 ? -this : this);
		if (0 == e) return "0";
		for (var t = ""; e > 0;) {
			var n = Math.floor(e % 1e3);
			t.length > 0 && (t = " " + t), (e = Math.floor(e / 1e3)) && (n = n.dlPad(3)), t = n + t
		}
		return this < 0 ? "-" + t : t
	}, String.prototype.dlPrice = function() {
		var e = parseFloat(this);
		return isNaN(e) ? this : e.dlPrice()
	}, String.prototype.dlLimit = function(e) {
		var t = parseInt(this);
		return isNaN(t) ? this : t.dlLimit(e)
	}, Date.prototype.dlDayOffset = function(e) {
		return new Date(this.getTime() + 864e5 * e)
	}, Date.prototype.dlISODate = function() {
		return this.toISOString().substring(0, 10)
	};
	var i = window.kDeepL || {};
	window.kDeepL = i, i.logout = function(e, t) {
		return new Promise(function(n) {
			o.requireAsync(["dlLoginController"], function(o) {
				o.logout().then(function() {
					n();
					var o = e || t || r.logoutTarget;
					o ? location.href = o : location.reload(!0)
				})
			})
		})
	}, i.refresh = function(e, t) {
		var n = Array.prototype.slice.call(arguments, 1);
		return new Promise(function(r, s) {
			var c = t ? void 0 : i.waiting("body", .7);
			c && c.show(), a.post("/PHP/backend/account.php", {
				action: "Refresh",
				"types[]": n
			}, function(t) {
				if (!a.isPlainObject(t)) return console.log("not a plain object"), void s("internal error");
				i.data = t, "account" in t && "token" in t.account && o.requireAsync(["U"], function(e) {
					i._adminNotesAvailable || (i._adminNotesAvailable = e.value(!1)), i._adminNotesAvailable("messageCount" in t && t.messageCount > 0)
				}), e && e(t), r(t)
			}).fail(function(e) {
				s(e)
			}).always(function() {
				c && c.hide()
			})
		})
	}, i.parseLimit = function(e) {
		return "number" == typeof e ? e : Math.round(parseFloat(e.replace(/\s+/g, "")))
	}, i.parsePrice = function(e) {
		return parseFloat(e)
	}, i.formatPrice = function(e) {
		if (o = e, !isNaN(parseFloat(o)) && isFinite(o)) {
			if (void 0 !== n(Number().toLocaleString)) return Number(parseFloat(e)).toLocaleString(r.il, {
				maximumFractionDigits: 2,
				minimumFractionDigits: 2
			});
			var t = parseFloat(e).toFixed(2);
			return "en" != r.il && (t = t.replace(".", ",")), t
		}
		return "";
		var o
	};
	i.formatPriceWithCurrency = function(e) {
		return "en" != r.il ? i.formatPrice(e) + " €" : "€" + i.formatPrice(e)
	}, i.formatPriceWithCurrencySmall = function(e, t) {
		var n = "<span class='" + t + "'>";
		return (i.formatPrice(e) + " €").replace(".", n + ".").replace(",", n + ",") + "</span>"
	}, i.formatDate = function(e) {
		var t = new Date(0);
		return t.setUTCSeconds(e), t.toLocaleDateString()
	}, i.formatCharacterCount = function(e) {
		var t, n, r = parseInt(e) || 0,
			o = Math.floor(r < 0 ? -r : r);
		if (0 == o) return "0";
		for (var a = ""; o > 0;) {
			var i = Math.floor(o % 1e3);
			a.length > 0 && (a = " " + a), (o = Math.floor(o / 1e3)) && (t = 3, n = void 0, i = (n = "00000000000000000000" + i).substr(n.length - t)), a = i + a
		}
		return r < 0 ? "-" + a : a
	}, i.openPopup = function(e) {
		return o.requireAsync(["H2"], function(t) {
			t.createTemplateContainer({
				type: "dl_iframe_popup",
				src: e
			}).appendTo("body")
		}), !1
	}, i.initializeInlineAnchors = function() {
		a("a[href^='#']").click(function() {
			event.preventDefault(), a("html,body").animate({
				scrollTop: a("a[name='" + a(this).attr("href").substring(1) + "']").offset().top
			}, 500)
		})
	}, i.initializePricingPopup = function() {
		a("#dl_pro_pricing_article_popup_container, .dl_pro_pricing_popup_close").click(function() {
			a("body").removeClass("dl_pricing_popup_opened")
		}), a(".openPricingPopupButton").click(function() {
			a("#dl_pro_pricing_article_popup").css("top", document.scrollingElement ? document.scrollingElement.scrollTop + 30 : document.documentElement.scrollTop + 30), a("body").addClass("dl_pricing_popup_opened"), event.preventDefault()
		})
	}, i.waiting = function(e, t) {
		return new function() {
			var n = a(e),
				r = a("#dl_waiting").clone(),
				o = t || 1;
			this.show = function() {
				return n.append(r), r.css("opacity", o), r.css("display", "block"), this
			}, this.hide = function() {
				return r.remove(), this
			}
		}
	}, window.M.registerAsync("kDeepL", i)
}, , function(e, t, n) {
	"use strict";
	n.r(t);
	var r = n(1),
		o = {
			create: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = new Object(null);
				return {
					listenOn: function(e, n) {
						//! ,unsubscriber
						t[e = "" + e] || (t[e] = r.
					default.createMultiProcedure()), t[e].push(n)
					},
					notify: function(n, r) {
						if (t[n = "" + n]) {
							var o = t[n],
								a = Array.prototype.slice.call(arguments, 1);
							e && console.log("[PubSub] Notify '" + n + "' -> " + (o ? o._procedures.length : 0) + " listeners", {
								args: a,
								listeners: o ? o._procedures : []
							}), o && o.apply(null, a)
						}
					},
					_setVerbose: function(t) {
						e = t
					},
					_registry: t
				}
			}
		};
	window.M && window.M.registerAsync("PubSub", o), t.
default = o
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) ||
		function(e, t) {
			var n = [],
				r = !0,
				o = !1,
				a = void 0;
			try {
				for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
			} catch (e) {
				o = !0, a = e
			} finally {
				try {
					r || null == s.
					return ||s.
					return ()
				} finally {
					if (o) throw a
				}
			}
			return n
		}(e, t) ||
		function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}()
	}
	n.r(t);
	var o = {
		secondsPerDay: 86400,
		millisecondsPerDay: 864e5,
		getUnixTime: function() {
			return Math.round((new Date).getTime() / 1e3)
		},
		getFormattedTime: function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
				t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ":",
				n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
				r = [e.getHours().toString().padStart(2, "0"), e.getMinutes().toString().padStart(2, "0")];
			if (n) {
				var o = e.getSeconds().toString().padStart(2, "0");
				r.push(o)
			}
			return r.join(t)
		},
		getFormattedDate: function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
				t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-";
			return [e.getFullYear().toString(), (e.getMonth() + 1).toString().padStart(2, "0"), e.getDate().toString().padStart(2, "0")].join(t)
		},
		getDatesDifferenceInDays: function(e, t) {
			var n = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()),
				r = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
			return Math.floor((r - n) / 864e5)
		},
		getDateFromString: function(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-",
				n = r(e.split(t).map(function(e) {
					return parseInt(e, 10)
				}), 3),
				o = n[0],
				a = n[1],
				i = n[2];
			return new Date(o, a - 1, i)
		},
		getDateWithTimeSetToZero: function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
			return new Date(e.getFullYear(), e.getMonth(), e.getDate())
		}
	};
	window.M && window.M.registerAsync("dateTime", o), t.
default = o
}, function(e, t) {
	function n(e, t) {
		for (var n = 0; n < t.length; n++) {
			var r = t[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
		}
	}
	M.define("Tracker", ["U", "dateTime", "dlRPC", "dlPageState"], function(e, t, r, o) {
		var a = "[Tracker]",
			i = o.devMode && !0;
		return function() {
			function o(n, r) {
				!
				function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, o);
				var s = "".concat(n, ".").concat(r);
				i && console.log(a, "Tracker instantiated"), this._localStorage = e.persistentValue(s, null, 2592e3), this._localStorageData = this._localStorage() || {
					lastCollected: t.getFormattedDate(),
					meta: {},
					dates: {}
				}, this._writeToLocalStorage()
			}
			var s, c, u;
			return s = o, (c = [{
				key: "setMetaKeyValue",
				value: function(e, t) {
					this._localStorageData.meta[e] = t, this._writeToLocalStorage()
				}
			}, {
				key: "getMetaValue",
				value: function(e) {
					return this._localStorageData.meta[e]
				}
			}, {
				key: "trackEvent",
				value: function(e, t) {
					var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
						r = this._getDateTodaySubtree().events;
					n && r.some(function(t) {
						return t[e]
					}) || r.push(function(e, t, n) {
						return t in e ? Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[t] = n, e
					}({}, e, t)), this._writeToLocalStorage()
				}
			}, {
				key: "incrementCounter",
				value: function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
						r = this._getDateTodaySubtree();
					r.counters[e] = r.counters[e] || t, r.counters[e] += n, this._writeToLocalStorage()
				}
			}, {
				key: "getLastCollectedDate",
				value: function() {
					return t.getDateFromString(this._localStorageData.lastCollected)
				}
			}, {
				key: "collectData",
				value: function() {
					var e = this._getDatesBeforeDate();
					if (e) {
						var t = {
							dates: e,
							meta: this._localStorageData.meta
						};
						r.getBackend("https://www.deepl.com/PHP/backend/tracking.php").callFunction("collect", {
							data: t
						}).then(this._onDataCollectionSuccess.bind(this))
					}
				}
			}, {
				key: "_getDateTodaySubtree",
				value: function() {
					var e = t.getFormattedDate();
					return this._localStorageData.dates[e] = this._localStorageData.dates[e] || {
						counters: {},
						events: []
					}, this._localStorageData.dates[e]
				}
			}, {
				key: "_getDatesBeforeDate",
				value: function() {
					var e, n = this,
						r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
						o = t.getDateWithTimeSetToZero(r).getTime();
					return Object.keys(this._localStorageData.dates).forEach(function(r) {
						t.getDateFromString(r).getTime() < o && ((e = e || {})[r] = n._localStorageData.dates[r])
					}), e
				}
			}, {
				key: "_deleteDataBeforeDate",
				value: function() {
					var e = this,
						n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
						r = t.getDateWithTimeSetToZero(n).getTime();
					Object.keys(this._localStorageData.dates).forEach(function(n) {
						t.getDateFromString(n).getTime() < r && delete e._localStorageData.dates[n]
					})
				}
			}, {
				key: "_writeToLocalStorage",
				value: function() {
					var e = JSON.parse(JSON.stringify(this._localStorageData));
					this._localStorage(e)
				}
			}, {
				key: "_onDataCollectionSuccess",
				value: function() {
					var e = new Date,
						n = t.getFormattedDate(e);
					this._localStorageData.lastCollected = n, this._deleteDataBeforeDate(e), this._writeToLocalStorage()
				}
			}]) && n(s.prototype, c), u && n(s, u), o
		}()
	})
}, function(e, t) {
	M.define("LMT_UI_MessageBox", ["$", "LMT_log"], function(e, t) {
		var n = 2,
			r = "LMT_MessageBox",
			o = /LMT_(top|left|right|bottom)_peak/;

		function a(e) {
			e._timer && (clearTimeout(e._timer), e._timer = null)
		}
		function i(e) {
			var o, a = e._id,
				i = function() {
					var e;
					try {
						e = JSON.parse(window.localStorage && window.localStorage.getItem(r))
					} catch (e) {
						t("[_storageData]", e)
					}
					return (!e || !e.version || e.version < n) && (e = {
						version: n,
						messageBoxes: {}
					}), e.save = function() {
						window.localStorage && window.localStorage.setItem(r, JSON.stringify(e))
					}, e
				}();
			return a in i.messageBoxes ? o = i.messageBoxes[a] : (o = {
				displayCount: 0
			}, i.messageBoxes[a] = o), o.save = i.save, o
		}
		return {
			create: function(t, n) {
				return {
					_id: t,
					_box: e('<div class="lmt__message_box">\n                                <div class="lmt__message_box__top_peak"></div>\n                                <div class="lmt__message_box__left_peak"></div>\n                                <div class="lmt__message_box__background"></div>\n                                <div class="lmt__message_box__right_peak"></div>\n                                <div class="lmt__message_box__bottom_peak"></div>\n                            </div>').append(e('<div class="lmt__message_box__content"></div>').html(n)).appendTo(e("body")),
					_maximalDisplayCount: null,
					content: function(e) {
						var t = this._box.find(".lmt__message_box__content"),
							n = t.html();
						return null != e && t.html(e), n
					},
					direction: function() {
						var e = this,
							t = this._box.find("> div:visible"),
							n = "top";
						return t.each(function() {
							var t = e.className.match(o);
							t && t.length > 1 && (n = t[1])
						}), n
					},
					position: function(e, t) {
						var n = t || this.direction(),
							r = this._box.outerWidth(),
							o = this._box.outerHeight(),
							a = this._box.offset();
						switch (n) {
						case "top":
							a.top = e.top, a.left = e.left - r / 2;
							break;
						case "left":
							a.top = e.top - o / 2, a.left = e.left;
							break;
						case "right":
							a.top = e.top - 10, a.left = e.left - r;
							break;
						case "bottom":
							a.top = e.top - o, a.left = e.left - r / 2
						}
						return this._box.find(".lmt__message_box__top_peak,\n                        .lmt__message_box__left_peak,\n                        .lmt__message_box__right_peak,\n                        .lmt__message_box__bottom_peak").css("display", ""), this._box.find(".lmt__message_box__".concat(n, "_peak")).css("display", "block"), this._box.offset(a), this
					},
					isHidden: function() {
						return this._box.css("opacity") < .1 || "hidden" === this._box.css("visibility")
					},
					show: function(e, t, n, r) {
						var o, s = this;
						if ((o = this)._maximalDisplayCount && o._maximalDisplayCount <= o.displayCount() && o.disable(!0), this.isHidden() && !this.isDisabled()) {
							var c = this._box;
							a(this), this._timer = setTimeout(function() {
								var t;
								s._timer = null, r && !r() || (c.css("visibility", "visible").animate({
									opacity: 1
								}, e || 0, "swing", n), (t = i(s)).displayCount++, t.save())
							}, t)
						}
						return this
					},
					hide: function(e, t, n) {
						var r = this,
							o = this._box;
						return a(this), this._timer = setTimeout(function() {
							r._timer = null, o.animate({
								opacity: 0
							}, e || 0, "swing", function() {
								o.css("visibility", ""), n && n()
							})
						}, t || 0), this
					},
					isDisabled: function() {
						return 0 === this._box.parent().length
					},
					disable: function(t) {
						t != this.isDisabled() && (t ? this._box.remove() : e("body").append(this._box))
					},
					displayCount: function() {
						return i(this).displayCount
					},
					maximalDisplayCount: function(e) {
						var t = this._maximalDisplayCount;
						return void 0 !== e && e >= 0 && (this._maximalDisplayCount = e), t
					},
					width: function(e) {
						var t = this._box.width();
						return void 0 !== e && this._box.width(e), t
					},
					height: function(e) {
						var t = this._box.height();
						return void 0 !== e && this._box.height(e), t
					}
				}
			}
		}
	})
}, function(e, t) {
	function n(e, t) {
		for (var n = 0; n < t.length; n++) {
			var r = t[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
		}
	}
	M.define("LMT_UI_MessageBox2", ["$", "U"], function(e, t) {
		return function() {
			function r(e) {
				!
				function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, r), this.setContent(e), this.setOffset({
					top: 0,
					left: 0
				}), this.hide = t.createCallOnce(), this.onClick = t.createMultiProcedure()
			}
			var o, a, i;
			return o = r, (a = [{
				key: "setContent",
				value: function(e) {
					this._content = e
				}
			}, {
				key: "setOffset",
				value: function(e) {
					this._offset = e, this.isHidden() || this._$box.css({
						top: "".concat(e.top, "px"),
						left: "".concat(e.left, "px")
					})
				}
			}, {
				key: "isHidden",
				value: function() {
					return !this._$box
				}
			}, {
				key: "show",
				value: function() {
					var t = this;
					this.hide(), this._$box = this._createBox(), this.setOffset(this._offset), this._$box.on("click", this.onClick).appendTo(e("body")), this.hide.push(function() {
						t._$box.remove(), t._$box = null
					})
				}
			}, {
				key: "getBoxSize",
				value: function() {
					var t = this._createBox();
					t.appendTo(e("body"));
					var n = t.outerWidth(),
						r = t.outerHeight();
					return t.remove(), {
						width: n,
						height: r
					}
				}
			}, {
				key: "_createBox",
				value: function() {
					return e("<div>").addClass("lmt__message_box2").append(e("<div>").addClass("lmt__message_box2__top_peak")).append(e("<div>").addClass("lmt__message_box2__background")).append(e("<div>").addClass("lmt__message_box2__content").html(this._content))
				}
			}]) && n(o.prototype, a), i && n(o, i), r
		}()
	})
}, function(e, t) {
	M.define("LMT_UI_SystemNotification", ["$", "U", "H2"], function(e, t, n) {
		var r = "[LMT_UI_SystemNotification]",
			o = !1,
			a = new Object(null),
			i = new Object(null);

		function s(t) {
			var n, r, o = Date.now();
			t.notifications.splice(0).forEach(function(e) {
				e.validUntil < o ? (e.node.remove(), e.timerId && clearTimeout(e.timerId), delete i[e.id]) : (t.notifications.push(e), e.node.detach(), (!n || e.priority > r) && (r = e.priority, n = e))
			}), n && (n.appendTo ? n.node.appendTo(n.appendTo) : n.node.prependTo(e(".lmt")))
		}
		function c() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
				n = t.id,
				c = t.category,
				u = t.severity,
				l = t.priority,
				f = t.text,
				d = void 0 === f ? "" : f,
				p = t.timeout_sec,
				g = t.appendTo,
				h = t.allowDiscardWithEscape,
				_ = void 0 !== h && h,
				v = t.withOverlay,
				m = void 0 !== v && v;
			o && console.log(r, "addNotification: ", n, c, u, l, d, p, g, _, m);
			var y = n;
			if (!i[y]) {
				var T, S = (a[T = c || "default"] || (a[T] = {
					notifications: []
				}), a[T]),
					b = e("\n            <div class='lmt__system_notification_container'>\n                ".concat(m || "final" === u ? '<div class="dl_overlay_popup"></div>' : "", "\n                <div class='lmt__system_notification ").concat(u ? "lmt__system_notification--" + u : "", "'>\n                </div>\n            </div>\n        "));
				b.find(".lmt__system_notification").append(d);
				var E = {
					id: y,
					node: b,
					priority: l || -1 / (1 + S.notifications.length),
					validUntil: p ? Date.now() + 1e3 * p : 2 * Date.now(),
					timerId: p && setTimeout(function() {
						E.validUntil = 0, s(S)
					}, 1e3 * p),
					channel: S,
					appendTo: g
				};
				i[y] = E, S.notifications.push(E), s(S), console.log("channels", a, "notifications", i);
				var w = function() {
						o && console.log(r, "escapeHandler"), x()
					};
				return _ && document.addEventListener("global.keyboard.escape", w), x
			}
			function x() {
				E.validUntil = 0, s(S), document.removeEventListener("global.keyboard.escape", w)
			}
			o && console.log(r, "notifications[notificationId] already exists")
		}
		return window.addNotification = c, window.createTpl = n.createTemplateContainer, {
			addNotification: c,
			removeNotification: function(e) {
				o && console.log(r, "removeNotification(notificationId)", e, "channels", a, "notifications", i), i[e] && (i[e].validUntil = 0, s(i[e].channel))
			},
			hasNotification: function(e) {
				return i[e] && i[e].validUntil > Date.now()
			}
		}
	})
}, function(e, t) {
	M.define("LMT_UI_Tooltip", ["$", "U", "LMT_log"], function(e, t, n) {
		var r, o = t.createCallOnce(),
			a = 0;
		return {
			initTooltips: function(t, i) {
				e(t).find("[title]").each(function(t, i) {
					var s = i.getAttribute("title");
					i.removeAttribute("title"), function(t, i) {
						var s = e(t).get(0);
						s.addEventListener("mouseenter", function(t) {
							var c = a > Date.now() ? 100 : 250;
							o(), r = s, o.push(function() {
								r === s && (r = void 0)
							}), setTimeout(function() {
								if (r === s) {
									o();
									var c = "function" == typeof i ? i() : i,
										u = e("<div class='lmt__tooltip'>" + c + "</div>").get(0),
										l = e(t.target).offset();
									document.body.appendChild(u), u.style.top = l.top + e(t.target).height() + "px";
									var f = l.left;
									o.push(function() {
										a = Date.now() + 500, u.classList.add("lmt__tooltip--fading"), setTimeout(function() {
											u.parentNode.removeChild(u)
										}, 200)
									}), setTimeout(function() {
										var e = u.getBoundingClientRect().width;
										e + f > window.innerWidth - 10 && (f = window.innerWidth - 10 - e), u.style.left = f + "px", u.classList.add("lmt__tooltip--visible"), n("[Tooltip]", c)
									})
								}
							}, c)
						}), s.addEventListener("mouseleave", function(e) {
							o()
						})
					}(i, s)
				})
			},
			closeAllTooltips: o
		}
	})
}, , , , , , , , , , , function(e, t, n) {
	n(293), n(120), n(129), n(1), n(89), n(318), n(94), n(319), n(320), n(93), n(316), n(291), n(282), n(119), n(321), n(322), n(323), n(324), n(51), n(34), n(292), n(336), n(339), n(337), n(338)
}, function(module, exports) {
	M.define("LMT_WebTranslator_Dict", ["$", "U", "queryVars", "dlTexts"], function _M__LMT_WebTranslator_Dict($, U, queryVars, dlTexts) {
		"use strict";
		return {
			initTranslator: function _initTranslator(webTranslator) {
				var dbg = !1,
					TAG = "[Dict]",
					isAppDict = webTranslator._config.isApp,
					$rootContainer = $(webTranslator.rootNode),
					$dictContainer = $rootContainer.find(".lmt__dict"),
					$dictInnerContainer = $dictContainer.find(".lmt__dict__inner"),
					$dictMsg = $dictContainer.find(".lmt__dict__msg"),
					timerId = !1,
					ajaxReqest = !1,
					logging = !! queryVars.dictlogging,
					logging2 = 2 == queryVars.dictlogging,
					trafficlogging = logging || logging2 || !! queryVars.trafficlogging,
					latestQueryKey = "",
					latestQueryWasForLeftSide = !1,
					lastFieldStatus = "",
					dictServer = queryVars.dictbackend || (location.href.match(/local\.deepl\.com/) ? "/_dict" : "https://dict.deepl.com");
				dbg && console.log(TAG, "Dict backend: " + dictServer);
				var STATUS_NORMAL = 0,
					STATUS_ERRORS = 1,
					STATUS_STRESS = 2,
					STATUS = STATUS_NORMAL,
					CONFIG = [
						[3, 30, 900, 300, 800],
						[2, 30, 900, 500, 1200],
						[1, 12, 160, 750, 3e3]
					],
					CONFIG_LIMIT_5SECS = 0,
					CONFIG_LIMIT_MINUTE = 1,
					CONFIG_LIMIT_HOUR = 2,
					CONFIG_DELAY_NORMAL = 3,
					CONFIG_DELAY_AFTER_EMPTY = 4;
				dbg && console.log(TAG, "CONFIG:", CONFIG);
				for (var RESPONSE_CODE_STRESS = 429, lastStatusDropTime = 0, langPairsWithDict = ["DEEN", "FREN", "ESEN", "PTEN", "DEFR", "DEES", "DEPT", "FRES", "FRPT", "ESPT", "NLEN", "PLEN", "ITEN", "JAEN", "RUEN", "ZHEN"], langPairsWithDict2 = [], i = 0; i < langPairsWithDict.length; i++) langPairsWithDict2.push(langPairsWithDict[i].substr(2, 2) + langPairsWithDict[i].substr(0, 2));
				langPairsWithDict = langPairsWithDict.concat(langPairsWithDict2), dbg && console.log(TAG, "langPairsWithDict:", langPairsWithDict);
				var dictQueryCounter = 0,
					dictResultCounter = 0,
					dictResultIgnoredCounter = 0,
					dictResultDisplayedCounter = 0,
					dictResultFromCacheCounter = 0,
					justIgnored = !1,
					dictQueryCounterThis5Seconds = 0,
					dictQueryCounterThisMinute = 0,
					dictQueryCounterThisHour = 0;
				every5Seconds(), everyMinute(), everyHour();
				var dictCache = {},
					dictCacheEmpty = {},
					cachedKeys = [],
					$sourceEdit = $rootContainer.find(".lmt__source_textarea"),
					$editFields = $rootContainer.find(".lmt__source_textarea, .lmt__target_textarea"),
					isSrcEmpty = U.value(!0);
				webTranslator.publicInterface.onSourceTextChanged.push(function() {
					var e = webTranslator.publicInterface.getSourceText();
					dbg && console.log(TAG, "onSourceTextChanged", e), e && e.length ? isSrcEmpty(!1) : isSrcEmpty(!0)
				}), $editFields.on("click touchend", function(e) {
					dbg && console.log(TAG, "new DictQuery on click touchend");
					var t = this;
					setTimeout(function() {
						showDictFor(new DictQuery("click", t))
					}, "touchend" == e.type ? 100 : 1)
				}), $editFields.on("change keyup paste", function(e) {
					dbg && console.log(TAG, "new DictQuery on change keyup paste. " + e.type), showDictFor(new DictQuery(e.type, this)), isAppDict && updateDictHeader(isSrcEmpty() ? {} : {
						sourceLang: webTranslator.getSourceLang(),
						targetLang: webTranslator.getTargetLang()
					})
				});
				var langChanged = !1;
				if (U.listenOn("LMT/translationReady", function(e, t, n, r) {
					($sourceEdit.is(":focus") || langChanged) && (dbg && console.log(TAG, "new DictQuery on LMT/translationReady"), showDictFor(new DictQuery("change", $sourceEdit)), langChanged = !1)
				}), U.listenOn("LMT/translationChanged", function() {
					"" == latestQueryKey || latestQueryWasForLeftSide || (dbg && console.log(TAG, "new DictQuery on LMT/translationChanged"), latestQueryKey = "", isAppDict || ($dictInnerContainer.empty(), isDictReady(!1)))
				}), U.listenOn("LMT/langChanged", function() {
					dbg && console.log(TAG, "new DictQuery on LMT/langChanged"), langChanged = !0, showDictFor(new DictQuery("langChange", $sourceEdit))
				}), trafficlogging) {
					var lastStatsMsg = "",
						logCounters = function() {
							var e = "Stats: queries=" + dictQueryCounter + "(this5Seconds=" + dictQueryCounterThis5Seconds + ", thisMinute=" + dictQueryCounterThisMinute + ", thisHour=" + dictQueryCounterThisHour + "), received=" + dictResultCounter + ", ignored=" + dictResultIgnoredCounter + ", displayedFromResult=" + dictResultDisplayedCounter + ", displayedFromCache=" + dictResultFromCacheCounter + ", cached=" + cachedKeys.length + ", cachedEmpty=" + Object.keys(dictCacheEmpty).length;
							e != lastStatsMsg && (dbg && console.log(e), lastStatsMsg = e), setTimeout(logCounters, 3e3)
						};
					setTimeout(logCounters, 3e3)
				}
				var isDictReady = U.value(!1);
				if (U.withValue([isDictReady], function(e) {
					dbg && console.log(TAG, "isDictReady", e), e ? $dictContainer.addClass("lmt--is-dict-ready") : $dictContainer.removeClass("lmt--is-dict-ready"), isAppDict && isAppDictOpen && isAppDictOpen() && ($rootContainer.hasClass("lmt--is-app-dict-open") || isAppDictOpen(!1))
				}), isAppDict) {
					var $getAppDictToggler = function() {
							return $dictContainer.find(".lmt__app_dict__header_btn")
						},
						$getAppDictHeader = function() {
							return $dictContainer.find(".lmt__app_dict__header_btn_text")
						},
						loadingTimer;
					console.log("webTranslator.publicInterface.getLangInfo()", webTranslator.publicInterface.getLangInfo());
					var isAppDictAvailable = U.value(checkLangSupport());
					U.withValue([isAppDictAvailable], function(e) {
						dbg && console.log("isAppDictAvailable", e), isAppDictOpen && isAppDictOpen(!1), e ? $dictContainer.removeClass("lmt--is-app-dict-available") : $dictContainer.addClass("lmt--is-app-dict-available")
					}), webTranslator.publicInterface.onSourceTextEmpty.push(function() {
						dbg && console.log("webTranslator.publicInterface.onSourceTextEmpty"), isSrcEmpty(!0)
					}), U.withValue([isSrcEmpty], function(e) {
						if (dbg && console.log(TAG, "isSrcEmpty", e), e) {
							isAppDictOpen && isAppDictOpen(!1), updateDictHeader();
							var t = webTranslator.publicInterface.getLangInfo().selectedSourceLang;
							t && "auto" === t && isAppDictAvailable(!0)
						}
					}), webTranslator.publicInterface.onLangChanged.push(function(e) {
						dbg && console.log("webTranslator.publicInterface.onLangChanged", e), isAppDictAvailable(checkLangSupport(e)), updateDictHeader(isSrcEmpty() ? {} : {
							sourceLang: e.sourceLang,
							targetLang: e.targetLang
						})
					});
					var isAppDictLoading = U.value(!1);
					U.withValue([isAppDictLoading], function(e) {
						dbg && console.log("isAppDictLoading", e), updateDictHeader(e ? {
							loading: !0
						} : {
							loading: !1
						})
					});
					var checkIsQueryShort = function(e) {
							return dbg && console.log(TAG, "checkIsQueryShort", e.isShortQuery), !! e.isShortQuery && e.isShortQuery
						},
						isQueryShort = U.value(!1),
						isAppDictOpen = U.value(!1);
					U.withValue([isQueryShort], function(e) {
						dbg && console.log(TAG, "isQueryShort", e), e && isAppDictOpen(!0)
					}), U.withValue([isAppDictOpen], function(e) {
						dbg && console.log(TAG, "isAppDictOpen", e), e ? openDictHeader() : closeDictHeader()
					});
					var dictQuery = U.value(null);
					U.withValue([dictQuery], function(e) {
						dbg && console.log(TAG, "dictQuery"), e && isQueryShort(checkIsQueryShort(e))
					});
					var $dictQueryResult = U.value($());
					U.withValue([$dictQueryResult], function(e) {
						if (e.length) {
							dbg && console.log(TAG, "prepareAppDict: content", e);
							var t = e.find(".lemma.featured:first-child .lemma_desc .dictLink").html();
							t && updateDictHeader({
								query: t
							})
						} else dbg && console.log(TAG, "prepareAppDict: no content", e), isAppDictOpen(!1), updateDictHeader(isSrcEmpty() ? {} : {
							sourceLang: webTranslator.getSourceLang(),
							targetLang: webTranslator.getTargetLang()
						})
					}), $getAppDictToggler().on("click", function(e) {
						dbg && console.log(TAG, "appDict:trigger: click toggler", e), toggleAppDictOpen()
					}), initAppDict()
				}
				function initAppDict() {
					dbg && console.log(TAG, "App-Dict: init", webTranslator), $rootContainer.addClass("lmt--has-app-dict");
					var e = webTranslator.publicInterface.getLangInfo();
					updateDictHeader({
						sourceLang: e.sourceLang,
						targetLang: e.targetLang
					})
				}
				function toggleAppDictOpen() {
					isAppDictOpen() ? isAppDictOpen(!1) : isAppDictOpen(!0)
				}
				function displayDict(e, t) {
					dbg && console.log(TAG, "displayDict", "content", e, "query", t), isAppDict ? isAppDictAvailable() ? (prepareDict(e, t), isAppDictLoading(!1), $dictQueryResult(e), dictQuery(t)) : isAppDictAvailable(!1) : prepareDict(e, t)
				}
				function prepareDict(e, t) {
					dbg && console.log(TAG, "prepareDict"), e.length ? (isDictReady(!0), $dictInnerContainer.empty().append(e), U.notify("LMT/dictDisplayed", {
						dictHeight: e.height()
					})) : (isDictReady(!1), $dictInnerContainer.empty().append(e), U.notify("LMT/dictRemoved")), 0 == $dictContainer.find(".lemma").length && "" != t.fulltext && langPairsWithDict.indexOf(t.langCode + t.targetLangCode) >= 0 && ($dictMsg.empty(), "full" == t.kind ? $dictMsg.append($(".lmt__dict__click_on_word_hint").clone()) : "" != t.kind && $dictMsg.append($(".lmt__dict__word_not_in_dictionary_message").clone()))
				}
				function checkLangSupport() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : webTranslator.publicInterface.getLangInfo(),
						t = e.sourceLang,
						n = e.selectedSourceLang,
						r = e.targetLang;
					return dbg && console.log("checkLangSupport", t, n, r), isLangPairSupported({
						sourceLang: n || t,
						targetLang: r
					})
				}
				function isLangPairSupported(e) {
					var t = e.sourceLang,
						n = e.targetLang;
					t = t.toUpperCase(), n = n.toUpperCase();
					var r = {
						AUTO: ["EN", "DE", "FR", "ES", "IT", "PT", "NL", "PL", "RU", "JA", "ZH"],
						EN: ["DE", "FR", "ES", "PT", "IT", "NL", "PL", "RU", "JA", "ZH"],
						DE: ["EN", "FR", "ES", "PT"],
						FR: ["EN", "DE", "ES", "PT"],
						ES: ["EN", "DE", "PT"],
						PT: ["EN", "DE", "ES"],
						IT: ["EN"],
						NL: ["EN"],
						PL: ["EN"],
						RU: ["EN"],
						JA: ["EN"],
						ZH: ["EN"]
					};
					dbg && console.log("isLangPairSupported", t, n);
					var o = !! r[t] && r[t].includes(n);
					return dbg && console.log("isLangPairSupported", o), o
				}
				function openDictHeader() {
					dbg && console.log(TAG, "openDictHeader"), isDictReady() && ($rootContainer.addClass("lmt--is-app-dict-open"), $dictInnerContainer.addClass("is-visible"))
				}
				function closeDictHeader() {
					dbg && console.log(TAG, "closeDictHeader"), $rootContainer.removeClass("lmt--is-app-dict-open"), $dictInnerContainer.removeClass("is-visible"), isAppDictOpen(!1)
				}
				function updateDictHeader() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						t = e.sourceLang,
						n = void 0 === t ? "" : t,
						r = e.targetLang,
						o = void 0 === r ? "" : r,
						a = e.query,
						i = void 0 === a ? "" : a,
						s = e.loading,
						c = void 0 !== s && s;
					loadingTimer && window.clearInterval(loadingTimer);
					var u = dlTexts.get("translator/dictionary", "Dictionary"),
						l = ".";
					if (c) $getAppDictHeader().html("".concat(u, " ").concat(l)), loadingTimer = setInterval(function() {
						l.length >= 7 && (l = "."), l += ".", $getAppDictHeader().html("".concat(u, " ").concat(l))
					}, 250);
					else if (loadingTimer && (l = "."), i) {
						var f = dlTexts.get("translator/dictionaryFor", "Dictionary for");
						$getAppDictHeader().html("".concat(f, ' "').concat(i, '"'))
					} else if (n && o) {
						n = n.toLowerCase(), o = o.toLowerCase();
						var d = dlTexts.get("translator/selectLang.target.".concat(n), n),
							p = dlTexts.get("translator/selectLang.target.".concat(o), o);
						$getAppDictHeader().text("".concat(u, " ").concat(d, " - ").concat(p))
					} else $getAppDictHeader().text("".concat(u))
				}
				function showDictFor(query, force) {
					var dbg = !1;
					if (dbg && console.log(TAG, "showDictFor: query=", query.query, ", langCode=", query.langCode, ", targetLangCode=", query.targetLangCode), !query.nochange || force) {
						var sourceLangPath = langName(query.langCode),
							targetLangPath = langName(query.targetLangCode),
							queryKey = query.key();
						if (latestQueryKey != queryKey || force && "" != latestQueryKey) {
							if (dbg && console.log(TAG, "showDictFor: queryKey changed from " + latestQueryKey + " to " + queryKey), timerId && !force && (dbg && console.log(TAG, "Clearing timer."), clearTimeout(timerId), timerId = !1), timerTooManyRequests && (clearTimeout(timerTooManyRequests), timerTooManyRequests = !1), latestQueryKey = queryKey, latestQueryWasForLeftSide = query.forleftside, query.query.length < 2 || void 0 === query.query || -1 === langPairsWithDict.indexOf(query.langCode + query.targetLangCode)) return dbg && console.log(TAG, "showDictFor: empty query or lang pair without dictionary."), "" != latestQueryKey && displayDict("", query), void(latestQueryKey = queryKey);
							if (dbg && console.log(TAG, "showDictFor: sourceLangPath=" + sourceLangPath + ", targetLangPath=" + targetLangPath), "" != sourceLangPath && "" != targetLangPath) {
								if (queryKey in dictCache) {
									dbg && console.log(TAG, "Displaying cached dictionary result for " + queryKey + ".");
									var queryKeyIdx = cachedKeys.indexOf(queryKey);
									return queryKeyIdx >= 0 && (cachedKeys.splice(queryKeyIdx, 1), cachedKeys.push(queryKey)), timerId = setTimeout(function() {
										if (latestQueryKey == queryKey) {
											var e = dictCache[queryKey][0],
												t = parseResponse(e, dictCache[queryKey][1]);
											dbg && console.log(TAG, "Displaying cached dict content: ", t, "query: ", e), displayDict(t, e)
										}
									}, 200), void dictResultFromCacheCounter++
								}
								if (queryKey in dictCacheEmpty) return dbg && console.log(TAG, "Displaying cached empty dictionary result for " + queryKey + "."), displayDict($(), query), void dictResultFromCacheCounter++;
								isAppDict && isAppDictLoading(!0);
								var delay = justIgnored ? CONFIG[STATUS][CONFIG_DELAY_AFTER_EMPTY] : CONFIG[STATUS][CONFIG_DELAY_NORMAL];
								dbg && console.log(TAG, "Delaying dictionary lookup by " + delay), timerId = setTimeout(function() {
									dbg && console.log(TAG, "Calling scheduleNonConcurrentRequest"), U.scheduleNonConcurrentRequest("dictQuery", function() {
										return dbg && console.log(TAG, "Inside scheduleNonConcurrentRequest"), new Promise(function(e, t) {
											return dbg && console.log(TAG, 'Request started for "' + query.query + '" on ' + sourceLangPath + "-" + targetLangPath), trafficlogging && console.log(TAG, "Dict-Query " + dictQueryCounter + ": " + queryKey), dictQueryCounterThis5Seconds > CONFIG[STATUS][CONFIG_LIMIT_5SECS] || queryVars.dictLimit5sec ? (tooManyRequests("5seconds", query), void t()) : dictQueryCounterThisMinute > CONFIG[STATUS][CONFIG_LIMIT_MINUTE] || queryVars.dictLimitMinute ? (tooManyRequests("minute", query), void t()) : dictQueryCounterThisHour > CONFIG[STATUS][CONFIG_LIMIT_HOUR] || queryVars.dictLimitHour ? (tooManyRequests("hour", query), void t()) : (dictQueryCounter++, dictQueryCounterThis5Seconds++, dictQueryCounterThisMinute++, dictQueryCounterThisHour++, void(ajaxReqest = $.ajax({
												data: {
													query: query.query.trim()
												},
												type: "POST",
												url: U.urlWithParameters(dictServer + "/" + sourceLangPath + "-" + targetLangPath + "/search", {
													ajax: 1,
													source: query.lang,
													onlyDictEntries: 1,
													translator: "dnsof7h3k2lgh3gda",
													delay: delay,
													jsStatus: STATUS,
													kind: query.kind,
													eventkind: query.eventkind,
													forleftside: query.forleftside
												}),
												timeout: 2e4,
												dataType: "html",
												success: function(t) {
													t = checkResponseForConfig(t), e(t)
												},
												error: function(e, n, r) {
													dbg && console.warn(e, n);
													var o = e.responseText;
													e.status == RESPONSE_CODE_STRESS ? (dbg && console.log(TAG, "Setting STATUS to stress. data=" + o), STATUS = STATUS_STRESS, lastStatusDropTime = (new Date).getTime(), o = checkResponseForConfig(o)) : (dbg && console.log(TAG, "Setting STATUS to error.", e), STATUS = STATUS_ERRORS, lastStatusDropTime = (new Date).getTime()), justIgnored = !0, ajaxReqest.abort(), t()
												}
											})))
										})
									}, 25e3).then(function(e) {
										dictResultCounter++;
										var t = parseResponse(query, e);
										if (t.length > 0) cachedKeys.length >= 100 && (delete dictCache[cachedKeys[0]], cachedKeys.shift()), dictCache[queryKey] = [query, e], cachedKeys.push(queryKey), dbg && console.log(TAG, "Cached dict result for " + queryKey + ". Stored keys: " + cachedKeys.length), logging2 && log(TAG, "Cache: " + Object.keys(dictCache).length + " 1:[" + cachedKeys + "] 2:[" + Object.keys(dictCache) + "]");
										else {
											var n = Object.keys(dictCacheEmpty).length;
											n >= 1e3 && delete dictCacheEmpty[getRandomInt(0, n - 1)], dictCacheEmpty[queryKey] = !0, dbg && console.log(TAG, "Cached empty dict result for " + queryKey + ". Stored keys without dict entries: " + Object.keys(dictCacheEmpty).length)
										}
										latestQueryKey == queryKey ? (setTimeout(function() {
											dbg && console.log(TAG, "Displaying loaded dict content: ", t, "query: ", query), displayDict(t, query)
										}, 0), dictResultDisplayedCounter++) : (dictResultIgnoredCounter++, justIgnored = !0, dbg && console.log(TAG, "Ignored received dictionary content (only cached, but not displaying)."))
									}, function() {})
								}, delay)
							} else dbg && console.log(TAG, "Returning. (sourceLangPath or targetLangPath is empty)")
						}
					}
					function checkResponseForConfig(data) {
						try {
							if (data.startsWith("CONFIG=")) {
								var newLineIdx = data.indexOf("\n"),
									configStr = data.substr(7, -1 == newLineIdx ? data.length - 7 : newLineIdx - 7);
								log(TAG, "Resetting CONFIG to", configStr), CONFIG = eval(configStr), log(TAG, "Resetted CONFIG to", CONFIG), data = data.substr(newLineIdx + 1)
							}
						} catch (e) {
							dbg && console.warn(TAG, "ERROR while checking response for CONFIG= part.")
						}
						return data
					}
				}
				function DictQuery(e, t) {
					isAppDict && isQueryShort(!1);
					var n = $(t);
					this.eventkind = e, this.forleftside = n.is(".lmt__source_textarea"), this.$textfield = n, this.kind = "", this.langCode = this.forleftside ? webTranslator.getSourceLang() : webTranslator.getTargetLang(), this.targetLangCode = this.forleftside ? webTranslator.getTargetLang() : webTranslator.getSourceLang();
					var r = webTranslator.publicInterface.getLangInfo().selectedSourceLang;
					isAppDict && this.langCode && this.targetLangCode && isAppDictAvailable(checkLangSupport({
						selectedSourceLang: "auto" === r ? r : this.langCode,
						targetLang: this.targetLangCode
					})), this.lang = langName(this.langCode);
					var o, a, i = n.get(0);
					if ("selectionStart" in i) o = i.selectionStart, a = i.selectionEnd;
					else if ("selection" in document) {
						i.focus();
						var s = document.selection.createRange(),
							c = document.selection.createRange().text.length;
						s.moveStart("character", -i.value.length), o = s.text.length - c, a = s.text.length
					}
					var u = n.val();
					if (this.fulltext = u.trim(), this.fieldStatus = this.langCode + "::" + this.targetLangCode + "::" + this.fulltext, lastFieldStatus != this.fieldStatus || "keyup" != e && "paste" != e && "change" != e || o != a) {
						if (lastFieldStatus = this.fieldStatus, this.query = "", this.key = function() {
							return this.langCode + ":" + this.targetLangCode + ":" + this.query
						}, "auto" != this.langCode && "" != this.targetLangCode) {
							if (o != a) this.query = u.substr(o, a - o).trim(), this.query >= 60 ? this.query = "" : this.kind = "select";
							else {
								var l = o,
									f = 0 == u.substr(l).trim().length;
								if (this.forleftside && (f || "click" != e)) u = u.trim(), this.kind = "full", u.length < 60 && (this.query = u, isAppDict && (this.isShortQuery = !0));
								else if (f);
								else if (this.forleftside || "click" == e) {
									var d = wordBegin(u, l),
										p = spaceAfter(u, l);
									if (d == l && -1 != ch_nonword.indexOf(u[l]));
									else {
										var g = "DE" == this.langCode ? 50 : 25,
											h = d - g > 0 ? h = wordAfter(u, d - g) : 0,
											_ = p + g < u.length ? u.length - wordBegin(u, p + g) : 0;
										this.query = (u.substr(h, d - h) + "###" + u.substr(d, u.length - d - _)).trim(), this.kind = "context"
									}
								}
							}
						}
					} else this.nochange = !0
				}
				var ch_nonword = " ;.!?-+=/%§'`´<>()[]\"\t\n";

				function wordBegin(e, t) {
					for (; t > 0 && -1 == ch_nonword.indexOf(e[t - 1]);) t--;
					return t
				}
				function spaceAfter(e, t) {
					for (; t < e.length && -1 == ch_nonword.indexOf(e[t]);) t++;
					return t
				}
				function wordAfter(e, t) {
					for (t = spaceAfter(e, t); t < e.length && -1 != ch_nonword.indexOf(e[t]);) t++;
					return t
				}
				function langName(e) {
					return "EN" == e ? "english" : "DE" == e ? "german" : "FR" == e ? "french" : "ES" == e ? "spanish" : "IT" == e ? "italian" : "NL" == e ? "dutch" : "PL" == e ? "polish" : "RU" == e ? "russian" : "PT" == e ? "portuguese" : ""
				}
				var countdown_n = 0,
					timerTooManyRequests = !1;

				function tooManyRequests(e, t) {
					function n() {
						countdown_n > 0 ? (dbg && console.log("countDownSeconds " + countdown_n), $dictContainer.find(".seconds").text("" + countdown_n), countdown_n--, timerTooManyRequests = setTimeout(n, 1020)) : (dbg && console.log("showing Dict"), showDictFor(t, !0))
					}
					timerTooManyRequests && (dbg && console.log("Clearing tooManyRequests timeout."), clearTimeout(timerId), timerTooManyRequests = !1), "5seconds" == e && ((countdown_n < 1 || countdown_n > 4) && (countdown_n = 4), n()), "minute" == e && ((countdown_n < 1 || countdown_n > 40) && (countdown_n = 40), n())
				}
				function every5Seconds() {
					dictQueryCounterThis5Seconds = 0, setTimeout(every5Seconds, 5e3)
				}
				function everyMinute() {
					dictQueryCounterThisMinute = 0, setTimeout(everyMinute, 6e4), status == STATUS_ERRORS && (new Date).getTime() - lastStatusDropTime > 6e4 && (dbg && console.log("Reset STATUS to normal."), STATUS = STATUS_NORMAL), status == STATUS_STRESS && (new Date).getTime() - lastStatusDropTime > 3e5 && (dbg && console.log("Reset STATUS to normal."), STATUS = STATUS_NORMAL)
				}
				function everyHour() {
					dictQueryCounterThisHour = 0, setTimeout(everyHour, 36e5)
				}
				function parseResponse(e, t) {
					var n = $(t);
					(n = n.find(".isMainTerm:not(.spell_suggestion)[data-source-lang='" + e.langCode + "'], .isForeignTerm:not(.spell_suggestion)[data-source-lang='" + e.langCode + "']")).find(".inexact, .line.inflectioninfo, .audio, .copyrightLineOuter, .spell_suggestion").remove(), n.find("a").removeAttr("href"), n.find("h2").append("<div class='sourceHint'>Linguee Dictionary</div>");
					var r = n.find("h2.lemma_desc");
					return r.addClass("source"), "EN" == e.langCode && e.fulltext.startsWith("to ") && n.find(".lemma").filter(function(e) {
						return attr = $(this).attr("wt"), attr && attr.startsWith("1") && 3 == attr.length
					}).remove(), (justIgnored = 0 == r.length) ? $() : n
				}
				function getRandomInt(e, t) {
					return Math.floor(Math.random() * (t - e + 1)) + e
				}
				return !0
			}
		}
	})
}, function(e, t) {
	M.define("WebTranslator_proAd", ["queryVars", "dlPageState", "DeviceProps", "H2", "U", "dlClientState", "dlStats", "dlAnalytics"], function(e, t, n, r, o, a, i, s) {
		var c = "[WebTranslator_proAd]",
			u = t.devMode && !1;
		return {
			init: function() {
				var l = o.value(),
					f = o.value(),
					d = 86400,
					p = 1e3 * d,
					g = 6e4,
					h = !1,
					_ = 5 * g;
				if (r.connectNodesToValues("body", {
					ad: {
						content: l
					},
					footerIllustration: f
				}), -1 !== window.location.href.indexOf("beta.deepl.com")) l({
					type: "pro_beta"
				});
				else if ("pro" === e.banner) y();
				else if ("quotes" === e.banner) document.documentElement.classList.add("dl_country_without_pro_support");
				else if ("none" === e.banner);
				else {
					if (t.loggedIn || t.pro) return void f({
						type: "pro_illustration"
					});
					if ("app-popup" === e.banner) b(), y();
					else if ("app" === e.banner) E();
					else if ("banner-ch" === e.banner) T();
					else if ("recruiting" === e.banner) w();
					else {
						var v = [],
							m = [];
						a.whenAvailable(function() {
							var e, r;
							e = i.getStats("h")(), r = o.persistentValue("ad.appPopupDismissedTime", void 0, 30 * d)() || 0, t.loggedIn || t.pro || !o.persistentValue("clientVars.showAppPopup", void 0)() || n.isMobilePhone || !n.isWin && !n.isMac || !(0 === r ? e >= 3 : r < Date.now() - 2 * p && e % 5 == 3) || (s.send({
								dryRun: h,
								category: "app",
								action: "showPopup",
								label: "windows",
								value: 1
							}), m.push(b)), o.persistentValue("clientVars.showRecruitingBanner")() && (v.push(w), u && console.log(c, v)), !n.isMobilePhone && (n.isWin || n.isMac) && o.persistentValue("clientVars.showDesktopAppBanner")() ? (s.send({
								dryRun: h,
								category: "app",
								action: "showBanner",
								label: "windows",
								value: 1
							}), v.push(E), a.getValue("proAvailable") && v.push(y)) : a.getValue("proAvailable") && (o.persistentValue("clientVars.showCHBanner")() ? v.push(T) : v.push(y));
							var l = 0;

							function f() {
								u && console.log(c, "show ads[".concat(l, "]")), v[l] && v[l](), l = v.length - 1 === l ? 0 : l + 1
							}
							f(), v.length && setInterval(f, _), m.length && m[0]()
						})
					}
				}
				function y() {
					l({
						type: "pro_ad"
					})
				}
				function T() {
					l({
						type: "pro_ad_ch"
					})
				}
				function S() {
					var e, n = 2,
						r = 5 * g,
						a = o.value(!1),
						i = o.value(0),
						s = {
							de: "de",
							en: "en",
							es: "es",
							fr: "fr",
							it: "it",
							nl: "nl",
							pl: "pl",
							"pt-BR": "pt_br",
							"pt-PT": "pt_pt",
							ru: "ru"
						}[t.il] || "en";
					return {
						type: "banner_video",
						videoSrc: "/mov/desktopApp_teaser_720p_".concat(s, ".mp4"),
						posterSrc: "/mov/desktopApp_teaser_poster_".concat(s, ".png"),
						isPosterVisible: a,
						doRegisterVideoElement: function(t) {
							e = t
						},
						doInitVideoElement: function() {
							setTimeout(c, 0)
						}
					};

					function c() {
						e.addEventListener("playing", function() {
							i >= n ? (e.pause(), setTimeout(function() {
								e.play(), i(0), a(!1)
							}, r), a(!0)) : i(i() + 1)
						})
					}
				}
				function b() {
					var e = o.value(!1),
						t = n.isMac;
					r.createTemplateContainer({
						type: t ? "app_popup_mac" : "app_popup_win",
						doClose: function() {
							var t = Date.now();
							o.persistentValue("ad.appPopupDismissedTime")(t - t % p), e(!0)
						},
						onDownload: function() {
							var n = Date.now();
							o.persistentValue("ad.appPopupDismissedTime")(n - n % p), e(!0), s.send({
								dryRun: h,
								category: "app",
								action: "downloadPopup",
								label: t ? "mac" : "windows",
								value: 1
							}), setTimeout(function() {
								return location.href = "/app/thanks"
							}, 1200)
						},
						downloadURL: t ? "https://www.deepl.com/macos/download/DeepL.dmg" : "https://www.deepl.com/windows/download/full/DeepLSetup.exe",
						popupIsClosed: e,
						videoElement: S()
					}).appendTo("body")
				}
				function E() {
					l({
						type: "app_banner_win",
						onDownload: function() {
							s.send({
								dryRun: h,
								category: "app",
								action: "download",
								label: "windows",
								value: 1
							})
						},
						videoElement: S()
					})
				}
				function w() {
					l({
						type: "ad_recruiting"
					})
				}
				a.whenAvailable(function() {
					t.loggedIn || t.pro || (a.getValue("proAvailable") ? setTimeout(function() {
						document.documentElement.classList.add("dl_country_with_pro_support")
					}, 100) : setTimeout(function() {
						document.documentElement.classList.add("dl_country_without_pro_support")
					}, 100))
				})
			}
		}
	})
}, function(e, t) {
	M.define("WebTranslator_quotes", ["$"], function(e) {
		return {
			init: function() {
				"use strict";
				var t = "[WebTranslator_quotes]",
					n = 100,
					r = e("#lmt_quotes_dataContainer"),
					o = e("#lmt_quotes_article");
				if (r.length) {
					var a = o.find(".lmt_quotes_nav"),
						i = o.find(".lmt_quotes__container"),
						s = [];
					r.children("div").each(function(t, n) {
						var r = e(n),
							o = r.children("blockquote").html(),
							i = r.children("cite").html(),
							c = r.attr("dl-quote-img2"),
							u = parseFloat(r.attr("dl-quote-prio")) || 0,
							l = (parseFloat(r.attr("dl-quote-additional-duration")) || 0) + 15e3;
						s.push({
							id: t,
							$node: e("<div class='lmt_quote'></div>").append(e("<div class='lmt_quote__inner'></div>").append(e("<div class='lmt_quote__logo lmt_quote__logo_3'></div>").css("background-image", "url(https://www.deepl.com/img/quote_picture_shadow/" + c + ")")).append(e("<span class='lmt_quote__text'></span>").html(o)).append(e("<span class='lmt_quote__source'></span>").html(i))).css("opacity", 0),
							$navEntry: e("<div class='lmt_quotes_nav_entry'></div>").appendTo(a).click(function() {
								d(t)
							}),
							duration: l,
							prio: u
						})
					});
					var c, u = [];
					s.forEach(function(e, t) {
						(0 == t || e.prio >= n) && u.push(e)
					});
					var l = 0;
					d(Math.floor(Math.random() * u.length)), window.setQuote = d, e(".lmt_quotes__container").on("click", ".lmt_quote", function(e) {
						var t = window.getSelection();
						t && !t.isCollapsed || d(c.id + 1)
					})
				} else console.warn(t, "nodes not found");

				function f(e) {
					return s[(e % s.length + s.length) % s.length]
				}
				function d(e) {
					var t = f(e);
					for (c && (c.$node.css("opacity", 0), c.$navEntry.removeClass("lmt_quotes_nav_entry--active")), (c = t).$node.appendTo(i), setTimeout(function() {
						c.$node.css("opacity", 1)
					}), c.$navEntry.addClass("lmt_quotes_nav_entry--active"); i.children().length > 2;) i.children().first().detach();
					clearTimeout(l), l = setTimeout(function e() {
						document.hidden ? l = setTimeout(e, c.duration) : f(c.id + 1).prio >= n || u.length <= 1 ? d(c.id + 1) : d(0)
					}, c.duration)
				}
			}
		}
	})
}, function(e, t, n) {
	"use strict";
	n.r(t);
	n(318), n(320), n(319);
	var r = n(93),
		o = n(12),
		a = (n(89), n(2)),
		i = (n(291), n(51)),
		s = n(119);
	n(282), n(321), n(322), n(323), n(324);
	o.a.defineType("/translator/core/basicConfiguration", [], function() {
		var e = new Map;
		return e.set("CONFIG__EXPLICITLY_REQUEST_ALTERNATIVES", !0), e.set("CONFIG__USE_FAST_TYPING_REQUESTS", !0), e.set("CONFIG__IS_DEV", !1), e.set("CONFIG__USE_CONTEXT", !0), e.set("CONFIG__MAX_NUM_CHARACTERS", 5e3), e.set("CONFIG__SEND_BACKUP_REQUEST_DELAY", 1500), e.set("CONFIG__BLOCK_TYPING_REQUEST_DURATION", 1e4), e.set("CONFIG__TRANSLATION_JOB_BATCH_SIZE", 1e4), e.set("CONFIG__USE_FAST_TYPING_REQUESTS__DEV_MOCKUP", !1), e.set("backend.scheduler", "../jsonrpc"), e.set("backend.translationEndpoint", void 0), e.set("backend.splittingEndpoint", void 0), e.set("backend.testUserBlocking", !1), {
			get: function(t) {
				if (!e.has(t)) throw new Error("config key '".concat(t, "' is invalid."));
				return e.get(t)
			},
			set: function(t, n) {
				e.set(t, n)
			},
			update: function(t, n) {
				e.has(t) || console.warn("config key '".concat(t, "' is invalid.")), e.set(t, n)
			}
		}
	});
	var c = n(1),
		u = n(34);
	o.a.defineType("/translator/core/textareas", ["/translator/core/domElements"], function(e) {
		function t(e) {
			var t = "",
				n = c.
			default.createMultiProcedure();

			function r() {
				var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "update";
				e.value !== t && (t = e.value, n(t, r))
			}
			return e.addEventListener("input", function(e) {
				"insertFromPaste" === e.inputType ? r("paste") : r("typing")
			}), e.addEventListener("keyup", function(e) {
				return r("typing")
			}), e.addEventListener("change", function(e) {
				return r("typing")
			}), e.addEventListener("dl-programmatic-change", function(e) {
				return r("update")
			}), e.addEventListener("paste", function(e) {
				r("paste"), setTimeout(function() {
					return r("paste")
				})
			}), e.addEventListener("drop", function(e) {
				r("update"), setTimeout(function() {
					return r("update")
				})
			}), {
				checkForChangedText: r,
				onTextChanged: n,
				getText: function() {
					return t
				}
			}
		}
		var n, r, o = e.sourceEdit,
			a = e.targetEdit,
			i = t(o),
			s = t(a);

		function l(e, t) {
			var o = "[updateTextareaText]";
			if (n || !r) {
				var a = e.value;
				try {
					if (e.focus(), document.activeElement === e) {
						var i = u.
					default.getStringChangeRange(a, t);
						e.setSelectionRange(i[0], i[0] + i[1].length);
						var s = document.execCommand("insertText", !1, i[2]);
						e.value !== t && (s ? console.log(o, "Textarea content is not equal to new text, but execCommand said it would work.") : console.log(o, "Textarea content is not equal to new text and execCommand is set to disabled."), e.value = t)
					} else console.log(o, "Can't select element."), e.value = t
				} finally {
					r || a === t || (r = !0, e.value === t ? n = !0 : (n = !1, e.value = t))
				}
			} else e.value = t;
			var c = document.createEvent("Event");
			c.initEvent("dl-programmatic-change", !0, !0), e.dispatchEvent(c)
		}
		return {
			onSourceTextChanged: i.onTextChanged,
			onTargetTextChanged: s.onTextChanged,
			getSourceText: function() {
				return o.value
			},
			getTargetText: function() {
				return a.value
			},
			updateSourceText: function(e) {
				return l(o, e)
			},
			updateTargetText: function(e) {
				return l(a, e)
			},
			setSourceTextExplicitly: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "update";
				o.value = e, i.checkForChangedText(t)
			},
			setTargetTextExplicitly: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "update";
				a.value = e, s.checkForChangedText(t)
			}
		}
	});
	var l = n(281);

	function f(e, t) {
		for (var n = 0; n < t.length; n++) {
			var r = t[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
		}
	}
	var d = function() {
			function e(t, n) {
				var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
				!
				function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.type = n, this.trigger = r, this.targetIsPredefined = !1, this.onSentenceSplittingReceived = c.
			default.createCallOnce(), this.onRequestEnded = c.
			default.createCallOnce(), this.splitSentenceRequestUsed = void 0, this.langContext = t, this.sourceLangHasBeenDetermined = void 0, this._running = !1
			}
			var t, n, r;
			return t = e, (n = [{
				key: "isRunning",
				value: function() {
					return this._running
				}
			}, {
				key: "start",
				value: function() {
					this._running = !0
				}
			}, {
				key: "stop",
				value: function() {
					this._running = !1, this.onRequestEnded()
				}
			}]) && f(t.prototype, n), r && f(t, r), e
		}();
	d.TRIGGER__SOURCE_LANG_CHANGED = "TRIGGER__SOURCE_LANG_CHANGED", d.TRIGGER__TARGET_LANG_CHANGED = "TRIGGER__TARGET_LANG_CHANGED", d.TRIGGER__SOURCE_TEXT_CHANGED_WHILE_TYPING = "TRIGGER__SOURCE_TEXT_CHANGED_WHILE_TYPING", d.TRIGGER__SOURCE_TEXT_CHANGED = "TRIGGER__SOURCE_TEXT_CHANGED", d.TRIGGER__FAILSAFE_CHECK = "TRIGGER__FAILSAFE_CHECK", d.TYPE__TRANSLATE_SOURCE = "TYPE__TRANSLATE_SOURCE", d.TYPE__SMART_EDIT_REQUEST = "TYPE__SMART_EDIT_REQUEST", d.TYPE__DUMMY = "TYPE__DUMMY", o.a.defineType("/translator/core/requestHandling", [], function() {
		var e = c.
	default.value(!1),
			t = 0,
			n = !1,
			r = "[requestHandling]";
		var o = new Set;
		return window._activeRequests = o, {
			hasPendingRequests: e,
			startRequestContext: function(a, i) {
				var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
					c = new d(a, i, s);
				return o.add(c), c.isRunning() ? console.warn("request already running", c) : (c.start(), c.onRequestEnded.push(function() {
					--t, n && console.log(r, "stop", c.type, t), e(t > 0)
				}), c.onRequestEnded.push(function() {
					return o.delete(c)
				}), function() {
					var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "?";
					++t, n && console.log(r, "start", o, t), e(t > 0)
				}(c.trigger)), c
			},
			dbg_getActiveRequests: function() {
				return o
			}
		}
	}), o.a.defineType("/translator/core/languageManagement", ["/translator/webTranslatorCore", "/translator/core/config"], function(e, t) {
		var n = !1,
			r = "[languageManagement]",
			o = e._internalLanguageManagement,
			a = e._pushPreferredLang,
			i = e.getSelectedSourceLang,
			s = e.getSelectedTargetLang,
			f = o.getSelectedTargetLangSettings,
			d = o.getPreferredLangs,
			p = e._langConfig,
			g = c.
		default.createMultiProcedure(),
			h = c.
		default.createMultiProcedure(),
			_ = c.
		default.createMultiProcedure(),
			v = c.
		default.value(y("", {
				lang: ""
			}));
		_(v()), g.push(function(e, t) {
			setTimeout(function() {
				return c.
			default.notify("LMT/langChanged")
			}, 100)
		}), c.
	default.withValue(v, function(t) {
			window._tState = t, e.sourceLang(t.getSourceLang()), e.targetLang(t.getTargetLang()), t.getSourceLang() && t.getTargetLang() && g(t.getSourceLang(), t.getTargetLang())
		});
		var m = i();

		function y(e, n) {
			return u.
		default.dev_sealProxy(new l.a(e, n, {
				useContext: t.get("CONFIG__USE_CONTEXT"),
				smartTargetEditingAvailable: n && p[n.lang] && !p[n.lang].disableSmartTargetEditing
			}))
		}
		function T(t, a) {
			n && console.log(r, "updateActiveLanguages", p, t, a);
			var s = v(),
				u = s.getSourceLang(),
				l = s.getTargetLangSettings();
			t === u && c.
		default.isSimilar(a, l) || (v(y(t, a)), _(v()), t && t !== i() && "auto" !== i() && e._selectedSourceLang("auto"), a.lang && o.updateSelectedTargetSettings(a), h(v()))
		}
		function S(e) {
			return e = ("" + (e || "")).substr(0, 2).toUpperCase(), p[e] ? e : ""
		}
		return e.onSourceLangSelected.push(function(e) {
			n && console.log(r, "SelectedSourceLang changed to ", e);
			var t = v(),
				a = "auto" === m ? t.getSourceLang() || "" : m;
			m = e, "auto" === e ? T("", {
				lang: ""
			}) : e === s() ? (n && console.log("Switching target language, too. lastSourceLang=" + a + ", selectedSourceLang=" + i()), o.updateSelectedTargetSettings({
				lang: "auto" === a || a === i() ? "EN" : a
			})) : e === t.getSourceLang() ? n && console.log(r, "Keep source language.") : T(e, f())
		}), o.onSelectedTargetLangSettingsChanged.push(function(e) {
			var t = v().getSourceLang(),
				o = v().getTargetLangSettings();
			c.
		default.isSimilar(e !== o) || (n && console.log(r, "SelectedTargetLang changed to ", e), T(t, e), setTimeout(function() {
				return c.
			default.notify("LMT/langChanged")
			}, 100))
		}), e.isActiveLangContext = function(e) {
			return e === v()
		}, e.getActiveState = function() {
			return v()
		}, e.getActiveLangContext = function() {
			return v()
		}, e.activeState = v, {
			doPrepareNewLangContext: _,
			getActiveLangContext: function() {
				return v()
			},
			getPrioritizedSourceLangs: function() {
				var e, t = v(),
					n = d();
				if (t.getSourceLang()) e = t.getSourceLang();
				else if ("auto" !== i()) e = i();
				else {
					var r = s();
					e = n.filter(function(e) {
						return e !== r
					}).pop()
				}
				var o = n.filter(function(t) {
					return t !== e
				});
				return o.push(e), o
			},
			getSelectedSourceLang: i,
			getSelectedTargetLang: s,
			getPreferredLangs: d,
			isActiveLangContext: function(e) {
				return e === v()
			},
			notifyChangedSourceLangDetected: function(t) {
				n && console.log(r, "notifyChangedSourceLangDetected", t);
				var o = v().getSourceLang(),
					a = s(),
					c = i();
				if (t === o);
				else if (t === a) {
					var u = o || d().filter(function(e) {
						return e != t
					}).pop();
					e._selectedSourceLang("auto"), T(t, {
						lang: u
					})
				} else t !== c && e._selectedSourceLang("auto"), T(t, f())
			},
			onLangChanged: g,
			onActiveLangContextChanged: h,
			pushPreferredLang: a,
			setUserSelectedSourceLang: function(t) {
				n && console.log("setUserSelectedSourceLang", t);
				var r = i(),
					o = s();
				if (t === r);
				else if (t === o) {
					var c = "auto" !== r ? r : d().filter(function(e) {
						return e != t
					}).pop();
					a(t), e._selectedSourceLang(t), T("", {
						lang: c
					})
				} else a(t), e.selectSourceLang(t)
			},
			setUserSelectedTargetLangSettings: function(t) {
				n && console.log(r, "setUserSelectedTargetLangSettings", t);
				var o = v(),
					i = f(),
					s = o.getSourceLang();
				c.
			default.isSimilar(t, i) || (a(t.lang), s !== t.lang ? T(s, t) : (e._selectedSourceLang("auto"), T("", t)))
			},
			sanitizeAndUpdateActiveLanguages: function(e, t) {
				n && console.log(r, "sanitizeAndUpdateActiveLanguages: enter", e, t);
				var o = S(e),
					a = S(t);
				a && o !== a || (a = function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = d();
					if (!e) return t[t.length - 1] || "";
					for (var n = t.length - 1; n >= 0; --n) if (e(t[n])) return t[n];
					return ""
				}(function(e) {
					return e !== o
				})), n && console.log(r, "sanitizeAndUpdateActiveLanguages: done", o, a), T(o, {
					lang: a
				})
			},
			updateActiveLanguages: T
		}
	});
	var p = n(120);
	p.
default.requireAsync(["dlTexts"], function(e) {
		o.a.defineType("/translator/core/localizedTexts", [], function() {
			return {
				get: function(t, n) {
					return e.get(t, n)
				}
			}
		})
	}), o.a.defineType("/translator/core/domElements", ["/translator/webTranslatorCore"], function(e) {
		var t = Object(a.a)(e.rootNode),
			n = t.find(".lmt__source_textarea"),
			r = t.find(".lmt__target_textarea"),
			o = t.find(".lmt__translations_as_text");
		return {
			body: document.querySelector("body"),
			$rootContainer: t,
			rootContainer: t.get(0),
			$targetEdit: r,
			targetEdit: r.get(0),
			targetEditInnerContainer: r.closest(".lmt__inner_textarea_container").get(0),
			targetEditOuterContainer: r.closest(".lmt__textarea_container").get(0),
			$sourceEdit: n,
			sourceEdit: n.get(0),
			sourceEditInnerContainer: n.closest(".lmt__inner_textarea_container").get(0),
			sourceEditOuterContainer: n.closest(".lmt__textarea_container").get(0),
			$translationsAsText: o,
			translationsAsText: o.get(0),
			sourceSideContainer: t.find(".lmt__side_container--source").get(0),
			targetSideContainer: t.find(".lmt__side_container--target").get(0)
		}
	}), o.a.defineType("/translator/core/networkStatus", [], function() {
		var e = c.
	default.createMultiProcedure(),
			t = c.
		default.createMultiProcedure();
		return {
			onRPCCallFailed: e,
			onRPCCallSucceeded: c.
		default.createMultiProcedure(),
			onRequestFailed:
			t
		}
	});
	var g = n(292);

	function h(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function _(e, t) {
		for (var n = 0; n < t.length; n++) {
			var r = t[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
		}
	}
	function v(e, t, n) {
		return t && _(e.prototype, t), n && _(e, n), e
	}
	o.a.defineType("/translator/core/translationBackend", ["/translator/core/config", "/translator/core/networkStatus"], function(e, t) {
		var n = c.
	default.value(void 0 === e.get("backend.translationEndpoint")),
			r = c.
		default.value(e.get("backend.translationEndpoint") || e.get("backend.scheduler")),
			o = c.
		default.value(e.get("backend.splittingEndpoint") || e.get("backend.scheduler")),
			a = c.
		default.createMultiProcedure(),
			i = c.
		default.createMultiProcedure(),
			s = {
				translation: c.
			default.computedValue([r, n], function(e, t) {
					return u(e, t)
				}),
				sentenceSplitting:
				c.
			default.computedValue([o], function(e) {
					return u(e, void 0)
				})
			};

		function u(e, n) {
			var r = new g.
		default ({
				url: e,
				isScheduler: n,
				doFinalizeJobRequestParameters: a,
				doFinalizeSentenceSplittingRequestParameters: i
			});
			return r.onRequestSucceeded.push(function(e) {
				return t.onRPCCallSucceeded()
			}), r.onRequestFailed.push(function(e) {
				return t.onRPCCallFailed()
			}), r
		}
		return e.get("backend.testUserBlocking") && c.
	default.withValue(s.translation, function(e) {
			return e.rpcConfig = {
				queryParams: {
					"x-simulate-too-many-requests": "1"
				}
			}
		}), {
			lmtBackends: s,
			doFinalizeJobRequestParameters: a,
			doFinalizeSentenceSplittingRequestParameters: i,
			backendURL_translation: r,
			backendURL_sentenceSplitting: o,
			sendTranslationJobs: function() {
				var e;
				return (e = s.translation()).sendTranslationJobs.apply(e, arguments)
			},
			sendTranslationJobs_batched: function() {
				var e;
				return (e = s.translation()).sendTranslationJobs_batched.apply(e, arguments)
			},
			requestSentenceSplitting: function() {
				var e;
				return (e = s.sentenceSplitting()).requestSentenceSplitting.apply(e, arguments)
			},
			sendAdditionalData: function() {
				var e;
				return (e = s.translation()).sendAdditionalData.apply(e, arguments)
			},
			translationProvidesLangDetection: c.
		default.computedValue(n, function(e) {
				return e
			})
		}
	});
	var m = 0,
		y = 0;

	function T() {
		return ++y
	}
	var S = function() {
			function e(t) {
				h(this, e), this._id = m++, this._targetText = void 0, this._alternativeTargetTexts = void 0, this._sourceText = t, this._translationResult = void 0, this.additionalData = new Object(null), this.cachedLocalAlternativeEntries = new Object(null), this.status = e.STATUS__NEW
			}
			return v(e, [{
				key: "getAlternativeTargetTexts",
				value: function() {
					return this._alternativeTargetTexts
				}
			}, {
				key: "getSourceText",
				value: function() {
					return this._sourceText
				}
			}, {
				key: "getTargetText",
				value: function() {
					return this._targetText
				}
			}, {
				key: "getTranslationResult",
				value: function() {
					return this._translationResult
				}
			}, {
				key: "setTargetText",
				value: function(e) {
					this._targetText = e
				}
			}, {
				key: "setAlternativeTargetTexts",
				value: function(e) {
					this._alternativeTargetTexts = e
				}
			}, {
				key: "setTranslationResult",
				value: function(e) {
					this._translationResult = e
				}
			}]), e
		}();
	S.create = function(e) {
		return u.
	default.dev_sealProxy(new S(e))
	}, S.STATUS__NEW = "TRANSLATION_STATUS__NEW", S.STATUS__READY = "TRANSLATION_STATUS__READY", S.STATUS__READY__FAST_QUALITY = "TRANSLATION_STATUS__READY__FAST_QUALITY", S.STATUS__REQUESTES_FAST__DEV_TEST = "TRANSLATION_STATUS__REQUESTES_FAST__DEV_TEST";
	var b = function() {
			function e() {
				h(this, e);
				var t = T();
				this._id = m++, this._rawTrimmedText = "", this._textRev = t, this._whitespacesAfter = "", this._whitespacesAfterRev = t, this._whitespacesBefore = "", this._whitespacesBeforeRev = t, this.nextSentence = void 0, this.previousTranslations = void 0, this.prevSentence = void 0, this.translation = void 0
			}
			return v(e, [{
				key: "getId",
				value: function() {
					return this._id
				}
			}, {
				key: "getWhitespacesBefore",
				value: function() {
					return this._whitespacesBefore
				}
			}, {
				key: "getWhitespacesBeforeRev",
				value: function() {
					return this._whitespacesBeforeRev
				}
			}, {
				key: "getWhitespacesAfter",
				value: function() {
					return this._whitespacesAfter
				}
			}, {
				key: "getWhitespacesAfterRev",
				value: function() {
					return this._whitespacesAfterRev
				}
			}, {
				key: "getText",
				value: function() {
					return this._whitespacesBefore + this._rawTrimmedText + this._whitespacesAfter
				}
			}, {
				key: "getNormalizedText",
				value: function() {
					return u.
				default.collapseWhitespaces(this._rawTrimmedText)
				}
			}, {
				key: "getRawTrimmedText",
				value: function() {
					return this._rawTrimmedText
				}
			}, {
				key: "getTextRev",
				value: function() {
					return this._textRev
				}
			}, {
				key: "updateWhitespacesAfter",
				value: function(e) {
					e !== this._whitespacesAfter && (this._whitespacesAfter = e, this._whitespacesAfterRev = T())
				}
			}, {
				key: "updateWhitespacesBefore",
				value: function(e) {
					e !== this._whitespacesBefore && (this._whitespacesBefore = e, this._whitespacesBeforeRev = T())
				}
			}, {
				key: "updateRawTrimmedText",
				value: function(e) {
					e !== this._rawTrimmedText && (this._rawTrimmedText = e, this._textRev = T())
				}
			}]), e
		}();
	b.create = function() {
		return u.
	default.dev_sealProxy(new b)
	};
	var E = /^\s*/,
		w = /\s*$/,
		x = function() {
			function e(t) {
				h(this, e), this._id = m++, this._lastFullTrimmedText = void 0, this._parts = void 0, this._sourceSentence = void 0, this._snapshots = [], this._textRev = t ? T() : -1, this._whitespacesAfterRev = -1, this._whitespacesBeforeRev = -1, this.cachedAutocompletionRequests = [], this.highlights = [], this._text = t, this._lastFullTrimmedText = t.trim()
			}
			return v(e, [{
				key: "clearSnapshots",
				value: function() {
					this._snapshots.splice(0)
				}
			}, {
				key: "getFullSnapshot",
				value: function(e) {
					var t = this._snapshots.filter(function(e) {
						return e.isFullText
					});
					return t[e < 0 ? t.length + e : e]
				}
			}, {
				key: "getId",
				value: function() {
					return this._id
				}
			}, {
				key: "getLastFullTrimmedText",
				value: function() {
					return this._lastFullTrimmedText
				}
			}, {
				key: "getNormalizedText",
				value: function() {
					return u.
				default.collapseWhitespaces(this._text).trim()
				}
			}, {
				key: "getNormalizedTextAndOffset",
				value: function(e) {
					var t = 0,
						n = [];
					return this.getParts().forEach(function(r, o) {
						var a;
						a = r.isWhitespacePart ? 0 == o ? "" : " " : r.text, e >= r.text.length ? (t += a.length, e -= r.text.length) : e >= 0 && (t += Math.min(e, a.length), e -= r.text.length), n.push(a)
					}), [n.join(""), t]
				}
			}, {
				key: "getParts",
				value: function() {
					return this._parts || (this._parts = u.
				default.splitTextIntoParts(this._text)), this._parts
				}
			}, {
				key: "getSnapshot",
				value: function(e) {
					return this._snapshots[e < 0 ? this._snapshots.length + e : e]
				}
			}, {
				key: "getSnapshots",
				value: function() {
					return this._snapshots
				}
			}, {
				key: "getSourceSentence",
				value: function() {
					return this._sourceSentence
				}
			}, {
				key: "getText",
				value: function() {
					return this._text
				}
			}, {
				key: "getTextRev",
				value: function() {
					return this._textRev
				}
			}, {
				key: "getTranslation",
				value: function() {
					return this._sourceSentence && this._sourceSentence.translation
				}
			}, {
				key: "getWhitespacesAfter",
				value: function() {
					return this._text.match(w)[0]
				}
			}, {
				key: "getWhitespacesAfterRev",
				value: function() {
					return this._whitespacesAfterRev
				}
			}, {
				key: "getWhitespacesBefore",
				value: function() {
					return this._text.match(E)[0]
				}
			}, {
				key: "getWhitespacesBeforeRev",
				value: function() {
					return this._whitespacesBeforeRev
				}
			}, {
				key: "setSourceSentence",
				value: function(e) {
					this._sourceSentence = e
				}
			}, {
				key: "setTextRev",
				value: function(e) {
					this._textRev = e
				}
			}, {
				key: "takeSnapshot",
				value: function(e) {
					var t = this.getNormalizedText(),
						n = this._snapshots;
					n.length && t === n[n.length - 1].text && e === n[n.length - 1].isFullText || n.push({
						text: t,
						isFullText: e
					})
				}
			}, {
				key: "updateRawText",
				value: function(e, t) {
					var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					this._text = e, this._parts = void 0, t && (this._lastFullTrimmedText = e.trim()), this.takeSnapshot(t), n && (this._textRev = T())
				}
			}, {
				key: "updateWhitespacesAfterRev",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T();
					this._whitespacesAfterRev = e
				}
			}, {
				key: "updateWhitespacesBeforeRev",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T();
					this._whitespacesBeforeRev = e
				}
			}]), e
		}();
	x.create = function(e) {
		return u.
	default.dev_sealProxy(new x(e))
	}, o.a.defineType("/translator/core/triggerSourceTranslation", ["/translator/webTranslatorCore", "/translator/core/languageManagement", "/translator/core/requestHandling", "/translator/core/textareas", "core/config"], function(e, t, n, r, o) {
		var a = c.
	default.createMultiProcedure();

		function i(e) {
			a(e)
		}
		var s = "";
		t.onActiveLangContextChanged.push(function(e) {
			var t = n.startRequestContext(e, d.TYPE__TRANSLATE_SOURCE, e.getSourceLang() !== s ? d.TRIGGER__SOURCE_LANG_CHANGED : d.TRIGGER__TARGET_LANG_CHANGED);
			s = e.getSourceLang(), i(t)
		});
		var u = "";

		function l() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.TRIGGER__SOURCE_TEXT_CHANGED,
				o = r.getSourceText();
			return u !== o && (u = o, i(n.startRequestContext(e.getActiveLangContext(), d.TYPE__TRANSLATE_SOURCE, t)), !0)
		}
		function f(e) {
			return e.sourceSentences.some(function(e) {
				return e.translation && e.translation.status === S.STATUS__READY__FAST_QUALITY
			})
		}
		return r.onSourceTextChanged.push(function(t, r) {
			"internal" !== r && (l("typing" === r ? d.TRIGGER__SOURCE_TEXT_CHANGED_WHILE_TYPING : d.TRIGGER__SOURCE_TEXT_CHANGED), c.
		default.setTimeout_consolidated("assureInitialTranslationIsRequested", function() {
				l() || f(e.getActiveLangContext()) && i(n.startRequestContext(e.getActiveLangContext(), d.TYPE__TRANSLATE_SOURCE, d.TRIGGER__FAILSAFE_CHECK))
			}, o.get("CONFIG__SEND_BACKUP_REQUEST_DELAY")))
		}), {
			checkForChangedSourceEdit: function() {
				l()
			},
			triggerTranslationUpdate: i,
			onSourceTranslationShouldUpdate: a
		}
	});
	var C = {
		getSourceContext: function(e) {
			for (var t = [], n = 0, r = e.prevSentence; r && t.length < 5;) {
				var o = r.getNormalizedText();
				if ((n += o.length) > 1e3) break;
				t.unshift(o), r = r.prevSentence
			}
			var a = [];
			return e.nextSentence && a.push(e.nextSentence.getNormalizedText().substr(0, 500)), {
				prefix: t,
				postfix: a
			}
		},
		getSentencePosForTargetCursorOffset: function(e, t) {
			for (var n = t, r = e.targetSentences, o = 0; o < r.length; ++o) {
				var a = r[o],
					i = a.getText().length;
				if (n < i || n === i && (0 === i || o === r.length - 1)) return {
					sentence: a,
					sentenceCursorOffset: n,
					cursorOffset: t,
					sentenceIndex: o
				};
				n -= i
			}
			return null
		},
		createLMTError: function(e) {
			return {
				errorType: e
			}
		}
	};

	function A(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) ||
		function(e, t) {
			var n = [],
				r = !0,
				o = !1,
				a = void 0;
			try {
				for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
			} catch (e) {
				o = !0, a = e
			} finally {
				try {
					r || null == s.
					return ||s.
					return ()
				} finally {
					if (o) throw a
				}
			}
			return n
		}(e, t) ||
		function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}()
	}
	var O = "LMT_ERROR_TYPE__LINE_TOO_LONG_TO_SPLIT",
		L = 14e3;
	o.a.defineType("/translator/core/updateSourceSentences", ["/translator/core/translationBackend", "/translator/core/requestHandling", "/translator/core/textareas", "/translator/core/languageManagement", "/translator/core/triggerSourceTranslation", "/translator/core/networkStatus", "/translator/core/config", "globalState"], function(e, t, n, r, o, a, i, s) {
		var l = c.
	default.createMultiProcedure(),
			f = /^\s*/g;

		function p(e) {
			var t = e.match(/(^\s*)$/g);
			if (t) return t[0];
			var n = e.match(/\n([ ]*)$/);
			return n ? n[1] : ""
		}
		var g = /^\s*$|^[ ]*(?=\S)|^\s*\n(?=[ ]*\S)/g,
			h = /\s*$/;
		var _ = /[\x00-\x08\x0B-\x1f\x7F\xAD]/g;
		return o.onSourceTranslationShouldUpdate.push(function(o) {
			var v = "[splitting]",
				m = o.langContext,
				y = n.getSourceText();
			if (y.match(_)) return y = y.replace(_, ""), o.stop(), void n.setSourceTextExplicitly(y);
			var T, E = r.getSelectedSourceLang(),
				w = {
					lang_user_selected: E,
					user_preferred_langs: r.getPrioritizedSourceLangs()
				},
				x = r.getSelectedTargetLang();
			c.
		default.scheduleNonConcurrentRequest("sentenceSplitting" + m.getId(), function() {
				return new Promise(function(t, n) {
					var r = y.substr(0, i.get("CONFIG__MAX_NUM_CHARACTERS"));
					T = r;
					var a = function(e, t) {
							var n = !1,
								r = [];
							if (t.split("\n").forEach(function(e) {
								var t = u.
							default.collapseWhitespaces(e).trim();
								t.length > L && (n = !0), t.length && r.push(t)
							}), n) return O;
							for (var o = [], a = [], i = [], s = 0, c = 0, l = 0; e.sourceSentences[s] && void 0 !== r[c];) {
								for (var f = r[c], d = []; f.length;) {
									var p = e.sourceSentences[s];
									if (!p) break;
									var g = p.getNormalizedText();
									if (d.push(g), !f.startsWith(g)) break;
									f = f.substr(g.length).trim(), ++s
								}
								if (f.length) break;
								l += r[c].length, a.push(d), ++c
							}
							l > 0 && l < 500 && (l = 0, a.splice(0));
							for (var h = e.sourceSentences.length - 1, _ = r.length - 1; e.sourceSentences[h] && void 0 !== r[c] && h > s && _ > c;) {
								for (var v = r[_], m = []; v.length;) {
									var y = e.sourceSentences[h];
									if (!y) break;
									var T = y.getNormalizedText();
									if (m.unshift(T), !v.endsWith(T)) break;
									v = v.substr(0, v.length - T.length).trim(), --h
								}
								if (v.length) break;
								i.unshift(m), --_
							}
							o = r.slice(a.length, r.length - i.length);
							var S = 0;
							if (o.forEach(function(e) {
								S += e.length
							}), S > 0) for (var b = 0; S < 500;) if (b = 1 - b) if (a.length) {
								var E = a.pop().join(" ");
								o.unshift(E), S += E.length
							} else {
								if (!i.length) break;
								var w = i.shift().join(" ");
								o.push(w), S += w.length
							} else if (i.length) {
								var x = i.shift().join(" ");
								o.push(x), S += x.length
							} else {
								if (!a.length) break;
								var C = a.pop().join(" ");
								o.unshift(C), S += C.length
							}
							return {
								unchangedSplittedParagraphsPrefix: a,
								changedCleanedParagraphs: o,
								unchangedSplittedParagraphsPostfix: i
							}
						}(m, r);
					if (a === O) n(C.createLMTError(O));
					else {
						var c = !e.translationProvidesLangDetection() || s.GSTATE__FORCE_SENTENCE_SPLITTING_REQUESTS_FOR_STABILITY();
						e.requestSentenceSplitting(a.changedCleanedParagraphs, w, o.trigger, c).then(function(e) {
							a.splittingResult = e, t(a)
						}, n)
					}
				})
			}, 5e3).then(function(e) {
				if (E == r.getSelectedSourceLang() && x == r.getSelectedTargetLang()) {
					var n = e.splittingResult,
						a = e.unchangedSplittedParagraphsPrefix.concat(n.splittedTextblocks, e.unchangedSplittedParagraphsPostfix),
						i = n.detectedLang,
						s = n.langIsConfident;
					"" !== i && void 0 !== i && s && r.pushPreferredLang(i);
					var c = 0;
					e.unchangedSplittedParagraphsPrefix.forEach(function(e) {
						return e.forEach(function(e) {
							return c += e.length
						})
					}), i && i !== m.getSourceLang() && (c > 500 || r.notifyChangedSourceLangDetected(i));
					var u = [];
					a.forEach(function(e) {
						e.forEach(function(e) {
							u.push(e.trim())
						})
					}), r.isActiveLangContext(m) || (o.stop(), o = t.startRequestContext(r.getActiveLangContext(), d.TYPE__TRANSLATE_SOURCE, o.trigger)), o.splitSentenceRequestUsed = !! n.splitSentenceRequestUsed, o.sourceLangHasBeenDetermined = !! i, function(e, t, n) {
						function r(e) {
							return e && e.translation && e.translation.getSourceText()
						}
						var o = "[doUpdateSourceSentences]",
							a = e.sourceSentences,
							i = a.splice(0);
						if (t) {
							for (var s = t.slice(0), c = n; s.length && i.length && r(i[0]) === s[0];) {
								var u = i.shift();
								a.push(u);
								var l = s.shift(),
									d = c.match(f)[0];
								if (u.updateWhitespacesBefore(d), d.length && (c = c.substr(d.length)), c.startsWith(l)) u.updateRawTrimmedText(l), c = c.substr(l.length);
								else {
									var _ = l.replace(/\s/g, ""),
										v = new RegExp("^(\\s*\\S){" + _.length + "}"),
										m = c.match(v);
									m ? (u.updateRawTrimmedText(m[0].trim()), c = c.substr(m[0].length)) : (u.updateRawTrimmedText(l), console.warn(o, "Could not consume source sentence text!"), console.log("[" + l + "]"), console.log("[" + c + "]"))
								}
								var y = c.match(g);
								y && y[0].length ? (u.updateWhitespacesAfter(y[0]), c = c.substr(y[0].length)) : u.updateWhitespacesAfter("")
							}
							for (var T = []; s.length && i.length && r(i[i.length - 1]) === s[s.length - 1];) {
								var E = i.pop(),
									w = s.pop();
								T.unshift(E);
								var x = c.match(h)[0];
								if (E.updateWhitespacesAfter(x), x.length && (c = c.substr(0, c.length - x.length)), c.endsWith(w)) E.updateRawTrimmedText(w), c = c.substr(0, c.length - w.length);
								else {
									var O = w.replace(/\s/g, ""),
										L = new RegExp("(\\S(\\s*\\S){" + (O.length - 1) + "})$"),
										R = c.match(L);
									R ? (E.updateRawTrimmedText(R[0].trim()), c = c.substr(0, c.length - R[0].length)) : (console.warn(o, "(back) Could not consume source sentence text!"), console.log("[" + w + "]"), console.log("[" + c + "]"))
								}
								var N = p(c);
								N ? (E.updateWhitespacesBefore(N), c = c.substr(0, c.length - N.length)) : E.updateWhitespacesBefore("")
							}
							var P = [];
							for (s.forEach(function(e) {
								var t = b.create();
								if (P.push([t, e]), i.length) {
									var n = i.shift(),
										r = n.previousTranslations ? n.previousTranslations.slice(0) : [];
									r.unshift(n.translation);
									for (var s = []; r.length;) {
										var u = r.shift();
										if (s.push(u), u.getTargetText()) break
									}
									t.previousTranslations = s
								}
								var l = c.match(f)[0];
								if (t.updateWhitespacesBefore(l), l.length && (c = c.substr(l.length)), c.startsWith(e)) t.updateRawTrimmedText(e), c = c.substr(e.length);
								else {
									var d = e.replace(/\s/g, ""),
										p = new RegExp("^(\\s*\\S){" + d.length + "}"),
										h = c.match(p);
									h ? (t.updateRawTrimmedText(h[0].trim()), c = c.substr(h[0].length)) : (console.warn(o, "Could not consume source sentence text!"), console.log("[" + e + "]"), console.log("[" + c + "]"))
								}
								var _ = c.match(g);
								_ ? (t.updateWhitespacesAfter(_[0]), c = c.substr(_[0].length)) : t.updateWhitespacesAfter(""), a.push(t)
							}); T.length;) a.push(T.shift());
							a.forEach(function(e, t) {
								e.prevSentence = a[t - 1], e.nextSentence = a[t + 1]
							}), P.forEach(function(t) {
								var n, r = A(t, 2),
									o = r[0],
									a = r[1];
								if (e.isContextEnabled()) {
									var i = C.getSourceContext(o);
									n = i.prefix.join("/") + "//" + a + "//" + i.postfix.join("/")
								} else n = a;
								var s = e.getRegisteredTranslation(n);
								void 0 === s && (s = S.create(a), e.registerTranslation(n, s)), o.translation = s
							})
						}
					}(m, u, T), o.onSentenceSplittingReceived(), l(o)
				} else o.stop()
			}, function(e) {
				if (o.stop(), e === c.
			default.scheduleNonConcurrentRequest.FAILURE_REASON__CANCELED);
				else {
					var t = e;
					t.errorType === O ? (console.warn(v, "Too long line detected"), r = [], i = .75 * L << 0, s = ["! ", "? ", ": ", "; ", ". ", ", ", '" ', " "], n.getSourceText().split("\n").forEach(function(e) {
						for (;;) {
							if (e.length < L) {
								r.push(e);
								break
							}
							console.log("[lineSplit]", "Split long line", e.length);
							for (var t = e.length, n = !1, o = 0; o < s.length; ++o) {
								var a = e.indexOf(s[o], i);
								if (a >= 0 && a < L) {
									r.push(e.substr(0, a + 1).trimEnd()), e = "   " + e.substr(a + s[o].length).trimStart(), n = !0;
									break
								}
							}
							if (n || (r.push(e.substr(0, i).trimEnd()), e = "   " + e.substr(i).trimStart()), e.length >= t) throw new Error("Sanity check failed!")
						}
					}), n.setSourceTextExplicitly(r.join("\n"))) : (a.onRequestFailed("splitting", t), console.error(t))
				}
				var r, i, s
			})
		}), {
			onSourceSentencesChanged: l
		}
	});
	var R = {
		JOB_KIND__DEFAULT: "default",
		JOB_KIND__AUTOCOMPLETION: "autocompletion",
		JOB_KIND__ALTERNATIVES_AT_POSITION: "alternatives_at_position",
		RECORD__POSTPROCESSED_SENTENCE: "postprocessed_sentence",
		TRANSLATION_RESULT__TRANSLATIONS: "translations",
		TRANSLATION_RESULT__SOURCE_LANG: "source_lang",
		TRANSLATION_RESULT__TARGET_LANG: "target_lang"
	};
	o.a.defineType("/translator/core/translateSourceSentences", ["/translator/core/translationBackend", "/translator/core/requestHandling", "/translator/core/languageManagement", "/translator/core/triggerSourceTranslation", "/translator/core/updateSourceSentences", "/translator/core/networkStatus", "/translator/core/textareas", "/translator/core/config", "globalState"], function(e, t, n, r, o, a, i, s, u) {
		var l = !1,
			f = "[translateSourceSentences]",
			p = c.
		default.createMultiProcedure(),
			g = c.
		default.createMultiProcedure(),
			h = c.
		default.createMultiProcedure(),
			_ = c.
		default.createMultiProcedure(),
			v = c.
		default.createMultiProcedure(),
			m = c.
		default.createMultiProcedure();
		return o.onSourceSentencesChanged.push(function(o) {
			!
			function(o, i) {
				var g, h = o.langContext,
					y = [];
				l && console.log(f, "requestTranslations", o, i), c.
			default.scheduleNonConcurrentRequest("initialTranslation" + h.getId(), function() {
					return new Promise(function(T, b) {
						if (n.isActiveLangContext(h)) {
							if (l && console.log(f, "Collecting translation jobs...", o), g = [], h.sourceSentences.forEach(function(e, t) {
								var n = e.translation;
								if (void 0 === n.getTargetText() || n.status === S.STATUS__READY__FAST_QUALITY && o.trigger !== d.TRIGGER__SOURCE_TEXT_CHANGED_WHILE_TYPING) {
									var r = {
										kind: R.JOB_KIND__DEFAULT,
										raw_en_sentence: n.getSourceText()
									};
									if (h.isContextEnabled()) {
										var a = C.getSourceContext(e);
										r.raw_en_context_before = a.prefix, r.raw_en_context_after = a.postfix
									}
									s.get("CONFIG__EXPLICITLY_REQUEST_ALTERNATIVES") && (0 === t && 1 === h.sourceSentences.length ? r.preferred_num_beams = 4 : r.preferred_num_beams = 1), g.push(r), y.push(n)
								}
							}), s.get("CONFIG__USE_FAST_TYPING_REQUESTS") && o.trigger === d.TRIGGER__SOURCE_TEXT_CHANGED_WHILE_TYPING && 1 === g.length && (g[0].quality = "fast", s.get("CONFIG__USE_FAST_TYPING_REQUESTS__DEV_MOCKUP") && (y[0].status = S.STATUS__REQUESTES_FAST__DEV_TEST)), !g.length) return l && console.log(f, "No requests necessary."), o.stop(), _(o), void T();
							var E = {
								user_preferred_langs: n.getPrioritizedSourceLangs()
							};
							o.sourceLangHasBeenDetermined ? E.source_lang_computed = n.getActiveLangContext().getSourceLang() : E.source_lang_user_selected = n.getSelectedSourceLang(), E.target_lang = n.getSelectedTargetLang(), l && console.log(f, "[_requestInitialTranslations] Schedule initialTranslation"), i < 1 && g.length > 1 && (i = 1, l && console.log(f, "Increase priority for large request"));
							var w = e.sendTranslationJobs_batched(g, h.createJobSettings(E, i), s.get("CONFIG__TRANSLATION_JOB_BATCH_SIZE")),
								x = 0;
							v(o, w), w.next().then(function e(i) {
								var c = i.currentBatchId(),
									v = i.getCurrentResult();
								if (l && console.log(f, "Handeling batch", c), !n.isActiveLangContext(h)) return l && console.log(f, "LangContext changed -> cancel translation handling."), o.stop(), void T();
								if (!v) return l && console.log(f, "Empty request"), _(o), void T();
								var b = v[R.TRANSLATION_RESULT__SOURCE_LANG],
									E = v[R.TRANSLATION_RESULT__TARGET_LANG];
								if (b && E && 0 === c) {
									if (o.trigger == d.TRIGGER__SOURCE_LANG_CHANGED && "auto" !== n.getSelectedSourceLang() && b !== n.getSelectedSourceLang()) return l && console.log(f, "IGNORING result because source lang switched by server on initialTranslation."), o.stop(), void T();
									if (o.sourceLangHasBeenDetermined && b !== h.getSourceLang() && (console.warn("BUG in Scheduler. Source language has been determined and cannot be changed. receivedSourceLang=" + b + " "), b = h.getSourceLang()), v.source_lang_is_confident && (l && console.log(f, "pushPreferredLang(" + b + ")"), n.pushPreferredLang(b)), h.getSourceLang() !== b || h.getTargetLang() !== E) return l && console.log(f, "Switching lang codes to ", b, E), h.getTargetLang() && h.getTargetLang() !== E && console.warn("Should not happen: state.getTargetLang()!==receivedTargetLang ", h.getTargetLang(), E), !u.GSTATE__FORCE_SENTENCE_SPLITTING_REQUESTS_FOR_STABILITY() && !o.splitSentenceRequestUsed && h.sourceSentences.length > 1 ? (u.GSTATE__FORCE_SENTENCE_SPLITTING_REQUESTS_FOR_STABILITY(!0), setTimeout(function() {
										return r.triggerTranslationUpdate(t.startRequestContext(n.getActiveLangContext(), d.TYPE__TRANSLATE_SOURCE, o.trigger))
									})) : n.notifyChangedSourceLangDetected(b), o.stop(), void T()
								}
								var w = v[R.TRANSLATION_RESULT__TRANSLATIONS],
									O = [],
									L = !1;
								w.forEach(function(e) {
									var t = y[x];
									if (t.status === S.STATUS__REQUESTES_FAST__DEV_TEST && (e.quality = "fast"), ++x, e.beams.length) {
										var n = [];
										e.beams.forEach(function(e) {
											var t = e[R.RECORD__POSTPROCESSED_SENTENCE];
											n.some(function(e) {
												return e === t
											}) || n.push(t)
										});
										var r = n.shift();
										"fast" === e.quality ? t.status = S.STATUS__READY__FAST_QUALITY : t.status = S.STATUS__READY, s.get("CONFIG__USE_FAST_TYPING_REQUESTS__DEV_MOCKUP") && t.status === S.STATUS__READY__FAST_QUALITY && (r = r.toUpperCase()), t.setTargetText(r), t.setAlternativeTargetTexts(n), t.setTranslationResult(e)
									} else t.setTargetText(""), t.setAlternativeTargetTexts([]), t.setTranslationResult(e), L = !0;
									O.push({
										translation: t,
										translationResult: e
									})
								}), p(O), L && (console.warn(f, "Empty beams!"), console.warn(f, "Jobs:", g), console.warn(f, "Result:", v)), w.length < i.getNumberOfJobsInCurrentBatch() ? (l && console.log(f, "Finished with errors: Partial result!"), i.stopped(!0), m(o), _(o), T()) : w.length != i.getNumberOfJobsInCurrentBatch() ? (l && console.log(f, "Finished with errors: Invalid number of results", w.length, i.getNumberOfJobsInCurrentBatch()), i.stopped(!0), a.onRequestFailed("translation", C.createLMTError("LMT_ERROR_TYPE__UNEXPECTED")), T()) : i.finished() ? (_(o), T()) : (l && console.log(f, "Next..."), i.next().then(e, A))
							}, A)
						} else b(c.
					default.scheduleNonConcurrentRequest.FAILURE_REASON__CANCELED);

						function A(e) {
							o.stop(), w.stopped(!0), a.onRequestFailed("translation", e), i < 0 ? b(e) : (l && console.log(f, "Finished with errors"), T())
						}
					})
				}, 1e4).then(function(e) {
					l && console.log(f, "Finished")
				}, function(e) {
					if (o.stop(), e === c.
				default.scheduleNonConcurrentRequest.FAILURE_REASON__CANCELED) l && console.log(f, "CANCELED (ignore...)");
					else if (i < 0) {
						console.warn(e), l && console.log(f, "Low-prio request failed."), u.GSTATE__TYPING_REQUESTS_BLOCKED_UNTIL = Date.now() + s.get("CONFIG__BLOCK_TYPING_REQUEST_DURATION");
						var a = t.startRequestContext(h, d.TYPE__DUMMY);
						c.
					default.setTimeout_consolidated("assureInitialTranslationIsRequested", function() {
							l && console.log(f, "Send backup request"), a.stop(), r.triggerTranslationUpdate(t.startRequestContext(n.getActiveLangContext(), d.TYPE__TRANSLATE_SOURCE, d.TRIGGER__SOURCE_TEXT_CHANGED))
						}, s.get("CONFIG__SEND_BACKUP_REQUEST_DELAY"))
					} else console.error(e)
				})
			}(o, o.trigger === d.TRIGGER__SOURCE_TEXT_CHANGED_WHILE_TYPING ? -1 : 1)
		}), _.push(function(e) {
			var t = e.langContext;
			e.stop();
			for (var r = t.sourceSentences.slice(0), o = t.targetSentences.splice(0), a = t.targetSentences, s = function(e) {
					var t = e.getSourceSentence(),
						n = t.translation;
					if (t.getTextRev() >= e.getTextRev()) {
						var r = [];
						t.getWhitespacesBeforeRev() > e.getWhitespacesBeforeRev() ? (r.push(t.getWhitespacesBefore()), e.updateWhitespacesBeforeRev(t.getWhitespacesBeforeRev())) : r.push(e.getWhitespacesBefore());
						var o = n.getTargetText();
						if (void 0 === o) {
							e.setTextRev(-1);
							for (var a = t.previousTranslations ? t.previousTranslations.slice(0) : [];;) {
								var i = a.shift();
								if (!i) {
									r.length && "[...] " === r[r.length - 1] || r.push("[...] ");
									break
								}
								if (i.getTargetText()) {
									r.push(i.getTargetText());
									break
								}
							}
						} else e.setTextRev(t.getTextRev()), r.push(o);
						if (t.getWhitespacesAfterRev() >= e.getWhitespacesAfterRev()) {
							var s = t.getWhitespacesAfter();
							o && /[ ？。．！]$/.test(o) && s.startsWith(" ") ? s = s.substr(1) : s || !t.nextSentence || t.nextSentence.getWhitespacesBefore() || (s = " "), r.push(s), e.updateWhitespacesAfterRev(t.getWhitespacesAfterRev())
						} else r.push(e.getWhitespacesAfter());
						e.clearSnapshots(), e.updateRawText(r.join(""), void 0 !== o, !1), e.setTextRev(t.getTextRev())
					} else t.getWhitespacesBeforeRev() > e.getWhitespacesBeforeRev() && (e.updateRawText(t.getWhitespacesBefore() + e.getText().trimStart(), !0, !0), e.updateWhitespacesBeforeRev(t.getWhitespacesBeforeRev())), t.getWhitespacesAfterRev() > e.getWhitespacesAfterRev() && (e.updateRawText(e.getText().trimEnd() + t.getWhitespacesAfter(), !0, !0), e.updateWhitespacesAfterRev(t.getWhitespacesAfterRev()))
				}; o.length && o[0].getSourceSentence() === r[0];) {
				var c = o.shift();
				s(c), a.push(c), r.shift()
			}
			for (var u = [], l = []; o.length && o[o.length - 1].getSourceSentence() === r[r.length - 1];) {
				var f = o.pop();
				s(f), l.unshift(f), r.pop(), u.push(f)
			}
			for (; r.length && o.length;) {
				var d = r.shift(),
					p = o.shift();
				p.setSourceSentence(d), s(p), a.push(p), u.push(p)
			}
			for (; r.length;) {
				var _ = r.shift(),
					v = x.create("");
				v.setSourceSentence(_), s(v), a.push(v), u.push(v)
			}
			for (; o.length;) o.shift();
			for (; l.length;) {
				var m = l.shift();
				a.push(m)
			}
			u.length && g(u);
			var y = [];
			a.forEach(function(e) {
				return y.push(e.getText())
			}), t.targetText = y.join(""), n.isActiveLangContext(t) && (i.setTargetTextExplicitly(t.targetText, "update"), h(t))
		}), {
			onBatchedTranslationRequestStarted: v,
			onFinalizeTranslations: p,
			onFinalizeUpdatedTargetSentences: g,
			onPartialTranslationReceived: m,
			onTargetSentencesHaveChanged: h,
			onTranslationsHaveChanged: _
		}
	}), o.a.defineType("/translator/smartEditing/observeSentenceSelection", ["/translator/core/domElements", "webTranslatorCore", "/translator/smartEditing/updateTargetSentencesFromText"], function(e, t, n) {
		var r = "[observeSentenceSelection]",
			o = !1,
			a = c.
		default.createMultiProcedure(),
			i = c.
		default.createMultiProcedure(),
			s = "NO_SELECTION";

		function u(e, t) {
			for (var n = t, r = e.sourceSentences, o = 0; o < r.length; ++o) {
				var a = r[o],
					i = a.getText(),
					s = i.length;
				if (n < s || n === s && (0 === s || o === r.length - 1 || !i.endsWith("\n"))) return {
					sentence: a,
					sentenceCursorOffset: n,
					cursorOffset: t,
					sentenceIndex: o
				};
				n -= s
			}
			return null
		}
		function l() {
			var i = t.getActiveLangContext();
			n.doRefreshTargetDataFromText(i, e.$targetEdit.val());
			var c, u, l = e.$targetEdit.prop("selectionStart"),
				f = C.getSentencePosForTargetCursorOffset(i, l);
			if (f) {
				u = f.sentenceIndex + "_" + f.sentenceCursorOffset;
				var d = e.$targetEdit.prop("selectionEnd");
				l !== d && (c = C.getSentencePosForTargetCursorOffset(i, d)) && (u += ":" + c.sentenceIndex + "_" + c.sentenceCursorOffset)
			} else o && console.log(r, "No selection"), u = "NO_SELECTION";
			s !== u && (s = u, o && console.log(r, "selection", u), a(f || null, c || null))
		}
		var f = "NO_SELECTION";

		function d() {
			var n, a, s = t.getActiveLangContext(),
				c = e.$sourceEdit.prop("selectionStart"),
				l = u(s, c);
			if (l) {
				a = l.sentenceIndex + "_" + l.sentenceCursorOffset;
				var d = e.$sourceEdit.prop("selectionEnd");
				c !== d && (n = u(s, d)) && (a += ":" + n.sentenceIndex + "_" + n.sentenceCursorOffset)
			} else o && console.log(r, "No selection"), a = "NO_SELECTION";
			f !== a && (f = a, o && console.log(r, "selection", a), i(l || null, n || null))
		}
		return document.addEventListener("selectionchange", function() {
			var t = window.getSelection();
			t.focusNode === t.anchorNode && (t.anchorNode === e.targetEdit || t.anchorNode === e.targetEditInnerContainer ? l() : t.anchorNode !== e.sourceEdit && t.anchorNode !== e.sourceEditInnerContainer || d())
		}), e.$sourceEdit.on("keyup click", function() {
			return d()
		}), e.$targetEdit.on("keyup click", function() {
			return l()
		}), e.$sourceEdit.on("blur", function() {
			return a(null, null)
		}), e.$targetEdit.on("blur", function() {
			return i(null, null)
		}), {
			onTargetSelectionChanged: a,
			onSourceSelectionChanged: i
		}
	}), o.a.defineType("/translator/smartEditing/updateTargetSentencesFromText", [], function() {
		var e = !1,
			t = "updateTargetSentencesFromText",
			n = /^(\s*?\n)(\s*)|( ?)(\s+)$/;

		function r(e) {
			var t = e.match(n);
			return t ? t[1] ? [t[1], t[2]] : [t[3], t[4]] : ["", e]
		}
		function o(n, r, o) {
			var a = n.getParts();
			if (a.length) {
				r[0] !== a[0].text && (a[0].isWhitespacePart || r[0].match(/^\s+$/)) && (e && console.log(t, "New prefix whitespaces [" + r[0] + "] [" + a[0].text + "]"), n.updateWhitespacesBeforeRev());
				var i = a[a.length - 1],
					s = r[r.length - 1];
				s !== i.text && (i.isWhitespacePart || s.match(/^\s+$/)) && (e && console.log(t, "New postfix whitespaces [" + r[r.length - 1] + "]"), n.updateWhitespacesAfterRev())
			}
			n.updateRawText(r.join(""), !1, o)
		}
		return {
			doRefreshTargetDataFromText: function(n, a) {
				if (n.targetText !== a) {
					var i = n.targetText = a,
						s = u.
					default.splitTextIntoParts(i);
					e && console.log(t, "parts ", s.slice(0));
					var c, l, f = n.targetSentences.slice(0);
					e && console.log(t, "<<<< ");
					for (var d = f[0]; d;) {
						for (var p = d.getParts(), g = 0, h = 0, _ = void 0, v = void 0, m = !1;;) {
							for (v = p[h]; v && v.isWhitespacePart;) v = p[++h];
							for (_ = s[g]; _ && _.isWhitespacePart;) _ = s[++g];
							if (!v) {
								m = !0;
								break
							}
							if (!_) break;
							if (_.text !== v.text) {
								e && console.log(t, "[" + _.text + "] [" + v.text + "] ", d);
								break
							}++g, ++h
						}
						if (!m) {
							e && console.log(t, "No match.");
							break
						}!
						function() {
							e && console.log(t, "Sentence matched (front)!", d);
							var n = s.splice(0, g);
							if (n.length) {
								var a = n[n.length - 1];
								if (e && console.log(t, "The last matched part [" + a.text + "]", a.isWhitespacePart), a.isWhitespacePart) {
									var i = r(a.text);
									e && console.log(t, "Between sentence whitespaces (1): ", "[" + i[0] + "]", "[" + i[1] + "]"), a.text = i[0], i[1].length && (s.unshift({
										text: i[1],
										isWhitespacePart: !0
									}), e && console.log(t, "Between sentence whitespaces (2): ", "[" + i[0] + "]", "[" + i[1] + "]"))
								}
							}
							var u = [];
							n.forEach(function(e) {
								return u.push(e.text)
							}), o(d, u, !1), c = d, f.shift(), d = f[0], e && console.log("----------")
						}()
					}
					e && console.log("--------");
					for (var y = f[f.length - 1]; y;) {
						for (var T = y.getParts(), S = s.length - 1, b = T.length - 1, E = void 0, w = void 0, x = !1;;) {
							for (w = T[b]; w && w.isWhitespacePart;) w = T[--b];
							for (E = s[S]; E && E.isWhitespacePart;) E = s[--S];
							if (!w) {
								x = !0;
								break
							}
							if (!E) break;
							if (E.text !== w.text) {
								e && console.log(t, "Mismatch: [" + E.text + "] [" + w.text + "] ", y);
								break
							}--S, --b
						}
						if (!x) {
							e && console.log(t, "No match.");
							break
						}!
						function() {
							e && console.log(t, "Sentence matched (back)!", y);
							var n = s.splice(S + 1);
							if (n.length) {
								var a = n[0];
								if (a.isWhitespacePart) {
									var i = r(a.text);
									a.text = i[1], i[0].length && (s.push({
										text: i[0],
										isWhitespacePart: !0
									}), e && console.log(t, "Between sentence whitespaces (2): ", "[" + i[0] + "]", "[" + i[1] + "]"))
								}
							}
							var c = [];
							n.forEach(function(e) {
								return c.push(e.text)
							}), o(y, c, !1), l = y, f.pop(), y = f[f.length - 1], e && console.log("----------")
						}()
					}
					if (e && n.targetSentences.forEach(function(e, n) {
						console.log(t, "tSentence ", n, "[" + e.getText() + "]")
					}), 1 == f.length && s.length) {
						var C = f.shift(),
							A = [];
						s.splice(0).forEach(function(e) {
							return A.push(e.text)
						}), o(C, A, !0), e && console.log(t, "Assign remaining parts to single sentence: ", C)
					} else if (!f.length && s.length) {
						var O = 0;
						if (c || l ? c && !l ? O = -1 : !c && l ? O = 1 : (e && s.forEach(function(n, r) {
							e && console.log(t, "RemainingPart ", r, "[", n.text + "]")
						}), O = c.getText().match(/(\n|[!?])\s*$/) ? 1 : -1) : e && console.log(t, "Parts can't be assigned..."), O > 0) {
							var L = [];
							s.splice(0).reverse().forEach(function(e) {
								return L.unshift(e.text)
							}), L.push(l.getText()), o(l, L, !0), e && console.log(t, "Append to sentence after. ", l)
						} else if (O < 0) {
							var R = [c.getText()];
							s.splice(0).forEach(function(e) {
								return R.push(e.text)
							}), o(c, R, !0), e && console.log("[doRefreshTargetDataFromText]Append to sentence before. ", c)
						}
					} else if (f.length && s.length) {
						console.warn(t, "alignment is lost. Todo!");
						var N = [];
						s.splice(0).forEach(function(e) {
							return N.push(e.text)
						}), o(f.shift(), N, !0)
					} else e && console.log(t, "doRefreshTargetDataFromText everything ok.");
					e && console.log(t, ">>>>>>>> ")
				} else e && console.log(t, "No changes.")
			}
		}
	}), o.a.defineType("/translator/smartEditing/sourceSentenceHighlight", ["/translator/core/languageManagement", "/translator/core/domElements", "/translator/core/textareas", "/translator/smartEditing/observeSentenceSelection"], function(e, t, n, r) {
		var o = !1,
			s = "[Sentence-Hightlight]";
		o && console.log(s, "init");
		var u, l, f = Object(a.a)(t.sourceEdit),
			d = c.
		default.createCallOnce(),
			p = c.
		default.createCallOnce(),
			g = void 0,
			h = void 0;

		function _(e) {
			u && i.
		default.applyTextareaStyleToOverlay(e, u)
		}
		return n.onSourceTextChanged.push(d), f.on("focus click keydown", d), Object(a.a)(window).on("resize", d), r.onTargetSelectionChanged.push(function(t, n) {
			if (o && console.log(s, "_updateHighlightingForCursorPosTarget", t, n), p(), !t || n && n.sentence !== t.sentence) return void d();
			u ? _(f) : (!
			function(t, n) {
				o && console.log(s, "createHighlight", t, n);
				var r = "source" === t,
					i = r ? d : p;
				i(), r ? g = new Object(null) : h = new Object(null);
				i.push(function() {
					return function(e) {
						o && console.log(s, "clearSentenceNodes", e), e ? g = void 0 : h = void 0
					}(r)
				}), n.addClass("lmt__textarea--inactive"), i.push(function() {
					return n.removeClass("lmt__textarea--inactive")
				});
				var c = Object(a.a)("<div></div>").addClass("lmt__source_textarea_overlay").addClass("lmt__textarea_base_style").insertAfter(n);
				u = c, i.push(function() {
					c.remove(), u = null
				}), _(n);
				var l = e.getActiveLangContext(),
					f = [],
					v = parseInt(n.css("line-height"));
				l.sourceSentences.forEach(function(e) {
					e.getWhitespacesBefore().length && Object(a.a)("<span></span>").text(e.getWhitespacesBefore()).appendTo(c);
					var t = r ? e.getRawTrimmedText() : e.translations.getTargetText(),
						n = Object(a.a)("<span></span>").addClass("lmt__source_textarea_overlay__sentence_marker").css({
							height: v + "px"
						}).appendTo(c),
						o = Object(a.a)("<span></span>").addClass("lmt__source_textarea_overlay__text").text(t).appendTo(c),
						i = Object(a.a)("<span></span>").addClass("lmt__source_textarea_overlay__sentence_marker").css({
							height: v + "px"
						}).appendTo(c);
					f.push({
						sourceSentence: e,
						preNode: n,
						textNode: o,
						postNode: i
					}), e.getWhitespacesAfter().length && Object(a.a)("<span></span>").text(e.getWhitespacesAfter()).appendTo(c)
				});
				var m = n.outerWidth() - parseInt(n.css("padding-right"));
				f.forEach(function(e) {
					var t = [];
					r ? g[e.sourceSentence.getId()] = t : h[e.sourceSentence.getId()] = t;
					var n = e.textNode.position(),
						i = e.textNode.height(),
						s = e.preNode.position(),
						u = e.postNode.position();
					if (t.push(e.textNode), o) if (i < 1.5 * v) t.push(Object(a.a)("<div></div>").addClass("lmt__source_textarea_overlay__sentence").css({
						top: n.top + "px",
						left: s.left + "px",
						height: v + "px",
						width: u.left - s.left + "px"
					}).appendTo(c));
					else {
						var l = n.top;
						t.push(Object(a.a)("<div></div>").addClass("lmt__source_textarea_overlay__sentence").css({
							top: l + "px",
							left: s.left + "px",
							height: v + "px",
							width: m - s.left + "px"
						}).appendTo(c)), l += v, i > 2.5 * v && (t.push(Object(a.a)("<div></div>").addClass("lmt__source_textarea_overlay__sentence").css({
							top: l + "px",
							left: n.left + "px",
							height: i - 2 * v + "px",
							width: m - n.left + "px"
						}).appendTo(c)), l += i - 2 * v), t.push(Object(a.a)("<div></div>").addClass("lmt__source_textarea_overlay__sentence").css({
							top: l + "px",
							left: n.left + "px",
							height: v + "px",
							width: u.left - n.left + "px"
						}).appendTo(c))
					} else;
				})
			}("source", f), l = void 0);
			var r = setTimeout(function() {
				return _(f)
			}, 500);
			d.push(function() {
				return clearTimeout(r)
			});
			var i = t.sentence;
			o && console.log("[highlight] targetSentence", i);
			var c = i.getSourceSentence();
			if (l !== c) {
				if (f.parent().find(".lmt__source_textarea_overlay__sentence--active").removeClass("lmt__source_textarea_overlay__sentence--active"), c) {
					void 0 === g && (g = Object.create(null));
					var v = g[c.getId()];
					v && v.forEach(function(e) {
						return e.addClass("lmt__source_textarea_overlay__sentence--active")
					})
				}
				l = c
			}
		}), {}
	});
	var N = {
		DE: "Übersetzt mit www.DeepL.com/Translator (kostenlose Version)",
		EN: "Translated with www.DeepL.com/Translator (free version)",
		ES: "Traducción realizada con la versión gratuita del traductor www.DeepL.com/Translator",
		FR: "Traduit avec www.DeepL.com/Translator (version gratuite)",
		IT: "Tradotto con www.DeepL.com/Translator (versione gratuita)",
		JA: "www.DeepL.com/Translator（無料版）で翻訳しました。",
		NL: "Vertaald met www.DeepL.com/Translator (gratis versie)",
		PL: "Przetłumaczono z www.DeepL.com/Translator (wersja darmowa)",
		RU: "Переведено с помощью www.DeepL.com/Translator (бесплатная версия)",
		PT: "Traduzido com a versão gratuita do tradutor - www.DeepL.com/Translator",
		ZH: "通过www.DeepL.com/Translator（免费版）翻译"
	};
	o.a.defineType("/translator/common/addTranslatedByFooter", ["/translator/core/config", "/translator/common/interceptClipboard", "/translator/core/languageManagement"], function(e, t, n) {
		var r = 3;

		function o() {
			var e = u.
		default.PersistStorage.getValue("LMT_copyEvents");
			return Array.isArray(e) ? e:
			[]
		}
		function a() {
			var e = 0,
				t = Date.now() - 864e5;
			return o().forEach(function(n) {
				n > t && ++e
			}), e
		}
		return e.get("CONFIG__ADD_TRANSLATION_FOOTER") && t.doUpdateCopiedTranslation.push(function(e) {
			var t = e();
			if (!(t.length < 400)) {
				for (var i in N) if (t.search(N[i]) >= 0) return;
				var s;
				a() >= r || e(t + "\n\n" + (N[n.getActiveLangContext().getTargetLang()] || N.EN)), (s = o()).push(Date.now()), s.splice(0, s.length - r), u.
			default.PersistStorage.setValue("LMT_copyEvents", s)
			}
		}), t.doUpdateTextBeforePasting.push(function(e, t) {
			var n = "function" == typeof t ? t() : null;
			if (n) for (var r in N) {
				var o = N[r];
				if (n.endsWith(o) && n.length >= 400 + o.length) {
					t(n.substr(0, n.length - o.length));
					break
				}
			}
		}), {
			getFooterText: function(e) {
				return N[e.toUpperCase()] || N.EN
			}
		}
	}), o.a.defineType("/translator/common/interceptClipboard", ["/translator/core/domElements"], function(e) {
		var t = e.sourceEdit,
			n = e.targetEdit,
			r = !1,
			o = c.
		default.createMultiProcedure(),
			i = c.
		default.createMultiProcedure();
		return [t, n].forEach(function(e) {
			Object(a.a)(e).on("paste", function(t) {
				var n, a = t.originalEvent,
					i = (a.clipboardData || window.clipboardData || "").getData("Text").trim().replace(/\r/g, ""),
					s = c.
				default.value(i);
				if (o(e, s), !1 === s()) a.preventDefault();
				else if (i !== s()) {
					if (r && console.log("[paste] Text has been altered: ", s()), function(e) {
						var t;
						try {
							t = document.execCommand("insertText", !1, e)
						} catch (e) {
							console.warn("[insertTextIntoActiveTextarea]", e)
						}
						if (!t) {
							var n = document.activeElement;
							if (r && console.log("[insertTextIntoActiveTextarea]", n), !n || "textarea" != n.tagName.toLowerCase()) return console.warn("[insertTextIntoActiveTextarea]", n), !1;
							var o = n.selectionStart,
								a = n.selectionEnd,
								i = n.value;
							n.value = i.substr(0, o) + e + i.substr(a), n.setSelectionRange(o + e.length, o + e.length)
						}
						return !0
					}(s())) return (n = t).stopPropagation(), n.preventDefault(), n.returnValue = !1, !1;
					console.warn("[paste] Could not insert altered text.")
				}
			})
		}), Object(a.a)(n).on("copy", function(e) {
			r && console.log("[interceptClipboard]", "Copy detected");
			var t = e.originalEvent,
				o = "" + window.getSelection();
			if (0 === o.length) {
				var a = n.selectionStart,
					s = n.selectionEnd;
				o = (n.value || "").substr(a, s - a)
			}
			var u = c.
		default.value(o);
			i(u), o !== u() && (t && t.clipboardData && t.clipboardData.setData ? (t.clipboardData.setData("text/plain", u()), t.preventDefault()) : console.warn("Clipboard could not be updated."))
		}), {
			doUpdateTextBeforePasting: o,
			doUpdateCopiedTranslation: i
		}
	}), o.a.defineType("/translator/common/translationsAsText", ["/translator/core/translateSourceSentences", "/translator/core/domElements", "/translator/core/textareas", "/translator/core/localizedTexts", "/translator/common/interceptClipboard", "globalState"], function(e, t, n, o, u, l) {
		var f = t.$rootContainer,
			d = t.$translationsAsText,
			p = t.$sourceEdit;

		function g(e, t, r) {
			e = e.trim();
			var l = Object(a.a)("<p class='lmt__translations_as_text__item' dl-test='translator-target-result-as-text-entry'></p>");
			return r && l.addClass("lmt__translations_as_text__main_translation"), Object(a.a)("<button class='lmt__translations_as_text__text_btn'></button>").text(e).appendTo(l).click(function(t) {
				return n.updateTargetText(e)
			}), t && e &&
			function(e, t) {
				Object(a.a)("<div></div>").css({
					display: "inline-block",
					width: "25px",
					height: "10px"
				}).appendTo(e), Object(a.a)("<button class='lmt__translations_as_text__copy_button'></button>").click(function() {
					var n = Object(a.a)(this);
					n.addClass("lmt__translations_as_text__copy_button--active"), setTimeout(function() {
						return n.removeClass("lmt__translations_as_text__copy_button--active")
					}, 100);
					var r = c.
				default.value(t);
					u.doUpdateCopiedTranslation(r), i.
				default.copyToClipboard(r(), e).then(function() {
						s.
					default.show({
							target: n,
							content: o.get("translator/copyText.feedback", "Text has been copied"),
							timeout: 1e3
						})
					})
				}).appendTo(e)
			}(l, e), l
		}
		return t.$targetEdit.on("focus", function() {
			d.html("<div class='lmt__busy_indicator'></div>"), f.removeClass("lmt--showing_alternatives")
		}), e.onTranslationsHaveChanged.push(function(e) {
			var t = e.langContext;
			d.css("font", p.css("font")).css("font-size", p.css("font-size"));
			var n = Object(a.a)("<div></div>"),
				i = !1,
				s = t.sourceSentences.map(function(e, n) {
					return function(e, t) {
						var n = [];
						n.push(e.getWhitespacesBefore());
						var r = t.getText();
						return r || (r = e.translation.getTargetText()), void 0 === r ? r : (n.push(r), n.push(e.getWhitespacesAfter()), n.join(""))
					}(e, t.targetSentences[n])
				}).map(function(e) {
					return e || (i = !0, function(e) {
						var t = e.previousTranslations ? e.previousTranslations.slice(0) : [],
							n = [];
						for (n.push(e.getWhitespacesBefore());;) {
							var r = t.shift();
							if (!r) {
								n.length && "... " === n[n.length - 1] || n.push("... ");
								break
							}
							if (r.getTargetText()) {
								n.push(r.getTargetText());
								break
							}
						}
						return n.push(e.getWhitespacesAfter()), n.join("")
					}(e))
				}).join("").trim();
			n.append(g(s, !i, !0));
			var c = s.toLowerCase().replace(new RegExp("[!?\\.,]", "g"), ""),
				u = [c],
				l = 0,
				h = window.width > 800 ? 45 : 30;
			if (1 === t.sourceSentences.length && !i && !e.targetIsPredefined) {
				var _ = t.sourceSentences[0],
					v = 0;
				"EN" !== t.getSourceLang() && "EN" !== t.getTargetLang() && (v = 5);
				var m = _.getRawTrimmedText().length;
				if (m <= 60 && m >= v && _.translation.getAlternativeTargetTexts()) {
					var y = _.translation;
					r.
				default.isMobilePhone || y.getAlternativeTargetTexts().map(function(e) {
						return e.trim()
					}).filter(function(e) {
						return e.length && e.length <= h
					}).forEach(function(e) {
						if (!(l >= 3)) {
							var t = (c = e.toLowerCase().replace(new RegExp("[!?\\.,]", "g"), "")).split(" "),
								r = -1 !== u.indexOf(c);
							r || t.forEach(function(e, n) {
								e.length > 2 && t.forEach(function(t, o) {
									t.startsWith(e) && n != o && (r = !0)
								})
							}), r || (n.append(g(e, !0, !1)), l++, u.push(c))
						}
					})
				}
			}
			l > 0 ? (Object(a.a)("<h2 class='lmt__translations_as_text__header'></h2>").html(o.get("translator/alternativeTranslations", "Alternatives:")).prependTo(n), f.addClass("lmt--showing_alternatives"), f.find(".lmt__sides_container").css("overflow", "hidden"), setTimeout(function() {
				f.find(".lmt__sides_container").css("overflow", "")
			}, 400)) : f.removeClass("lmt--showing_alternatives"), n.html() !== d.html() && d.empty().append(n.children())
		}), {
			clear: function() {
				return d.empty()
			}
		}
	}), p.
default.requireAsync(["dlStats"], function(e) {
		o.a.defineType("/translator/common/translatorStats", ["/translator/core/translationBackend", "/translator/core/textareas"], function(t, n) {
			var r = t.lmtBackends,
				o = 0;
			c.
		default.withValue(r.translation, function(t) {
				t.onTranslationsReceived.push(function(t, n, r, a) {
					if (void 0 !== t.timestamp && e.countStats("f", function(e) {
						return 0 == e ? t.timestamp : e
					}, 0), void 0 !== t.date) {
						var i = e.getStats("g", "");
						i() != t.date && (i(t.date), e.countStats("h", function(e) {
							return e + 1
						}, 0), e.countEvent("translator_day", 1))
					}
					var s = 0;
					n.forEach(function(e) {
						var t = e.beams;
						Array.isArray(t) && t.length > 0 && (s += t[0].num_symbols)
					});
					var u = t.source_lang + a.target_lang,
						l = Array.isArray(r) && r.length > 0 ? r[0].kind : "";
					"default" != l ? "alternatives_at_position" == l && (e.countStats("d", function(e) {
						return e + 1
					}, 0), e.countEvent("target_alternatives_open", 1)) : (e.countStats("a", function(e) {
						return e + s
					}, 0), 4 == u.length && e.countStats("b", function(e) {
						return e[u] = s + (void 0 === e[u] ? 0 : e[u]), JSON.parse(JSON.stringify(e))
					}, {}), s, o += 1, window.ga && c.
				default.setTimeout_consolidated("analytics_translation", function() {
						window.ga("send", "event", "translation", "requests", "default", o), 0, o = 0
					}, 6e4))
				})
			});
			var a = 0;
			n.onSourceTextChanged.push(function(t, n) {
				"typing" === n && (a += 1, c.
			default.setTimeout_consolidated("typed_chars", function() {
					e.countStats("c", function(e) {
						return e + a
					}, 0), a = 0
				}, 3e3))
			})
		})
	}), o.a.defineType("/translator/common/translationFormality", ["/translator/core/languageManagement"], function(e) {
		e.doPrepareNewLangContext.push(function(e) {
			e.setTranslationJobParams("translationFormality", {})
		})
	});
	/**
	 * MODIFIED VERSION
	 *
	 * @fileoverview syncscroll - scroll several areas simultaniously
	 * @version 0.0.3
	 *
	 * @license MIT, see http://github.com/asvd/intence
	 * @copyright 2015 asvd <heliosframework@gmail.com>
	 */
	var P = "[SyncScroll]",
		I = !1,
		D = "Width",
		k = "Height",
		F = "Top",
		U = "Left",
		q = "scroll",
		j = "client",
		G = {};

	function B() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
			t = e.el,
			n = e.instanceId,
			r = e.forceScroll,
			o = void 0 !== r && r,
			a = e.unstableSmooth,
			i = void 0 !== a && a;
		I && console.log(P, "handleScroll:", t, n);
		var s, c = G[n],
			u = t[q + U],
			l = t[q + F],
			f = u / (t[q + D] - t[j + D]),
			d = l / (t[q + k] - t[j + k]),
			p = o || u != t.eX,
			g = o || l != t.eY;
		t.eX = u, t.eY = l;
		for (var h = 0; h < c.length; h++)(s = c[h]) != t && (p && Math.round(s[q + U] - (u = s.eX = Math.round(f * (s[q + D] - s[j + D])))) && (s[q + U] = u), g && Math.round(s[q + F] - (l = s.eY = Math.round(d * (s[q + k] - s[j + k])))) && (i ? s.scrollTo({
			top: l,
			behavior: "smooth"
		}) : s[q + F] = l))
	}
	function W(e) {
		if (G.hasOwnProperty(e)) for (var t = 0; t < G[e].length; t++) G[e][t].removeEventListener("scroll", G[e][t].syn)
	}
	var V = function(e) {
			I && console.log(P, "sync:", e), function() {
				for (var e in G) W(e)
			}();
			for (var t = "".concat(Math.round(1e5 * Math.random())), n = 0; n < e.length; n++) {
				for (var r = null, o = e[n], a = 0; a < (G[t] = G[t] || []).length; a++) I && console.log(P, "instances[instanceId]", G[t]), r |= G[t][a] == o;
				r || G[t].push(o), o.eX = o.eY = 0, function(e, t) {
					e.addEventListener("scroll", e.syn = function() {
						return B({
							el: e,
							instanceId: t
						})
					})
				}(o, t), I && console.log(P, "instances", G)
			}
			return t
		};

	function H(e, t) {
		for (var n = 0; n < t.length; n++) {
			var r = t[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
		}
	}
	function $(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) ||
		function(e, t) {
			var n = [],
				r = !0,
				o = !1,
				a = void 0;
			try {
				for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
			} catch (e) {
				o = !0, a = e
			} finally {
				try {
					r || null == s.
					return ||s.
					return ()
				} finally {
					if (o) throw a
				}
			}
			return n
		}(e, t) ||
		function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}()
	}
	function Y(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
/*! ===============================================
Copyright:
    DeepL GmbH
    www.deepl.com
*/
	M.define("LMT_WebTranslator_MainFunctionality", ["RPC", "PubSub", "$", "FeatureManager", "queryVars", "dlPageState", "dlRPC", "dlTexts", "DeviceProps", "LMT_log", "LMT_UI_MessageBox", "LMT_UI_MessageBox2", "LMT_UI_SystemNotification", "LMT_UI_Tooltip", "dlStats", "H2", "dlAnalytics", "dlPrivacy"], function(e, t, n, r, o, a, l, f, p, g, h, _, v, m, y, T, S, b) {
		return {
			initTranslator: function(s) {
				var E = !1;
				s.features = new r("/translator");
				var w = !! a.pro;
				w |= a.loggedIn, console.log("DeepL Translator", w ? " (DeepL Pro)" : "", a.devMode ? " (devMode)" : "", a.experimental ? "(experimental)" : ""), g("Logging enabled."), "1" === o.reset_tutorial && localStorage.removeItem("LMT_MessageBox"), s.features.define("core/config", ["core/basicConfiguration", "webTranslatorCore"], function(e, t) {
					var n = t._config,
						r = e,
						i = n.isPro;
					if ("0" == o.context && r.update("CONFIG__USE_CONTEXT", !1), o.sft && r.update("CONFIG__USE_FAST_TYPING_REQUESTS__DEV_MOCKUP", !0), r.update("CONFIG__IS_DEV", a.devMode), r.update("CONFIG__MAX_NUM_CHARACTERS", i ? 1e7 : 5e3), r.update("CONFIG__TRANSLATION_JOB_BATCH_SIZE", i ? 4e3 : 1e4), r.update("backend.scheduler", o.backend || n.backend), o.tBackend) {
						var s = o.tBackend;
						s.startsWith("http") || s.startsWith("/") || (s = "http://" + s), r.update("backend.translationEndpoint", s)
					}
					if (o.sBackend) {
						var c = o.sBackend;
						c.startsWith("http") || c.startsWith("/") || (c = "http://" + c), r.update("backend.splittingEndpoint", c)
					}
					o.dev_block && r.update("backend.testUserBlocking", !0);
					var u = !! n.isApp;
					return r.set("isApp", u), r.set("CONFIG__BLOCK_SCROLLING", "0" != o.blockScrolling), r.set("CONFIG__ADD_TRANSLATION_FOOTER", !i && !n.disableTranslatedByFooter && !p.isIPad), r.set("CONFIG__SEND_EDIT_LOGS", !1), r.set("scrollMode", u ? "app" : "web"), r.set("CONFIG__IS_PRO", i), r.set("CONFIG__DATA_USE_ALLOWED", b.isDataUseAllowed()), r
				});
				var A = t.create(),
					O = A.listenOn.bind(A),
					L = A.notify.bind(A),
					N = n(s.rootNode),
					P = N.find(".lmt__source_textarea"),
					I = N.find(".lmt__target_textarea"),
					D = w ? 1e3 : 500;
				var k, F = (k = {
					ON__ANYCLICK: "ON__ANYCLICK",
					ON__ACTIVE_ELEMENT_CHANGED: "ON__ACTIVE_ELEMENT_CHANGED",
					ON__CLICK_TARGET_SENTENCE: "ON__CLICK_TARGET_SENTENCE",
					ON__INITIAL_SOURCE_TRANSLATION_UPDATED: "ON__INITIAL_SOURCE_TRANSLATION_UPDATED",
					ON__LANGUAGE_SELECT_OPENED: "ON__LANGUAGE_SELECT_OPENED",
					ON__NO_ALTERNATIVES_FOUND: "ON__NO_ALTERNATIVES_FOUND",
					ON__SOURCE_TEXT_EMPTY: "ON__SOURCE_TEXT_EMPTY",
					ON__TARGET_POPUP_OPENED: "ON__TARGET_POPUP_OPENED",
					ON__TARGET_POPUP_CLOSED: "ON__TARGET_POPUP_CLOSED",
					ON__TARGET_EDIT_KEY_UP: "ON__TARGET_EDIT_KEY_UP",
					ON__TARGET_EDIT_KEY_DOWN: "ON__TARGET_EDIT_KEY_DOWN",
					ON__TRANSLATION_READY: "ON__TRANSLATION_READY",
					ON__TEXT_AREAS_RESTYLED: "ON__TEXT_AREAS_RESTYLED",
					ON__USER_EDIT_PERFORMED: "ON__USER_EDIT_PERFORMED",
					ON__USER_EVENT: "ON__USER_EVENT"
				}, a.devMode && window.Proxy ? new Proxy(k, {
					get: function(e, t) {
						if (t in e) return e[t];
						throw new Error("[dev_freezeProxy] Property error '" + t + "'")
					},
					set: function(e, t, n) {
						throw new Error("[dev_freezeProxy] Can't set property '" + t + "' on frozen object.")
					}
				}) : k);
				s.features.register("eventHandling", {
					on: O,
					notify: L,
					ON: F
				});
				var U = "GSTATE__FORCE_SENTENCE_SPLITTING_REQUESTS_FOR_STABILITY",
					q = "GSTATE__TYPING_REQUESTS_BLOCKED_UNTIL",
					j = "GSTATE__EDIT_FEATURES_DISABLED";
				var G = new function() {
						this[U] = c.
					default.value(!1), this[q] = 0, this[j] = c.
					default.value(!1)
					};
				s.globalState = G, s.features.register("globalState", G);

				function J() {
					return I.prop("selectionStart")
				}
				function z(e) {
					return i.
				default.getTextareaPixelOffsetForCursorOffset(I, e)
				}
				function K(e, t) {
					return f.get(e, t)
				}
				function Q(e) {
					return e.stopPropagation(), e.preventDefault(), e.returnValue = !1, !1
				}
				O(F.ON__SOURCE_TEXT_EMPTY, function() {
					G[U](!1)
				}), s.features.require(["core/translateSourceSentences", "core/textareas", "eventHandling"], function(e, t, n) {
					var r = n.notify,
						o = n.ON;
					e.onTranslationsHaveChanged.push(function(e) {
						return r(o.ON__INITIAL_SOURCE_TRANSLATION_UPDATED, e)
					}), e.onTargetSentencesHaveChanged.push(function(e) {
						r(o.ON__TRANSLATION_READY, {
							type: "initialTranslation"
						}), s.features.get("smartTargetEditing").closePopup(), c.
					default.notify("LMT/translationReady", t.getSourceText(), t.getTargetText(), e.getSourceLang(), e.getTargetLang())
					}), s.features.register("translateSourceSentences", e)
				}), function() {
					var e;
					n(document).click(function(e) {
						L(F.ON__ANYCLICK, n(e.target), e)
					}), window.addEventListener("focus", function(t) {
						document.activeElement !== e && (e = document.activeElement, L(F.ON__ACTIVE_ELEMENT_CHANGED, n(e)))
					}, !0)
				}(), s.features.apply("core/basicConfiguration"), s.features.apply("core/domElements"), s.features.apply("core/textareas"), s.features.apply("core/requestHandling"), s.features.apply("core/languageManagement"), s.features.apply("core/localizedTexts"), s.features.apply("core/networkStatus"), s.features.apply("core/translationBackend"), s.features.apply("core/triggerSourceTranslation"), s.features.apply("core/updateSourceSentences"), s.features.apply("core/translateSourceSentences"), s.features.apply("smartEditing/observeSentenceSelection"), s.features.apply("smartEditing/updateTargetSentencesFromText"), s.features.apply("smartEditing/sourceSentenceHighlight"), s.features.apply("common/addTranslatedByFooter"), s.features.apply("common/interceptClipboard"), s.features.apply("common/translationsAsText"), s.features.apply("common/translatorStats"), a.hasFeatureFlag("translationFormality_2020_04") && s.features.apply("common/translationFormality"), a.hasFeatureFlag("translationFormality_2020_04") && s.features.define("/translator/common/translationFormalityUI", ["publicInterface"], function(e) {
					var t = e.onLangChanged,
						r = e.getTargetLang,
						o = "[FormalitySwitchUI]";
					console.log(o, "init");
					var a = c.
				default.value(!1),
						i = c.
					default.value(!1),
						u = c.
					default.value(!1),
						l = c.
					default.value(p(r()));
					t.push(function(e) {
						var t = e.targetLang;
						l(p(t))
					}), c.
				default.withValue([l], function(e) {
						console.log(o, e), e.includes("auto") ? a(!0) : a(!1), e.includes("formal") ? i(!0) : i(!1), e.includes("informal") ? u(!0) : u(!1)
					});
					var f = c.
				default.value(!1),
						d = T.createNode({
							type: "lmt__formalitySwitch",
							formalityLevelAuto: a,
							formalityLevelFormal: i,
							formalityLevelInformal: u,
							isMenuOpen: f,
							doToggle: function() {
								f() ? f(!1) : f(!0)
							}
						});

					function p() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
						if (!e) return [];
						var t = e.toUpperCase();
						return s._langConfig && s._langConfig[t] && s._langConfig[t].formalityLevels
					}
					n(".lmt__formalitySwitch_container").append(d)
				}), s.features.define("common/clearTextButton", ["core/domElements", "core/textareas", "common/translationsAsText"], function(e, t, n) {
					e.$rootContainer.find(".lmt__side_container .lmt__clear_text_button").click(function() {
						s.getActiveLangContext().clearSentences(), t.setTargetTextExplicitly("", "internal"), n.clear(), t.updateSourceText("");
						var r = document.createEvent("Event");
						r.initEvent("change", !0, !0), e.$sourceEdit.get(0).dispatchEvent(r), e.$sourceEdit.focus()
					})
				}), s.features.require(["core/config"], function(e) {
					e.get("CONFIG__BLOCK_SCROLLING") && s.features.define("defaultUI_scrollBlock", [], function() {
						var e = void 0,
							t = 0,
							r = !1,
							o = 0,
							a = !1,
							i = !1,
							s = 0;
						setTimeout(function() {
							return n(document).on("DOMMouseScroll mousewheel", ".lmt__scrollable, body", function(c) {
								var u = c.originalEvent,
									l = Date.now(),
									f = "DOMMouseScroll" == c.type ? -40 * u.detail : u.wheelDelta,
									d = n(u.target).closest(".lmt__scrollable"),
									p = d.length ? d[0] : u.target,
									g = n(p),
									h = l - s;
								s = l, (h > 250 || Math.sign(f) !== Math.sign(o)) && (a = !! (d.length && d.scrollTop() <= 3), i = !! (d.length && g.scrollTop() >= g.prop("scrollHeight") - g.innerHeight() - 1)), p === e && l < t && (t = l + 100);
								var _ = Math.abs(f) - Math.abs(o);
								if (o = f, l > t || _ > 0) e = p, t = l + 100, r = !! (g.hasClass("lmt__scrollable") && p.scrollHeight > p.clientHeight);
								else if (p !== e) return t = l + 100, !r && !g.hasClass("lmt__scrollable") || Q(c);
								if (r) {
									var v = g.scrollTop(),
										m = g.prop("scrollHeight"),
										y = g.innerHeight(),
										T = !0;
									return f < 0 && -f > m - y - v && !i ? (g.scrollTop(m), T = Q(c)) : f > 0 && f > v && !a && (g.scrollTop(0), T = Q(c)), T
								}
								return !0
							})
						})
					})
				}), s.features.define("common/showBusyIndicator", ["core/domElements", "core/requestHandling"], function(e, t) {
					t.hasPendingRequests.onValueChanged.push(c.
				default.createDebouncedProcedure(50, function() {
						t.hasPendingRequests() ? e.rootContainer.classList.add("lmt--active_translation_request") : e.rootContainer.classList.remove("lmt--active_translation_request")
					}))
				}), s.sourceIsEmpty.onValueChanged.push(function(e) {
					e && L(F.ON__SOURCE_TEXT_EMPTY)
				});
				var X, Z = /[\s.,:;!?"()*]/,
					ee = /[^\s.,:;!?"()*]/;

				function te(e) {
					this.msg = e
				}
				s.features.define("smartEditing/detectTargetSentenceClicks", ["/translator/smartEditing/updateTargetSentencesFromText"], function(e) {
					var t = !1;

					function n(n, r) {
						if (s.features.get("smartTargetEditing").isPopupOpen()) s.features.get("smartTargetEditing").closePopup();
						else {
							var o = s.getActiveLangContext(),
								a = I.val();
							e.doRefreshTargetDataFromText(o, a);
							var i = J(),
								c = I.prop("selectionEnd");
							if (-1 == a.substr(i, c - i).trim().indexOf(" ")) {
								var u = i;
								if (a.charAt(u).match(ee)) for (; u > 0 && a.charAt(u - 1).match(ee);)--u;
								var l = C.getSentencePosForTargetCursorOffset(o, u);
								if (l) {
									if (0 == a.substr(Math.max(0, i - 1), c - i + 2).trim().length && l.sentence.getText().trim().length) return void(t && console.log("[processClickEvent] Clicked in empty area."));
									var f = z(i),
										d = z(u),
										p = i === c ? d : z(c);
									if (d.top <= 0 && d.left <= 0 && u > 0) return void g("[processClickEvent] Unable to detect pixel position at offset ", u);
									if (f.left < d.left - 2) l.caretAtNextLine = !0, t && console.log("[processClickEvent] pixelOffset_before", f, "pixelOffset", d);
									else {
										t && console.log("[processClickEvent] [" + a.charAt(i - 1) + a.charAt(i) + a.charAt(i + 1) + "]");
										var h = z(i + 1),
											_ = parseInt(I.css("padding-left")),
											v = parseInt(I.css("line-height"));
										(d.top < p.top && "\n" !== a.charAt(i - 1) || n <= _ && "\n" !== a.charAt(i - 1) || n < h.left && d.top < h.top) && u > 0 && u < a.length - 1 ? l.caretAtNextLine = !0 : u >= a.length - 1 && r > d.top + v && (l = void 0)
									}
								}
								t && console.log("[processClickEvent] Click on sentence:", i, u, l), window._activeTargetSentence = l && l.sentence, L(F.ON__CLICK_TARGET_SENTENCE, o, l)
							}
						}
					}
					if ((navigator.vendor || "").match(/google/i)) I.on("click", function(e) {
						n(e.offsetX, e.offsetY)
					});
					else {
						var r = 0;
						I.on("click", function(e) {
							var t = Date.now();
							if (!p.isIPad || r < t) {
								r = t + 50;
								var o = e.offsetX,
									a = e.offsetY;
								setTimeout(function() {
									n(o, a)
								})
							}
						}), p.isIPad && I.on("touchend", function(e) {
							if (e.originalEvent.targetTouches && !e.originalEvent.targetTouches.length && e.originalEvent.changedTouches && e.originalEvent.changedTouches.length) {
								var t = Date.now();
								if (r < t) {
									if (r = t + 50, g("ipad touch-click"), s.features.get("smartTargetEditing").isPopupOpen()) return s.features.get("smartTargetEditing").closePopup(), Q(e);
									var o = e.layerX,
										a = e.layerY,
										i = J(),
										c = 4;
									setTimeout(function e() {
										--c < 0 || i != J() ? n(o, a) : setTimeout(e, 25)
									}, 100)
								}
							}
						})
					}
				}), I.on("keydown", function(e) {
					var t = {
						keyUpHandler: void 0,
						suppressKeyUpEvent: !1,
						keyDownEvent: e
					};
					X = t, L(F.ON__TARGET_EDIT_KEY_DOWN, e, t)
				}), I.on("keyup", function(e) {
					var t;
					if ((t = X && e.keyCode === X.keyDownEvent.keyCode ? X : new Object(null)).keyUpHandler) return t.keyUpHandler(e);
					t.suppressKeyUpEvent || L(F.ON__TARGET_EDIT_KEY_UP, e, t)
				});
				var ne = "popupSentence",
					re = "popupSentenceCursor",
					oe = "popupCursor",
					ae = "nextLineCursor",
					ie = "waitingIndicator",
					se = "entries",
					ce = "isAc";
				s.features.define("smartTargetEditing", ["core/domElements", "webTranslatorCore", "eventHandling", "core/requestHandling", "core/translationBackend", "core/localizedTexts", "core/networkStatus", "core/textareas"], function(e, t, r, a, i, u, l, f) {
					var _, v, m = r.on,
						T = r.ON,
						S = r.notify,
						b = function e() {
							Y(this, e), this[ne] = void 0, this[oe] = 0, this[re] = 0, this[ce] = "alternatives"
						},
						w = c.
					default.createMultiProcedure();

					function x() {
						if (_) {
							var e = _.offset(),
								t = e.top - window.scrollY,
								r = parseInt(I.css("line-height"));
							_.css("max-height", Math.min(10 * r, Math.max(n(window).height() - t - 4, 3 * r))), v && (v.height(_.height()), v.position({
								top: e.top,
								left: (e.left < 180 ? 180 : e.left) + 11
							}, "right"))
						}
					}
					p.isMobilePhone || (v = h.create("completionHint", u.get("translator/messageBox_completionHint", "Choose a word and DeepL will finish the sentence for you."))).maximalDisplayCount(10);
					var A, O = 0;

					function L(r, o) {
						if (void 0 !== o[ne] && t.isActiveLangContext(r)) {
							_ || (_ = n("<div class='lmt__edit_text_popup lmt__scrollable' dl-test='translator-target-alternatives-popup'></div>").addClass("lmt__edit_text_popup--visible").insertAfter(e.targetEditOuterContainer));
							var s = _,
								u = [],
								f = o[re],
								p = o[ne],
								h = "autocompletion" == o[ce],
								m = "initialAlternatives" == o[ce],
								b = "alternatives" == o[ce];
							if (o[ie]) s.empty().append("<div class='lmt__edit_text_popup__waiting_indicator'>...</div>");
							else {
								if (!(u = o[se] || []).length) return console.warn("[updatePopup]: no Translations for target sentence.", o), void N();
								var A = p.getText().substr(0, f),
									L = n("<ul></ul>"),
									P = {};
								u.forEach(function(e) {
									var t = D(e.displayPostfix, r.getTargetLang());
									P[t] || (P[t] = !0, n("<li></li>").text(t).on("mouseenter", function() {
										Date.now() > O && (s.find(".lmt__edit_text_popup__entry--active").removeClass("lmt__edit_text_popup__entry--active"), n(this).addClass("lmt__edit_text_popup__entry--active"))
									}).on("mouseleave", function() {
										m && n(this).removeClass("lmt__edit_text_popup__entry--active")
									}).appendTo(L).on("click", function(t) {
										if (window.getSelection().isCollapsed) {
											N();
											var n = p.getNormalizedText();
											(function(e, t, n, r, o) {
												return new Promise(function(s, u) {
													var l = D(r, e.getTargetLang()),
														f = t.getText().substr(n.length).match(/\s*$/)[0];
													E && console.log("[insertTextIntoTargetSentence] [" + n + "][" + l + "]", "whitespaces[" + f + "]"), y.countStats("e", function(e) {
														return e + 1
													}, 0), y.countEvent("target_alternative_selected", 1), t.updateRawText(n + l + f, !1, !0), k(e), o ? (t.updateRawText(n + l, !1, !0), S(T.ON__USER_EDIT_PERFORMED, {
														state: e,
														targetSentence: t,
														type: "EDIT_TYPE__SELECT_ALTERNATIVE_FIRST_STEP"
													}), function(e, t, n) {
														return new Promise(function(r, o) {
															var s = t.getNormalizedTextAndOffset(0)[0],
																c = t.getParts(),
																u = "";
															c.length && c[0].isWhitespacePart && (u = c[0].text);
															var l = void 0 === n ? " " : n,
																f = s;
															g("[request_fillUpTargetSentence] [" + u + "][" + f + "][...][" + l + "]");
															var p = t.getTranslation();
															if (p) {
																var h = {
																	kind: R.JOB_KIND__DEFAULT,
																	de_sentence_beginning: f,
																	raw_en_sentence: p.getSourceText()
																};
																if (e.isContextEnabled()) {
																	var _ = t.getSourceSentence();
																	if (_) {
																		var v = C.getSourceContext(_);
																		h.raw_en_context_before = v.prefix, h.raw_en_context_after = v.postfix
																	}
																}
																var m = a.startRequestContext(e, d.TYPE__SMART_EDIT_REQUEST);
																i.sendTranslationJobs([h], e.createJobSettings(), !0).then(function(n) {
																	m.stop();
																	var o = n[R.TRANSLATION_RESULT__TRANSLATIONS][0].beams;
																	if (o.length) {
																		var a = u + D(o[0].postprocessed_sentence, e.getTargetLang()) + l;
																		t.updateRawText(a, !0, !0)
																	} else g("request_fillUpTargetSentence: No Result found");
																	k(e), r()
																}, function(e) {
																	m.stop(), o(e)
																})
															} else E && console.log("[request_fillUpTargetSentence] No Translation object.")
														})
													}(e, t, f).then(function(n) {
														c.
													default.notify("LMT/translationChanged"), S(T.ON__USER_EDIT_PERFORMED, {
															state: e,
															targetSentence: t,
															type: "EDIT_TYPE__SELECT_ALTERNATIVE"
														}), s()
													}, u)) : (t.updateRawText(n + l, !0, !0), c.
												default.notify("LMT/translationChanged"), S(T.ON__USER_EDIT_PERFORMED, {
														state: e,
														targetSentence: t,
														type: "EDIT_TYPE__AUTOCOMPLETION"
													}), s())
												})
											})(r, p, A, e.postfix, !h).then(function() {
												var t = o[oe] + e.postfix.length;
												I[0].setSelectionRange(t, t), h || w({
													sourceSentence: p.getSourceSentence(),
													targetPrefix: A,
													targetTextBefore: n,
													targetTextAfter: p.getNormalizedText(),
													targetSentence: p,
													chosenAlternative: e.postfix
												})
											}, function(e) {
												l.onRequestFailed("fillUp", e)
											}), v && v.disable(!0)
										}
									}))
								}), s.empty().append(L)
							}
							h ? s.addClass("lmt__edit_text_popup--autocompletion").removeClass("lmt__edit_text_popup--initial_alternatives").removeClass("lmt__edit_text_popup--alternatives") : m ? s.removeClass("lmt__edit_text_popup--autocompletion").addClass("lmt__edit_text_popup--initial_alternatives").removeClass("lmt__edit_text_popup--alternatives") : b && s.removeClass("lmt__edit_text_popup--autocompletion").removeClass("lmt__edit_text_popup--initial_alternatives").addClass("lmt__edit_text_popup--alternatives");
							var M = parseInt(I.parent().css("font-size"));
							s.css("font-size", M < 18 ? M + "px" : "");
							var F = parseFloat(I.css("line-height")) || 1.2 * parseFloat(I.css("font-size")),
								U = z(o[oe]);
							o[ae] && (U.left = parseInt(I.css("padding-left")), U.top += F), U.left -= 4, U.top = Math.round(U.top), U.left = Math.round(U.left);
							var q = s.offsetParent().offset(),
								j = I.offset();
							U.top += j.top - q.top, U.left += j.left - q.left;
							var G = F,
								B = U.top + G,
								W = U.left,
								V = s.outerWidth(),
								H = window.scrollX || 0;
							W + V > n(window).width() + H - q.left - 10 && (W = n(window).width() + H - q.left - V - 10), s.scrollTop(0), s.css("transform", "translate(" + W + "px," + B + "px)"), x(), v && u.length > 1 && "alternatives" == o[ce] && v.show(250), o.pixelOffset = {
								left: W,
								top: B
							}, S(T.ON__TARGET_POPUP_OPENED, o)
						} else _ && (_.remove(), _ = void 0)
					}
					function N() {
						var e = new b;
						e[ne] = void 0, L(t.getActiveLangContext(), e), v && v.hide(250), S(T.ON__TARGET_POPUP_CLOSED)
					}
					function P() {
						return !!_
					}
					function D(e, t) {
						var n = e;
						return "DE" != t || o.norepair || (n = n.replace("/Ã¤", "ä").replace("Ã„", "Ä").replace("Ã¶", "ö").replace("Ã–", "Ö").replace("Ã¼", "ü").replace("Ãœ", "Ü").replace("ÃŸ", "ß").replace("Ã? ", "ü").replace("Ã?", "ü").replace("ÃŒ", "ü").replace("Ã", "")), n !== e && console.log('repaired text from "' + e + '" to "' + n + '"'), n
					}
					function k(e) {
						if (s.isActiveLangContext(e)) {
							var t = [];
							e.targetSentences.forEach(function(e) {
								var n = e.getText();
								t.push(n)
							});
							var n = t.join("");
							e.targetText = n, f.updateTargetText(n)
						}
					}
					return n(window).resize(function() {
						return x()
					}), e.$sourceEdit.on("focus", function() {
						return N()
					}), e.$targetEdit.parent().on("scroll", function() {
						return N()
					}), n("body").on("click", function(e) {
						n(e.target).closest(".lmt__edit_text_popup").length || n(e.target).closest(".lmt__target_textarea").length || N()
					}), l.onRequestFailed.push(function(e, t) {
						N(), setTimeout(function() {
							return N()
						}, 150)
					}), m(T.ON__CLICK_TARGET_SENTENCE, function(e, n) {
						if (e.isSmartTargetEditingAvailable()) if (G[j]()) N();
						else if (n) {
							var r = new b;
							if (r[ne] = n.sentence, r[oe] = n.cursorOffset, r[re] = n.sentenceCursorOffset, r[ae] = n.caretAtNextLine, t.isActiveLangContext(e)) {
								r[ie] = !0;
								var o = a.startRequestContext(e, d.TYPE__SMART_EDIT_REQUEST);
								A = setTimeout(function() {
									return L(e, r)
								}, 50), function(e, n) {
									var r = "[requestAlternativesForPopup]";
									return new Promise(function(o, a) {
										var s = n[ne];
										if (void 0 !== n[ne] && t.isActiveLangContext(e)) {
											var c = s.getTranslation();
											if (c) {
												var u = $(s.getNormalizedTextAndOffset(n[re]), 2),
													f = u[0],
													d = u[1],
													p = f.substr(0, d),
													g = p.length,
													h = f.substr(d);
												if (0 == h.trim().length && s.getLastFullTrimmedText().length > 3 && p.trim().substr(p.trim().length - 5) === s.getLastFullTrimmedText().substr(s.getLastFullTrimmedText().length - 5)) o([]);
												else {
													var _ = function(e) {
															var t = [];
															return e.forEach(function(e) {
																var n = e.postfix;
																n.trim().length && !h.startsWith(n) && t.push(e)
															}), t
														};
													if (c.cachedLocalAlternativeEntries[p]) o(_(c.cachedLocalAlternativeEntries[p]));
													else {
														var v = {
															kind: R.JOB_KIND__ALTERNATIVES_AT_POSITION,
															de_sentence_beginning: p,
															raw_en_sentence: c.getSourceText()
														};
														if (e.isContextEnabled()) {
															var m = s.getSourceSentence();
															if (m) {
																var y = C.getSourceContext(m);
																v.raw_en_context_before = y.prefix, v.raw_en_context_after = y.postfix
															}
														}
														i.sendTranslationJobs([v], e.createJobSettings(), !1).then(function(e) {
															var t = ((e[R.TRANSLATION_RESULT__TRANSLATIONS] || [])[0] || []).beams || [],
																n = [];
															t.forEach(function(e) {
																var t = e[R.RECORD__POSTPROCESSED_SENTENCE].substr(0, g);
																if (p.trim() !== t.trim()) console.warn(r, "Prefix does not match\nreceived [" + t + "]\n expected [" + p + "]");
																else {
																	var o = e[R.RECORD__POSTPROCESSED_SENTENCE].substr(g);
																	n.push({
																		displayPostfix: o + " ...",
																		postfix: o
																	})
																}
															}), c.cachedLocalAlternativeEntries[p] = n;
															var a = _(n);
															_.length || S(T.ON__NO_ALTERNATIVES_FOUND), o(a)
														}, function(e) {
															l.onRequestFailed("alternatives", e), a(e)
														})
													}
												}
											} else a(new te)
										} else a(new te)
									})
								}(e, r).then(function(t) {
									o.stop(), clearTimeout(A), r[ie] = !1, r[se] = t, L(e, r)
								}, function(e) {
									o.stop(), N(), console.warn("================", "\n", e)
								})
							}
						} else t.isActiveLangContext(e) && N();
						else N()
					}), p.isIPad && n("body").on("touchend", function(e) {
						e.originalEvent.targetTouches && !e.originalEvent.targetTouches.length && e.originalEvent.changedTouches && e.originalEvent.changedTouches.length && (n(e.target).closest(".lmt__edit_text_popup").length || n(e.target).closest(".lmt__target_textarea").length || (g("[popup] close by touch"), N()))
					}), m(T.ON__TARGET_EDIT_KEY_DOWN, function(e, t) {
						var n = !1;
						if (P()) {
							var r = _,
								o = function(e) {
									if (r.find(".lmt__edit_text_popup__entry--active").removeClass("lmt__edit_text_popup__entry--active"), e.addClass("lmt__edit_text_popup__entry--active"), e.length) {
										var t = e.position(),
											n = r.height(),
											o = e.height();
										t.top <= o ? (O = Date.now() + 250, r.scrollTop(r.scrollTop() + t.top - o)) : t.top >= n - 3 * o && (O = Date.now() + 250, r.scrollTop(r.scrollTop() + t.top - (n - 3 * o)))
									}
								};
							if (e.keyCode === de) t.suppressKeyUpEvent = !0, N();
							else if (e.keyCode === ve) {
								var a = r.find(".lmt__edit_text_popup__entry--active");
								if (a.length) {
									var i = a.next("li");
									i.length && o(i)
								} else r.find("li").first().addClass("lmt__edit_text_popup__entry--active");
								n = !0
							} else if (e.keyCode === he) {
								var s = r.find(".lmt__edit_text_popup__entry--active");
								if (s.length) {
									var c = s.prev("li");
									c.length ? o(c) : N(), n = !0
								} else N()
							} else if (e.keyCode === fe) {
								var u = r.find(".lmt__edit_text_popup__entry--active");
								u.length && u.click(), N(), n = !0
							} else N();
							n && (Q(e), t.keyUpHandler = function(e) {
								return Q(e)
							}, t.suppressKeyUpEvent = !0)
						}
					}), m(T.ON__TARGET_EDIT_KEY_UP, function(e, n) {
						function r() {
							var e = t.getActiveLangContext(),
								n = I.val();
							s.features.get("smartEditing/updateTargetSentencesFromText").doRefreshTargetDataFromText(e, n);
							var r = J(),
								o = r;
							if (n.charAt(o).match(ee)) for (; o > 0 && n.charAt(o - 1).match(ee);)--o;
							var a = C.getSentencePosForTargetCursorOffset(e, o);
							if (a) {
								var i = z(o);
								z(o + 1).top > i.top + 5 && (a.caretAtNextLine = !0)
							}
							g("[triggerAlternativePopup] Click on sentence:", r, o, a), S(T.ON__CLICK_TARGET_SENTENCE, e, a)
						}
						e.keyCode === pe ? r() : e.keyCode === ge || e.keyCode === _e || e.keyCode === me || e.keyCode === ye || e.keyCode === ve || e.keyCode === he ? (N(), c.
					default.setTimeout_consolidated("triggerAlternativePopup", function() {
							if (document.activeElement == I[0]) {
								var e = J(),
									t = I.val().charAt(e - 1),
									n = I.val().charAt(e);
								0 != e && "\n" !== t && " " !== t || " " === n || "\n" === n || r()
							}
						}, 300)) : e.keyCode >= 15 && e.keyCode < 32 || 224 === e.keyCode || e.keyCode === we || e.keyCode === xe || e.keyCode === le || (s.features.get("smartEditing/updateTargetSentencesFromText").doRefreshTargetDataFromText(t.getActiveLangContext(), I.val()), G[j]() || e.keyCode === fe || e.keyCode === Se || e.keyCode === be || e.keyCode === Ee || (e.keyCode === Te || e.keyCode == ue) && I.val().charAt(J()) < " " ||
						function() {
							var e = "[autocompletion]",
								n = t.getActiveLangContext();
							if (n.isSmartTargetEditingAvailable()) {
								var r, o, s, u = c.
							default.createCallOnce();
								c.
							default.scheduleNonConcurrentRequest("onKeyRequest_" + n.getId(), function() {
									return new Promise(function(c, l) {
										if (!t.isActiveLangContext(n)) return g(e, "Outdated."), void l(new te);
										o = J();
										var f = C.getSentencePosForTargetCursorOffset(n, o);
										if (!f) return g(e, "No aligned sentence found."), void l(new te);
										var p = a.startRequestContext(n, d.TYPE__SMART_EDIT_REQUEST);
										u.push(function() {
											return p.stop()
										}), r = f.sentence;
										var h = f.sentenceCursorOffset,
											_ = $(r.getNormalizedTextAndOffset(h), 2),
											v = _[0],
											m = _[1];
										s = v.substr(0, m);
										var y = r.getTranslation();
										if (r.getLastFullTrimmedText() && s.startsWith(r.getLastFullTrimmedText().trim())) c([]);
										else {
											var T, S = r.cachedAutocompletionRequests.slice(0),
												b = r.getTranslation().getTranslationResult();
											if (b) {
												var E = new Object(null);
												E[R.TRANSLATION_RESULT__TRANSLATIONS] = [b], S.push(["", r.getTranslation().getTargetText(), E])
											}
											if (S.some(function(e) {
												var t = e[0],
													n = e[1],
													r = e[2];
												if (s.startsWith(t) && n.startsWith(s)) return T = r, !0
											}), T) c(T);
											else {
												var w = {
													kind: R.JOB_KIND__AUTOCOMPLETION,
													de_sentence_beginning: s,
													raw_en_sentence: y.getSourceText()
												};
												if (n.isContextEnabled()) {
													var x = r.getSourceSentence();
													if (x) {
														var A = C.getSourceContext(x);
														w.raw_en_context_before = A.prefix, w.raw_en_context_after = A.postfix
													}
												}
												i.sendTranslationJobs([w], n.createJobSettings(), !1).then(function(e) {
													c(e)
												}, l)
											}
										}
									})
								}, 1e3).then(function(t) {
									u();
									var a = C.getSentencePosForTargetCursorOffset(n, o);
									if (a && a.sentence === r) {
										if (!a) return;
										var i = "",
											c = r.getText(),
											l = a.sentenceCursorOffset;
										if (l > 0) for (--l; l >= 0 && !c.charAt(l).match(Z);) i = c.charAt(l) + i, --l, --a.sentenceCursorOffset, --a.cursorOffset;
										var f = z(a.cursorOffset),
											d = z(a.cursorOffset + 1),
											p = new b;
										p[ne] = r, p[re] = a.sentenceCursorOffset, p[oe] = a.cursorOffset, p[ae] = f.left > d.left && f.top < d.top + 4, p[ce] = "autocompletion";
										var h = ((t[R.TRANSLATION_RESULT__TRANSLATIONS] || [])[0] || []).beams || [],
											_ = s.trimStart().length,
											v = [];
										if (h.length) {
											var m = h[0],
												y = i + m[R.RECORD__POSTPROCESSED_SENTENCE].substr(_);
											if (y.trim().length) {
												v.push({
													displayPostfix: y,
													postfix: y
												});
												var T = [s, m[R.RECORD__POSTPROCESSED_SENTENCE], t];
												r.cachedAutocompletionRequests.some(function(e) {
													return e[0] === T[0] && e[1] === T[1]
												}) || r.cachedAutocompletionRequests.push(T)
											}
										}
										p[se] = v, L(n, p)
									} else g(e, "canceled.", a, r)
								}, function(e) {
									u(), e === c.
								default.scheduleNonConcurrentRequest.FAILURE_REASON__CANCELED || (l.onRequestFailed("autocompletion", e), console.error(e))
								})
							}
						}())
					}), {
						closePopup: N,
						isPopupOpen: P,
						onTargetSentenceChangedByAlternative: w
					}
				});
				var ue = 8,
					le = 9,
					fe = 13,
					de = 27,
					pe = 32,
					ge = 37,
					he = 38,
					_e = 39,
					ve = 40,
					me = 36,
					ye = 35,
					Te = 46,
					Se = 91,
					be = 92,
					Ee = 93,
					we = 33,
					xe = 34;
				s.features.define("errorHandling", ["core/networkStatus", "core/config"], function(t, r) {
					var o = "[ErrorHandling]",
						i = 0;
					t.onRPCCallFailed.push(function() {
						return i = Date.now()
					}), t.onRequestFailed.push(function(s, c) {
						try {
							if (console.log(o, "networkStatus.onRequestFailed:", s, c), "ERROR_TYPE__RPC_ERROR" === c.errorType && c.rpcError && 429 === c.statusCode) if ("autocomplete" === s || "alternatives" === s) G[j](!0), G[q] = 2 * Date.now();
							else if (G[q] = Date.now() + r.get("CONFIG__BLOCK_TYPING_REQUEST_DURATION"), 1042901 === c.rpcError.code || 1042902 === c.rpcError.code || 1042911 === c.rpcError.code || 1042912 === c.rpcError.code) {
								var u, l = "ip" === (1042901 === c.rpcError.code || 1042902 === c.rpcError.code ? "user" : "ip"),
									f = l,
									d = T.createTemplateContainer({
										type: "lmt_notification_blocked_ip",
										doCtaTryPro: function() {
											window.location.href = "/pro?cta=".concat(l ? "blocked-b-user" : "blocked-user").concat(a.isNativeApp ? "&" + a.nativeAppVersionURLQuery : "")
										},
										doCtaBackToTranslator: function() {
											u()
										},
										hasAdditionalNoteForBlockedIP: f
									});
								e.connectTo({
									url: "https://www.deepl.com/PHP/backend/account.php?request_type=jsonrpc&il=" + a.il,
									method: "POST",
									withCredentials: !0
								}).getFunction("getUserIp")().then(function(e) {
									u = v.addNotification({
										id: "notification_too_many_requests",
										priority: 100,
										text: d,
										allowDiscardWithEscape: !0
									}), S.sendOncePerSession({
										eventName: "hasShowed_noticeFreeBlocked",
										eventParams: {
											category: "translator",
											action: "showNotice",
											label: "freeBlocked"
										}
									})
								}, function(e) {
									console.error(e)
								})
							} else v.addNotification({
								id: "notification_overload",
								severity: "critical",
								text: K("translator/notification_overload", "Too much load. The functionality of DeepL Translator may be limited.") + " (err429)",
								priority: 50,
								timeout_sec: 60
							});
							else if ("ERROR_TYPE__RPC_ERROR" === c.errorType && c.rpcError && 456 == c.statusCode) v.addNotification({
								id: "notification_quotaReached",
								severity: "critical",
								text: K("translator/proAccountError.quotaReached", "Quota reached.") + "<div><a href='/pro-account.html' class='dl_internal_link_row' target='_blank'>" + K("translator/proAccountError.accountPageButton", "Go to your contract page") + "</a></div>",
								priority: 90
							}), t.onRPCCallSucceeded.push(function() {
								return v.removeNotification("notification_quotaReached"), "REMOVE"
							});
							else if ("ERROR_TYPE__RPC_ERROR" === c.errorType && c.rpcError && 403 == c.statusCode) {
								if (r.get("isApp")) {
									var p = function() {
											v.removeNotification("notification_accountProblem")
										},
										g = n('<div class="lmt__system_notification_button_container"></div>').append(n('<button class="lmt__appButtons__eventActionButton">' + K("translator/proAccountError.accountPageButton", "Go to your contract page") + "</button>").click(function() {
											L(F.ON__USER_EVENT, {
												type: "userRequestsContractPage",
												context: "accountProblems"
											}), p()
										})).append(n('<button class="lmt__appButtons__eventActionButton">' + K("translator/proAccountError.accountLogoutButton", "Logout") + "</button>").click(function() {
											L(F.ON__USER_EVENT, {
												type: "userRequestsLogout",
												context: "accountProblems"
											}), p()
										})).append(n('<button class="lmt__appButtons__eventActionButton">' + K("translator/proAccountError.refreshPageButton", "Refresh") + "</button>").click(function() {
											return location.reload()
										})),
										h = n("\n                        <div>\n                            ".concat(K("translator/proAccountError.accountProblem", "Account problem."), "\n                        </div>\n                    ")).append(g);
									v.addNotification({
										id: "notification_accountProblem",
										severity: "final",
										priority: 90,
										text: h
									}), setTimeout(function() {
										n(".lmt__appButtons__eventActionButton")[0].focus()
									})
								} else v.addNotification({
									id: "notification_accountProblem",
									severity: "critical",
									priority: 90,
									text: "\n                            ".concat(K("translator/proAccountError.accountProblem", "Account problem."), "\n                            <div>\n                                <a href='/pro-account.html' class='dl_internal_link_row' target='_blank'>\n                                    ").concat(K("translator/proAccountError.accountPageButton", "Go to your contract page"), "\n                                </a>\n                            </div>\n                        ")
								});
								t.onRPCCallSucceeded.push(function() {
									return v.removeNotification("notification_accountProblem"), "REMOVE"
								})
							} else "ERROR_TYPE__RPC_ERROR" === c.errorType ? (G[q] = Math.max(G[q], Date.now() + r.get("CONFIG__BLOCK_TYPING_REQUEST_DURATION")), v.hasNotification("notification_networkProblems") || (v.addNotification({
								id: "notification_networkProblems",
								severity: "critical",
								text: K("translator/notification_networkProblems", "There seems to be a problem with the internet connection. The functionality of DeepL Translator may be limited."),
								priority: 100
							}), t.onRPCCallSucceeded.push(function() {
								if (Date.now() > i + 2e4) return v.removeNotification("notification_networkProblems"), "REMOVE"
							}))) : console.error("Unexpected error:", c)
						} catch (e) {
							console.error(e)
						}
					}), G[j].onValueChanged.push(function(e) {
						e ? v.addNotification({
							id: "notification_noAdvancedEditing",
							severity: "normal",
							text: K("translator/notification_noAdvancedEditing", "<span>!</span> Due to high traffic on the free DeepL translator, the service is limited at the moment and advanced editing functions are not available."),
							priority: 20
						}) : v.removeNotification("notification_noAdvancedEditing")
					})
				}), s.features.define("overloadHandling", ["core/translateSourceSentences"], function(e) {
					e.onPartialTranslationReceived.push(function() {
						console.warn("ON__PARTIAL_TRANSLATION_RECEIVED"), G[j](!0), G[q] = 2 * Date.now()
					})
				}), s.features.define("letterCountingUI", ["core/textareas", "core/config"], function(e, t) {
					var r, o, a;
					e.onSourceTextChanged.push(function(e, i) {
						var c = e.length;
						if (c > D || a) {
							var u = s.features.get("core/domElements");
							a || (a = n("<div class='lmt__source_textarea__length_marker'></div>").appendTo(u.sourceEditOuterContainer)), a.text(w ? c : c + " / " + t.get("CONFIG__MAX_NUM_CHARACTERS")), c > t.get("CONFIG__MAX_NUM_CHARACTERS") ? (n(u.sourceEditOuterContainer).addClass("lmt__textarea_container--text_too_long"), a.addClass("lmt__source_textarea__length_marker--critical")) : (n(u.sourceEditOuterContainer).removeClass("lmt__textarea_container--text_too_long"), a.removeClass("lmt__source_textarea__length_marker--critical"))
						}
						c > 4e3 && !w && (o ||
						function() {
							var e = s.features.get("core/domElements");
							o = !0, function() {
								if (!r) {
									var e = s.features.get("core/domElements");
									r = n(".lmt__source_textarea__length_marker_pro_advertisement"), O(F.ON__SOURCE_TEXT_EMPTY, function() {
										n(e.sourceEditInnerContainer).removeClass("lmt__textarea_proAd--visible"), r.removeClass("lmt__source_textarea__length_marker_pro_advertisement--visible").detach(), o = !1
									})
								}
								return r
							}().css("display", "block").appendTo(P.parent()), setTimeout(function() {
								n(e.sourceEditInnerContainer).addClass("lmt__textarea_proAd--visible"), r.addClass("lmt__source_textarea__length_marker_pro_advertisement--visible"), S.sendOncePerSession({
									eventName: "hasShowed_noticeFreeLimit",
									eventParams: {
										category: "translator",
										action: "showNotice",
										label: "freeLimit"
									}
								})
							}, 100)
						}())
					})
				}), s.features.define("selectLangUI", ["webTranslatorCore", "core/domElements", "eventHandling", "core/languageManagement"], function(e, t, r, o) {
					var a = t.$rootContainer,
						i = a.find(".lmt__language_select--source"),
						s = a.find(".lmt__language_select--target");
					if (i.length && c.
				default.withValue([e.sourceLang, e._selectedSourceLang, e.sourceIsEmpty], function(e, t, n) {
						var r;
						(r = "auto" === t ? n ? K("translator/detectLanguage", "<span class='translate_from'>Translate from </span><strong>any language</strong>") : e ? K("translator/translateFrom", "<span class='translate_from'>Translate from </span>") + "<strong>" + i.find("[dl-lang='" + e + "']").html() + "</strong> " + K("translator/translationLanguageDetected", "(detected)") : void 0 : K("translator/translateFrom", "<span class='translate_from'>Translate from </span>") + "<strong>" + i.find("[dl-lang='" + t + "']").html().trim() + "</strong>") && i.find("> button > span").html(r)
					}), s.length || i.length) {
						var u = c.
					default.createCallOnce();
						a.find(".lmt__language_select > button").click(function(t) {
							var o = n(this).closest(".lmt__language_select"),
								i = o.hasClass("lmt__language_select--open");
							if (u(), !i) {
								var c = o.is(s) ? "target" : "source";
								s.find("[dl-lang]").css("display", "");
								var l, f = e.getSelectedSourceLang();
								if ("target" === c)"auto" !== f ? l = f : e.getActiveLangContext().getSourceLang() && !e.sourceIsEmpty() && (l = e.getActiveLangContext().getSourceLang()), l && s.find("[dl-lang=".concat(l, "]")).css("display", "none");
								o.addClass("lmt__language_select--open");
								var d = setTimeout(function() {
									o.addClass("lmt__language_select--open_2")
								});
								a.addClass("lmt--with_open_language_menu"), u.push(function() {
									clearTimeout(d), a.removeClass("lmt--with_open_language_menu"), o.removeClass("lmt__language_select--open_2").removeClass("lmt__language_select--open")
								}), r.notify(r.ON.ON__LANGUAGE_SELECT_OPENED, c, o.get(0))
							}
						}), r.on(r.ON.ON__ANYCLICK, function(e, t) {
							e.closest(".lmt__language_select").length || u()
						}), i.find(".lmt__language_select__menu button").click(function() {
							var e = this.getAttribute("dl-lang");
							o.setUserSelectedSourceLang(e), u()
						}), s.find(".lmt__language_select__menu button").click(function() {
							o.setUserSelectedTargetLangSettings({
								lang: this.getAttribute("dl-lang"),
								variant: this.getAttribute("dl-variant")
							}), u()
						});
						var l = s.find(".lmt__language_select__active__title"),
							f = l.clone(),
							d = f.find("strong").clone();
						f.find("strong").remove();
						var p = f.text();
						f.empty(), f.append('<span class="translate_to">' + p + "</span>"), f.append(d), l.replaceWith(f);
						var g = i.find(".translate_from").width(),
							h = s.find(".translate_to").width();
						i.find(".lmt__language_select__menu").css({
							left: g - 0
						}), s.find(".lmt__language_select__menu").css({
							left: h - 0
						})
					}
					return !0
				}), function() {
					N.find(".lmt__textarea").on("focus", function() {
						n(this).closest(".lmt__textarea_container").addClass("focus lmt__textarea_container--focus");
						var e, t = n(e = this).hasClass("lmt__source_textarea") ? "source" : n(e).hasClass("lmt__target_textarea") ? "target" : void 0;
						t && n(this).closest(".lmt__sides_container").addClass("lmt__sides_container--focus_" + t)
					}), N.find(".lmt__textarea").on("blur", function() {
						n(this).closest(".lmt__textarea_container").removeClass("focus lmt__textarea_container--focus"), n(this).closest(".lmt__sides_container").removeClass("lmt__sides_container--focus_source"), n(this).closest(".lmt__sides_container").removeClass("lmt__sides_container--focus_target")
					}), N.find(".lmt__textarea[autofocus]").first().focus(), P.has(":focus") && P.closest(".lmt__textarea_container").addClass("focus lmt__textarea_container--focus"), p.is_touch_device || N.find(".lmt__textarea_placeholder_text").hover(function() {
						n(this).parent().find("textarea").addClass("hover")
					}, function() {
						n(this).parent().find("textarea").removeClass("hover")
					}), N.find(".lmt__textarea_placeholder_text").click(function() {
						n(this).parent().find("textarea").focus()
					})
				}(), w && s.features.define("askBeforePastingLongText", ["core/triggerSourceTranslation", "common/interceptClipboard"], function(e, t) {
					var r = e.checkForChangedSourceEdit;
					t.doUpdateTextBeforePasting(function(e, t) {
						var o = t();
						if (n(e).is(".lmt__source_textarea") && o.length > 5e4) {
							var a = document.activeElement,
								i = a.selectionStart,
								s = a.selectionEnd,
								c = n(".lmt__ask_paste_popup"),
								u = c.find("> div > p"),
								l = c.find(".lmt__ask_paste_popup__cancel_button"),
								f = c.find(".lmt__ask_paste_popup__continue_button"),
								d = u.attr("dl-text-template"),
								p = n(".lmt__source_textarea, .lmt__clear_text_button, .lmt__target_textarea");
							p.attr("disabled", "true");
							var h = function() {
									p.removeAttr("disabled"), c.removeClass("lmt__ask_paste_popup--visible_2"), c.removeClass("lmt__ask_paste_popup--visible"), u.text(" "), l.off("click"), f.off("click")
								};
							l.on("click", h), f.on("click", function() {
								setTimeout(function() {
									n(".lmt__source_textarea")[0].select(), n(".lmt__source_textarea")[0].setSelectionRange(i, s), function(e) {
										var t;
										try {
											t = document.execCommand("insertText", !1, e)
										} catch (e) {
											console.warn("[insertTextIntoActiveTextarea]", e)
										}
										if (!t) {
											var r = document.activeElement;
											if (g("[insertTextIntoActiveTextarea]", r), !r || "textarea" != r.tagName.toLowerCase()) return console.warn("[insertTextIntoActiveTextarea]", r), !1;
											var o = r.selectionStart,
												a = r.selectionEnd,
												i = n(r).val();
											n(r).val(i.substr(0, o) + e + i.substr(a)), r.setSelectionRange(o + e.length, o + e.length)
										}
									}(o), r()
								}), h()
							}), a.blur(), l.select(), u.text(d.replace("%%num%%", o.length)), c.addClass("lmt__ask_paste_popup--visible"), setTimeout(function() {
								c.addClass("lmt__ask_paste_popup--visible_2")
							}, 100), t(!1)
						}
					})
				}), s.features.define("batchTranslationUI", ["core/translateSourceSentences"], function(e) {
					e.onBatchedTranslationRequestStarted.push(function(e, t) {
						t.numNotCachedBatchesToTranslate() > 1 && t.currentBatchId.onValueChanged.push(function(r) {
							if (1 === r) {
								var o = n(".lmt__progress_popup"),
									a = o.find("> div > p"),
									i = o.find(".lmt__progress_popup__progress div"),
									s = o.find(".lmt__progress_popup__stop_button"),
									c = a.attr("dl-text-template"),
									u = t.numCharactersToTranslate() || 1,
									l = n(".lmt__source_textarea, .lmt__clear_text_button, .lmt__target_textarea");
								s.on("click", function() {
									t.stopped(!0), o.addClass("lmt__progress_popup--stopping")
								}), l.attr("disabled", "true");
								var f = function() {
										var e = t.numRemainingCharacters();
										a.text(c.replace("%%num%%", u - e).replace("%%total%%", u)), i.css("width", 100 - e / u * 100 + "%")
									};
								f(), o.addClass("lmt__progress_popup--visible"), setTimeout(function() {
									o.addClass("lmt__progress_popup--visible_2")
								}, 100);
								var d = function() {
										l.removeAttr("disabled"), o.removeClass("lmt__progress_popup--visible_2"), o.removeClass("lmt__progress_popup--visible"), o.removeClass("lmt__progress_popup--stopping"), i.css("width", "0%"), a.text(" "), s.off("click")
									};
								t.finished.onValueChanged.push(function(e) {
									e && d()
								}), t.numRemainingCharacters.onValueChanged.push(f), e.onRequestEnded.push(d)
							}
						})
					})
				}), w && s.features.define("confirmProAccount", ["core/domElements", "core/config"], function(e, t, r) {
					function o() {
						n("html").addClass("dl_pro--confirmed"), -1 === window.location.href.indexOf("beta.deepl.com") && T.connectNodesToValues(e.rootContainer, {
							usingProHint: {
								type: "lmt_usingProBanner"
							}
						})
					}
					a.loggedIn ? l.getBackend_account().callFunction("getActiveSubscriptionInfo").then(function(e) {
						if (e.isActive && e.supportsWebTranslator) o();
						else {
							var r = function() {
									v.removeNotification("proAccountError.noSubscription")
								};
							if (n("html").addClass("dl_pro--invalid"), n(".lmt__source_textarea, .lmt__clear_text_button, .lmt__target_textarea").attr("disabled", "true"), e.isActive) if (t.get("isApp")) {
								var i = n('<div class="lmt__system_notification_button_container"></div>').append(n('<button class="lmt__appButtons__eventActionButton">\n                                            '.concat(K("genericDialog.logoutButton", "Log out"), "\n                                        </button>")).click(function() {
									L(F.ON__USER_EVENT, {
										type: "userRequestsLogout",
										context: "noAccess"
									}), r()
								})),
									s = n("\n                            <div>\n                                <p>".concat(K("translator/proAccountError.noAccess.app", "No Access."), "</p>\n                                <p>").concat(K((a.isAppWin ? "windows" : "macOS") + "/error.account.logout", "Log out"), "</p>\n                            </div>\n                        ")).append(i);
								v.addNotification({
									id: "proAccountError.noSubscription",
									severity: "final",
									priority: 100,
									text: s
								}), setTimeout(function() {
									n(".lmt__appButtons__eventActionButton")[0].focus()
								})
							} else v.addNotification({
								id: "proAccountError.noSubscription",
								severity: "final",
								priority: 100,
								text: "\n                                ".concat(K("translator/proAccountError.noAccess", "No Access."), "\n                                <div>\n                                    <a href='#' class='dl_internal_link_row' onclick='kDeepL.logout(undefined,\"/translator\")'>\n                                        ").concat(K("translator/proAccountError.noAccess_logoutButton", "Log out"), "\n                                    </a>\n                                </div>\n                            ")
							});
							else if (t.get("isApp")) {
								var c = n('<div class="lmt__system_notification_button_container"></div>').append(n('<button class="lmt__appButtons__eventActionButton">' + K("translator/proAccountError.accountPageButton", "Go to your contract page") + "</button>").click(function() {
									L(F.ON__USER_EVENT, {
										type: "userRequestsContractPage",
										context: "accountProblems"
									}), r()
								})).append(n('<button class="lmt__appButtons__eventActionButton">' + K("translator/proAccountError.logoutAndUseFreeButton", "Logout") + "</button>").click(function() {
									L(F.ON__USER_EVENT, {
										type: "userRequestsLogout",
										context: "accountProblems"
									}), r()
								})).append(n('<button class="lmt__appButtons__eventActionButton">' + K("translator/proAccountError.refreshPageButton", "Refresh") + "</button>").click(function() {
									return location.reload()
								})),
									u = n("\n                            <div>\n                                ".concat(K("translator/proAccountError.noSubscription", "Account problem."), "\n                            </div>\n                        ")).append(c);
								v.addNotification({
									id: "proAccountError.noSubscription",
									severity: "final",
									priority: 100,
									text: u
								}), setTimeout(function() {
									n(".lmt__appButtons__eventActionButton")[0].focus()
								})
							} else v.addNotification({
								id: "proAccountError.noSubscription",
								severity: "final",
								priority: 100,
								text: "\n                                ".concat(K("translator/proAccountError.noSubscription", "Account problem."), "\n                                <div>\n                                    <a href='/pro-account.html' class='dl_internal_link_row'>\n                                        ").concat(K("translator/proAccountError.accountPageButton", "Go to your contract page"), "\n                                    </a>\n                                </div>\n                                <div>\n                                    <a href='#' class='dl_internal_link_row' onclick='kDeepL.logout(undefined,\"/translator\")'>\n                                        ").concat(K("translator/proAccountError.logoutAndUseFreeButton", "Log out"), "\n                                    </a>\n                                </div>\n                            ")
							})
						}
					}) : a.ep && M.requireAsync(["dlEnterpriseAccount"], function(e) {
						e.isConfirmed() ? o() : e.isConfirmed.onValueChanged.push(function(e) {
							if (e) return o(), "REMOVE"
						})
					})
				}), s.features.define("webTranslatorCore", [], function() {
					return s
				}), s.features.define("defaultUI_adjustTextareaSize", ["core/domElements", "eventHandling", "core/config", "core/textareas"], function(e, t, r, a) {
					var i = r.get("scrollMode") || "web";
					window.addEventListener("resize", function(e) {
						return g(!0)
					}), [e.sourceEdit, e.targetEdit].forEach(function(e) {
						return e.addEventListener("scroll", function(t) {
							return e.scrollTop = 0, t.preventDefault(), c.
						default.setTimeout_consolidated("updateFontAfterTextareascroll", function() {
								g(!1)
							}, 100), !1
						}, {
							passive: !1
						})
					}), a.onSourceTextChanged.push(function(e, t) {
						return g(!0)
					}), t.on(t.ON.ON__TRANSLATION_READY, function(e) {
						return g(!1)
					}), a.onTargetTextChanged.push(function(e) {
						return g(!1)
					});
					var s = c.
				default.value(0);
					c.
				default.listenOn("LMT/dictDisplayed", function(e) {
						var t = e.dictHeight;
						s(t), g(!1)
					}), c.
				default.listenOn("LMT/dictRemoved", function() {
						s(0), g(!1)
					}), e.targetEdit.addEventListener("focus", function(e) {
						g(!1)
					}), setTimeout(function() {
						return g(!0)
					});
					var u = c.
				default.value(void 0),
						l = c.
					default.createCallOnce();
					c.
				default.withValue(u, function(t) {
						l(), t && (e.rootContainer.classList.add(t), l.push(function() {
							return e.rootContainer.classList.remove(t)
						}))
					});
					var f = c.
				default.createCallOnce(),
						d = 0;

					function g(t) {
						var r = "[_recalculateFontSizeAndScrollHeight] ",
							s = o.debugSizes || !1;
						s && console.log(r, "inSourceTextChanged=", t);
						var c = e.$sourceEdit,
							l = e.$targetEdit;
						if (0 != c.scrollTop()) return c.scrollTop(0), void setTimeout(function() {
							g(t)
						});
						var h = a.getSourceText();
						if (t) if (h.length > 1e3) u("lmt--very_long_text");
						else {
							var _ = window.getComputedStyle(e.sourceEdit),
								v = e.sourceEdit.clientWidth - (parseInt(_.paddingLeft) || 0) - (parseInt(_.paddingRight) || 0),
								m = 0;
							h.split("\n").forEach(function(e) {
								return m += Math.ceil(10 * e.length / v + .1)
							}), s && console.log(r, "sourceTextWidth", v, "approxLineCount", m), m <= 1 ? u("lmt--short_text") : m <= 3 ? u("lmt--medium_text") : m <= (p.isMobilePhone ? 5 : 15) ? u("lmt--long_text") : u("lmt--very_long_text"), s && console.log(r, "numLines=" + m + ", fontScalingClass=" + u())
						}
						f();
						var y = c.closest(".lmt__inner_textarea_container"),
							T = l.val(),
							S = n("<div class='lmt__textarea' style='min-height: 0;'></div>").css(c.dlCSS.apply(c, ["font", "font-size", "font-family", "font-weight", "font-variant-ligatures", "padding-top", "padding-bottom", "padding-left", "padding-right"])).css({
								"white-space": "pre-wrap",
								"font-variant-ligatures": "none",
								transform: "translate(0%, 100%)"
							}).text(T + ":").appendTo(y);
						s && console.log(r, "theScrollarea", y), s && console.log(r, "theTextarea.height", S.height());
						var b, E = S.height();
						if (t) {
							S.text(h + ":"), b = S.height();
							var w = parseInt(c.css("min-height")) - parseInt(c.css("padding-top")) - parseInt(c.css("padding-bottom"));
							w > b && (b = w), d = b
						} else b = d;
						if (f.push(function(e) {
							return S.remove()
						}), f(), s && console.log(r, "Needed textarea heights: source_height=" + b + ", target_height=" + E), b < 30 && (b = 30), E < 30 && (E = 30), "web" === i) if (p.isMobileLayout) c.height(b), l.height(E), L(F.ON__TEXT_AREAS_RESTYLED);
						else {
							var x = e.$translationsAsText.height(),
								C = b > E + x ? b : E + x;
							c.height(C), l.height(C), L(F.ON__TEXT_AREAS_RESTYLED, E)
						} else c.height(b), l.height(E), L(F.ON__TEXT_AREAS_RESTYLED)
					}
				}), s.features.define("userSettings", ["webTranslatorCore"], function(e) {
					var t = new Map;
					return {
						getEntry: function(n, r, o) {
							return t.has(n) || t.set(n, c.
						default.persistentValue(e.id + "." + n, r, void 0 === o ? 2592e3 : o)), t.get(n)
						}
					}
				}), s.features.define("share", ["webTranslatorCore", "core/languageManagement", "core/domElements", "core/requestHandling", "core/triggerSourceTranslation", "core/textareas", "core/updateSourceSentences"], function(e, t, r, o, a, i, s) {
					var u = "[share]",
						l = !1,
						f = 1900;

					function h() {
						if (g(u, "update canonical"), p.isIPad || p.isIPhone) {
							var e = (n('head link[rel="canonical"]').attr("href") || "").split("#")[0] || "",
								t = (location.href.split("#")[1] || "").replace(/\./g, "%2e");
							n('head link[rel="canonical"]').attr("href", t ? e + "#" + t : e)
						} else n('head link[rel="canonical"]').remove()
					}
					function _() {
						var e = location.href;
						e.search("#") >= 0 && window.history.pushState(null, "", e.split("#", 2)[0]), h()
					}
					function v(s) {
						l && console.log(u, "apply url", s);
						var f = s.split("#", 2)[1];
						if (f) {
							h();
							var p = decodeURIComponent(f).replace(/[\\]./g, function(e) {
								return "\\\\" === e ? "{_BACKSLASH_}" : e
							}).replace(/([^\\])[\/]/g, "$1{_DELIM_1_}").replace(/([^\\])[|]/g, "$1{_DELIM_2_}").replace(/\\([\/|])/g, "$1").replace(/{_BACKSLASH_}/g, "\\");
							l && console.log(u, "decodedText", p);
							for (var g = p.split("{_DELIM_1_}"), _ = g.shift(), v = g.shift(), m = "", y = "", T = !1, b = []; g.length;) {
								var E = g.shift().split("{_DELIM_2_}", 2);
								l && console.log(u, "s_t_sentences:", E), m += E[0];
								var w = E[1] || "";
								y += w, T |= w.length > 0, b.push(w)
							}
							if (m.length) if (i.setTargetTextExplicitly("", "internal"), i.updateSourceText(" "), t.sanitizeAndUpdateActiveLanguages(_, v), T) {
								l && console.log(u, "Setting target sentence texts..."), l && console.log(u, "Setting source text:", m), i.setSourceTextExplicitly(m, "internal"), i.setTargetTextExplicitly(y, "internal");
								var C = o.startRequestContext(e.getActiveLangContext(), d.TYPE__TRANSLATE_SOURCE, d.TRIGGER__SOURCE_TEXT_CHANGED);
								C.targetIsPredefined = !0, C.sourceLangHasBeenDetermined = !0, C.onSentenceSplittingReceived.push(function() {
									var e, t, o, a, s = C.langContext;
									l && console.log(u, "Source sentences updated; Setting target sentences...."), l && console.log(u, s.targetSentences), s.targetSentences.splice(0), b.forEach(function(e) {
										return s.targetSentences.push(x.create(e))
									}), e = y, t = c.
								default.createCallOnce(), o = n("<div class='lmt__altered_shared_text_hint' dl-test='translator-altered-text-hint'></div>").append(n("<p>" + K("translator/share.editedTranslationHint", "The translation has been edited.") + "</p>")).append(n("<div class='lmt__altered_shared_text_hint__buttons'></div>").append(n("<button>" + K("translator/share.editedTranslation_revertButton", "Change back to the original version") + "</button>").click(function() {
										S(), t()
									})).append(n("<button>" + K("translator/share.editedTranslation_acceptButton", "Accept changes") + "</button>").click(t))).appendTo(n(r.targetEditOuterContainer)), a = n("<div class='lmt__mobile_altered_shared_text_hint'></div>").append(n("<p>" + K("translator/share.editedTranslationHint", "The translation has been edited.") + "</p>")).append(n("<div class='lmt__mobile_altered_shared_text_hint__buttons'></div>").append(n("<button>" + K("translator/share.editedTranslation_revertButton", "Change back to the original version") + "</button>").click(function() {
										S(), t()
									})).append(n("<button>" + K("translator/share.editedTranslation_acceptButton", "Accept changes") + "</button>").click(t))).insertAfter(n(".lmt__translations_as_text")), t.push(function() {
										o.css("opacity", "0"), a.css("opacity", "0"), setTimeout(function() {
											o.remove(), a.remove()
										}, 400)
									}), setTimeout(function() {
										i.onSourceTextChanged.push(function(e, n) {
											if ("internal" !== n) return l && console.log(u, "removeHint 1"), t(), "REMOVE"
										}), i.onTargetTextChanged.push(function(n, r) {
											if ("internal" !== r && n !== e) return l && console.log(u, "removeHint 2"), t(), "REMOVE"
										})
									})
								}), a.triggerTranslationUpdate(C)
							} else l && console.log(u, "Setting source text:", m), i.updateSourceText(m)
						}
					}
					function m(e) {
						return encodeURIComponent(e.replace(/([\\|\/])/g, "\\$1"))
					}
					function y(e, t) {
						var n = location.href.split("#", 2)[0],
							r = [],
							o = n.length,
							a = !1,
							i = "";
						return t ? e.sourceSentences.some(function(t, n) {
							var s = m(t.getText());
							if (o + s.length > f) return a = !0, !0;
							var c = e.targetSentences[n],
								u = c && m(c.getText()) || "[...]";
							return o + u.length > f ? (a = !0, !0) : (i += c && c.getText() || "[...]", o += s.length + u.length + 2, r.push(s + encodeURIComponent("|") + u), !1)
						}) : e.sourceSentences.some(function(t, n) {
							var s = m(t.getText());
							if (o + s.length > f) return a = !0, !0;
							var c = e.targetSentences[n];
							return i += c && c.getText() || "[...]", o += s.length, r.push(s), !1
						}), r.length && e.getSourceLang() && e.getTargetLang() && (n += "#" + e.getSourceLang().toLowerCase() + "/" + e.getTargetLang().toLowerCase() + "/" + (t ? r.join("/") : r.join(""))), [n, a, i]
					}
					function T(e) {
						var t = !1;
						return e.targetSentences.forEach(function(e) {
							var n = e.getTranslation();
							n && (t |= e.getText().trim() != (n.getTargetText() || "").trim())
						}), t
					}
					function S() {
						if (o.hasPendingRequests()) g(u, "Delayed revert..."), o.hasPendingRequests.onValueChanged.push(function() {
							return setTimeout(S, 100), "REMOVE"
						});
						else {
							g(u, "Revert!");
							var t = "";
							e.getActiveLangContext().targetSentences.forEach(function(e) {
								var n, r = e.getTranslation();
								r ? (n = e.getWhitespacesBefore() + r.getTargetText() + e.getWhitespacesAfter(), e.updateRawText(n, !0, !0)) : n = e.getText(), t += n
							}), l && console.log(u, "Reverted text [" + t + "]"), i.updateTargetText(t), n(".lmt__translations_as_text__main_translation").text(t), b()
						}
					}
					function b() {
						if (l && console.log(u, "Refresh URL..."), w || i.getSourceText().length > f) _();
						else if (T(e.getActiveLangContext())) _();
						else {
							var t = y(e.getActiveLangContext(), !1);
							if (t[1]) _();
							else {
								var n = t[0].replace(/%20/g, " ");
								window.history.replaceState(null, "", n), h(), l && console.log(u, "Update URL", n)
							}
						}
					}
					return window._createTextUrl = function(t) {
						return y(e.getActiveLangContext(), t)
					}, window.onhashchange = function() {
						l && console.log(u, "window.onhashchange", location.href), v(location.href)
					}, v(location.href), i.onSourceTextChanged.push(function(e, t) {
						l && console.log(u, "CHANGED (0)"), c.
					default.setTimeout_consolidated("share_refresh", b, 500)
					}), s.onSourceSentencesChanged.push(function(e) {
						l && console.log(u, "CHANGED (1)"), c.
					default.setTimeout_consolidated("share_refresh", b, 500)
					}), i.onTargetTextChanged.push(function(e, t) {
						l && console.log(u, "CHANGED (2)"), c.
					default.setTimeout_consolidated("share_refresh", b, 500)
					}), {
						createTextURL: y,
						targetTextHasBeenAltered: T
					}
				}), s.features.define("observeUserEdits", ["smartEditing/observeSentenceSelection", "webTranslatorCore"], function(e, t) {
					var n, r, o = "[observeUserEdits]",
						i = a.devMode && !1,
						s = c.
					default.createCallOnce();
					e.onTargetSelectionChanged.push(function(e, a) {
						if (i && console.log(o, "onTargetSelectionChanged", e), s(), n && r) if (e) e.sentence !== n && (n.takeSnapshot(!0), d({
							state: r,
							targetSentence: n,
							type: "EDIT_TYPE__MANUAL_EDIT_TIMEOUT"
						}), n = e.sentence, r = t.getActiveLangContext());
						else {
							var c = setTimeout(function() {
								n.takeSnapshot(!0), d({
									state: r,
									targetSentence: n,
									type: "EDIT_TYPE__MANUAL_EDIT_TIMEOUT"
								}), n = void 0, r = void 0
							}, 5e3);
							s.push(function() {
								clearTimeout(c)
							})
						} else e && (n = e.sentence, r = t.getActiveLangContext())
					}), O(F.ON__USER_EDIT_PERFORMED, function(e) {
						i && console.log(o, e), d(e)
					});
					var l = -1,
						f = c.
					default.createMultiProcedure();

					function d(e) {
						var t = e.targetSentence;
						if (i && console.log(o, "COMMIT", t), t.getTextRev() <= l) i && console.log(o, "Unchanged or already handled");
						else {
							var n = t.getNormalizedText(),
								r = t.getTranslation();
							if (r) n !== u.
						default.collapseWhitespaces(r.getTargetText()).trim() ? (l = t.getTextRev(), f(e)):
							i && console.log(o, "unchanged")
						}
					}
					return {
						onUserEdit: f
					}
				}), s.features.require(["core/config"], function(e) {
					e.get("CONFIG__SEND_EDIT_LOGS") && s.features.define("editLogs", ["observeUserEdits", "core/languageManagement"], function(e, t) {
						var n = "[editLogs]",
							r = a.devMode && !0;

						function o(e, t) {
							for (var n = e.slice(0), r = t.slice(0), o = []; n.length && r.length;) {
								var a = n.shift(),
									i = r.shift();
								if (o.push(i), a.text !== i.text) {
									i._prevText = a.text;
									break
								}
							}
							for (; r.length;) o.push(r.shift());
							return o
						}
						function i(e) {
							for (var t = (e || []).map(u.
						default.splitTextIntoParts), n = t.pop(); t.length;) n = o(t.pop(), n);
							return n.map(function(e) {
								return void 0 === e._prevText ? e.text : "{{" + e._prevText + "->" + e.text + "}}"
							}).join("")
						}
						var s = 0;

						function l() {
							s = Math.floor(1e8 * Math.random())
						}
						O(F.ON__SOURCE_TEXT_EMPTY, l), t.onLangChanged.push(l);
						var f, d = [],
							p = 0;

						function g() {
							for (; d.length;) {
								var e = d.shift();
								f || (f = c.
							default.persistentValue("LMT.ec", 0, 2592e3)), f((f() || 0) + 1);
								var t = e.langContext,
									o = e.targetSentence,
									a = o.getSourceSentence();
								if (a) {
									var u = C.getSourceContext(a),
										l = {
											log_kind: "edit",
											initial_target_text: o.getSnapshot(0).text,
											final_target_text: o.getNormalizedText(),
											target_edits: i(o.getSnapshots().map(function(e) {
												return e.text
											})),
											source_text: a.getNormalizedText(),
											source_context_before: u.prefix,
											source_context_after: u.postfix,
											edit_session_id: s,
											user_experience: Math.floor(Math.log2(f())),
											source_lang: t.getSourceLang(),
											target_lang: t.getTargetLang()
										};
									r && console.log(n, JSON.stringify(l, !1, 4))
								}
							}
						}
						e.onUserEdit.push(function(e) {
							"EDIT_TYPE__SELECT_ALTERNATIVE_FIRST_STEP" !== e.type && (clearTimeout(p), d.length && d[d.length - 1].targetSentence === e.targetSentence ? d[d.length - 1] = e : (g(), d.push(e)), d.length > 1 || "EDIT_TYPE__MANUAL_EDIT_TIMEOUT" === e.type ? g() : p = setTimeout(g, 2e4))
						})
					})
				}), s.features.define("dev_retranslate", ["webTranslatorCore", "core/translationBackend", "core/languageManagement"], function(e, t, n) {
					return function() {
						var r = e.sourceLang(),
							o = e.targetLang();
						t.lmtBackends.translation().dev_clearTranslationCache(), n.updateActiveLanguages("", {
							lang: ""
						}), n.updateActiveLanguages(r, {
							lang: o
						})
					}
				}), setTimeout(function() {
					m.initTooltips(n(".docTrans_translator_upload_button > form > div"))
				}), s.features.require(["core/config"], function(e) {
					"app" === e.get("scrollMode") && s.features.define("appScrollSynchronization", ["smartEditing/observeSentenceSelection", "core/domElements", "webTranslatorCore", "publicInterface"], function(e, t, n, r) {
						var o = !1,
							a = "[appScrollSynchronization]";
						o && console.log(a, "init");
						var s = c.
					default.value(),
							u = function() {
								return s(window.innerWidth < 500)
							};
						window.addEventListener("resize", u), u();
						var l = c.
					default.createCallOnce(),
							f = c.
						default.createCallOnce();
						c.
					default.withValue(s, function(s) {
							var c;
							o && console.log(a, "isMobile", s), s ? (o && console.log(a, "mobile"), f(), function() {
								var r = 125;

								function s(e, s) {
									o && console.log(a, "observeSentenceSelection.onSourceSelectionChanged", e, s);
									var c = n.getActiveLangContext();
									if (c && e && e.sentence) {
										var u = c.getTargetSentences(),
											l = u[e.sentenceIndex];
										if (l) {
											for (var f = 0, d = e.sentenceIndex - 1; d >= 0; --d) f += u[d].getText().length;
											o && console.log(a, "targetTextOffset", f);
											var p = i.
										default.getTextareaPixelOffsetForCursorOffset(t.targetEdit, f, !1);
											o && console.log(a, "sentencePixelOffset", p), setTimeout(function() {
												return i.
											default.smoothScroll(t.targetEditInnerContainer, p.top)
											}, r)
										}
									}
								}
								function c(e, n) {
									if (o && console.log(a, "observeSentenceSelection.onTargetSelectionChanged", e, n), e && e.sentence) {
										for (var s = e.sentence.getSourceSentence(), c = 0, u = s.prevSentence; u; u = u.prevSentence) c += u.getText().length;
										o && console.log(a, "sourceTextOffset", c);
										var l = i.
									default.getTextareaPixelOffsetForCursorOffset(t.sourceEdit, c, !1);
										o && console.log(a, "sentencePixelOffset", l), setTimeout(function() {
											return i.
										default.smoothScroll(t.sourceEditInnerContainer, l.top)
										}, r)
									}
								}
								e.onSourceSelectionChanged.push(s), l.push(function() {
									return e.onSourceSelectionChanged.remove(s)
								}), e.onTargetSelectionChanged.push(c), l.push(function() {
									return e.onTargetSelectionChanged.remove(c)
								})
							}()) : (o && console.log(a, "non-mobile"), l(), c = V([t.sourceEditInnerContainer, t.targetEditInnerContainer]), r.onTranslationReady.push(function(e) {
								var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250,
									n = null;
								return function() {
									for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
									clearTimeout(n), n = setTimeout(function() {
										return e.apply(void 0, o)
									}, t)
								}
							}(function() {
								for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
								o && (e = console).log.apply(e, [a, "publicInterface.onTranslationReady"].concat(r)), B({
									el: t.sourceEditInnerContainer,
									instanceId: c,
									forceScroll: !0
								})
							}), 1), f.push(function() {
								return W(c)
							}))
						})
					})
				}), s.features.require(["core/config"], function(e) {
					"app" === e.get("scrollMode") && s.features.define("appTextareaResize", ["core/domElements", "eventHandling", "core/updateSourceSentences"], function(e, t, n) {
						var r = c.
					default.value(!1),
							o = c.
						default.value(!1),
							a = c.
						default.value(!1);
						e.sourceEdit.addEventListener("focus", function() {
							var t = i.
						default.getTextareaPixelOffsetForCursorOffset(e.sourceEdit, 1e5, !1).top;
							a(t > .5 * window.innerHeight - 120), r(!0), o(!1)
						}), e.targetEdit.addEventListener("focus", function() {
							var t = i.
						default.getTextareaPixelOffsetForCursorOffset(e.sourceEdit, 1e5, !1).top;
							a(t > .5 * window.innerHeight - 230), r(!1), o(!0)
						});
						var s = c.
					default.value(!1);
						t.on(t.ON.ON__SOURCE_TEXT_EMPTY, function() {
							return s(!1)
						}), n.onSourceSentencesChanged.push(function(e) {
							return s(e.langContext.sourceSentences.length > 1)
						});
						var u = c.
					default.value(),
							l = function() {
								return u(window.innerWidth < 500 && window.innerHeight < 800)
							};
						window.addEventListener("resize", l), l();
						var f = c.
					default.value("");
						c.
					default.withValue([r, o, a, s, u], function(e, t) {
							for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) r[o - 2] = arguments[o];
							r.every(function(e) {
								return e
							}) ? f(e ? "lmt--enlargedSource" : t ? "lmt--enlargedTarget" : "") : f("")
						});
						var d = c.
					default.createCallOnce();
						c.
					default.withValue(f, function(t) {
							d(), t && (e.rootContainer.classList.add(t), d.push(function() {
								return e.rootContainer.classList.remove(t)
							}))
						})
					})
				}), M.requireAsync(["Tracker", "dateTime"], function(e, t) {
					s.features.defineFeature_lazy("ABTestController_clickOnWordHint", ["eventHandling", "webTranslatorCore"], function(n, r) {
						var o = n.on,
							a = n.ON;
						return function() {
							function n(e, r) {
								Y(this, n), this._testName = e, this._testCaseName = r, this._isTrackerActive = c.
							default.persistentValue("".concat(this._testName, ".isTrackerActive"), !1, 30 * t.secondsPerDay), this._tracker = this._isTrackerActive() ? this._instantiateTracker():
								null, this._tracker && this._shouldTrackerCollectData() && (this._isTrackerActive(!1), this._tracker.collectData(), this._tracker = null), this._registerEventHandlers()
							}
							var i, s, u;
							return i = n, (s = [{
								key: "incrementCounter",
								value: function(e) {
									this._tracker && this._tracker.incrementCounter(e)
								}
							}, {
								key: "trackEvent",
								value: function(e) {
									var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
									this._tracker && this._tracker.trackEvent(e, t)
								}
							}, {
								key: "_registerEventHandlers",
								value: function() {
									var e = this;
									o(a.ON__INITIAL_SOURCE_TRANSLATION_UPDATED, function() {
										return !e._tracker && e._shouldActivateTracker() && (e._isTrackerActive(!0), e._tracker = e._instantiateTracker(!0)), e._tracker && e._tracker.trackEvent("translatorUsed", !0), "REMOVE"
									})
								}
							}, {
								key: "_shouldActivateTracker",
								value: function() {
									return 1 === (parseInt(y.getStats("h", 0)(), 10) || 0) && r.__abTest_clickOnWordHint_trackingEnabled
								}
							}, {
								key: "_instantiateTracker",
								value: function() {
									var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
										n = new e("abTest", this._testName);
									return t && (n.setMetaKeyValue("testName", this._testName), n.setMetaKeyValue("testCaseName", this._testCaseName), n.setMetaKeyValue("testVersion", 3)), n
								}
							}, {
								key: "_shouldTrackerCollectData",
								value: function() {
									var e = this._tracker.getLastCollectedDate(),
										n = new Date;
									return t.getDatesDifferenceInDays(e, n) >= 3
								}
							}]) && H(i.prototype, s), u && H(i, u), n
						}()
					})
				}), s.features.defineFeature_lazy("ClickOnWordHint_classic", ["eventHandling", "core/localizedTexts", "core/domElements", "smartTargetEditing", "ABTestController_clickOnWordHint", "core/textareas", "core/languageManagement"], function(e, t, r, o, a, i, s) {
					var u = e.on,
						l = e.ON,
						f = n(r.targetEdit),
						d = n(r.targetEditOuterContainer),
						p = n(r.rootContainer),
						g = t.get("translator/messageBox_clickHint", "Click on a word to get alternative formulations."),
						h = new _(g),
						v = 10,
						m = c.
					default.persistentValue("clickOnWordHint.hintBoxShownCounter", 0),
						y = c.
					default.persistentValue("clickOnWordHint.hintBoxDisabled", !1),
						T = c.
					default.persistentValue("LMT_MessageBox.messageBoxes", void 0),
						S = T();
					if (S && S.hasOwnProperty("clickHint")) {
						if (S.clickHint.hasOwnProperty("displayCount")) parseInt(S.clickHint.displayCount, 10) >= v && y(!0);
						delete S.clickHint, T(JSON.parse(JSON.stringify(S)))
					}
					var b = new a("clickOnWordHint", "classicHintBox");

					function E() {
						var e = f.offset(),
							t = f.outerWidth(),
							n = d.outerHeight();
						e.top += n - 12, e.left += t / 2 - 125, h.setOffset(e), p.hasClass("lmt--showing_alternatives") && h.hide()
					}
					function w() {
						var e = i.getSourceText(),
							t = s.getActiveLangContext();
						return !G[j]() && t.isSmartTargetEditingAvailable(), !y() && m() < v && e.length > 50 && f.val().length > 0 && !o.isPopupOpen() && /[.!?:]\s*$/.test(e) && !p.hasClass("lmt--showing_alternatives") && !n(".lmt__language_select.lmt__language_select--open").length && !n(".lmt__edit_text_popup--initial_alternatives").length
					}
					function x() {
						h.isHidden() && w() && (m(m() + 1), b.incrementCounter("hintBoxShown"), E(), h.show())
					}
					n(window).on("resize", function() {
						h.isHidden() || (h.hide(), c.
					default.setTimeout_consolidated("showHintBoxAfterResizeTimeout", function() {
							E(), h.show()
						}, 600))
					}), u(l.ON__CLICK_TARGET_SENTENCE, function() {
						h.hide()
					}), u(l.ON__INITIAL_SOURCE_TRANSLATION_UPDATED, function() {
						h.isHidden() && w() ? c.
					default.setTimeout_consolidated("clickWordHintBoxTimeoutToShow", x, 5e3):
						h.hide()
					}), u(l.ON__USER_EDIT_PERFORMED, function(e) {
						"EDIT_TYPE__SELECT_ALTERNATIVE" === e.type && b.incrementCounter("alternativeChosen")
					}), u(l.ON__TARGET_POPUP_OPENED, function(e) {
						e[se] && e[se].length > 1 && "alternatives" === e[ce] && (b.incrementCounter("alternativesShown"), !y() && b.trackEvent("hintBoxDisabled", !0), y(!0), h.hide())
					}), u(l.ON__LANGUAGE_SELECT_OPENED, function() {
						h.hide(250)
					})
				}), s.features.defineFeature_lazy("ClickOnWordHint", ["eventHandling", "core/localizedTexts", "core/domElements", "smartTargetEditing", "ABTestController_clickOnWordHint", "core/textareas"], function(e, t, r, o, a, s) {
					var u = e.on,
						l = e.ON,
						f = n(r.targetEdit),
						d = n(r.rootContainer),
						p = t.get("translator/messageBox_clickHint", "Click on a word to get alternative formulations."),
						g = new _(p),
						h = g.getBoxSize(),
						v = 10,
						m = 5,
						y = 2,
						T = 51,
						S = 1,
						b = /[.!?:]\s*$/,
						E = c.
					default.persistentValue("clickOnWordHint.hintBoxDisabled", !1),
						w = c.
					default.persistentValue("clickOnWordHint.hintBoxShownCounter", 0),
						x = c.
					default.persistentValue("clickOnWordHint.alternativesShownCounter", 0),
						C = c.
					default.persistentValue("clickOnWordHint.alternativeChosenCounter", 0);
					c.
				default.withValue([w, x, C], function() {
						!E() && (w() >= v || x() >= m || C() >= y) && (E(!0), A.trackEvent("hintBoxDisabled", !0))
					});
					var A = new a("clickOnWordHint", "hintBoxBelowText");

					function O() {
						var e, t, r, o, a, i, s;
						r = parseInt(f.css("padding-top"), 10), o = R(), a = f.height() + r > o + h.height, i = parseInt(f.css("padding-left"), 10), s = n(window).width() > f.offset().left + i + h.width + 10, a && s && (g.setOffset((e = f.offset().top + R(), t = f.offset().left + parseInt(f.css("padding-left"), 10), {
							top: e,
							left: t
						})), g.show())
					}
					function L() {
						var e = s.getSourceText(),
							t = s.getTargetText();
						return g.isHidden() && !G[j]() && !o.isPopupOpen() && !E() && e.length > T && t.length > S && b.test(e) && !d.hasClass("lmt--showing_alternatives") && !n(".lmt__language_select.lmt__language_select--open").length && !n(".lmt__edit_text_popup--initial_alternatives").length
					}
					function R() {
						var e = i.
					default.getTextareaPixelOffsetForCursorOffset(f, 1e6, !1),
							t = window.getComputedStyle(f.get(0)),
							n = parseInt(t.getPropertyValue("line-height"), 10);
						return e.top + n
					}
					function N() {
						L() && (w(w() + 1), A.incrementCounter("hintBoxShown"), O())
					}
					n(window).on("resize", function() {
						g.isHidden() || (g.hide(), c.
					default.setTimeout_consolidated("showHintBoxAfterResizeTimeout", O, 600))
					}), u(l.ON__CLICK_TARGET_SENTENCE, function() {
						g.hide()
					}), u(l.ON__INITIAL_SOURCE_TRANSLATION_UPDATED, function() {
						L() ? c.
					default.setTimeout_consolidated("showHintBoxTimeout", N, 3e3):
						g.hide()
					}), u(l.ON__USER_EDIT_PERFORMED, function(e) {
						"EDIT_TYPE__SELECT_ALTERNATIVE" === e.type && (C(C() + 1), A.incrementCounter("alternativeChosen"))
					}), u(l.ON__TARGET_POPUP_OPENED, function(e) {
						"alternatives" === e[ce] && e[se] && e[se].length > 1 && (g.hide(), x(x() + 1), A.incrementCounter("alternativesShown"))
					}), u(l.ON__LANGUAGE_SELECT_OPENED, g.hide)
				}), s.features.define("featureInterface", ["webTranslatorCore", "eventHandling"], function(e, t) {
					var n = t.on,
						r = t.ON,
						o = {
							getFirstTargetSentence: function() {
								return (e.getActiveLangContext() && e.getActiveLangContext().targetSentences[0] && e.getActiveLangContext().targetSentences[0].getText() || "").trim()
							},
							isPro: w,
							isSourceTextEmpty: e.sourceIsEmpty,
							onAnyclick: c.
						default.createMultiProcedure(),
							getTargetSentences:


							function() {
								return e.getActiveLangContext() ? e.getActiveLangContext().targetSentences : []
							}
						};
					return n(r.ON__ANYCLICK, function(e, t) {
						o.onAnyclick(e, t)
					}), o
				}), s.features.define("publicInterface", ["webTranslatorCore", "eventHandling", "core/requestHandling", "core/languageManagement", "core/textareas", "common/translationsAsText"], function(e, t, n, r, o, a) {
					var i = t.ON,
						u = t.on;

					function l() {
						var e = r.getActiveLangContext();
						return {
							sourceLang: (e.getSourceLang() || "").toLowerCase(),
							selectedSourceLang: r.getSelectedSourceLang().toLowerCase(),
							targetLang: (e.getTargetLang() || r.getSelectedTargetLang()).toLowerCase()
						}
					}
					var f = {
						onSourceTextEmpty: c.
					default.createMultiProcedure(),
						onSourceTextChanged:
						c.
					default.createMultiProcedure(),
						onTranslationReady:
						c.
					default.createMultiProcedure(),
						onLangChanged:
						c.
					default.createMultiProcedure(),
						onUserEvent:
						c.
					default.createMultiProcedure(),
						hasPendingRequests:
						n.hasPendingRequests,
						getLangInfo: l,
						getSourceLang: function() {
							return l().sourceLang
						},
						getSelectedSourceLang: function() {
							return l().selectedSourceLang
						},
						setSelectedSourceLang: function(e) {
							var t = e.toUpperCase();
							r.setUserSelectedSourceLang("AUTO" === t ? "auto" : t)
						},
						setSourceLang: function(e) {
							console.warn("Deprecated! Please use setSelectedSourceLang(...); then pushPreferredLang(...); instead"), f.selectSourceLang(e)
						},
						getTargetLang: function() {
							return l().targetLang
						},
						setTargetLang: function(e) {
							r.setSelectedTargetLang(e.toUpperCase())
						},
						getTargetText: function() {
							return o.getTargetText()
						},
						getSourceText: function() {
							return o.getSourceText()
						},
						setSourceText: function(e) {
							r.getActiveLangContext().clearSentences(), o.setTargetTextExplicitly("", "internal"), a.clear(), o.updateSourceText(e)
						},
						getPreferredLangs: function() {
							return r.getPreferredLangs().map(function(e) {
								return e.toLowerCase()
							})
						},
						pushPreferredLang: function(e) {
							r.pushPreferredLang(e.toUpperCase())
						},
						notify: L
					};
					u(i.ON__TRANSLATION_READY, function(e) {
						f.onTranslationReady(e)
					}), u(i.ON__SOURCE_TEXT_EMPTY, function() {
						f.onSourceTextEmpty()
					}), o.onSourceTextChanged.push(function(e, t) {
						return f.onSourceTextChanged()
					}), u(i.ON__USER_EVENT, f.onUserEvent);
					var d = c.
				default.value();
					return c.
				default.withValue([s._selectedSourceLang, s.sourceLang, s.targetLang, s._selectedTargetLang], function(e) {
						d(JSON.stringify(l()))
					}), d.onValueChanged.push(function() {
						f.onLangChanged(l())
					}), e.publicInterface = f, f
				})
			},
			initTargetEditToolbar: function(e) {
				e.features.define("TargetToolbar", ["featureInterface", "core/localizedTexts", "core/domElements"], function(e, t, r) {
					var o, a = (o = T.createNode({
						type: "lmt_targetToolbar__container",
						isVisible: c.
					default.computedValue(e.isSourceTextEmpty, function(e) {
							return !e
						})
					}), r.targetEditOuterContainer.appendChild(o), setTimeout(function() {
						m.initTooltips(o), e.onAnyclick.push(m.closeAllTooltips)
					}), {
						$toolbar: n(o),
						toolbarNode: o
					}),
						u = T.createNode({
							type: "lmt_targetToolbar__copyButton",
							doCopy: function() {
								i.
							default.copyTextFromInputElement(r.$targetEdit).then(function() {
									s.
								default.show({
										target: n(u),
										content: t.get("translator/copyText.feedback", "Text has been copied"),
										timeout: 1e3
									})
								}, function(e) {
									console.warn("Could no write to clipboard.", e)
								})
							}
						});
					return a.toolbarNode.appendChild(u), a
				}), e.features.define("TargetToolbar_shareButton", ["TargetToolbar", "webTranslatorCore", "core/localizedTexts", "eventHandling", "share", "core/requestHandling"], function(e, t, r, o, u, l) {
					var f = !1,
						d = "[TargetToolbar_shareButton]",
						p = c.
					default.createCallOnce(),
						h = c.
					default.value(!1),
						_ = T.createNode({
							type: "lmt_targetToolbar__shareButton",
							menuIsOpen: h,
							doToggleMenu: function() {
								h() ? p() : l.hasPendingRequests() ? s.
							default.show({
									target: v,
									content: r.get("translator/toolbar.waitForRequestsFeedback", "Please wait for all requests to finish."),
									timeout: 1e3,
									class: "lmt__feedback_message--warn"
								}):
								M.requireAsync(["Shariff"], function(e) {
									var o = u.createTextURL(t.getActiveLangContext(), u.targetTextHasBeenAltered(t.getActiveLangContext())),
										s = o[0];
									f && console.log(d, "Open share menu. URL: ", s, s.length, o[1]);
									var c = n("<div><h2>" + r.get("translator/shareMenu.headline", "share") + "</h2><label>" + r.get("translator/shareMenu.urlToShare", "URL to share") + "</label><input type='text' /><div class='lmt__target_toolbar__copy_link'><button>" + r.get("translator/shareMenu.copyUrlButton", "copy URL") + "</button></div></div>");
									o[1] && c.append("<div class='lmt__target_toolbar__share_shortened_hint'>" + r.get("translator/shareMenu.textShortendHint", "Note: Only short texts can be shared directly. Only the first sentences will be included.") + "</div>"), c.append("<div class='lmt__target_toolbar__share_buttons'></div>").appendTo(v), c.find(".lmt__target_toolbar__copy_link button").click(function() {
										i.
									default.copyTextFromInputElement(c.find("input"))
									}), c.find("input").on("click", function() {
										n(this).focus().get(0).select()
									}).val(s), new e(c.find(".lmt__target_toolbar__share_buttons"), {
										backendUrl: null,
										lang: a.il.toLowerCase().substr(0, 2),
										mailBody: o[2] + "\n \n " + r.get("translator/share.mailBody", "Translated with www.DeepL.com/translator") + "\n {url}",
										mailSubject: r.get("translator/share.mailSubject", "Translation via DeepL Translator"),
										mailUrl: "mailto:",
										title: o[2] + "\n",
										theme: "normal",
										url: s,
										orientation: "horizontal",
										services: ["twitter", "facebook", "mail"]
									}), h(!0), p.push(function() {
										c.remove(), h(!1)
									}), m.initTooltips(c)
								})
							}
						}),
						v = n(_);
					c.
				default.withValue(h, function(e) {
						return e || p()
					}), e.toolbarNode.appendChild(_), o.on(o.ON.ON__ACTIVE_ELEMENT_CHANGED, function(e) {
						e.closest(".lmt__target_toolbar__share,.lmt__mobile_share_container").length || p()
					}), o.on(o.ON.ON__ANYCLICK, function(e) {
						e.closest(".lmt__target_toolbar__share,.lmt__mobile_share_container button,.lmt__mobile_share_container > div").length || p()
					});
					var y = n("<div class='lmt__mobile_share_container lmt__mobile_share_container--inactive'></div>").appendTo(n(".lmt__sides_container")),
						S = n("<button title='" + r.get("translator/share.tooltip", "share translation") + "'></button>").appendTo(y);

					function b() {
						l.hasPendingRequests() || t.sourceIsEmpty() ? y.addClass("lmt__mobile_share_container--inactive") : y.removeClass("lmt__mobile_share_container--inactive")
					}
					l.hasPendingRequests.onValueChanged.push(b), t.sourceIsEmpty.onValueChanged.push(b), S.click(function() {
						if (navigator.share) {
							if (l.hasPendingRequests() || t.sourceIsEmpty()) return;
							g && g(d, "Use share api");
							var e = u.createTextURL(t.getActiveLangContext(), u.targetTextHasBeenAltered(t.getActiveLangContext()));
							navigator.share({
								title: r.get("translator/share.mailSubject", "Translation via DeepL Translator"),
								text: e[2],
								url: e[0]
							})
						} else M.requireAsync(["Shariff"], function(e) {
							if (y.hasClass("lmt__mobile_share_container--open")) p();
							else {
								if (l.hasPendingRequests() || t.sourceIsEmpty()) return;
								var o = u.createTextURL(t.getActiveLangContext(), u.targetTextHasBeenAltered(t.getActiveLangContext())),
									i = o[0];
								f && console.log(d, "Open mobile share menu. URL: ", i, i.length, o[1]);
								var s = n("<div><h2>" + r.get("translator/shareMenu.headline", "Share") + "</h2></div>");
								o[1] && s.append("<div class='lmt__target_toolbar__share_shortened_hint'>" + r.get("translator/shareMenu.textShortendHint", "Note: Only short texts can be shared directly. Only the first sentences will be included.") + "</div>");
								var c = n("<div class='lmt__mobile_share_container__share_buttons'></div>").appendTo(s);
								s.appendTo(y), new e(c, {
									backendUrl: null,
									lang: a.il.toLowerCase().substr(0, 2),
									mailBody: o[2] + "\n \n " + r.get("translator/share.mailBody", "Translated with www.DeepL.com/translator") + "\n {url}",
									mailSubject: r.get("translator/share.mailSubject", "Translation via DeepL Translator"),
									mailUrl: "mailto:",
									title: o[2] + "\n",
									theme: "normal",
									url: i,
									orientation: "horizontal",
									services: ["twitter", "facebook", "whatsapp", "mail"]
								}), setTimeout(function() {
									y.addClass("lmt__mobile_share_container--open")
								}), p.push(function() {
									g(d, "closing menu"), s.remove(), y.removeClass("lmt__mobile_share_container--open")
								})
							}
						})
					}), n(".lmt__mobile_share_container").click(function() {
						y.hasClass("lmt__mobile_share_container--open") && p()
					})
				}), !p.isIPad && e.features.define("TargetToolbar_downloadButton", ["TargetToolbar", "publicInterface", "featureInterface", "core/localizedTexts", "eventHandling", "core/requestHandling", "common/addTranslatedByFooter"], function(e, t, r, o, i, l, f) {
					var d = "[FileSave]";

					function p(e, n) {
						return new Promise(function(o, a) {
							M.requireAsync(["FileSaver_saveAs"], function(a) {
								var i, s = n || ".txt",
									c = e;
								if (!c) {
									c = "DeepL_" + t.getSourceLang() + "-" + t.getTargetLang() + "_";
									var l = r.getFirstTargetSentence();
									if (l) {
										if (l.length > 32) {
											var p = l.indexOf(" ", 24);
											l = p > 0 && p <= 32 ? l.substr(0, p) + " …" : l.substr(0, 32) + "…"
										}(l = l.trim().replace(/[~"#%&*:<>?\/\\{|}.]/g, "_")).length && (c += "(" + l + ")")
									}
									c += "." + s
								}
								if ("tmx" === s) {
									var h = [];
									r.getTargetSentences().forEach(function(e) {
										var t = e.getSourceSentence();
										h.push(t.getNormalizedText() + "->\n" + e.getNormalizedText())
									}), i = h.join("\n");
									var _, v, m = t.getSourceLang(),
										y = t.getTargetLang(),
										T = [{
											meta: "xml",
											attr: {
												version: "1.0",
												encoding: "utf-8"
											}
										}, {
											tag: "tmx",
											attr: {
												version: "1.4"
											},
											content: [{
												tag: "header",
												attr: {
													creationtool: "DeepL Translator",
													creationtoolversion: "20190507",
													datatype: "plaintext",
													segtype: "sentence",
													adminlang: "en-GB",
													srclang: m
												}
											}, {
												tag: "body",
												content: r.getTargetSentences().map(function(e, t) {
													var n = e.getSourceSentence(),
														r = {
															tag: "tu",
															attr: {
																tuid: t
															},
															content: [ !! _ && {
																tag: "prop",
																attr: {
																	type: "x-ContextContent"
																},
																content: _.replace(/[|]/g, "||") + " |  | " + v.replace(/[|]/g, "||") + " | "
															}, {
																tag: "tuv",
																attr: {
																	"xml:lang": m
																},
																content: {
																	tag: "seg",
																	content: n.getNormalizedText()
																}
															}, {
																tag: "tuv",
																attr: {
																	"xml:lang": y
																},
																content: {
																	tag: "seg",
																	content: e.getNormalizedText()
																}
															}]
														};
													return _ = n.getNormalizedText(), v = e.getNormalizedText(), r
												})
											}]
										}];
									i = u.
								default.toXML(T)
								} else(i = t.getTargetText()).trim().length && !r.isPro && (i += "\n\n" + f.getFooterText(t.getTargetLang())), (navigator.platform || "").toLowerCase().indexOf("win") >= 0 && (g(d, "Use windows line breaks."), i = i.replace(/\n/g, "\r\n"));
								console.log(d, "Save text as ", c), a(new Blob([i], {
									type: "text/plain;charset=utf-8"
								}), c), o(c)
							})
						})
					}
					return window._download = p, function() {
						function t(e) {
							p(void 0, e).then(function(e) {
								s.
							default.show({
									target: n(r),
									content: o.get("translator/saveText.successFeedback", "Text file created"),
									timeout: 1e3
								})
							}, function(e) {
								console.error(e)
							})
						}
						var r = T.createNode({
							type: "lmt_targetToolbar__saveButton",
							doSave: function() {
								if (l.hasPendingRequests()) s.
							default.show({
									target: r,
									content: o.get("translator/toolbar.waitForRequestsFeedback", "Please wait for all requests to finish"),
									timeout: 1e3,
									class: "lmt__feedback_message--warn"
								});
								else if (a.experimental || -1 !== window.location.href.indexOf("beta.deepl.com")) {
									var e = n("<div class='lmt__target_toolbar__save_popup'></div>");
									n("<button>.txt</button>").on("click", function() {
										return t("txt")
									}).appendTo(e), n("<button>.tmx</button>").on("click", function() {
										return t("tmx")
									}).appendTo(e), e.appendTo(n(r));
									var u = c.
								default.createCallOnce();
									u.push(function() {
										return e.remove()
									}), setTimeout(function() {
										return i.on(i.ON.ON__ANYCLICK, function(e) {
											if (!e.closest(".lmt__target_toolbar__save_popup").length) return u(), "REMOVE"
										})
									})
								} else t()
							}
						});
						e.toolbarNode.appendChild(r)
					}(), !0
				}), a.experimental && e.features.define("TargetToolbar_retranslateButton", ["webTranslatorCore", "TargetToolbar", "dev_retranslate"], function(e, t, r) {
					var o = n("<div title='retranslate' class='lmt__target_toolbar__generic' dl-test='translator-target-toolbar-retranslate'></div>");
					n("<button>&#8635;</button>").appendTo(o).click(r), o.appendTo(t.$toolbar)
				}), e.features.defineFeature_lazy("observeFullTextData", ["core/config", "core/translationBackend", "webTranslatorCore", "core/domElements", "core/updateSourceSentences"], function(e, t, n, r, o) {
					var i = "[observeFullTextData]",
						s = e.get("CONFIG__IS_DEV");
					return {
						enable: function() {
							if (!e.get("CONFIG__DATA_USE_ALLOWED") || e.get("CONFIG__IS_PRO")) return console.error(i, "invalid"), !1;
							s && console.log(i, "Logging!");
							var u = 5e3,
								l = c.
							default.executeOnlyLatestWhenDoneProcedure(),
								f = "";

							function d() {
								l(function(e) {
									s && console.log(i, "start"), setTimeout(function() {
										var o, c = {
											type: "sourceText",
											lang: {
												source: (o = n.getActiveLangContext()).getSourceLang(),
												target: o.getTargetLang(),
												selectedSource: n.getSelectedSourceLang(),
												selectedTarget: n.getSelectedTargetLang(),
												interface: (a.il || "").toUpperCase()
											},
											sourceText: (r.sourceEdit.value || "").substr(0, 5e3)
										};
										f !== c.sourceText && c.sourceText.trim() ? (s && console.log(i, "Send...", c), t.sendAdditionalData(c).then(function() {
											s && console.log(i, "...done"), f = c.sourceText, e()
										}, function(t) {
											console.warn(t), s && console.log(i, "...failed"), e()
										})) : (s && console.log(i, "skip"), e())
									}, u)
								})
							}
							o.onSourceSentencesChanged.push(function(e) {
								return d()
							})
						}
					}
				})
			},
			initNativeAppFeatures: function(e) {
				e.features.define("AppPrivacy", ["core/translationBackend", "core/languageManagement"], function(e, t) {
					var n = c.
				default.persistentValue("appPrivacy.doNotSave", !1);

					function r(e) {
						e.setTranslationJobParams("AppPrivacy", {
							do_not_save: !0
						})
					}
					var o = c.
				default.createCallOnce();
					return c.
				default.withValue([n], function(e) {
						e ? (t.doPrepareNewLangContext.push(r), o.push(function() {
							return t.doPrepareNewLangContext.remove(r)
						}), r(t.getActiveLangContext())) : o()
					}), n
				}), e.features.define("DelayNoPro", ["core/domElements", "webTranslatorCore", "core/translationBackend", "eventHandling"], function(e, t, n, r) {
					var a = n.lmtBackends,
						i = n.doFinalizeJobRequestParameters,
						s = ["lmt__source_textarea", "lmt__clear_text_button", "lmt__target_textarea"],
						u = c.
					default.createCallOnce(),
						l = a.translation(),
						f = !1,
						d = c.
					default.createCallOnce();

					function p() {
						s.forEach(function(e) {
							Array.from(document.getElementsByClassName(e)).forEach(function(e) {
								return e.disabled = !1
							})
						}), d()
					}
					function g(t) {
						if (u(), t && t.data && t.data.responseData) {
							var n = t.data.responseData,
								a = c.
							default.value(n.timeout),
								g = n.key,
								h = function(e) {
									return e.key = g
								};
							i.push(h), d.push(function() {
								return i.remove(h)
							});
							var v = T.createNode({
								type: "lmt_app_delay",
								placeholders: {
									seconds: a
								}
							}),
								m = v.querySelector(".lmt__app_delay_no_pro_notification__footer > a");
							m && (m.onclick = function(e) {
								e.preventDefault(), S.send({
									dryRun: o.dev_block_app,
									category: "app",
									action: "appDelayGoProClicked",
									label: "windows",
									value: 1
								}), r.notify(r.ON.ON__USER_EVENT, {
									type: "userRequestsProPage",
									context: "appDelay"
								})
							}), s.forEach(function(e) {
								Array.from(document.getElementsByClassName(e)).forEach(function(e) {
									return e.disabled = !0
								})
							}), e.rootContainer.appendChild(v);
							!
							function e() {
								setTimeout(function() {
									a() > 1 && (a(a() - 1), e())
								}, 1e3)
							}(), u.push(function() {
								e.rootContainer.removeChild(v)
							}), S.send({
								dryRun: o.dev_block_app,
								category: "app",
								action: "showAppDelayNotification",
								label: "windows",
								value: 1
							})
						}
						if (l.onRequestSucceeded.push(function(e) {
							if ("translation" === e) return p(), u(), "REMOVE"
						}), o.dev_block_app) {
							var y = window.location.toString().replace(/(?:\?dev_block_app=[^&]+$)|(dev_block_app=[^&]+&)|(&dev_block_app=[^&]+)/, "");
							window.history.replaceState({}, window.title, y)
						}
						f && _()
					}
					function h(e) {
						l.rpcConfig || (l.rpcConfig = {}), l.rpcConfig.queryParams || (l.rpcConfig.queryParams = {}), l.rpcConfig.queryParams["x-simulate-app-usage-timeout"] = e, f = !0, console.log("simulating delay for ".concat(e, " seconds"))
					}
					function _() {
						delete l.rpcConfig.queryParams["x-simulate-app-usage-timeout"], f = !1
					}
					if (o.dev_block_app) {
						var v = parseFloat(o.dev_block_app, 10) || 0;
						v > 0 && h("" + v)
					}
					return l.onRequestFailed.push(function(e, t) {
						"translation" === e && 1042910 === t.code && g(t)
					}), {
						showDelayNotification: g,
						finishAppBlock: p,
						removeDelayNotification: u,
						enableDelaySimulation: h,
						removeDelaySimulation: _
					}
				}), e.features.define("AppUsageStats", ["eventHandling", "core/languageManagement"], function(e, t) {
					var n = c.
				default.persistentValue("appUsageStats.days", 0),
						r = c.
					default.persistentValue("appUsageStats.lastDay", !1);
					return r.onValueChanged.push(function() {
						return n(n() + 1)
					}), e.on(e.ON.ON__TRANSLATION_READY, function() {
						return r((new Date).toISOString().substring(0, 10))
					}), t.doPrepareNewLangContext.push(function(e) {
						e.setTranslationRequestParams("AppUsageStats", {
							apps: {
								usage: n()
							}
						})
					}), {
						usageDays: n,
						lastUsageDay: r
					}
				}), e.features.define("AppTargetLangMenuSizeFixer", ["eventHandling", "core/domElements"], function(e, t) {
					e.on(e.ON.ON__LANGUAGE_SELECT_OPENED, function(e, r) {
						if ("target" === e) {
							var o = n(t.targetSideContainer).outerHeight() - n(r).height() - 5;
							n(r).find(".lmt__language_select__menu").css({
								"overflow-y": "auto",
								"max-height": o + "px"
							})
						}
					})
				})
			}
		}
	})
}]);