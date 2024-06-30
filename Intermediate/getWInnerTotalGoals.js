const { default: axios } = require("axios")

/*
 * Complete the 'getWinnerTotalGoals' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER year and STRING competition as parameters.
 */


async function getWinnerTotalGoals(competition, year) { 
  const apiUrlOne = 'https://jsonmock.hackerrank.com/api/football_competitions?'
  const apiUrlTwo = 'https://jsonmock.hackerrank.com/api/football_matches?'

  let totalGoals = 0 
  
  const res1 = await axios.get(`${apiUrlOne}name=${competition}&year=${year}`)
  const { winner } = res1.data.data[0]

  for (let i = 1; i <= 2; i++) {
    for (let goals = 0; goals < 10; goals++) {
      const res2 = await axios.get(`${apiUrlTwo}competition=${competition}&year=${year}&team${i}=${winner}&team${i}goals=${goals}`)
      const { total } = res2.data

      if (total) totalGoals += total * goals
    }
  }
  
  return totalGoals 
} 
   
getWinnerTotalGoals()   