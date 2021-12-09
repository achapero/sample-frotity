import React from 'react'
import { connect } from 'frontity'

const pagePage = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]

    console.log('pagePage', data)

    const Html2React = libraries.html2react.Component

    return (
        <div>
            <h2>{post.title.rendered}</h2>
            <div
                dangerouslySetInnerHTML={{
                    __html: post.content.rendered
                }}
            />
            <Html2React html={post.content.rendered} />
        </div>
    )
}

export default connect(pagePage)