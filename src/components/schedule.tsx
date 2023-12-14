import initTranslations from '@/i18n/i18n'

const Section = ({
  title,
  day,
  subtitle,
  description,
}: {
  title: string
  day: string
  subtitle: string
  description: string
}) => (
  <div className="flex text-2xl mt-6 justify-center items-center text-black hover:scale-105 ">
    <div className="pt-32 pb-32 w-[400px]">
      <p className="text-4xl">{title}</p>
      <p className="text-lg font-mono mt-4">{day}</p>
    </div>
    <div className="pt-32 pb-32 pl-20 border-l-2 border-blue w-[400px]">
      <p className="text-4xl">{subtitle}</p>
      <p className="text-lg mt-4 font-mono">{description}</p>
    </div>
  </div>
)

export const ScheduleDay = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['home'])
  return (
    <div className="text-center">
      <h1 className="text-5xl text-black">{t('the_day.sub_title')}</h1>
      <p className="text-xl mt-2 text-black">{t('the_day.location')}</p>
      <div className="">
        <Section
          title={t('the_day.ceremony.title')}
          day={t('the_day.ceremony.date')}
          subtitle={t('the_day.ceremony.text')}
          description={t('the_day.ceremony.description')}
        />
        <Section
          title={t('the_day.reception.title')}
          day={t('the_day.reception.date')}
          subtitle={t('the_day.reception.text')}
          description={t('the_day.reception.description')}
        />

        <Section
          title={t('the_day.dinner.title')}
          day={t('the_day.dinner.date')}
          subtitle={t('the_day.dinner.text')}
          description={t('the_day.dinner.description')}
        />
      </div>
    </div>
  )
}
