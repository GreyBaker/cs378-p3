import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
function MenuLine ({title, content, image_path, price, count, setCount, id}) {


    function protectedDecrement() {
        if (count > 0) {
            setCount(id, count - 1)
        }
    }


    return (
        <div className="row" id="menu-entry">
            <div className="col-4">
                <img src={image_path} alt={content} id="rounded-image"/>
            </div>
            <div className="col-8">
                <div className ="row">
                    <div className="col-7">
                        <h4>{title}</h4>
                    </div>
                    <div className="col-5">
                        <p>${price}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>{content}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-9">
                        {/* <div className="text-center"> */}
                            <button type="button" className="btn" id='add-button' onClick={protectedDecrement}><b>-</b></button>
                            &nbsp;&nbsp;{count}&nbsp;
                            <button type="button" className="btn" id='add-button' onClick={() => (setCount(id, count + 1))}><b>+</b></button>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>

    )
};

export default MenuLine;
