const LoginModal = () => {
  return (
    <div className='w-screen h-full flex justify-center absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.4)]'>
      <div className='bg-white relative top-[5%] max-w-[80vw] min-w-[600px] rounded-2xl flex flex-col h-[450px]'>
        <div className='pt-9 px-20 pb-5 text-3xl font-bold'>
          <button className='w-[34px] h-[34px] rounded-2xl border-none cursor-pointer bg-white absolute left-4 top-4 flex items-center justify-center hover:bg-[rgba(15,20,25,0.1)]'>
            <svg
              width={24}
              viewBox='0 0 24 24'
              aria-hidden='true'
              className='r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03'
            >
              <g>
                <path d='M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z'></path>
              </g>
            </svg>
          </button>
          <div>로그인</div>
        </div>
        <form className='flex flex-col flex-1'>
          <div className='flex-1 py-0 px-20'>
            <div className='flex flex-col h-14 relative my-3 mx-0'>
              <label
                className='w-full inline-block absolute top-0 border border-[#CFD9DE] rounded text-sm h-14 pt-2 px-2 pb-0 text-[rgb(83,100,113)] focus-within:text-red'
                htmlFor='id'
              >
                아이디
              </label>
              <input
                id='id'
                className='w-full border-none text-base mt-4 pt-3 px-2 pb-2 outline-none'
                type='text'
                placeholder=''
              />
            </div>
            <div className='flex flex-col h-14 relative my-3 mx-0'>
              <label
                className='w-full inline-block absolute top-0 border border-[#CFD9DE] rounded text-sm h-14 pt-2 px-2 pb-0 text-[rgb(83,100,113)] focus-within:text-red'
                htmlFor='password'
              >
                비밀번호
              </label>
              <input
                id='password'
                className='w-full border-none text-base mt-4 pt-3 px-2 pb-2 outline-none'
                type='password'
                placeholder=''
              />
            </div>
          </div>
          <div className='py-6 px-20'>
            <button className='w-full h-[50px] rounded-3xl bg-[rgb(15,20,25)] text-white text-base disabled:opacity-50 hover:bg-[rgb(39,44,48)]'>
              로그인하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
