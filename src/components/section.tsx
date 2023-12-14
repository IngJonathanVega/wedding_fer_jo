import Link from 'next/link';
export const SectionCard = ({ text, img, url }: { text: string; img: string; url: string }) => {
  return (
    <div className="h-[320px] mt-10 flex flex-row items-center shadow border-black border-solid border-4 hover:scale-110">
      <div className={`w-96 bg-[url("/img/photo_4.jpg")] bg-center h-full bg-cover opacity-80 `}></div>
      <div className="flex flex-col justify-center w-full h-full text-center p-4 leading-normal bg-white bg-opacity-50 items-center">
        <h5 className="mb-2 text-6xl font-bold text-blue">{text}</h5>
        <Link href={url} className="bg-blue text-white border border-black py-2 px-4 rounded-md w-40">
          Details
        </Link>
      </div>
    </div>
  )
}
