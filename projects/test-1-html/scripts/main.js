/* scripts/main.js — هویت برنامه را در صفحه می‌گذارد و پیام دکمه را بعد از کلیک نشان می‌دهد (متن رو‌به‌کاربر اینجا نیست). */
(function () {
  'use strict';

  /* هر [data-app="key"] مقدار APP_CONFIG[key] را نشان می‌دهد؛ عنوان تب با اسم برنامه شروع می‌شود و [data-year] سال جاری را می‌گیرد */
  function fillIdentity() {
    var cfg = window.APP_CONFIG;
    if (!cfg) return;
    document.querySelectorAll('[data-app]').forEach(function (el) {
      var value = cfg[el.getAttribute('data-app')];
      if (value) el.textContent = value;
    });
    document.title = cfg.name + ': ' + document.title;
    document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  }

  /* با کلیک روی [data-click]، متن data-message همان دکمه در [data-status] نوشته می‌شود */
  function bindClick() {
    var button = document.querySelector('[data-click]');
    var status = document.querySelector('[data-status]');
    if (!button || !status) return;
    button.addEventListener('click', function () {
      status.textContent = button.getAttribute('data-message') || '';
    });
  }

  fillIdentity();
  bindClick();
})();
