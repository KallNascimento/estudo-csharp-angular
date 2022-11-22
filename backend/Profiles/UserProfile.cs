using AutoMapper;
using backend.Dtos;
using backend.Models;

namespace backend.Profiles;

public class UserProfile : Profile
{
    public UserProfile()
    {
        CreateMap<User,UserDto>();
            //.ForMember(dest => dest.name, opt => opt.MapFrom(src => $"{src.Name}"));
        CreateMap<UserDto, User>();
        CreateMap<User, UserRegisterDto>().ReverseMap();
    }
}
