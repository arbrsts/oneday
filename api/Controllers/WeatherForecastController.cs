using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    [HttpGet()]
    public IActionResult GetUser()
    {
        return Ok("helloo");
    }
}
