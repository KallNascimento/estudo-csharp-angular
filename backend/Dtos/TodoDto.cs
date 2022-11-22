namespace backend.Dtos;

public class TodoDto
{
    public int id { get; set; }
    public string? description { get; set; }
    public int userid{get;set;}
    public UserRegisterDto User { get; set; }
}
