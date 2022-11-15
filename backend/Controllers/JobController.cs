using backend.Data;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class JobController : ControllerBase
    {
        public JobController(IRepository repo){ }
        [HttpGet]//Decorator
        public IActionResult Get(){
          try
            {
                return Ok("");
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro:{ex.Message}");

            }
        }
    }
}