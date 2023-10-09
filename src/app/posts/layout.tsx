import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';

type LayoutProps = {
  children: React.ReactNode;
}

export default function Layout({children}: LayoutProps) {
  return (
    <>
      <div className="prose prose-img:w-4/12 prose-img:mx-auto prose-h1:text-blue-500 prose-h1:text-center prose-headings:text-gray-800 prose-p:text-gray-600">
        {children}
      </div>
      <Link
        href="/"
        className="flex items-center text-blue-500 w-min my-4"
      >
        <BsArrowLeft className="mr-1"/> Voltar
      </Link>
    </>
  )
}