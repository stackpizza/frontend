import { FooterLink } from '../footer-link/footer-link.component';
import { Logo } from '../logo/logo.component';

export const Footer = () => {
  return (
    <footer className="pt-12 px-12 pb-8 bg-gray-900">
      <section className="relative mb-8">
        <span className="uppercase text-zinc-500 font-bold text-sm cursor-default">Контакти</span>
        <ul className="mb-8">
          <FooterLink href="tel:+380990099009">+38 (099) 00 99 009</FooterLink>
          <FooterLink href="mailto:testmail@mail.test">testmail@mail.test</FooterLink>
        </ul>
        <hr className="relative w-[calc(100%_+_6rem)] mb-8 left-[-3rem] border-zinc-500" />
      </section>
      <Logo textColor="white" />
    </footer>
  );
};
