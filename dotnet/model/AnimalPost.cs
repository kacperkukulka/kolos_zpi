using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace dotnett.model;

public class AnimalPost
{
    public string Name { get; set; } = null!;
    public int Age { get; set; }
}
