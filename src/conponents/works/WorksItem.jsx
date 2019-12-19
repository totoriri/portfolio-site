import React from "react"

const WorksItem = ({img}) => {
    return (
        <div className="works_item">
                <img src={img} alt="works_img" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis doloremque soluta numquam itaque rem laboriosam necessitatibus quis possimus amet totam autem quod voluptates dolorem illum, similique alias eligendi excepturi sequi.</p>
            </div>
    )
}
export default WorksItem;