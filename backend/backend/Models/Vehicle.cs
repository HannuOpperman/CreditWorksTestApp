using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Vehicle
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Manufacturer { get; set; }

    public string? YearModel { get; set; }

    public int? Weight { get; set; }
}
