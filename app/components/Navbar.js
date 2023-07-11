import Link from 'next/link';
import '../../app/globals.css';

const Navbar = () => {
  return (
    <nav>
      <div className='container1'>
        <Link href="/">
          <span className='button'>Buscar</span>
        </Link>
        <Link href="/registrar">
          <span className='button'>Registrar</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

