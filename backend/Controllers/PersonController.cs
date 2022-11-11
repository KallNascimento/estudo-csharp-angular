using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PersonController : ControllerBase
    {
        [HttpGet]//Decorator
        public IActionResult Get(){
            return Ok("Kauê");
        }
    }
}