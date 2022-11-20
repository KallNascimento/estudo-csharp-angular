using backend.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
builder.Services
    .AddControllers()
    .AddNewtonsoftJson(
        option =>
            option.SerializerSettings.ReferenceLoopHandling = Newtonsoft
                .Json
                .ReferenceLoopHandling
                .Ignore
    );

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<DataContext>(
    conection =>
        conection.UseNpgsql("Host=localhost;Port=5432;Database=estudo;User Id=postgres;Password=root")
        
);

/*Scoped: garante que em uma requisição seja criada um instância de um classe onde se houver outras dependências, seja utilizada essa única instância pra todas, renovando somente nas requisições subsequentes,
mas, mantendo essa obrigatoriedade.*/

builder.Services.AddScoped<IRepository, Repository>(); //Necessário para Unit test, pois não fazemos inserts aleatórios no banco.

/* Singleton: Cria uma única instância do serviço quando é solicitado pela primeira 
 * vez e reutiliza essa mesma instância em todos os locais em que esse serviço é necessário.
 * builder.Services.AddSingleton<IRepository, Repository>();
*/

/*Transient: Sempre gerará uma nova instância para cada item encontrado que possua
tal dependência, ou seja, se houver 5 dependências serão 5 instâncias diferentes*/
//builder.Services.AddTransient<IRepository, Repository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
