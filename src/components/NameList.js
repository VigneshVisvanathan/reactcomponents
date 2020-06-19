import React from 'react'

function NameList() {
    const names =['Bruce','Clarke','Diana']
    const nameList = names.map(name=><h2>{name}</h2>)
    return (
        <div>
            {
                nameList
            }

            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}
        </div>
    )
}

export default NameList
