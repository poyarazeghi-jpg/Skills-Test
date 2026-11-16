/* scripts/main.js — هویت برنامه را از APP_CONFIG در صفحه می‌گذارد (متن رو‌به‌کاربر اینجا نیست). */
(function () {
  'use strict';
  var cfg = window.APP_CONFIG;
  if (!cfg) return;

  /* هر [data-app="key"] مقدار APP_CONFIG[key] را نشان می‌دهد */
  document.querySelectorAll('[data-app]').forEach(function (el) {
    var value = cfg[el.getAttribute('data-app')];
    if (value) el.textContent = value;
  });

  /* عنوان تب: اسم برنامه پیش از توضیح ثابت داخل <title> */
  document.title = cfg.name + ': ' + document.title;
})();
