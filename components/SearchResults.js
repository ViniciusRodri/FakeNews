import PaginationButtons from './PaginationButtons';
import Footer from './Footer';
function SearchResults({ results, isActive }) {
  return (
    <div>
      <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 font-OpenSans">
        <p className="text-[#92989F] text-sm mb-5 mt-3">
          About {results.searchInformation?.formattedTotalResults} results (
          {results.searchInformation?.formattedSearchTime} seconds)
        </p>

        {results.items?.map((result) => (
          <div key={result.link} className="max-w-xl mb-8 font-sans">
            <div className="group">
              <a
                href={result.link}
                className="
               grid gap-2 text-sml font-OpenSans text-[#92989F]"
              >
                {!isActive && (
                  <p className="flex gap-3 bg-red-700 p-2 rounded text-white text-sm">
                    <img src="/atencao.png" width="40px" height="20px" />
                    Atenção!!! Leia com cuidado essa notícia e tenha certeza que
                    é relacionada a sua duvida, se não, pesquise novamente de
                    outra forma!
                  </p>
                )}
                {result.formattedUrl}
              </a>
              <a href={result.link}>
                <h2
                  className="truncate 
           text-xl text-[#8AB4F8] group-hover:underline font-OpenSans"
                >
                  {result.title}
                </h2>
              </a>
            </div>
            <p className="line-clamp-2 text-[#92989F] font-OpenSans">
              {result.snippet}
            </p>
          </div>
        ))}

        <PaginationButtons />
      </div>
    </div>
  );
}
<div>
  <Footer />
</div>;

export default SearchResults;
