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
            return Created($"/api/todo/{model.id}", _mapper.Map<TodoDto>(todo));
        }

        return BadRequest("Tarefa não cadastrada.");
    }

    [HttpPut("{id}")]
    public IActionResult Put(int id, TodoRegisterDto model)
    {
        var todo = _repo.GetTodoById(id);
        if (todo == null)
            return BadRequest("Tarefa não encontrada");

        _mapper.Map(model, todo);
        if (_repo.SaveChanges())
        {
            return Created($"/api/todo/{model.id}", _mapper.Map<TodoDto>(todo));
        }
        return BadRequest("Tarefa não foi atualizada.");
    }

    [HttpPatch("{id}")]
    public IActionResult Patch(int id, TodoRegisterDto model)
    {
        var todo = _repo.GetTodoById(id);
        if (todo == null)
            return BadRequest("Tarefa nãi encontrada.");
        _mapper.Map(model, todo);
        _repo.Update(todo);
        if (_repo.SaveChanges())
        {
            return Created($"/api/todo/{model.id}", _mapper.Map<TodoDto>(todo));
        }
        return BadRequest("Tarefa não foi atualizada.");
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var todo = _repo.GetTodoById(id);
        if (todo == null)
            return BadRequest("Tarefa inexistente.");
        _repo.Delete(todo);
        if (_repo.SaveChanges())
        {
            return Ok("Tarefa excluida com sucesso.");
        }
        return BadRequest("Não foi possivel excluir,");
    }
}
