const axios = require('axios').default;

const req = axios.get("https://ahassaneinn-5000.theiadocker-0-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/isbn/");
console.log(req);
req.then(resp => {
    let booklist = resp.data;
    console.log(books[isbn]);
})
.catch(err => {
    console.log(err.toString())
    //This will console log the error withe the code. eg. Error: Request failed with status code 404
});
