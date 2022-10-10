using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Image_Uploader.Controllers
{
    [Route("imageuploader")]
    [ApiController]
    public class ImageUploaderController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public ImageUploaderController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost("upload")]
        public IActionResult UploadImage(IFormFile image)
        {
            var filefolders = _configuration.GetValue<string>("StaticImages:Folder");

            if (!Directory.Exists(filefolders))
                Directory.CreateDirectory(filefolders);

            string? filePath = Path.Combine(filefolders, image.FileName);
            if (!System.IO.File.Exists(filePath))
            {
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    image.CopyTo(stream);
                }
            }

            return Ok(new { url = image.FileName });
        }
    }
}
