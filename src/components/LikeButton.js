import React, { useState } from "react";


const LikeButton = () => {
  return (
   
     state = {
       count: 0
     }

     incrementMe = () => {
       let newCount = this.state.count = + 1
       this.setSteate({
         count: newCount
       })
     }


    <div>
        <p> Hello World! </p>
       <button onClick={this.incrementMe}> Like: {this.state.count} </button>
    </div>

  )
}

export default LikeButton