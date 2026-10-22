function textToBase64(str) {
  if (typeof btoa !== 'undefined') return btoa(unescape(encodeURIComponent(str)));
  return Buffer.from(str, 'utf-8').toString('base64');
}
function base64ToText(b64) {
  if (typeof atob !== 'undefined') return decodeURIComponent(escape(atob(b64)));
  return Buffer.from(b64, 'base64').toString('utf-8');
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const raw = document.getElementById('rawInput');
    const b64 = document.getElementById('b64Output');
    raw.value = 'Hello Sabhyam Trivedy! Building 50+ repositories on GitHub.';

    document.getElementById('encodeBtn').addEventListener('click', () => {
      try { b64.value = textToBase64(raw.value); } catch(e) { b64.value = 'Error encoding: ' + e.message; }
    });
    document.getElementById('decodeBtn').addEventListener('click', () => {
      try { raw.value = base64ToText(b64.value); } catch(e) { raw.value = 'Error decoding: ' + e.message; }
    });
    document.getElementById('dataUriBtn').addEventListener('click', () => {
      b64.value = `data:text/plain;base64,${textToBase64(raw.value)}`;
    });
    document.getElementById('encodeBtn').click();
  });
}
if (typeof module !== 'undefined') module.exports = { textToBase64, base64ToText };
