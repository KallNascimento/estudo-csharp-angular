using System;
using AutoMapper;
using backend.Dtos;
using backend.Models;

namespace backend.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<UserDto, User>()
                .ForMember(dest => dest.Name,
                opt => opt.MapFrom(src => $"{src.Name}"));
            CreateMap<UserDto, User>();
            CreateMap<User, UserRegisterDto>().ReverseMap();
        }

    }
}

