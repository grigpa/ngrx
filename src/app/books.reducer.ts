import { createReducer, on } from '@ngrx/store';
import { getBooks, deleteBooks, addBook } from './books.actions';
import { Book } from "./books.model";


export interface State {
  books: Book[];
  counter: number;
}

const initialState: State = {
  books: [],
  counter: 0,
}


export const booksReducer = createReducer(
  initialState,
  on(getBooks, (state) => ({ ...state })),
  on(deleteBooks, (state) => ({ ...state, books: [] })),
  on(addBook, (state) => ({...state, books: [] })),
);
