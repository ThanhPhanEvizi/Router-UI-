import { CardMedia, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { UiAnimation, Col, Row, Text } from "../../../components/elements";
import { OFFER_LIST } from "../../../constants";

interface OfferBoxProps {
  image: string;
  title: string;
  description: string;
}

const OfferBox = ({ image, title, description }: OfferBoxProps) => {
  return (
    <Col
      sx={{
        backgroundColor: "#0a0f23",
        padding: "20px 15px",
        borderRadius: "24px",
        color: "#cbcfe0",
        height: "100%",
      }}
    >
      <Row>
        <CardMedia
          component="img"
          src={image}
          sx={{ height: "3.5em", width: "3.5em", paddingTop: "10px" }}
        />
      </Row>
      <Text
        sx={{ padding: "15px 0px", fontSize: "1.25em", fontWeight: "bold" }}
      >
        {title}
      </Text>
      <Text sx={{ lineHeight: "1.5em" }}>{description}</Text>
    </Col>
  );
};

const Offer = () => {
  return (
    <Col
      sx={{
        minHeight: "100vh",
        backgroundColor: "#12172f",
        color: "white",
        padding: "50px 0px ",
      }}
    >
      <Container>
        <Col>
          <Col sx={{ alignItems: "center", marginBottom: "50px" }}>
            <Text sx={{ fontSize: "2.15em", fontWeight: "bold" }}>
              What does Berry offer?
            </Text>
            <Text sx={{ textAlign: "center" }}>
              Berry is a reliable choice for your admin panel needs, offering a
              wide range of
              <br /> features to easily manage your backend panel
            </Text>
          </Col>
          <Grid container rowSpacing={8} columnSpacing={4}>
            {OFFER_LIST.map((offer, index) => {
              const animationDuration = 1 + index / 5;
              return (
                <Grid key={index} item xs={4}>
                  <UiAnimation
                    animateIn="animate__bounceInUp"
                    duration={animationDuration}
                  >
                    <OfferBox
                      image={offer.image}
                      title={offer.title}
                      description={offer.description}
                    />
                  </UiAnimation>
                </Grid>
              );
            })}
          </Grid>
        </Col>
      </Container>
    </Col>
  );
};

export default Offer;
