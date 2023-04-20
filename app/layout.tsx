import '../styles/globals.css';
import React from 'react';
import { NavBar, Footer } from '../sections/index';

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => (
  <html lang="es">
    <body>
      <NavBar />
      {children}
      <div className="clear-both">
        <div
          className="w-full bg-[rgba(19,122,132,0.14)]"
        >
          <Footer />
        </div>
      </div>

    </body>
  </html>
);

export default RootLayout;
