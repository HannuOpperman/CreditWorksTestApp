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
    public class CategoryController : ControllerBase
    {
        // GET: api/<CategoryController>
        [HttpGet]
        public IEnumerable<Category> Get()
        {
            using (CreditWorksTestContext entities = new CreditWorksTestContext())
            {
                return entities.Categories.ToList();
            }
        }

        // GET api/<CategoryController>/5
        [HttpGet("{id}")]
        public Category Get(int id)
        {
            using (CreditWorksTestContext entities = new CreditWorksTestContext())
            {
                return entities.Categories.FirstOrDefault(e => e.Id == id);
            }
        }

        // POST api/<CategoryController>
        [HttpPost]
        public HttpResponseMessage Post([FromBody] Category Category)
        {
            using (CreditWorksTestContext entities = new CreditWorksTestContext())
            {
                entities.Categories.Add(Category);
                entities.SaveChanges();

                var message = new HttpResponseMessage(HttpStatusCode.Created);
                return message;
            }
        }

        // PUT api/<CategoryController>/5
        [HttpPut("{id}")]
        public HttpResponseMessage Put(int id, [FromBody] Category updatedCategory)
        {
            using (CreditWorksTestContext entities = new CreditWorksTestContext())
            {
                var Category = entities.Categories.FirstOrDefault(e => e.Id == id);
                var message = new HttpResponseMessage();
                if (Category == null)
                {
                    message = new HttpResponseMessage(HttpStatusCode.NotFound);
                }
                else
                {
                    Category.Name = updatedCategory.Name;
                    Category.Weight = updatedCategory.Weight;
                    Category.Icon = updatedCategory.Icon;
                    entities.SaveChanges();
                    message = new HttpResponseMessage(HttpStatusCode.OK);
                }
                return message;
            }
        }

        // DELETE api/<CategoryController>/5
        [HttpDelete("{id}")]
        public HttpResponseMessage Delete(int id)
        {
            using (CreditWorksTestContext entities = new CreditWorksTestContext())
            {
                var Category = entities.Categories.FirstOrDefault(e => e.Id == id);
                var message = new HttpResponseMessage();
                if (Category == null)
                {
                    message = new HttpResponseMessage(HttpStatusCode.NotFound);
                }
                else
                {
                    entities.Categories.Remove(Category);
                    entities.SaveChanges();
                    message = new HttpResponseMessage(HttpStatusCode.OK);
                }
                return message;
            }
        }
    }
}
