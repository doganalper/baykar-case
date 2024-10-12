import { FooterLinks } from "@/components/ui/footer/footer-links";
import { FooterApp } from "@/components/ui/footer/footer-app";
import { FooterFollow } from "@/components/ui/footer/footer-follow";
import { FooterTestimonials } from "./footer-testimonials";

export function Footer() {
  return (
    <footer>
      <FooterLinks
        title="Product"
        links={["Pricing", "Overview", "Browse", "Accessability", "Five"]}
      />
      <FooterLinks
        title="Solutions"
        links={[
          "Brainstorming",
          "Ideation",
          "Wireframing",
          "Research",
          "Design",
        ]}
      />
      <FooterLinks
        title="Support"
        links={[
          "Contact Us",
          "Developers",
          "Documentation",
          "Integrations",
          "Reports",
        ]}
      />
      <div>
        <FooterApp />
        <FooterFollow />
      </div>
      <div className="col-span-full">
        <FooterTestimonials />
      </div>
    </footer>
  );
}
