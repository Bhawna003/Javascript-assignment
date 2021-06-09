function fun()
            {
               var a=document.getElementById("text1").value;
               var b=document.getElementById("find1").value;
               var c=document.getElementById("replace1").value;
               var result=a.replace(b,c);
               alert("New string is: "+ result);
            }