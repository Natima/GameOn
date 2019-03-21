using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using GameOn.API.Data;
using GameOn.API.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GameOn.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IDatingRepository _repo;
        private readonly IMapper _mapper;
        public UsersController(IDatingRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;

        }
        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _repo.GetUsers();
            var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);
            return Ok(usersToReturn);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);

            //executes mapping from source obj to destination obj
            var userToReturn = _mapper.Map<UserForDetailedDto>(user);
            return Ok(userToReturn);
        }
    }
}