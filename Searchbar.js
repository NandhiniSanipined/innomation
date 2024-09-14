import React from 'react'

export default function Searchbar() {
  return (
    <>
    <div class="bujji" style={{marginLeft:"30%"}}>
        <h1>Search Country</h1>
        <form>
            <div class="card"  style={{marginTop:"3%",width:"30%"}}>
        <label>Country: </label><br></br>
            <input type="Search" name="Search" placeholder='Search by country'>
            </input>
            <select>
            <option>None</option>
                <option>India</option>
                <option>United States</option>
                <option>Canada</option>
                <option>Brazil</option>
                <option>United Kingdom</option>
                <option>Australia</option>
                <option>Germany</option>
                <option>France</option>
                <option>Italy</option>
                <option>Spain</option>
                <option>Japan</option>
                <option>China</option>
                <option>South Africa</option>
                <option>Russia</option>
                <option>Mexico</option>
                <option>Argentina</option>
                <option>Chile</option>
                <option>Colombia</option>
                <option>Peru</option>
                <option>Egypt</option>
                <option>Turkey</option>
            </select><br></br>
            <label>Capital: </label><br></br>
            <input type="Search" name="Search" placeholder='Search by country'>
            </input>
           <select>
           <option>None</option>
                <option>Washington, D.C.</option>
                <option>Ottawa</option>
                <option>Brasília</option>
                <option>London</option>
                <option>Canberra</option>
                <option>Berlin</option>
                <option>Paris</option>
                <option>Rome</option>
                <option>Madrid</option>
                <option>Tokyo</option>
                <option>Beijing</option>
                <option>New Delhi</option>
                <option>Pretoria</option>
                <option>Moscow</option>
                <option>Mexico City</option>
                <option>Buenos Aires</option>
                <option>Santiago</option>
                <option>Bogotá</option>
                <option>Lima</option>
                <option>Cairo</option>
                <option>Ankara</option>
           </select><br></br>
           <label>Population: </label><br></br>
           <input type="number" name="number"></input><br></br>
           <label>Language: </label>
           <input type="text" name="text"></input>
           <select>
           <option>None</option>
                <option>English</option>
                <option>French</option>
                <option>Portuguese</option>
                <option>German</option>
                <option>French</option>
                <option>Italian</option>
                <option>Spanish</option>
                <option>Japanese</option>
                <option>Mandarin</option>
                <option>Hindi</option>
                <option>Zulu</option>
                <option>Xhosa</option>
                <option>Afrikaans</option>
                <option>Russian</option>
                <option>Quechua</option>
                <option>Aymara</option>
                <option>Arabic</option>
                <option>Turkish</option>
                <option>Swahili</option>
                <option>Thai</option>
                <option>Malay</option>
           </select><br></br>
            </div>
        </form>
    </div>
    
    </>
  )
}
