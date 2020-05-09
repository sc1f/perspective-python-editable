"use strict";

require("core-js/modules/es.string.replace");

require("core-js/modules/es.typed-array.float32-array");

require("core-js/modules/es.typed-array.float64-array");

require("core-js/modules/es.typed-array.int8-array");

require("core-js/modules/es.typed-array.int16-array");

require("core-js/modules/es.typed-array.int32-array");

require("core-js/modules/es.typed-array.uint8-array");

require("core-js/modules/es.typed-array.uint8-clamped-array");

require("core-js/modules/es.typed-array.uint16-array");

require("core-js/modules/es.typed-array.uint32-array");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var load_perspective = function () {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;

  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return function (load_perspective) {
    load_perspective = load_perspective || {};
    var e;
    e || (e = typeof load_perspective !== 'undefined' ? load_perspective : {});
    var aa = {},
        r;

    for (r in e) e.hasOwnProperty(r) && (aa[r] = e[r]);

    var ba = [],
        ca = "./this.program";

    function da(a, b) {
      throw b;
    }

    var ea = !1,
        u = !1,
        fa = !1,
        ha = !1;
    ea = "object" === typeof window;
    u = "function" === typeof importScripts;
    fa = "object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node;
    ha = !ea && !fa && !u;
    var x = "",
        ia,
        ja,
        ka,
        la;
    if (fa) x = u ? require("path").dirname(x) + "/" : __dirname + "/", ia = function (a, b) {
      ka || (ka = require("fs"));
      la || (la = require("path"));
      a = la.normalize(a);
      return ka.readFileSync(a, b ? null : "utf8");
    }, ja = function (a) {
      a = ia(a, !0);
      a.buffer || (a = new Uint8Array(a));
      assert(a.buffer);
      return a;
    }, 1 < process.argv.length && (ca = process.argv[1].replace(/\\/g, "/")), ba = process.argv.slice(2), process.on("uncaughtException", function (a) {
      if (!(a instanceof ma)) throw a;
    }), process.on("unhandledRejection", na), da = function (a) {
      process.exit(a);
    }, e.inspect = function () {
      return "[Emscripten Module object]";
    };else if (ha) "undefined" != typeof read && (ia = function (a) {
      return read(a);
    }), ja = function (a) {
      if ("function" === typeof readbuffer) return new Uint8Array(readbuffer(a));
      a = read(a, "binary");
      assert("object" === typeof a);
      return a;
    }, "undefined" != typeof scriptArgs ? ba = scriptArgs : "undefined" != typeof arguments && (ba = arguments), "function" === typeof quit && (da = function (a) {
      quit(a);
    }), "undefined" !== typeof print && ("undefined" === typeof console && (console = {}), console.log = print, console.warn = console.error = "undefined" !== typeof printErr ? printErr : print);else if (ea || u) u ? x = self.location.href : document.currentScript && (x = document.currentScript.src), _scriptDir && (x = _scriptDir), 0 !== x.indexOf("blob:") ? x = x.substr(0, x.lastIndexOf("/") + 1) : x = "", ia = function (a) {
      var b = new XMLHttpRequest();
      b.open("GET", a, !1);
      b.send(null);
      return b.responseText;
    }, u && (ja = function (a) {
      var b = new XMLHttpRequest();
      b.open("GET", a, !1);
      b.responseType = "arraybuffer";
      b.send(null);
      return new Uint8Array(b.response);
    });
    var oa = e.print || console.log.bind(console),
        y = e.printErr || console.warn.bind(console);

    for (r in aa) aa.hasOwnProperty(r) && (e[r] = aa[r]);

    aa = null;
    e.arguments && (ba = e.arguments);
    e.thisProgram && (ca = e.thisProgram);
    e.quit && (da = e.quit);
    var pa;
    e.wasmBinary && (pa = e.wasmBinary);
    var noExitRuntime;
    e.noExitRuntime && (noExitRuntime = e.noExitRuntime);
    "object" !== typeof WebAssembly && y("no native wasm support detected");
    var A,
        qa = new WebAssembly.Table({
      initial: 2324,
      maximum: 2324,
      element: "anyfunc"
    }),
        ra = !1;

    function assert(a, b) {
      a || na("Assertion failed: " + b);
    }

    var sa = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;

    function ta(a, b, c) {
      b >>>= 0;
      var d = b + c;

      for (c = b; a[c >>> 0] && !(c >= d);) ++c;

      if (16 < c - b && a.subarray && sa) return sa.decode(a.subarray(b >>> 0, c >>> 0));

      for (d = ""; b < c;) {
        var f = a[b++ >>> 0];

        if (f & 128) {
          var g = a[b++ >>> 0] & 63;
          if (192 == (f & 224)) d += String.fromCharCode((f & 31) << 6 | g);else {
            var l = a[b++ >>> 0] & 63;
            f = 224 == (f & 240) ? (f & 15) << 12 | g << 6 | l : (f & 7) << 18 | g << 12 | l << 6 | a[b++ >>> 0] & 63;
            65536 > f ? d += String.fromCharCode(f) : (f -= 65536, d += String.fromCharCode(55296 | f >> 10, 56320 | f & 1023));
          }
        } else d += String.fromCharCode(f);
      }

      return d;
    }

    function ua(a) {
      return (a >>>= 0) ? ta(B, a, void 0) : "";
    }

    function va(a, b, c, d) {
      c >>>= 0;

      if (0 < d) {
        d = c + d - 1;

        for (var f = 0; f < a.length; ++f) {
          var g = a.charCodeAt(f);

          if (55296 <= g && 57343 >= g) {
            var l = a.charCodeAt(++f);
            g = 65536 + ((g & 1023) << 10) | l & 1023;
          }

          if (127 >= g) {
            if (c >= d) break;
            b[c++ >>> 0] = g;
          } else {
            if (2047 >= g) {
              if (c + 1 >= d) break;
              b[c++ >>> 0] = 192 | g >> 6;
            } else {
              if (65535 >= g) {
                if (c + 2 >= d) break;
                b[c++ >>> 0] = 224 | g >> 12;
              } else {
                if (c + 3 >= d) break;
                b[c++ >>> 0] = 240 | g >> 18;
                b[c++ >>> 0] = 128 | g >> 12 & 63;
              }

              b[c++ >>> 0] = 128 | g >> 6 & 63;
            }

            b[c++ >>> 0] = 128 | g & 63;
          }
        }

        b[c >>> 0] = 0;
      }
    }

    function wa(a) {
      for (var b = 0, c = 0; c < a.length; ++c) {
        var d = a.charCodeAt(c);
        55296 <= d && 57343 >= d && (d = 65536 + ((d & 1023) << 10) | a.charCodeAt(++c) & 1023);
        127 >= d ? ++b : b = 2047 >= d ? b + 2 : 65535 >= d ? b + 3 : b + 4;
      }

      return b;
    }

    var xa = "undefined" !== typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;

    function ya(a) {
      var b;

      for (b = a >> 1; C[b >>> 0];) ++b;

      b <<= 1;
      if (32 < b - a && xa) return xa.decode(B.subarray(a >>> 0, b >>> 0));
      b = 0;

      for (var c = "";;) {
        var d = C[a + 2 * b >> 1 >>> 0];
        if (0 == d) return c;
        ++b;
        c += String.fromCharCode(d);
      }
    }

    function za(a, b, c) {
      void 0 === c && (c = 2147483647);
      if (2 > c) return 0;
      c -= 2;
      var d = b;
      c = c < 2 * a.length ? c / 2 : a.length;

      for (var f = 0; f < c; ++f) C[b >> 1 >>> 0] = a.charCodeAt(f), b += 2;

      C[b >> 1 >>> 0] = 0;
      return b - d;
    }

    function Aa(a) {
      return 2 * a.length;
    }

    function Ba(a) {
      for (var b = 0, c = "";;) {
        var d = D[a + 4 * b >> 2 >>> 0];
        if (0 == d) return c;
        ++b;
        65536 <= d ? (d -= 65536, c += String.fromCharCode(55296 | d >> 10, 56320 | d & 1023)) : c += String.fromCharCode(d);
      }
    }

    function Ca(a, b, c) {
      b >>>= 0;
      void 0 === c && (c = 2147483647);
      if (4 > c) return 0;
      var d = b;
      c = d + c - 4;

      for (var f = 0; f < a.length; ++f) {
        var g = a.charCodeAt(f);

        if (55296 <= g && 57343 >= g) {
          var l = a.charCodeAt(++f);
          g = 65536 + ((g & 1023) << 10) | l & 1023;
        }

        D[b >> 2 >>> 0] = g;
        b += 4;
        if (b + 4 > c) break;
      }

      D[b >> 2 >>> 0] = 0;
      return b - d;
    }

    function Da(a) {
      for (var b = 0, c = 0; c < a.length; ++c) {
        var d = a.charCodeAt(c);
        55296 <= d && 57343 >= d && ++c;
        b += 4;
      }

      return b;
    }

    function Ea(a) {
      var b = wa(a) + 1,
          c = Fa(b);
      va(a, E, c, b);
      return c;
    }

    var F, E, B, C, Ga, D, G, Ha, Ia;

    function Ja(a) {
      F = a;
      e.HEAP8 = E = new Int8Array(a);
      e.HEAP16 = C = new Int16Array(a);
      e.HEAP32 = D = new Int32Array(a);
      e.HEAPU8 = B = new Uint8Array(a);
      e.HEAPU16 = Ga = new Uint16Array(a);
      e.HEAPU32 = G = new Uint32Array(a);
      e.HEAPF32 = Ha = new Float32Array(a);
      e.HEAPF64 = Ia = new Float64Array(a);
    }

    var Ka = e.INITIAL_MEMORY || 16777216;
    e.wasmMemory ? A = e.wasmMemory : A = new WebAssembly.Memory({
      initial: Ka / 65536
    });
    A && (F = A.buffer);
    Ka = F.byteLength;
    Ja(F);
    D[25632] = 5345568;

    function La(a) {
      for (; 0 < a.length;) {
        var b = a.shift();
        if ("function" == typeof b) b(e);else {
          var c = b.S;
          "number" === typeof c ? void 0 === b.F ? e.dynCall_v(c) : e.dynCall_vi(c, b.F) : c(void 0 === b.F ? null : b.F);
        }
      }
    }

    var Ma = [],
        Na = [],
        Oa = [],
        Pa = [],
        Qa = [];

    function Ra() {
      var a = e.preRun.shift();
      Ma.unshift(a);
    }

    var H = 0,
        Sa = null,
        Ta = null;
    e.preloadedImages = {};
    e.preloadedAudios = {};

    function na(a) {
      if (e.onAbort) e.onAbort(a);
      oa(a);
      y(a);
      ra = !0;
      throw new WebAssembly.RuntimeError("abort(" + a + "). Build with -s ASSERTIONS=1 for more info.");
    }

    function Ua() {
      var a = I;
      return String.prototype.startsWith ? a.startsWith("data:application/octet-stream;base64,") : 0 === a.indexOf("data:application/octet-stream;base64,");
    }

    var I = "psp.async.wasm";

    if (!Ua()) {
      var Va = I;
      I = e.locateFile ? e.locateFile(Va, x) : x + Va;
    }

    function Wa() {
      try {
        if (pa) return new Uint8Array(pa);
        if (ja) return ja(I);
        throw "both async and sync fetching of the wasm failed";
      } catch (a) {
        na(a);
      }
    }

    function Xa() {
      return pa || !ea && !u || "function" !== typeof fetch ? new Promise(function (a) {
        a(Wa());
      }) : fetch(I, {
        credentials: "same-origin"
      }).then(function (a) {
        if (!a.ok) throw "failed to load wasm binary file at '" + I + "'";
        return a.arrayBuffer();
      }).catch(function () {
        return Wa();
      });
    }

    var Ya = {
      56100: function () {
        if ("undefined" !== typeof self) try {
          if (self.dispatchEvent && !self.D && null !== self.document) {
            self.D = !0;
            var a = self.document.createEvent("Event");
            a.initEvent("perspective-ready", !1, !0);
            self.dispatchEvent(a);
          } else !self.document && self.postMessage && self.postMessage({});
        } catch (b) {}
      },
      57346: function () {
        throw Error("abort()");
      }
    };
    Na.push({
      S: function () {
        Za();
      }
    });

    function $a() {
      return 0 < $a.D;
    }

    function ab(a) {
      e.___errno_location && (D[e.___errno_location() >> 2 >>> 0] = a);
    }

    var bb = {},
        cb = [null, [], []],
        db = {},
        eb = {};

    function fb(a) {
      for (; a.length;) {
        var b = a.pop();
        a.pop()(b);
      }
    }

    function gb(a) {
      return this.fromWireType(G[a >>> 2]);
    }

    var K = {},
        L = {},
        hb = {};

    function ib(a) {
      if (void 0 === a) return "_unknown";
      a = a.replace(/[^a-zA-Z0-9_]/g, "$");
      var b = a.charCodeAt(0);
      return 48 <= b && 57 >= b ? "_" + a : a;
    }

    function jb(a, b) {
      a = ib(a);
      return new Function("body", "return function " + a + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(b);
    }

    function kb(a) {
      var b = Error,
          c = jb(a, function (d) {
        this.name = a;
        this.message = d;
        d = Error(d).stack;
        void 0 !== d && (this.stack = this.toString() + "\n" + d.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      c.prototype = Object.create(b.prototype);
      c.prototype.constructor = c;

      c.prototype.toString = function () {
        return void 0 === this.message ? this.name : this.name + ": " + this.message;
      };

      return c;
    }

    var lb = void 0;

    function mb(a) {
      throw new lb(a);
    }

    function M(a, b, c) {
      function d(k) {
        k = c(k);
        k.length !== a.length && mb("Mismatched type converter count");

        for (var n = 0; n < a.length; ++n) N(a[n], k[n]);
      }

      a.forEach(function (k) {
        hb[k] = b;
      });
      var f = Array(b.length),
          g = [],
          l = 0;
      b.forEach(function (k, n) {
        L.hasOwnProperty(k) ? f[n] = L[k] : (g.push(k), K.hasOwnProperty(k) || (K[k] = []), K[k].push(function () {
          f[n] = L[k];
          ++l;
          l === g.length && d(f);
        }));
      });
      0 === g.length && d(f);
    }

    function nb(a) {
      switch (a) {
        case 1:
          return 0;

        case 2:
          return 1;

        case 4:
          return 2;

        case 8:
          return 3;

        default:
          throw new TypeError("Unknown type size: " + a);
      }
    }

    var ob = void 0;

    function O(a) {
      for (var b = ""; B[a >>> 0];) b += ob[B[a++ >>> 0]];

      return b;
    }

    var P = void 0;

    function R(a) {
      throw new P(a);
    }

    function N(a, b, c) {
      c = c || {};
      if (!("argPackAdvance" in b)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var d = b.name;
      a || R('type "' + d + '" must have a positive integer typeid pointer');

      if (L.hasOwnProperty(a)) {
        if (c.da) return;
        R("Cannot register type '" + d + "' twice");
      }

      L[a] = b;
      delete hb[a];
      K.hasOwnProperty(a) && (b = K[a], delete K[a], b.forEach(function (f) {
        f();
      }));
    }

    function pb(a) {
      return {
        count: a.count,
        u: a.u,
        A: a.A,
        c: a.c,
        f: a.f,
        i: a.i,
        l: a.l
      };
    }

    function qb(a) {
      R(a.a.f.b.name + " instance already deleted");
    }

    var rb = !1;

    function sb() {}

    function tb(a) {
      --a.count.value;
      0 === a.count.value && (a.i ? a.l.o(a.i) : a.f.b.o(a.c));
    }

    function ub(a) {
      if ("undefined" === typeof FinalizationGroup) return ub = function (b) {
        return b;
      }, a;
      rb = new FinalizationGroup(function (b) {
        for (var c = b.next(); !c.done; c = b.next()) c = c.value, c.c ? tb(c) : console.warn("object already deleted: " + c.c);
      });

      ub = function (b) {
        rb.register(b, b.a, b.a);
        return b;
      };

      sb = function (b) {
        rb.unregister(b.a);
      };

      return ub(a);
    }

    var vb = void 0,
        wb = [];

    function xb() {
      for (; wb.length;) {
        var a = wb.pop();
        a.a.u = !1;
        a["delete"]();
      }
    }

    function S() {}

    var yb = {};

    function zb(a, b, c) {
      if (void 0 === a[b].g) {
        var d = a[b];

        a[b] = function () {
          a[b].g.hasOwnProperty(arguments.length) || R("Function '" + c + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + a[b].g + ")!");
          return a[b].g[arguments.length].apply(this, arguments);
        };

        a[b].g = [];
        a[b].g[d.G] = d;
      }
    }

    function Ab(a, b, c) {
      e.hasOwnProperty(a) ? ((void 0 === c || void 0 !== e[a].g && void 0 !== e[a].g[c]) && R("Cannot register public name '" + a + "' twice"), zb(e, a, a), e.hasOwnProperty(c) && R("Cannot register multiple overloads of a function with the same number of arguments (" + c + ")!"), e[a].g[c] = b) : (e[a] = b, void 0 !== c && (e[a].ua = c));
    }

    function Bb(a, b, c, d, f, g, l, k) {
      this.name = a;
      this.constructor = b;
      this.v = c;
      this.o = d;
      this.m = f;
      this.Y = g;
      this.C = l;
      this.W = k;
      this.ia = [];
    }

    function Cb(a, b, c) {
      for (; b !== c;) b.C || R("Expected null or instance of " + c.name + ", got an instance of " + b.name), a = b.C(a), b = b.m;

      return a;
    }

    function Db(a, b) {
      if (null === b) return this.M && R("null is not a valid " + this.name), 0;
      b.a || R('Cannot pass "' + T(b) + '" as a ' + this.name);
      b.a.c || R("Cannot pass deleted object as a pointer of type " + this.name);
      return Cb(b.a.c, b.a.f.b, this.b);
    }

    function Eb(a, b) {
      if (null === b) {
        this.M && R("null is not a valid " + this.name);

        if (this.I) {
          var c = this.N();
          null !== a && a.push(this.o, c);
          return c;
        }

        return 0;
      }

      b.a || R('Cannot pass "' + T(b) + '" as a ' + this.name);
      b.a.c || R("Cannot pass deleted object as a pointer of type " + this.name);
      !this.H && b.a.f.H && R("Cannot convert argument of type " + (b.a.l ? b.a.l.name : b.a.f.name) + " to parameter type " + this.name);
      c = Cb(b.a.c, b.a.f.b, this.b);
      if (this.I) switch (void 0 === b.a.i && R("Passing raw pointer to smart pointer is illegal"), this.na) {
        case 0:
          b.a.l === this ? c = b.a.i : R("Cannot convert argument of type " + (b.a.l ? b.a.l.name : b.a.f.name) + " to parameter type " + this.name);
          break;

        case 1:
          c = b.a.i;
          break;

        case 2:
          if (b.a.l === this) c = b.a.i;else {
            var d = b.clone();
            c = this.ja(c, U(function () {
              d["delete"]();
            }));
            null !== a && a.push(this.o, c);
          }
          break;

        default:
          R("Unsupporting sharing policy");
      }
      return c;
    }

    function Fb(a, b) {
      if (null === b) return this.M && R("null is not a valid " + this.name), 0;
      b.a || R('Cannot pass "' + T(b) + '" as a ' + this.name);
      b.a.c || R("Cannot pass deleted object as a pointer of type " + this.name);
      b.a.f.H && R("Cannot convert argument of type " + b.a.f.name + " to parameter type " + this.name);
      return Cb(b.a.c, b.a.f.b, this.b);
    }

    function Gb(a, b, c) {
      if (b === c) return a;
      if (void 0 === c.m) return null;
      a = Gb(a, b, c.m);
      return null === a ? null : c.W(a);
    }

    var Hb = {};

    function Ib(a, b) {
      for (void 0 === b && R("ptr should not be undefined"); a.m;) b = a.C(b), a = a.m;

      return Hb[b];
    }

    function Jb(a, b) {
      b.f && b.c || mb("makeClassHandle requires ptr and ptrType");
      !!b.l !== !!b.i && mb("Both smartPtrType and smartPtr must be specified");
      b.count = {
        value: 1
      };
      return ub(Object.create(a, {
        a: {
          value: b
        }
      }));
    }

    function V(a, b, c, d, f, g, l, k, n, m, p) {
      this.name = a;
      this.b = b;
      this.M = c;
      this.H = d;
      this.I = f;
      this.ha = g;
      this.na = l;
      this.T = k;
      this.N = n;
      this.ja = m;
      this.o = p;
      f || void 0 !== b.m ? this.toWireType = Eb : (this.toWireType = d ? Db : Fb, this.j = null);
    }

    function Kb(a, b, c) {
      e.hasOwnProperty(a) || mb("Replacing nonexistant public symbol");
      void 0 !== e[a].g && void 0 !== c ? e[a].g[c] = b : (e[a] = b, e[a].G = c);
    }

    function W(a, b) {
      a = O(a);
      var c = e["dynCall_" + a];

      for (var d = [], f = 1; f < a.length; ++f) d.push("a" + f);

      f = "return function dynCall_" + (a + "_" + b) + "(" + d.join(", ") + ") {\n";
      f += "    return dynCall(rawFunction" + (d.length ? ", " : "") + d.join(", ") + ");\n";
      c = new Function("dynCall", "rawFunction", f + "};\n")(c, b);
      "function" !== typeof c && R("unknown function pointer with signature " + a + ": " + b);
      return c;
    }

    var Lb = void 0;

    function Mb(a) {
      a = Nb(a);
      var b = O(a);
      X(a);
      return b;
    }

    function Ob(a, b) {
      function c(g) {
        f[g] || L[g] || (hb[g] ? hb[g].forEach(c) : (d.push(g), f[g] = !0));
      }

      var d = [],
          f = {};
      b.forEach(c);
      throw new Lb(a + ": " + d.map(Mb).join([", "]));
    }

    function Pb(a, b) {
      for (var c = [], d = 0; d < a; d++) c.push(D[(b >> 2) + d >>> 0]);

      return c;
    }

    function Qb(a) {
      var b = Function;
      if (!(b instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof b + " which is not a function");
      var c = jb(b.name || "unknownFunctionName", function () {});
      c.prototype = b.prototype;
      c = new c();
      a = b.apply(c, a);
      return a instanceof Object ? a : c;
    }

    function Rb(a, b, c, d, f) {
      var g = b.length;
      2 > g && R("argTypes array size mismatch! Must at least get return value and 'this' types!");
      var l = null !== b[1] && null !== c,
          k = !1;

      for (c = 1; c < b.length; ++c) if (null !== b[c] && void 0 === b[c].j) {
        k = !0;
        break;
      }

      var n = "void" !== b[0].name,
          m = "",
          p = "";

      for (c = 0; c < g - 2; ++c) m += (0 !== c ? ", " : "") + "arg" + c, p += (0 !== c ? ", " : "") + "arg" + c + "Wired";

      a = "return function " + ib(a) + "(" + m + ") {\nif (arguments.length !== " + (g - 2) + ") {\nthrowBindingError('function " + a + " called with ' + arguments.length + ' arguments, expected " + (g - 2) + " args!');\n}\n";
      k && (a += "var destructors = [];\n");
      var t = k ? "destructors" : "null";
      m = "throwBindingError invoker fn runDestructors retType classParam".split(" ");
      d = [R, d, f, fb, b[0], b[1]];
      l && (a += "var thisWired = classParam.toWireType(" + t + ", this);\n");

      for (c = 0; c < g - 2; ++c) a += "var arg" + c + "Wired = argType" + c + ".toWireType(" + t + ", arg" + c + "); // " + b[c + 2].name + "\n", m.push("argType" + c), d.push(b[c + 2]);

      l && (p = "thisWired" + (0 < p.length ? ", " : "") + p);
      a += (n ? "var rv = " : "") + "invoker(fn" + (0 < p.length ? ", " : "") + p + ");\n";
      if (k) a += "runDestructors(destructors);\n";else for (c = l ? 1 : 2; c < b.length; ++c) g = 1 === c ? "thisWired" : "arg" + (c - 2) + "Wired", null !== b[c].j && (a += g + "_dtor(" + g + "); // " + b[c].name + "\n", m.push(g + "_dtor"), d.push(b[c].j));
      n && (a += "var ret = retType.fromWireType(rv);\nreturn ret;\n");
      m.push(a + "}\n");
      return Qb(m).apply(null, d);
    }

    var Sb = [],
        Y = [{}, {
      value: void 0
    }, {
      value: null
    }, {
      value: !0
    }, {
      value: !1
    }];

    function Tb(a) {
      4 < a && 0 === --Y[a].O && (Y[a] = void 0, Sb.push(a));
    }

    function U(a) {
      switch (a) {
        case void 0:
          return 1;

        case null:
          return 2;

        case !0:
          return 3;

        case !1:
          return 4;

        default:
          var b = Sb.length ? Sb.pop() : Y.length;
          Y[b] = {
            O: 1,
            value: a
          };
          return b;
      }
    }

    function Ub(a, b, c) {
      switch (b) {
        case 0:
          return function (d) {
            return this.fromWireType((c ? E : B)[d >>> 0]);
          };

        case 1:
          return function (d) {
            return this.fromWireType((c ? C : Ga)[d >>> 1]);
          };

        case 2:
          return function (d) {
            return this.fromWireType((c ? D : G)[d >>> 2]);
          };

        default:
          throw new TypeError("Unknown integer type: " + a);
      }
    }

    function Vb(a, b) {
      var c = L[a];
      void 0 === c && R(b + " has unknown type " + Mb(a));
      return c;
    }

    function T(a) {
      if (null === a) return "null";
      var b = typeof a;
      return "object" === b || "array" === b || "function" === b ? a.toString() : "" + a;
    }

    function Wb(a, b) {
      switch (b) {
        case 2:
          return function (c) {
            return this.fromWireType(Ha[c >>> 2]);
          };

        case 3:
          return function (c) {
            return this.fromWireType(Ia[c >>> 3]);
          };

        default:
          throw new TypeError("Unknown float type: " + a);
      }
    }

    function Xb(a, b, c) {
      switch (b) {
        case 0:
          return c ? function (d) {
            return E[d >>> 0];
          } : function (d) {
            return B[d >>> 0];
          };

        case 1:
          return c ? function (d) {
            return C[d >>> 1];
          } : function (d) {
            return Ga[d >>> 1];
          };

        case 2:
          return c ? function (d) {
            return D[d >>> 2];
          } : function (d) {
            return G[d >>> 2];
          };

        default:
          throw new TypeError("Unknown integer type: " + a);
      }
    }

    function Z(a) {
      a || R("Cannot use deleted val. handle = " + a);
      return Y[a].value;
    }

    function $b(a, b) {
      for (var c = Array(a), d = 0; d < a; ++d) c[d] = Vb(D[(b >> 2) + d >>> 0], "parameter " + d);

      return c;
    }

    var ac = {};

    function bc(a) {
      var b = ac[a];
      return void 0 === b ? O(a) : b;
    }

    var cc = [];

    function dc() {
      return "object" === typeof globalThis ? globalThis : Function("return this")();
    }

    function ec(a) {
      var b = cc.length;
      cc.push(a);
      return b;
    }

    var fc = {},
        hc;
    fa ? hc = function () {
      var a = process.hrtime();
      return 1E3 * a[0] + a[1] / 1E6;
    } : "undefined" !== typeof dateNow ? hc = dateNow : hc = function () {
      return performance.now();
    };
    var ic = {};

    function jc() {
      if (!kc) {
        var a = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: ("object" === typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
          _: ca || "./this.program"
        },
            b;

        for (b in ic) a[b] = ic[b];

        var c = [];

        for (b in a) c.push(b + "=" + a[b]);

        kc = c;
      }

      return kc;
    }

    var kc;

    function lc(a) {
      return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400);
    }

    function mc(a, b) {
      for (var c = 0, d = 0; d <= b; c += a[d++]);

      return c;
    }

    var nc = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        oc = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    function pc(a, b) {
      for (a = new Date(a.getTime()); 0 < b;) {
        var c = a.getMonth(),
            d = (lc(a.getFullYear()) ? nc : oc)[c];
        if (b > d - a.getDate()) b -= d - a.getDate() + 1, a.setDate(1), 11 > c ? a.setMonth(c + 1) : (a.setMonth(0), a.setFullYear(a.getFullYear() + 1));else {
          a.setDate(a.getDate() + b);
          break;
        }
      }

      return a;
    }

    function qc(a, b, c, d) {
      function f(h, q, w) {
        for (h = "number" === typeof h ? h.toString() : h || ""; h.length < q;) h = w[0] + h;

        return h;
      }

      function g(h, q) {
        return f(h, q, "0");
      }

      function l(h, q) {
        function w(Q) {
          return 0 > Q ? -1 : 0 < Q ? 1 : 0;
        }

        var z;
        0 === (z = w(h.getFullYear() - q.getFullYear())) && 0 === (z = w(h.getMonth() - q.getMonth())) && (z = w(h.getDate() - q.getDate()));
        return z;
      }

      function k(h) {
        switch (h.getDay()) {
          case 0:
            return new Date(h.getFullYear() - 1, 11, 29);

          case 1:
            return h;

          case 2:
            return new Date(h.getFullYear(), 0, 3);

          case 3:
            return new Date(h.getFullYear(), 0, 2);

          case 4:
            return new Date(h.getFullYear(), 0, 1);

          case 5:
            return new Date(h.getFullYear() - 1, 11, 31);

          case 6:
            return new Date(h.getFullYear() - 1, 11, 30);
        }
      }

      function n(h) {
        h = pc(new Date(h.h + 1900, 0, 1), h.L);
        var q = new Date(h.getFullYear() + 1, 0, 4),
            w = k(new Date(h.getFullYear(), 0, 4));
        q = k(q);
        return 0 >= l(w, h) ? 0 >= l(q, h) ? h.getFullYear() + 1 : h.getFullYear() : h.getFullYear() - 1;
      }

      var m = D[d + 40 >> 2 >>> 0];
      d = {
        qa: D[d >> 2 >>> 0],
        pa: D[d + 4 >> 2 >>> 0],
        J: D[d + 8 >> 2 >>> 0],
        B: D[d + 12 >> 2 >>> 0],
        w: D[d + 16 >> 2 >>> 0],
        h: D[d + 20 >> 2 >>> 0],
        K: D[d + 24 >> 2 >>> 0],
        L: D[d + 28 >> 2 >>> 0],
        wa: D[d + 32 >> 2 >>> 0],
        oa: D[d + 36 >> 2 >>> 0],
        ra: m ? ua(m) : ""
      };
      c = ua(c);
      m = {
        "%c": "%a %b %d %H:%M:%S %Y",
        "%D": "%m/%d/%y",
        "%F": "%Y-%m-%d",
        "%h": "%b",
        "%r": "%I:%M:%S %p",
        "%R": "%H:%M",
        "%T": "%H:%M:%S",
        "%x": "%m/%d/%y",
        "%X": "%H:%M:%S",
        "%Ec": "%c",
        "%EC": "%C",
        "%Ex": "%m/%d/%y",
        "%EX": "%H:%M:%S",
        "%Ey": "%y",
        "%EY": "%Y",
        "%Od": "%d",
        "%Oe": "%e",
        "%OH": "%H",
        "%OI": "%I",
        "%Om": "%m",
        "%OM": "%M",
        "%OS": "%S",
        "%Ou": "%u",
        "%OU": "%U",
        "%OV": "%V",
        "%Ow": "%w",
        "%OW": "%W",
        "%Oy": "%y"
      };

      for (var p in m) c = c.replace(new RegExp(p, "g"), m[p]);

      var t = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
          v = "January February March April May June July August September October November December".split(" ");
      m = {
        "%a": function (h) {
          return t[h.K].substring(0, 3);
        },
        "%A": function (h) {
          return t[h.K];
        },
        "%b": function (h) {
          return v[h.w].substring(0, 3);
        },
        "%B": function (h) {
          return v[h.w];
        },
        "%C": function (h) {
          return g((h.h + 1900) / 100 | 0, 2);
        },
        "%d": function (h) {
          return g(h.B, 2);
        },
        "%e": function (h) {
          return f(h.B, 2, " ");
        },
        "%g": function (h) {
          return n(h).toString().substring(2);
        },
        "%G": function (h) {
          return n(h);
        },
        "%H": function (h) {
          return g(h.J, 2);
        },
        "%I": function (h) {
          h = h.J;
          0 == h ? h = 12 : 12 < h && (h -= 12);
          return g(h, 2);
        },
        "%j": function (h) {
          return g(h.B + mc(lc(h.h + 1900) ? nc : oc, h.w - 1), 3);
        },
        "%m": function (h) {
          return g(h.w + 1, 2);
        },
        "%M": function (h) {
          return g(h.pa, 2);
        },
        "%n": function () {
          return "\n";
        },
        "%p": function (h) {
          return 0 <= h.J && 12 > h.J ? "AM" : "PM";
        },
        "%S": function (h) {
          return g(h.qa, 2);
        },
        "%t": function () {
          return "\t";
        },
        "%u": function (h) {
          return h.K || 7;
        },
        "%U": function (h) {
          var q = new Date(h.h + 1900, 0, 1),
              w = 0 === q.getDay() ? q : pc(q, 7 - q.getDay());
          h = new Date(h.h + 1900, h.w, h.B);
          return 0 > l(w, h) ? g(Math.ceil((31 - w.getDate() + (mc(lc(h.getFullYear()) ? nc : oc, h.getMonth() - 1) - 31) + h.getDate()) / 7), 2) : 0 === l(w, q) ? "01" : "00";
        },
        "%V": function (h) {
          var q = new Date(h.h + 1901, 0, 4),
              w = k(new Date(h.h + 1900, 0, 4));
          q = k(q);
          var z = pc(new Date(h.h + 1900, 0, 1), h.L);
          return 0 > l(z, w) ? "53" : 0 >= l(q, z) ? "01" : g(Math.ceil((w.getFullYear() < h.h + 1900 ? h.L + 32 - w.getDate() : h.L + 1 - w.getDate()) / 7), 2);
        },
        "%w": function (h) {
          return h.K;
        },
        "%W": function (h) {
          var q = new Date(h.h, 0, 1),
              w = 1 === q.getDay() ? q : pc(q, 0 === q.getDay() ? 1 : 7 - q.getDay() + 1);
          h = new Date(h.h + 1900, h.w, h.B);
          return 0 > l(w, h) ? g(Math.ceil((31 - w.getDate() + (mc(lc(h.getFullYear()) ? nc : oc, h.getMonth() - 1) - 31) + h.getDate()) / 7), 2) : 0 === l(w, q) ? "01" : "00";
        },
        "%y": function (h) {
          return (h.h + 1900).toString().substring(2);
        },
        "%Y": function (h) {
          return h.h + 1900;
        },
        "%z": function (h) {
          h = h.oa;
          var q = 0 <= h;
          h = Math.abs(h) / 60;
          return (q ? "+" : "-") + String("0000" + (h / 60 * 100 + h % 60)).slice(-4);
        },
        "%Z": function (h) {
          return h.ra;
        },
        "%%": function () {
          return "%";
        }
      };

      for (p in m) 0 <= c.indexOf(p) && (c = c.replace(new RegExp(p, "g"), m[p](d)));

      p = rc(c);
      if (p.length > b) return 0;
      E.set(p, a >>> 0);
      return p.length - 1;
    }

    var sc;
    lb = e.InternalError = kb("InternalError");

    for (var tc = Array(256), uc = 0; 256 > uc; ++uc) tc[uc] = String.fromCharCode(uc);

    ob = tc;
    P = e.BindingError = kb("BindingError");

    S.prototype.isAliasOf = function (a) {
      if (!(this instanceof S && a instanceof S)) return !1;
      var b = this.a.f.b,
          c = this.a.c,
          d = a.a.f.b;

      for (a = a.a.c; b.m;) c = b.C(c), b = b.m;

      for (; d.m;) a = d.C(a), d = d.m;

      return b === d && c === a;
    };

    S.prototype.clone = function () {
      this.a.c || qb(this);
      if (this.a.A) return this.a.count.value += 1, this;
      var a = ub(Object.create(Object.getPrototypeOf(this), {
        a: {
          value: pb(this.a)
        }
      }));
      a.a.count.value += 1;
      a.a.u = !1;
      return a;
    };

    S.prototype["delete"] = function () {
      this.a.c || qb(this);
      this.a.u && !this.a.A && R("Object already scheduled for deletion");
      sb(this);
      tb(this.a);
      this.a.A || (this.a.i = void 0, this.a.c = void 0);
    };

    S.prototype.isDeleted = function () {
      return !this.a.c;
    };

    S.prototype.deleteLater = function () {
      this.a.c || qb(this);
      this.a.u && !this.a.A && R("Object already scheduled for deletion");
      wb.push(this);
      1 === wb.length && vb && vb(xb);
      this.a.u = !0;
      return this;
    };

    V.prototype.Z = function (a) {
      this.T && (a = this.T(a));
      return a;
    };

    V.prototype.P = function (a) {
      this.o && this.o(a);
    };

    V.prototype.argPackAdvance = 8;
    V.prototype.readValueFromPointer = gb;

    V.prototype.deleteObject = function (a) {
      if (null !== a) a["delete"]();
    };

    V.prototype.fromWireType = function (a) {
      function b() {
        return this.I ? Jb(this.b.v, {
          f: this.ha,
          c: c,
          l: this,
          i: a
        }) : Jb(this.b.v, {
          f: this,
          c: a
        });
      }

      var c = this.Z(a);
      if (!c) return this.P(a), null;
      var d = Ib(this.b, c);

      if (void 0 !== d) {
        if (0 === d.a.count.value) return d.a.c = c, d.a.i = a, d.clone();
        d = d.clone();
        this.P(a);
        return d;
      }

      d = this.b.Y(c);
      d = yb[d];
      if (!d) return b.call(this);
      d = this.H ? d.V : d.pointerType;
      var f = Gb(c, this.b, d.b);
      return null === f ? b.call(this) : this.I ? Jb(d.b.v, {
        f: d,
        c: f,
        l: this,
        i: a
      }) : Jb(d.b.v, {
        f: d,
        c: f
      });
    };

    e.getInheritedInstanceCount = function () {
      return Object.keys(Hb).length;
    };

    e.getLiveInheritedInstances = function () {
      var a = [],
          b;

      for (b in Hb) Hb.hasOwnProperty(b) && a.push(Hb[b]);

      return a;
    };

    e.flushPendingDeletes = xb;

    e.setDelayFunction = function (a) {
      vb = a;
      wb.length && vb && vb(xb);
    };

    Lb = e.UnboundTypeError = kb("UnboundTypeError");

    e.count_emval_handles = function () {
      for (var a = 0, b = 5; b < Y.length; ++b) void 0 !== Y[b] && ++a;

      return a;
    };

    e.get_first_emval = function () {
      for (var a = 5; a < Y.length; ++a) if (void 0 !== Y[a]) return Y[a];

      return null;
    };

    function rc(a) {
      var b = Array(wa(a) + 1);
      va(a, b, 0, b.length);
      return b;
    }

    var yc = {
      __cxa_allocate_exception: function (a) {
        return vc(a);
      },
      __cxa_atexit: function (a, b) {
        Pa.unshift({
          S: a,
          F: b
        });
      },
      __cxa_throw: function (a) {
        "uncaught_exception" in $a ? $a.D++ : $a.D = 1;
        throw a;
      },
      __map_file: function () {
        ab(63);
        return -1;
      },
      __sys_fcntl64: function () {
        return 0;
      },
      __sys_ftruncate64: function () {},
      __sys_ioctl: function () {
        return 0;
      },
      __sys_mmap2: function (a, b, c, d, f, g) {
        g <<= 12;
        0 !== (d & 16) && 0 !== a % 16384 ? b = -28 : 0 !== (d & 32) ? (a = wc(16384, b)) ? (xc(a, 0, b), a >>>= 0, bb[a] = {
          ga: a,
          fa: b,
          U: !0,
          fd: f,
          va: c,
          flags: d,
          offset: g
        }, b = a) : b = -48 : b = -52;
        return b;
      },
      __sys_mremap: function () {
        return -48;
      },
      __sys_munmap: function (a, b) {
        a >>>= 0;
        if (-1 === (a | 0) || 0 === b) b = -28;else {
          var c = bb[a];
          c && b === c.fa && (bb[a] = null, c.U && X(c.ga));
          b = 0;
        }
        return b;
      },
      __sys_open: function () {},
      __sys_unlink: function () {},
      _embind_finalize_value_object: function (a) {
        var b = eb[a];
        delete eb[a];
        var c = b.N,
            d = b.o,
            f = b.R,
            g = f.map(function (l) {
          return l.ba;
        }).concat(f.map(function (l) {
          return l.la;
        }));
        M([a], g, function (l) {
          var k = {};
          f.forEach(function (n, m) {
            var p = l[m],
                t = n.$,
                v = n.aa,
                h = l[m + f.length],
                q = n.ka,
                w = n.ma;
            k[n.X] = {
              read: function (z) {
                return p.fromWireType(t(v, z));
              },
              write: function (z, Q) {
                var J = [];
                q(w, z, h.toWireType(J, Q));
                fb(J);
              }
            };
          });
          return [{
            name: b.name,
            fromWireType: function (n) {
              var m = {},
                  p;

              for (p in k) m[p] = k[p].read(n);

              d(n);
              return m;
            },
            toWireType: function (n, m) {
              for (var p in k) if (!(p in m)) throw new TypeError("Missing field");

              var t = c();

              for (p in k) k[p].write(t, m[p]);

              null !== n && n.push(d, t);
              return t;
            },
            argPackAdvance: 8,
            readValueFromPointer: gb,
            j: d
          }];
        });
      },
      _embind_register_bool: function (a, b, c, d, f) {
        var g = nb(c);
        b = O(b);
        N(a, {
          name: b,
          fromWireType: function (l) {
            return !!l;
          },
          toWireType: function (l, k) {
            return k ? d : f;
          },
          argPackAdvance: 8,
          readValueFromPointer: function (l) {
            if (1 === c) var k = E;else if (2 === c) k = C;else if (4 === c) k = D;else throw new TypeError("Unknown boolean type size: " + b);
            return this.fromWireType(k[l >>> g]);
          },
          j: null
        });
      },
      _embind_register_class: function (a, b, c, d, f, g, l, k, n, m, p, t, v) {
        p = O(p);
        g = W(f, g);
        k && (k = W(l, k));
        m && (m = W(n, m));
        v = W(t, v);
        var h = ib(p);
        Ab(h, function () {
          Ob("Cannot construct " + p + " due to unbound types", [d]);
        });
        M([a, b, c], d ? [d] : [], function (q) {
          q = q[0];

          if (d) {
            var w = q.b;
            var z = w.v;
          } else z = S.prototype;

          q = jb(h, function () {
            if (Object.getPrototypeOf(this) !== Q) throw new P("Use 'new' to construct " + p);
            if (void 0 === J.s) throw new P(p + " has no accessible constructor");
            var Yb = J.s[arguments.length];
            if (void 0 === Yb) throw new P("Tried to invoke ctor of " + p + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(J.s).toString() + ") parameters instead!");
            return Yb.apply(this, arguments);
          });
          var Q = Object.create(z, {
            constructor: {
              value: q
            }
          });
          q.prototype = Q;
          var J = new Bb(p, q, Q, v, w, g, k, m);
          w = new V(p, J, !0, !1, !1);
          z = new V(p + "*", J, !1, !1, !1);
          var Zb = new V(p + " const*", J, !1, !0, !1);
          yb[a] = {
            pointerType: z,
            V: Zb
          };
          Kb(h, q);
          return [w, z, Zb];
        });
      },
      _embind_register_class_constructor: function (a, b, c, d, f, g) {
        assert(0 < b);
        var l = Pb(b, c);
        f = W(d, f);
        var k = [g],
            n = [];
        M([], [a], function (m) {
          m = m[0];
          var p = "constructor " + m.name;
          void 0 === m.b.s && (m.b.s = []);
          if (void 0 !== m.b.s[b - 1]) throw new P("Cannot register multiple constructors with identical number of parameters (" + (b - 1) + ") for class '" + m.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");

          m.b.s[b - 1] = function () {
            Ob("Cannot construct " + m.name + " due to unbound types", l);
          };

          M([], l, function (t) {
            m.b.s[b - 1] = function () {
              arguments.length !== b - 1 && R(p + " called with " + arguments.length + " arguments, expected " + (b - 1));
              n.length = 0;
              k.length = b;

              for (var v = 1; v < b; ++v) k[v] = t[v].toWireType(n, arguments[v - 1]);

              v = f.apply(null, k);
              fb(n);
              return t[0].fromWireType(v);
            };

            return [];
          });
          return [];
        });
      },
      _embind_register_class_function: function (a, b, c, d, f, g, l, k) {
        var n = Pb(c, d);
        b = O(b);
        g = W(f, g);
        M([], [a], function (m) {
          function p() {
            Ob("Cannot call " + t + " due to unbound types", n);
          }

          m = m[0];
          var t = m.name + "." + b;
          k && m.b.ia.push(b);
          var v = m.b.v,
              h = v[b];
          void 0 === h || void 0 === h.g && h.className !== m.name && h.G === c - 2 ? (p.G = c - 2, p.className = m.name, v[b] = p) : (zb(v, b, t), v[b].g[c - 2] = p);
          M([], n, function (q) {
            q = Rb(t, q, m, g, l);
            void 0 === v[b].g ? (q.G = c - 2, v[b] = q) : v[b].g[c - 2] = q;
            return [];
          });
          return [];
        });
      },
      _embind_register_emval: function (a, b) {
        b = O(b);
        N(a, {
          name: b,
          fromWireType: function (c) {
            var d = Y[c].value;
            Tb(c);
            return d;
          },
          toWireType: function (c, d) {
            return U(d);
          },
          argPackAdvance: 8,
          readValueFromPointer: gb,
          j: null
        });
      },
      _embind_register_enum: function (a, b, c, d) {
        function f() {}

        c = nb(c);
        b = O(b);
        f.values = {};
        N(a, {
          name: b,
          constructor: f,
          fromWireType: function (g) {
            return this.constructor.values[g];
          },
          toWireType: function (g, l) {
            return l.value;
          },
          argPackAdvance: 8,
          readValueFromPointer: Ub(b, c, d),
          j: null
        });
        Ab(b, f);
      },
      _embind_register_enum_value: function (a, b, c) {
        var d = Vb(a, "enum");
        b = O(b);
        a = d.constructor;
        d = Object.create(d.constructor.prototype, {
          value: {
            value: c
          },
          constructor: {
            value: jb(d.name + "_" + b, function () {})
          }
        });
        a.values[c] = d;
        a[b] = d;
      },
      _embind_register_float: function (a, b, c) {
        c = nb(c);
        b = O(b);
        N(a, {
          name: b,
          fromWireType: function (d) {
            return d;
          },
          toWireType: function (d, f) {
            if ("number" !== typeof f && "boolean" !== typeof f) throw new TypeError('Cannot convert "' + T(f) + '" to ' + this.name);
            return f;
          },
          argPackAdvance: 8,
          readValueFromPointer: Wb(b, c),
          j: null
        });
      },
      _embind_register_function: function (a, b, c, d, f, g) {
        var l = Pb(b, c);
        a = O(a);
        f = W(d, f);
        Ab(a, function () {
          Ob("Cannot call " + a + " due to unbound types", l);
        }, b - 1);
        M([], l, function (k) {
          k = [k[0], null].concat(k.slice(1));
          Kb(a, Rb(a, k, null, f, g), b - 1);
          return [];
        });
      },
      _embind_register_integer: function (a, b, c, d, f) {
        function g(m) {
          return m;
        }

        b = O(b);
        -1 === f && (f = 4294967295);
        var l = nb(c);

        if (0 === d) {
          var k = 32 - 8 * c;

          g = function (m) {
            return m << k >>> k;
          };
        }

        var n = -1 != b.indexOf("unsigned");
        N(a, {
          name: b,
          fromWireType: g,
          toWireType: function (m, p) {
            if ("number" !== typeof p && "boolean" !== typeof p) throw new TypeError('Cannot convert "' + T(p) + '" to ' + this.name);
            if (p < d || p > f) throw new TypeError('Passing a number "' + T(p) + '" from JS side to C/C++ side to an argument of type "' + b + '", which is outside the valid range [' + d + ", " + f + "]!");
            return n ? p >>> 0 : p | 0;
          },
          argPackAdvance: 8,
          readValueFromPointer: Xb(b, l, 0 !== d),
          j: null
        });
      },
      _embind_register_memory_view: function (a, b, c) {
        function d(g) {
          g >>= 2;
          var l = G;
          return new f(F, l[g + 1 >>> 0], l[g >>> 0]);
        }

        var f = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][b];
        c = O(c);
        N(a, {
          name: c,
          fromWireType: d,
          argPackAdvance: 8,
          readValueFromPointer: d
        }, {
          da: !0
        });
      },
      _embind_register_smart_ptr: function (a, b, c, d, f, g, l, k, n, m, p, t) {
        c = O(c);
        g = W(f, g);
        k = W(l, k);
        m = W(n, m);
        t = W(p, t);
        M([a], [b], function (v) {
          v = v[0];
          return [new V(c, v.b, !1, !1, !0, v, d, g, k, m, t)];
        });
      },
      _embind_register_std_string: function (a, b) {
        b = O(b);
        var c = "std::string" === b;
        N(a, {
          name: b,
          fromWireType: function (d) {
            var f = G[d >>> 2];

            if (c) {
              var g = B[d + 4 + f >>> 0],
                  l = 0;
              0 != g && (l = g, B[d + 4 + f >>> 0] = 0);
              var k = d + 4;

              for (g = 0; g <= f; ++g) {
                var n = d + 4 + g;

                if (0 == B[n >>> 0]) {
                  k = ua(k);
                  if (void 0 === m) var m = k;else m += String.fromCharCode(0), m += k;
                  k = n + 1;
                }
              }

              0 != l && (B[d + 4 + f >>> 0] = l);
            } else {
              m = Array(f);

              for (g = 0; g < f; ++g) m[g] = String.fromCharCode(B[d + 4 + g >>> 0]);

              m = m.join("");
            }

            X(d);
            return m;
          },
          toWireType: function (d, f) {
            f instanceof ArrayBuffer && (f = new Uint8Array(f));
            var g = "string" === typeof f;
            g || f instanceof Uint8Array || f instanceof Uint8ClampedArray || f instanceof Int8Array || R("Cannot pass non-string to std::string");
            var l = (c && g ? function () {
              return wa(f);
            } : function () {
              return f.length;
            })(),
                k = vc(4 + l + 1);
            k >>>= 0;
            G[k >>> 2] = l;
            if (c && g) va(f, B, k + 4, l + 1);else if (g) for (g = 0; g < l; ++g) {
              var n = f.charCodeAt(g);
              255 < n && (X(k), R("String has UTF-16 code units that do not fit in 8 bits"));
              B[k + 4 + g >>> 0] = n;
            } else for (g = 0; g < l; ++g) B[k + 4 + g >>> 0] = f[g];
            null !== d && d.push(X, k);
            return k;
          },
          argPackAdvance: 8,
          readValueFromPointer: gb,
          j: function (d) {
            X(d);
          }
        });
      },
      _embind_register_std_wstring: function (a, b, c) {
        c = O(c);

        if (2 === b) {
          var d = ya;
          var f = za;
          var g = Aa;

          var l = function () {
            return Ga;
          };

          var k = 1;
        } else 4 === b && (d = Ba, f = Ca, g = Da, l = function () {
          return G;
        }, k = 2);

        N(a, {
          name: c,
          fromWireType: function (n) {
            var m = G[n >>> 2],
                p = l(),
                t = p[n + 4 + m * b >>> k],
                v = 0;
            0 != t && (v = t, p[n + 4 + m * b >>> k] = 0);
            var h = n + 4;

            for (t = 0; t <= m; ++t) {
              var q = n + 4 + t * b;

              if (0 == p[q >>> k]) {
                h = d(h);
                if (void 0 === w) var w = h;else w += String.fromCharCode(0), w += h;
                h = q + b;
              }
            }

            0 != v && (p[n + 4 + m * b >>> k] = v);
            X(n);
            return w;
          },
          toWireType: function (n, m) {
            "string" !== typeof m && R("Cannot pass non-string to C++ string type " + c);
            var p = g(m),
                t = vc(4 + p + b);
            t >>>= 0;
            G[t >>> 2] = p >> k;
            f(m, t + 4, p + b);
            null !== n && n.push(X, t);
            return t;
          },
          argPackAdvance: 8,
          readValueFromPointer: gb,
          j: function (n) {
            X(n);
          }
        });
      },
      _embind_register_value_object: function (a, b, c, d, f, g) {
        eb[a] = {
          name: O(b),
          N: W(c, d),
          o: W(f, g),
          R: []
        };
      },
      _embind_register_value_object_field: function (a, b, c, d, f, g, l, k, n, m) {
        eb[a].R.push({
          X: O(b),
          ba: c,
          $: W(d, f),
          aa: g,
          la: l,
          ka: W(k, n),
          ma: m
        });
      },
      _embind_register_void: function (a, b) {
        b = O(b);
        N(a, {
          ea: !0,
          name: b,
          argPackAdvance: 0,
          fromWireType: function () {},
          toWireType: function () {}
        });
      },
      _emval_as: function (a, b, c) {
        a = Z(a);
        b = Vb(b, "emval::as");
        var d = [],
            f = U(d);
        D[c >>> 2] = f;
        return b.toWireType(d, a);
      },
      _emval_call: function (a, b, c, d) {
        a = Z(a);
        c = $b(b, c);

        for (var f = Array(b), g = 0; g < b; ++g) {
          var l = c[g];
          f[g] = l.readValueFromPointer(d);
          d += l.argPackAdvance;
        }

        a = a.apply(void 0, f);
        return U(a);
      },
      _emval_call_method: function (a, b, c, d, f) {
        a = cc[a];
        b = Z(b);
        c = bc(c);
        var g = [];
        D[d >>> 2] = U(g);
        return a(b, c, g, f);
      },
      _emval_call_void_method: function (a, b, c, d) {
        a = cc[a];
        b = Z(b);
        c = bc(c);
        a(b, c, null, d);
      },
      _emval_decref: Tb,
      _emval_get_global: function (a) {
        if (0 === a) return U(dc());
        a = bc(a);
        return U(dc()[a]);
      },
      _emval_get_method_caller: function (a, b) {
        b = $b(a, b);

        for (var c = b[0], d = c.name + "_$" + b.slice(1).map(function (m) {
          return m.name;
        }).join("_") + "$", f = ["retType"], g = [c], l = "", k = 0; k < a - 1; ++k) l += (0 !== k ? ", " : "") + "arg" + k, f.push("argType" + k), g.push(b[1 + k]);

        d = "return function " + ib("methodCaller_" + d) + "(handle, name, destructors, args) {\n";
        var n = 0;

        for (k = 0; k < a - 1; ++k) d += "    var arg" + k + " = argType" + k + ".readValueFromPointer(args" + (n ? "+" + n : "") + ");\n", n += b[k + 1].argPackAdvance;

        d += "    var rv = handle[name](" + l + ");\n";

        for (k = 0; k < a - 1; ++k) b[k + 1].deleteObject && (d += "    argType" + k + ".deleteObject(arg" + k + ");\n");

        c.ea || (d += "    return retType.toWireType(destructors, rv);\n");
        f.push(d + "};\n");
        a = Qb(f).apply(null, g);
        return ec(a);
      },
      _emval_get_module_property: function (a) {
        a = bc(a);
        return U(e[a]);
      },
      _emval_get_property: function (a, b) {
        a = Z(a);
        b = Z(b);
        return U(a[b]);
      },
      _emval_incref: function (a) {
        4 < a && (Y[a].O += 1);
      },
      _emval_instanceof: function (a, b) {
        a = Z(a);
        b = Z(b);
        return a instanceof b;
      },
      _emval_new: function (a, b, c, d) {
        a = Z(a);
        var f = fc[b];

        if (!f) {
          f = "";

          for (var g = 0; g < b; ++g) f += (0 !== g ? ", " : "") + "arg" + g;

          var l = "return function emval_allocator_" + b + "(constructor, argTypes, args) {\n";

          for (g = 0; g < b; ++g) l += "var argType" + g + " = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + " + g + '], "parameter ' + g + '");\nvar arg' + g + " = argType" + g + ".readValueFromPointer(args);\nargs += argType" + g + "['argPackAdvance'];\n";

          f = new Function("requireRegisteredType", "Module", "__emval_register", l + ("var obj = new constructor(" + f + ");\nreturn __emval_register(obj);\n}\n"))(Vb, e, U);
          fc[b] = f;
        }

        return f(a, c, d);
      },
      _emval_new_cstring: function (a) {
        return U(bc(a));
      },
      _emval_new_object: function () {
        return U({});
      },
      _emval_run_destructors: function (a) {
        fb(Y[a].value);
        Tb(a);
      },
      _emval_set_property: function (a, b, c) {
        a = Z(a);
        b = Z(b);
        c = Z(c);
        a[b] = c;
      },
      _emval_take_value: function (a, b) {
        a = Vb(a, "_emval_take_value");
        a = a.readValueFromPointer(b);
        return U(a);
      },
      _emval_typeof: function (a) {
        a = Z(a);
        return U(typeof a);
      },
      abort: function () {
        na();
      },
      clock_gettime: function (a, b) {
        if (0 === a) a = Date.now();else if (1 === a || 4 === a) a = hc();else return ab(28), -1;
        D[b >> 2 >>> 0] = a / 1E3 | 0;
        D[b + 4 >> 2 >>> 0] = a % 1E3 * 1E6 | 0;
        return 0;
      },
      emscripten_asm_const_iii: function (a, b, c) {
        sc || (sc = []);
        var d = sc;
        d.length = 0;

        for (var f; f = B[b++ >>> 0];) 100 === f || 102 === f ? (c = c + 7 & -8, d.push(Ia[c >> 3 >>> 0]), c += 8) : (c = c + 3 & -4, d.push(D[c >> 2 >>> 0]), c += 4);

        return Ya[a].apply(null, d);
      },
      emscripten_get_sbrk_ptr: function () {
        return 102528;
      },
      emscripten_memcpy_big: function (a, b, c) {
        B.copyWithin(a >>> 0, b >>> 0, b + c >>> 0);
      },
      emscripten_resize_heap: function (a) {
        a >>>= 0;
        var b = B.length;
        if (4294901760 < a) return !1;

        for (var c = 1; 4 >= c; c *= 2) {
          var d = b * (1 + .2 / c);
          d = Math.min(d, a + 100663296);
          d = Math.max(16777216, a, d);
          0 < d % 65536 && (d += 65536 - d % 65536);

          a: {
            try {
              A.grow(Math.min(4294901760, d) - F.byteLength + 65535 >>> 16);
              Ja(A.buffer);
              var f = 1;
              break a;
            } catch (g) {}

            f = void 0;
          }

          if (f) return !0;
        }

        return !1;
      },
      environ_get: function (a, b) {
        var c = 0;
        jc().forEach(function (d, f) {
          var g = b + c;
          f = D[a + 4 * f >> 2 >>> 0] = g;

          for (g = 0; g < d.length; ++g) E[f++ >> 0 >>> 0] = d.charCodeAt(g);

          E[f >> 0 >>> 0] = 0;
          c += d.length + 1;
        });
        return 0;
      },
      environ_sizes_get: function (a, b) {
        var c = jc();
        D[a >> 2 >>> 0] = c.length;
        var d = 0;
        c.forEach(function (f) {
          d += f.length + 1;
        });
        D[b >> 2 >>> 0] = d;
        return 0;
      },
      fd_close: function () {
        return 0;
      },
      fd_read: function (a, b, c, d) {
        a = db.ta(a);
        b = db.sa(a, b, c);
        D[d >> 2 >>> 0] = b;
        return 0;
      },
      fd_seek: function () {},
      fd_write: function (a, b, c, d) {
        for (var f = 0, g = 0; g < c; g++) {
          for (var l = D[b + 8 * g >> 2 >>> 0], k = D[b + (8 * g + 4) >> 2 >>> 0], n = 0; n < k; n++) {
            var m = B[l + n >>> 0],
                p = cb[a];
            0 === m || 10 === m ? ((1 === a ? oa : y)(ta(p, 0)), p.length = 0) : p.push(m);
          }

          f += k;
        }

        D[d >> 2 >>> 0] = f;
        return 0;
      },
      memory: A,
      nanosleep: function (a, b) {
        if (0 === a) return ab(28), -1;
        var c = D[a >> 2 >>> 0];
        a = D[a + 4 >> 2 >>> 0];
        if (0 > a || 999999999 < a || 0 > c) return ab(28), -1;
        0 !== b && (D[b >> 2 >>> 0] = 0, D[b + 4 >> 2 >>> 0] = 0);
        b = 1E6 * c + a / 1E3;

        for (c = hc(); hc() - c < b / 1E3;);
      },
      setTempRet0: function () {},
      strftime_l: function (a, b, c, d) {
        return qc(a, b, c, d);
      },
      table: qa
    },
        zc = function () {
      function a(f) {
        e.asm = f.exports;
        H--;
        e.monitorRunDependencies && e.monitorRunDependencies(H);
        0 == H && (null !== Sa && (clearInterval(Sa), Sa = null), Ta && (f = Ta, Ta = null, f()));
      }

      function b(f) {
        a(f.instance);
      }

      function c(f) {
        return Xa().then(function (g) {
          return WebAssembly.instantiate(g, d);
        }).then(f, function (g) {
          y("failed to asynchronously prepare wasm: " + g);
          na(g);
        });
      }

      var d = {
        env: yc,
        wasi_snapshot_preview1: yc
      };
      H++;
      e.monitorRunDependencies && e.monitorRunDependencies(H);
      if (e.instantiateWasm) try {
        return e.instantiateWasm(d, a);
      } catch (f) {
        return y("Module.instantiateWasm callback failed with error: " + f), !1;
      }

      (function () {
        if (pa || "function" !== typeof WebAssembly.instantiateStreaming || Ua() || "function" !== typeof fetch) return c(b);
        fetch(I, {
          credentials: "same-origin"
        }).then(function (f) {
          return WebAssembly.instantiateStreaming(f, d).then(b, function (g) {
            y("wasm streaming compile failed: " + g);
            y("falling back to ArrayBuffer instantiation");
            c(b);
          });
        });
      })();

      return {};
    }();

    e.asm = zc;

    var Za = e.___wasm_call_ctors = function () {
      return (Za = e.___wasm_call_ctors = e.asm.__wasm_call_ctors).apply(null, arguments);
    },
        vc = e._malloc = function () {
      return (vc = e._malloc = e.asm.malloc).apply(null, arguments);
    },
        X = e._free = function () {
      return (X = e._free = e.asm.free).apply(null, arguments);
    };

    e._main = function () {
      return (e._main = e.asm.main).apply(null, arguments);
    };

    var xc = e._memset = function () {
      return (xc = e._memset = e.asm.memset).apply(null, arguments);
    };

    e._htonl = function () {
      return (e._htonl = e.asm.htonl).apply(null, arguments);
    };

    e._htons = function () {
      return (e._htons = e.asm.htons).apply(null, arguments);
    };

    e._ntohs = function () {
      return (e._ntohs = e.asm.ntohs).apply(null, arguments);
    };

    e._setThrew = function () {
      return (e._setThrew = e.asm.setThrew).apply(null, arguments);
    };

    var Nb = e.___getTypeName = function () {
      return (Nb = e.___getTypeName = e.asm.__getTypeName).apply(null, arguments);
    };

    e.___embind_register_native_and_builtin_types = function () {
      return (e.___embind_register_native_and_builtin_types = e.asm.__embind_register_native_and_builtin_types).apply(null, arguments);
    };

    var wc = e._memalign = function () {
      return (wc = e._memalign = e.asm.memalign).apply(null, arguments);
    };

    e._emscripten_main_thread_process_queued_calls = function () {
      return (e._emscripten_main_thread_process_queued_calls = e.asm.emscripten_main_thread_process_queued_calls).apply(null, arguments);
    };

    e.stackSave = function () {
      return (e.stackSave = e.asm.stackSave).apply(null, arguments);
    };

    var Fa = e.stackAlloc = function () {
      return (Fa = e.stackAlloc = e.asm.stackAlloc).apply(null, arguments);
    };

    e.stackRestore = function () {
      return (e.stackRestore = e.asm.stackRestore).apply(null, arguments);
    };

    e.__growWasmMemory = function () {
      return (e.__growWasmMemory = e.asm.__growWasmMemory).apply(null, arguments);
    };

    e.dynCall_ii = function () {
      return (e.dynCall_ii = e.asm.dynCall_ii).apply(null, arguments);
    };

    e.dynCall_vi = function () {
      return (e.dynCall_vi = e.asm.dynCall_vi).apply(null, arguments);
    };

    e.dynCall_iii = function () {
      return (e.dynCall_iii = e.asm.dynCall_iii).apply(null, arguments);
    };

    e.dynCall_viij = function () {
      return (e.dynCall_viij = e.asm.dynCall_viij).apply(null, arguments);
    };

    e.dynCall_v = function () {
      return (e.dynCall_v = e.asm.dynCall_v).apply(null, arguments);
    };

    e.dynCall_vii = function () {
      return (e.dynCall_vii = e.asm.dynCall_vii).apply(null, arguments);
    };

    e.dynCall_viii = function () {
      return (e.dynCall_viii = e.asm.dynCall_viii).apply(null, arguments);
    };

    e.dynCall_viiji = function () {
      return (e.dynCall_viiji = e.asm.dynCall_viiji).apply(null, arguments);
    };

    e.dynCall_viijji = function () {
      return (e.dynCall_viijji = e.asm.dynCall_viijji).apply(null, arguments);
    };

    e.dynCall_ji = function () {
      return (e.dynCall_ji = e.asm.dynCall_ji).apply(null, arguments);
    };

    e.dynCall_viiiiii = function () {
      return (e.dynCall_viiiiii = e.asm.dynCall_viiiiii).apply(null, arguments);
    };

    e.dynCall_viiii = function () {
      return (e.dynCall_viiii = e.asm.dynCall_viiii).apply(null, arguments);
    };

    e.dynCall_viijj = function () {
      return (e.dynCall_viijj = e.asm.dynCall_viijj).apply(null, arguments);
    };

    e.dynCall_viijjii = function () {
      return (e.dynCall_viijjii = e.asm.dynCall_viijjii).apply(null, arguments);
    };

    e.dynCall_viiij = function () {
      return (e.dynCall_viiij = e.asm.dynCall_viiij).apply(null, arguments);
    };

    e.dynCall_viijii = function () {
      return (e.dynCall_viijii = e.asm.dynCall_viijii).apply(null, arguments);
    };

    e.dynCall_iiiiiii = function () {
      return (e.dynCall_iiiiiii = e.asm.dynCall_iiiiiii).apply(null, arguments);
    };

    e.dynCall_iiiiii = function () {
      return (e.dynCall_iiiiii = e.asm.dynCall_iiiiii).apply(null, arguments);
    };

    e.dynCall_i = function () {
      return (e.dynCall_i = e.asm.dynCall_i).apply(null, arguments);
    };

    e.dynCall_iiii = function () {
      return (e.dynCall_iiii = e.asm.dynCall_iiii).apply(null, arguments);
    };

    e.dynCall_iiiii = function () {
      return (e.dynCall_iiiii = e.asm.dynCall_iiiii).apply(null, arguments);
    };

    e.dynCall_iiiiiiiiiii = function () {
      return (e.dynCall_iiiiiiiiiii = e.asm.dynCall_iiiiiiiiiii).apply(null, arguments);
    };

    e.dynCall_iiiiiiiiii = function () {
      return (e.dynCall_iiiiiiiiii = e.asm.dynCall_iiiiiiiiii).apply(null, arguments);
    };

    e.dynCall_viiiiiiiii = function () {
      return (e.dynCall_viiiiiiiii = e.asm.dynCall_viiiiiiiii).apply(null, arguments);
    };

    e.dynCall_viiiii = function () {
      return (e.dynCall_viiiii = e.asm.dynCall_viiiii).apply(null, arguments);
    };

    e.dynCall_jiji = function () {
      return (e.dynCall_jiji = e.asm.dynCall_jiji).apply(null, arguments);
    };

    e.dynCall_iidiiii = function () {
      return (e.dynCall_iidiiii = e.asm.dynCall_iidiiii).apply(null, arguments);
    };

    e.dynCall_iiiiiiiii = function () {
      return (e.dynCall_iiiiiiiii = e.asm.dynCall_iiiiiiiii).apply(null, arguments);
    };

    e.dynCall_iiiiiiii = function () {
      return (e.dynCall_iiiiiiii = e.asm.dynCall_iiiiiiii).apply(null, arguments);
    };

    e.dynCall_iiiiiijj = function () {
      return (e.dynCall_iiiiiijj = e.asm.dynCall_iiiiiijj).apply(null, arguments);
    };

    e.dynCall_iiiiij = function () {
      return (e.dynCall_iiiiij = e.asm.dynCall_iiiiij).apply(null, arguments);
    };

    e.dynCall_iiiiid = function () {
      return (e.dynCall_iiiiid = e.asm.dynCall_iiiiid).apply(null, arguments);
    };

    e.dynCall_iiiiijj = function () {
      return (e.dynCall_iiiiijj = e.asm.dynCall_iiiiijj).apply(null, arguments);
    };

    e.asm = zc;
    var Ac;

    e.then = function (a) {
      if (Ac) a(e);else {
        var b = e.onRuntimeInitialized;

        e.onRuntimeInitialized = function () {
          b && b();
          a(e);
        };
      }
      return e;
    };

    function ma(a) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + a + ")";
      this.status = a;
    }

    Ta = function Bc() {
      Ac || Cc();
      Ac || (Ta = Bc);
    };

    function Cc(a) {
      function b() {
        if (!Ac && (Ac = !0, e.calledRun = !0, !ra)) {
          La(Na);
          La(Oa);
          if (e.onRuntimeInitialized) e.onRuntimeInitialized();

          if (Dc) {
            var c = a,
                d = e._main;
            c = c || [];
            var f = c.length + 1,
                g = Fa(4 * (f + 1));
            D[g >>> 2] = Ea(ca);

            for (var l = 1; l < f; l++) D[(g >> 2) + l >>> 0] = Ea(c[l - 1]);

            D[(g >> 2) + f >>> 0] = 0;

            try {
              var k = d(f, g);

              if (!noExitRuntime || 0 !== k) {
                if (!noExitRuntime && (ra = !0, e.onExit)) e.onExit(k);
                da(k, new ma(k));
              }
            } catch (n) {
              n instanceof ma || ("unwind" == n ? noExitRuntime = !0 : ((c = n) && "object" === typeof n && n.stack && (c = [n, n.stack]), y("exception thrown: " + c), da(1, n)));
            } finally {}
          }

          if (e.postRun) for ("function" == typeof e.postRun && (e.postRun = [e.postRun]); e.postRun.length;) c = e.postRun.shift(), Qa.unshift(c);
          La(Qa);
        }
      }

      a = a || ba;

      if (!(0 < H)) {
        if (e.preRun) for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length;) Ra();
        La(Ma);
        0 < H || (e.setStatus ? (e.setStatus("Running..."), setTimeout(function () {
          setTimeout(function () {
            e.setStatus("");
          }, 1);
          b();
        }, 1)) : b());
      }
    }

    e.run = Cc;
    if (e.preInit) for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); 0 < e.preInit.length;) e.preInit.pop()();
    var Dc = !0;
    e.noInitialRun && (Dc = !1);
    noExitRuntime = !0;
    Cc();
    return load_perspective;
  };
}();

var _default = load_perspective;
exports.default = _default;
//# sourceMappingURL=psp.async.js.map