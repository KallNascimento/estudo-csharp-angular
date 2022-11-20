using backend.Dtos;
using AutoMapper;
using backend.Models;

namespace backend.Profiles;

public class TodoProfile : Profile
{
    public TodoProfile()
    {
        CreateMap<TodoDto, Todo>()
            .ForMember(dest => dest.Description, opt => opt.MapFrom(src => $"{src.Description}"));
        CreateMap<TodoDto, Todo>();
        CreateMap<TodoProfile, TodoRegisterDto>().ReverseMap();
    }
}
