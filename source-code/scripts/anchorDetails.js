export const showAnchorDetails = (event) => {
  const id = event.target.dataset.id;

  const details = getSelectedAnchor(id);

  if (!details) {
    return "No Anchor Found";
  }

  let taskSubDev = document.getElementById("task-sub");
  taskSubDev.innerHTML = "";
  const parentCardRel = document.getElementById('parent-card-relations');
  parentCardRel.innerHTML = '';
  for (let index = 0; index < details.length; index++) {
    const detail = details[index];
    drowPortInParent(index + 1);
    drowPortDetails(index + 1, detail);
  }
  const tasksDetails = document.getElementById("task-details");
  tasksDetails.classList.add("show");
};

const drowPortInParent = (index) => {
  const divEl = document.createElement('div');
  divEl.classList.add('relation');
  divEl.innerText = index;

  const parentCardRel = document.getElementById('parent-card-relations');
  parentCardRel.appendChild(divEl);
};

const drowPortDetails = (portNumber, detail) => {
  var temp = document.getElementById("card-sub-template");
  var clon = temp.content.cloneNode(true);

  var title = clon.querySelector("#card-number");
  title.innerText = portNumber;

  var title = clon.querySelector("#card-title");
  title.innerText = detail.title;

  var current = clon.querySelector("#current-value");
  current.innerText = detail.current;

  var power = clon.querySelector("#power-value");
  power.innerText = detail.power;

  var energy = clon.querySelector("#energy-value");
  energy.innerText = detail.energy;

  var date = clon.querySelector("#date");
  date.innerText = detail.date;

  var checkBox = clon.querySelector("#check-box");
  checkBox.checked = detail.isActive;

  let taskSubDev = document.getElementById("task-sub");

  taskSubDev.appendChild(clon);
};

const getSelectedAnchor = (id) => {
  for (const anchor of AnchorsList) {
    if (anchor.id.toString() === id) {
      return anchor.details;
    }
    for (const child of anchor.childs) {
      if (child.id.toString() === id) {
        return child.details;
      }
    }
  }
  return null;
};
