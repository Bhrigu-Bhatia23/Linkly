"use client"; 
 
import Link from "next/link"; 
import { useState, useEffect } from "react"; 
 
export default function ExplorePage() { 
  const [creators, setcreators] = useState([]); 
 
  useEffect(() => { 
    async function getUsers() { 
      const response = await fetch("/api/profile/creators"); 
      const data = await response.json(); 
 
      if (!response.ok) { 
        return; 
      } 
 
      setcreators(data.users); 
    } 
 
    getUsers(); 
  }, []); 
 
  return ( 
    <main className="min-h-screen bg-[#f7f3ee] text-[#171717]"> 
      {/* Background */} 
      <div className="pointer-events-none fixed left-[-120px] top-40 h-80 w-80 rounded-full bg-[#ffb4a8]/30 blur-3xl" /> 
 
      <div className="pointer-events-none fixed bottom-[-100px] right-[-80px] h-80 w-80 rounded-full bg-[#ffd6cf]/40 blur-3xl" /> 
 
      {/* Hero */} 
      <section className="px-6 pb-16 pt-32 text-center"> 
        <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold shadow-sm"> 
          Discover Linkly 
        </span> 
 
        <h1 className="mx-auto mt-7 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl"> 
          See how people 
          <span className="block text-[#ff5c5c]"> 
            use Linkly. 
          </span> 
        </h1> 
 
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600"> 
          Get inspired by simple pages built for creators, developers, 
          designers and everyone in between. 
        </p> 
      </section> 
 
      {/* Creator cards */} 
      <section className="mx-auto max-w-6xl px-6 pb-24"> 
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"> 
          {creators.map((creator) => ( 
            <div 
              key={creator.username} 
              className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl" 
            > 
              {/* Profile */} 
              <div className="text-center"> 
                <div className="mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-[#ff5c5c] text-2xl font-black text-white"> 
                  {creator.image ? ( 
                    <img 
                      src={creator.image} 
                      alt={creator.name || "Profile"} 
                      className="h-full w-full object-cover" 
                    /> 
                  ) : ( 
                    <span> 
                      {creator.name?.charAt(0).toUpperCase() || "L"} 
                    </span> 
                  )} 
                </div> 
 
                <h2 className="mt-4 text-xl font-bold"> 
                  {creator.name} 
                </h2> 
 
                <p className="mt-1 text-sm text-gray-500"> 
                  {creator.bio} 
                </p> 
 
                <p className="mt-2 text-xs font-medium text-gray-400"> 
                  linkly.to/{creator.username} 
                </p> 
              </div> 
 
              {/* Links */} 
              <div className="mt-6 space-y-3"> 
                {creator.links.map((link) => ( 
                  <div 
                    key={link._id} 
                    className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-center text-sm font-semibold transition hover:bg-gray-100" 
                  > 
                    {link.title} 
                  </div> 
                ))} 
              </div> 
 
              {/* View page */} 
              <Link 
                href={`/${creator.username}`} 
                className="mt-5 block w-full rounded-xl bg-[#171717] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#ff5c5c]" 
              > 
                View page ↗ 
              </Link> 
            </div> 
          ))} 
        </div> 
      </section> 
 
      {/* CTA */} 
      <section className="px-6 pb-24"> 
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-[#ff5c5c] px-8 py-14 text-center text-white sm:px-12"> 
          <h2 className="text-3xl font-black sm:text-4xl"> 
            Ready to make yours? 
          </h2> 
 
          <p className="mx-auto mt-4 max-w-xl text-white/80"> 
            Create one simple page for everything you want to share. 
          </p> 
 
          <Link 
            href="/signup" 
            className="mt-8 inline-flex rounded-full bg-[#171717] px-7 py-3.5 text-sm font-bold text-white transition hover:scale-105" 
          > 
            Create your Linkly → 
          </Link> 
        </div> 
      </section> 
    </main> 
  ); 
} 
 
