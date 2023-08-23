function showMore() {
  const buttonShowMore = document.getElementById('show-more')
  const hiddenItems = Array.from(document.getElementsByClassName('next-3'))

  buttonShowMore.addEventListener('click', () =>{
    hiddenItems.forEach(project => {
      project.classList.toggle('hide-projects')
    })
    if (buttonShowMore.innerHTML === 'Menos projetos') {
      buttonShowMore.innerHTML = 'Mais projetos'
    } else {
      buttonShowMore.innerHTML = 'Menos projetos'
    }
  })

}

export {showMore}