/*  
Rastreia as alterações feitas em todas as entidades recuperadas e mantém um "cache de identidade" 
 que garante que as entidades recuperadas 
 mais de uma vez sejam representadas usando a mesma instância de objeto
 */
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        /*Tabelas que serão criadas no DB e acessar através
        do datacontext
        */
        public DbSet<User> Users { get; set; }
        public DbSet<Todo> Todos { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            /*Quando roda o migrations ele acessa aqui*/
        //     builder
        //         .Entity<Todo>()
        //         .HasData(
        //             new List<Todo>
        //             {
        //                 new Todo(1, "Saiu para entrega",1),
        //                 new Todo(2, "Entrega realizada",1),
        //                 new Todo(3, "Comprou o carro",2),
        //                 new Todo(4, "Lavou o carro",2),
        //             }
        //         );

        //     builder
        //         .Entity<User>()
        //         .HasData(new List<User>() { new User(1, "João"), new User(2, "Maria"), });
        // }
    }
    }

