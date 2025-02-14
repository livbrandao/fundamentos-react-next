export default function TailwindExample() {
  return (
    <div className="container mx-auto p-7 flex flex-col  gap-3">
      <div>
        <h1 className="text-3xl font-black">Primeiro Componente</h1>
        <p className="text-sm text-zinc-400">Subtitulo</p>
      </div>

      <div className="flex flex-col mt-5">
        <span>Conteúdo</span>
        <button className="button tertiary">Salvar</button>
      </div>
    </div>
  );
}
