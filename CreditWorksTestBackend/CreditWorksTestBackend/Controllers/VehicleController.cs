using System.Web.Http;

namespace CreditWorksTestBackend.Controllers
{
    public class VehicleController : ApiController
    {
        // Get Vehicle List
        public IEnumerable<string> Get()
        {
            return new string[] { "vehicle1", "vehicle2" };
        }
    }
}
