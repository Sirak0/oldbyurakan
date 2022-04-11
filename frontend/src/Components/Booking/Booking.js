import React, { useState } from "react";
import "./Booking.scss";
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import axios from "axios"

function Booking() {
    const [status,setStatus] = useState()
    const [color,setColor] = useState()
    const bookForm = useRef()
    const form = useRef()
    const button1 = useRef()
    const button2 = useRef()

    function open() {
        bookForm.current.style.display = "flex"
    }

    function close() {
        bookForm.current.style.display = "none"
    }

    async function book(e){
      e.preventDefault()
      const data = new FormData(form.current)
      var name = data.get("name")
      var surname = data.get("surname")
      var phone = data.get("tel")
      var arrival = data.get("arrival")
      var leave = data.get("leave")
      var type = data.get("type")
      var notes = data.get("notes")
      console.log(name,surname,phone,arrival,leave,type,notes);
      if(name.length < 2){
         setStatus("Խնդրում ենք գրեք ձեր անունը")
         setColor("orangered")
      }
      else if(surname.length < 2){
        setStatus("Խնդրում ենք գրեք ձեր ազգանունը")
        setColor("orangered")
     }
     else if(!phone.match(/^[0-9]+$/)){
        setStatus("Խնդրում ենք գրել ձեր հեռախոսահամարը")
        setColor("orangered")
     }
     else if(arrival === undefined){
        setStatus("Խնդրում ենք գրեք ժամանման օրը")
        setColor("orangered")
     }
     else if(leave === undefined){
       setStatus("Խնդրում ենք գրեք հեռանալու օրը")
       setColor("orangered")
    }
    else if(type.length < 1){
        setStatus("Խնդրում ենք գրեք սենյակի տեսակը")
        setColor("orangered")
     }
    else{
       await axios.post("/book",{
           name,
           surname,
           phone,
           arrival,
           leave,
           notes,
           type
       }).then((resp) => {
           if(typeof(resp.data)){
            setStatus(resp.data)
            setColor("green")
            form.current.style = "display:none"
            button1.current.style = "display:none"
            button2.current.style = "display:none"
           }
       })
    }
    }
 
    async function count(e){
        e.preventDefault()
        const data = new FormData(form.current)
        var arrival = new Date(data.get("arrival"))
        var leave = new Date(data.get("leave"))
        var type = data.get("type")
        console.log(arrival,leave,type);
        if(arrival === ""){
          setStatus("Խնդրում ենք գրեք ժամանման օրը")
          setColor("orangered")
       }
       else if(leave === ""){
         setStatus("Խնդրում ենք գրեք հեռանալու օրը")
         setColor("orangered")
      }
      else if(type.length < 1){
          setStatus("Խնդրում ենք գրեք սենյակի տեսակը")
          setColor("orangered")
       }
      else{
        var Difference_In_Time = leave.getTime() - arrival.getTime();
        var days = Difference_In_Time / (1000 * 3600 * 24);
        setStatus("...")
         await axios.post("/countPrice",{
             days,
             type
         }).then((resp) => {
             setStatus(resp.data)
             setColor("green")
         }).catch((e) => {
             setStatus("Սխալ")
         })
      }
      }
    return (
        <div className="book-cont">
            <div className="book-button" onClick={open}><h5>Ամրագրել</h5></div>

            <div className="book-form" ref={bookForm}>
                <div className="icone1-div" onClick={close}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
                <div className="book-inputs">
                    <h3>Ամրագրում</h3>
                    <form ref={form}>
                   <label htmlFor={"name"} > Անուն <br></br>
                   <input className="book-input" type="text" name="name" placeholder="Անուն" id="name"></input>
                   </label>
                   <br></br>
                   <label htmlFor={"lastname"}> Ազգանուն <br></br>
                   <input className="book-input" type="text" name="surname" placeholder="Ազգանուն" id="lastname"></input>
                   </label>
                   <br></br>
                   <label htmlFor={"tel"}> Հեռ. <br></br>
                   <input className="book-input" type="tel" name="tel" placeholder="Հեռ․" id="tel" ></input>
                   </label>
                   <br></br>
                   <div style={{display:"flex"}}>
                   <label htmlFor={"date"} style={{marginRight:"35px"}}>Ժամանման Ամսաթիվ <br></br>
                    <input className="book-input-date" name="arrival" type="date" id="date"></input>
                    </label>
                    <br></br>
                    <label htmlFor={"date"}>Ժամանման Ամսաթիվ <br></br>
                    <input className="book-input-date" name="leave" type="date" id="date"></input>
                    </label>
                   </div>
                   {/* <label htmlFor={"days"}>Օրերի Քանակ <br></br>
                   <select className="book-input" id="days">
                       <option value={1}>1</option>
                       <option value={2}>2</option>
                       <option value={3}>3</option>
                       <option value={4}>4</option>
                       <option value={5}>5</option>
                       <option value={6}>6</option>
                       <option value={7}>7</option>
                       
                   </select>
                   </label> */}
                   <label htmlFor={"room"}>Սենյակի Տեսակ<br></br>
                   <select default="" className="book-input" name="type" id="room">
                       <option value="">Սենյակի տեսակը</option>
                       <option value={2}>2-անձի համար</option>
                       <option value={3}>3-անձի համար</option>
                       <option value={4}>4-անձի համար</option>
                   </select>
                   </label>
                   <br></br>
                   <label htmlFor={"notes"}>Նշումներ<br></br>
                   <textarea name="notes" className="book-input textarea" id="notes"></textarea>
                   </label>
                   </form>
                   <p style={{color}}>{status}</p>
                   <button className="book-button2" ref={button1} onClick={count}>Հաշվել արժեքը</button>
                   <button className="book-button2" ref={button2} onClick={book}>Ամրագրել</button>
                </div>

            </div>
        </div>
    )
}
export default Booking;