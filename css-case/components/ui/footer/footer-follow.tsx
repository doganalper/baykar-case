import { FacebookIcon } from "@/components/icons/facebook";
import { InstagramIcon } from "@/components/icons/instagram";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { TwitterIcon } from "@/components/icons/twitter";
import { YoutubeIcon } from "@/components/icons/youtube";
import { FooterColumn } from "@/components/ui/footer/footer-column";

export function FooterFollow() {
  return (
    <FooterColumn
      title="Follow Us"
      className="pt-12 space-y-2"
    >
      <div className="footer__follow-socials">
        <YoutubeIcon />
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
        <LinkedinIcon />
      </div>
    </FooterColumn>
  );
}
