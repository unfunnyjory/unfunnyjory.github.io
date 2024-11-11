window.onload = function() {
  const iframe = document.createElement('iframe');
  iframe.src = 'sidebar.html';
  iframe.id = 'iframe-sidebar';
  iframe.style.width = '320px';
  iframe.style.height = '100%';
  iframe.style.position = 'fixed';
  iframe.style.left = '0';
  iframe.style.top = '0';
  iframe.style.border = 'none';

  document.body.appendChild(iframe);
};