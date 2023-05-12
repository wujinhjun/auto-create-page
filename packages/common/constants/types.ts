interface IRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface INode {
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
  imgData: Uint8Array;
  borderRadius: number;
  flex: true;
  flexDirection: "row" | "column";
  flexBasis: "auto";
  flexFlow: "row nowrap";
  flexGrow: "0";
  children: INode[];
}
