 //declare an array of images
 var myImagesArray = ["Website/Images/IMG_0018.jpg","Website/Images/IMG_1020.jpeg","Website/Images/IMG_0858.jpg"];



 //make a slide to display the images
 var ImageNumber = 0;
 var difference = myImagesArray.length -1;

 var delay = 500;
 var lock = false;
 var run;

 function ChangeImages(direction)
 {//begin function

     ImageNumber = ImageNumber + direction;

     if(ImageNumber > difference)
     {//begin inner first if
         ImageNumber = 0;
     }//end inner first if

     if(ImageNumber < 0)
     {//begin inner second if
         ImageNumber = difference;
     }//end inner second if
     document.getElementById('slideshow').src = myImagesArray[ImageNumber];


 }//end function

 function first()
 {//begin function
     ImageNumber = 0;
     document.getElementById('slideshow').src = myImagesArray[ImageNumber];

 }//end function

 function last()
 {//begin function
     ImageNumber = myImagesArray.length -1;
     document.getElementById('slideshow').src = myImagesArray[ImageNumber];

 }//end function


 function auto()
 {//begin function
     // if it's currently scrolling do this
     if(lock == true)
     {//begin if
         lock = false;
         window.clearInterval(run);
     }//end if
     // if the function isn't scrolling do this
     else if(lock == false)
     {//begin else if
         lock = true;
         run = setInterval("ChangeImages(1)", delay);

     }//end else if


 }//end function

 //Slide down Panel
 $(document).ready(function(){
   $("#flip").click(function(){
     $("#panel").slideToggle("slow");
   });
 });



 function ChangeImages2()
 {//begin function


     ImageNumber = document.getElementById("slideselect").selectedIndex -1;
     if(ImageNumber < 0)
     {//begin if
         ImageNumber = 0;
     }//end if
     document.getElementById('slideshow').src = myImagesArray[ImageNumber];

 }//end function
