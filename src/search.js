
import page from './page';

function search(){


    let src1 = document.getElementById("loc")
    src1.addEventListener('keypress',function(event) {
        if (event.key === "Enter") {
            let src2 = document.getElementById("loc").value;
            page(src2);
            src1.value = "";
        }
      });
      

   

}

export default search;