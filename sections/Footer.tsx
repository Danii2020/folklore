/* eslint-disable import/no-unresolved */

import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles';
import { socials } from '../constants';

const Footer = () => (
  <footer
    className={`${styles.xPaddings} flex md:flex-row flex-col py-6
    max-w-[1400px] w-full m-auto justify-between items-center`}
  >
    <div
      className="flex md:flex-row flex-col
      items-center justify-center md:gap-20 gap-10 py-3"
    >
      <p
        className="font-normal text-[20px] text-center"
      >
        Hecho con ❤️ por <strong>Bindest</strong>
      </p>
      <ul
        className="flex md:flex-row flex-col justify-between
        items-center md:gap-20 gap-4"
      >
        <li key="terms-cons">
          <Link
            className={`${styles.footerText} text-center hover:border-b
            border-black`}
            href="/terminos-condiciones"
          >
            Términos y condiciones
          </Link>
        </li>
        <li key="privacy">
          <Link
            className={`${styles.footerText} text-center hover:border-b
            border-black`}
            href="/privacidad"
          >
            Privacidad
          </Link>
        </li>
        <li key="faqs">
          <Link
            className={`${styles.footerText} text-center hover:border-b
            border-black`}
            href="/preguntas-frecuentes"
          >
            Preguntas frecuentas
          </Link>
        </li>
      </ul>
      <div
        className="flex flex-col justify-center items-center"
      >
        <ul
          className="flex flex-row justify-between gap-1"
        >
          {
            socials.map((social) => (
              <li
                key={social.name}
              >
                <Link
                  className="block rounded-full hover:bg-[rgba(96,165,250,0.25)]
                  md:p-2"
                  href={social.href}
                >
                  <span>
                    <Image
                      className="object-contain"
                      width="36"
                      height="36"
                      src={social.url}
                      alt={social.name}
                    />
                  </span>
                </Link>
              </li>
            ))
          }
        </ul>
        <p>© 2023 Folklore</p>
      </div>
    </div>
  </footer>
);

export default Footer;
