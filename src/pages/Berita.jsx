import BlogBerita from "../components/blogberita/beritafull";
import Navbar from "../components/landingpage/Navbar";
import Footer from "../components/landingpage/Footer";

export default function LandingPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <BlogBerita/>
      <Footer/>
    </main>
  );
}