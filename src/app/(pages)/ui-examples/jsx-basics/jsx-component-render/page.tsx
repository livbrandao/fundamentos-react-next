export default function JSXComponentRender() {
  function renderCircle(text: string) {
    return (
      <div className="flex justify-center items-center h-12 w-12 rounded-full primary text-white text-sm">
        {text}
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-case">
        <h1>Entendendo JSX #02</h1>
        <div className="content">
          <div className="grid grid-cols-3 gap-4">
            {renderCircle("#01")}
            {renderCircle("#02")}
            {renderCircle("#03")}
            {renderCircle("#04")}
            {renderCircle("#05")}
            {renderCircle("#06")}
          </div>
        </div>
      </div>
    </div>
  );
}
