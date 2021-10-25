export default function ListItem({ user, onUserSelect, activeUser }) {
  return (
    <li className={activeUser === user.id ? 'list-item active' : 'list-item'} onClick={() => onUserSelect(user.id)}>
      {user.name}
    </li>
  );
}
