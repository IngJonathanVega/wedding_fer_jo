'use client';

import { LocaleSwitcher } from './LocaleSwitcher';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Menu = ({ locale }: { locale: string }) => {
  const { t } = useTranslation('home');

  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingDown = prevScrollPos < currentScrollPos;

      setVisible(!scrollingDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`flex flex-col md:flex-row justify-between p-3 bg-white fixed w-full top-0 z-10 transition-transform ${
        visible ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      <div className='flex items-center'>
        <span className='font-semibold text-lg underline underline-offset-4 font-courgette'>Fer & Jo</span>
      </div>
      <div className='flex text-sm space-x-6 mt-4 md:mt-0'>
        <a href='#responsive-home' className='block md:inline'>
          {t('nav.home')}
        </a>
        <a href='#responsive-our-story' className='block md:inline'>
          {t('nav.out_story')}
        </a>
        {/* <a href='#responsive-the-girls' className='block md:inline'>
          {t('nav.the_girls')}
        </a>
        <a href='#responsive-the-boys' className='block md:inline'>
          {t('nav.the_boys')}
        </a> */}
        <a href='#responsive-the-day' className='block md:inline'>
          {t('nav.the_day')}
        </a>
        <a href='#responsive-faqs' className='block md:inline'>
          {t('nav.faqs')}
        </a>
      </div>
      <div className='mt-4 md:mt-0'>
        <div className='flex font-courgette'>
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  );
};
