// Creation
const str = 'Hello World';
const str2 = new String('Hello');

// Access
str[0];              // 'H'
str.charAt(0);       // 'H'
str.charCodeAt(0);   // 72

// Search
str.indexOf('World');    // 6
str.lastIndexOf('l');    // 9
str.includes('Hello');   // true
str.startsWith('He');    // true
str.endsWith('ld');      // true
str.match(/[A-Z]/g);     // ['H', 'W']

// Extraction
str.slice(0, 5);         // 'Hello'
str.substring(0, 5);     // 'Hello'
str.substr(0, 5);        // 'Hello' (deprecated)
str.split(' ');          // ['Hello', 'World']

// Transformation
str.toUpperCase();       // 'HELLO WORLD'
str.toLowerCase();       // 'hello world'
str.trim();              // Remove whitespace
str.replace('World', 'JavaScript');
str.replaceAll('l', 'L'); // 'HeLLo WorLd'
str.repeat(2);           // 'Hello WorldHello World'

// Length & Concatenation
str.length;              // 11
str.concat('!');         // 'Hello World!'
`${str}!`;              // 'Hello World!'