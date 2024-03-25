'use client';

import { redirect, useRouter } from 'next/navigation';

const RedirectLogin = () => {
  const router = useRouter();
  router.push('/i/flow/login');
};

export default RedirectLogin;

// redirect('/i/flow/login'); - 서버에서 redirect
// router - 클라이언트에서 redirect
