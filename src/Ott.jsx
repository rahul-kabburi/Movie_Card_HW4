import React from 'react'
import { IoMdShare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";

function Ott({data}) {
  return (
    <>
        <div className="wrapper">
              <div className="container">
                  {
                      data.map((obj, idx) => {
                          return <div key={idx} className='card'>
                              {/* Descreption */}
                              <div className="desc">
                                  <div className="title">
                                      <img src={obj.poster} alt="" />
                                      <div className="detail">
                                          <h2>{obj.name}</h2>
                                          <p className='release-date'>{obj.release}</p>
                                          <p>
                                              <span className='duration'>{obj.duration}</span><span>{obj.genre}</span>
                                          </p>
                                      </div>
                                  </div>

                                  <div className="details">
                                      <p>{obj.description}</p>
                                      <div className="icons">
                                          <IoMdShare />
                                          <FaRegHeart />
                                          <FaRegCommentAlt />
                                      </div>
                                  </div>
                              </div>
                              <div className="thumbnail">
                                  <img src={obj.thumbnail} alt="" />
                              </div>
                          </div>
                      })
                  }
              </div>
        </div>
    </>
  )
}

export default Ott
