import DownloadCV from "./DownloadCV";
import LanguageToggle from "./LanguageToggle";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  return (
    <header className="site-header" aria-label="Site header">
      <Logo />
      <div className="header-actions">
        <SocialLinks />
        <ThemeToggle />
        <LanguageToggle />
        <DownloadCV />
      </div>
    </header>
  );
}
