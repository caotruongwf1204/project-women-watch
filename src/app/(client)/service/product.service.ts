export const listProducts = async () => {
  const res = await fetch("https://api-product-watch.vercel.app/watch");
  const json = await res.json();

  return json;
};

export const getProductById = async (id: any) => {
  const res = await fetch(`https://api-product-watch.vercel.app/watch/${id}`);
  const json = await res.json();

  return json;
};

export const listAccessory = async () => {
  const res = await fetch("https://api-product-watch.vercel.app/accesory");
  const json = await res.json();

  return json;
};

export const getAccessoryById = async (id: any) => {
  const res = await fetch(
    `https://api-product-watch.vercel.app/accesory/${id}`
  );
  const json = await res.json();

  return json;
};

export const getSearch = async (search: any) => {
  const res = await fetch(
    `https://api-product-watch.vercel.app/watch${
      search ? `?title_like=${search}&` : "?"
    }`
  );
  const json = await res.json();
  return json;
};
