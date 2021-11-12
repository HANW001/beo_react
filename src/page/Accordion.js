import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            style={{
              fontSize: "14px",
              fontFamily: "Pretendard",
              fontWeight: "bold",
            }}
          >
            Q 선물 추천은 무료인가요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: " #FEF7F2" }}>
          <Typography
            style={{
              fontSize: "14px",
              fontFamily: "Pretendard",
            }}
          >
            네 물론입니다. 베오의 모든 서비스는 무료로 제공되니 편하게 선물
            제안서 받아보세요.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            style={{
              fontSize: "14px",
              fontFamily: "Pretendard",
              fontWeight: "bold",
            }}
          >
            Q 선물 받는 분이 정말 만족할까요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: " #FEF7F2" }}>
          <Typography
            style={{
              fontSize: "14px",
              fontFamily: "Pretendard",
            }}
          >
            수많은 선물 경험과 아이디어를 가진 선물 매니저들이 깐깐하게 선별한
            아이템들을 개인화 추천 알고리즘을 통해 추천드리니 걱정 마세요.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography
            style={{
              fontSize: "14px",
              fontFamily: "Pretendard",
              fontWeight: "bold",
            }}
          >
            Q 광고 없는 추천은 뭐가 좋은거죠?
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: " #FEF7F2" }}>
          <Typography
            style={{
              fontSize: "14px",
              fontFamily: "Pretendard",
            }}
          >
            광고가 없기에 오직 최적의 선물을 추천드리는 것에만 집중할 수
            있습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
