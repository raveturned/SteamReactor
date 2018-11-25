using System.Threading.Tasks;

namespace SteamReactor.Web.Facades
{
    public interface ISteamFacade
    {
        Task<string> ResolveVanityUrl(string vanityurl);
        Task<string> GetFriendList(long steamid);
        Task<string> GetAppList();
        Task<string> GetPlayerSummaries(long steamid);
        Task<string> GetOwnedGames(long steamid);
        Task<string> GetSupportedApisList();
    }
}
