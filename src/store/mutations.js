const items = ["POSTS", "CURRENT_PAGE", "POST_ITEM", "POST_COMMENTS"];
const map = items.reduce((o, x) => ((o[x] = x), o), {});
export default map;
