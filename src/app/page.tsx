'use client'
import Image from "next/image";
import Link from "next/link";
import { QueryClientProvider , QueryClient} from "react-query";
import { useSession,signIn } from "next-auth/react";
import Button from "./components/shared/Button";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const queryClient = new QueryClient();
  const router = useRouter();


  const session = useSession()
  // if(session.data === null){
  //   return <Button variant={"primary"} onClick={signIn} label="LOGIN" />
  // }
  useEffect( () =>{
        
    const setUp = async () => {    
    if (session) {
      router.push('/login')
    }   
    }
   setUp();
}, [])
    
  if(Boolean(session)){
    return <>Loading ...</>
  }
  return (
   <div>
    {/* <Button variant="secondary" label="Fortnite" onClick={()=>console.log("POP START")} /> */}
    <h1 className="my-10 bg-green-100">
      NEXT JS BOILER PLATE
    </h1>
    <Link className="bg-blue-100" href={'/products'}
    
    >
      Go OT pRODUCT PAGE
    </Link>
      {/* <Input /> */}
   </div>
  );
}
