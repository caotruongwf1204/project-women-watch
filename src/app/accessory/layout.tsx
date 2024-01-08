import Footer from "../(client)/component/footer";
import Header from "../(client)/component/header";
import Navigation from "../(client)/component/navigation";



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
