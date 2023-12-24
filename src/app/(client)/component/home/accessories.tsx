import NextImage from "next/image";

export default function Accessories() {
  return (
    <main className="flex items-center justify-center">
      <div className="container text-center">
        <h2 className="font-bold mb-10">PHỤ KIỆN</h2>
        <div className="row filter-products">
          <div className="">
            <NextImage
              width={100}
              height={100}
              objectFit="cover"
              layout="responsive"
              className="w-full h-auto"
              alt="logo"
              src="/accs.jpeg"
            />
            <h2 className="font-medium">Apple Watch strap</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
