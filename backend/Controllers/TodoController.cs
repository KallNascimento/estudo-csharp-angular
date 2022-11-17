using backend.Data;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        public readonly IRepository _repo;
        private readonly DataContext _context;

        public TodoController(DataContext context)
        {
            _context = context;
        }

        public TodoController(IRepository repo)
        {
            _repo = repo;
        }

        [HttpGet] //Decorator
        public IActionResult Get()
        {
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
