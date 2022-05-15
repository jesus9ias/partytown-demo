console.log('start block all');
/*  window.setTimeout(() => {
  console.log('end block all');
}, 5000);
*/

const request = new XMLHttpRequest();
// `false` makes the request synchronous
request.open('POST', 'http://localhost:3434/data', false);
request.send(null);
console.log('end block all');
