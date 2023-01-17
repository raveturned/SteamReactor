import React, { useState } from 'react';

import Header from './header';
import Main from './main';
import VanitySelector from './vanitySelector';
import Steam from '../../../api/steam';

const Explorer = () => {
  const [allAppNames, setAllAppNames] = useState([]);
  const [vanity, setVanity] = useState('');
  const [userId, setUserId] = useState('');
  const [friendIds, setFriendIds] = useState([]);
  const [playerSummaries, setPlayerSummaries] = useState({});
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
    const result = await Steam.getPlayerSummary(steamId);
    const { players } = result.response;
    players.forEach((player) => {
      const newPlayer = {
        id: player.steamid,
        name: player.personaname,
        avatar: player.avatar,
        avatarFull: player.avatarfull,
        avatarMedium: player.avatarmedium,
      };
      setPlayerSummaries((prevState) => ({
        ...prevState,
        [newPlayer.id]: newPlayer,
      }));
    });
  };

  const addNewUser = (id) => {
    // fetch player detail
    fetchPlayer(id);
  };

  const fetchFriends = async (id) => {
    const result = await Steam.getFriends(id);
    const { friends } = result.friendslist;

    const mapSteamId = (friend) => friend.steamid;

    setFriendIds(friends.map(mapSteamId));

    friends.forEach((friend) => {
      addNewUser(mapSteamId(friend));
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
    (!userId)
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
            playerSummaries={playerSummaries}
          />
          <Main
            apps={appList}
            friendIds={friendIds}
            playerSummaries={playerSummaries}
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
