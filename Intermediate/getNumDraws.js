const { default: axios } = require("axios");

/* 
 * Complete the 'getNumDraws' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER year as parameter.
 */


async function getNumDraws(year) { 
  const apiUrl = 'https://jsonmock.hackerrank.com/api/football_matches?'
  let numOfDraws = 0

  for (let goals = 0; goals < 10; goals++) {
    const res = await axios.get(`${apiUrl}year=${year}&team1goals=${goals}&team2goals=${goals}`)
    const { data } = res
    if (!data) return   
    
    const  { total } = data
    numOfDraws+= total
  }
   
  return numOfDraws 
}

getNumDraws()