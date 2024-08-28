"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6616],
  {
    6616: function (s, e, i) {
      i.r(e),
        i.d(e, {
          default: function () {
            return j;
          },
        });
      var a = i(85893),
        t = i(67294),
        l = i(26038),
        r = i(19755),
        c = i.n(r),
        n = i(28860),
        d = i.n(n),
        o = i(18263),
        h = i(60056),
        x = i(45438),
        m = i(35063),
        g = i.n(m);
      function j(s) {
        let [e, i] = (0, t.useState)(0),
          [r, n] = (0, t.useState)(0),
          { scrollYProgress: d } = (0, o.v)({}),
          m = (0, h.H)(d, [0, 100], [0.8, 100], { clamp: !1 });
        return (0, a.jsxs)("div", {
          className: " home",
          onMouseMove: (s) => {
            var i = s.pageX,
              a = s.pageY,
              t = i - e / 2,
              n = a - r / 2;
            c()("img").each(function () {
              var s = c()(this).attr("data-speed");
              c()(this).attr("data-revert") && (s *= -1),
                l.p8.to(c()(this), 1, { x: 1 - t * s, y: 1 - n * s });
            });
          },
          children: [
            (0, a.jsxs)("div", {
              className: "relative overflow-hidden pt-6",
              children: [
                (0, a.jsxs)("div", {
                  class: "night",
                  children: [
                    (0, a.jsx)("div", { class: "shooting_star" }),
                    (0, a.jsx)("div", { class: "shooting_star" }),
                    (0, a.jsx)("div", { class: "shooting_star" }),
                    (0, a.jsx)("div", { class: "shooting_star" }),
                    (0, a.jsx)("div", { class: "shooting_star" }),
                    (0, a.jsx)("div", { class: "shooting_star" }),
                    (0, a.jsx)("div", { class: "shooting_star" }),
                    (0, a.jsx)("div", { class: "shooting_star" }),
                    (0, a.jsx)("div", { class: "shooting_star" }),
                    (0, a.jsx)("div", { class: "shooting_star" }),
                    (0, a.jsx)("div", { class: "shooting_star" }),
                    (0, a.jsx)("div", { class: "shooting_star" }),
                    (0, a.jsx)("div", { class: "shooting_star" }),
                    (0, a.jsx)("div", { class: "shooting_star" }),
                    (0, a.jsx)("div", { class: "shooting_star" }),
                    (0, a.jsx)("div", { class: "shooting_star" }),
                    (0, a.jsx)("div", { class: "shooting_star" }),
                    (0, a.jsx)("div", { class: "shooting_star" }),
                    (0, a.jsx)("div", { class: "shooting_star" }),
                    (0, a.jsx)("div", { class: "shooting_star" }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "container mx-auto ",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "flex flex-col items-center justify-center gap-5 py-10 lg:py-20",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "flex flex-col lg:flex-row justify-center   gap-4 ",
                          children: [
                            (0, a.jsx)("img", {
                              src: "/images/logo.png",
                              width: 250,
                              className: " object-contain",
                            }),
                            (0, a.jsxs)("div", {
                              className: "py-5",
                              children: [
                                (0, a.jsxs)("h1", {
                                  className: "text-white",
                                  children: [
                                    (0, a.jsx)("span", {
                                      style: { color: "#F2F922" },
                                      children: "to",
                                    }),
                                    " ",
                                    (0, a.jsx)("br", {}),
                                    "the ",
                                    (0, a.jsx)("br", {}),
                                    "sun!",
                                  ],
                                }),
                                (0, a.jsx)("img", {
                                  src: "/images/squares.svg",
                                  width: 100,
                                  className: "pt-3 pl-1",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "w-4/5 h-4/5 m-auto bg-black text-white relative",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "w-full h-full m-auto",
                              children: [
                                (0, a.jsxs)("img", {
                                  src: "/images/6864f851d6c326efeaadcceb11ec132a.svg",
                                  alt: "Pastel Pink Rectangle Blob",
                                  loading: "lazy",
                                  className:
                                    "w-full h-full transform scale-y-50",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "w-full h-1/2 absolute top-0 left-0 pl-[20%] transform translate-y-2/4",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "w-full h-full relative",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className: "w-full h-full ",
                                      children: [
                                        (0, a.jsxs)("img", {
                                          src: "/images/c060bab72e86ef8ff304d5c0ad96b84d.png",
                                          alt: "CA",
                                          loading: "lazy",
                                          className:
                                            "w-full h-full block object-cover",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "absolute top-0 right-0 w-10/12 h-full p-3 pl-1/12 flex items-center",
                                      children: [
                                        (0, a.jsxs)("input", {
                                          id: "ca_clipboard",
                                          type: "text",
                                          className:
                                            "text-xs md:text-base lg:text-xl box-border border-none bg-transparent text-black w-11/12 whitespace-nowrap overflow-hidden text-ellipsis truncate",
                                          value:
                                            "0x041532136E423BB271d8089E859C9f18162e57Fb",
                                          placeholder: "Crypto Token Address",
                                          disabled: true,
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "absolute top-0 right-0 w-full h-full",
                                          children: [
                                            (0, a.jsxs)("button", {
                                              className:
                                                "absolute top-0 right-0 outline-none align-top w-1/12 min-w-8 h-full cursor-pointer bg-transparent border-none hover:shadow-none z-10",
                                              onClick: () => copyCA(),
                                              children: [
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "w-9/12 h-9/12 p-1 max-w-12",
                                                  children: [
                                                    (0, a.jsxs)("span", {
                                                      children: [
                                                        (0, a.jsxs)("svg", {
                                                          focusable: "false",
                                                          role: "img",
                                                          className:
                                                            "relative z-10",
                                                          viewBox: "0 0 16 16",
                                                          width: "16",
                                                          height: "16",
                                                          fill: "currentColor",
                                                          ariaHidden: "true",
                                                          children: [
                                                            (0, a.jsxs)(
                                                              "path",
                                                              {
                                                                d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z",
                                                              }
                                                            ),
                                                            (0, a.jsxs)(
                                                              "path",
                                                              {
                                                                d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z",
                                                              }
                                                            ),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    (0, a.jsxs)("span", {
                                                      id: "copy_tooltip",
                                                      areaLabel:
                                                        "Copy url to clipboard",
                                                      areaHidden: true,
                                                      className:
                                                        "absolute text-black font-sans not-italic top-0 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white bg-opacity-70 border border-gray-300 p-2 rounded-md opacity-0 transition-opacity duration-200",
                                                      children: [
                                                        "Copy CA to clipboard",
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "flex md:flex-row flex-col md:gap-5 gap-2 ",
                          children: [
                            (0, a.jsxs)("a", {
                              href: "https://x.com/iampepesun",
                              className: "btn bg-green  gap-5  ",
                              children: [
                                " ",
                                (0, a.jsx)("img", {
                                  src: "/images/x-yellow.svg",
                                  className: "",
                                  width: 25,
                                }),
                                "X(Twitter)",
                              ],
                            }),
                            (0, a.jsxs)("a", {
                              href: "https://t.me/iampepesun",
                              className: "btn bg-green  gap-5  ",
                              children: [
                                " ",
                                (0, a.jsx)("img", {
                                  src: "/images/tg-yellow.svg",
                                  className: "",
                                  width: 25,
                                }),
                                "Telegram",
                              ],
                            }),
                            (0, a.jsxs)("a", {
                              href: "/",
                              className: "btn bg-green  gap-5  ",
                              children: [
                                " ",
                                (0, a.jsx)("img", {
                                  src: "/images/sunswap.png ",
                                  className: "",
                                  width: 25,
                                }),
                                "BUY NOW!!",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)(x.E.div, {
                      style: { scale: m },
                      class: "solar-system",
                      children: [
                        (0, a.jsxs)("div", {
                          id: "sun",
                          className: "flex items-center justify-center",
                          children: [
                            (0, a.jsx)("div", { className: "sun" }),
                            (0, a.jsx)("img", {
                              src: "/images/ezgif-2-e01aaa6c15.gif",
                              loop: "infinite",
                              width: 150,
                              className: "relative z-50",
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", { class: "orbit mercury-orbit" }),
                        (0, a.jsx)("div", {
                          class: "mercury-spin",
                          children: (0, a.jsx)("div", {
                            id: "mercury",
                            children: (0, a.jsx)("img", {
                              src: "/images/tron.png",
                              width: 150,
                              className: "relative z-50",
                            }),
                          }),
                        }),
                        (0, a.jsx)("div", { class: "orbit venus-orbit" }),
                        (0, a.jsx)("div", {
                          class: "venus-spin",
                          children: (0, a.jsx)("div", {
                            id: "venus",
                            children: (0, a.jsx)("img", {
                              src: "/images/feelgood.png",
                              width: 50,
                              className: "relative z-50",
                            }),
                          }),
                        }),
                        (0, a.jsx)("div", { class: "orbit earth-orbit" }),
                        (0, a.jsxs)("div", {
                          class: "earth-spin",
                          children: [
                            (0, a.jsx)("div", { class: "orbit moon-orbit" }),
                            (0, a.jsx)("div", {
                              class: "moon-spin",
                              children: (0, a.jsx)("div", { id: "moon" }),
                            }),
                            (0, a.jsx)("img", {
                              id: "earth",
                              src: "https://raw.githubusercontent.com/everdimension-personal/codepen-assets/master/earth_small_150.jpg",
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", { class: "orbit mars-orbit" }),
                        (0, a.jsx)("div", {
                          class: "mars-spin",
                          children: (0, a.jsx)("div", {
                            id: "mars",
                            children: (0, a.jsx)("img", {
                              src: "/images/head.png",
                              width: 150,
                              className: "relative z-50",
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "py-20 px-5",
                      children: (0, a.jsxs)("div", {
                        className:
                          "grid items-center grid-cols-1 gap-5 md:grid-cols-2",
                        children: [
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsxs)("h2", {
                                className: "text-white",
                                children: [
                                  (0, a.jsx)("img", {
                                    src: "/images/squares.svg",
                                    width: 100,
                                    className: "pb-3 pl-1",
                                  }),
                                  "ABOUT",
                                ],
                              }),
                              (0, a.jsxs)("p", {
                                className: "pt-5",
                                children: [
                                  (0, a.jsx)("b", {
                                    children: (0, a.jsx)("i", {
                                      children: "Pepe the Frog",
                                    }),
                                  }),
                                  " takes a vacation, soaks up some rays, and comes back brighter, bolder, and more hilarious than ever. That’s Pepesun! It’s a meme, it’s a token, it’s a sunny slice of internet magic designed to make your crypto experience as fun as a day at the beach.",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        " gap-5 play-section relative justify-center overflow-hidden flex items-center",
                      children: [
                        (0, a.jsx)("img", {
                          "data-speed": "0.01",
                          src: "/images/astro.png",
                          className:
                            "w-20  bottom-0 left-0 lg:w-auto absolute lg:relative z-30",
                        }),
                        (0, a.jsxs)("div", {
                          className: "relative z-10",
                          children: [
                            (0, a.jsx)(x.E.h1, {
                              initial: { opacity: 0, x: -10 },
                              whileInView: { opacity: 1, y: 0, x: 0 },
                              transition: { delay: 0.2, duration: 0.5 },
                              children: "PLAY",
                            }),
                            (0, a.jsx)(x.E.h1, {
                              initial: { opacity: 0, x: -20 },
                              whileInView: { opacity: 1, y: 0, x: 0 },
                              transition: { delay: 0.5, duration: 0.5 },
                              className: "text-white",
                              children: "NOW",
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "relative overflow-hidden h-full",
                          style: { width: 100, height: 100 },
                          children: (0, a.jsx)("a", {
                            href: "https://game.pepesun.vip/",
                            target: "_blank",
                            class: "glightbox_video",
                            children: (0, a.jsxs)("svg", {
                              width: "131",
                              height: "131",
                              viewBox: "0 0 131 131",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: [
                                (0, a.jsx)("path", {
                                  class: "inner-circle",
                                  d: "M65 21C40.1488 21 20 41.1488 20 66C20 90.8512 40.1488 111 65 111C89.8512 111 110 90.8512 110 66C110 41.1488 89.8512 21 65 21Z",
                                  fill: "white",
                                }),
                                (0, a.jsx)("circle", {
                                  class: "outer_circle",
                                  cx: "65.5",
                                  cy: "65.5",
                                  r: "64",
                                  stroke: "white",
                                }),
                                (0, a.jsx)("path", {
                                  class: "play",
                                  "fill-rule": "evenodd",
                                  "clip-rule": "evenodd",
                                  d: "M60 76V57L77 66.7774L60 76Z",
                                  fill: "#f7da7f",
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, a.jsx)("div", { class: "light" }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "py-20 px-5",
                      children: [
                        (0, a.jsxs)("h2", {
                          className: "text-white",
                          children: [
                            (0, a.jsx)("img", {
                              src: "/images/squares.svg",
                              width: 100,
                              className: "pb-3 pl-1",
                            }),
                            "HOW TO BUY",
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "info px-8 pt-5 mt-10 flex flex-col md:flex-row  items-center gap-10 ",
                          children: [
                            (0, a.jsx)("img", {
                              src: "/images/deposit.png",
                              width: 300,
                            }),
                            (0, a.jsx)("img", {
                              src: "/images/x.svg",
                              width: 50,
                              className: "hidden md:block",
                            }),
                            (0, a.jsxs)("div", {
                              className: "pb-2",
                              children: [
                                (0, a.jsx)("h2", {
                                  className: "pb-2",
                                  children: "Deposit TRX",
                                }),
                                (0, a.jsx)("p", {
                                  children:
                                    "Pepesun runs on the Tron blockchain, so you’ll need some TRX to buy it.",
                                }),
                              ],
                            }),
                            (0, a.jsx)("img", {
                              src: "/images/x.svg",
                              width: 50,
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "info   mt-5 flex flex-col md:flex-row items-center gap-10 ",
                          children: [
                            (0, a.jsx)("img", {
                              src: "/images/bet.png",
                              width: 300,
                            }),
                            (0, a.jsx)("img", {
                              src: "/images/x.svg",
                              width: 50,
                              className: "hidden md:block",
                            }),
                            (0, a.jsxs)("div", {
                              className: "pb-2",
                              children: [
                                (0, a.jsx)("h2", {
                                  className: "pb-2",
                                  children: "Swap TRX for Pepesun",
                                }),
                                (0, a.jsxs)("p", {
                                  children: [
                                    "Now comes the fun part! Once your wallet is connected,",
                                    (0, a.jsx)("br", {}),
                                    " look for the ",
                                    (0, a.jsx)("b", {
                                      children: (0, a.jsx)("i", {
                                        children: "“Swap”",
                                      }),
                                    }),
                                    " section on the Pepesun site.",
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsx)("img", {
                              src: "/images/x.svg",
                              width: 50,
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "info  pt-5 mt-5 flex flex-col md:flex-row items-center gap-10 ",
                          children: [
                            (0, a.jsx)("img", {
                              src: "/images/win.png",
                              width: 200,
                            }),
                            (0, a.jsx)("img", {
                              src: "/images/x.svg",
                              width: 50,
                              className: "hidden md:block",
                            }),
                            (0, a.jsxs)("div", {
                              className: "pb-2",
                              children: [
                                (0, a.jsx)("h2", {
                                  className: "pb-2",
                                  children: "Spread the Sunshine ",
                                }),
                                (0, a.jsxs)("p", {
                                  children: [
                                    "Whether you’re planning to hold, trade, or just enjoy the meme magic, your ",
                                    (0, a.jsx)("b", {
                                      children: (0, a.jsx)("i", {
                                        children: "Pepesun",
                                      }),
                                    }),
                                    " tokens are all yours.",
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsx)("img", {
                              src: "/images/x.svg",
                              width: 50,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "relative overflow-hidden ",
                  children: (0, a.jsxs)("main", {
                    id: "app",
                    class: "fire py-10 text-center",
                    children: [
                      (0, a.jsx)(x.E.h1, {
                        initial: { opacity: 0, y: 10 },
                        whileInView: { opacity: 1, y: 0, x: 0 },
                        transition: { delay: 0.2, duration: 0.5 },
                        children: "PRINTER",
                      }),
                      (0, a.jsx)(x.E.h2, {
                        initial: { opacity: 0, y: 10 },
                        whileInView: { opacity: 1, y: 0, x: 0 },
                        transition: { delay: 0.2, duration: 2 },
                        children: "goo brrrrrrr!!",
                      }),
                    ],
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "images",
                  children: [
                    (0, a.jsx)("img", {
                      src: "/images/squares.svg",
                      "data-speed": "0.05",
                      className: "sheet glitch",
                      width: 100,
                      style: { right: 100, top: 100 },
                    }),
                    (0, a.jsx)("img", {
                      src: "/images/triangle.svg",
                      "data-speed": "0.01",
                      className: "stair ",
                      width: 130,
                      style: { left: 100, top: 30 },
                    }),
                    (0, a.jsx)("img", {
                      src: "/images/globe.svg",
                      "data-speed": "0.01",
                      className: "glitch",
                      width: 200,
                      style: { right: 100, bottom: 70 },
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("footer", {
              className: "footer",
              children: (0, a.jsxs)("div", {
                className: "container mx-auto px-5",
                children: [
                  (0, a.jsxs)("h2", {
                    children: [
                      (0, a.jsx)("img", {
                        src: "/images/squares-black.svg",
                        width: 100,
                        className: "pb-3 pl-1",
                      }),
                      "Contact US",
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex gap-5 py-5",
                    children: [
                      (0, a.jsx)("a", {
                        href: "https://t.me/iampepesun",
                        children: (0, a.jsx)("img", {
                          src: "/images/tg.svg",
                          width: 30,
                        }),
                      }),
                      (0, a.jsx)("a", {
                        href: "https://x.com/iampepesun",
                        children: (0, a.jsx)("img", {
                          src: "/images/x_1.svg",
                          width: 30,
                        }),
                      }),
                      (0, a.jsx)("a", {
                        href: "https://coinmarketcap.com/currencies/pepesun/",
                        children: (0, a.jsx)("img", {
                          src: "/images/coinmarketcap.svg",
                          width: 30,
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("b", {
                    children: "\xa9 2024 by PEPESUN. All rights reserved!",
                  }),
                  (0, a.jsx)("br", {}),
                  (0, a.jsx)("div", {
                    className: "pt-2",
                    children: (0, a.jsx)(g(), {
                      href: "/disclaimer",
                      className: "text-black text-xs  underline",
                      children: "disclaimer",
                    }),
                  }),
                  (0, a.jsx)("br", {}),
                ],
              }),
            }),
          ],
        });
      }
      d()(
        () =>
          Promise.all([
            i.e(4087),
            i.e(1893),
            i.e(260),
            i.e(748),
            i.e(1484),
            i.e(4581),
          ]).then(i.bind(i, 92049)),
        { loadableGenerated: { webpack: () => [92049] }, ssr: !1 }
      );
    },
  },
]);
