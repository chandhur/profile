setTimeout(()=>{
    document.body.style.backgroundColor="pink" 
    },4000) ;

    setTimeout(()=>{
        document.body.style.backgroundColor="red" 
        },7000) ;

        setTimeout(()=>{
            document.body.style.backgroundColor="yellow" 
            },9000) ;
//---------------------------------------------------------  
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n)
 {
  showSlides(slideIndex += n);
}

function currentSlide(n) 
{
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
 
  if (n > slides.length)
  {
    slideIndex = 1                               
  }    
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++)
   {
    slides[i].style.display = "none";
   }
  slides[slideIndex-1].style.display = "block";  
  }
//---------------------------------image slide------------------------------//
function whatsapp(){
  var name=document.getElementById('name').value;
  var email=document.getElementById('email').value;
  var mobile=document.getElementById('phone').value;
  var message=document.getElementById('message').value; 

  var whatsappurl="https://wa.me/919965987143?text="
  +"Name of friend:"+name+"%0a"
  +"EMAIL-ID:"+email+"%0a"
  +"MOBILE-NUMBER:"+mobile+"%0a"
  +"message:"+message;

  window.open(whatsappurl,"_blank").focus();


  }

  //--------------------------------about me----------------------------//

  function aboutme()
  {
    var name=document.getElementById("page1");

    name.style.display="block";

  }

  function page2()
  {
    var name1=document.getElementById("page2");
      name1.style.display="block";
  }

  function page3()
  {
    var name2=document.getElementById("page3");
    name2.style.display="block";
  }
  function page4()
  {
    var name3=document.getElementById("page4");
    name3.style.display="block";
  }
  function aboutme1()
  {
    var name=document.getElementById("page1");
    var name1=document.getElementById("page2");
    var name2=document.getElementById("page3");
    var name3=document.getElementById("page4");
    name.style.display="block";
    name1.style.display="block";
    name2.style.display="block";
    name3.style.display="block";
}

  
