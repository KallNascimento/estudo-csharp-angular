namespace backend.Models
{
    public class Todo
    {
        public Todo() { }

        public Todo(int id, string description, int userId)
        {
            this.Id = id;
            this.Description = description;
            this.userId = userId;
        }

        public int Id { get; set; }
        public string? Description { get; set; }
        public int userId { get; set; }
        public User? User { get; set; }
        
    }
}
