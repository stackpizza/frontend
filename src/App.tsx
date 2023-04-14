import { Footer } from './common/components/footer/footer.component';
import { Header } from './common/components/header/header.component';
import { MenuList } from './common/modules/menu/components/menu-list/menu-list.component';
import pizzaMenu from '@app/mocks/pizza.json';

export const App = () => (
  <div>
    <Header />
    <div className="mt-12 mx-8 2xl:mx-32">
      <MenuList Items={pizzaMenu} />
    </div>

    <Footer />
  </div>
);

export default App;
