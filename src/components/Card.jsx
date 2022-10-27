import React from 'react'
import { TwitterTimelineEmbed } from "react-twitter-embed"
import "../style/Card.css"

export const Card = ({lists}) => {
    return (
        <div className='card'>     
            {lists.map((list) => {
                return(
                    <div key={list.id}>
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName={list.name}
                            options={{height: 500, width: "90%"}}
                        />
                    </div>
                )
            })}   
            
        </div>
    )
}
