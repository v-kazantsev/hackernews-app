export interface IStory {
  id: number | string;
  deleted: boolean;
  type: "job" | "story" | "comment" | "poll" | "pollopt";
  time: number;
  by: string;
  text: string;
  dead: boolean;
  parent: number;
  kids: Array<number>;
  url: string;
  score: number;
  title: string;
  descendants: number;
}

export type IndexedStoriesArray = {
  [key: number]: Array<IStory> 
}
