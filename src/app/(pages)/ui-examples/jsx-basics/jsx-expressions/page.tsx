export default function JSXExpressions() {
  const title = <h1>Entendendo JSX #01</h1>;
  const mult = "{7 * 7}";

  return (
    <div className="card">
      <div className="card-case">
        {title}
        <div className="content">
          <pre>
            code: {mult} | println: {7 * 7}
          </pre>
          <pre>code: Math.random() * 5 | println: {Math.random() * 1000}</pre>
        </div>
      </div>
    </div>
  );
}
