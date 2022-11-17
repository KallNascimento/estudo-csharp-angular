using System;
namespace backend.Dtos
{
    public class TodoDto
    {
        public int Id { get; set; }
        public string? Description { get; set; }
        public UserRegisterDto User { get; set; }
    }
}

