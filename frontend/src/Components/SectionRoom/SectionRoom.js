import React, { useEffect, useState } from "react";
import "./SectionRoom.scss";
import "./SectionRoom.responsive.scss";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios"



function SectionRoom() {
  const location = useLocation()
  const navigate = useNavigate()
  const [src, setSrc] = useState()
  const [src1, setSrc1] = useState()
  const [guests, setGuests] = useState("..")
  console.log(location)
  const [price, setPrice] = useState("...")
  useEffect(async () => {
    if (location.state === null) {
      navigate("/")
    } else {
      await axios.get(`/type:${location.state.guests}`).then((resp) => {
        setPrice(resp.data)
      })
      setSrc(location.state.url)
      setSrc1(location.state.url2)
      setGuests(location.state.guests)
    }

  }, [])
  return (
    <div className="sectionroom-cont">
      {/* <div style={{display:"flex",height:"auto"}}> */}
      <div style={{ display: "flex", flexWrap: "wrap", height: "auto" }}>
        <div className="image-div">
          <div className="image-room-div">
            <img className="image-room" src={src} alt="oldbyurakan"></img>
          </div>
        </div>
        <div className="image-div">
          <div className="image-room-div">
            <img className="image-room" src={src1} alt="hostel room"></img>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className="text-div">
        <p className="price" style={{ color: "white" }}><span style={{ color: "green" }}>Տեղերի քանակը՝ </span> {guests}</p>
      </div>
      <div className="text-div">
        <p className="price" style={{ color: "white" }}><span style={{ color: "green" }}>Արժեքը` </span> {price}դրամ/օր</p>
      </div>
    </div>
  )
}
export default SectionRoom;