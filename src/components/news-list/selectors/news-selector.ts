import { createSelector } from "reselect";
import { newsListSelector } from "./news-list-selector";

export const newsSelector = (id: string | number | undefined) => createSelector(newsListSelector, ({ data }) => {
  return id ? data.find(news => typeof id === 'string' ? news.id.toString() === id : news.id === id) : undefined
});
