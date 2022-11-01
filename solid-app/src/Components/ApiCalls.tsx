import { createSignal, createResource } from "solid-js";
import { sharedState } from "../App";
import { fakeApi } from "../fake";

const [errorWanted, setErrorWanted] = createSignal(false);

export const ApiCalls = () => {

  const [data, { refetch }] = createResource(() => fakeApi(errorWanted()));

  return (
    <div>
      <h3>Api calls</h3>
      {sharedState()}
      <p>My data : {data.loading ? 'Loading ...' : data.error ?? data() }</p>
      <button onClick={() => {setErrorWanted(false); refetch()}}>Refetch data</button>
      <button onClick={() => {setErrorWanted(true); refetch()}}>Fetch with error</button>
    </div>
  )
}