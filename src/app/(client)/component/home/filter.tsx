import NextImage from "next/image";
import Link from "next/link";

export default function Filter() {
  return (
    <main className="flex items-center justify-center pb-10">
      <div className="container text-center">
        <h2 className="font-bold mb-10">ĐỒNG HỒ</h2>
        <div className="row filter-products">
          <div className="">
            <Link href={`/collection?category=bee`}>
              <NextImage
                width={100}
                height={100}
                objectFit="cover"
                layout="responsive"
                className="w-full h-auto"
                alt="logo"
                src="/bee-fil.jpeg"
              />
              <h2 className="font-medium">Bee</h2>
            </Link>
          </div>
          <div className="">
            <Link href={`/collection?category=wonderland`}>
              <NextImage
                width={100}
                height={100}
                objectFit="cover"
                layout="responsive"
                className="w-full h-auto"
                alt="logo"
                src="/wonder-fil.jpeg"
              />
              <h2 className="font-medium">Wonderland</h2>
            </Link>
          </div>
          <div className="">
            <Link href={`/collection?category=classic`}>
              <NextImage
                width={100}
                height={100}
                objectFit="cover"
                layout="responsive"
                className="w-full h-auto"
                alt="logo"
                src="/classic-fil.jpeg"
              />
              <h2 className="font-medium">Classic</h2>
            </Link>
          </div>
          <div className="">
            <Link href={`/collection?category=selestial`}>
              <NextImage
                width={100}
                height={100}
                objectFit="cover"
                layout="responsive"
                className="w-full h-auto"
                alt="logo"
                src="/celes-fil.jpeg"
              />
              <h2 className="font-medium">Celestial</h2>
            </Link>
          </div>
          <div className="">
            <Link href={`/collection?category=rainbow`}>
              <NextImage
                width={100}
                height={100}
                objectFit="cover"
                layout="responsive"
                className="w-full h-auto"
                alt="logo"
                src="/rain-fil.webp"
              />
              <h2 className="font-medium">Rainbow</h2>
            </Link>
          </div>
          <div className="">
            <Link href={`/collection?category=floral`}>
              <NextImage
                width={100}
                height={100}
                objectFit="cover"
                layout="responsive"
                className="w-full h-auto"
                alt="logo"
                src="/flora.jpeg"
              />
              <h2 className="font-medium">Floral</h2>
            </Link>
          </div>
          <div className="">
            <Link href={`/collection?category=sports luxe`}>
              <NextImage
                width={100}
                height={100}
                objectFit="cover"
                layout="responsive"
                className="w-full h-auto"
                alt="logo"
                src="/luxe.jpeg"
              />
              <h2 className="font-medium">Sports Luxe</h2>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
