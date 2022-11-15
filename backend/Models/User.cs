namespace backend.Models
{
    public class User
    {
        public User() { }

        public User(int id, string name)
        {
            this.Id = id;
            this.Name = name;
        }

        public int Id { get; set; }
        public string? Name { get; set; }
        public IEnumerable<Todo>? Todos { get; set; }
    }
}
