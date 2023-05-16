import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant={"h1"}>h1 Heading</Typography>
      <Typography variant={"h2"}>h2 Heading</Typography>
      <Typography variant={"h3"}>h3 Heading</Typography>
      <Typography variant={"h4"} gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant={"h5"}>h5 Heading</Typography>
      <Typography variant={"h6"}>h6 Heading</Typography>

      <Typography variant={`subtitle1`}>Sub Title 1</Typography>
      <Typography variant={`subtitle2`}>Sub Title 2</Typography>

      <Typography variant={`body1`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic fugit
        repudiandae et beatae voluptatum dolorem natus, at inventore distinctio
        placeat dicta debitis ad odit assumenda, harum labore? Nobis,
        reiciendis?
      </Typography>
      <Typography variant={`body2`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptate
        iste, nesciunt nisi eius labore aliquam culpa ipsum assumenda rem. Eius
        obcaecati, laudantium voluptatibus consequatur nemo sed nesciunt sequi
        autem.
      </Typography>
    </div>
  );
};
