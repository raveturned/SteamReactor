import React, { useState } from 'react';

import { Container } from '@mui/material';
import Header from './header';
import PartySelector from './partySelector';
import VanitySelector from './vanitySelector';
import Steam from '../../../api/steam';
import helpers from '../../../api/helpers';

const Explorer = () => {
  const [currentUserId, setCurrentUserId] = useState('');
  const [friendIds, setFriendIds] = useState([]);
  const [playerSummaries, setPlayerSummaries] = useState({});
  const [partyMemberIds, setPartyMemberIds] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  // const [allAppNames, setAllAppNames] = useState([]);

  const fetchAppList = async () => {
    /*
    const result = await Steam.getAppList();
    const { apps } = result.applist;
    setAllAppNames(apps);
    */
  };

  const fetchPlayerSummary = async (steamId) => {
    const result = await Steam.getPlayerSummary(steamId);
    const { players } = result.response;
    players.forEach((player) => {
      const newPlayer = {
        id: player.steamid,
        name: player.personaname,
        avatar: player.avatar,
        avatarFull: player.avatarfull,
        avatarMedium: player.avatarmedium,
        visibilityState: {
          id: player.communityvisibilitystate,
          name: helpers.getVisibilityStateName(player.communityvisibilitystate),
        },
        ...player, // todo: remove when we have all we need
      };
      setPlayerSummaries((prevState) => ({
        ...prevState,
        [newPlayer.id]: newPlayer,
      }));
    });
  };

  const fetchFriends = async (id) => {
    const result = await Steam.getFriends(id);
    const { friends } = result.friendslist;

    const mapSteamId = (friend) => friend.steamid;

    setFriendIds(friends.map(mapSteamId));

    friends.forEach((friend) => {
      fetchPlayerSummary(mapSteamId(friend));
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

    fetchPlayerSummary(steamId);
    fetchFriends(steamId);
    setCurrentUserId(steamId);
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

  // const appList = allAppNames.slice(0, 10) ?? [];

  return (
    <Container>
      {(!currentUserId)
        ? (
          <VanitySelector
            submitVanity={submitVanity}
          />
        )
        : (
          <Header
            currentUser={playerSummaries[currentUserId] || {}}
            partyMembers={selectedUsers.map((userId) => playerSummaries[userId])}
          >
            {(partyMemberIds.length < 1) ? (
              <PartySelector
                friendIds={friendIds}
                selectedUsers={selectedUsers}
                playerSummaries={playerSummaries}
                toggleSelect={toggleFriendSelect}
                submitPartyMemberIds={(ids) => setPartyMemberIds(ids)}
              />
            ) : (
              <div>Something</div>
            )}
          </Header>
        )}
    </Container>
  );
};

Explorer.propTypes = {
};

export default Explorer;
