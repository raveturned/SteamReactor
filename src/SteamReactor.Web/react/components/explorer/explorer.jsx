import React, { useState } from 'react';

import Header from './header';
import Main from './main';
import VanitySelector from './vanitySelector';
import Steam from '../../../api/steam';

const Explorer = () => {
  const [allAppNames, setAllAppNames] = useState([]);
  const [userId, setUserId] = useState('');
  const [friendIds, setFriendIds] = useState([]);
  const [playerSummaries, setPlayerSummaries] = useState({});
  const [selectedUsers, setSelectedUsers] = useState([]);

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
    const {
      steamid: steamId,
      message,
    } = result.response;

    if (!steamId) {
      console.warn(`No user found with name ${name}.${message ? ` Message was: '${message}'` : ''}`);
      return;
    }

    // add user id, and fetch detail
    addNewUser(steamId);
    // fetch friend list
    fetchFriends(steamId);
    // set userId
    setUserId(steamId);
  };

  const submitVanity = (vanity) => {
    resolveVanity(vanity);
    fetchAppList();
  };

  const toggleFriendSelect = (id) => {
    setSelectedUsers((prevState) => {
      const index = prevState.indexOf(id);
      return (index < 0)
        ? [...prevState, id]
        : prevState.filter((u) => u !== id);
    });
  };

  const appList = allAppNames.slice(0, 10) ?? [];

  return (
    (!userId)
      ? (
        <VanitySelector
          submitVanity={submitVanity}
        />
      )
      : (
        <Header
          currentUser={playerSummaries[userId] || {}}
        >
          <Main
            apps={appList}
            friendIds={friendIds}
            playerSummaries={playerSummaries}
            selectedUsers={selectedUsers}
            toggleFriendSelect={toggleFriendSelect}
          />
        </Header>
      )
  );
};

Explorer.propTypes = {
};

export default Explorer;
