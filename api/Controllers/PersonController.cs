using Dapper;
using Microsoft.AspNetCore.Mvc;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Controllers
{       
    [ApiController]
    [Route("[controller]")]
    public class PersonController: ControllerBase 
    {
        [HttpGet]
        public IEnumerable<Person> Get()
        {
            using (var connection = new MySqlConnection("Server=localhost;Database=consultas;Uid=root;Pwd=root;"))
            {
                var response = connection.Query<Person>("SELECT PESSOA_ID, NOME_FANTASIA, CNPJ_CPF FROM PESSOA");

                return response;
            }
        }

        [HttpPut]
        public Person Update(Person person)
        {
            using (var connection = new MySqlConnection("Server=localhost;Database=consultas;Uid=root;Pwd=root;"))
            {
                var query = $"UPDATE PESSOA SET NOME_FANTASIA = '{person.NOME_FANTASIA}' WHERE PESSOA_ID = {person.PESSOA_ID}";
                var response = connection.Query<Person>(query);

                var responseSelect = connection.QueryFirst<Person>($"SELECT * FROM PESSOA WHERE PESSOA_ID = {person.PESSOA_ID}");
                return responseSelect;
            }
        }
    }
}
