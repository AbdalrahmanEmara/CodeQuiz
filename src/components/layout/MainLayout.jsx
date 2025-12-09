import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout({ children }) {
  return (
    <div className="text-purple-100">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
