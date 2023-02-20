import { Header } from '@components';
import { useGetMoviesQuery } from '@services';

function App (): JSX.Element {
  const { data, } = useGetMoviesQuery();

  console.log({ data, });

  return (
    <div className="app">
      <Header />
    </div>
  );
}

export default App;
