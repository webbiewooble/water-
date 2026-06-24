const catalogEntry = "{name:\"Kita Euphoria Water Ionizer\",desc:\"Advanced...",features:[{title:\"Produces Alkaline Ionized Water\",desc:\"Rich in essential calcium, magnesium, and hydration-boosting alkaline minerals.\"}],applications:[\"Residential Kitchens & Villas\",\"Executive Corporate Suites\",\"Wellness & Yoga Studios\",\"Clinics & Treatment Centers\"],faqs:[{q:\"How does it work?\",a:\"Pure water is routed to an E-Cell with 7 platinum coated titanium plates for splitting.\"}],seoTitle:\"Water Ionizer Machine in India | Kita Euphoria Alkaline Water Ionizer\",seoDesc:\"Premium alkaline water ionizer machine featuring 7 platinum-coated titanium plates, automatic cleaning, multiple pH levels, antioxidant-rich water, and advanced ionization technology for healthier hydration.\"},";

function getBal(str) {
  const noStrings = str.replace(/"(?:[^"\\]|\\.)*"/g, '').replace(/'(?:[^'\\]|\\.)*'/g, '').replace(/`(?:[^`\\]|\\.)*`/g, '');
  let b = 0, p = 0, k = 0;
  for (let i = 0; i < noStrings.length; i++) {
    if (noStrings[i] === '{') b++;
    else if (noStrings[i] === '}') b--;
    else if (noStrings[i] === '(') p++;
    else if (noStrings[i] === ')') p--;
    else if (noStrings[i] === '[') k++;
    else if (noStrings[i] === ']') k--;
  }
  return [b, p, k];
}
console.log("Cat:", getBal(catalogEntry));
