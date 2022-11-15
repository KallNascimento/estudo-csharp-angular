namespace backend.Models
{
    public class Job
    {    
        public Job(){ }
        public Job(int id, int idPerson, string description)
        {
            this.IdPerson = idPerson;
            this.Id = id;
            this.Description = description;
        }

        public int Id { get; set; }
        public int IdPerson { get; set; }
        public string? Description { get; set; }
    }
}