// function getTempCallback (location, callback) {
//   callback(undefined, 5);
//   callback('City not found');
// }
//
// getTempCallback('Belgrade', function (err, temp) {
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp );
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function (resolve, reject){
//     setTimeout(function () {
//       resolve(15);
//       reject('City not found');
//     }, 1000);
//
//   });
// }
//
// getTempPromise('Belgrade').then(function(temp){
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('promise error', err);
// });
