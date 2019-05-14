import React, {Component} from 'react'

class LongestString extends Component {
    constructor(){
        super()
        this.state={
            userInput: '',
            length: '',
            longestWord: ''
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    //Find the length of the longest word in a string. Return the length and the word.
    //["Javascript", "is", "fun"]
    longestString(val){
        let str = val.split(' ')
        console.log(str)
        let longest = 0
        let word = ''
        for(let i = 0; i< str.length; i++){
            if (str[i].length > longest){
                longest = str[i].length;
                word = str[i]
            }
        }
        this.setState({length:longest, longestWord: word})
    }



    render(){
     console.log()
        return(
            <div className="puzzleBox longestString">
                <h1>Longest String</h1>
                <input onChange={(e)=>this.handleChange(e.target.value)} className ="inputLine" />
                <button onClick={()=>{this.longestString(this.state.userInput)}} className ="confirmationButton">Find Longest</button>
                <span className = "resultsBox">{this.state.length}</span>
                <span className = "resultsBox">{this.state.longestWord}</span>
            </div>
        )
    }

}

export default LongestString