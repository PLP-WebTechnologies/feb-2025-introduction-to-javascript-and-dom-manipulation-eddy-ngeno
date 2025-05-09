
function changeContent() {
  const info = document.getElementById("info");
  info.textContent = "The text and style have been changed!";
  info.classList.add("changed");
}

function addElement() {
  const section = document.getElementById("extra-section");

  
  if (!document.getElementById("new-paragraph")) {
    const newPara = document.createElement("p");
    newPara.id = "new-paragraph";
    newPara.textContent = "This is a new paragraph added to the section.";
    section.appendChild(newPara);
  }
}


function removeElement() {
  const existingPara = document.getElementById("new-paragraph");
  if (existingPara) {
    existingPara.remove();
  }
}
