export default function UserDetails({ user }) {
  const { name, avatar, details } = user;
  const { city, company, position } = details;

  return (
    <div className="users__details">
      <img className="user-avatar" src={avatar} alt={name} />
      <div className="user-name">{name}</div>
      <div className="user-city">{city}</div>
      <div className="user-company">{company}</div>
      <div className="user-position">{position}</div>
    </div>
  );
}
