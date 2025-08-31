import { Button } from "react-bootstrap"
export default function Pagination({nextpage,previouspage}){
    
    return(
            <center>
                {previouspage && <Button className="m-4" variant="outline-primary" onClick={previouspage}>Previous</Button>}
                {nextpage && <Button className="m-4" variant="outline-primary" onClick={nextpage}>Next</Button>}
            </center>
    )
}      
// import { Button, ButtonGroup, Container } from "react-bootstrap";

// export default function Pagination({ nextPage, previousPage, isLoading }) {
//   return (
//     <Container className="d-flex justify-content-center my-4">
//       <ButtonGroup>
//         <Button
//           variant="secondary"
//           onClick={previousPage}
//           disabled={!previousPage || isLoading}
//         >
//           Previous
//         </Button>

//         <Button
//           variant="primary"
//           onClick={nextPage}
//           disabled={!nextPage || isLoading}
//         >
//           Next
//         </Button>
//       </ButtonGroup>
//     </Container>
//   );
// }
