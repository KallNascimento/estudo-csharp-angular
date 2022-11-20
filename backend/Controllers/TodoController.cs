using AutoMapper;
using backend.Data;
using backend.Dtos;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TodoController : ControllerBase
{
    private readonly IRepository _repo;
    private readonly IMapper _mapper;

    public TodoController(IRepository repo, IMapper mapper)
    {
        _mapper = mapper;
        _repo = repo;
    }

    [HttpGet] //Decorator
    public IActionResult Get()
    {
        try
        {
            var Todo = _repo.GetAllTodos();
            return Ok(_mapper.Map<IEnumerable<TodoDto>>(Todo));
        }
        catch (Exception ex)
        {
            return BadRequest($"Erro:{ex.Message}");
        }
    }

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        var Todo = _repo.GetTodoById(id);
        try
        {
            if (User == null)
                return BadRequest("Tarefa não encontrada");
            var todoDto = _mapper.Map<TodoDto>(Todo);
            return Ok(Todo);
        }
        catch (Exception ex)
        {
            return BadRequest($"Erro:{ex.Message}");
        }
    }

    [HttpPost]
    public IActionResult Post(TodoRegisterDto model)
    {
        var todo = _mapper.Map<Todo>(model);

        _repo.Add(todo);
        if (_repo.SaveChanges())
        {
            return Created($"/api/todo/{model.Id}", _mapper.Map<TodoDto>(todo));
        }

        return BadRequest("Tarefa não cadastrada.");
    }
}
