function getData() {
    // fetch('https://api.roadmap.sh/v1-login/')
    //   .then(response => response.json())
    //   .then(data => {
    //     // document.getElementById('response').textContent = data
    //     $("#response").text(data.address) 
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });
      var  url = 'https://api.roadmap.sh/v1-login';
      const data = {
        email: 'dfdf@gmail.com',
        password: 'gdfdfd'
      };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            $("#response").text(result.message)

            // Process the response data as needed
        })
        .catch(error => {
            console.error('Error:', error);
        });
}





