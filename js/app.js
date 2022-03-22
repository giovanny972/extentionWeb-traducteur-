var paragraphers = document.getElementsByTagName('p');

const data = {
    Traduction :"",
    Description :"",
    Lang : "",
}

const card = `
    <div>
        <h2>
            Traduction : ${data.Traduction}
        </h2>
        <h2>
            Description : ${data.Description}
        </h2>
        <h2>
            Lang : ${data.Lang}
        </h2>
    </div>
`
document.querySelector('content');