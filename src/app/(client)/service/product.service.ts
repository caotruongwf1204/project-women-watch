export const listProducts = async (
  category: any,
  price_lte: any,
  sort: string
) => {
  const url = new URL("https://api-product-watch.vercel.app/watch");

  if (category) {
    url.searchParams.append("category", category);
  }
  if (price_lte) {
    url.searchParams.append("price_lte", price_lte);
  }
  if (sort) {
    url.searchParams.append("_sort", "sale");
    url.searchParams.append("_order", sort);
  }

  const res = await fetch(url);
  const json = await res.json();

  return json;
};

export const getProductById = async (id: any) => {
  const res = await fetch(`https://api-product-watch.vercel.app/watch/${id}`);
  const json = await res.json();

  return json;
};

export const listAccessory = async (
  category: any,
  price_lte: any,
  sort: string
) => {
  const url = new URL("https://api-product-watch.vercel.app/accesory");

  if (category) {
    url.searchParams.append("category", category);
  }
  if (price_lte) {
    url.searchParams.append("price_lte", price_lte);
  }
  if (sort) {
    url.searchParams.append("_sort", "sale");
    url.searchParams.append("_order", sort);
  }

  const res = await fetch(url);
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
