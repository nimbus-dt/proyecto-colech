import {
  Flex,
  Card,
  Image,
  Heading,
  Text,
  Badge,
  useBreakpointValue,
  Button,
} from "@aws-amplify/ui-react";
import heroIcon from "../assets/images/hero-icon.svg";

export function Home() {
  /* CONSTANTS */

  // responsiveBool is a boolean that is true if the screen size is small, medium, or large
  const responsiveBool = useBreakpointValue({
    base: true,
    small: true,
    medium: true,
    large: false,
    xl: false,
    xxl: false,
  });

  /* UI */
  const layout = (
    <Flex
      direction="column"
      width="100%"
      height="100vh"
      backgroundColor="#34548c"
      alignItems="center"
      alignContent="center"
    >
      <Card
        width={responsiveBool ? "90%" : "85%"}
        height={responsiveBool ? "fit-content" : "80%"}
        variation="elevated"
        marginTop="5%"
        marginBottom="5%"
      >
        <Flex
          direction={responsiveBool ? "column" : "row"}
          width="100%"
          height="100%"
          justifyContent={responsiveBool ? "center" : "center"}
          marginBottom="5%"
        >
          <Flex
            direction="column"
            width={responsiveBool ? "100%" : "50%"}
            height="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Image alt="Hero Icon" src={heroIcon} />
          </Flex>
          <Flex
            direction="column"
            width={responsiveBool ? "100%" : "50%"}
            height="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Heading
              level="3"
              fontWeight="bold"
              textAlign="center"
              width="100%"
            >
              HIAPA-ES
            </Heading>
            <Heading
              level="6"
              fontWeight="bold"
              textAlign="center"
              width="100%"
            >
              Familia Inteligencia Artificial Para la Política Aplicada
              de El Salvador
            </Heading>
            <Text textAlign="center" width="100%">
              Una herramienta de inteligencia artificial que permite guiar las
              politicas de nuestro pais a traves de tecnicas matematicas
              avanzadas.
            </Text>
            <Flex
              direction={responsiveBool ? "column" : "row"}
              justifyContent="space-between"
              width="100%"
              alignContent={responsiveBool ? "center" : "top"}
            >
              <Badge>Predicciones</Badge>
              <Badge>Por Ministerio</Badge>
              <Badge>Seguro</Badge>
              <Badge>Optimizaciones</Badge>
            </Flex>
            <Button
              variation="primary"
              onClick={() => {
                // redirect to youtube.com in another tab
                window.open("https://youtu.be/1nH2APt0Mg4", "_blank");
              }}
            >
              Watch Demo
            </Button>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );

  return layout;
}
