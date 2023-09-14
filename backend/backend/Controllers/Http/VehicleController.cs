using backend.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Net;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend.Controllers.Http
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class VehicleController : ControllerBase
    {
        // GET: api/<VehicleController>
        [HttpGet]
        public IEnumerable<Vehicle> Get()
        {
            using (CreditWorksTestContext entities = new CreditWorksTestContext())
            {
                return entities.Vehicles.ToList();
            }
        }

        // GET api/<VehicleController>/5
        [HttpGet("{id}")]
        public Vehicle Get(int id)
        {
            using (CreditWorksTestContext entities = new CreditWorksTestContext())
            {
                return entities.Vehicles.FirstOrDefault(e => e.Id == id);
            }
        }

        // POST api/<VehicleController>
        [HttpPost]
        public HttpResponseMessage Post([FromBody] Vehicle vehicle)
        {
            using (CreditWorksTestContext entities = new CreditWorksTestContext())
            {
                entities.Vehicles.Add(vehicle);
                entities.SaveChanges();

                var message = new HttpResponseMessage(HttpStatusCode.Created);
                return message;
            }
        }

        // PUT api/<VehicleController>/5
        [HttpPut("{id}")]
        public HttpResponseMessage Put(int id, [FromBody] Vehicle updatedVehicle)
        {
            using (CreditWorksTestContext entities = new CreditWorksTestContext())
            {
                var vehicle = entities.Vehicles.FirstOrDefault(e => e.Id == id);
                var message = new HttpResponseMessage();
                if (vehicle == null)
                {
                    message = new HttpResponseMessage(HttpStatusCode.NotFound);
                }
                else
                {
                    vehicle.Name = updatedVehicle.Name;
                    vehicle.Manufacturer = updatedVehicle.Manufacturer;
                    vehicle.YearModel = updatedVehicle.YearModel;
                    vehicle.Weight = updatedVehicle.Weight;
                    entities.SaveChanges();
                    message = new HttpResponseMessage(HttpStatusCode.OK);
                }
                return message;
            }
        }

        // DELETE api/<VehicleController>/5
        [HttpDelete("{id}")]
        public HttpResponseMessage Delete(int id)
        {
            using (CreditWorksTestContext entities = new CreditWorksTestContext())
            {
                var vehicle = entities.Vehicles.FirstOrDefault(e => e.Id == id);
                var message = new HttpResponseMessage();
                if (vehicle == null)
                {
                    message = new HttpResponseMessage(HttpStatusCode.NotFound);
                }
                else
                {
                    entities.Vehicles.Remove(vehicle);
                    entities.SaveChanges();
                    message = new HttpResponseMessage(HttpStatusCode.OK);
                }
                return message;
            }
        }
    }
}
