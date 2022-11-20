using System.ComponentModel.DataAnnotations.Schema;
namespace backend.Models;

[Table("Users")]
public class User
{
    public User() { }

    public User(int id, string name)
    {
        this.Id = id;
        this.Name = name;
    }
    [Column("Id")]
    public int Id { get; set; }
    [Column("Name")]
    public string? Name { get; set; }
    public IEnumerable<Todo>? Todos { get; set; }
}
