import React, { Component } from "react";



class LikeButton  extends Component {
  state = {
    num: 0,
    val: 'Me gusta'
  }

  incrementLikes = () => {
    if (this.state.num === 0) {
      return this.setState({
        num: this.state.num + 1,
        val: 'Me gusta'
      })
    } else {
      return this.setState({
        num: this.state.num + 1,
        val: 'MeGusta'
      })
    }
  }
  render() {
    return (
      <div className="App" >
        <button 
        onClick={this.incrementLikes}
        class="flex-nowrap"
        >
          {this.state.num} 
          <img src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668609505/Donde-Suena-Assets/reshot-icon-horn-ZYFECLUMTD_cajil8.svg" alt="like icon" class="w-7 h-7"/>{this.state.val}</button>
      </div>
    )
  }
}

export default LikeButton