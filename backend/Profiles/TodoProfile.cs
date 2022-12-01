/* 
Responsável pelo mapeamendo dos campos entre modelo e DTO
*/
using AutoMapper;
using backend.Dtos;
using backend.Models;

namespace backend.Profiles;

public class TodoProfile : Profile
{
    public TodoProfile()
    {
        CreateMap<Todo, TodoDto>();
        CreateMap<Todo, TodoRegisterDto>().ReverseMap();
    }
}
