using backend.Dtos;
using AutoMapper;
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
