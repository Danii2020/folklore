import '../styles/globals.css';
import React from 'react';

interface Props {
    children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => (
  <html lang="es">
    <body>{children}</body>
  </html>
);

export default RootLayout;
