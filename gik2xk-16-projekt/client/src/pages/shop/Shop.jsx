import ResponsiveAppBar from "../../components/navigation/ResponsiveAppBar";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import theme from "../../theme/theme";

function Shop({ numberOfItems }) {
  return (
    <>
    <br></br>
    <br></br>
    <br></br>

       <div className="breadcumb_area bg-img" style={{backgroundImage: "url(../src/assets/img/bg-img/breadcumb.jpg)"}}>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12">
            <div className="page-title text-center">
              <h2>dresses</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Container
      sx={{ backgroundColor: theme.palette.tertiaryLight.main }}
      maxWidth="xl"
    >
      <ResponsiveAppBar numberOfItemsInCart={numberOfItems} />
      <Container className="my-5" maxWidth="xl">
        <Outlet />
      </Container>
    </Container>
    </>
  );
}

export default Shop;
