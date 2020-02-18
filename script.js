const search = document.getElementById('search')
const submit = document.getElementById('submit')
const random = document.getElementById('random')
const mealsEl = document.getElementById('meals')
const resultHeding = document.getElementById('result-heading')
const single_mealEl = document.getElementById('single-meal')

// Search meal and fetch from API
function searchMeal(e) {
  e.preventDefault()

  // Clear single meal
  single_mealEl.innerHTML = ''

  // Get search term
  const term = search.value

  // Check for empty

  if (term.trim()) {
    const meal = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })

    console.log(meal)
  } else {
    alert('Please enter a search value')
  }
}

// Event listeners
submit.addEventListener('submit', searchMeal)
