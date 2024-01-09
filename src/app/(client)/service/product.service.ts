export const listProducts = async () => {
  const res = await fetch("https://api-products-watch-git-main-caotruongwf1204.vercel.app/watch");
  const json = await res.json();

  return json;
};

export const getProductById = async (id:any) => {
  const res = await fetch(`https://api-products-watch-git-main-caotruongwf1204.vercel.app/watch/${id}`);
  const json = await res.json();

  return json;
};


export const listAccessory = async () => {
  const res = await fetch("https://api-products-watch-git-main-caotruongwf1204.vercel.app/accesory");
  const json = await res.json();

  return json;
};

export const getAccessoryById = async (id:any) => {
  const res = await fetch(`https://api-products-watch-git-main-caotruongwf1204.vercel.app/accesory/${id}`);
  const json = await res.json();

  return json;
};



