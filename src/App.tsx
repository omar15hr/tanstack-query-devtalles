import { useQuery } from "@tanstack/react-query";
import "./App.css";

const getCryptoNumber = async():Promise<number> => {
  const resp = await fetch("https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  ).then((resp) => resp.json())

  return Number(resp);
}

function App() {
 
  const { isLoading, data: number, error, refetch, isFetching } = useQuery({
    queryKey: ['randomNumber'],
    queryFn: getCryptoNumber,
  })

  return (
    <>
      {isFetching ? <h1>Loading...</h1> : <h1>Number: {number}</h1>}

      <div>{JSON.stringify(error)}</div>

      <button disabled={isFetching} onClick={() => refetch()}>New Number</button>
    </>
  );
}

export default App;
