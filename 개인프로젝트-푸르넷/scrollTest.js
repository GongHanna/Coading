handleScroll: function() {
  var t = document.querySelector("#fixedScroll")
    , e = document.querySelectorAll(".bg-item")
    , n = function () {
      var n, o, r, c = (n = t.querySelectorAll(".card"),
        o = window.scrollY,
        Object(S.a)(n).map((function (t, e) {
          return {
            cardEl: t,
            cardPosInfo: t.getBoundingClientRect().top + o,
            cardPosTop: t.getBoundingClientRect().top,
            indexNum: e
          }
        }
        ))), l = window.scrollY, d = t.getBoundingClientRect().top, m = t.clientHeight;
      window.innerWidth >= 1260 ? l += 176 : l += 250;
      for (var i = c.length - 1; i >= 0; i--)
        if (r = c[i].cardEl.clientHeight / 2,
          c[i].cardPosInfo - r <= l) {
          c.forEach((function (e, i) {
            e.cardEl.classList.remove("is_active"),
              t.classList.remove("is_active".concat(e.indexNum))
          }
          )),
            c[i].cardEl.classList.add("is_active"),
            t.classList.add("is_active".concat(c[i].indexNum));
          break
        }
      d > 0 && (e[1].classList.remove("visible"),
        e[0].classList.add("visible")),
        d < 0 && d < -.1 * m && (e[2].classList.remove("visible"),
          e[1].classList.add("visible")),
        d < 0 && d < -.3 * m && e[2].classList.add("visible")
    };
  document.addEventListener("scroll", (function () {
    n()
  }
  ))
},