import { SignupButton } from "@/components/ui/signup-button";
import { DrawerIcon } from "@/components/icons/drawer";

export function Header() {
  return (
    <header>
      <a className="header__site-link" href="#">
        Collers
      </a>
      <div className="header__pages">
        <a href="#">Products</a>
        <a href="#">Solutions</a>
        <a href="#">Pricing</a>
        <a href="#">Resources</a>
        <a href="#">Log In</a>
        <SignupButton variant="amber" size="m" />
      </div>
      <DrawerIcon className="header__drawer-icon" />
    </header>
  );
}
