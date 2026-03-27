async function getData() {
  const res = await fetch("http://localhost:9000/studdetails", 
    { method: "GET" },
    
);
  const data = await res.json();
  console.log(data);
}

getData();

