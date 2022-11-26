function CardFail() {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 font-OpenSans ">
      <div className="text-white text-md mb-5 mt-3 ">
        <div className="flex gap-8 items-center max-w-5xl mb-8 font-sans bg-red-500 p-5 rounded-md">
          <img src="/cuidado-branco.png" alt="" />
          <h2 className="uppercase bold">
            Cuidado! O que você pesquisou pode ser uma notícia falsa. Tenha
            certeza de onde ouviu ou viu sua dúvida e não propague se não tiver
            certeza da veravidade do assunto. Logo abaixo temos alguns sites
            relacionado com o que você pesquisou!
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CardFail;
