import { SignupButton } from "@/components/ui/signup-button";
import { PlayIcon } from "@/components/icons/play";

export function HeroButtons() {
  return (
    <div className="hero__buttons">
      <SignupButton variant="amber" size="l" />
      <a className="hero__buttons-play">
        <PlayIcon />
        <span className="hero__buttons-play-demo">Watch Demo</span>
      </a>
    </div>
  );
}
