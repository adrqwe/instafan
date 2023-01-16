import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { IProductProps } from "./Product.types";
import {
  StyledBoxContainer,
  StyledBoxItem,
  StyledBoxItemData,
  StyledCardActions,
} from "./Products.style";
import { useTranslationContext } from "../../../../models/translationsContext/translationsContext";
import Modal from "../../../reusable/Modal/Modal.component";

const Product = ({ product, requestForSingleProduct }: IProductProps) => {
  const { translate } = useTranslationContext();
  const translations = translate("home");

  const renderPrice = () =>
    product.price === 0 ? (
      <Typography variant="h5">{translations.isFree}</Typography>
    ) : (
      <Typography variant="h5">
        {product.price} {translations.currency}
      </Typography>
    );

  return (
    <Grid item sm={6} lg={4} xl={3}>
      <Card sx={{ height: 350, position: "relative" }}>
        <CardMedia
          sx={{ height: "40%", objectFit: "cover" }}
          component="img"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" noWrap={true}>
            {product.title}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {product.description}
          </Typography>
          {renderPrice()}
        </CardContent>
        <StyledCardActions>
          <button
            onClick={() => requestForSingleProduct(product.slug)}
          ></button>
          <Modal icon={<AddIcon />}>
            <StyledBoxContainer>
              <StyledBoxItem>
                <Box sx={{ height: "50%" }}>
                  <img
                    src={product.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                  <StyledBoxItemData>
                    <Typography variant="h4" gutterBottom>
                      {product.title}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {product.description}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      {renderPrice()}
                    </Box>
                  </StyledBoxItemData>
                </Box>
              </StyledBoxItem>
              <StyledBoxItem>d</StyledBoxItem>
            </StyledBoxContainer>
          </Modal>
        </StyledCardActions>
      </Card>
    </Grid>
  );
};

export default Product;
