using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace dotnett.model;

public class Animal
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public int Age { get; set; }
}
