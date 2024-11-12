'use client'
import Image from "next/image";
import Link from "next/link";
import { QueryClientProvider , QueryClient} from "react-query";

export default function Home() {
  const queryClient = new QueryClient();
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
