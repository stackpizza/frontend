import { FC, PropsWithChildren } from 'react';

interface IFooterLinkProps {
  href: string;
}

export const FooterLink: FC<IFooterLinkProps & PropsWithChildren> = ({ href, children }) => {
  return (
    <li>
      <a className="text-gray-400 font-bold text-sm hover:text-gray-200 transition-colors" href={href}>
        {children}
      </a>
    </li>
  );
};
