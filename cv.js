// Permet de modifier la valeur de la progress bar, lorsqu'on scroll			
function moveProgressBar() {
          var s = window.scrollY,
           d = document.body.offsetHeight,
           c = window.innerHeight;
           scrollPercent = (s / (d-c)) * 100;
           var deplacement = scrollPercent;

		   document.getElementById('progress_bar').value = deplacement;

         }
// Peremt de scroller lorsque la valeur de la progress bar est modifiée		 
function moveScroll() {
		 var progress = document.getElementById('progress_bar').value; 
		 var d = document.body.offsetHeight;
         var c = window.innerHeight;
		 var value = (progress * (d-c))/100
		 window.scroll(0, value);
		 }
		 
 /* Fonction qui permet de gérer l'apparition des différentes parties du cv
     Lors d'un clic sur une partie, ça se cache, et lors d'un 2ème re-clic, ça réapparait 
 */
 function toggleMe(e){
            if(e.style.display=="none"){
            e.style.display="block"
            }
            else{
            e.style.display="none"
            }
			return true;
            }
