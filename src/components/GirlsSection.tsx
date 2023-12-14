import initTranslations from '@/i18n/i18n'

export const GirlsSection = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['home'])
  return (
    <>
      <div className="text-black mt-24 grid md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center">
          <img
            className="rounded-full h-52 w-52 mb-4  hover:scale-150 hover:border-2 border-white"
            src="/img/collage_12.jpg"
            alt=""
          />
          <span className="text-6xl mb-4">{t('the_girls.first.name')}</span>
          <span className='text-2xl'>{t('the_girls.first.text1')}</span>
          <span className='text-2xl'>{t('the_girls.first.text2')}</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="rounded-full h-52 w-52 mb-4  hover:scale-150 hover:border-2 border-white"
            src="/img/collage_12.jpg"
            alt=""
          />
          <span className="text-6xl mb-4">{t('the_girls.second.name')}</span>
          <span className='text-2xl'>{t('the_girls.second.text1')}</span>
          <span className='text-2xl'>{t('the_girls.second.text2')}</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="rounded-full h-52 w-52 mb-4  hover:scale-150 hover:border-2 border-white"
            src="/img/collage_12.jpg"
            alt=""
          />
          <span className="text-6xl mb-4">{t('the_girls.third.name')}</span>
          <span className='text-2xl'>{t('the_girls.third.text1')}</span>
          <span className='text-2xl'>{t('the_girls.third.text2')}</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="rounded-full h-52 w-52 mb-4  hover:scale-150 hover:border-2 border-white"
            src="/img/collage_12.jpg"
            alt=""
          />
          <span className="text-6xl mb-4">{t('the_girls.quarter.name')}</span>
          <span className='text-2xl'>{t('the_girls.quarter.text1')}</span>
          <span className='text-2xl'>{t('the_girls.quarter.text2')}</span>
        </div>
      </div>
    </>
  )
}
