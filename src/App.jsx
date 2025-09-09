// import {useRef}from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import JSConfetti from 'js-confetti'



import './App.css'

function App(){
const jsConfetti = new JSConfetti()
  let [player,setPlayer]=useState("O")
  let [game , setGame]=useState(true) 
  let [count,setCount]=useState(0)
  const cell0=useRef(null)
  const cell1=useRef(null)
  const cell2=useRef(null)
  const cell3=useRef(null)
  const cell4=useRef(null)
  const cell5=useRef(null)
  const cell6=useRef(null)
  const cell7=useRef(null)
  const cell8=useRef(null)
  const turn=useRef(null)
const result= useRef(null)




  function restart(){
      window.location = "/"  //This is the code to refresh the website
  }

  function playerClick(ref){
      // let cells = document.getElementsByClassName('cell')
     
      if(game){
        
      
      if(player=="O"){

          if(ref.current.innerHTML==''){
       ref.current.innerHTML = "O"
         ref.current.style.backgroundColor="pink";
          // cells[index].style.color='brown'
          setCount(count+1)
        checkWinner()
        
       setPlayer("X")
        //  turn.current.innerHTML=player+"'s turn"
            
          }else{

            alert("Double Click is not allowed..!!!")
          }

      }
      else{
        if(ref.current.innerHTML==''){
         ref.current.innerHTML = "X"
          ref.current.style.backgroundColor="orange";
          
        // cells[index].innerHTML = "X"
        // cells[index].style.color='Orange'
         setCount(count+1)
        checkWinner()
        setPlayer("O")
   

      // turn.current.innerHTML=player+"'s turn"
       
        
      }else{

            alert("Double Click is not allowed..!!!")
          }

    }



  }else{
         alert("Please Restart the Game..!!")
  }
  }


  function checkWinner(){
 
      let c = []
      for(let i=0; i<9; i++){
        let data = document.getElementsByClassName('cell')
        c[i] = data[i].innerHTML
      }

      if(player==c[0] && player == c[1] && player == c[2]){
           
           setGame(false)
         
      turn.current.innerHTML=player+"'s turn"
   
         jsConfetti.addConfetti()

        //   alert(player +" is the winner")
      }
      else if(player==c[3] && player == c[4] && player == c[5]){
           
           setGame(false)
    
           result.current.innerHTML="Cogratulation... Player "+player+"' is Win !!!"
           jsConfetti.addConfetti()
           

      }else if(player==c[6] && player == c[7] && player == c[8]){
         
                    result.current.innerHTML="Cogratulation... Player "+player+"' is Win !!!"
           setGame(false)
           jsConfetti.addConfetti()
      }
      else if(player==c[0] && player == c[3] && player == c[6]){
     
                     result.current.innerHTML="Cogratulation... Player "+player+"' is Win !!!"
           setGame(false)
           jsConfetti.addConfetti()
      }
      else if(player==c[1] && player == c[4] && player == c[7]){
                     result.current.innerHTML="Cogratulation... Player "+player+"' is Win !!!"
           setGame(false)
           jsConfetti.addConfetti()
      
      }
      else if(player==c[2] && player == c[5] && player == c[8]){
                     result.current.innerHTML="Cogratulation... Player "+player+"' is Win !!!"
           setGame(false)
           jsConfetti.addConfetti()

          
      }
      else if(player==c[0] && player == c[4] && player == c[8]){
                     result.current.innerHTML="Cogratulation... Player "+player+"' is Win !!!"
           setGame(false)
           jsConfetti.addConfetti()
        
      }
      else if(player==c[2] && player == c[4] && player == c[6]){
                     result.current.innerHTML="Cogratulation... Player "+player+"' is Win !!!"
           setGame(false)
           jsConfetti.addConfetti()
      }      
      if(count==8 && game){
        result.current.innerHTML="Drawn the Match"
         setGame(false)

           
      if(count==8 && game){
        result.current.innerHTML="Drawn the Match"
         setGame(false)

         setInterval(()=>{  window.location = "/" },6000)
      
      }
      } 
     

  }


  return(
    <>
        <div id="main">
            <h1 id="heading">Tic Tac Toe</h1>

            <div id="game">
                <div className="cell" ref={cell0}  onClick={()=> playerClick(cell0)}></div>
                <div className="cell" ref={cell1} onClick={()=> playerClick(cell1)}></div>
                <div className="cell" ref={cell2} onClick={()=> playerClick(cell2)}></div>
                <div className="cell" ref={cell3} onClick={()=> playerClick(cell3)}></div>
                <div className="cell" ref={cell4} onClick={()=> playerClick(cell4)}></div>
                <div className="cell" ref={cell5} onClick={()=> playerClick(cell5)}></div>
                <div className="cell" ref={cell6} onClick={()=> playerClick(cell6)}></div>
                <div className="cell" ref={cell7}onClick={()=> playerClick(cell7)}></div>
                <div className="cell" ref={cell8} onClick={()=> playerClick(cell8)}></div>
            </div>
      {/* <h2 ref={turn}>turn {player}</h2> */}
      {/* <h2 id="turn" ref={turn}></h2> */}
      <h2 id='result'  ref={result} ></h2>
            <button  id='reset' onClick={restart}>Restart</button>
        </div>
    </>
  )
}

export default App;