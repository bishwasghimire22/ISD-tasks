function calculateProfit() {
    
        // Read value of rounds from the input field
       let rounds = Number(document.getElementById("rounds").value);
        // Check if the input is a valid number
        if (isNaN(rounds) || rounds <= 0) {
          alert("Please enter a valid number of rounds.");
          return;
    
        }
      
        let totalWin = 0;
      
        // Make a loop which is executed as many times as was set through the input field.
        for (let i = 0; i < rounds; i++) {
          // Randomize pips between 1-6 calling Math.round( (Math.random( ) * 5) + 1 );
          let pips = Math.round(Math.random() * 5) + 1;
      
          // If the randomized pips is 1, 3, or 5, no pay
          if (pips === 1 || pips === 3 || pips === 5) {
            // No pay, continue to the next round
            continue;
          } else if (pips === 2 || pips === 4) {
            // Pips 2 and 4 return the set coins back 125% (=multiplied by 1.25)
            totalWin +=  1.25;
          } else if (pips === 6) {
            // Pip 6 returns the inserted bet 150%
            totalWin +=  1.5;
          }
        }
      
        // Calculate the profit (euros) of the company by subtracting the win counter (euros) from the bets (euros)
        let bets = rounds; // Assuming each round costs 1 euro
        let profit = bets - totalWin;
      
        // Write the answer on the page, to the answer div, as content of the div
       document.getElementById("answer").innerHTML = `Bets were altogether ${bets.toFixed(2)} euros<br>
       Wins were ${totalWin.toFixed(2)} euros<br>
       Profit was ${(profit).toFixed(2)} euros`;
      }
      
