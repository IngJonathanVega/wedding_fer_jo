import initTranslations from '@/i18n/i18n';
import Image from 'next/image';
const Line = () => {
  return (
    <div className='relative w-full mt-4 mb-6'>
      <div className='absolute inset-y-1/2 bg-white w-full h-1'></div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1 -translate-y-1/3 bg-white w-6 h-6 rounded-full'></div>
    </div>
  );
};

const ImageSection = ({ img }: { img: string }) => (
  <div className='flex flex-col items-center h-52'>
    <div className='bg-white'>
      <Image src={img} width={152} height={152} alt='Picture of Fernanda and Jonathan' className='w-40 h-52 p-1' />
    </div>
  </div>
);

const TextSection = ({ date, text, title }: { date: string; text: string; title: string }) => (
  <div className='flex flex-col items-center justify-end h-52'>
    <p className='text-sm text-white '>{date}</p>
    <h4 className='mb-1.5 text-xl font-semibold'>{title}</h4>
    <p className='mb-3 text-white font-mono'>{text}</p>
  </div>
);

const TextSectionRevert = ({ date, text }: { date: string; text: string }) => (
  <div className='flex flex-col items-center h-52'>
    <div className='text-xl mb-2 text-white'>{date}</div>
    <p className='text-white'>{text}</p>
  </div>
);

const Section = ({ text, img, date, title }: { text: string; img: string; date: string; title: string }) => {
  return (
    <div className='flex-1 flex flex-col'>
      <TextSection text={text} date={date} title={title} />
      <Line />
      <ImageSection img={img} />
    </div>
  );
};

const SectionRevert = ({ text, img, date, title }: { text: string; img: string; date: string; title: string }) => {
  return (
    <div className='flex-1 flex flex-col'>
      <ImageSection img={img} />
      <Line />
      <TextSectionRevert text={text} date={date} />
    </div>
  );
};
export const HorizontalTimeLine = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['home']);
  return (
    <div className=''>
      <div className='flex overflow-x-auto p-20'>
        <Section img='/img/photo_1.jpg' text={t('our_story.dates.1.text')} date={t('our_story.dates.1.date')} title={t('our_story.dates.1.title')} />
        <SectionRevert img='/img/photo_2.jpg' text={t('our_story.dates.2.text')} date={t('our_story.dates.2.date')} title={t('our_story.dates.2.title')} />
        <Section img='/img/photo_3.jpg' text={t('our_story.dates.3.text')} date={t('our_story.dates.3.date')} title={t('our_story.dates.3.title')} />
        <SectionRevert img='/img/photo_4.jpg' text={t('our_story.dates.4.text')} date={t('our_story.dates.4.date')} title={t('our_story.dates.4.title')} />
        <Section img='/img/photo_5.jpg' text={t('our_story.dates.5.text')} date={t('our_story.dates.5.date')} title={t('our_story.dates.5.title')} />
        <SectionRevert img='/img/photo_6.jpg' text={t('our_story.dates.6.text')} date={t('our_story.dates.6.date')} title={t('our_story.dates.6.title')} />
      </div>
    </div>
  );
};
