var $ = function (selector) {
   return document.querySelector(selector);
}

document.querySelector('#skillInput').addEventListener('keypress', function (e) {
   if (e.keyCode === 13) {
     addToBank()
   }
});

function addToBank() {
   if ($('#skillInput').value === '') {
      alert('you must type something')
   } else {
      var skillInput = $('#skillInput').value;
      var span = document.createElement('span');
      var skill = document.createTextNode(skillInput);
      span.appendChild(skill)
      span.onclick = addToList;
      document.getElementById('skillsBank').appendChild(span);
      document.getElementById('skillInput').value = ''}
}

function addToList() {
   var paragraph = document.getElementById('paragraph')
   var text = document.createTextNode(this.innerText)
   if (paragraph.innerText === "") {
      paragraph.appendChild(text)
   } else {
      var comma = document.createTextNode(', ')
      paragraph.appendChild(comma)
      paragraph.appendChild(text)
   }
}

function clearList() {
   console.log('yerp')
   $('#skillsList').innerText = ''
}