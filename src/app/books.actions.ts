import { createAction, props } from '@ngrx/store';
import { Book } from "./books.model";

export const getBooks = createAction('[Books Component] GetBooks');
export const deleteBooks = createAction('[Books Component] DeleteBooks');
export const addBook = createAction('[Books Component] AddBook',
  props<{ book: Book }>());
