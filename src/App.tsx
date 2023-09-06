import { QueryClient, QueryClientProvider } from 'react-query';
import User from './components/User';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ margin: '2em' }}>
        <h1>ユーザ情報</h1>
        <User />
      </div>
    </QueryClientProvider>
  );
}

export default App;