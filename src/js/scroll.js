const smoothLinksScroll = document.querySelectorAll('a[href^="#"]');

for (let smoothLink of smoothLinksScroll) {
  smoothLink.addEventListener('click', e => {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
