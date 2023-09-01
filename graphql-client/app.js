async function fetchGretting(){
    const response = await fetch("http://localhost:4000/", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: 'query {greeting}'
        })
    })
    const {data} = await response.json();
    console.log({data})
    return data.greeting;
}

fetchGretting().then((greeting) => {
    console.log({greeting})
    document.getElementById('greeting').textContent = greeting
})