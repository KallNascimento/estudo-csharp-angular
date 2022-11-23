using AutoMapper;
using backend.Data;
using backend.Dtos;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly IRepository _repo;
    private readonly IMapper _mapper;

    public UserController(IRepository repo, IMapper mapper)
    {
        _mapper = mapper;
        _repo = repo;
    }

    [HttpGet]
    public IActionResult Get()
    {
        var User = _repo.GetAllUsers(true);
        return Ok(_mapper.Map<IEnumerable<UserDto>>(User));
    }

    [HttpGet("getRegister")]
    public IActionResult GetRegister()
    {
        return Ok(new UserRegisterDto());
    }

    // api/User
    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        var User = _repo.GetUserById(id, true);
        try
        {
        var userDto = _mapper.Map<UserDto>(User);
        return Ok(User);
            
        }
        catch (Exception ex)
        {
            return BadRequest($"Erro:{ex.Message}");
        
        }


    }


    // api/User
    [HttpPost]
    public IActionResult Post(UserRegisterDto model)
    {
        var user = _mapper.Map<User>(model);

        _repo.Add(user);
        if (_repo.SaveChanges())
        {
            return Created($"/api/user/{model.id}", _mapper.Map<UserDto>(user));
        }

        return BadRequest("Usuário não cadastrado");
    }

    // api/User
    [HttpPut("{id}")]
    public IActionResult Put(int id, UserRegisterDto model)
    {
        var user = _repo.GetUserById(id, false);
        if (user == null) return BadRequest("Usuário não encontrado");

        _mapper.Map(model, user);

        _repo.Update(user);
        if (_repo.SaveChanges())
        {
            return Created($"/api/user/{model.id}", _mapper.Map<UserDto>(user));
        }

        return BadRequest("Usuário não Atualizado");
    }

    // api/User
    [HttpPatch("{id}")]
    public IActionResult Patch(int id, UserRegisterDto model)
    {
        var user = _repo.GetUserById(id, false);
        if (user == null) return BadRequest("Usuário não encontrado");

        _mapper.Map(model, user);

        _repo.Update(user);
        if (_repo.SaveChanges())
        {
            return Created($"/api/user/{model.id}", _mapper.Map<UserDto>(user));
        }

        return BadRequest("Usuário não Atualizado");
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var user = _repo.GetUserById(id, false);
        if (user == null) return BadRequest("Usuário não encontrado");

        _repo.Delete(user);
        if (_repo.SaveChanges())
        {
            return Ok("Usuário deletado");
        }

        return BadRequest("Usuário não deletado");
    }
}


