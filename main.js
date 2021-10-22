const linksSocialMedia = { 
    github: 'brunoviniciusdev',
    youtube: 'UCu0aQC_sfdgV4NhFCirlXDQ',
    facebook: 'profile.php?id=100073731925979',
    instagram: 'brunoviniciusdev',
    twitter: 'BrunoVi01746745'
  }

  function changeLinksSocialMedia() 
   {for( let li of socialLinks.children)
    { const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia [social]}`
   }
 
}
  changeLinksSocialMedia()

function getGithubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then (response => response.json())
    .then (data =>{userName.textContent = data.name
    userBio.textContent = data.bio
    profilePhoto.src = data.avatar_url
    userLink.href = data.html_url
    userLogin.textContent = data.login
    })
    
}
getGithubProfileInfos()