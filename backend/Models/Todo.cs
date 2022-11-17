namespace backend.Models;

public class Todo
{
    public Todo() { }

    public Todo(int id, string description, int userId)
    {
        this.Id = id;
        this.Description = description;
        this.UserId = userId;

    }

    public int Id { get; set; }
    public string? Description { get; set; }
    public User? user { get; set; }
    public int UserId { get; set; }

}

