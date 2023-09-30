console.log("welcome to all");
var names,add_btn;
var arr=[]
names=document.querySelector('.enter_name');
add_btn=document.querySelector('.add_button');
var create_li=document.createElement('ul');
create_li.setAttribute('id','users');
create_li.setAttribute('class','unordered_list');
var li_child=create_li.appendChild('li');
li_child.setAttribute('class','li').

add_btn.addEventListener('click',()=>{
    let n1=names.value
    arr.push(n1)
    console.log(arr)
    names.value='';
})

// console.log(names.value)
// console.log(add_btn)