export const listProducts = async () => {
  const res = await fetch("https://api-women-watch.vercel.app/watch");
  const json = await res.json();

  return json;
};
