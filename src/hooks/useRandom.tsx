import { useQuery } from "@tanstack/react-query";

const getCryptoNumber = async():Promise<number> => {
  // throw 'Not implemented';
  const resp = await fetch("https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  ).then((resp) => resp.json())

  return Number(resp);
}

export function useRandom() {

  const randomQuery = useQuery({
    queryKey: ['randomNumber'],
    queryFn: getCryptoNumber,
    // retry: false,
    // refetchOnWindowFocus: false,
  })

  return {
    randomQuery,
  }
}