using backend.Data;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IRepository repo;

        public UserController(IRepository repo)
        {
            this.repo = repo;
        }

        [HttpGet] //Decorator
        public async Task<IActionResult> Get()
        {
            try
            {
                var result = await repo.GetAllUsersAsync(true);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro:{ex.Message}");
            }
        }

        [HttpGet("{userId}")] //Decorator
        public async Task<IActionResult> GetByUserId(int userId)
        {
            try
            {
                var result = await repo.GetUserAsyncById(userId, true);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro:{ex.Message}");
            }
        }
    }
}
