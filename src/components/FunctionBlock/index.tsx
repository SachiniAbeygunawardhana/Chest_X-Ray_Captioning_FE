import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Button } from "../../common/Button";
import TextArea from "../../common/TextArea";
// import { TextArea } from "../../common/TextArea";
// import { FunctionBlockSection, Content, ContentWrapper } from "./styles";
import { UploadIcon } from "../../common/UploadIcon";
import { Fade } from "react-awesome-reveal";
import {
  LeftContentSection,
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
  t,
}: FunctionBlockProps) => {

   const scrollTo = (id: string) => {
        const element = document.getElementById(id) as HTMLDivElement;
        element.scrollIntoView({
          behavior: "smooth",
        });
   };

  return (
    <LeftContentSection>
      <Fade direction="up">
        <Row justify="space-between" align="middle" >
            <h6>{t(title)}</h6>
            <Col lg={11} md={11} sm={11} xs={24}>
                <ContentWrapper>
                    <Content>{t(content)}</Content>

                    <UploadIcon src={image} width="50%" height="50%" />
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
    </LeftContentSection>
  );
};




// const FunctionBlock = ({ title, content, button, t }: FunctionBlockProps) => {
//   const scrollTo = (id: string) => {
//     const element = document.getElementById(id) as HTMLDivElement;
//     element.scrollIntoView({
//       behavior: "smooth",
//     });
//   };
//   return (
//     <FunctionBlockSection>
//       <Slide direction="up">
//         <Row justify="start" align="middle">
//           <ContentWrapper>
//             <Col lg={24} md={24} sm={24} xs={24}>
//               <h6>{t(title)}</h6>
//               <Content>{t(content)}</Content>
//               {button && (
//                 <Button name="submit" onClick={() => scrollTo("mission")}>
//                   {t(button)}
//                 </Button>
//               )}
//             </Col>
//           </ContentWrapper>
//         </Row>
//          <Row justify="space-between" align="middle" id={id}>
//                   <Col lg={11} md={11} sm={12} xs={24}>
//                     <SvgIcon src={icon} width="100%" height="100%" />
//                   </Col>
//                   <Col lg={11} md={11} sm={11} xs={24}>
//                     <ContentWrapper>
//                       <h6>{t(title)}</h6>
//                       <Content>{t(content)}</Content>
//                       <ServiceWrapper>
//                         <Row justify="space-between">
//                           {typeof section === "object" &&
//                             section.map((item: any, id: number) => {
//                               return (
//                                 <Col key={id} span={11}>
//                                   <SvgIcon src={item.icon} width="60px" height="60px" />
//                                   <MinTitle>{t(item.title)}</MinTitle>
//                                   <MinPara>{t(item.content)}</MinPara>
//                                 </Col>
//                               );
//                             })}
//                         </Row>
//                       </ServiceWrapper>
//                     </ContentWrapper>
//                   </Col>
//                 </Row>
//
// {/*  right section   */}
//
//                  <Row justify="space-between" align="middle" id={id}>
//                           <Col lg={11} md={11} sm={11} xs={24}>
//                             <ContentWrapper>
//                               <h6>{t(title)}</h6>
//                               <Content>{t(content)}</Content>
//                               <ButtonWrapper>
//                                 {typeof button === "object" &&
//                                   button.map((item: any, id: number) => {
//                                     return (
//                                       <Button
//                                         key={id}
//                                         color={item.color}
//                                         fixedWidth={true}
//                                         onClick={() => scrollTo("about")}
//                                       >
//                                         {t(item.title)}
//                                       </Button>
//                                     );
//                                   })}
//                               </ButtonWrapper>
//                             </ContentWrapper>
//                           </Col>
//                           <Col lg={11} md={11} sm={12} xs={24}>
//                             <SvgIcon src={icon} width="100%" height="100%" />
//                           </Col>
//                         </Row>
//       </Slide>
//     </FunctionBlockSection>
//   );
// };

export default withTranslation()(FunctionBlock);
