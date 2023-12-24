import Footer from "./component/footer";
import Header from "./component/header";
import Navigation from "./component/navigation";


export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>

      <Header></Header>
      <Navigation></Navigation>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
