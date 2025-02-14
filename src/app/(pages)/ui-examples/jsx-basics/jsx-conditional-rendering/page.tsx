export default function JSXConditionalRendering() {
  const number = 10;
  const numberPair = number % 2 === 0;

  function renderPair(number: number) {
    if (number % 2 === 0) {
      return <span className="primary p-2 mx-auto rounded-full">Par</span>;
    } else {
      return <span className="secondary p-2 mx-auto rounded-full">Ímpar</span>;
    }
  }

  return (
    <div className="card">
      <div className="card-case">
        <h1>Entendendo JSX #03</h1>
        <div className="content">
          {numberPair ? (
            <span className="primary p-2 mx-auto rounded-full">Par</span>
          ) : (
            <span className="secondary p-2 mx-auto rounded-full">Ímpar</span>
          )}

          {numberPair && <span>Esse número é par!</span>}

          {renderPair(number)}
        </div>
      </div>
    </div>
  );
}
