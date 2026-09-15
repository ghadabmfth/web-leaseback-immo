/* @ds-bundle: {"format":4,"namespace":"LeasebackImmoDesignSystem_ad7840","components":[{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"AssetCard","sourcePath":"components/content/AssetCard.jsx"},{"name":"CheckList","sourcePath":"components/content/CheckList.jsx"},{"name":"FeatureStat","sourcePath":"components/content/FeatureStat.jsx"},{"name":"ObjectivesBand","sourcePath":"components/content/ObjectivesBand.jsx"},{"name":"SolutionCard","sourcePath":"components/content/SolutionCard.jsx"},{"name":"StepBadge","sourcePath":"components/content/StepBadge.jsx"},{"name":"StepRow","sourcePath":"components/content/StepRow.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"AccordionItem","sourcePath":"components/disclosure/Accordion.jsx"},{"name":"Accordion","sourcePath":"components/disclosure/Accordion.jsx"},{"name":"SiteFooter","sourcePath":"components/layout/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/layout/SiteHeader.jsx"}],"sourceHashes":{"components/brand/Icon.jsx":"a7f8382df388","components/brand/Logo.jsx":"50351f098b71","components/content/AssetCard.jsx":"a6bc2f0f5752","components/content/CheckList.jsx":"f407857f94be","components/content/FeatureStat.jsx":"a0b2878b14a3","components/content/ObjectivesBand.jsx":"0770fc0d2792","components/content/SolutionCard.jsx":"4394e8e9b61c","components/content/StepBadge.jsx":"80baf85dda02","components/content/StepRow.jsx":"99ae0e624596","components/core/Button.jsx":"da058df3e77b","components/core/Card.jsx":"bc205fcb259c","components/core/Pill.jsx":"03855ff03e81","components/core/SectionHeading.jsx":"6bfc20b6dc86","components/disclosure/Accordion.jsx":"06004a4c2441","components/layout/SiteFooter.jsx":"649f3d1fbec5","components/layout/SiteHeader.jsx":"ba0afdbad456","ui_kits/website/Approche.jsx":"f63fb86e1cfa","ui_kits/website/CreditBail.jsx":"aeb6cfda7644","ui_kits/website/Faq.jsx":"3950a4a1d770","ui_kits/website/Fiducie.jsx":"fdea29431652","ui_kits/website/Home.jsx":"eeb88009ca21","ui_kits/website/parts.jsx":"ef706e110287"},"inlinedExternals":[],"unexposedExports":[{"name":"iconNames","sourcePath":"components/brand/Icon.jsx"}]} */

(() => {

const __ds_ns = (window.LeasebackImmoDesignSystem_ad7840 = window.LeasebackImmoDesignSystem_ad7840 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Brand glyphs lifted verbatim from Leaseback-immobilier.fig.
   The source also uses Font Awesome 6 Pro Solid at 12px for a handful of inline
   markers; that font is licensed and not shipped here — see readme.md ICONOGRAPHY. */
const GLYPHS = {
  "check-circle": {
    vb: "0 0 17.274 17.274",
    d: "M 8.637 17.274 C 13.407 17.274 17.274 13.407 17.274 8.637 C 17.274 3.867 13.407 0 8.637 0 C 3.867 0 0 3.867 0 8.637 C 0 13.407 3.867 17.274 8.637 17.274 Z M 11.691 5.583 C 12.029 5.246 12.576 5.246 12.913 5.584 C 13.251 5.922 13.25 6.469 12.912 6.806 L 8.03 11.689 L 8.026 11.692 C 7.865 11.855 7.645 11.946 7.416 11.946 C 7.187 11.946 6.967 11.855 6.805 11.692 L 6.802 11.689 L 4.362 9.249 C 4.024 8.911 4.024 8.365 4.362 8.027 C 4.699 7.69 5.246 7.69 5.583 8.027 L 7.416 9.859 L 11.691 5.584 L 11.691 5.583 Z"
  },
  "phone": {
    vb: "0 0 20.033 20.033",
    d: "M 6.266 0.979 C 5.956 0.239 5.15 -0.152 4.383 0.055 L 4.168 0.114 C 1.64 0.803 -0.52 3.252 0.11 6.234 C 1.562 13.082 6.95 18.47 13.798 19.921 C 16.784 20.555 19.229 18.391 19.918 15.864 L 19.977 15.648 C 20.188 14.878 19.793 14.072 19.057 13.766 L 15.25 12.182 C 14.604 11.912 13.857 12.099 13.411 12.643 L 11.9 14.49 C 9.149 13.125 6.935 10.839 5.663 8.034 L 7.392 6.625 C 7.936 6.183 8.12 5.436 7.854 4.786 L 6.266 0.979 Z"
  },
  "arrow": {
    vb: "0 0 16.384 21.849",
    d: "M 7.71 21.65 C 7.974 21.915 8.41 21.915 8.674 21.65 L 16.185 14.139 C 16.45 13.874 16.45 13.439 16.185 13.174 C 15.921 12.91 15.485 12.91 15.221 13.174 L 8.875 19.521 L 8.875 0.683 C 8.875 0.307 8.567 0 8.192 0 C 7.816 0 7.509 0.307 7.509 0.683 L 7.509 19.521 L 1.163 13.174 C 0.898 12.91 0.463 12.91 0.198 13.174 C -0.066 13.439 -0.066 13.874 0.198 14.139 L 7.71 21.65 Z",
    rotate: -90
  },
  "chevron": {
    vb: "0 0 11.557 5.19",
    d: "M 0.699 -0.715 C 0.304 -1.101 -0.329 -1.094 -0.715 -0.699 C -1.101 -0.304 -1.094 0.329 -0.699 0.715 L 0 0 L 0.699 -0.715 Z M 4.971 4.86 L 4.271 5.575 L 4.271 5.575 L 4.971 4.86 Z M 6.587 4.86 L 7.286 5.575 L 7.286 5.575 L 6.587 4.86 Z M 12.256 0.715 C 12.651 0.329 12.658 -0.304 12.272 -0.699 C 11.886 -1.094 11.253 -1.101 10.858 -0.715 L 11.557 0 L 12.256 0.715 Z M 0 0 L -0.699 0.715 L 4.271 5.575 L 4.971 4.86 L 5.67 4.145 L 0.699 -0.715 L 0 0 Z M 4.971 4.86 L 4.271 5.575 C 5.109 6.394 6.448 6.394 7.286 5.575 L 6.587 4.86 L 5.887 4.145 C 5.827 4.204 5.73 4.204 5.67 4.145 L 4.971 4.86 Z M 6.587 4.86 L 7.286 5.575 L 12.256 0.715 L 11.557 0 L 10.858 -0.715 L 5.887 4.145 L 6.587 4.86 Z"
  },
  "check-badge": {
    vb: "0 0 21.708 21.708",
    d: "M 10.854 0 C 12.385 0 13.737 0.767 14.547 1.933 C 15.946 1.679 17.447 2.095 18.528 3.176 C 19.61 4.257 20.025 5.758 19.771 7.157 C 20.941 7.971 21.708 9.324 21.708 10.854 C 21.708 12.385 20.941 13.737 19.775 14.547 C 20.029 15.946 19.614 17.447 18.533 18.528 C 17.451 19.61 15.95 20.025 14.551 19.771 C 13.737 20.941 12.385 21.708 10.854 21.708 C 9.324 21.708 7.971 20.941 7.161 19.775 C 5.762 20.029 4.261 19.614 3.18 18.533 C 2.099 17.451 1.683 15.95 1.938 14.551 C 0.767 13.737 0 12.385 0 10.854 C 0 9.324 0.767 7.971 1.933 7.161 C 1.679 5.762 2.095 4.261 3.176 3.18 C 4.257 2.099 5.758 1.683 7.157 1.938 C 7.971 0.767 9.324 0 10.854 0 Z M 10.854 1.357 C 9.654 1.357 8.607 2.031 8.081 3.027 C 7.929 3.316 7.594 3.451 7.284 3.358 C 6.207 3.027 4.99 3.29 4.138 4.138 C 3.29 4.99 3.027 6.207 3.358 7.284 C 3.451 7.594 3.316 7.929 3.027 8.081 C 2.031 8.607 1.357 9.654 1.357 10.854 C 1.357 12.054 2.031 13.101 3.027 13.627 C 3.316 13.779 3.451 14.114 3.358 14.424 C 3.027 15.501 3.29 16.718 4.138 17.57 C 4.99 18.418 6.207 18.681 7.284 18.35 C 7.594 18.257 7.929 18.392 8.081 18.681 C 8.607 19.677 9.654 20.351 10.854 20.351 C 12.054 20.351 13.101 19.677 13.627 18.681 C 13.779 18.392 14.114 18.257 14.424 18.35 C 15.501 18.681 16.718 18.418 17.57 17.57 C 18.418 16.718 18.681 15.501 18.35 14.424 C 18.257 14.114 18.392 13.779 18.681 13.627 C 19.677 13.101 20.351 12.054 20.351 10.854 C 20.351 9.654 19.677 8.607 18.681 8.081 C 18.392 7.929 18.257 7.594 18.35 7.284 C 18.681 6.207 18.418 4.99 17.57 4.138 C 16.718 3.29 15.501 3.027 14.424 3.358 C 14.114 3.451 13.779 3.316 13.627 3.027 C 13.101 2.031 12.054 1.357 10.854 1.357 Z M 15.148 7.918 C 15.413 8.183 15.413 8.613 15.148 8.878 L 9.723 14.303 C 9.458 14.568 9.028 14.568 8.763 14.303 L 6.56 12.1 C 6.295 11.835 6.295 11.405 6.56 11.14 C 6.825 10.875 7.255 10.875 7.52 11.14 L 9.243 12.863 L 14.188 7.918 C 14.453 7.653 14.883 7.653 15.148 7.918 Z"
  },
  "mail": {
    vb: "0 0 17.787 14.213",
    d: "M 16 0 L 16 -0.667 L 1.787 -0.667 L 1.787 0 L 1.787 0.667 L 16 0.667 L 16 0 Z M 1.787 0 L 1.787 -0.667 C 0.439 -0.667 -0.667 0.411 -0.667 1.773 L 0 1.773 L 0.667 1.773 C 0.667 1.161 1.162 0.667 1.787 0.667 L 1.787 0 Z M 0 1.773 L -0.667 1.773 L -0.667 12.44 L 0 12.44 L 0.667 12.44 L 0.667 1.773 L 0 1.773 Z M 0 12.44 L -0.667 12.44 C -0.667 13.801 0.438 14.88 1.787 14.88 L 1.787 14.213 L 1.787 13.547 C 1.162 13.547 0.667 13.052 0.667 12.44 L 0 12.44 Z M 1.787 14.213 L 1.787 14.88 L 16 14.88 L 16 14.213 L 16 13.547 L 1.787 13.547 L 1.787 14.213 Z M 16 14.213 L 16 14.88 C 17.348 14.88 18.454 13.801 18.454 12.44 L 17.787 12.44 L 17.12 12.44 C 17.12 13.052 16.625 13.547 16 13.547 L 16 14.213 Z M 17.787 12.44 L 18.454 12.44 L 18.454 1.773 L 17.787 1.773 L 17.12 1.773 L 17.12 12.44 L 17.787 12.44 Z M 17.787 1.773 L 18.454 1.773 C 18.454 0.411 17.348 -0.667 16 -0.667 L 16 0 L 16 0.667 C 16.625 0.667 17.12 1.161 17.12 1.773 L 17.787 1.773 Z"
  },
  "pin": {
    vb: "0 0 14.213 17.786",
    d: "M 7.64 17.6 L 8.062 18.115 C 8.067 18.112 8.071 18.108 8.075 18.104 L 7.64 17.6 Z M 12.133 2.093 L 12.605 1.621 L 12.605 1.621 L 12.133 2.093 Z M 2.08 2.093 L 1.608 1.621 L 1.608 1.621 L 2.08 2.093 Z M 6.573 17.6 L 6.138 18.104 C 6.149 18.114 6.161 18.124 6.173 18.133 L 6.573 17.6 Z M 7.64 17.6 L 8.075 18.104 C 8.919 17.377 10.601 15.832 12.077 13.893 C 13.538 11.975 14.88 9.564 14.88 7.12 L 14.213 7.12 L 13.546 7.12 C 13.546 9.115 12.428 11.231 11.016 13.086 C 9.619 14.92 8.014 16.396 7.204 17.095 L 7.64 17.6 Z M 14.213 7.12 L 14.88 7.12 C 14.88 5.05 14.063 3.08 12.605 1.621 L 12.133 2.093 L 11.662 2.564 C 12.87 3.773 13.546 5.403 13.546 7.12 L 14.213 7.12 Z M 12.133 2.093 L 12.605 1.621 C 11.148 0.165 9.166 -0.667 7.107 -0.667 L 7.107 0 L 7.107 0.667 C 8.807 0.667 10.452 1.355 11.662 2.564 L 12.133 2.093 Z M 7.107 0 L 7.107 -0.667 C 5.047 -0.667 3.065 0.165 1.608 1.621 L 2.08 2.093 L 2.551 2.564 C 3.761 1.355 5.406 0.667 7.107 0.667 L 7.107 0 Z M 2.08 2.093 L 1.608 1.621 C 0.15 3.08 -0.667 5.05 -0.667 7.12 L 0 7.12 L 0.667 7.12 C 0.667 5.403 1.343 3.773 2.551 2.564 L 2.08 2.093 Z M 0 7.12 L -0.667 7.12 C -0.667 9.564 0.675 11.975 2.136 13.893 C 3.613 15.832 5.294 17.377 6.138 18.104 L 6.573 17.6 L 7.009 17.095 C 6.199 16.396 4.594 14.92 3.197 13.086 C 1.785 11.231 0.667 9.115 0.667 7.12 L 0 7.12 Z M 6.573 17.6 L 6.173 18.133 C 6.436 18.33 6.761 18.453 7.107 18.453 L 7.107 17.786 L 7.107 17.119 C 7.079 17.119 7.03 17.109 6.974 17.067 L 6.573 17.6 Z M 7.107 17.786 L 7.107 18.453 C 7.437 18.453 7.789 18.34 8.062 18.115 L 7.64 17.6 L 7.217 17.084 C 7.198 17.1 7.15 17.119 7.107 17.119 L 7.107 17.786 Z"
  }
};
function Icon({
  name,
  size = 20,
  color = "currentColor",
  style,
  ...rest
}) {
  const g = GLYPHS[name];
  if (!g) return null;
  const [,, w, h] = g.vb.split(" ").map(Number);
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: g.vb,
    width: size,
    height: h / w * size,
    fill: "none",
    "aria-hidden": "true",
    style: {
      display: "block",
      flex: "none",
      transform: g.rotate ? `rotate(${g.rotate}deg)` : undefined,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: g.d,
    fill: color,
    fillRule: "nonzero"
  }));
}
const iconNames = Object.keys(GLYPHS);
Object.assign(__ds_scope, { Icon, iconNames });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Wordmark transcribed verbatim from the brand SVG supplied by the client
   (uploads/Leaseback-immo-logo.svg). The rose dot is fixed at the brand red;
   the lettering inherits `color`, so tone="light" renders the reversed lock-up. */
function Logo({
  tone = "dark",
  height = 40,
  style,
  ...rest
}) {
  const color = tone === "light" ? "var(--lb-white, #fff)" : "var(--lb-ink, #171B22)";
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 275 59",
    role: "img",
    "aria-label": "leaseback.immo",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      height,
      width: 275 / 59 * height,
      display: "block",
      color,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M0 0.500732H5.09148V25.082H20.449V29.7143H0V0.500732Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M47.4506 5.13307H30.9245V12.6454H45.5731V17.2778H30.9245V25.082H47.6594V29.7143H25.833V0.500732H47.4506V5.13307Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M81.7559 29.7143H76.3304L73.3673 22.6616H59.5534L56.5482 29.7143H51.29L64.1442 0.29248H68.9017L81.7559 29.7143ZM66.4393 6.42682L61.4315 18.1124H71.4893L66.4393 6.42682Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M90.8968 9.64028C91.0916 10.0579 91.4472 10.4474 91.9637 10.8089C92.4796 11.1709 93.1908 11.5049 94.0974 11.8108C95.004 12.1173 96.1544 12.4366 97.5494 12.7706C99.0836 13.1602 100.443 13.5912 101.629 14.0644C102.815 14.5376 103.797 15.1149 104.579 15.7963C105.359 16.4782 105.953 17.2714 106.357 18.175C106.761 19.0793 106.964 20.1438 106.964 21.3673C106.964 22.7594 106.708 23.997 106.198 25.082C105.687 26.167 104.976 27.0852 104.066 27.8368C103.156 28.5878 102.061 29.1587 100.784 29.5476C99.5059 29.9372 98.1021 30.1319 96.572 30.1319C94.3185 30.1319 92.162 29.7494 90.1032 28.9838C88.0437 28.2193 86.1382 27.0437 84.3853 25.4575L87.4741 21.785C88.893 23.0097 90.3254 23.9485 91.7724 24.6024C93.2189 25.2563 94.8607 25.5827 96.6972 25.5827C98.2829 25.5827 99.5415 25.2487 100.474 24.5813C101.406 23.9134 101.872 23.0097 101.872 21.8686C101.872 21.3404 101.782 20.8673 101.6 20.4497C101.419 20.032 101.084 19.6501 100.596 19.3015C100.108 18.9541 99.438 18.6277 98.5876 18.3212C97.7366 18.0153 96.6282 17.6948 95.2613 17.3614C93.6991 17.0006 92.3111 16.5964 91.0986 16.1507C89.885 15.7062 88.8673 15.1494 88.0437 14.4814C87.2208 13.8135 86.5926 13.0069 86.161 12.0611C85.7282 11.1154 85.5129 9.9608 85.5129 8.59683C85.5129 7.31767 85.7603 6.15608 86.2575 5.11263C86.7541 4.06861 87.4366 3.17197 88.3064 2.42097C89.1755 1.66938 90.2207 1.09209 91.4426 0.688519C92.6644 0.285528 93.9985 0.0837402 95.445 0.0837402C97.5874 0.0837402 99.5146 0.396658 101.225 1.02249C102.936 1.64832 104.543 2.56017 106.046 3.75627L103.291 7.63703C101.955 6.66377 100.634 5.9192 99.3263 5.4045C98.0185 4.88979 96.6972 4.63244 95.3619 4.63244C93.8593 4.63244 92.6907 4.97343 91.8561 5.65483C91.0214 6.33681 90.6038 7.16443 90.6038 8.13828C90.6038 8.72258 90.7015 9.22325 90.8968 9.64028Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M161.055 2.5075C162.777 3.84573 163.638 5.67117 163.638 7.985C163.638 8.87696 163.521 9.67124 163.286 10.3678C163.051 11.0645 162.748 11.671 162.376 12.1869C162.003 12.7027 161.562 13.156 161.051 13.5456C160.54 13.9357 160.023 14.2708 159.499 14.5487C160.356 14.8545 161.137 15.209 161.842 15.6114C162.548 16.0144 163.157 16.4934 163.669 17.0491C164.179 17.6041 164.574 18.2639 164.851 19.0283C165.127 19.7922 165.266 20.6736 165.266 21.6738C165.266 22.9787 165.009 24.1321 164.495 25.1317C163.981 26.1318 163.253 26.9717 162.308 27.6526C161.363 28.3334 160.225 28.8475 158.892 29.1943C157.558 29.5412 156.086 29.7143 154.475 29.7143H140.977V0.500732H154.057C157.001 0.500732 159.334 1.16985 161.055 2.5075ZM157.049 11.8681C158.047 11.2107 158.547 10.1965 158.547 8.82608C158.547 7.62354 158.11 6.69298 157.236 6.03556C156.362 5.37814 155.094 5.05001 153.431 5.05001H146.068V12.8536H153.056C154.72 12.8536 156.05 12.5255 157.049 11.8681ZM158.676 24.1426C159.675 23.4618 160.174 22.4529 160.174 21.1176C160.174 19.8653 159.681 18.8921 158.696 18.196C157.712 17.5006 156.207 17.1526 154.183 17.1526H146.068V25.1656H154.556C156.304 25.1656 157.677 24.8252 158.676 24.1426Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M199.07 29.7143H193.645L190.682 22.6616H176.868L173.863 29.7143H168.604L181.459 0.29248H186.216L199.07 29.7143ZM183.754 6.42682L178.746 18.1124H188.804L183.754 6.42682Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M225.341 27.1898C224.52 27.8157 223.637 28.3585 222.692 28.817C221.745 29.2761 220.709 29.6247 219.582 29.8605C218.455 30.0967 217.21 30.2149 215.847 30.2149C213.704 30.2149 211.729 29.8254 209.92 29.0463C208.112 28.2678 206.547 27.2039 205.226 25.8545C203.904 24.5046 202.867 22.9119 202.116 21.0754C201.365 19.2388 200.99 17.2636 200.99 15.1493C200.99 13.0624 201.358 11.1012 202.096 9.26468C202.833 7.4287 203.869 5.82142 205.204 4.44459C206.54 3.06775 208.126 1.9822 209.963 1.18908C211.799 0.396557 213.829 0 216.055 0C217.391 0 218.608 0.11113 219.707 0.333387C220.806 0.556816 221.815 0.869734 222.732 1.27272C223.651 1.6763 224.499 2.15649 225.279 2.71273C226.058 3.26954 226.795 3.88134 227.491 4.5487L224.194 8.34698C223.025 7.26143 221.787 6.38526 220.479 5.71731C219.171 5.04995 217.683 4.71598 216.014 4.71598C214.622 4.71598 213.336 4.98737 212.154 5.52956C210.97 6.07234 209.948 6.80989 209.086 7.74104C208.223 8.67394 207.555 9.76535 207.083 11.0176C206.609 12.2693 206.373 13.6192 206.373 15.0656C206.373 16.5126 206.609 17.8696 207.083 19.1347C207.555 20.401 208.223 21.507 209.086 22.4528C209.948 23.3992 210.97 24.1426 212.154 24.6859C213.336 25.2281 214.622 25.4995 216.014 25.4995C217.794 25.4995 219.324 25.1591 220.605 24.4771C221.884 23.7951 223.15 22.8698 224.402 21.7018L227.699 25.0404C226.948 25.8475 226.162 26.5634 225.341 27.1898Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M258.915 29.7143H252.697L242.723 16.5683L238.174 21.2427V29.7143H233.083V0.500732H238.174V15.1909L252.071 0.500732H258.374L246.228 13.0624L258.915 29.7143Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M134.164 0.104736V4.60313H113.905C113.835 3.12394 113.764 1.61434 113.693 0.104736H134.164Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M113.839 30.1107V25.686H133.977V30.1107H113.839Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M117.761 17.3759V13.0132H130.184V17.3759H117.761Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M206.926 41.8683V39.7229H209.149V41.8683H206.926ZM207.054 57.7697V44.7202H208.997V57.7697H207.054Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M224.658 46.0326C224.953 45.7133 225.285 45.436 225.655 45.1997C226.025 44.9646 226.442 44.7798 226.906 44.6441C227.368 44.5107 227.885 44.4429 228.457 44.4429C229.972 44.4429 231.158 44.9102 232.016 45.8437C232.875 46.7772 233.304 48.061 233.304 49.6935V57.7696H231.359V50.1473C231.359 48.8851 231.061 47.9136 230.463 47.2322C229.866 46.5502 229.038 46.2093 227.978 46.2093C227.489 46.2093 227.027 46.2976 226.59 46.4748C226.152 46.6514 225.77 46.9123 225.441 47.2574C225.113 47.6019 224.852 48.0271 224.658 48.5319C224.465 49.0366 224.369 49.6092 224.369 50.2479V57.7696H222.45V50.097C222.45 48.8687 222.15 47.9136 221.553 47.2322C220.957 46.5502 220.135 46.2093 219.092 46.2093C218.57 46.2093 218.092 46.3104 217.654 46.5122C217.217 46.7146 216.835 47.0006 216.506 47.3708C216.177 47.7411 215.921 48.1745 215.736 48.6705C215.551 49.167 215.459 49.718 215.459 50.324V57.7696H213.516V44.7201H215.459V46.9164C215.676 46.5965 215.917 46.2853 216.177 45.9823C216.438 45.6793 216.736 45.4144 217.073 45.1874C217.41 44.9605 217.788 44.7798 218.209 44.6441C218.63 44.5107 219.119 44.4429 219.673 44.4429C220.733 44.4429 221.608 44.6915 222.298 45.1874C222.989 45.6834 223.51 46.3022 223.864 47.0427C224.098 46.6889 224.363 46.3531 224.658 46.0326Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M248.66 46.0326C248.954 45.7133 249.286 45.436 249.656 45.1997C250.026 44.9646 250.443 44.7798 250.907 44.6441C251.369 44.5107 251.887 44.4429 252.458 44.4429C253.974 44.4429 255.159 44.9102 256.017 45.8437C256.876 46.7772 257.305 48.061 257.305 49.6935V57.7696H255.36V50.1473C255.36 48.8851 255.062 47.9136 254.464 47.2322C253.867 46.5502 253.039 46.2093 251.979 46.2093C251.49 46.2093 251.028 46.2976 250.591 46.4748C250.153 46.6514 249.771 46.9123 249.443 47.2574C249.114 47.6019 248.853 48.0271 248.66 48.5319C248.467 49.0366 248.37 49.6092 248.37 50.2479V57.7696H246.452V50.097C246.452 48.8687 246.152 47.9136 245.554 47.2322C244.959 46.5502 244.137 46.2093 243.094 46.2093C242.572 46.2093 242.093 46.3104 241.656 46.5122C241.218 46.7146 240.836 47.0006 240.508 47.3708C240.179 47.7411 239.922 48.1745 239.737 48.6705C239.553 49.167 239.46 49.718 239.46 50.324V57.7696H237.517V44.7201H239.46V46.9164C239.678 46.5965 239.918 46.2853 240.179 45.9823C240.44 45.6793 240.738 45.4144 241.074 45.1874C241.411 44.9605 241.789 44.7798 242.21 44.6441C242.631 44.5107 243.12 44.4429 243.675 44.4429C244.735 44.4429 245.61 44.6915 246.3 45.1874C246.99 45.6834 247.512 46.3022 247.865 47.0427C248.099 46.6889 248.364 46.3531 248.66 46.0326Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M273.799 53.8702C273.454 54.703 272.98 55.4312 272.374 56.0536C271.768 56.6759 271.043 57.1678 270.203 57.5304C269.361 57.8919 268.453 58.0726 267.477 58.0726C266.502 58.0726 265.6 57.8919 264.776 57.5304C263.95 57.1678 263.236 56.68 262.63 56.0658C262.025 55.4517 261.553 54.7329 261.216 53.9082C260.88 53.0835 260.713 52.2085 260.713 51.2832C260.713 50.3579 260.88 49.4788 261.216 48.6453C261.553 47.8124 262.025 47.0848 262.63 46.4619C263.236 45.8396 263.956 45.3477 264.788 44.9851C265.622 44.6236 266.534 44.4429 267.526 44.4429C268.502 44.4429 269.408 44.6236 270.24 44.9851C271.074 45.3477 271.792 45.8355 272.398 46.4496C273.004 47.0638 273.475 47.7832 273.812 48.6079C274.148 49.4326 274.317 50.3076 274.317 51.2329C274.317 52.1582 274.144 53.0373 273.799 53.8702ZM271.957 49.2811C271.712 48.6599 271.371 48.1189 270.934 47.6574C270.496 47.1965 269.983 46.831 269.396 46.5619C268.806 46.2935 268.167 46.159 267.477 46.159C266.771 46.159 266.121 46.2894 265.534 46.5497C264.945 46.8105 264.443 47.1708 264.03 47.6317C263.619 48.0944 263.295 48.6313 263.059 49.2431C262.824 49.8566 262.706 50.5146 262.706 51.2206C262.706 51.9248 262.828 52.5881 263.071 53.2086C263.316 53.8298 263.653 54.3673 264.082 54.82C264.511 55.2739 265.02 55.6342 265.608 55.9032C266.197 56.1717 266.836 56.3062 267.526 56.3062C268.233 56.3062 268.882 56.1758 269.469 55.9161C270.059 55.6552 270.564 55.2985 270.985 54.8457C271.404 54.3919 271.733 53.8596 271.969 53.2467C272.205 52.6343 272.322 51.9751 272.322 51.2709C272.322 50.5649 272.201 49.9028 271.957 49.2811Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "268.241",
    cy: "23.2284",
    r: "6.07581",
    fill: "#E34454"
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/AssetCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Asset-type card from "Pour quels besoins ?": full-bleed photo, radius 15,
   transparent→black vertical scrim, gold Inter 400/25 title over Public Sans body. */
function AssetCard({
  image,
  title,
  body,
  height = 513,
  style,
  ...rest
}) {
  const h = typeof height === "number" ? `clamp(300px, ${height / 1920 * 100}vw, ${height}px)` : height;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "var(--r-15)",
      height: h,
      minHeight: 300,
      background: image ? `url(${image}) center/cover no-repeat` : "var(--lb-ink-4)",
      boxShadow: "var(--shadow-soft)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      right: 24,
      bottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "var(--type-h4-size)",
      lineHeight: "var(--type-h4-lh)",
      color: "var(--lb-gold)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 0",
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--type-body-size)",
      lineHeight: "var(--type-body-lh)",
      color: "var(--lb-white)"
    }
  }, body)));
}
Object.assign(__ds_scope, { AssetCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/AssetCard.jsx", error: String((e && e.message) || e) }); }

// components/content/CheckList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The rose check-badge bullet list used inside the Objectifs band. */
function CheckList({
  items = [],
  tone = "dark",
  gap = 20,
  style,
  ...rest
}) {
  const onDark = tone === "dark";
  return /*#__PURE__*/React.createElement("ul", _extends({
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap,
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: 14,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check-badge",
    size: 21.708,
    color: "var(--lb-rose)",
    style: {
      marginTop: 3
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--type-body-size)",
      lineHeight: "var(--type-body-lh)",
      color: onDark ? "var(--lb-white)" : "var(--lb-black)"
    }
  }, it))));
}
Object.assign(__ds_scope, { CheckList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CheckList.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureStat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Group 4430 — the four "En bref" reassurance items: a 44px rose glyph beside
   two lines of Public Sans 300 / 26px / 43px, -0.03em. */
function FeatureStat({
  icon = "check-badge",
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: 17,
      alignItems: "flex-start",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 34,
    color: "var(--lb-rose)",
    style: {
      marginTop: 7
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "clamp(18px,1.36vw,26px)",
      lineHeight: 1.65,
      letterSpacing: "-0.03em",
      color: "var(--lb-black)",
      whiteSpace: "pre-line"
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureStat.jsx", error: String((e && e.message) || e) }); }

// components/content/ObjectivesBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The navy radius-25 band with the rose tab on its left edge (Accueil V2, "Objectifs"). */
function ObjectivesBand({
  title,
  intro,
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      paddingLeft: 11,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: 48,
      borderRadius: "25px 0 0 25px",
      background: "var(--lb-rose)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "lb-objectives",
    style: {
      position: "relative",
      borderRadius: "var(--r-25)",
      background: "var(--lb-navy)",
      padding: "clamp(24px,2.4vw,32px) clamp(24px,3.2vw,60px) clamp(28px,2.8vw,40px) clamp(18px,1.6vw,26px)",
      display: "grid",
      gridTemplateColumns: "minmax(0,797px) minmax(0,784px)",
      gap: "clamp(32px,6vw,112px)",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--type-h2-size)",
      lineHeight: "var(--type-h2-lh)",
      color: "var(--lb-white)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "21px 0 0",
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--type-intro-size)",
      lineHeight: "var(--type-intro-lh)",
      color: "var(--lb-white)"
    }
  }, intro)), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CheckList, {
    items: items
  }))));
}
Object.assign(__ds_scope, { ObjectivesBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ObjectivesBand.jsx", error: String((e && e.message) || e) }); }

// components/content/StepBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Group 4331 — the numbered rose disc with the navy "Étape" tag beneath it. */
function StepBadge({
  number,
  label = "Étape",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: "var(--step-badge)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "var(--step-badge)",
      aspectRatio: "107 / 102",
      borderRadius: 999,
      background: "var(--lb-rose)",
      boxShadow: "var(--shadow-rose-lg)",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: "calc(var(--step-badge) * 0.477)",
      lineHeight: 1,
      color: "var(--lb-white)"
    }
  }, number), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      height: 36,
      minWidth: "calc(var(--step-badge) * 0.86)",
      padding: "0 16px",
      borderRadius: "var(--r-20)",
      background: "var(--lb-navy)",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: 18,
      lineHeight: 1,
      color: "var(--lb-white)"
    }
  }, label));
}
Object.assign(__ds_scope, { StepBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StepBadge.jsx", error: String((e && e.message) || e) }); }

// components/content/StepRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Group 4326 + Group 4331 — one row of the "Comment ça fonctionne ?" timeline.
   The dashed connector is drawn by the parent list; pass last to suppress it. */
function StepRow({
  number,
  label = "Étape",
  title,
  body,
  last = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "lb-step",
    style: {
      display: "flex",
      gap: 72,
      alignItems: "flex-start",
      position: "relative",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StepBadge, {
    number: number,
    label: label
  }), !last && /*#__PURE__*/React.createElement("span", {
    className: "lb-step__connector",
    style: {
      position: "absolute",
      left: "50%",
      top: "calc(var(--step-badge) + 52px)",
      bottom: "calc(0px - var(--step-gap))",
      width: 0,
      borderLeft: "1px dashed rgba(0,0,0,.35)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      borderRadius: "var(--r-15)",
      background: "var(--lb-white)",
      padding: "clamp(18px,2vw,23px) clamp(20px,2.2vw,26px) clamp(22px,2.6vw,30px)",
      minWidth: 0,
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "var(--type-h4-size)",
      lineHeight: "var(--type-h4-lh)",
      color: "var(--lb-ink)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "11px 0 0",
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--type-body-size)",
      lineHeight: "var(--type-body-lh)",
      color: "var(--lb-black)"
    }
  }, body)));
}
Object.assign(__ds_scope, { StepRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StepRow.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Component 1 (rose) / Component 2 (outline) from the .fig, plus the gold hero
   variant used on Accueil V2. 308×71, radius 16, label Public Sans 500 / 20px. */
const TONES = {
  primary: {
    bg: "var(--lb-rose)",
    fg: "var(--lb-white)",
    shadow: "var(--shadow-rose)",
    ring: "none"
  },
  gold: {
    bg: "var(--lb-gold)",
    fg: "var(--lb-white)",
    shadow: "var(--shadow-gold)",
    ring: "none"
  },
  secondary: {
    bg: "var(--lb-cream)",
    fg: "var(--lb-ink)",
    shadow: "none",
    ring: "var(--ring-hairline)"
  },
  dark: {
    bg: "var(--lb-navy)",
    fg: "var(--lb-white)",
    shadow: "var(--shadow-card-ink)",
    ring: "none"
  },
  ghost: {
    bg: "transparent",
    fg: "var(--lb-white)",
    shadow: "none",
    ring: "inset 0 0 0 1px rgba(255,255,255,.4)"
  }
};
const SIZES = {
  md: {
    h: "var(--btn-h)",
    px: "var(--btn-pad-x)",
    fs: "var(--type-nav-size)"
  },
  sm: {
    h: 52,
    px: 26,
    fs: 18
  }
};
function Button({
  children,
  tone = "primary",
  size = "md",
  arrow = true,
  full = false,
  disabled = false,
  as = "button",
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.primary;
  const s = SIZES[size] || SIZES.md;
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: "lb-btn",
    disabled: as === "button" ? disabled : undefined,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      boxSizing: "border-box",
      width: full ? "100%" : undefined,
      minWidth: full ? undefined : "var(--btn-w)",
      maxWidth: "100%",
      height: s.h,
      padding: typeof s.px === "number" ? `0 ${s.px}px` : `0 ${s.px}`,
      borderRadius: "var(--r-16)",
      border: "none",
      background: t.bg,
      color: t.fg,
      boxShadow: t.shadow === "none" ? t.ring : t.ring === "none" ? t.shadow : `${t.shadow}, ${t.ring}`,
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: s.fs,
      lineHeight: 1,
      letterSpacing: 0,
      textDecoration: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .45 : 1,
      transition: "transform var(--dur) var(--ease-standard), filter var(--dur) var(--ease-standard), box-shadow var(--dur) var(--ease-standard)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, children), arrow && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow",
    size: 16.384,
    color: t.fg
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Component 16 — the white content card: radius 15, 0 3px 10px rgba(0,0,0,.102).
   tone="dark" is Component 5 / Component 6 (#121C2D with a .1px white ring). */
function Card({
  children,
  tone = "light",
  padding = 26,
  style,
  ...rest
}) {
  const dark = tone === "dark";
  const navy = tone === "navy";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      boxSizing: "border-box",
      borderRadius: "var(--r-15)",
      padding,
      background: dark ? "var(--lb-navy-card)" : navy ? "var(--lb-navy)" : "var(--lb-white)",
      boxShadow: dark ? "var(--ring-on-dark)" : navy ? "var(--shadow-card-ink)" : "var(--shadow-card)",
      color: dark || navy ? "var(--lb-white)" : "var(--lb-ink)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The rose eyebrow capsule that opens every section on Accueil V2.
   43px tall, radius 22, 11% rose fill, 1px rose ring, Public Sans 400 / 17px. */
function Pill({
  children,
  tone = "outline",
  size = "md",
  style,
  ...rest
}) {
  const solid = tone === "solid";
  const dark = tone === "dark";
  const h = size === "lg" ? 50 : 43;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      boxSizing: "border-box",
      height: h,
      padding: size === "lg" ? "0 17px" : "0 17px",
      borderRadius: "var(--r-22)",
      background: dark ? "var(--lb-navy)" : solid ? "var(--lb-rose-tint-strong)" : "var(--lb-rose-tint)",
      boxShadow: dark || solid ? "none" : "var(--ring-rose)",
      color: dark ? "var(--lb-white)" : "var(--lb-rose)",
      fontFamily: "var(--font-body)",
      fontWeight: dark ? 300 : 400,
      fontSize: size === "lg" ? 19 : 17,
      lineHeight: 1,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/content/SolutionCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The paired crédit-bail / fiducie-sûreté cards on Accueil V2.
   779×566, radius 15 — white with the standard card shadow, or the navy inverse. */
function SolutionCard({
  badge,
  title,
  body,
  linkLabel,
  href = "#",
  tone = "light",
  style,
  ...rest
}) {
  const dark = tone === "dark";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      padding: "clamp(24px,3vw,38px) clamp(24px,4vw,54px) clamp(28px,3.4vw,44px)",
      borderRadius: "var(--r-15)",
      background: dark ? "var(--lb-navy)" : "var(--lb-white)",
      boxShadow: dark ? "var(--shadow-card-ink)" : "var(--shadow-card)",
      ...style
    }
  }, rest), badge && /*#__PURE__*/React.createElement(__ds_scope.Pill, {
    size: "lg"
  }, badge), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "26px 0 0",
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "var(--type-h3-size)",
      lineHeight: "var(--type-h3-lh)",
      color: dark ? "var(--lb-white)" : "var(--lb-ink)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "20px 0 0",
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--type-body-size)",
      lineHeight: "var(--type-body-lh)",
      color: dark ? "rgba(255,255,255,.84)" : "var(--lb-black)",
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, (Array.isArray(body) ? body : [body]).map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: 0
    }
  }, p))), linkLabel && /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      marginTop: "auto",
      paddingTop: 28,
      fontFamily: "var(--font-body)",
      fontWeight: 400,
      fontSize: 20,
      color: dark ? "var(--lb-gold)" : "var(--lb-rose)"
    }
  }, linkLabel, " \u2192"));
}
Object.assign(__ds_scope, { SolutionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SolutionCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Eyebrow pill → Inter 700/48 title → Public Sans 300/25 intro.
   The rhythm every Accueil V2 section opens with. */
function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  style,
  ...rest
}) {
  const onDark = tone === "dark";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 0,
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Pill, null, eyebrow)), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--type-h2-size)",
      lineHeight: "var(--type-h2-lh)",
      color: onDark ? "var(--lb-white)" : "var(--text-heading)"
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "12px 0 0",
      maxWidth: 880,
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--type-intro-size)",
      lineHeight: "var(--type-intro-lh)",
      color: onDark ? "rgba(255,255,255,.86)" : "var(--lb-black)"
    }
  }, intro));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Component 15 — the FAQ list. Each row is a 104px white bar, radius 10,
   0.3px black ring, Inter 400/25 question and a chevron. */
function AccordionItem({
  question,
  answer,
  open,
  onToggle,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: "var(--r-10)",
      background: "var(--lb-white)",
      boxShadow: "var(--ring-hairline)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    "aria-expanded": !!open,
    style: {
      all: "unset",
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      width: "100%",
      minHeight: 84,
      padding: "20px clamp(20px,2.4vw,36px)",
      cursor: "pointer",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "var(--type-h4-size)",
      lineHeight: 1.36,
      color: "var(--lb-ink-3)"
    }
  }, question), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron",
    size: 16,
    color: "var(--lb-rose)",
    style: {
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform var(--dur) var(--ease-standard)"
    }
  })), open && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 clamp(20px,2.4vw,36px) 28px",
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--type-body-size)",
      lineHeight: "var(--type-body-lh)",
      color: "var(--lb-black)",
      maxWidth: 900
    }
  }, answer));
}
function Accordion({
  items = [],
  defaultOpen = 0,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement(AccordionItem, {
    key: i,
    question: it.question,
    answer: it.answer,
    open: open === i,
    onToggle: () => setOpen(open === i ? -1 : i)
  })));
}
Object.assign(__ds_scope, { AccordionItem, Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Component 8 — the navy footer, 722px on the 1920 artboard. Three stacked zones
   separated by 24%-white rules: eligibility CTA, link columns, legal line. */
const COLS = [{
  title: "Solutions",
  links: ["Crédit-bail immobilier", "Fiducie-sûreté", "FAQ", "À propos", "Contact"]
}, {
  title: "Ressources",
  links: ["Obtenir de la trésorerie", "Débloquer des liquidités", "Refus de prêt bancaire", "Financer sans banque", "Qu'est-ce que le leaseback ?"]
}];
function SiteFooter({
  columns = COLS,
  phone = "02 55 99 44 07",
  email = "contact@leasebackimmo.fr",
  address = "15 Boulevard Gabriel\nGuist'hau, 44000 Nantes",
  onNavigate,
  style,
  ...rest
}) {
  const rule = {
    height: 1,
    background: "var(--lb-line-on-dark)",
    border: "none",
    margin: 0
  };
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: "var(--lb-navy)",
      color: "var(--lb-white)",
      padding: "clamp(40px,4vw,68px) var(--page-x) 34px",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lb-footer__top",
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 60,
      paddingBottom: "clamp(32px,4vw,66px)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--type-h1-size)",
      lineHeight: "var(--type-h1-lh)",
      color: "var(--lb-rose)"
    }
  }, "Testez votre \xE9ligibilit\xE9 en 5 minutes"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 0",
      maxWidth: 515,
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "35px"
    }
  }, "R\xE9pondez \xE0 quelques questions sur votre actif et votre besoin. Pr\xE9-orientation imm\xE9diate, gratuit et sans engagement.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 4,
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    tone: "primary",
    onClick: () => onNavigate && onNavigate("Test d'éligibilité")
  }, "Tester mon \xE9ligibilit\xE9"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-alt)",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "35px"
    }
  }, "Gratuit \xB7 Sans engagement \xB7 R\xE9ponse en 24h"))), /*#__PURE__*/React.createElement("hr", {
    style: rule
  }), /*#__PURE__*/React.createElement("div", {
    className: "lb-footer__cols",
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,369px) repeat(3, minmax(0,1fr))",
      gap: "clamp(32px,3.4vw,64px)",
      padding: "clamp(32px,3vw,50px) 0 clamp(36px,3.4vw,62px)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    tone: "light",
    height: 40
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "12px 0 0",
      fontFamily: "var(--font-alt)",
      fontWeight: 300,
      fontSize: 19,
      lineHeight: "30px"
    }
  }, "Des solutions de financement adoss\xE9es \xE0 votre immobilier, sans le vendre. Lib\xE9rez vos liquidit\xE9s, gardez l'usage de vos biens.")), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 400,
      fontSize: 20,
      lineHeight: 1,
      color: "var(--lb-rose)"
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      marginTop: 32
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(l);
    },
    style: {
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "28.8px",
      color: "var(--lb-white)"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 400,
      fontSize: 20,
      lineHeight: 1,
      color: "var(--lb-rose)"
    }
  }, "CONTACT"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 26,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 26,
      alignItems: "flex-start",
      fontSize: 18,
      lineHeight: "28.8px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 18,
    color: "var(--lb-white)",
    style: {
      marginTop: 5
    }
  }), phone), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 26,
      alignItems: "flex-start",
      fontSize: 18,
      lineHeight: "28.8px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mail",
    size: 18,
    color: "var(--lb-white)",
    style: {
      marginTop: 8
    }
  }), email), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 26,
      alignItems: "flex-start",
      fontSize: 18,
      lineHeight: "28.8px",
      whiteSpace: "pre-line"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "pin",
    size: 17,
    color: "var(--lb-white)",
    style: {
      marginTop: 6
    }
  }), address)))), /*#__PURE__*/React.createElement("hr", {
    style: rule
  }), /*#__PURE__*/React.createElement("div", {
    className: "lb-footer__legal",
    style: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 20,
      paddingTop: 26,
      fontFamily: "var(--font-alt)",
      fontWeight: 300,
      fontSize: 15,
      lineHeight: "30px",
      color: "rgba(255,255,255,.8)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 leaseback.immo \u2014 Tous droits r\xE9serv\xE9s"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "clamp(18px,2.4vw,48px)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit"
    }
  }, "Mentions l\xE9gales"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit"
    }
  }, "Politique de confidentialit\xE9"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit"
    }
  }, "Cookies"))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Component 9 — the site header. 104px tall, white, 0 3px 6px rgba(0,0,0,.1608),
   80px side inset. Two dropdown items (Solutions, Ressources) then two flat links. */
const DEFAULT_NAV = [{
  label: "Solutions",
  menu: ["Crédit-bail immobilier", "Fiducie-sûreté"]
}, {
  label: "Ressources",
  menu: ["Obtenir de la trésorerie", "Débloquer des liquidités", "Qu'est-ce que le leaseback ?"]
}, {
  label: "Notre approche"
}, {
  label: "Contact"
}];
function SiteHeader({
  nav = DEFAULT_NAV,
  phone = "02 55 99 44 07",
  cta = "Tester mon éligibilité",
  active,
  onNavigate,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(null);
  const [menu, setMenu] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", _extends({
    onMouseLeave: () => setOpen(null),
    style: {
      position: "relative",
      zIndex: 20,
      minHeight: 88,
      background: "var(--lb-white)",
      boxShadow: "var(--shadow-header)",
      display: "flex",
      alignItems: "center",
      gap: 24,
      padding: "16px var(--header-x)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate("Accueil");
    },
    style: {
      display: "block",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    height: 34,
    style: {
      height: "clamp(26px,2vw,40px)",
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    className: "lb-header__nav",
    style: {
      display: "flex",
      gap: "clamp(20px,3vw,66px)",
      marginLeft: "clamp(24px,7vw,145px)"
    }
  }, nav.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.label,
    onMouseEnter: () => setOpen(item.menu ? item.label : null),
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(item.label);
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: "var(--type-nav-size)",
      lineHeight: 1,
      whiteSpace: "nowrap",
      color: active === item.label ? "var(--lb-rose)" : "var(--lb-ink)",
      paddingBottom: 4,
      borderBottom: active === item.label ? "2px solid var(--lb-rose)" : "2px solid transparent"
    }
  }, item.label, item.menu && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron",
    size: 11.557,
    color: "currentColor"
  })), item.menu && open === item.label && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 40,
      left: -20,
      minWidth: 300,
      padding: "14px 0",
      borderRadius: "var(--r-15)",
      background: "var(--lb-white)",
      boxShadow: "var(--shadow-card)"
    }
  }, item.menu.map(m => /*#__PURE__*/React.createElement("a", {
    key: m,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(m);
    },
    style: {
      display: "block",
      padding: "11px 26px",
      fontFamily: "var(--font-body)",
      fontWeight: 400,
      fontSize: 18,
      color: "var(--lb-ink)"
    }
  }, m)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: "clamp(16px,2.4vw,45px)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:" + phone.replace(/\s/g, ""),
    className: "lb-header__phone",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 13,
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: "var(--type-nav-size)",
      color: "var(--lb-ink)",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 20.033,
    color: "var(--lb-rose)"
  }), /*#__PURE__*/React.createElement("span", null, phone)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    tone: "primary",
    style: {
      minWidth: 0
    },
    onClick: () => onNavigate && onNavigate("Test d'éligibilité")
  }, cta), /*#__PURE__*/React.createElement("button", {
    className: "lb-header__burger",
    "aria-label": "Menu",
    "aria-expanded": menu,
    onClick: () => setMenu(!menu),
    style: {
      display: "none",
      all: "unset",
      width: 40,
      height: 40,
      cursor: "pointer",
      flex: "none",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: 5
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "block",
      width: 22,
      height: 2,
      background: "var(--lb-ink)"
    }
  })))), menu && /*#__PURE__*/React.createElement("div", {
    className: "lb-header__drawer",
    style: {
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      display: "none",
      flexDirection: "column",
      background: "var(--lb-white)",
      boxShadow: "var(--shadow-card)",
      padding: "12px var(--header-x) 24px"
    }
  }, nav.flatMap(item => [item.label, ...(item.menu || [])]).map(label => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: "#",
    onClick: e => {
      e.preventDefault();
      setMenu(false);
      onNavigate && onNavigate(label);
    },
    style: {
      padding: "13px 0",
      borderBottom: "1px solid rgba(0,0,0,.08)",
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: 18,
      color: active === label ? "var(--lb-rose)" : "var(--lb-ink)"
    }
  }, label)), /*#__PURE__*/React.createElement("a", {
    href: "tel:" + phone.replace(/\s/g, ""),
    style: {
      padding: "16px 0 0",
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: 18,
      color: "var(--lb-rose)"
    }
  }, phone)));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Approche.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(function () {
  const {
    Button,
    Pill,
    SectionHeading,
    SolutionCard,
    CheckList
  } = window.LeasebackImmoDesignSystem_ad7840;
  const {
    Section,
    PageHero,
    NumberedPanel,
    IndexCard,
    ContrastPair,
    ChipRow
  } = window;
  const ELEMENTS = [{
    title: "Sa valeur",
    body: "La valeur vénale de l'actif détermine le plafond de refinancement mobilisable."
  }, {
    title: "Son usage",
    body: "Bureaux, industriel, commercial ou mixte : l'usage conditionne l'appétit des partenaires."
  }, {
    title: "Sa liquidité",
    body: "La revendabilité du bien et son emplacement pèsent sur les conditions obtenues."
  }, {
    title: "Son environnement juridique et fiscal",
    body: "Structure de détention, régime fiscal et contraintes contractuelles de l'opération."
  }, {
    title: "Les encours existants",
    body: "Le passif déjà adossé au bien détermine la marge de refinancement réelle."
  }, {
    title: "Les objectifs du dirigeant",
    body: "Croissance, trésorerie, restructuration ou réorganisation patrimoniale."
  }];
  function Approche({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
      image: "../../assets/img/asset-bureaux.jpg",
      eyebrow: "Notre approche",
      title: "L'actif avant le financement",
      intro: "Un actif immobilier professionnel est bien plus qu'un bien patrimonial ou une garantie bancaire : c'est un levier strat\xE9gique. Notre mission est de l'analyser dans sa globalit\xE9 pour identifier la structuration la plus pertinente.",
      secondary: "Notre m\xE9thode"
    }), /*#__PURE__*/React.createElement(Section, {
      pad: "100px 75px"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-split-rev"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Pill, null, "Notre conviction"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "20px 0 0",
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "var(--type-h2-size)",
        lineHeight: "var(--type-h2-lh)",
        color: "var(--lb-navy)"
      }
    }, "Un actif immobilier professionnel est un levier strat\xE9gique, pas une simple garantie.")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 20,
        lineHeight: "34px",
        color: "var(--lb-black)",
        display: "flex",
        flexDirection: "column",
        gap: 22
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, "Chez leaseback.immo, nous consid\xE9rons qu'un actif immobilier professionnel est bien plus qu'un simple bien patrimonial ou une garantie bancaire."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, "Il repr\xE9sente un levier strat\xE9gique capable d'accompagner le d\xE9veloppement d'une entreprise, de renforcer sa tr\xE9sorerie, de restructurer son passif ou de soutenir un projet de croissance."), /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: "var(--r-15)",
        background: "var(--lb-navy)",
        boxShadow: "var(--shadow-card-ink)",
        padding: "clamp(24px,2.2vw,32px) clamp(26px,2.4vw,36px)",
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: "var(--type-h4-size)",
        lineHeight: "var(--type-h4-lh)",
        color: "var(--lb-white)"
      }
    }, "Notre mission consiste \xE0 analyser cet actif dans sa globalit\xE9 afin d'identifier la structuration la plus pertinente au regard des objectifs de l'entreprise.")))), /*#__PURE__*/React.createElement(Section, {
      tone: "white",
      pad: "100px 75px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      align: "center",
      eyebrow: "Notre approche",
      title: "Une approche centr\xE9e sur l'actif",
      intro: "La plupart des recherches de financement commencent par une question. Notre point de d\xE9part est diff\xE9rent."
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 58
      }
    }, /*#__PURE__*/React.createElement(ContrastPair, {
      left: {
        label: "L'approche habituelle",
        quote: "« Quel est votre besoin de financement ? »",
        body: "Le dossier est construit à partir du montant recherché, puis l'actif est ramené au rang de garantie."
      },
      right: {
        label: "Notre approche",
        quote: "« Que permet réellement votre actif ? »",
        body: "Nous commençons par étudier l'actif immobilier lui-même. Cette lecture détermine ensuite le véhicule de structuration le plus adapté."
      }
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: "80px 0 30px",
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: "var(--type-h4-size)",
        lineHeight: "var(--type-h4-lh)",
        color: "var(--lb-ink)"
      }
    }, "Les six premiers \xE9l\xE9ments de notre analyse"), /*#__PURE__*/React.createElement("div", {
      className: "lb-grid lb-grid-3"
    }, ELEMENTS.map((e, i) => /*#__PURE__*/React.createElement(IndexCard, _extends({
      key: e.title,
      index: String(i + 1).padStart(2, "0")
    }, e))))), /*#__PURE__*/React.createElement(Section, {
      pad: "100px 75px"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-split"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Pill, null, "M\xE9thodologie"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "20px 0 0",
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "var(--type-h2-size)",
        lineHeight: "var(--type-h2-lh)",
        color: "var(--lb-rose)"
      }
    }, "Une m\xE9thodologie de structuration"), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "26px 0 0",
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 19,
        lineHeight: "32px",
        color: "var(--lb-black)",
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, "Chaque dossier fait l'objet d'une analyse approfondie."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, "Nous accompagnons nos clients depuis l'\xE9tude de faisabilit\xE9 jusqu'\xE0 la mise en \u0153uvre de l'op\xE9ration, en coordonnant les diff\xE9rents intervenants : \xE9tablissements financiers, cr\xE9dit-bailleurs, fiduciaires, notaires, avocats, experts immobiliers et conseils."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, "Notre r\xF4le est de construire une op\xE9ration coh\xE9rente, s\xE9curis\xE9e et adapt\xE9e aux objectifs de l'entreprise.")), /*#__PURE__*/React.createElement("h4", {
      style: {
        margin: "38px 0 20px",
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: 21,
        color: "var(--lb-ink)"
      }
    }, "Intervenants coordonn\xE9s"), /*#__PURE__*/React.createElement(ChipRow, {
      items: ["Établissements financiers", "Crédit-bailleurs", "Fiduciaires", "Notaires", "Avocats", "Experts immobiliers", "Conseils"]
    })), /*#__PURE__*/React.createElement(NumberedPanel, {
      title: "De l'\xE9tude de faisabilit\xE9 \xE0 la mise en \u0153uvre",
      tone: "dark",
      items: [{
        title: "Étude de faisabilité",
        body: "Analyse de l'actif, de la structure de détention et des objectifs poursuivis."
      }, {
        title: "Choix du véhicule de structuration",
        body: "Crédit-bail immobilier ou fiducie-sûreté, selon la valeur et le montage visé."
      }, {
        title: "Coordination des intervenants",
        body: "Nous pilotons l'ensemble des parties prenantes jusqu'à la signature."
      }, {
        title: "Mise en œuvre de l'opération",
        body: "Suivi jusqu'au déblocage des fonds et à la finalisation du montage."
      }]
    }))), /*#__PURE__*/React.createElement(Section, {
      tone: "white",
      pad: "100px 75px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      align: "center",
      eyebrow: "Notre approche",
      title: "Une expertise port\xE9e par Bluelease",
      intro: "leaseback.immo est une marque d\xE9velopp\xE9e par Bluelease, cabinet ind\xE9pendant sp\xE9cialis\xE9 dans le financement et la structuration d'actifs professionnels."
    })), /*#__PURE__*/React.createElement("div", {
      className: "lb-grid lb-grid-2",
      style: {
        gap: "clamp(24px,3vw,60px)",
        marginTop: 58
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: "var(--r-15)",
        background: "var(--lb-white)",
        boxShadow: "var(--shadow-card)",
        padding: "clamp(26px,2.4vw,36px) clamp(26px,2.8vw,42px) clamp(30px,2.8vw,42px)"
      }
    }, /*#__PURE__*/React.createElement(Pill, null, "Cabinet"), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: "22px 0 0",
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: "var(--type-h4-size)",
        color: "var(--lb-ink)"
      }
    }, "Bluelease"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "14px 0 26px",
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 17,
        lineHeight: "27px",
        color: "rgba(0,0,0,.72)"
      }
    }, "Bluelease accompagne les entreprises dans leurs projets de financement, aussi bien sur le leasing de mat\xE9riels et d'\xE9quipements professionnels que sur le refinancement d'actifs immobiliers professionnels."), /*#__PURE__*/React.createElement(CheckList, {
      tone: "light",
      gap: 14,
      items: ["Leasing de matériels et d'équipements professionnels", "Refinancement d'actifs immobiliers professionnels"]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: "var(--r-15)",
        background: "var(--lb-navy)",
        boxShadow: "var(--shadow-card-ink)",
        padding: "clamp(26px,2.4vw,36px) clamp(26px,2.8vw,42px) clamp(30px,2.8vw,42px)"
      }
    }, /*#__PURE__*/React.createElement(Pill, {
      tone: "solid"
    }, "Marque d\xE9di\xE9e"), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: "22px 0 0",
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: "var(--type-h4-size)",
        color: "var(--lb-white)"
      }
    }, "Leaseback immobilier"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "14px 0 26px",
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 17,
        lineHeight: "27px",
        color: "rgba(255,255,255,.78)"
      }
    }, "Cette organisation permet \xE0 leaseback.immo de b\xE9n\xE9ficier de l'exp\xE9rience, du r\xE9seau de partenaires et du savoir-faire d\xE9velopp\xE9s par Bluelease, tout en proposant une expertise enti\xE8rement consacr\xE9e au refinancement immobilier professionnel."), /*#__PURE__*/React.createElement(CheckList, {
      items: ["Réseau de partenaires financiers établi", "Expertise dédiée au refinancement immobilier professionnel"]
    })))), /*#__PURE__*/React.createElement(Section, {
      pad: "100px 75px 120px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      align: "center",
      eyebrow: "Notre approche",
      title: "Une plateforme exclusivement d\xE9di\xE9e aux professionnels",
      intro: "leaseback.immo s'adresse exclusivement aux entreprises, holdings, soci\xE9t\xE9s patrimoniales, dirigeants et \xE0 leurs conseils."
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        marginTop: 46
      }
    }, /*#__PURE__*/React.createElement(ChipRow, {
      items: ["Entreprises", "Holdings", "Sociétés patrimoniales", "Dirigeants", "Conseils"]
    })), /*#__PURE__*/React.createElement("div", {
      className: "lb-grid lb-grid-2",
      style: {
        gap: "clamp(24px,3vw,60px)",
        marginTop: 56
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: "var(--r-15)",
        background: "var(--lb-white)",
        boxShadow: "var(--shadow-card)",
        padding: "clamp(26px,2.2vw,34px) clamp(26px,2.4vw,40px) clamp(28px,2.4vw,38px)"
      }
    }, /*#__PURE__*/React.createElement(Pill, null, "Ce que nous ne faisons pas"), /*#__PURE__*/React.createElement("h4", {
      style: {
        margin: "22px 0 0",
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: "var(--type-h4-size)",
        color: "var(--lb-ink)"
      }
    }, "Pas de catalogue de solutions"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "10px 0 0",
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 17,
        lineHeight: "27px",
        color: "rgba(0,0,0,.72)"
      }
    }, "Nous n'avons pas vocation \xE0 proposer un catalogue de solutions de financement standardis\xE9es.")), /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: "var(--r-15)",
        background: "var(--lb-navy)",
        boxShadow: "var(--shadow-card-ink)",
        padding: "clamp(26px,2.2vw,34px) clamp(26px,2.4vw,40px) clamp(28px,2.4vw,38px)"
      }
    }, /*#__PURE__*/React.createElement(Pill, {
      tone: "solid"
    }, "Ce que nous faisons"), /*#__PURE__*/React.createElement("h4", {
      style: {
        margin: "22px 0 0",
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: "var(--type-h4-size)",
        color: "var(--lb-white)"
      }
    }, "Une structuration par dossier"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "10px 0 0",
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 17,
        lineHeight: "27px",
        color: "rgba(255,255,255,.78)"
      }
    }, "Notre d\xE9marche consiste \xE0 analyser chaque actif afin de d\xE9terminer la structuration la plus coh\xE9rente et d'accompagner sa mise en \u0153uvre avec les partenaires les plus adapt\xE9s.")))));
  }
  window.Approche = Approche;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Approche.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CreditBail.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(function () {
  const {
    Button,
    Pill,
    SectionHeading,
    StepRow,
    Card
  } = window.LeasebackImmoDesignSystem_ad7840;
  const {
    Section,
    PageHero,
    NumberedPanel,
    BenefitCard,
    IndexCard,
    ChipRow
  } = window;
  const NEEDS = [{
    title: "Financer votre croissance",
    body: "Recruter, investir dans de nouveaux équipements, ouvrir un nouveau site. Transformez votre immobilier en levier de développement."
  }, {
    title: "Consolider votre trésorerie",
    body: "Renforcer votre fonds de roulement sans contracter une dette classique. Libérez le capital immobilisé dans vos murs."
  }, {
    title: "Réduire votre endettement apparent",
    body: "L'actif en crédit-bail ne figure pas au bilan du preneur — préservez vos fonds propres et votre capacité d'endettement."
  }, {
    title: "Financer des travaux",
    body: "Extension, rénovation énergétique, mise aux normes — via avenant au contrat d'origine, sans refaire tout le montage."
  }];
  const STEPS = [{
    number: "01",
    title: "Test d'éligibilité",
    body: "Vous renseignez les caractéristiques de votre actif et votre besoin. Notre outil analyse votre situation en quelques minutes."
  }, {
    number: "02",
    title: "Analyse du dossier",
    body: "Guillaume Delcros étudie votre situation et vous recontacte sous 48h pour discuter des options possibles."
  }, {
    number: "03",
    title: "Proposition de montage",
    body: "Structuration personnalisée selon votre actif, votre forme juridique et vos objectifs patrimoniaux."
  }, {
    number: "04",
    title: "Accompagnement jusqu'au financement",
    body: "Suivi juridique, notarial et financier jusqu'au déblocage des fonds. Un interlocuteur unique tout au long du processus."
  }];
  function CreditBail({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
      image: "../../assets/img/approche.jpg",
      eyebrow: "D\xE8s 1 000 000 \u20AC",
      title: "Cr\xE9dit-bail immobilier : mobilisez vos locaux professionnels sans les vendre",
      intro: "Lib\xE9rez la tr\xE9sorerie de votre entreprise en c\xE9dant vos locaux \xE0 un cr\xE9dit-bailleur tout en conservant leur usage. D\xE9couvrez le cr\xE9dit-bail immobilier pour PME.",
      secondary: "En savoir plus"
    }), /*#__PURE__*/React.createElement(Section, {
      pad: "110px 75px"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-split"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Pill, null, "Comprendre"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "20px 0 0",
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "var(--type-h2-size)",
        lineHeight: "var(--type-h2-lh)",
        color: "var(--lb-rose)"
      }
    }, "Qu'est-ce que le cr\xE9dit-bail immobilier ?"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "26px 0 0",
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 20,
        lineHeight: "34px",
        color: "var(--lb-black)"
      }
    }, "Dans un montage de cr\xE9dit-bail immobilier, votre entreprise c\xE8de son bien immobilier professionnel \xE0 un \xE9tablissement financier \u2014 le cr\xE9dit-bailleur. Ce dernier vous le reloue imm\xE9diatement dans le cadre d'un contrat de cr\xE9dit-bail. Vous continuez \xE0 occuper vos locaux, vous payez des loyers d\xE9ductibles de votre r\xE9sultat imposable, et vous conservez la possibilit\xE9 de redevenir propri\xE9taire \xE0 l'issue du contrat en levant l'option d'achat, \xE0 un prix convenu d\xE8s le d\xE9part.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NumberedPanel, {
      title: "M\xE9canisme en trois temps",
      items: [{
        title: "Vous cédez votre bien",
        body: "Votre entreprise cède son bien immobilier professionnel au crédit-bailleur."
      }, {
        title: "Le crédit-bailleur vous le reloue",
        body: "Vous continuez à occuper vos locaux avec des loyers déductibles."
      }, {
        title: "Vous levez l'option d'achat",
        body: "À l'échéance, vous redevenez propriétaire à un prix convenu dès l'origine."
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement(ChipRow, {
      items: ["Loyers déductibles", "Option d'achat fixée à l'origine", "Trésorerie préservée"]
    }))))), /*#__PURE__*/React.createElement(Section, {
      tone: "white",
      pad: "110px 75px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      align: "center",
      eyebrow: "Nos solutions",
      title: "Pour quels besoins ?",
      intro: "Quel que soit votre objectif strat\xE9gique, le cr\xE9dit-bail immobilier s'adapte \xE0 votre situation."
    })), /*#__PURE__*/React.createElement("div", {
      className: "lb-grid lb-grid-4",
      style: {
        marginTop: 62
      }
    }, NEEDS.map((n, i) => /*#__PURE__*/React.createElement(IndexCard, _extends({
      key: n.title,
      index: String(i + 1).padStart(2, "0")
    }, n))))), /*#__PURE__*/React.createElement(Section, {
      pad: "110px 75px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      align: "center",
      eyebrow: "Nos solutions",
      title: "Les avantages du cr\xE9dit-bail immobilier",
      intro: "Une solution de financement structurante qui lib\xE8re votre entreprise des contraintes immobili\xE8res."
    })), /*#__PURE__*/React.createElement("div", {
      className: "lb-grid lb-grid-3",
      style: {
        marginTop: 62,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(BenefitCard, {
      label: "Financiers",
      title: "Tr\xE9sorerie & bilan",
      items: ["Financement à 100 % de l'investissement (terrain, frais d'acquisition, honoraires, assurances)", "Préservation des fonds propres : ni le bien ni le financement ne figurent au bilan", "Loyers entièrement déductibles du bénéfice imposable (hors quote-part terrain)", "Possibilité de moduler les loyers (constants, dégressifs, personnalisés selon le cycle d'exploitation)"]
    }), /*#__PURE__*/React.createElement(BenefitCard, {
      label: "Op\xE9rationnels",
      title: "Usage & flexibilit\xE9",
      items: ["Conservation totale de l'usage du bien pendant toute la durée du contrat", "Possibilité de sous-louer partiellement les locaux (sous accord du crédit-bailleur)", "Option d'achat convenue dès l'origine — vous maîtrisez la valeur de rachat"]
    }), /*#__PURE__*/React.createElement(BenefitCard, {
      label: "Fiscaux",
      title: "Optimisation fiscale",
      items: ["Loyers déductibles du résultat imposable", "TVA récupérable sur les loyers"]
    }))), /*#__PURE__*/React.createElement(Section, {
      tone: "navy",
      pad: "100px 75px"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-split",
      style: {
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Pill, {
      tone: "solid"
    }, "Comparatif"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "20px 0 0",
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "var(--type-h2-size)",
        lineHeight: "var(--type-h2-lh)",
        color: "var(--lb-rose)"
      }
    }, "Cr\xE9dit-bail immobilier ou fiducie-s\xFBret\xE9 ?"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "26px 0 0",
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 18,
        lineHeight: "30px",
        color: "rgba(255,255,255,.86)"
      }
    }, "Ces deux solutions ne s'adressent pas exactement aux m\xEAmes profils. Le cr\xE9dit-bail est adapt\xE9 aux actifs \xE0 partir de 800 000 \u20AC, avec une logique de cession puis relocation. La fiducie-s\xFBret\xE9 s'applique aux actifs significatifs (g\xE9n\xE9ralement \xE0 partir de 5 M\u20AC) et repose sur un transfert temporaire de propri\xE9t\xE9 en garantie d'un financement, sans cession d\xE9finitive."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "22px 0 0",
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 18,
        lineHeight: "30px",
        color: "rgba(255,255,255,.86)"
      }
    }, "Vous n'\xEAtes pas certain de la solution adapt\xE9e \xE0 votre situation ? Le test d'\xE9ligibilit\xE9 vous oriente en 5 minutes.")), /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: "var(--r-15)",
        background: "var(--lb-navy-card)",
        boxShadow: "var(--ring-on-dark)",
        padding: "44px 48px"
      }
    }, /*#__PURE__*/React.createElement(Pill, {
      tone: "solid"
    }, "Conseiller"), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: "22px 0 0",
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: 27,
        lineHeight: "40px",
        color: "var(--lb-white)"
      }
    }, "Besoin d'un conseil personnalis\xE9 ?"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "12px 0 30px",
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 17,
        lineHeight: "27px",
        color: "rgba(255,255,255,.78)"
      }
    }, "Notre \xE9quipe vous accompagne dans le choix de la solution la mieux adapt\xE9e \xE0 votre situation patrimoniale."), /*#__PURE__*/React.createElement(Button, {
      tone: "primary",
      full: true,
      onClick: () => go("Test d'éligibilité")
    }, "Tester mon \xE9ligibilit\xE9")))), /*#__PURE__*/React.createElement(Section, {
      pad: "110px 75px 120px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        marginBottom: 76
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      align: "center",
      eyebrow: "Accompagnement",
      title: "Comment \xE7a fonctionne ?",
      intro: "Un processus en 4 \xE9tapes, de l'\xE9ligibilit\xE9 au d\xE9blocage des fonds."
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 96,
        maxWidth: 1350,
        margin: "0 auto"
      }
    }, STEPS.map((s, i) => /*#__PURE__*/React.createElement(StepRow, _extends({
      key: s.number
    }, s, {
      last: i === STEPS.length - 1
    }))))));
  }
  window.CreditBail = CreditBail;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CreditBail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Faq.jsx
try { (() => {
(function () {
  const {
    Accordion,
    Pill,
    SectionHeading,
    Button,
    FeatureStat
  } = window.LeasebackImmoDesignSystem_ad7840;
  const {
    Section,
    PageHero
  } = window;
  const ITEMS = [{
    question: "Toutes les entreprises peuvent-elles accéder au crédit-bail immobilier ?",
    answer: "Non. L'accès dépend de la qualité de l'actif, de sa valeur vénale, de sa liquidité, de son usage et de la capacité de remboursement du dossier. Le dispositif s'adresse exclusivement aux entreprises, sociétés patrimoniales et dirigeants détenant un actif immobilier professionnel."
  }, {
    question: "Faut-il être en difficulté financière pour recourir à ces solutions ?",
    answer: "Non. Ces montages sont majoritairement utilisés pour financer une croissance, un investissement ou une réorganisation patrimoniale. Ils ne présument d'aucune difficulté de l'entreprise."
  }, {
    question: "Quelle est la différence entre le crédit-bail d'acquisition et le leaseback ?",
    answer: "Le crédit-bail d'acquisition finance l'achat d'un bien que vous ne détenez pas encore. Le leaseback porte sur un bien dont vous êtes déjà propriétaire : vous le cédez au crédit-bailleur qui vous le reloue immédiatement."
  }, {
    question: "Conservez-vous l'usage de vos locaux pendant le contrat ?",
    answer: "Oui. L'usage du bien est intégralement conservé pendant toute la durée du contrat, en crédit-bail comme en fiducie-sûreté."
  }, {
    question: "À partir de quel montant intervenez-vous ?",
    answer: "Le crédit-bail immobilier est généralement pertinent à partir de 1 000 000 € de valeur vénale. La fiducie-sûreté s'adresse aux opérations à partir de 5 M€."
  }, {
    question: "Combien de temps dure une opération ?",
    answer: "Un cycle de traitement de plusieurs mois est habituel selon la complexité du dossier, entre le test d'éligibilité et le déblocage des fonds."
  }];
  function Faq({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
      image: "../../assets/img/asset-mixte.jpg",
      eyebrow: "Ressources",
      title: "Questions fr\xE9quentes",
      intro: "\xC9ligibilit\xE9, m\xE9canismes, dur\xE9e, fiscalit\xE9 : les r\xE9ponses aux questions les plus pos\xE9es sur le refinancement d'actifs immobiliers professionnels.",
      primary: "Tester mon \xE9ligibilit\xE9",
      secondary: "Parler \xE0 un expert"
    }), /*#__PURE__*/React.createElement(Section, {
      pad: "100px 75px 120px"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-split"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Pill, null, "FAQ"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "20px 0 46px",
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 48,
        lineHeight: "64px",
        color: "var(--lb-navy)"
      }
    }, "Tout ce qu'il faut savoir avant de lancer une op\xE9ration"), /*#__PURE__*/React.createElement(Accordion, {
      items: ITEMS,
      defaultOpen: 0
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "sticky",
        top: 40,
        borderRadius: "var(--r-15)",
        background: "var(--lb-navy)",
        boxShadow: "var(--shadow-card-ink)",
        padding: "44px 46px"
      }
    }, /*#__PURE__*/React.createElement(Pill, {
      tone: "solid"
    }, "Conseiller"), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: "22px 0 0",
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: 27,
        lineHeight: "40px",
        color: "var(--lb-white)"
      }
    }, "Votre question n'est pas l\xE0 ?"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "12px 0 30px",
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 17,
        lineHeight: "27px",
        color: "rgba(255,255,255,.78)"
      }
    }, "Guillaume Delcros \xE9tudie votre situation et vous recontacte sous 48h pour discuter des options possibles."), /*#__PURE__*/React.createElement(Button, {
      tone: "primary",
      full: true,
      onClick: () => go("Test d'éligibilité")
    }, "Tester mon \xE9ligibilit\xE9"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22,
        fontFamily: "var(--font-alt)",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "24px",
        color: "rgba(255,255,255,.7)"
      }
    }, "Gratuit \xB7 Sans engagement \xB7 R\xE9ponse en 24h")))), /*#__PURE__*/React.createElement(Section, {
      tone: "white",
      pad: "80px 75px 100px"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-grid lb-grid-3"
    }, /*#__PURE__*/React.createElement(FeatureStat, {
      icon: "check-badge"
    }, "Expert ORIAS\nn° 25000436"), /*#__PURE__*/React.createElement(FeatureStat, {
      icon: "check-circle"
    }, "Réponse sous 48h\nsur votre dossier"), /*#__PURE__*/React.createElement(FeatureStat, {
      icon: "check-badge"
    }, "100 % B2B exclusivement\nentreprises propriétaires"))));
  }
  window.Faq = Faq;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Faq.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Fiducie.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(function () {
  const {
    Button,
    Pill,
    SectionHeading,
    StepRow,
    CheckList
  } = window.LeasebackImmoDesignSystem_ad7840;
  const {
    Section,
    PageHero,
    NumberedPanel,
    IndexCard,
    ChipRow
  } = window;
  const CASES = [{
    title: "Dégager des liquidités stratégiques",
    body: "Racheter des parts sociales ou financer une réorganisation capitalistique."
  }, {
    title: "Sécuriser ou refinancer une dette",
    body: "Sécuriser une dette corporate ou refinancer un passif bancaire de manière maîtrisée."
  }, {
    title: "Réorganiser votre haut de bilan",
    body: "Conserver l'usage économique de vos actifs tout en optimisant votre structure financière."
  }];
  const ADVANTAGES = ["Transfert dans un patrimoine d'affectation autonome — protégé des risques d'insolvabilité du fiduciaire", "Conservation totale de l'usage et de la valeur économique du bien", "Outil de haut de bilan — n'alourdit pas nécessairement le bilan", "Permet des montages combinés (fiducie-sûreté + refinancement bancaire)", "Restitution automatique à l'extinction de la dette"];
  const STEPS = [{
    number: "01",
    title: "Qualification",
    body: "Vous renseignez les caractéristiques de votre actif et votre besoin. Notre outil analyse votre situation en quelques minutes."
  }, {
    number: "02",
    title: "Analyse du dossier",
    body: "Nous étudions la structure de détention, le régime fiscal et les contraintes contractuelles de l'opération."
  }, {
    number: "03",
    title: "Structuration du montage",
    body: "Structuration personnalisée selon votre actif, votre forme juridique et vos objectifs patrimoniaux."
  }, {
    number: "04",
    title: "Suivi jusqu'au financement",
    body: "Suivi juridique, notarial et financier jusqu'au déblocage des fonds."
  }];
  function Fiducie({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
      image: "../../assets/img/asset-commerce.jpg",
      eyebrow: "D\xE8s 5 M\u20AC",
      title: "Fiducie-s\xFBret\xE9 immobili\xE8re : refinancez votre actif sans le c\xE9der d\xE9finitivement",
      intro: "Refinancez votre actif immobilier professionnel sans le vendre. La fiducie-s\xFBret\xE9 : transfert temporaire, usage conserv\xE9, restitution automatique.",
      secondary: "Faire le test d'\xE9ligibilit\xE9"
    }), /*#__PURE__*/React.createElement(Section, {
      pad: "110px 75px"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-split"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Pill, null, "Comprendre"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "20px 0 0",
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "var(--type-h2-size)",
        lineHeight: "var(--type-h2-lh)",
        color: "var(--lb-rose)"
      }
    }, "Qu'est-ce que la fiducie-s\xFBret\xE9 immobili\xE8re ?"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "26px 0 0",
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 20,
        lineHeight: "34px",
        color: "var(--lb-black)"
      }
    }, "La fiducie-s\xFBret\xE9 permet d'affecter temporairement un actif immobilier en garantie d'un financement, sans en perdre l'usage \xE9conomique. Le bien est transf\xE9r\xE9 \xE0 un fiduciaire pendant la dur\xE9e de l'op\xE9ration, selon un cadre contractuel pr\xE9cis. Une fois les engagements rembours\xE9s, l'actif revient dans le patrimoine du constituant selon les modalit\xE9s pr\xE9vues au contrat."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 30
      }
    }, /*#__PURE__*/React.createElement(Pill, {
      size: "lg"
    }, "Op\xE9rations \xE0 partir de 5 M\u20AC de valeur v\xE9nale"))), /*#__PURE__*/React.createElement(NumberedPanel, {
      title: "Le m\xE9canisme",
      items: [{
        title: "Transfert à titre de garantie",
        body: "Vous transférez temporairement votre bien à un fiduciaire agréé."
      }, {
        title: "Usage pendant le contrat",
        body: "Vous conservez l'usage économique de l'actif pendant toute la durée de l'opération."
      }, {
        title: "Restitution de propriété",
        body: "À l'extinction de la dette, l'actif revient automatiquement dans votre patrimoine."
      }]
    }))), /*#__PURE__*/React.createElement(Section, {
      tone: "white",
      pad: "110px 75px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      align: "center",
      eyebrow: "Pour qui",
      title: "Qui est concern\xE9 ?",
      intro: "La fiducie-s\xFBret\xE9 est particuli\xE8rement adapt\xE9e pour les situations suivantes."
    })), /*#__PURE__*/React.createElement("div", {
      className: "lb-grid lb-grid-3",
      style: {
        marginTop: 62
      }
    }, CASES.map((c, i) => /*#__PURE__*/React.createElement(IndexCard, _extends({
      key: c.title,
      index: String(i + 1).padStart(2, "0")
    }, c)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        marginTop: 46
      }
    }, /*#__PURE__*/React.createElement(ChipRow, {
      items: ["Entreprises patrimoniales", "Groupes industriels", "Foncières et holdings", "Sociétés civiles immobilières"]
    }))), /*#__PURE__*/React.createElement(Section, {
      tone: "navy",
      pad: "100px 75px"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-split-rev",
      style: {
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Pill, {
      tone: "solid"
    }, "Pourquoi choisir la fiducie-s\xFBret\xE9"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "20px 0 0",
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "var(--type-h2-size)",
        lineHeight: "var(--type-h2-lh)",
        color: "var(--lb-rose)"
      }
    }, "Les avantages de la fiducie-s\xFBret\xE9"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "22px 0 0",
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 20,
        lineHeight: "34px",
        color: "rgba(255,255,255,.86)"
      }
    }, "Un outil de haut de bilan pour les entreprises disposant d'actifs immobiliers significatifs.")), /*#__PURE__*/React.createElement(CheckList, {
      items: ADVANTAGES
    }))), /*#__PURE__*/React.createElement(Section, {
      pad: "110px 75px"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-split",
      style: {
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Pill, null, "Comparatif"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "20px 0 0",
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 48,
        lineHeight: "64px",
        color: "var(--lb-navy)"
      }
    }, "Fiducie-s\xFBret\xE9 ou cr\xE9dit-bail immobilier ?"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "26px 0 0",
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 20,
        lineHeight: "34px",
        color: "var(--lb-black)"
      }
    }, "Deux solutions de financement sur actifs immobiliers. Le choix d\xE9pend de la valeur de votre actif, de votre objectif et de votre structure juridique."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "20px 0 30px",
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 20,
        lineHeight: "34px",
        color: "var(--lb-black)"
      }
    }, "Vous n'\xEAtes pas certain de la solution adapt\xE9e ? Le test d'\xE9ligibilit\xE9 vous oriente en 5 minutes."), /*#__PURE__*/React.createElement(Button, {
      tone: "primary",
      onClick: () => go("Test d'éligibilité")
    }, "Faire le test d'\xE9ligibilit\xE9")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 22
      }
    }, [["Crédit-bail immobilier", "Dès 1 000 000 €", "Cession puis relocation, option d'achat à l'origine."], ["Fiducie-sûreté", "Dès 5 M€", "Transfert temporaire en garantie, sans cession définitive."]].map(([t, b, d], i) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        borderRadius: "var(--r-15)",
        background: i ? "var(--lb-navy)" : "var(--lb-white)",
        boxShadow: i ? "var(--shadow-card-ink)" : "var(--shadow-card)",
        padding: "30px 36px",
        display: "flex",
        alignItems: "center",
        gap: 30
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: 27,
        color: i ? "var(--lb-white)" : "var(--lb-ink)"
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6,
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 17,
        lineHeight: "27px",
        color: i ? "rgba(255,255,255,.78)" : "rgba(0,0,0,.72)"
      }
    }, d)), /*#__PURE__*/React.createElement(Pill, {
      size: "lg"
    }, b)))))), /*#__PURE__*/React.createElement(Section, {
      tone: "white",
      pad: "110px 75px 120px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        marginBottom: 76
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      align: "center",
      eyebrow: "Accompagnement",
      title: "Comment fonctionne notre accompagnement ?",
      intro: "De la qualification de votre actif jusqu'au d\xE9blocage des fonds, nous vous accompagnons \xE0 chaque \xE9tape."
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 96,
        maxWidth: 1350,
        margin: "0 auto"
      }
    }, STEPS.map((s, i) => /*#__PURE__*/React.createElement(StepRow, _extends({
      key: s.number
    }, s, {
      last: i === STEPS.length - 1
    }))))));
  }
  window.Fiducie = Fiducie;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Fiducie.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(function () {
  const {
    Button,
    Pill,
    Card,
    SectionHeading,
    SolutionCard,
    AssetCard,
    StepRow,
    ObjectivesBand,
    FeatureStat,
    Logo
  } = window.LeasebackImmoDesignSystem_ad7840;
  const {
    Section,
    PageHero
  } = window;
  const ASSETS = [{
    image: "../../assets/img/asset-bureaux.jpg",
    title: "Bureaux & immeubles",
    body: "Locaux professionnels, immeubles de bureaux, sièges sociaux — tous types de surfaces tertiaires."
  }, {
    image: "../../assets/img/asset-industriel.jpg",
    title: "Industriel & activité",
    body: "Entrepôts, usines, locaux d'activité, ateliers de production et surfaces logistiques."
  }, {
    image: "../../assets/img/asset-commerce.jpg",
    title: "Surfaces commerciales",
    body: "Commerces, magasins, showrooms, centres commerciaux et locaux de vente au détail."
  }, {
    image: "../../assets/img/asset-mixte.jpg",
    title: "Locaux mixtes",
    body: "Surfaces à usage professionnel mixte (bureau + entrepôt, commerce + réserve, etc.)"
  }];
  const STEPS = [{
    number: "01",
    title: "Vous testez votre éligibilité",
    body: "En quelques minutes, vous renseignez les caractéristiques de votre actif (type, emplacement, valeur estimée, usage, encours existant, montant recherché). Vous obtenez une première orientation sur votre capacité de refinancement potentielle."
  }, {
    number: "02",
    title: "Nous analysons votre dossier",
    body: "Bluelease étudie la cohérence du montage selon la valeur de l'actif, l'usage, la trésorerie, la structure juridique et la capacité de remboursement. L'objectif est d'identifier le véhicule le plus pertinent (crédit-bail ou fiducie-sûreté)."
  }, {
    number: "03",
    title: "Nous structurons l'opération",
    body: "Si éligible, Bluelease vous accompagne dans la constitution du dossier, la présentation aux partenaires financiers et la coordination des intermédiaires nécessaires (expert, banque, crédit-bailleur, fiduciaire, avocat, notaire)."
  }, {
    number: "04",
    title: "Vous avancez jusqu'au financement",
    body: "Après accord du partenaire, l'opération est finalisée par le déblocage des fonds. Un cycle de traitement de plusieurs mois est habituel selon la complexité du dossier."
  }];
  function Home({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "lb-hero",
      style: {
        position: "relative",
        minHeight: "clamp(560px,56vw,1080px)",
        background: "url(../../assets/img/hero-building.jpg) 50% 87%/cover no-repeat"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg,#fff 0%,#fff 22.58%,#fff 33.05%,rgba(255,255,255,.8902) 43.51%,rgba(255,255,255,.9686) 53.14%,rgba(255,255,255,.451) 69.45%,rgba(128,128,128,0) 100%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        padding: "clamp(48px,5vw,98px) var(--page-x) 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(Pill, null, "Leaseback immobilier professionnel"), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: "16px 0 0",
        maxWidth: 900,
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "var(--type-h1-size)",
        lineHeight: "var(--type-h1-lh)",
        color: "var(--lb-navy)"
      }
    }, "Mobilisez la valeur de vos murs pour financer votre entreprise"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginTop: 12,
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: 17,
        color: "var(--lb-navy)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/icons/check-circle.svg",
      width: "17",
      alt: "",
      style: {
        filter: "invert(35%) sepia(72%) saturate(2400%) hue-rotate(325deg)"
      }
    }), "Gratuit \xB7 Sans engagement \xB7 Expert ORIAS n\xB0 25000436"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "26px 0 0",
        maxWidth: 948,
        fontFamily: "var(--font-body)",
        fontWeight: 400,
        fontSize: "var(--type-body-size)",
        lineHeight: "var(--type-body-lh)",
        color: "var(--lb-navy)"
      }
    }, "Votre immobilier professionnel peut soutenir votre tr\xE9sorerie, vos investissements ou votre d\xE9veloppement. Gr\xE2ce au cr\xE9dit-bail immobilier ou \xE0 la fiducie-s\xFBret\xE9, leaseback.immo vous aide \xE0 identifier le montage le plus coh\xE9rent selon la valeur de l'actif, son usage, ses encours et votre besoin de financement."), /*#__PURE__*/React.createElement("div", {
      className: "lb-cta-row",
      style: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 25,
        marginTop: 30
      }
    }, /*#__PURE__*/React.createElement(Button, {
      tone: "gold",
      onClick: () => go("Test d'éligibilité")
    }, "Tester mon \xE9ligibilit\xE9"), /*#__PURE__*/React.createElement(Button, {
      tone: "secondary",
      onClick: () => go("Contact")
    }, "Parler \xE0 un expert")))), /*#__PURE__*/React.createElement(Section, {
      pad: "60px 75px 110px"
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "Leaseback immobilier professionnel",
      title: "Un m\xEAme objectif : mobiliser la valeur de votre actif immobilier professionnel."
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "22px 0 0",
        maxWidth: 1100,
        fontFamily: "var(--font-body)",
        fontWeight: 400,
        fontSize: "var(--type-lead-size)",
        lineHeight: "var(--type-lead-lh)",
        color: "var(--lb-ink-2)"
      }
    }, "Beaucoup d'entreprises propri\xE9taires de leurs locaux ignorent qu'elles disposent d'un levier de financement sous-exploit\xE9. Selon votre actif, votre besoin et votre structure juridique, deux solutions existent :"), /*#__PURE__*/React.createElement("div", {
      className: "lb-grid lb-grid-2",
      style: {
        gap: "var(--gap-lg)",
        marginTop: 86
      }
    }, /*#__PURE__*/React.createElement(SolutionCard, {
      badge: "D\xE8s 1 000 000 \u20AC",
      title: "Le cr\xE9dit-bail immobilier",
      body: ["Le crédit-bail immobilier permet de refinancer un actif professionnel en le cédant à un crédit-bailleur, qui le reloue immédiatement à l'entreprise utilisatrice. L'entreprise dégage de la trésorerie tout en conservant l'usage de ses locaux. À l'issue du contrat, elle peut lever l'option d'achat prévue dès l'origine.", "Cette solution est généralement adaptée aux actifs professionnels de taille intermédiaire, sous réserve de leur qualité, de leur valeur vénale, de leur liquidité et de la capacité de remboursement du dossier."],
      linkLabel: "En savoir plus sur le cr\xE9dit-bail immobilier",
      href: "#",
      onClick: () => go("Crédit-bail immobilier")
    }), /*#__PURE__*/React.createElement(SolutionCard, {
      tone: "dark",
      badge: "D\xE8s 5 M\u20AC",
      title: "La fiducie-s\xFBret\xE9",
      body: ["La fiducie-sûreté permet d'affecter temporairement un actif immobilier en garantie d'un financement, sans en perdre l'usage économique. Le bien est transféré à un fiduciaire pendant la durée de l'opération, selon un cadre contractuel précis. Une fois les engagements remboursés, l'actif revient dans le patrimoine du constituant selon les modalités prévues au contrat.", "Cette structuration est réservée aux actifs de valeur significative, notamment lorsque le niveau de garantie recherché, la complexité du dossier ou les enjeux de refinancement justifient un montage renforcé."],
      linkLabel: "En savoir plus sur la fiducie-s\xFBret\xE9"
    }))), /*#__PURE__*/React.createElement(Section, {
      tone: "white",
      pad: "110px 75px 120px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      align: "center",
      eyebrow: "Exclusivement B2B",
      title: "Pour quels besoins ?",
      intro: "leaseback.immo s'adresse exclusivement aux entreprises, soci\xE9t\xE9s patrimoniales et dirigeants d\xE9tenant un actif immobilier professionnel. Le dispositif ne concerne ni les particuliers, ni les r\xE9sidences principales."
    })), /*#__PURE__*/React.createElement("div", {
      className: "lb-grid lb-grid-4",
      style: {
        gap: "var(--gap-sm)",
        marginTop: 64
      }
    }, ASSETS.map(a => /*#__PURE__*/React.createElement(AssetCard, _extends({
      key: a.title
    }, a))))), /*#__PURE__*/React.createElement(Section, {
      pad: "64px 75px 64px"
    }, /*#__PURE__*/React.createElement(ObjectivesBand, {
      title: "Objectifs",
      intro: "Vous \xEAtes concern\xE9 si votre entreprise, SCI ou holding est propri\xE9taire de locaux professionnels et souhaite mobiliser leur valeur pour :",
      items: ["Renforcer la trésorerie de l'entreprise", "Financer un projet de croissance, d'investissement ou de développement", "Restructurer un passif existant à partir d'un actif immobilier professionnel", "Libérer une partie de la valeur immobilisée dans les murs professionnels"]
    })), /*#__PURE__*/React.createElement(Section, {
      pad: "48px 75px 120px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        marginBottom: 76
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      align: "center",
      eyebrow: "Accompagnement",
      title: "Comment \xE7a fonctionne ?",
      intro: "Un processus en 4 \xE9tapes, de l'\xE9ligibilit\xE9 au d\xE9blocage des fonds."
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--step-gap)",
        maxWidth: 1350,
        margin: "0 auto"
      }
    }, STEPS.map((s, i) => /*#__PURE__*/React.createElement(StepRow, _extends({
      key: s.number
    }, s, {
      last: i === STEPS.length - 1
    }))))), /*#__PURE__*/React.createElement(Section, {
      tone: "white",
      pad: "70px 75px 90px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Pill, {
      tone: "solid"
    }, "En bref"), /*#__PURE__*/React.createElement(Logo, {
      height: 44
    })), /*#__PURE__*/React.createElement("div", {
      className: "lb-grid lb-grid-4",
      style: {
        marginTop: 62
      }
    }, /*#__PURE__*/React.createElement(FeatureStat, {
      icon: "check-badge"
    }, "Intervention sur\ntoute la France"), /*#__PURE__*/React.createElement(FeatureStat, {
      icon: "check-circle"
    }, "Expert indépendant — pas une\nbanque, pas un courtier généraliste"), /*#__PURE__*/React.createElement(FeatureStat, {
      icon: "check-badge"
    }, "Deux solutions complémentaires\ncrédit-bail immobilier + fiducie-sûreté"), /*#__PURE__*/React.createElement(FeatureStat, {
      icon: "check-circle"
    }, "100 % B2B exclusivement\nentreprises propriétaires"))));
  }
  window.Home = Home;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/parts.jsx
try { (() => {
(function () {
  const {
    Button,
    Pill,
    SectionHeading,
    Icon
  } = window.LeasebackImmoDesignSystem_ad7840;

  /* Shared page furniture for the leaseback.immo site kit. */
  function Section({
    children,
    tone = "cream",
    pad,
    style
  }) {
    const bg = {
      cream: "var(--lb-cream)",
      white: "var(--lb-white)",
      navy: "var(--lb-navy)"
    }[tone];
    /* Legacy "Ypx Xpx" strings are reinterpreted as fluid: the vertical value scales with
       the viewport, the horizontal one always defers to --page-x. */
    let padding = "var(--section-y) var(--page-x)";
    if (pad) {
      const v = pad.split(/\s+/).map(n => parseInt(n, 10));
      const top = v[0],
        bot = v.length > 2 ? v[2] : v[0];
      const fl = n => `clamp(${Math.round(n * 0.42)}px, ${(n / 19.2).toFixed(2)}vw, ${n}px)`;
      padding = `${fl(top)} var(--page-x) ${fl(bot)}`;
    }
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: bg,
        padding,
        ...style
      }
    }, children);
  }
  function PageHero({
    image,
    eyebrow,
    title,
    intro,
    primary = "Tester mon éligibilité",
    secondary,
    align = "left"
  }) {
    const centered = align === "center";
    return /*#__PURE__*/React.createElement("div", {
      className: "lb-hero",
      style: {
        position: "relative",
        minHeight: "clamp(420px, 34vw, 620px)",
        display: "flex",
        background: `url(${image}) center/cover no-repeat`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: centered ? "linear-gradient(180deg,#fff 0%,#fff 33%,rgba(255,255,255,.89) 44%,rgba(255,255,255,.45) 69%,rgba(128,128,128,0) 100%)" : "linear-gradient(90deg,rgba(13,27,42,.92) 0%,rgba(13,27,42,.78) 42%,rgba(13,27,42,.15) 100%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: centered ? "center" : "flex-start",
        textAlign: centered ? "center" : "left",
        padding: centered ? "clamp(72px,7vw,110px) clamp(20px,19vw,380px)" : "clamp(72px,6vw,96px) var(--page-x)",
        maxWidth: centered ? "none" : 1100
      }
    }, eyebrow && /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement(Pill, null, eyebrow)), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "var(--type-h1-size)",
        lineHeight: "var(--type-h1-lh)",
        color: centered ? "var(--lb-navy)" : "var(--lb-white)"
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "18px 0 0",
        maxWidth: 820,
        fontFamily: "var(--font-body)",
        fontWeight: 400,
        fontSize: 18,
        lineHeight: "28.8px",
        color: centered ? "var(--lb-navy)" : "rgba(255,255,255,.9)"
      }
    }, intro), /*#__PURE__*/React.createElement("div", {
      className: "lb-cta-row",
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 25,
        marginTop: 38
      }
    }, /*#__PURE__*/React.createElement(Button, {
      tone: centered ? "gold" : "primary"
    }, primary), secondary && /*#__PURE__*/React.createElement(Button, {
      tone: "secondary"
    }, secondary))));
  }

  /* Numbered mini-list used inside a bordered panel (mécanisme, méthodologie). */
  function NumberedPanel({
    title,
    items,
    tone = "light"
  }) {
    const dark = tone === "dark";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: "var(--r-15)",
        background: dark ? "var(--lb-navy)" : "var(--lb-white)",
        boxShadow: dark ? "var(--shadow-card-ink)" : "var(--shadow-card)",
        padding: "clamp(26px,2.4vw,38px) clamp(26px,2.8vw,44px)"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: "var(--type-h4-size)",
        lineHeight: "var(--type-h4-lh)",
        color: dark ? "var(--lb-white)" : "var(--lb-ink)"
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 26,
        marginTop: 28
      }
    }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        gap: 22
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: "none",
        width: 44,
        height: 44,
        borderRadius: 22,
        display: "grid",
        placeItems: "center",
        background: dark ? "var(--lb-rose)" : "var(--lb-rose-tint)",
        boxShadow: dark ? "none" : "var(--ring-rose)",
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: 18,
        color: dark ? "var(--lb-white)" : "var(--lb-rose)"
      }
    }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: 21,
        lineHeight: "30px",
        color: dark ? "var(--lb-white)" : "var(--lb-ink)"
      }
    }, it.title), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4,
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 17,
        lineHeight: "26px",
        color: dark ? "rgba(255,255,255,.78)" : "rgba(0,0,0,.72)"
      }
    }, it.body))))));
  }

  /* Benefit card: rose category label, Inter title, rose-check bullets. */
  function BenefitCard({
    label,
    title,
    items
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: "var(--r-15)",
        background: "var(--lb-white)",
        boxShadow: "var(--shadow-card)",
        padding: "clamp(26px,2.2vw,34px) clamp(24px,2.4vw,38px) clamp(28px,2.4vw,38px)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 400,
        fontSize: 17,
        color: "var(--lb-rose)"
      }
    }, label), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: "6px 0 0",
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: "var(--type-h4-size)",
        lineHeight: "var(--type-h4-lh)",
        color: "var(--lb-ink)"
      }
    }, title), /*#__PURE__*/React.createElement("hr", {
      style: {
        margin: "22px 0 26px",
        border: "none",
        height: 1,
        background: "rgba(0,0,0,.12)"
      }
    }), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        gap: 20
      }
    }, items.map((t, i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        gap: 14,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check-circle",
      size: 18,
      color: "var(--lb-rose)",
      style: {
        marginTop: 5
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 17,
        lineHeight: "27px",
        color: "var(--lb-black)"
      }
    }, t)))));
  }

  /* Small stat / need card with an indexed numeral, from Notre approche. */
  function IndexCard({
    index,
    title,
    body
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        overflow: "hidden",
        borderRadius: "var(--r-15)",
        background: "var(--lb-white)",
        boxShadow: "var(--shadow-card)",
        padding: "clamp(24px,2vw,32px) clamp(24px,2.2vw,36px) clamp(26px,2.2vw,36px)",
        minHeight: 176
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        right: 24,
        bottom: 6,
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "clamp(42px,3.4vw,62px)",
        lineHeight: 1.3,
        color: "rgba(227,68,84,.28)"
      }
    }, index), /*#__PURE__*/React.createElement("h4", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: 21,
        lineHeight: "30px",
        color: "var(--lb-ink)"
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "10px 0 0",
        maxWidth: 340,
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 17,
        lineHeight: "27px",
        color: "rgba(0,0,0,.72)"
      }
    }, body));
  }

  /* Contrast pair: the ordinary approach vs ours. */
  function ContrastPair({
    left,
    right
  }) {
    const box = (d, dark) => /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: "var(--r-15)",
        padding: "clamp(26px,2.2vw,34px) clamp(26px,2.5vw,40px) clamp(28px,2.4vw,38px)",
        background: dark ? "var(--lb-navy)" : "var(--lb-white)",
        boxShadow: dark ? "var(--shadow-card-ink)" : "var(--shadow-card)"
      }
    }, /*#__PURE__*/React.createElement(Pill, {
      tone: dark ? "solid" : "outline"
    }, d.label), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "22px 0 0",
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: "var(--type-h4-size)",
        lineHeight: 1.44,
        color: dark ? "var(--lb-white)" : "var(--lb-ink)"
      }
    }, d.quote), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "14px 0 0",
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 17,
        lineHeight: "27px",
        color: dark ? "rgba(255,255,255,.78)" : "rgba(0,0,0,.72)"
      }
    }, d.body));
    return /*#__PURE__*/React.createElement("div", {
      className: "lb-grid lb-grid-2"
    }, box(left, false), box(right, true));
  }
  function ChipRow({
    items
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 14
      }
    }, items.map(t => /*#__PURE__*/React.createElement("span", {
      key: t,
      style: {
        display: "inline-flex",
        alignItems: "center",
        height: 46,
        padding: "0 24px",
        borderRadius: "var(--r-full)",
        background: "var(--lb-white)",
        boxShadow: "var(--ring-hairline)",
        fontFamily: "var(--font-body)",
        fontWeight: 400,
        fontSize: 17,
        color: "var(--lb-ink)"
      }
    }, t)));
  }
  Object.assign(window, {
    Section,
    PageHero,
    NumberedPanel,
    BenefitCard,
    IndexCard,
    ContrastPair,
    ChipRow
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.AssetCard = __ds_scope.AssetCard;

__ds_ns.CheckList = __ds_scope.CheckList;

__ds_ns.FeatureStat = __ds_scope.FeatureStat;

__ds_ns.ObjectivesBand = __ds_scope.ObjectivesBand;

__ds_ns.SolutionCard = __ds_scope.SolutionCard;

__ds_ns.StepBadge = __ds_scope.StepBadge;

__ds_ns.StepRow = __ds_scope.StepRow;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.AccordionItem = __ds_scope.AccordionItem;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
