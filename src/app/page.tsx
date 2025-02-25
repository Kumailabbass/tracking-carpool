'use client';
import Link from 'next/link';
import data from '@/app/list/page';

export default function Home() {
  return (
    <div>
      <h1>Hi, Hello</h1>

      {Array.isArray(data) ? (
        data.map((item, index) => (
          <div key={index}>
            <h2>{item.name}</h2> 
            <p>{item.description}</p>
          </div>
        ))
      ) : (
        <p></p>
      )}

      <Link className="bg-gray-500 text-white" href={'/list'}>
        Check List of Routes
      </Link>
    </div>
  );
}
