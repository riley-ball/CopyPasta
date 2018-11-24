// Code left as an example structure

// let changeColor = document.getElementById('changeColor');
// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
//   });

// let changeColor = document.getElementById('test');
// chrome.storage.sync.get('color', function(data) {
//   test.   style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
//   });

// changeColor.onclick = function(element) {
//   let color = element.target.value;
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         tabs[0].id,
//         {code: 'document.body.style.backgroundColor = "' + color + '";'});
//   });
// };