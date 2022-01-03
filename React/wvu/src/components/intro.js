
// A component is a re-usable 'chunk' of html/css/js
// It is a custom html tag
// Compoenet functions MUST begin with a capital letter
// A functional component is a function that RETURNS JSX

export default function Intro(){

    // You must ALWAYS return a single root element from a functional component
    // <> </> react fragment tags. meaningless tags used to create a root element
    return(<>
        <h1>Welcome to the WVU office</h1>
        <p>The WVU office is located in Morgantown WV.</p>
    </>)

}