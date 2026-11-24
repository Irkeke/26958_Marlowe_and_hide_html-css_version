// Shared "view" behaviour used across every page — not page-specific logic.
// Page-specific data lives in app/models, page-specific behaviour lives in
// app/controllers. This file only wires up UI that every page shares.

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('nav.primary');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }
});
