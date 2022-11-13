namespace backend.Models
{
    public class Person
    {

        public Person() { }
        public Person(int id, string name)
        {
            this.id = id;
            this.name = name;
        }

        public int id { get; set; }
        public string? name { get; set; }

    }
}