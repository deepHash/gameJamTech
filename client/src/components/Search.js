import React from 'react'

export default function Search({ handleInput }) {
    return (
        <section className="searchbox-wrap">
            <input 
                type="text" 
                placeholder="Search for a game..." 
                className="searchbox"
                onChange={handleInput}>
            </input> 
        </section>
    )
}
