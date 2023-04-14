import { Logo } from '../logo/logo.component';

export const Header = () => {
  return (
    <header className="h-12 shadow-xl px-6">
      <div className="h-full flex items-center">
        <Logo />
      </div>
    </header>
  );
};
