interface IRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export default interface INode {
  tag: string;
  id: string;
  classes: string;
  text: string;
  src: string;
  rect: IRect;
  backgroundColor: string;
  color: string;
  fontSize: number;
  fontWeight: number;
  fontFamily: string;
  textAlign: string;
  boxShadow: string;
  children: INode[];
}
