const acorn = require('acorn');
const euphoriaDetailsComponentCode = `
function EuphoriaProductDetailsComponent({n}) {
  const [activeFaq, setActiveFaq] = _.useState(null);
  const [formData, setFormData] = _.useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = _.useState(false);

  const keyBenefits = [
    { title: "Detoxify Body", desc: "Efficiently flush out cellular toxins and metabolic acidic wastes." },
    { title: "Energize & Re-vitalize", desc: "Active molecular hydrogen provides robust antioxidant power to combat fatigue." },
    { title: "Neutralize Acidity", desc: "Counteract the effects of processed foods and stress to restore systemic pH balance." },
    { title: "Better Hydration", desc: "Micro-clustered water molecules penetrate cellular membranes significantly faster." },
    { title: "Boost Immunity", desc: "Promotes a resilient wellness landscape by optimizing cell health and defense." },
    { title: "Decelerate Aging", desc: "Scavenge toxic free radicals to support vibrant skin and organ longevity." },
    { title: "Enrich Taste of Food", desc: "Greatly enhances the flavor extraction during brewing, cooking, and tea preparation." },
    { title: "Alkaline Ionic Water", desc: "Superb daily drinking source with a clean, light, and mineral-balanced taste." },
  ];

  const specsList = [
    { label: "Product", value: "Alkaline Water Ionizer" },
    { label: "Model", value: "Euphoria" },
    { label: "Size ( MM )", value: "350(L) X 120(D) X 510 (H)" },
    { label: "Unit Weight", value: "6 Kgs" },
    { label: "Installation", value: "Table Top / Wall Mount" },
    { label: "Dispensing Method", value: "Smart Touch" },
    { label: "Rated Voltage", value: "220 V AC" },
    { label: "No of Plates", value: "7 Solid Hybrid Plates E-Cell Titanium Coated with Platinum" },
    { label: "Plate Technology", value: "Hybrid (Solid Plates) Electrolysis Ability" },
    { label: "Water Levels", value: "3 Levels Alkaline / 2 Levels Acidic / Natural" },
    { label: "Cleaning", value: "Automatic Deep Cleaning Manual (99.99% Purity)" },
    { label: "Display", value: "4 Digit FND LED Display PH Level, Auto Diagnostic" },
    { label: "ORP (MV)", value: "Max: -750 | Avg: -450" },
    { label: "PH Value", value: "4 - 10 Without Salt/Chemical (As per US FDA Standards)" },
    { label: "Flow Rate", value: "1.5 - 2 L/M" },
    { label: "Pressure", value: "3.0 Kg/Cm2" },
    { label: "Power", value: "180 VA Consumption" },
    { label: "Power Source Protector", value: "Fuse Over Current/Temp. Detector Automatically Stops" },
    { label: "Colour", value: "White & Black" }
  ];

  const healthBenefitsList = [
    { title: "Active Molecular Hydrogen", desc: "Infuses drinking water with abundant dissolved hydrogen gas, acting as a selective antioxidant targeting toxic free radicals." },
    { title: "Bio-Available Mineral Enrichment", desc: "Maintains crucial concentrations of ionic Calcium, Magnesium, and potassium for optimal metabolism and skeletal strength." },
    { title: "Aggressive Cellular Hydration", desc: "Breaks water clusters into 5-6 molecules instead of 15, allowing ultra-fast intra-cellular absorption and superior cellular detox." },
    { title: "Metabolic Acidity Control", desc: "Alkalizes the bloodstream and tissues to buffer lactic acid and prevent overall systemic fatigue." }
  ];

  const applicationsList = [
    { title: "Residential Kitchens", desc: "Perfect for health-conscious families, cooking, infant formula, and daily active hydration." },
    { title: "Executive Offices", desc: "Boost focus and energy levels index-wide with crisp, rejuvenating hydration." },
    { title: "Wellness & Yoga Studios", desc: "Rehydrate deeply on a cellular level after intense workout, meditation, or fitness sessions." },
    { title: "Clinics & Wellness Spas", desc: "Provide high-grade pH-balanced water to complement holistic and immune-support therapies." }
  ];

  const faqs = [
    { q: "How does the Kita Euphoria Alkaline Water Ionizer work?", a: "By routing purified source water into a highly efficient electrolysis chamber equipped with 7 platinum-coated titanium plates, separating the stream into antioxidant-rich alkaline drinking water and acidic water for sanitizing." },
    { q: "What are the health benefits of drinking alkaline ionized water?", a: "Alkaline ionized water neutralizes excess metabolic acidity, flushes out toxic cellular waste, delivers superior hydration by being micro-clustered, and actively scavenges oxidative free radicals through rich molecular hydrogen." },
    { q: "Do we need chemicals or salts to produce standard alkaline water?", a: "Absolutely not. The Kita Euphoria achieves accurate pH values from 4.0 up to 10.0 purely via plate-assisted electrolysis without any chemical additives or salts." },
    { q: "Is professional regional installation free?", a: "Yes, Kita systems delivers, installs, and provides complete hands-on doorstep demo training free of charge in Delhi, NCR, and all major cities." },
    { q: "How does the built-in automatic cleaning operate?", a: "The machine automates reverse-polarity cleaning after every session to prevent heavy calcium scale buildup on the plates, maintaining 99.99% plate purity and consistent performance." }
  ];

  return o.jsx("div", {
    className: "min-h-screen bg-white font-sans",
    children: o.jsxs("div", {
      children: [
        // 1. HERO BANNER
        o.jsx("div", {
          className: "relative bg-gradient-to-br from-[#1a2b66]/5 via-blue-50/20 to-white pt-32 pb-24 border-b border-gray-100 overflow-hidden",
          children: o.jsxs("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
            children: [
              o.jsxs("div", {
                className: "space-y-8",
                children: [
                  o.jsx("span", {
                    className: "inline-flex items-center px-4 py-1.5 rounded-full bg-[#1a2b66]/10 text-[#1a2b66] text-xs font-bold uppercase tracking-wider border border-[#1a2b66]/20",
                    children: "PREMIUM HYDROGEN WELLNESS"
                  }),
                  o.jsx("h1", {
                    className: "text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight",
                    children: "Kita Euphoria Water Ionizer"
                  }),
                  o.jsx("p", {
                    className: "text-lg sm:text-xl text-gray-600 leading-relaxed font-light",
                    children: "Transform ordinary drinking water into alkaline, antioxidant-rich water through advanced electrolysis technology."
                  }),
                  o.jsxs("div", {
                    className: "flex flex-wrap gap-4",
                    children: [
                      o.jsx("a", {
                        href: "#enquiry",
                        className: "px-8 py-4 bg-[#1a2b66] text-white font-bold rounded-xl shadow-lg shadow-blue-900/10 hover:bg-[#111e4a] hover:-translate-y-0.5 transition-all",
                        children: "Get Instant Quote"
                      }),
                      o.jsx("a", {
                        href: "#specs",
                        className: "px-8 py-4 bg-white text-[#1a2b66] border border-gray-200 font-bold rounded-xl hover:bg-gray-50 transition-all",
                        children: "Technical Specs"
                      })
                    ]
                  })
                ]
              }),
              o.jsx("div", {
                className: "flex justify-center",
                children: o.jsx("div", {
                  className: "relative bg-white border border-gray-100 p-8 rounded-3xl shadow-xl max-w-md w-full",
                  children: o.jsx("img", {
                    src: Il,
                    alt: "Kita Euphoria",
                    className: "w-full h-auto object-contain filter drop-shadow-lg"
                  })
                })
              })
            ]
          })
        }),

        // 2. PRODUCT OVERVIEW
        o.jsx("div", {
          className: "py-24 bg-gray-50/50 border-b border-gray-100",
          children: o.jsxs("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
            children: [
              o.jsxs("div", {
                className: "space-y-6",
                children: [
                  o.jsx("span", { className: "text-[#1a2b66] font-bold tracking-wider text-sm uppercase", children: "SECTION 02" }),
                  o.jsx("h2", { className: "text-3xl lg:text-4xl font-bold text-gray-900", children: "Product Overview" }),
                  o.jsx("p", {
                    className: "text-gray-600 leading-relaxed text-base",
                    children: "The Kita Euphoria Water Ionizer represents the absolute pinnacle of alkaline mineral purification in India. Equipped with 7 highly durable, platinum-coated E-Cell Titanium Plates, the machine is designed to deliver consistent pH modification and superior negative ORP values. Perfect for daily detoxification, immune defense development, and maximum structural cell-level hydration."
                  }),
                  o.jsx("p", {
                    className: "text-gray-600 leading-relaxed text-base",
                    children: "Crafted with user-centric styling, it mounts comfortably onto your kitchen tabletop or sleek kitchen wall structures with an ultra-premium white-black finish."
                  })
                ]
              }),
              o.jsx("div", {
                className: "bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6",
                children: [
                  o.jsx("h3", { className: "text-xl font-bold text-[#1a2b66]", children: "Quick Diagnostics" }),
                  o.jsxs("ul", {
                    className: "space-y-4",
                    children: [
                      o.jsxs("li", { className: "flex items-start gap-3", children: [o.jsx(hg, { className: "h-5 w-5 text-green-500 mt-0.5" }), o.jsx("span", { className: "text-gray-700 text-sm", children: "3 Alkaline, 2 Acidic & 1 Natural level selections" })] }),
                      o.jsxs("li", { className: "flex items-start gap-3", children: [o.jsx(hg, { className: "h-5 w-5 text-green-500 mt-0.5" }), o.jsx("span", { className: "text-gray-700 text-sm", children: "Max -750 mV powerful anti-oxidizing output" })] }),
                      o.jsxs("li", { className: "flex items-start gap-3", children: [o.jsx(hg, { className: "h-5 w-5 text-green-500 mt-0.5" }), o.jsx("span", { className: "text-gray-700 text-sm", children: "Full automatic self-cleaning dynamic cycle" })] })
                    ]
                  })
                ]
              })
            ]
          })
        }),

        // 3. KEY BENEFITS
        o.jsx("div", {
          className: "py-24 bg-white border-b border-gray-100",
          children: o.jsxs("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-8 space-y-16",
            children: [
              o.jsxs("div", {
                className: "text-center max-w-2xl mx-auto space-y-4",
                children: [
                  o.jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-gray-900", children: "Key Benefits" }),
                  o.jsx("p", { className: "text-gray-600", children: "Engineered specifically to support vital health goals and support active cellular wellness." })
                ]
              }),
              o.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",
                children: keyBenefits.map((item, idx) => o.jsxs("div", {
                  className: "p-8 rounded-2xl border border-gray-100 bg-gray-50/30 hover:bg-white hover:shadow-md transition-all duration-300",
                  children: [
                    o.jsx("div", {
                      className: "h-12 w-12 rounded-xl bg-blue-50 text-[#1a2b66] flex items-center justify-center mb-6",
                      children: o.jsx(hg, { className: "h-5 w-5" })
                    }),
                    o.jsx("h3", { className: "text-lg font-bold text-gray-900 mb-2", children: item.title }),
                    o.jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: item.desc })
                  ]
                }, idx))
              })
            ]
          })
        }),

        // 4. TECHNOLOGY EXPLAINED
        o.jsx("div", {
          className: "py-24 bg-gray-50/30 border-b border-gray-100",
          children: o.jsxs("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
            children: [
              o.jsx("div", {
                className: "space-y-6",
                children: [
                  o.jsx("span", { className: "text-blue-600 font-bold tracking-wider text-xs uppercase", children: "SECTION 04" }),
                  o.jsx("h2", { className: "text-3xl lg:text-4xl font-bold text-gray-900", children: "Electrolysis Technology Explained" }),
                  o.jsx("p", {
                    className: "text-gray-600 leading-relaxed",
                    children: "Within the core of the Kita Euphoria lie 7 solid chemical-grade titanium plates coated in heavy platinum (purity certified at 99.99%). This is structured into a state-of-the-art E-Cell electrolysis chamber."
                  }),
                  o.jsx("p", {
                    className: "text-gray-600 leading-relaxed",
                    children: "As water passes through, a precise electric field splits the raw water. Alkaline minerals like active calcium and magnesium are separated and dispensed on demand, providing a hydration engine that outlasts generic multi-mesh alternatives."
                  })
                ]
              }),
              o.jsx("div", {
                className: "bg-gradient-to-tr from-[#1a2b66] to-blue-900 text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col justify-between h-full min-h-[350px]",
                children: [
                  o.jsx("h3", { className: "text-2xl font-bold mb-6", children: "E-Cell Titanium Chamber" }),
                  o.jsx("p", { className: "text-blue-100 text-sm leading-relaxed mb-8", children: "Assembled with direct local engineering to protect platings and maximize stable active hydrogen yields." }),
                  o.jsxs("div", {
                    className: "grid grid-cols-3 gap-4 text-center border-t border-blue-800 pt-6",
                    children: [
                      o.jsxs("div", { children: [o.jsx("div", { className: "text-xl sm:text-2xl font-extrabold text-cyan-400", children: "7" }), o.jsx("div", { className: "text-xs text-blue-200 mt-1", children: "E-Cell Plates" })] }),
                      o.jsxs("div", { children: [o.jsx("div", { className: "text-xl sm:text-2xl font-extrabold text-cyan-400", children: "99.99%" }), o.jsx("div", { className: "text-xs text-blue-200 mt-1", children: "Platinum Coated" })] }),
                      o.jsxs("div", { children: [o.jsx("div", { className: "text-xl sm:text-2xl font-extrabold text-cyan-400", children: "Intel" }), o.jsx("div", { className: "text-xs text-blue-200 mt-1", children: "Auto-Clean" })] })
                    ]
                  })
                ]
              })
            ]
          })
        }),

        // 5. TECHNICAL SPECIFICATIONS
        o.jsx("div", {
          id: "specs",
          className: "py-24 bg-white border-b border-gray-100",
          children: o.jsxs("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-8 space-y-16",
            children: [
              o.jsxs("div", {
                className: "text-center max-w-2xl mx-auto space-y-4",
                children: [
                  o.jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-gray-900", children: "Technical Specifications" }),
                  o.jsx("p", { className: "text-gray-600", children: "Detailed parameters of the Kita Euphoria Alkaline Water Ionizer machine." })
                ]
              }),
              o.jsx("div", {
                className: "max-w-4xl mx-auto bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden",
                children: o.jsx("table", {
                  className: "min-w-full divide-y divide-gray-200",
                  children: o.jsx("tbody", {
                    className: "divide-y divide-gray-200",
                    children: specsList.map((row, idx) => o.jsxs("tr", {
                      className: idx % 2 === 0 ? "bg-white" : "bg-gray-50/50",
                      children: [
                        o.jsx("td", { className: "px-6 py-4 text-sm font-semibold text-gray-900 w-1/2", children: row.label }),
                        o.jsx("td", { className: "px-6 py-4 text-sm text-gray-600 w-1/2", children: row.value })
                      ]
                    }, idx))
                  })
                })
              })
            ]
          })
        }),

        // 6. HEALTH BENEFITS
        o.jsx("div", {
          className: "py-24 bg-gray-50/30 border-b border-gray-100",
          children: o.jsxs("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-8 space-y-16",
            children: [
              o.jsxs("div", {
                className: "text-center max-w-2xl mx-auto space-y-4",
                children: [
                  o.jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-gray-900", children: "Health Benefits" }),
                  o.jsx("p", { className: "text-gray-600", children: "Discover how ionizing drinking water brings systemic changes to body chemistry, hydration speed, and antioxidant status." })
                ]
              }),
              o.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                children: healthBenefitsList.map((item, idx) => o.jsxs("div", {
                  className: "p-8 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-4 hover:shadow-md transition-shadow",
                  children: [
                    o.jsxs("div", {
                      className: "flex items-center gap-4",
                      children: [
                        o.jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600 font-bold", children: idx + 1 }),
                        o.jsx("h3", { className: "text-lg font-bold text-gray-900", children: item.title })
                      ]
                    }),
                    o.jsx("p", { className: "text-sm text-gray-600 leading-relaxed pl-14", children: item.desc })
                  ]
                }, idx))
              })
            ]
          })
        }),

        // 7. APPLICATIONS
        o.jsx("div", {
          className: "py-24 bg-white border-b border-gray-100",
          children: o.jsxs("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-8 space-y-16",
            children: [
              o.jsxs("div", {
                className: "text-center max-w-2xl mx-auto space-y-4",
                children: [
                  o.jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-gray-900", children: "Applications" }),
                  o.jsx("p", { className: "text-gray-600", children: "Premium performance engineered for high-demand wellness environments." })
                ]
              }),
              o.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                children: applicationsList.map((item, idx) => o.jsxs("div", {
                  className: "flex gap-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm",
                  children: [
                    o.jsx("div", {
                      className: "w-12 h-12 shrink-0 rounded-xl bg-blue-50 text-[#1a2b66] flex items-center justify-center font-bold text-lg",
                      children: idx + 1
                    }),
                    o.jsxs("div", {
                      className: "space-y-1",
                      children: [
                        o.jsx("h3", { className: "text-lg font-bold text-gray-900", children: item.title }),
                        o.jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: item.desc })
                      ]
                    })
                  ]
                }, idx))
              })
            ]
          })
        }),

        // 8. WHY CHOOSE KITA EUPHORIA
        o.jsx("div", {
          className: "py-24 bg-gray-50/40 border-b border-gray-100",
          children: o.jsxs("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-8 space-y-16",
            children: [
              o.jsxs("div", {
                className: "text-center max-w-2xl mx-auto space-y-4",
                children: [
                  o.jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-gray-900", children: "Why Choose Kita Euphoria" }),
                  o.jsx("p", { className: "text-gray-600", children: "Why health-conscious customers choose Kita Systems Pvt. Ltd. as their wellness partner." })
                ]
              }),
              o.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                children: [
                  o.jsxs("div", {
                    className: "bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4",
                    children: [
                      o.jsx("h3", { className: "text-xl font-bold text-[#1a2b66]", children: "Delhi Manufacturing Facility" }),
                      o.jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: "Unlike imported reseller brands, Kita systems is assembled directly in our state-of-the-art facility in Sonia Vihar, Delhi, guaranteeing authentic quality and durable housing." })
                    ]
                  }),
                  o.jsxs("div", {
                    className: "bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4",
                    children: [
                      o.jsx("h3", { className: "text-xl font-bold text-[#1a2b66]", children: "No Reseller Marks" }),
                      o.jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: "Purchase directly from the actual manufacturer. Enjoy comprehensive cost savings without any middle-man reseller commission fees or inflated pricing structures." })
                    ]
                  }),
                  o.jsxs("div", {
                    className: "bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4",
                    children: [
                      o.jsx("h3", { className: "text-xl font-bold text-[#1a2b66]", children: "Comprehensive Local Support" }),
                      o.jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: "Our dedicated regional technician network ensures rapid support, reliable filter element provisioning, and maintenance availability inside 24 hours." })
                    ]
                  })
                ]
              })
            ]
          })
        }),

        // 9. FAQ SECTION
        o.jsx("div", {
          className: "py-24 bg-white border-b border-gray-100",
          children: o.jsxs("div", {
            className: "max-w-4xl mx-auto px-6 lg:px-8 space-y-16",
            children: [
              o.jsxs("div", {
                className: "text-center space-y-4",
                children: [
                  o.jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Frequently Asked Questions" }),
                  o.jsx("p", { className: "text-gray-600", children: "Common information about alkaline water ionizers and operation." })
                ]
              }),
              o.jsx("div", {
                className: "space-y-4",
                children: faqs.map((faq, idx) => o.jsxs("div", {
                  className: "bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300",
                  children: [
                    o.jsxs("button", {
                      onClick: () => setActiveFaq(activeFaq === idx ? null : idx),
                      className: "w-full text-left p-6 sm:p-8 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors",
                      children: [
                        o.jsx("span", { className: "text-base sm:text-lg font-bold text-gray-900", children: faq.q }),
                        o.jsx("span", { className: "text-xl text-[#1a2b66] ml-4 shrink-0 font-extrabold", children: activeFaq === idx ? "−" : "+" })
                      ]
                    }),
                    activeFaq === idx && o.jsx("div", {
                      className: "px-6 sm:px-8 pb-6 sm:pb-8 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 pt-4 bg-gray-50/30",
                      children: faq.a
                    })
                  ]
                }, idx))
              })
            ]
          })
        }),

        // 10. CONTACT & ENQUIRY FORM
        o.jsx("div", {
          id: "enquiry",
          className: "py-24 bg-gray-50/40 relative",
          children: o.jsxs("div", {
            className: "max-w-3xl mx-auto px-6 lg:px-8 space-y-12",
            children: [
              o.jsxs("div", {
                className: "text-center space-y-4",
                children: [
                  o.jsx("span", { className: "inline-block px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-bold text-[#1a2b66] uppercase", children: "Enquire Now" }),
                  o.jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-gray-900", children: "Get a Free Consultation & Quote" }),
                  o.jsx("p", { className: "text-gray-600", children: "Submit your details below and an engineer will connect with you to review your installation site." })
                ]
              }),
              o.jsx("div", {
                className: "bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-xl",
                children: submitted ? o.jsxs("div", {
                  className: "text-center py-12 space-y-4",
                  children: [
                    o.jsx("div", { className: "w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl font-extrabold", children: "✓" }),
                    o.jsx("h3", { className: "text-2xl font-bold text-gray-900", children: "Enquiry Submitted Successfully!" }),
                    o.jsx("p", { className: "text-gray-600", children: "Thank you for reaching out. A premium water-ionizer specialist will contact you shortly." })
                  ]
                }) : o.jsxs("form", {
                  onSubmit: (e) => { e.preventDefault(); setSubmitted(true); },
                  className: "space-y-6",
                  children: [
                    o.jsxs("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                      children: [
                        o.jsxs("div", {
                          children: [
                            o.jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Your Name" }),
                            o.jsx("input", { required: true, type: "text", value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), className: "w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a2b66]/30 focus:border-[#1a2b66]", placeholder: "E.g., Anil Kumar" })
                          ]
                        }),
                        o.jsxs("div", {
                          children: [
                            o.jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Email Address" }),
                            o.jsx("input", { required: true, type: "email", value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), className: "w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a2b66]/30 focus:border-[#1a2b66]", placeholder: "E.g., amit@example.com" })
                          ]
                        })
                      ]
                    }),
                    o.jsxs("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                      children: [
                        o.jsxs("div", {
                          children: [
                            o.jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Phone Number" }),
                            o.jsx("input", { required: true, type: "tel", value: formData.phone, onChange: (e) => setFormData({ ...formData, phone: e.target.value }), className: "w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a2b66]/30 focus:border-[#1a2b66]", placeholder: "E.g., +91 98765 43210" })
                          ]
                        }),
                        o.jsxs("div", {
                          children: [
                            o.jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Your Location" }),
                            o.jsx("input", { type: "text", className: "w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a2b66]/30 focus:border-[#1a2b66]", placeholder: "E.g., South Delhi" })
                          ]
                        })
                      ]
                    }),
                    o.jsxs("div", {
                      children: [
                        o.jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Your Message" }),
                        o.jsx("textarea", { required: true, rows: 4, value: formData.message, onChange: (e) => setFormData({ ...formData, message: e.target.value }), className: "w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a2b66]/30 focus:border-[#1a2b66]", placeholder: "Briefly tell us about your source water quality or requirements." })
                      ]
                    }),
                    o.jsx("button", {
                      type: "submit",
                      className: "w-full py-4 bg-[#1a2b66] text-white font-bold rounded-xl shadow-lg hover:bg-[#111e4a] transition-colors text-base",
                      children: "Submit Consultation Request"
                    })
                  ]
                })
              })
            ]
          })
        })
      ]
    })
  });
}
`;

try {
   acorn.parse("const _ = {}; const o = {}; const Il = '';" + euphoriaDetailsComponentCode, { ecmaVersion: 'latest', sourceType: 'module' });
   console.log("euphoriaDetailsComponentCode parsed perfectly!");
} catch (e) {
   console.log("euphoriaDetailsComponentCode ERROR: ", e);
}
