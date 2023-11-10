import cover from '@/images/cover.png';
import Image from "next/image";

export function AboutComponent() {
  return (
    <section
      className="py-24 sm:py-32 drop-shadow-md bg-[url('images/background_about.svg')]  
        bg-no-repeat bg-background bg-right-bottom "
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="mr-7">
            <Image
              height={556}
              width={512}
              alt=""
              src={cover}
              className="h-full rounded-lg w-full object-cover"
            />
          </div>
          <div className="ml-10">
            <div className="text-base font-sofia leading-7 text-text lg:max-w-lg">
              <p className="text-primary text-xl font-semibold leading-7">
                Quem é
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-text sm:text-4xl">
                Kauã Werle
              </h1>
              <div className="max-w-3xl text-white text-lg font-semibold">
                <p className="mt-6">
                  Comecei a estudar programação e trabalhar aos 15 anos de
                  idade, cursei técnico em informática do Mondrone em 2019, meu
                  primeiro emprego foi logo depois Na Trend Mobile onde eu tive
                  meu primeiro conhecimento sobre a área.
                </p>
                <p className="mt-8">
                  Na Trend Mobile trabalhei com as tecnologias Ionic, Angular e
                  Bootstrap. Trabalhei na Trend Mobile até 2021, logo depois
                  Comecei a trabalhar na Cemapa Informática utilizando Delphi.
                </p>
                <p className="mt-8">
                  Em novembro de 2021 eu entrei na Digitaldoc, trabalhando com
                  Angular, VueJs, Node e C#. Trabalhei até novembro de 2022 e
                  finalizei meu curso técnico em informática apresentando meu
                  TCC, usando tecnologias novas (React, React Native, NodeJs,
                  Typescript, Postgres e Sequelize).
                </p>
                <p className="mt-8">
                  Em março de 2023 comecei a faculdade Bacharelado em Engenharia
                  de software e trabalhei fazendo Free Lancer para
                  OptimizeDeals, utilizando React, Node, Typescript e tailwind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
