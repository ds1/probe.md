// PROBE.md landing page interactions: install-tab switching + copy buttons.
(function () {
  'use strict';

  // Tab switching (Bash / PowerShell)
  var tabs = document.querySelectorAll('.output-tab');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var target = tab.getAttribute('data-tab');
      tabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      document.querySelectorAll('.output-content').forEach(function (c) {
        c.classList.remove('active');
      });
      var panel = document.getElementById('output-' + target);
      if (panel) panel.classList.add('active');
    });
  });

  // Copy-to-clipboard buttons
  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-target');
      var code = document.getElementById(target + '-output');
      if (!code) return;
      var text = code.textContent;
      var done = function () {
        btn.classList.add('copied');
        var label = btn.querySelector('.copy-label');
        var prev = label ? label.textContent : '';
        if (label) label.textContent = 'Copied';
        setTimeout(function () {
          btn.classList.remove('copied');
          if (label) label.textContent = prev || 'Copy';
        }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text, done); });
      } else {
        fallbackCopy(text, done);
      }
    });
  });

  function fallbackCopy(text, done) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'absolute';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); done(); } catch (e) { /* no-op */ }
    document.body.removeChild(ta);
  }
})();
