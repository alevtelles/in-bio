import Button from "../ui/button";
import TextArea from "../ui/text-area";
import TextInput from "../ui/text-input";

export default function Hero() {
  return (
    <div className="flex border">
      <div className="w-full flex flex-col gap-2 mt-[35vh] ">
        <h1 className="text-5xl font-bold text-white leading-[64px]">
          Seus projetos e redes sociais em um único link
        </h1>
        <h2 className="textxl leading-6">
          Crie sua própria página de projetos e compartilhe com o mundo.
          <br />
          Acompanhe o engajamento com Analitics de cliques
        </h2>

        <div className="flex items-center gap-2 w-full -mt-[10vh]">
          <span className="text-withe text-xl">projectinbio.com/</span>
          <TextInput placeholder="Digite seu link" />
          <Button> Criar agora</Button>
          <TextArea />
        </div>
      </div>
      <div className="w-full flex items-center justify-center bg-[radial-gradient{circle_at_50%_50%,#4b2dBB, transparent_55%}]">
        <div className="relative">
          {/* <UseCard/> */}
          <div className="absolute -bottom-[7%] -right-[45%]">
            {/* <TotalVisits /> */}
          </div>
          <div className="absolute top-[20%] -left-[45%] -z-10">
            {/* <ProjectCard /> */}
          </div>
          <div className="absolute -top-[5%] -left-[55%] -z-10">
            {/* <ProjectCard /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
