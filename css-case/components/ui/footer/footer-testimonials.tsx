import { GlobeIcon } from "@/components/icons/globe";

export function FooterTestimonials() {
  return (
    <div className="footer__testimonials">
      <div className="footer__testimonials-copyright">
        Collers @ 2023. All rights reserved.
      </div>
      <div className="footer__testimonials-links">
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Contact</a>
        <span className="footer__testimonials-lang">
          <GlobeIcon />
          <span>EN</span>
        </span>
      </div>
    </div>
  );
}
