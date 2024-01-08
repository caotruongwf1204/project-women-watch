export const listProducts = async () => {
  const res = await fetch("https://api-products-watch.vercel.app/watch");
  const json = await res.json();

  return json;
};

export const getProductById = async (id:any) => {
  const res = await fetch(`https://api-products-watch.vercel.app/watch/${id}`);
  const json = await res.json();

  return json;
};


export const listAccessory = async () => {
  const res = await fetch("https://api-products-watch.vercel.app/accesory");
  const json = await res.json();

  return json;
};

export const getAccessoryById = async (id:any) => {
  const res = await fetch(`https://api-products-watch.vercel.app/accesory/${id}`);
  const json = await res.json();

  return json;
};



