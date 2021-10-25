import ListItem from './ListItem';

export default function UsersList({ users, onUserSelect, activeUser }) {
  return (
    <ul className="users__list">
      {users.map((user) => (
        <ListItem user={user} key={user.id} activeUser={activeUser} onUserSelect={onUserSelect} />
      ))}
    </ul>
  );
}
