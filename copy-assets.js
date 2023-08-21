const ncp = require('ncp');

const files = [
  { src: 'package.json', dest: 'dist/package.json' },
  { src: 'LICENSE', dest: 'dist/LICENSE' },
  { src: 'README.md', dest: 'dist/README.md' },
  { src: 'SECURITY.md', dest: 'dist/SECURITY.md' },
];

files.forEach(({ src, dest }) => {
  ncp(src, dest, (err) => {
    if (err) {
      return console.error(`Failed to copy ${src}: ${err}`);
    }
    console.log(`File ${src} copied successfully to ${dest}`);
  });
});
