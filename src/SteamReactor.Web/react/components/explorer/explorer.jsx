import React, { useState } from 'react';

import Header from './header';
import Main from './main';
import VanitySelector from './vanitySelector';
import Steam from '../../../api/steam';

const Explorer = () => {
  const [allAppNames, setAllAppNames] = useState([]);
  const [vanity, setVanity] = useState('');
  const [userId, setUserId] = useState('');
  const [userList, setUserList] = useState({
    ids: [],
    byId: {},
  });
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleVanityChange = (event) => {
    setVanity(event.target.value);
  };

  const fetchAppList = async () => {
    const result = await Steam.getAppList();
    const { apps } = result.applist;
    setAllAppNames(apps);
  };

  const fetchPlayer = async (steamId) => {
    const result = await Steam.getPlayer(steamId);
    const { players } = result.response;
    players.forEach((player) => {
      const newPlayer = {
        id: player.steamid,
        hasDetail: true,
        name: player.personaname,
        avatar: player.avatar,
        avatarFull: player.avatarfull,
        avatarMedium: player.avatarmedium,
      };
      setUserList((users) => ({
        ...users,
        byId: {
          ...users.byId,
          [newPlayer.id]: newPlayer,
        },
      }));
    });
  };

  const addNewUser = (id) => {
    setUserList((users) => ({
      ...users,
      byId: {
        ...users.byId,
        [id]: {
          id,
          hasDetail: false,
        },
      },
      ids: [...users.ids, id],
    }));

    // fetch player detail
    fetchPlayer(id);
  };

  const fetchFriends = async (id) => {
    const result = await Steam.getFriends(id);
    const { friends } = result.friendslist;

    friends.forEach((friend) => {
      const steamId = friend.steamid;
      addNewUser(steamId);
    });
  };

  const resolveVanity = async (name) => {
    const result = await Steam.resolveVanityURL(name);
    const steamId = result.response.steamid;

    // add user id, and fetch detail
    addNewUser(steamId);
    // fetch friend list
    fetchFriends(steamId);
    // set userId
    setUserId(steamId);
  };

  const submitVanity = () => {
    resolveVanity(vanity);
    fetchAppList();
  };

  const toggleFriendSelect = (id) => {
    setSelectedUsers((list) => {
      const index = list.indexOf(id);
      return (index < 0)
        ? [...list, id]
        : list.filter((u) => u !== id);
    });
  };

  const appList = allAppNames.slice(0, 10) ?? [];

  return (
    (!userId || userId < 0)
      ? (
        <VanitySelector
          handleVanityChange={handleVanityChange}
          submitVanity={submitVanity}
          vanity={vanity}
        />
      )
      : (
        <>
          <Header
            currentUserId={userId}
            byId={userList.byId}
          />
          <Main
            apps={appList}
            byId={userList.byId}
            friendIds={userList.ids.filter((id) => (id !== userId))}
            selectedUsers={selectedUsers}
            toggleFriendSelect={toggleFriendSelect}
          />
        </>
      )
  );
};

Explorer.propTypes = {
};

export default Explorer;
