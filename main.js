/**
 * Objeto que contem o User de cada rede social
 * \/\/\/\/\/\/\/
 */

const LinksSocialMedia = {
  github: 'bruno9800',
  youtube: 'bruno9800m',
  facebook: 'profile.php?id=100000946010861',
  instagram: 'bruno_mat_',
  twitter: 'brunOpe_e'
}
/**
 * Função para Alterar os links
 * =============>
 * Essa função cria um elemento "li" apra cada filho dentro de <ul id="socialLinks>"
 * 
 * Armazena a classe desse elemento na constante "social"
 * E dentro do primeiro Filho do elemento "li" ele adiciona um href com o valor do link 
 */

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks() // executa a função


/**
 * Função que recebe o dono do crachá
 * 
 * nela é alterada
 *  => imagem
 *  => nome e nick
 *  => link do gitHub
 * 
 * Como ?
 *  => a função armazena a URL da API do usuario gitHub contido no Objeto "LinksSocialMedia"
 *  => Coleta o conteúdo dessa URL com a função fetch()
 *  => Transforma em Json
 *  => e modifica os valores de cada "ID" Pedido (UserName, UserBio, ..., UserLogin)
 * 
 */

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
// executa essa função