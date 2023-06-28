import Link from 'next/link';
import classes from '@/styles/MainNavigation.module.css';

function MainNavigation() {
  return (
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
  );
}

export default MainNavigation;
