
import {useState, useEffect} from 'react'

type fetchObject = {
  data: any,
  loading: boolean,
  error: boolean | null,
}

export const useFetch = ( url: string ) => {

  const [state, setState] = useState<fetchObject>({ data: null, loading: true, error: null });

  useEffect(() => {
    setState({ data:null, loading: true, error: null });
    fetch( url )
      .then( resp => resp.json() )
      .then( data => {
        setState({
          loading: false,
          error: null,
          data
        })
      })
      .catch(err => {
        setState({
          loading: false,
          error: true,
          data: null,
        })
        console.log('Error: ', err)
      })
  }, [url]);

  return state;
}
