import { error } from 'console';
import { useQuery } from 'react-query';

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.co');
  return res.json();
};

function User() {
    const {data,isLoading,isError,error} = useQuery('users', fetchUsers);

    if(isLoading) {
        return <span>Loading...</span>;
    }

    if(isError && error instanceof Error){
        return <span>Error: {error.message}</span>
    }

    return (
    <div>
        <h2>ユーザ一覧</h2>
        <div>
        {data.map((user:{id: number,name: string}) => (
            <div key={user.id}>{user.name}</div>
        ))}
        </div>
    </div>
    );
}

export default User;