import { baseUrl } from "../config/const";
import { postsAtom, store } from "../state/atom";

export function getPosts() {
    store.set(postsAtom, async () => {
        const res = await fetch(`${baseUrl}/boards`); // default: get
        const result = await res.json();
        result.sort((a, b) => b.id - a.id);   // sort by newest
        return result;
    });
}