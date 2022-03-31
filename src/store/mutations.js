const items = ["POSTS", "CURRENT_PAGE"];
const map = items.reduce((o, x) => ((o[x] = x), o), {});
export default map;
