using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;
[Table("Todos")]
public class Todo
{
    public Todo() { }

    public Todo(int id, string description, int userId)
    {
        this.Id = id;
        this.Description = description;
        this.UserId = userId;

    }

    [Column("Id")]
    public int Id { get; set; }
    [Column("Description")]
    public string? Description { get; set; }
    public User? user { get; set; }
    [Column("userId")]
    public int UserId { get; set; }

}

