import Logo from "./logo";
import MainNavigation from "./main-navigation";
import MobileNavigation from "./mobile-navigation";

export default function Header() {
  return (
    <header className="bg-blue-300">
      <div className="flex justify-between items-center py-4 container">
        <Logo />
        <MainNavigation />
        <MobileNavigation />
      </div>
    </header>
  );
}
