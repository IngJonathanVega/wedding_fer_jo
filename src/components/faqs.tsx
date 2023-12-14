import initTranslations from '@/i18n/i18n';

const SectionFaqs = ({ question, answer }: { question: string; answer: string }) => (
  <div className="mb-10 opacity-50 hover:opacity-100">
    <h3 className="flex items-center mb-4 text-3xl">
      <svg
        className="flex-shrink-0 mr-2 w-5 h-5  "
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
          clip-rule="evenodd"
        ></path>
      </svg>
      {question}
    </h3>
    <p className="font-mono text-xl">{answer}</p>
  </div>
)

export const FAQS = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['home'])

  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <h2 className="text-center mb-8 text-6xl tracking-tight font-extrabold ">{t('faqs.title')}</h2>
      <div className="grid pt-8 text-left border-t  md:gap-16  md:grid-cols-2">
        <SectionFaqs question={t('faqs.1.question')} answer={t('faqs.1.answer')} />
        <SectionFaqs question={t('faqs.2.question')} answer={t('faqs.2.answer')} />
        <SectionFaqs question={t('faqs.3.question')} answer={t('faqs.3.answer')} />
        <SectionFaqs question={t('faqs.4.question')} answer={t('faqs.4.answer')} />
        <SectionFaqs question={t('faqs.5.question')} answer={t('faqs.5.answer')} />
        <SectionFaqs question={t('faqs.6.question')} answer={t('faqs.6.answer')} />
        <SectionFaqs question={t('faqs.7.question')} answer={t('faqs.7.answer')} />
      </div>
    </div>
  )
}
