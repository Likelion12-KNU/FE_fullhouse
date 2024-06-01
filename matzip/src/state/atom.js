import { atom, createStore } from "jotai";

/* { id: number, title: string, contents: string } */
export const postsAtom = atom([]);
export const store = createStore();
