const heading = document.querySelector('#more_about_us h2')
let next = document.querySelector('#after')
let previous = document.querySelector('#before')
const paragraph = document.querySelector('#more_about_us p')
let blocks_container = document.querySelector('#blocks_container')
const blocks = document.querySelectorAll('.block')

const cdci_members = {
  membro1: { Nome: 'Prof. Paulo Tumba', sexo: 'M' },
  membro2: { Nome: 'Prof. Júlio Barros', sexo: 'M' },
  membro3: { Nome: 'Maguinara Campos', sexo: 'F' },
  membro4: { Nome: 'Isabel Solendo', sexo: 'F' },
  membro5: { Nome: 'Horácio Manuel', sexo: 'M' },
  membro6: { Nome: 'Mário Muondo', sexo: 'M' },
  membro7: { Nome: 'Ludileia Cutambo', sexo: 'F' },
  membro8: { Nome: 'Igor Semedo', sexo: 'M' },
  membro9: { Nome: 'Tomás Mendes', sexo: 'M' },
  membro10: { Nome: 'Gabriel Ângelo', sexo: 'M' },
  membro11: { Nome: 'Keith Smith', sexo: 'M' },
  membro12: { Nome: 'Dissoloquele Bengui', sexo: 'M' },
  membro13: { Nome: 'Laurindo Afonso', sexo: 'M' },
  membro14: { Nome: 'Abner Lourenço', sexo: 'M' },
  membro15: { Nome: 'Nicolau Miguel', sexo: 'M' },
  membro16: { Nome: 'Noé Dombache', sexo: 'M' },
  membro17: { Nome: 'Josemar Silva', sexo: 'M' },
  membro18: { Nome: 'Júlio Vapor', sexo: 'M' },
}

console.log(screen.width)

const escrevendo = () => {
  heading.style.animation = 'typing 1s steps(13, end)'
  heading.style.width = '30%'
}

const elevando = () => {
  heading.style.transform = 'translate(0, 0px)'
}

const tornando_visivel = () => {
  paragraph.style.marginBottom = '20%'
}

class Member {
  constructor(nome, sexo) {
    this.nome = nome
    this.sexo = sexo
    this.imgSrc = this.setImage()
    this.createMemberBlock()
  }

  setImage() {
    return this.sexo === 'F'
      ? '/works/CDCI/imgs/undraw_profile-pic_fatv.svg'
      : '/works/CDCI/imgs/undraw_pic-profile_nr49.svg'
  }

  createMemberBlock() {
    const block = this.createElement('div', { class: 'block swiper-slide' })
    const blockImg = this.createElement('img', { src: this.imgSrc })
    const pNome = this.createElement('p', { class: 'nome' }, `${this.nome}`)

    const blockArticle = this.createElement('article', { class: 'valencias' })
    const blockArticleH3 = this.createElement('h3', {}, 'Valências')
    const list = this.createElement('ul')

    blockArticle.append(blockArticleH3, list)
    block.append(blockImg, pNome, blockArticle)

    blocks_container.appendChild(block)
  }

  createElement(tag, attributes = {}, innerHTML = '') {
    const element = document.createElement(tag)
    for (const attr in attributes) {
      element.setAttribute(attr, attributes[attr])
    }
    element.innerHTML = innerHTML
    return element
  }
}

for (const key in cdci_members) {
  if (Object.prototype.hasOwnProperty.call(cdci_members, key)) {
    new Member(cdci_members[key].Nome, cdci_members[key].sexo)
  }
}

new Swiper('.wraper', {
  loop: true,
  spaceBetween: 100,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    680: {
      slidesPerView: 2,
    },
    820: {
      slidesPerView: 3,
    },
    1500: {
      slidesPerView: 4,
    },
  },
})

const mediaQuery = window.matchMedia('(max-width: 480px)')
function handleTabletChange(e) {
  if (e.matches) {
    let h1 = document.querySelector('.bg_division h1')
    h1.innerHTML = 'Promovendo a inovação tecnológica'
    let newLiContainer = document.querySelector('header > nav > ul')
    let newLi = document.createElement('li')
    let liLink = document.createElement('a', { href: '#more_about_us' })
    newLi.appendChild(liLink)
    newLiContainer.appendChild(newLi)
  } else {
    setTimeout(() => {
      escrevendo()
      setTimeout(elevando, 1300)
      setTimeout(tornando_visivel, 1500)
    }, 900)
  }
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)
