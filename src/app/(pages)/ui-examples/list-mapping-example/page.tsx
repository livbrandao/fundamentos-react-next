import List from "@/components/workouts/List";

export default function ListMappingExample() {
  const list = ["Pedro", "João", "Maria", "Ana", "José"];

  return (
    <div className="card">
      <div className="card-case">
        <h1>Componente #01</h1>
        <div className="content">
          <div className="flex flex-col gap-3">
            {list.map((item, index) => {
              return <List key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
