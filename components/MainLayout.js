
import MainNavigation from './MainNavigation';

function MainLayout({ children }) {
  return (
    <>
      <MainNavigation/>
      <main className="page-content">
        { children }
      </main>
      <footer>
        <p>Just A foot</p>
      </footer>
    </>
  );
}

export default MainLayout;
