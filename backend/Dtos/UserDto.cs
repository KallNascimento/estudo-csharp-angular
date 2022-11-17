using System;
namespace backend.Dtos
{
    public class UserDto
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public IEnumerable<TodoDto> Todo { get; set; }
    }
}

