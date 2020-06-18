import React, { Component } from 'react'



class LifeCycleA extends Component {

constructor(props) {
    super(props)

    this.state = {
         name: 'Vicky'
    }
    console.log('Life cycle A constructor');
    
}

static getDerivedStateFromProps(props,state){
    console.log(('LifecycleA getDerivedStateFromProps'));
    return null

}

componentDidMount(){

    console.log("life A componentDidMount")    
}

shouldComponentUpdate(){
    console.log('life Cycle A SHOULDCOMP UPDATE');
    return true
}

getSnapshotBeforeUpdate(prevProps,prevState){
console.log('Lf A getsnapshotbefore update');
return null
}

componentDidUpdate(){
    console.log('LF A componentdidupdate');
    

}

    render() {
        console.log('Life A render')
        return (
            <div>
                
            </div>
        )
    }
}

export default LifeCycleA
