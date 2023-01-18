const Private = 1;
const FriendsOnly = 2;
const Public = 3;

const getVisibilityStateName = (stateId) => {
  switch (stateId) {
    case Private:
      return 'Private';
    case FriendsOnly:
      return 'FriendsOnly';
    case Public:
      return 'Public';
    default:
      return 'Unknown';
  }
};

const helpers = {
  getVisibilityStateName,
};

export default helpers;
