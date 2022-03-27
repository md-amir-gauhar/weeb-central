import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Shonen",
  },
  {
    _id: uuid(),
    categoryName: "Seinen",
  },
  {
    _id: uuid(),
    categoryName: "Shojo",
  },
  {
    _id: uuid(),
    categoryName: "Sports manga",
  },
  {
    _id: uuid(),
    categoryName: "Fantasy",
  },
  {
    _id: uuid(),
    categoryName: "Comedy",
  },
  {
    _id: uuid(),
    categoryName: "Sci-fi",
  },
];
