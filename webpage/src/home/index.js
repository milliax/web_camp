import Layout from "../Layout"
import { useState, useEffect } from "react"
export default function HomeIndex() {
    const [pets, setPets] = useState([])

    async function getPets() {
        const res = await fetch("https://milliax.github.io/raw/web_dev/pets.json")
        const response = await res.json();

        console.log(response)
        setPets(response)

        // fetch("https://milliax.github.io/raw/web_dev/pets.json")
        //     .then(e => {
        //         // console.log(e)
        //         return e.json()
        //     })
        //     .then(response => {
        //         console.log(response)
        //     })
        // A();
        // B();
        // 過兩秒之後 印出A
        // 再過一秒 會印出B

        // javascript
        // 在這個程式中
        // 過一秒印出B 再過一秒印出A
    }

    useEffect(() => {
        getPets()
        // eslint-disable-next-line
    }, [])

    return (
        <Layout className="bg-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5 place-items-center">
                {pets.map((pet) => (
                    <div key={pet.name} className="w-44 h-32 bg-indigo-100 flex pt-3 pb-1 flex-col justify-between rounded-md shadow-md cursor-default select-none">
                        <div className="flex justify-center">
                            <img src={pet.imageURL} alt={`${pet.name}的照片`} className="w-20 h-20 object-cover rounded-lg" />
                        </div>
                        <div className="w-full text-center">
                            {pet.name} {pet.breed}
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

// function A() {
//     return setTimeout(("") => {
//         console.log("A")
//     }, 2000)
// }

// function B() {
//     return setTimeout(() => {
//         console.log("B")
//     }, 1000)
// }