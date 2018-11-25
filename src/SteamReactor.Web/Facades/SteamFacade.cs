using Microsoft.Extensions.Configuration;
using System.Net.Http;
using System.Threading.Tasks;

namespace SteamReactor.Web.Facades
{
    public class SteamFacade : ISteamFacade
    {
        HttpClient _client = new HttpClient();
        private string _key;

        public SteamFacade(IConfiguration config)
        {
            _key = config.GetValue<string>("SteamKey", string.Empty);
        }

        private async Task<string> GetUrl(string uri)
        {
            var response = await _client.GetAsync(uri);
            response.EnsureSuccessStatusCode();
            return await response.Content.ReadAsStringAsync();
        }

        public async Task<string> ResolveVanityUrl(string vanityurl)
        {
            var uri = $"https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key={_key}&vanityurl={vanityurl}";
            return await GetUrl(uri);
        }

        public async Task<string> GetFriendList(long steamid)
        {
            var uri = $"https://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key={_key}&steamid={steamid}";
            return await GetUrl(uri);
        }

        public async Task<string> GetAppList()
        {
            var uri = "https://api.steampowered.com/ISteamApps/GetAppList/v0002/";
            return await GetUrl(uri);
        }

        public async Task<string> GetPlayerSummaries(long steamid)
        {
            var uri = $"https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key={_key}&steamids={steamid}";
            return await GetUrl(uri);
        }

        public async Task<string> GetOwnedGames(long steamid)
        {
            var uri = $"https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key={_key}&steamid={steamid}&format=json";
            return await GetUrl(uri);
        }

        public async Task<string> GetSupportedApisList()
        {
            var uri = $"https://api.steampowered.com/ISteamWebAPIUtil/GetSupportedAPIList/v0001/";
            return await GetUrl(uri);
        }
    }
}
