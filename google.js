let search=document.querySelector('.search')
        let searchbtn=document.querySelector('.searchbtn')
        searchbtn.onclick=function(){
            let URL="https://www.google.com/search?q="+search.value;
            window.open(URL,"_self")
        }