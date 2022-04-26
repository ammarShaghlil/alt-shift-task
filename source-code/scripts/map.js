import { showAnchorDetails } from "./anchorDetails.js";

let zoomLvl = 0;

export const changeZoom = (value) => {
  try {
    var myImg = document.getElementById("map");

    var currWidth = myImg.clientWidth;
    var currHeight = myImg.clientHeight;

    if (currWidth < 600 && value < 0) {
      console.log('Max Zoom out level reached');
      return;
    }

    if (value > 0) {
      zoomLvl++;
    } else {
      zoomLvl--;
    }

    const newWidth = currWidth + value;
    const newHeight = currHeight + value;
    myImg.style.width = newWidth + "px";
    myImg.style.height = newHeight + "px";

    for (const anchor of AnchorsList) {
      anchor.Update(newWidth, newHeight);
    }

    drowAnchors();

    const zoomLvlEl = document.getElementById("zoom-lvl");
    zoomLvlEl.innerText = zoomLvl;
  } catch (error) {
    console.error("error While Zoomin in - out");
  }
};

export const drowAnchors = () => {
  try {
    const anchorContainer = document.getElementById("anchor-layer");
    anchorContainer.innerHTML = "";

    let drowChilds = false;
    if (zoomLvl > 10) {
      drowChilds = true;
    }

    for (const anchor of AnchorsList) {
      if (drowChilds && anchor.childs.length > 0) {
        for (const anchorChild of anchor.childs) {
          AddAnchorElement(anchorChild, anchorContainer);
        }
        continue;
      } else {
        AddAnchorElement(anchor, anchorContainer);
      }
    }
  } catch (error) {
    console.error("error While Drowing the anchors");
  }
};

const AddAnchorElement = (anchor, anchorContainer) => {
  let anchorDiv = document.createElement("div");
  anchorDiv.classList.add("anchor");
  anchorDiv.style.top = anchor.coord.xcoord + "px";
  anchorDiv.style.left = anchor.coord.ycoord + "px";
  anchorDiv.dataset.id = anchor.id;
  anchorContainer.appendChild(anchorDiv);

  anchorDiv.addEventListener("click", showAnchorDetails);
};
