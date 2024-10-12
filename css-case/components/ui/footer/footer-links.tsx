import { FooterColumn } from "@/components/ui/footer/footer-column";

type Props = {
  links: string[];
  title: string;
};
export function FooterLinks({ links, title }: Props) {
  return (
    <FooterColumn title={title}>
      <>
        {links.map((link) => (
          <a href="#" key={link} className="footer__column-link">
            {link}
          </a>
        ))}
      </>
    </FooterColumn>
  );
}
