import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DescriptionIcon from '@mui/icons-material/Description';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ArticleIcon from '@mui/icons-material/Article';
import Button from '@mui/material/Button';
import CardWithRadius from "../UI/CardWithRadius";
import Box from '@mui/material/Box';
import classes from "../UI/CardWithRadius.module.css";
import styles from "./InvoiceProject.module.css";
import {useNavigate} from 'react-router-dom';
import { GetProjectById } from '../../services/ProjectServices';
import DocumentUpload from './InvoiceProjectDocumentUpload';


const InvoiceProject = (props) => {

  const nav = useNavigate();


  const handleClick = async () =>{
    const data = await GetProjectById(props.projectId);
    localStorage.setItem("projectId", JSON.stringify(data));
    nav("/createInvoice");
  }
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  
  
  return (
    <CardWithRadius className={classes.blueCard}>
      <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Project Details
          </Typography>

          <DescriptionIcon sx={{ width: '80%',fontSize:"60px"}}></DescriptionIcon>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography> Project Name: {props.projectName}</Typography>
          <Typography> Project ID: {props.projectId}</Typography>
          <Typography> Project Status: {props.projectStatus}</Typography>
          <Typography> Project Address: {props.projectAddress}</Typography>
          <Typography> Project Second Address: {props.projectSecondAddress}</Typography>
          <Typography> Project Postal: {props.projectPostal}</Typography>
          <Typography> Project City: {props.projectCity}</Typography>
          <Typography> Project Province: {props.projectProvince}</Typography>

          <br></br>

          <Typography>Site Supervisor</Typography>
          <Typography> Super Name: {props.projectSuper}</Typography>
          <Typography> Super Number: {props.projectSuperNum}</Typography>
          
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Invoice</Typography>

          <ReceiptIcon sx={{ width: '80%',fontSize:"60px"}}></ReceiptIcon>
          
        </AccordionSummary>
        <AccordionDetails>
        <Typography> Invoice ID: {props.projectInvoice} </Typography>
        <Typography> Item Depth: {props.projectDepth} {props.projectUnit}</Typography>
        <Typography> Item Width: {props.projectWidth} {props.projectUnit}</Typography>
        <Typography> Item Length: {props.projectLength} {props.projectUnit}</Typography>
        <Typography> Item Area: {props.projectArea}</Typography>
        <Typography> Edge Profile: {props.projectEdge}</Typography>
        <Typography> Edge Measurement: {props.projectEdgeMeasure}</Typography>
        <Typography> Edge Profile Type: {props.projectEdgeType}</Typography>
        <Typography> Item Price: ${props.projectPrice}</Typography>
        <br></br>
        <Typography> Project Total: ${props.projectTotal}</Typography>

        <Button variant="contained" onClick={handleClick}>Add Invoice</Button>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Documentation
          </Typography>
          

          <ArticleIcon sx={{ width: '80%',fontSize:"60px"}}></ArticleIcon>

        </AccordionSummary>
        <AccordionDetails>
        <DocumentUpload projectId={props.projectId} />
          
          
          <Typography>
            As of right now there is no documentation, I will wait to be told that I am right or be told that I am a idiot and if I use my eyes I would have seen it, in which case I will go home and cry about it some.... We shall see what happens.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
    </CardWithRadius>

    
    

    
  );
};

export default InvoiceProject;
