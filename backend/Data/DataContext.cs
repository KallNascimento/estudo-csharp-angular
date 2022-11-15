using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        /*Tabelas que serão criadas no DB e acessar através
        do datacontext
        */
        public DbSet<Person> People { get; set; }
        public DbSet<Job> Jobs { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            /*Quando roda o migrations ele acessa aqui*/
            builder.Entity<Job>()
                .HasData(new List<Job>{
                    new Job(1, 1,"Entregou"),
                    new Job(2, 2, "Em rota de entrega"),
                    new Job(3, 3, "Empacotando"),

                });

            builder.Entity<Person>()
                .HasData(new List<Person>(){
                    new Person(1, "Marta"),
                    new Person(2, "Paula"),
                    new Person(3, "Laura"),
                });
        }
    }
}