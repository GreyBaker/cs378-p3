import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({title, content, image_path, price}) => {
    return (
        <div className="row" id="menu-entry">
            <div className="col-4">
                <img src={image_path} alt={content} id="rounded-image"/>
            </div>
            <div className="col-8">
                <div className ="row">
                    <div className="col">
                        <h4>{title}</h4>
                        <p>{content}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-7"><b>${price}</b></div>
                    <div className="col-5">
                        <div className="text-center">
                            <button type="button" className="btn" id='add-button'><b>Add</b></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default MenuItem;
