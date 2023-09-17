const apiUrl = "http://127.0.0.1:8000/api/small_project/";
const apiUrlBIg = "http://127.0.0.1:8000/api/big_project/";

const listarPublicaciones = async () => {
    try {
        const response = await fetch(apiUrl);
        const response2 = await fetch(apiUrlBIg)
        data2 = await response2.json()
        data = await response.json()
        console.log(data)
        console.log(data2)

    } catch (error) {
        console.log(error);
    }
}


listarPublicaciones()

