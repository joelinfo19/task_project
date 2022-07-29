
import {useState, useEffect} from 'react'
import {ForumsResponse} from '../types/ForumResponse';

type fetchObject = {
  data?: ForumsResponse,
  loading: boolean,
  error: boolean | null,
}

export const useFetch = ( url: string ) => {

  const [state, setState] = useState<fetchObject>({loading: true, error: null });

  useEffect(() => {
    setState({ loading: true, error: null });
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
        })
        console.log('Error: ', err)
      })
  }, [url]);

  return state;
}
