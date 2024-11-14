'use client';
import Link from 'next/link';
import { QueryClientProvider, QueryClient } from 'react-query';
import { useSession, signIn } from 'next-auth/react';
import Button from './components/shared/Button';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const queryClient = new QueryClient();
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log("___________STATUS",status)
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login'); // Redirect to login if not authenticated
    }
  }, [status, router]);

  if (status === 'loading') {
    return <>Loading...</>;
  }

  return (
    <div>
      {/* {!session ? (
        <Button variant="primary" onClick={() => signIn()} label="LOGIN" />
      ) : ( */}
        <>
          <h1 className="my-10 bg-green-100">NEXT JS BOILER PLATE</h1>
          <Link className="bg-blue-100" href={'/products'}>
            Go to PRODUCT PAGE
          </Link>
        </>
      {/* )} */}
    </div>
  );
}
