(function () {
  'use strict';
  var root = document.documentElement;
  var dialog = document.querySelector('.figure-dialog');
  var activeFigure = null;
  var previousFocus = null;
  var buttons = document.querySelectorAll('[data-set-language]');

  function updateFigure() {
    if (!activeFigure) return;
    var chinese = root.dataset.language === 'zh';
    var title = activeFigure.dataset[chinese ? 'titleZh' : 'titleEn'];
    var image = activeFigure.querySelector(chinese ? 'img[lang="zh-CN"]' : 'img[lang="en"]') || activeFigure.querySelector('img');
    dialog.querySelector('#figure-dialog-title').textContent = title;
    dialog.querySelector('.dialog-image').src = image.src;
    dialog.querySelector('.dialog-image').alt = title;
    dialog.querySelector('.dialog-caption').textContent = activeFigure.dataset[chinese ? 'captionZh' : 'captionEn'];
  }
  function setLanguage(lang, save) {
    lang = lang === 'zh' ? 'zh' : 'en';
    root.dataset.language = lang;
    root.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = lang === 'zh' ? '褚旭 | 研究主页' : 'Xu Chu | Research';
    buttons.forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.setLanguage === lang));
    });
    document.querySelectorAll('[data-figure]').forEach(function (link) {
      var image = link.querySelector(lang === 'zh' ? 'img[lang="zh-CN"]' : 'img[lang="en"]') || link.querySelector('img');
      link.href = image.src;
      link.setAttribute('aria-label', (lang === 'zh' ? '放大方法图：' : 'Enlarge method figure: ') + link.dataset[lang === 'zh' ? 'titleZh' : 'titleEn']);
    });
    if (save) {
      try { localStorage.setItem('homepage-language', lang); } catch (e) {}
      var url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      try { history.replaceState(null, '', url.pathname + url.search + url.hash); } catch (e) {}
    }
    updateFigure();
  }
  buttons.forEach(function (button) {
    button.addEventListener('click', function () { setLanguage(button.dataset.setLanguage, true); });
  });
  setLanguage(root.dataset.language, false);
  if (dialog && typeof dialog.showModal === 'function') {
    document.querySelectorAll('[data-figure]').forEach(function (link) {
      link.addEventListener('click', function (event) {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        activeFigure = link;
        previousFocus = link;
        updateFigure();
        dialog.showModal();
        document.body.classList.add('dialog-open');
      });
    });
    dialog.querySelector('.close-dialog').addEventListener('click', function () { dialog.close(); });
    dialog.addEventListener('click', function (event) {
      var bounds = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
    });
    dialog.addEventListener('close', function () {
      document.body.classList.remove('dialog-open');
      if (previousFocus) previousFocus.focus({ preventScroll: true });
      activeFigure = null;
    });
  }
  // Preserve bookmarks created by the previous theme's generated headings.
  var legacy = {'#-news':'#news','#-publications':'#publications','#-selected-publications':'#publications','#-preprints':'#preprints','#-educations':'#education','#-internships':'#experience'};
  if (legacy[location.hash]) {
    var target = legacy[location.hash];
    history.replaceState(null, '', location.pathname + location.search + target);
    document.querySelector(target).scrollIntoView();
  }
})();
