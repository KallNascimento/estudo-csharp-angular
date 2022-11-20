using System;
namespace backend.Dtos
{
    public class UserDto
    {
        public int id { get; set; }
        public string? name { get; set; }
        public IEnumerable<TodoDto> Todo { get; set; }
    }
}

