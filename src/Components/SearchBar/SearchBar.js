import React,  {useState} from 'react'
import './SearchBar.css'
import Glasses from "../../assets/icon-search.svg"
import {useDispatch} from "react-redux"
import { getGitHubData } from '../../redux/reducers/dataGithubReducer'
import {useSelector} from "react-redux"

export default function SearchBar() {
  const [username, setUsername] = useState("")

  const data = useSelector(state => state.data)
 

  const dispatch = useDispatch();
  const getData = (e) => {
    e.preventDefault();
    dispatch(getGitHubData(username))


    
  }

  return (
    <>
    <form onSubmit={getData}>
      <div className='search-container'>
        <label htmlFor="search"><img src={Glasses} alt="icon" className="glasses" /></label>
        <input type="text" placeholder='Search GitHub username…' id='search' onChange={(e) => setUsername(e.target.value)}/>
      </div>
      {data.message === "Not Found" ? <p className='no-results'>No results</p> : <p></p>}
      <button className='button-search'>Search</button>
    </form>



    </>
  )
}
