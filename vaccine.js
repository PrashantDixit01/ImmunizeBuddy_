
let p = fetch("immunizebuddy-backend-production.up.railway.app/Blogs-Api/blogs-data")
p.then((responce) => {
    return responce.json()
}).then((value2) => {
    value2.Blogs_Data.map((ele,i)=>{
        var docutit=document.getElementById('Blogtitle')
        // docutit.innerHTML=`${i+1} ${ele.blog_tittle}`
        // docutit.innerHTML=``
        var docdes=document.getElementById('Blogdetails')
        // docutit.innerHTML=`${ele.short_Description}`
        // docdes.innerHTML=``
        // value2.Blogs_Data.forEach((item,i) => {
            const p = document.createElement('p');
            const q = document.createElement('q');
            p.textContent = `${i+1}) ${ele.blog_tittle}`;
            q.textContent = `${ele.short_Description}`;
            docutit.appendChild(p);
            docdes.appendChild(q);
        // });
        console.log(ele)
    })
})
