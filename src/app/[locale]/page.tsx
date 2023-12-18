import { FAQS } from '@/components/faqs';
import { PhotoSection } from '@/components/photoSection';
import { ScheduleDay } from '@/components/schedule';
import { VerticalTimeLine } from '@/components/timeline/verticalTimeLine';
import initTranslations from '@/i18n/i18n';
import { PageProps } from '@/types';
import { FC } from 'react';

const Page: FC<PageProps> = async ({ params: { locale } }) => {
  const { t } = await initTranslations(locale, ['home']);

  return (
    <div className='text-white font-courgette'>
      <section className='min-h-screen flex flex-row justify-center items-center bg-main bg-cover bg-center' id='responsive-home'>
        <div className='text-center h-full lg:hover:scale-150 '>
          <p className=' text-7xl mt-4'>{t('home.title')}</p>
          <p className='text-3xl mt-2 '>{t('home.date')}</p>
        </div>
      </section>

      <section className='p-4 md:p-20 bg-blue min-h-screen space-y-20' id='responsive-our-story'>
        <h2 className='text-8xl mt-20 mb-20 text-center'>{t('our_story.title')}</h2>
        <VerticalTimeLine locale={locale} />

        <PhotoSection />
      </section>

      {/* <section className='p-4 md:p-20 bg-rose bg-opacity-40 min-h-screen' id='responsive-the-girls'>
        <h2 className='text-8xl mt-20  text-blue mb-10 text-center '>{t('the_girls.title')}</h2>
        <GirlsSection locale={locale} />
      </section>

      <section className='p-4 md:p-20 bg-blue min-h-screen' id='responsive-the-boys'>
        <h2 className='text-8xl mt-20  text-white mb-10 text-center '>{t('the_boys.title')}</h2>
        <BoysSection locale={locale} />
      </section> */}

      <section className='p-4 md:p-20 text-blue bg-rose bg-opacity-40 min-h-screen space-y-20' id='responsive-the-day'>
        <h2 className='text-8xl mt-20 mb-20 text-center'>{t('the_day.title')}</h2>
        <ScheduleDay locale={locale} />
      </section>

      <section className='p-4 md:p-20 text-white bg-blue min-h-screen space-y-20' id='responsive-faqs'>
        <FAQS locale={locale} />
      </section>
    </div>
  );
};

export default Page;
