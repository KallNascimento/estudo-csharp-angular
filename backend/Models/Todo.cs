using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

[Table("Todos")]
public class Todo
{
    protected Todo() { }

        public Todo(int id, string description, int userId) 
        {
            this.Id = id;
            this.description = description;
            this.userId = userId;
   
        }
   

    [Column("id")]
     public int Id { get; set; }
    [Column("description")]
    public string? description { get; set; }
    
    public User? user { get; set; }

    [Column("userid")]
    public int userId { get; set; }
}
