
// let p = fetch("https://immunizebuddy-backend-production.up.railway.app/doctor-Store/doctor-details")
// p.then((responce) => {
//     return responce.json();
// })
// .then (data => {
//     console.log(data)
//     data.forEach(user => {
//         const markup = `<li>${user.name}</li>`;
//         document.querySelector('ul').insertAdjacentHTML('beforeend',markup);
//     });
// })
// .catch(error => console.log(error));
// // }).then((value2) => {
// //     console.log(value2)
// //     value2.doctor_data.map((ele,i)=>{
// //         console.log(ele)
// //         var docutit=document.getElementById('Doctorname')
// //         // docutit.innerHTML=`${i+1} ${ele.blog_tittle}`
// //         // docutit.innerHTML=``
// //         var docdes=document.getElementById('Doctorname')
// //         // docutit.innerHTML=`${ele.short_Description}`
// //         // docdes.innerHTML=``
// //         // value2.Blogs_Data.forEach((item,i) => {
// //             const p = document.createElement('p');
// //             // const q = document.createElement('q');
// //             p.textContent = `${i+1}) ${ele.doctor_name}`;
// //             // q.textContent = `${ele.doctor_name}`;
// //             docutit.appendChild(p);
// //             // docdes.appendChild(q);
// //         // });
// //         console.log(ele)
// //     })
// // })


fetch("https://immunizebuddy-backend-production.up.railway.app/doctor-Store/doctor-details")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const ulElement = document.querySelector('ul'); // Make sure you have a 'ul' element in your HTML
    data.forEach((user) => {
      const liElement = document.createElement('li');
      liElement.textContent = user.name;
      ulElement.appendChild(liElement);
    });
  })
  .catch((error) => console.log(error));