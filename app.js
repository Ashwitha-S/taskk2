// document.getElementById("struct").addEventListener('click',loaddata);


function loaddata()
{
    const xhr= new XMLHttpRequest();
    xhr.open('GET','get.json',true);
    xhr.onload=function()
    {
        if(this.status==200 )
        {
          // document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
          const data=JSON.parse(this.responseText);
          let output=` `;
          const structure=`
          <li class="smallbox">\
                        <div class="boxheaddiv">\
                            <p class="boxheading ">{heading1}\
                                <br> {heading2}\
                            </p>\
                            <p class="subheadingbox ">{subheading}</p>\
                            <p class="lastlinebox ">{lastline}</p>\
                        </div>\
                        <div class="boxfooter">\
                            <p class="basicclass ">\
                                <img  src="images/level.png" alt="error">Basic</p>\
                            <p class="timeclass">\
                                <img  src="images/time.png" alt="error">45 mins</p>\
                        </div>\
                    </li>`
                    for(var i=0;i<data.length;i++)
                    {
                        output+=structure.replace('{heading1}',data[i].heading1).replace('{heading2}',data[i].heading2).replace('{subheading}',data[i].subheading).replace('{lastline}',data[i].lastline);
                    }
          
            
            document.getElementById("struct").innerHTML=output;
        }
    }
    xhr.send();
}





$(document).ready(function(){
    $(".chat-closed").on("click",function(e){
        $(".chat-header,.chat-content").removeClass("hide");
        $(this).addClass("hide");
    });

    $(".chat-header").on("click",function(e){
        $(".chat-header,.chat-content").addClass("hide");
        $(".chat-closed").removeClass("hide");
    });
});






