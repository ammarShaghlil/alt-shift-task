export class Anchor {
  constructor(props) {
    this.id = props.id;
    this.coord = new Coordinate(props.xcoord, props.ycoord);
    this.px = props.xcoord / props.imageWidth;
    this.py = props.ycoord / props.imageHeight;
    this.childs = [];
    this.details = [];
    for (const det of props.details) {
      this.details.push(new AnchorDetail(det));
    }
  }

  Update(width, height) {
    const xcoord = this.px * width;
    const ycoord = this.py * height;

    this.px = xcoord / width;
    this.py = ycoord / height;

    this.coord = new Coordinate(xcoord, ycoord);

    for (const child of this.childs) {
      child.Update(width, height);
    }
  }

  AddChild(childAnchor) {
    this.childs.push(childAnchor);
  }
}

export class AnchorDetail {
  constructor(details) {
    this.title = details.title;
    this.power = details.power;
    this.current = details.current;
    this.energy = details.energy;
    this.date = details.date;
    this.isActive = details.active;
  }
}

export class Coordinate {
  constructor(x, y) {
    this.xcoord = x;
    this.ycoord = y;
  }
}
