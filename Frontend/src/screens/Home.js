import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

export default function Home() {

    const [foodCat,setFoodCat] = useState([])
    const [foodItem, setFoodItems] = useState([])
    // const [search, setSearch] = useState('')

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/auth/foodData", {
          // credentials: 'include',
          // Origin:"http://localhost:3000/login",
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
        });
        response = await response.json();
        //console.log(response[1], response[0])
        setFoodItems(response[0]);
        setFoodCat(response[1]);
      }
    
      useEffect(() => {
        loadData()
      }, [])

    return (
        <div>
            <div><Navbar /></div>
            <div><Carousel/></div>
            <div className='container'>
                {
                    foodCat !==[]
                    ? foodCat.map((data)=>{
                        return (
                            <div>Hello</div>
                        )
                    }):<div>""""""</div>
                }
                <Card/>
            </div>
            <div><Footer /> </div>
        </div>
    )
}
