import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/outline';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-[#1F2123]">
      <div className="flex w-full p-6 items-center">
        <Image
          src="/fake.png"
          alt="banner
          "
          height={40}
          width={120}
          onClick={() => router.push('/')}
          className="coursor-pointer "
        />

        <form className="flex flex-grow px-5 py-3 ml-10 mr-5 border boder-gray-200 rounded-full shadow-lg max-w-3xl items-center text-white">
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none bg-transparent text-white"
            type="text"
          />
          <XIcon
            className="h-7 sm:mr-3 text-white cursor-pointer tarnsition duration-100 transform hover:scale-125 "
            onClick={() => [(searchInputRef.current.value = '')]}
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-white border-l-2 pl-4 border-gray-300" />

          <button type="submit" onClick={search}>
            <SearchIcon className=" mb-1 h-5 hidden sm:inline-flex text-white tarnsition duration-100 transform hover:scale-125 " />
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
