import HotSites from "./components/HotSites";
import LatestSites from "./components/LatestSites";
import MainLayout from "./components/MainLayout";
import SearchSection from "./components/SearchSection";
import SubscribeSection from "./components/SubscribeSection";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <SearchSection></SearchSection>

      {/* Hot Recommendations Section */}
      <HotSites></HotSites>

      {/* New Releases Section */}
      <LatestSites></LatestSites>

      {/* Subscribe Section */}
      <SubscribeSection></SubscribeSection>
    </MainLayout>
  );
}
