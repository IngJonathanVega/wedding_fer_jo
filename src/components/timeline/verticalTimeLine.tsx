import initTranslations from '@/i18n/i18n';
import Image from 'next/image';

const Section = ({ title, text, img, date }: { title: string; text: string; img: string; date: string }) => (
  <div className='flex justify-center items-center mt-10'>
    <li>
      <div className='flex-start flex items-center pt-3'>
        <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-white'></div>
        <p className='text-sm text-white '>{date}</p>
      </div>
      <div className='mb-6 ml-4 mt-2'>
        <h4 className='mb-1.5 text-xl font-semibold'>{title}</h4>
        <br />
        <Image src={img} width={152} height={152} alt='Picture of Fernanda and Jonathan' className='w-40 h-52 p-1 bg-white' />
        <br />
        <p className='mb-3 text-white font-mono text-justify'>{text}</p>
      </div>
    </li>
  </div>
);

export const VerticalTimeLine = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['home']);

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <ol className='border-l border-white '>
        <Section title={t('our_story.dates.1.title')} text={t('our_story.dates.1.text')} img='/img/photo_1.jpg' date={t('our_story.dates.1.date')} />
        <Section title={t('our_story.dates.2.title')} text={t('our_story.dates.2.text')} img='/img/photo_2.jpg' date={t('our_story.dates.2.date')} />
        <Section title={t('our_story.dates.3.title')} text={t('our_story.dates.3.text')} img='/img/photo_3.jpg' date={t('our_story.dates.3.date')} />
        <Section title={t('our_story.dates.4.title')} text={t('our_story.dates.4.text')} img='/img/photo_4.jpg' date={t('our_story.dates.4.date')} />
        <Section title={t('our_story.dates.5.title')} text={t('our_story.dates.5.text')} img='/img/photo_5.jpg' date={t('our_story.dates.5.date')} />
        <Section title={t('our_story.dates.6.title')} text={t('our_story.dates.6.text')} img='/img/photo_6.jpg' date={t('our_story.dates.6.date')} />
      </ol>
    </div>
  );
};
