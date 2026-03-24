import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/main.css";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className="main">{children}</main>
            <Footer />
        </>
    );
}

export default Layout;
