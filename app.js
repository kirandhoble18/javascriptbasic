 const rock =document.querySelector('#rock')
 const paper =document.querySelector('#paper')
const scissor =document.querySelector('#scissor')
const board =document.querySelector('#board')

const handler =(e) => {
  const action =e.target.id
}
switch (action){
  case "rock":
   board.innerHTML=" rock crushes scissors"
   break
   case 'paper':
    board.innerHTML=" paper traps rock"
    break
    case 'scissor':
      board.innerHTML=" scissor cuts paper "
      break
      default:
        board.innerHTML=" clicked something "
        

}
rock.addEventListener('click',()=> { handler('rock')})
paper.addEventListener('click',()=>{ handler('paper')})
scissor.addEventListener('click',()=> { handler('scissor')})
