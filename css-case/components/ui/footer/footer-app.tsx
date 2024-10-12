import { FooterColumn } from "@/components/ui/footer/footer-column";
import Image from "next/image";

export function FooterApp() {
  return (
    <FooterColumn title="Get the App">
      <div className="footer__column-app-stores">
        <a href="#">
          <Image
            src="/app-store.png"
            width={119.66}
            height={40}
            alt="App Store"
          />
        </a>
        <a href="#">
          <Image
            src="/play-store.png"
            width={135}
            height={40}
            alt="Play Store"
          />
        </a>
      </div>
    </FooterColumn>
  );
}
