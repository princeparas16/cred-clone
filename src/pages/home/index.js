import AppRating from "../../components/AppRating";
import BrandsLove from "../../components/BrandsLove";
import Header from "../../components/common/Header";
import CredExperience from "../../components/CredExperience";
import CredSecurity from "../../components/CredSecurity";
import CredStory from "../../components/CredStory";
import FeelSpecial from "../../components/FeelSpecial";
import HeroSection from "../../components/HeroSection";
import MobileScroll from "../../components/MobileScroll";
import ProductShowcase from "../../components/ProductShowcase";
import WindowPeek from "../../components/WindowPeek";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <BrandsLove />
      <CredExperience />
      <MobileScroll />
      <WindowPeek />
      <CredSecurity />
      <CredStory />
      <AppRating />
    </>
  );
};

export default Home;
