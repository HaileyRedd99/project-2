//   var elements = document.getElementsByTagName('*');
// for (var i = 0; i < elements.length; i++) {
//    var element = elements[i];
//
//
//   //console.log(element);
//  //element.style.setProperty('border', 'solid 1px red');
//
//   var r = Math.floor(Math.random()*255);
//   var g = Math.floor(Math.random()*255);
//   var b = Math.floor(Math.random()*255);
//   var c = "rgb(" + r + "," + g + "," + b + ")"
//
//   element.style.setProperty('background-color', c);
//
// }
var html = document.querySelector('html');
//var elements = document.getElementsByTagName('html');
html.style.setProperty('filter', 'grayscale(100%)'); 
console.log(" *** in here *** ");
var walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT)

var node;
while (node = walker.nextNode()) {
  //node.nodeValue = node.nodeValue.replace(/ridge/gi,'dick');
  node.nodeValue = node.nodeValue.replace(/therapeutic/gi,'abusive');
  node.nodeValue = node.nodeValue.replace(/clinically/gi,' ');
  node.nodeValue = node.nodeValue.replace(/approach/gi,'method');
  node.nodeValue = node.nodeValue.replace(/a rigorous college prep curriculum/gi,'untrained staff members');
  node.nodeValue = node.nodeValue.replace(/structured/gi,'an unstable');
  node.nodeValue = node.nodeValue.replace(/tend to/gi,'degrade');
  node.nodeValue = node.nodeValue.replace(/learning and connection/gi,'lies and manipulation');
  node.nodeValue = node.nodeValue.replace(/work effectively with/gi,'permanently fuck up');
  node.nodeValue = node.nodeValue.replace(/while attending to the underlying issues that create a complex presentation of behaviors and needs./gi,' ');
  node.nodeValue = node.nodeValue.replace(/whom we help/gi,'we do not help');
  node.nodeValue = node.nodeValue.replace(/about/gi,'lies');
  node.nodeValue = node.nodeValue.replace(/why spring ridge/gi,'please god do not send your child here');
  node.nodeValue = node.nodeValue.replace(/ /gi,' ');
  node.nodeValue = node.nodeValue.replace(/ /gi,' ');
  node.nodeValue = node.nodeValue.replace(/ /gi,' ');
}
