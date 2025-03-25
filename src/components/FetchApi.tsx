import { useEffect, useState } from "react";
import "./App.css";

function FetchApi() {
  const [number, setNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const [refreshToken, setRefreshToken] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
    )
      .then((resp) => resp.json())
      .then((data) => {
        setNumber(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [refreshToken]);

  return (
    <>
      {loading ? <h1>Loading...</h1> : <h1>Number: {number}</h1>}

      <div>{error}</div>

      <button disabled={loading} onClick={() => setRefreshToken(refreshToken+1)}>New Number</button>
    </>
  );
}

export default FetchApi;
