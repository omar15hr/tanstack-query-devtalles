import { useRandom } from "../hooks/useRandom";
import "./App.css";

function App() {
  const { randomQuery } = useRandom();

  return (
    <>
      {randomQuery.isFetching ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Number: {randomQuery.data}</h1>
      )}

      <div>{JSON.stringify(randomQuery.error)}</div>

      <button
        disabled={randomQuery.isFetching}
        onClick={() => randomQuery.refetch()}
      >
        New Number
      </button>
    </>
  );
}

export default App;
