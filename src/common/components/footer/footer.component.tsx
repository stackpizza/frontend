import { Logo } from '../logo/logo.component';

export const Footer = () => {
  return (
    <footer className="pt-12 px-12 pb-8 bg-gray-900">
      <div>
        <span className="uppercase text-zinc-500">Контакти</span>
        <ul className="mt-4">
          <li>
            <a href="tel:380000000000">+38(000)00-00-000</a>
          </li>
          <li>
            <a href="mailto:test@test.test">test@test.test</a>
          </li>
        </ul>
      </div>
      <Logo />
    </footer>
  );
};
