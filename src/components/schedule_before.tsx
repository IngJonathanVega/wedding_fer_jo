import initTranslations from '@/i18n/i18n';
import Image from 'next/image';

const Section = ({ title, day, subtitle, description, img }: { title: string; day: string; subtitle: string; description: string; img?: string }) => (
  <div className='flex text-2xl mt-6 justify-center items-center text-black hover:scale-105 '>
    <div className='pt-32 pb-32 w-[400px]'>
      <p className='text-4xl'>{title}</p>
      <p className='text-lg font-mono mt-4'>{day}</p>
    </div>
    <div className='pt-20 pb-20 pl-4 md:pl-20 border-l-2 border-blue w-[400px]'>
      <p className='text-4xl'>{subtitle}</p>
      <p className='text-lg mt-4 font-mono text-justify' dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br>') }} />
      {img && <img className='h-auto max-w-full rounded-lg hover:border-2 border-white ' src={img} alt='' />}
    </div>
  </div>
);

export const ScheduleDayBefore = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['home']);
  return (
    <div className='text-center'>
      <h1 className='text-5xl text-black'>{t('the_day_before.sub_title')}</h1>
      <p className='text-xl mt-2 text-black'>{t('the_day_before.location')}</p>
      <div className=''>
        <Section
          title={t('the_day_before.dinner.title')}
          day={t('the_day_before.dinner.date')}
          subtitle={t('the_day_before.dinner.text')}
          description={t('the_day_before.dinner.description')}
        />
      </div>
    </div>
  );
};
