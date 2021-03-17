var $ = function (selector) {
   return document.querySelector(selector);
}

function addToBank() {
   var skillInput = $('#skillInput').value;
   var span = document.createElement('span');
   var skill = document.createTextNode(skillInput);
   span.appendChild(skill)
   span.onclick = addToList;
   document.getElementById('skillsBank').appendChild(span)
   
}

function addToList() {
   console.log(this.innerText)
   var text = this.innerText;
   var span = document.createElement('span');
   var skill = document.createTextNode(text);
   span.appendChild(skill);
   document.getElementById('skillsList').appendChild(span)
}

// for (var i = 0; i < newSkill.length; i++) {
//    var skill = newSkill[i];
//    skill.onclick = addToBank
// }


// function addToBank() {
//    var skillInput = document.getElementById("skillInput").value
//    var newSkill = document.createElement("span");
//    newSkill.innerText = skillInput;
  
//    var skillsBank = document.getElementById("skillsBank");
//    skillsBank.appendChild(newSkill)
//    var spanList = document.getElementsByTagName("span")[0]
//    for (var i = 0; i < spanList.length; i++) {
//       console.log(spanlist)
//    }
//    spanList.onclick = addToList
//    }

// function addToList() {
//    // console.log(e)
//    var text = this.innerText;
//    var skill = document.createElement("span");
//    skill.innerText = text
//    var skillsList = document.getElementById("skillsList");
//    skillsList.appendChild(skill)

// }
