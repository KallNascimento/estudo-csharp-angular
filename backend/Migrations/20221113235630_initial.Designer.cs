﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using backend.Data;

#nullable disable

namespace backend.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20221113235630_initial")]
    partial class initial
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("backend.Models.Person", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<string>("name")
                        .HasColumnType("text");

                    b.HasKey("id");

                    b.ToTable("People");

                    b.HasData(
                        new
                        {
                            id = 1,
                            name = "Marta"
                        },
                        new
                        {
                            id = 2,
                            name = "Paula"
                        },
                        new
                        {
                            id = 3,
                            name = "Laura"
                        });
                });

            modelBuilder.Entity("backend.Models.TaskModel", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<string>("description")
                        .HasColumnType("text");

                    b.Property<int>("idPerson")
                        .HasColumnType("integer");

                    b.HasKey("id");

                    b.ToTable("Tasks");

                    b.HasData(
                        new
                        {
                            id = 1,
                            description = "Entregou",
                            idPerson = 1
                        },
                        new
                        {
                            id = 2,
                            description = "Em rota de entrega",
                            idPerson = 2
                        },
                        new
                        {
                            id = 3,
                            description = "Empacotando",
                            idPerson = 3
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
