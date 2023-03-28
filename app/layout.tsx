import '../styles/globals.css';
import React from 'react';

interface Props {
    children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => (
  <html lang="es">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
