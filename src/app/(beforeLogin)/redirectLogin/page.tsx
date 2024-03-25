'use client';

import { redirect, useRouter } from 'next/navigation';
import Main from '../_component/Main';

const RedirectLogin = () => {
  const router = useRouter();
  router.push('/i/flow/login');

  return <Main />;
};

export default RedirectLogin;

// redirect('/i/flow/login'); - 서버에서 redirect
// router - 클라이언트에서 redirect
