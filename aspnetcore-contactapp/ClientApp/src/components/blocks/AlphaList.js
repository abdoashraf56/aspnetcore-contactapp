import React from 'react'
import AlphaButton from '../houses/AlphaButton'

class AlpahList extends React.Component {

     render() {
        const alpha = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
        return (
            <div className="alpha-list">
                {
                    alpha.map((k,i) => {
                        return <AlphaButton text={k} scrollTo={this.props.scrollTo} />
                    })
                }
            </div>
        )
    }
}

export default AlpahList