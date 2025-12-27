import { Header } from '../components/Header';
import './404.css';

export function NotFoundPage() {
  return (
    <>
      <title>eCommerce Project - 404 Page Not Found</title>
      <link rel="icon" href="home-favicon.png" />
      <Header />

      <div className='home-page'>
        <h1>Page Not Found</h1>
      </div>
    </>
  );
}