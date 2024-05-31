import { baseUrl, query } from "../config/const";
import { postsAtom, store } from "../state/atom";

/**
 * {
 * "boardLists" : [{"title" : string, "contents": string}, ...],
 * "viewCount" : int
 * }
 */
export function getPosts() {
    store.set(postsAtom, async () => {
        const res = await fetch(`${baseUrl}/lists?${query}`); // default: get
        const result = await res.json();
        // result.sort((a, b) => a.id - b.id);   // sort by newest
        return result;
    });
}