/**
 * SAID RUN 2026 — Shared UI Helpers
 * Deterministic QR SVG generator, status badge renderer, and toast notifications.
 */
(function (global) {
  'use strict';

  function showToast(message, type) {
    var container = document.getElementById('sr-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'sr-toast-container';
      container.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4 sm:px-0';
      document.body.appendChild(container);
    }

    var colors = 'bg-light-inverse-surface text-light-inverse-on-surface border-light-outline/30';
    var icon = 'info';
    if (type === 'success') {
      colors = 'bg-success text-on-success border-success';
      icon = 'check_circle';
    } else if (type === 'warning') {
      colors = 'bg-warning text-on-warning border-warning';
      icon = 'warning';
    } else if (type === 'error') {
      colors = 'bg-light-error text-light-on-error border-light-error';
      icon = 'error';
    }

    var toast = document.createElement('div');
    toast.className = 'pointer-events-auto flex items-start gap-2.5 px-4 py-3 rounded-lg border shadow-lg transition-all duration-surface-enter ' + colors;
    toast.innerHTML =
      '<span class="material-symbols-outlined shrink-0 mt-0.5" style="font-size:18px" aria-hidden="true">' + icon + '</span>' +
      '<span class="font-body text-body-md flex-1">' + escapeHtml(message) + '</span>';

    container.appendChild(toast);

    setTimeout(function () {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(6px)';
      setTimeout(function () {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 180);
    }, 3400);
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderStatusBadge(status) {
    if (status === 'Terverifikasi' || status === 'Disetujui' || status === 'Sudah Diambil') {
      return '<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success-container text-on-success-container font-label text-label-sm"><span class="w-1.5 h-1.5 rounded-full bg-success" aria-hidden="true"></span>' + escapeHtml(status) + '</span>';
    }
    if (status === 'Perlu Pemeriksaan' || status === 'Menunggu Pembayaran' || status === 'Menunggu Persetujuan') {
      return '<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-warning-container text-on-warning-container font-label text-label-sm"><span class="w-1.5 h-1.5 rounded-full bg-warning" aria-hidden="true"></span>' + escapeHtml(status) + '</span>';
    }
    return '<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-light-error-container text-light-on-error-container font-label text-label-sm"><span class="w-1.5 h-1.5 rounded-full bg-light-error" aria-hidden="true"></span>' + escapeHtml(status) + '</span>';
  }

  /**
   * Generates a crisp, deterministic 21x21 QR-style SVG from any seed string.
   */
  function generateQrSvg(seed, sizePx) {
    sizePx = sizePx || 144;
    var text = String(seed || 'SAIDRUN2026');
    var hash = 2166136261;
    for (var i = 0; i < text.length; i++) {
      hash ^= text.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }

    var n = 21;
    var rects = [];

    function isFinder(r, c) {
      var topLeft = r < 7 && c < 7;
      var topRight = r < 7 && c >= n - 7;
      var bottomLeft = r >= n - 7 && c < 7;
      return topLeft || topRight || bottomLeft;
    }

    function drawFinder(ox, oy) {
      rects.push('<rect x="' + ox + '" y="' + oy + '" width="7" height="7" fill="#111C2D"/>');
      rects.push('<rect x="' + (ox + 1) + '" y="' + (oy + 1) + '" width="5" height="5" fill="#FFFFFF"/>');
      rects.push('<rect x="' + (ox + 2) + '" y="' + (oy + 2) + '" width="3" height="3" fill="#00543A"/>');
    }

    drawFinder(0, 0);
    drawFinder(n - 7, 0);
    drawFinder(0, n - 7);

    var state = (hash >>> 0) || 123456789;
    for (var r = 0; r < n; r++) {
      for (var c = 0; c < n; c++) {
        if (isFinder(r, c)) continue;
        // Timing strips
        if (r === 6 || c === 6) {
          if ((r + c) % 2 === 0) {
            rects.push('<rect x="' + c + '" y="' + r + '" width="1" height="1" fill="#111C2D"/>');
          }
          continue;
        }
        state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
        if ((state & 1) === 1) {
          rects.push('<rect x="' + c + '" y="' + r + '" width="1" height="1" fill="#111C2D"/>');
        }
      }
    }

    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 ' + (n + 2) + ' ' + (n + 2) + '" width="' + sizePx + '" height="' + sizePx + '" class="rounded bg-white" role="img" aria-label="QR Code ' + escapeHtml(text) + '">' +
      '<rect x="-1" y="-1" width="' + (n + 2) + '" height="' + (n + 2) + '" fill="#FFFFFF"/>' +
      rects.join('') +
      '</svg>';
  }

  global.SaidRunUI = {
    showToast: showToast,
    escapeHtml: escapeHtml,
    renderStatusBadge: renderStatusBadge,
    generateQrSvg: generateQrSvg
  };
})(window);
