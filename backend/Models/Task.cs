namespace backend.Models
{
    public class TaskModel
    {    
        public TaskModel(){ }
        public TaskModel(int id, int idPerson, string description)
        {
            this.id = id;
            this.idPerson = idPerson;
            this.description = description;
        }

        public int id { get; set; }
        public int idPerson { get; set; }
        public string? description { get; set; }
    }
}