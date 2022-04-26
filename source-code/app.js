import { Anchor } from "./scripts/anchor.js";
import ancorsJson from "./scripts/anchors-json.js";
import {changeZoom,drowAnchors} from './scripts/map.js';
import {changeTheme} from './scripts/utils.js';

const initAnchors = () => {
  const image = document.getElementById("map");
  const currWidth = image.clientWidth;
  const currHeight = image.clientHeight;
  for (const anchorJson of ancorsJson) {
    const anchor = new Anchor({
      id : anchorJson.id,
      xcoord : anchorJson.coordinate.x,
      ycoord : anchorJson.coordinate.y,
      imageWidth : currWidth,
      imageHeight : currHeight,
      details : anchorJson.details
    });

    for (const anchorChildJson of anchorJson.childs) {
      const anchorChild = new Anchor({
        id : anchorChildJson.id,
        xcoord : anchorChildJson.coordinate.x,
        ycoord : anchorChildJson.coordinate.y,
        imageWidth : currWidth,
        imageHeight : currHeight,
        details : anchorChildJson.details
      });

      anchor.AddChild(anchorChild);
    }

    AnchorsList.push(anchor);
  }

  drowAnchors();

  const zoomInBtn = document.getElementById("zoom-in");
  zoomInBtn.addEventListener("click", zoomIn);

  const zoomOutBtn = document.getElementById("zoom-out");
  zoomOutBtn.addEventListener("click", zoomOut);

  const taskDetailsDiv = document.getElementById("task-details");
  taskDetailsDiv.addEventListener("click", toggleDetails)

  const themeSelect = document.getElementById("theme-select");
  themeSelect.addEventListener("click",changeTheme);
};

const toggleDetails = (event) => {
  const classList = event.target.classList;
  for (const className of classList) {
    if(className === 'main-map__task-main' || className === 'main-map__task-sub' || className === 'main-map__task-details'){
      const taskDetailsDiv = document.getElementById("task-details");
      taskDetailsDiv.classList.remove('show');
      return;
    }
  }
}

const zoomIn = () => {
  changeZoom(+500);
};

const zoomOut = () => {
  changeZoom(-500);
};

initAnchors();

