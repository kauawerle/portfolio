import GridComponents from "../GridComponents";

export default function ProjectsComponents() {
  return (
    <section className="h-[130vh] bg-background">
      <div className="flex justify-center flex-col items-center w-full">
        <h3 className="mt-[5rem] text-text text-5xl">Projetos Realizados</h3>
        <strong className="mt-3 w-[20%] text-center text-text text-2xl">
          Alguns projetos realizados e expêriencias que adquiri
        </strong>
        <GridComponents />
      </div>
    </section>
  );
}
