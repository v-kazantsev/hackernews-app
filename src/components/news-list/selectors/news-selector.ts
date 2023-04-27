import { createSelector } from "reselect";
import { newsListSelector } from "./news-list-selector";

export const newsSelector = (id: string | number | undefined) => createSelector(newsListSelector, (data) => {
  return data.find(news => news.id == id)
});
