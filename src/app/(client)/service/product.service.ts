export const listProducts = async () => {
  const res = await fetch("https://api-women-watch-git-main-caotruongwf1204.vercel.app/watch");
  const json = await res.json();

  return json;
};
