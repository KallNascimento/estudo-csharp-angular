using backend.Dtos;
using AutoMapper;
using backend.Models;

namespace backend.Profiles;

public class TodoProfile : Profile
{
    public TodoProfile()
    {
        CreateMap<Todo,TodoDto>()
            .ForMember(dest => dest.description, opt => opt.MapFrom(src => $"{src.description}"));
        CreateMap<TodoDto, Todo>();
        CreateMap<TodoProfile, TodoRegisterDto>().ReverseMap();
    }
}
