using Microsoft.AspNetCore.Mvc;
using SteamReactor.Web.Facades;
using System.Collections.Generic;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SteamReactor.Web
{
    [Route("api/[controller]")]
    public class SteamController : Controller
    {
        private ISteamFacade _facade;

        public SteamController(ISteamFacade facade) {
            _facade = facade;
        }
        
        [HttpGet("resolve/{vanityurl}")]
        public async Task<string> Resolve(string vanityurl)
        {
            return await _facade.ResolveVanityUrl(vanityurl);
        }

        [HttpGet("friends/{steamid}")]
        public async Task<string> Friends(long steamid)
        {
            return await _facade.GetFriendList(steamid);
        }

        [HttpGet("player/{steamid}")]
        public async Task<string> Player(long steamid)
        {
            return await _facade.GetPlayerSummaries(steamid);
        }

        [HttpGet("games/{steamid}")]
        public async Task<string> Games(long steamid)
        {
            return await _facade.GetOwnedGames(steamid);
        }

        [HttpGet("apps")]
        public async Task<string> Apps()
        {
            return await _facade.GetAppList();
        }

        [HttpGet("api")]
        public async Task<string> Api()
        {
            return await _facade.GetSupportedApisList();
        }
    }
}
