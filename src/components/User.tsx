import { useQuery } from 'react-query';

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

function User() {
    const {data} = useQuery('users', fetchUsers);

    return (
    <div>
        <h2>ユーザ一覧</h2>
        <div>
        {data?.map((user:{id: number,name: string}) => (
            <div key={user.id}>{user.name}</div>
        ))}
        </div>
    </div>
    );
}

export default User;