import React from 'react'

class Title extends React.Component{
    render(){
        return (
            <div>
                <div className="col-10 mx-auto my-2 text-center text-title">
                    <h1 className="text-uppercase font-weight-bold">
                        {this.props.name} <strong className="text-blue">
                            {this.props.title}
                        </strong>
                    </h1>
                </div>
            </div>
        )
    }
}

export default Title;