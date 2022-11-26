import Head from 'next/head';
import Avatar from '../components/Avatar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ViewGridIcon } from '@heroicons/react/solid';
import { SearchIcon, MicrophoneIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <div className=" bg-[url('/bg.gif')] bg-cover bg-no-repeat bg-center ">
      <div className="flex flex-col items-center h-screen ">
        <Head>
          <title>Fake News</title>
          <meta
            name="FakeNewsSearch"
            content="Um site funcional para confiar notícias e duvidas."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <form className="flex flex-col items-center justify-center flex-grow w-4/5">
          <Image src="/fake.png" alt="logo" height={97} width={397} priority />

          <div
            className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full
      border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl"
          >
            <SearchIcon className="h-5 mr-3 text-white " />
            <input
              ref={searchInputRef}
              type="text"
              className="flex-grow focus:outline-none bg-transparent text-white"
            />
          </div>
          <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 font-Ubuntu">
            <button onClick={search} className="btn">
              Pesquise aqui!
            </button>
          </div>

          <div className="flex link justify-center text-sm mt-7 pr-1 text-blue-700 items-center md:col-span-2 lg:col-span-1 lg:col-start-2 font-Ubuntu">
            <img src="google-account-security.png" className="h-5 px-1 "></img>{' '}
            <a
              className="text-white"
              href="https://www.tjpr.jus.br/noticias-2-vice/-/asset_publisher/sTrhoYRKnlQe/content/o-perigo-das-fake-news/14797?inheritRedirect=false"
            >
              {' '}
              Tire 2 minutos para saber mais o que são as Fake News e porque
              temos que tomar cuidado.{' '}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
