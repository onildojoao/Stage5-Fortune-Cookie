const modal1 = document.querySelector(".modal-1")
const modal2 = document.querySelector(".modal-2")
const lockedCookie = document.querySelector(".locked-cookie")
const backModal1 = document.querySelector(".back-modal-1")

lockedCookie.addEventListener("click", toogleModal)
backModal1.addEventListener("click", toogleModal)

function toogleModal() {
  console.log("entrou")
  modal1.classList.toggle("hidden")
  modal2.classList.toggle("hidden")
}
