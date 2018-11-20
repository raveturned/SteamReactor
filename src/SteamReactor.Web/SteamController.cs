using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

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
        
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet("users/{id}")]
        public JsonResult Get(int id)
        {
            return Json(new { id });
        }

        [HttpGet("resolve/{vanityurl}")]
        public string Resolve(string vanityurl)
        {
            return _facade.ResolveVanityUrl(vanityurl).Result;
        }

        [HttpGet("friends/{steamid}")]
        public string Friends(long steamid)
        {
            return _facade.GetFriendList(steamid).Result;
        }

        [HttpGet("player/{steamid}")]
        public string Player(long steamid)
        {
            return _facade.GetPlayerSummaries(steamid).Result;
        }

        [HttpGet("games/{steamid}")]
        public string Games(long steamid)
        {
            return _facade.GetOwnedGames(steamid).Result;
        }

        [HttpGet("apps")]
        public string apps()
        {
            return _facade.GetAppList().Result;
        }
    }
}
