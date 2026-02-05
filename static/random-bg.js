(function() {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  let h, s, l;
  if (isDark) {
    h = Math.floor(Math.random() * 360);
    s = Math.floor(Math.random() * 20) + 5;
    l = Math.floor(Math.random() * 10) + 5;
  } else {
    h = Math.floor(Math.random() * 360);
    s = Math.floor(Math.random() * 30) + 70;
    l = Math.floor(Math.random() * 3) + 97;
  }
  const bgColor = `hsl(${h}, ${s}%, ${l}%)`;
  const footerL = isDark ? l + 4 : l - 4;
  const footerColor = `hsl(${h}, ${s}%, ${footerL}%)`;
  
  document.documentElement.style.setProperty('--color-background', bgColor);
  document.documentElement.style.setProperty('--color-footer', footerColor);
})();
