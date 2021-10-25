import { useEffect, useState } from 'react';
import UserDetails from './UserDetails';
import UsersList from './UsersList';

export default function Users() {
  const [usersList, setUsersList] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(process.env.REACT_APP_USERS_JSON)
      .then((response) => response.json())
      .then((result) => {
        setUsersList(result);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (currentUserId === 0) {
      return;
    }
    setLoading(true);
    fetch(`${process.env.REACT_APP_CURRENT_USER}${currentUserId}.json`)
      .then((response) => response.json())
      .then((result) => {
        setCurrentUser(result);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [currentUserId]);

  const onUserSelect = (id) => {
    if (id === currentUserId) {
      return;
    }
    setCurrentUserId(id);
  };

  return (
    <>
      {isLoading && <p className="loading">Loading...</p>}
      <div className="users">
        <UsersList users={usersList} activeUser={currentUserId} onUserSelect={onUserSelect} />
        {currentUser ? <UserDetails user={currentUser} /> : null}
      </div>
    </>
  );
}
