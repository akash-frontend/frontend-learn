import React from "react";
import { useRef } from "react";

export default function KittyGallery() {
  const galleryRef = useRef(null);
  const index = useRef(0);
  function showNextImage() {
    // console.log(galleryRef.current);
    // console.log("without ref", document.querySelector("ul").querySelectorAll(".image"));
    // console.log(imageList.length); 3
    // We convert ul tag to nodelist to use it like an array  
    const imageList = galleryRef.current.querySelectorAll(".image");
    index.current = index.current + 1 >= imageList.length ? 0 : index.current + 1;
    imageList[index.current].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
  return (
    <section>
      <h2>Kitty Gallery</h2>
      <button onClick={showNextImage}>Next</button>
      <ul ref={galleryRef} className="gallery">
        <li className="image">
          <img src="https://placekitten.com/g/200/300" alt="" />
        </li>
        <li className="image">
          <img src="https://placekitten.com/g/200/250" alt="" />
        </li>
        <li className="image">
          <img src="https://placekitten.com/g/300/300" alt="" />
        </li>
      </ul>
    </section>
  );
}





// querySelectorAll() returns a  NodeList representing a list of the document's 
// elements that match the specified group of selectors.

// A node list is a list of nodes that are contained within an HTML document.

// In htmldom nodes are everything
// nodes are whitespace,nodes can be simply text inside of an element

// A NodeList is not always live(static), and will not always be updated 
// if the underlying document changes.

// A NodeList has access to the array methods like forEach etc,
// which is useful when you want to iterate through the nodes.







// scrollIntoView()
// Scroll element both horizontally and vertically 

// scrollIntoView({
//     behavior: "smooth",
//     block: "nearest",
//     inline: "center",
//   })


// nearest default value (scroll little bit less than center)
// block is for vertical
// inline for horizontal