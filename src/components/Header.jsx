import { Link } from 'react-router-dom';
import MountainIcon from './Icons/MountainIcon';

const Header = () => (
  <header className="px-4 lg:px-6 h-14 flex items-center">
    <Link to="#" className="flex items-center justify-center">
      <MountainIcon className="h-6 w-6" />
      <span className="sr-only">AI Developer Portfolio</span>
    </Link>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
        <Link
          key={item}
          to="#"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          {item}
        </Link>
      ))}
    </nav>
  </header>
);

export default Header;
