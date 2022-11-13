namespace backend.Models
{
    public class PersonTask
    {
        public PersonTask()
        {
        }

        public PersonTask(int personId, int taskID)
        {
            this.personId = personId;
            this.taskId = taskId;

        }
        public int personId { get; set; }
        public Person? Person { get; set; }
        public int taskId { get; set; }
        public Task? Task { get; set; }
    }
}