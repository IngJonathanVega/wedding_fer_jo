import initTranslations from '@/i18n/i18n'

export const BoysSection = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['home'])
  return (
    <>
      <div className="text-white mt-24 grid md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center">
          <img
            className="rounded-full h-52 w-52 mb-4  hover:scale-150 hover:border-2 border-white"
            src="/img/collage_12.jpg"
            alt=""
          />
          <span className="text-6xl mb-4">{t('the_boys.first.name')}</span>
          <span className="text-2xl">{t('the_boys.first.text1')}</span>
          <span className="text-2xl">{t('the_boys.first.text2')}</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="rounded-full h-52 w-52 mb-4  hover:scale-150 hover:border-2 border-white"
            src="/img/collage_12.jpg"
            alt=""
          />
          <span className="text-6xl mb-4">{t('the_boys.second.name')}</span>
          <span className="text-2xl">{t('the_boys.second.text1')}</span>
          <span className="text-2xl">{t('the_boys.second.text2')}</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="rounded-full h-52 w-52 mb-4  hover:scale-150 hover:border-2 border-white"
            src="/img/collage_12.jpg"
            alt=""
          />
          <span className="text-6xl mb-4">{t('the_boys.third.name')}</span>
          <span className="text-2xl">{t('the_boys.third.text1')}</span>
          <span className="text-2xl">{t('the_boys.third.text2')}</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="rounded-full h-52 w-52 mb-4  hover:scale-150 hover:border-2 border-white"
            src="/img/collage_12.jpg"
            alt=""
          />
          <span className="text-6xl mb-4">{t('the_boys.quarter.name')}</span>
          <span className="text-2xl">{t('the_boys.quarter.text1')}</span>
          <span className="text-2xl">{t('the_boys.quarter.text2')}</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="rounded-full h-52 w-52 mb-4  hover:scale-150 hover:border-2 border-white"
            src="/img/collage_12.jpg"
            alt=""
          />
          <span className="text-6xl mb-4">{t('the_boys.fifth.name')}</span>
          <span className="text-2xl">{t('the_boys.fifth.text1')}</span>
          <span className="text-2xl">{t('the_boys.fifth.text2')}</span>
        </div>
      </div>
    </>
  )
}
