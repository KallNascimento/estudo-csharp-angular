using AutoMapper;
using backend.Dtos;
using backend.Models;

namespace backend.Profiles;

public class UserProfile : Profile
{
    public UserProfile()
    {
        CreateMap<User,UserDto>();        
        CreateMap<User, UserRegisterDto>().ReverseMap();
    }
}
