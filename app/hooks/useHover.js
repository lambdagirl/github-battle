import React from 'react'

export default function useHover(){
    const [hovering, useHovering] = React.useState(false)
    const onMouseOver = () => useHovering(true);
    const onMouseOut = () => useHovering(false);
    return [hovering, { onMouseOver, onMouseOut }];
}