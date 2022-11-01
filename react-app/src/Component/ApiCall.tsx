import { useEffect, useState } from 'react';
import { fakeApi } from '../fake';

export const ApiCall = () => {

  const [fakeData, setFakeData] = useState<string>('');
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = (errorWanted?: boolean) => {
    // Reset my error or loading case
    setError(undefined);
    setIsLoading(true);

    // Make my call and handle my different case
    fakeApi(errorWanted)
      .then((data) => {setFakeData(data)})
      .catch((err) => {setError(err)})
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h3>Api calls</h3>
      <p>My data : {isLoading ? 'Loading ...' : error ?? fakeData }</p>
      <button onClick={() => fetchData()}>Refetch data</button>
      <button onClick={() => fetchData(true)}>Fetch with error</button>
    </div>
  );
}
