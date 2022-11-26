import Head from 'next/head';
import Header from '../components/Header';
import { API_KEY, CONTEXT_KEY } from '../hooks/index';

import Response from '../Response';
import { useRouter } from 'next/router';
import SearchResults from '../components/SearchResults';
import PaginationButtons from '../components/PaginationButtons';
import CardFail from '../components/CardFail';

function Fail({ results }) {
  const router = useRouter();

  return (
    <div className="bg-[#1F2123]">
      <Head>
        <title>{router.query.term} - Fake News Search </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <CardFail />
      <SearchResults results={results} />
    </div>
  );
}

export default Fail;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || '0';

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`,
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
