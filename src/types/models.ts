export interface IStory {
  by: string;
  descendants: number;
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
  kids?: Array<number>;
}

export interface IComment {
  by: string;
  id: number;
  time: number;
  text: string;
  type: string;
  parent: number;
  kids?: Array<number>
}