const assert = require('assert');
const { textToBase64, base64ToText } = require('./app.js');
console.log('🧪 Testing Base64 Studio...');
const raw = 'Sabhyam Prodigy 2026';
const encoded = textToBase64(raw);
const decoded = base64ToText(encoded);
assert(decoded === raw, 'Round-trip encoding verified');
console.log('✅ Base64 Studio test passed!');
