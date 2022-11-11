using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TaskController : ControllerBase
    {
        [HttpGet]//Decorator
        public IActionResult Get(){
            return Ok("Passeando");
        }
    }
}