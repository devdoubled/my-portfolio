import HomeAbout from "@/components/ui/Home/HomeAbout";
import HomeContact from "@/components/ui/Home/HomeContact";
import HomeIntroduction from "@/components/ui/Home/HomeIntroduction";
import HomeProject from "@/components/ui/Home/HomeProject/HomeProject";
import HomeSkill from "@/components/ui/Home/HomeSkill";

export default function Home() {
  return (
    <div className="w-full">
      <HomeIntroduction />
      <HomeProject />
      <HomeSkill />
      <HomeAbout />
      <HomeContact />
    </div>
  );
}
