// TODO: Declare any global variables we need
let headsRolls = 0
let tailsRolls = 0

document.addEventListener('DOMContentLoaded', function () {

    // TODO: Add event listener and handler for flip and clear buttons
    document.getElementById('flip').addEventListener('click', () => {
  

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        let flippedHeads = Math.random() < 0.5
        // TODO: Update image and status message in the DOM
        if (flippedHeads) {
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg';
            document.getElementById('message').textContent = 'Flipped Heads';
            headsRolls++;
        }
        else {
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg';
            document.getElementById('message').textContent = 'Flipped Tails';
            tailsRolls++;
        }
                // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        let total = headsRolls + tailsRolls
        // Make variables to track the percentages of heads and tails
        let percentHeads = 0
        let percentTails = 0
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell
        if (total > 0) {
            percentHeads = Math.round((headsRolls / total) * 100)
            percentTails = Math.round((tailsRolls / total) * 100)
        }
        document.getElementById('heads').textContent = headsRolls
        document.getElementById('tails').textContent = tailsRolls
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })
    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        document.getElementById('clear').addEventListener('click', function  () {
            headsRolls = 0
            tailsRolls = 0
            document.getElementById('message').textContent = "Let's Get Rolling"
            let total = headsRolls + tailsRolls
            let percentHeads = 0
            let percentTails = 0
            if (total > 0) {
                percentHeads = Math.round((headsRolls / total) * 100)
                percentTails = Math.round((tailsRolls / total) * 100)
            }
        document.getElementById('heads').textContent = headsRolls
        document.getElementById('tails').textContent = tailsRolls
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails-percent').textContent = percentTails + '%'
        })
        // TODO: Update the scoreboard (same logic as in flip button click handler)

    })
        



