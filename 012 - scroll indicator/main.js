window.addEventListener('scroll', onScrollIncator);

function onScrollIncator() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.querySelector(".scroll-indicator").style.width = scrolled + "%";
}
