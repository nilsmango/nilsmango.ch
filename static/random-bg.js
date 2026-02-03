(function() {
  const path = window.location.pathname || 'index';
  const storageKey = `randomBgColor_${path}`;
  const footerKey = `randomBgFooter_${path}`;
  const storedColor = sessionStorage.getItem(storageKey);
  const storedFooter = sessionStorage.getItem(footerKey);
  const storedTheme = sessionStorage.getItem(`randomBgTheme_${path}`);
  
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = isDark ? 'dark' : 'light';
  
  if (storedColor && storedFooter && storedTheme === currentTheme) {
    document.documentElement.style.setProperty('--color-background', storedColor);
    document.documentElement.style.setProperty('--color-footer', storedFooter);
  } else {
    let h, s, l;
    if (isDark) {
      h = Math.floor(Math.random() * 360);
      s = Math.floor(Math.random() * 20) + 5;
      l = Math.floor(Math.random() * 10) + 5;
    } else {
      h = Math.floor(Math.random() * 360);
      s = Math.floor(Math.random() * 30) + 70;
      l = Math.floor(Math.random() * 15) + 85;
    }
    const bgColor = `hsl(${h}, ${s}%, ${l}%)`;
    const footerL = isDark ? l + 4 : l - 4;
    const footerColor = `hsl(${h}, ${s}%, ${footerL}%)`;
    
    document.documentElement.style.setProperty('--color-background', bgColor);
    document.documentElement.style.setProperty('--color-footer', footerColor);
    sessionStorage.setItem(storageKey, bgColor);
    sessionStorage.setItem(footerKey, footerColor);
    sessionStorage.setItem(`randomBgTheme_${path}`, currentTheme);
  }
})();
