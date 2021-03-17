let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]



btnAdd.onclick=function(){
  let addition = inptNewName.value
if (members.includes(inptNewName.value)) {
  lblOutput.value = "You are a member"
} else { 
  lblOutput.value = "You are not a member, adding"
  members.push(inptNewName.value)
}
}
