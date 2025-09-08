
import './App.css'

function App(){

  let player = "O"

  function restart(){
      window.location = "/"  //This is the code to refresh the website
  }

  function playerClick(index){
      let cells = document.getElementsByClassName('cell')
      
      if(player=="O"){
    
        cells[index].innerHTML = "O "
          cells[index].style.color='brown'
        checkWinner()
        player = "X"

      }
      else{
        cells[index].innerHTML = "X"
        cells[index].style.color='Orange'
        checkWinner()
        player = "O"
      }
  }


  function checkWinner(){
      let c = []
      for(let i=0; i<9; i++){
        let data = document.getElementsByClassName('cell')
        c[i] = data[i].innerHTML
      }

      if(player==c[0] && player == c[1] && player == c[2]){
          alert(player +" is the winner")
      }
      else if(player==c[3] && player == c[4] && player == c[5]){
          alert(player +" is the winner")
      }
      else if(player==c[6] && player == c[7] && player == c[8]){
          alert(player +" is the winner")
      }
      else if(player==c[0] && player == c[3] && player == c[6]){
          alert(player +" is the winner")
      }
      else if(player==c[1] && player == c[4] && player == c[7]){
          alert(player +" is the winner")
      }
      else if(player==c[2] && player == c[5] && player == c[8]){
          alert(player +" is the winner")
      }
      else if(player==c[0] && player == c[4] && player == c[8]){
          alert(player +" is the winner")
      }
      else if(player==c[2] && player == c[4] && player == c[6]){
          alert(player +" is the winner")
      }
  }


  return(
    <>
        <div id="main">
            <h1>Tic Tac Toe</h1>

            <div id="game">
                <div className="cell" onClick={()=> playerClick(0)}></div>
                <div className="cell" onClick={()=> playerClick(1)}></div>
                <div className="cell" onClick={()=> playerClick(2)}></div>
                <div className="cell" onClick={()=> playerClick(3)}></div>
                <div className="cell" onClick={()=> playerClick(4)}></div>
                <div className="cell" onClick={()=> playerClick(5)}></div>
                <div className="cell" onClick={()=> playerClick(6)}></div>
                <div className="cell" onClick={()=> playerClick(7)}></div>
                <div className="cell" onClick={()=> playerClick(8)}></div>
            </div>

            <button id='reset' onClick={restart}>Restart</button>
        </div>
    </>
  )
}

export default App;