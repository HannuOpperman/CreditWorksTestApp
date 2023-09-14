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
    public class ManufacturerController : ControllerBase
    {
        // GET: api/<ManufacturerController>
        [HttpGet]
        public IEnumerable<Manufacturer> Get()
        {
            using (CreditWorksTestContext entities = new CreditWorksTestContext())
            {
                return entities.Manufacturers.ToList();
            }
        }

        // GET api/<ManufacturerController>/5
        [HttpGet("{id}")]
        public Manufacturer Get(int id)
        {
            using (CreditWorksTestContext entities = new CreditWorksTestContext())
            {
                return entities.Manufacturers.FirstOrDefault(e => e.Id == id);
            }
        }

        // POST api/<ManufacturerController>
        [HttpPost]
        public HttpResponseMessage Post([FromBody] Manufacturer Manufacturer)
        {
            using (CreditWorksTestContext entities = new CreditWorksTestContext())
            {
                entities.Manufacturers.Add(Manufacturer);
                entities.SaveChanges();

                var message = new HttpResponseMessage(HttpStatusCode.Created);
                return message;
            }
        }

        // PUT api/<ManufacturerController>/5
        [HttpPut("{id}")]
        public HttpResponseMessage Put(int id, [FromBody] Manufacturer updatedManufacturer)
        {
            using (CreditWorksTestContext entities = new CreditWorksTestContext())
            {
                var Manufacturer = entities.Manufacturers.FirstOrDefault(e => e.Id == id);
                var message = new HttpResponseMessage();
                if (Manufacturer == null)
                {
                    message = new HttpResponseMessage(HttpStatusCode.NotFound);
                }
                else
                {
                    Manufacturer.Name = updatedManufacturer.Name;
                    entities.SaveChanges();
                    message = new HttpResponseMessage(HttpStatusCode.OK);
                }
                return message;
            }
        }

        // DELETE api/<ManufacturerController>/5
        [HttpDelete("{id}")]
        public HttpResponseMessage Delete(int id)
        {
            using (CreditWorksTestContext entities = new CreditWorksTestContext())
            {
                var Manufacturer = entities.Manufacturers.FirstOrDefault(e => e.Id == id);
                var message = new HttpResponseMessage();
                if (Manufacturer == null)
                {
                    message = new HttpResponseMessage(HttpStatusCode.NotFound);
                }
                else
                {
                    entities.Manufacturers.Remove(Manufacturer);
                    entities.SaveChanges();
                    message = new HttpResponseMessage(HttpStatusCode.OK);
                }
                return message;
            }
        }
    }
}
