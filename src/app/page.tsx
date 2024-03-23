import Link from 'next/link';
import Logo from '../../public/logo.png';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='flex flex-1 justify-center items-center'>
        <Image src={Logo} alt='logo' />
      </div>
      <div className='flex flex-1 flex-col items-center justify-center'>
        <span className='text-5xl font-bold my-12 mx-0'>
          지금 일어나고 있는 일
        </span>
        <span className='text-3xl font-bold mb-8'>지금 가입하세요.</span>
        <Link
          href='/i/flow/signup'
          className='w-[300px] h-10 rounded-2xl py-0 px-4 text-sm bg-[#1D9BF0] text-white border-none flex items-center justify-center hover:bg-[#1A8CD8]'
        >
          계정 만들기
        </Link>
        <span className='text-base font-bold mb-5 mt-10'>
          이미 가입하셨나요?
        </span>
        <Link
          href='/login'
          className='w-[300px] h-10 rounded-2xl py-0 px-4 text-sm text-[#1D9BF0] border-[#CFD9DE] flex items-center justify-center hover:bg-[rgba(29,155,240,0.1)]'
        >
          로그인
        </Link>
      </div>
    </>
  );
}
