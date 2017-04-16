import emojify from './components/emoji'

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.emojify').forEach((content) => {
    content.innerHTML = emojify(content.innerHTML);
  });

  document.querySelectorAll('.video-player video').forEach((elem) => {
    elem.click = e => {
      if (e.target.paused) {
        e.target.play();
      } else {
        e.target.pause();
      }
    };
  });

  document.querySelectorAll('.media-spoiler').forEach((elem) => {
    elem.click = e => {
      e.target.style.display = 'none';
    };
  });

  document.querySelector('.webapp-btn').click = e => {
    if (e.button === 0) {
      e.preventDefault();
      window.location.href = e.target.getAttribute('href');
    }
  };

  document.querySelectorAll('.status__content__spoiler-link').forEach((elem) => {
    elem.click = e => {
      e.preventDefault();
      const contentEl = e.target.parentNode().parentNode().querySelectorAll('div');

      contentEl.forEach((div) => {
        if (div.display.style !== 'none') {
          div.display.style = 'none';
          e.target.parentNode().setAttribute('style', 'margin-bottom: 0')
        } else {
          div.display.style = 'block';
          e.target.parentNode().setAttribute('style', null);
        }
      });
    };
  });
});
