const modal1 = document.querySelector(".modal-1")
const modal2 = document.querySelector(".modal-2")
const lockedCookie = document.querySelector(".locked-cookie")
const backModal1 = document.querySelector(".back-modal-1")
const sortedFortune = document.querySelector("#sorted-fortune")

const fortune = [
  "O aprendizado é como o horizonte: não há limites.",
  "Não há que ser forte, há que ser flexível.",
  "Limitações são fronteiras criadas apenas pela nossa mente.",
  "O cão não ladra por valentia e sim por medo.",
  "Procure acender uma vela em vez de amaldiçoar a escuridão.",
  "A palavra é prata, o silêncio é ouro.",
  "Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.",
  "Um pouco de perfume sempre fica nas mãos de quem oferece flores.",
  "O homem só envelhece quando os lamentos substituem seus sonhos.",
  "A persistência realiza o impossível.",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
]

lockedCookie.addEventListener("click", handleClick)
backModal1.addEventListener("click", handleClick)

function handleClick() {
  toogleModal()
  pickFortune()
}

function toogleModal() {
  console.log("entrou")
  modal1.classList.toggle("hidden")
  modal2.classList.toggle("hidden")
}

function pickFortune() {
  let allFortunes = fortune.length
  let randomNumber = Math.floor(Math.random() * allFortunes)
  sortedFortune.innerText = `${fortune[randomNumber]}`
}
