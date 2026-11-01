import SkillsControlCenter from "../components/SkillsControlCenter";
import SideNavigation from "../components/SideNavigation";
import SiteHeader from "../components/SiteHeader";

export default function Skills() {
  return (
    <main className="skills-page" id="skills">
      <SiteHeader />
      <div className="skills-legacy" id="skills-legacy">
        <SkillsControlCenter onBack={() => { window.location.hash = "#home"; }} />
      </div>
      <SideNavigation activeSection="skills" />
    </main>
  );
}
