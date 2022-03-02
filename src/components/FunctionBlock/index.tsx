import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Button } from "../../common/Button";
import TextArea from "../../common/TextArea";
import { UploadIcon } from "../../common/UploadIcon";
import { Fade } from "react-awesome-reveal";
import {
  FunctionBlockSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
} from "./styles";


interface FunctionBlockProps {
  title: string;
  content: string;
  image? :any;
  button: string;
  uploadButton:  string;
  id: string;
  t: any;
  originalImage?: string;
  originalLink?: string;
  clicked?: boolean;
  uploadImage?: boolean;

}


const FunctionBlock = ({
  title,
  content,
  image,
  button,
  uploadButton,
  id,
  t,

}: FunctionBlockProps) => {

   const scrollTo = (id: string) => {
        const element = document.getElementById(id) as HTMLDivElement;
        element.scrollIntoView({
          behavior: "smooth",
        });
   };



  return (
    <FunctionBlockSection>
      <Fade direction="up">
        <Row justify="space-between" align="middle" >
            <h6>{t(title)}</h6>
            <Col lg={11} md={11} sm={11} xs={24}>
                <ContentWrapper>
                    <Content>{t(content)}</Content>

                    <UploadIcon src={image} width="50%" height="50%" />

                     {uploadButton && (
                           <Button name="submit" onClick={() => scrollTo("mission")}>
                                {t(uploadButton)}
                           </Button>
                      )}

                     {button && (
                           <Button name="submit" onClick={() => scrollTo("mission")}>
                                {t(button)}
                           </Button>
                     )}

                </ContentWrapper>
            </Col>
            <Col>

{/*                             {caption && ( */}
{/*                                        <TextArea name="textarea" > */}
{/*                                             {t(button)} */}
{/*                                        </TextArea> */}
{/*                              )} */}

            </Col>
        </Row>
      </Fade>
    </FunctionBlockSection>
  );
};

export default withTranslation()(FunctionBlock);
