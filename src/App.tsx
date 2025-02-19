import {useState} from 'react';
import {famousPeopleList} from './data.tsx';
import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import {Typography, Button, Card, CardContent} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  
  const hasNext = index < famousPeopleList.length - 1;
  const hasPrevious = index > 0;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleBackClick() {
    if (hasPrevious) {
      setIndex(index - 1);
    } else {
      setIndex(famousPeopleList.length - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <Container maxWidth="sm">
      <Box component="section" sx={{p: 4, border: "2px solid grey", backgroundColor: "aqua"}}>
        <Typography variant = "h2" component = "h2" sx={{fontWeight: 'bold'}}>
          FAMOUS PEOPLE
        </Typography>

        <Typography variant = "h5" component = "h5" sx={{mb: 5}}>
          Aaron Joaquin Basilio - C-PEITEL3
        </Typography>

        <Typography variant="h4" component="h4" sx={{textAlign: "center"}}>
          {famousPeopleList[index].name}
        </Typography>

        <Typography variant="body1" sx={{textAlign: "center", mb: 2}}>
          ({index + 1} of {famousPeopleList.length})
        </Typography>

        <Stack direction="row" spacing={2} sx={{mb: 2, justifyContent: "center"}}>
          <Button onClick={handleBackClick} variant="outlined" startIcon={<ArrowBackIosNewIcon/>} disabled={!hasPrevious} sx={{color: "black", backgroundColor: "yellow"}}>
            Back
          </Button>
          <Button onClick={handleNextClick} variant="outlined" endIcon={<ArrowForwardIosIcon/>} disabled={!hasNext} sx={{color: "black", backgroundColor: "yellow"}}>
            Next
          </Button>
        </Stack>

        <Card sx={{mb: 2, ml: 3, mr: 3, backgroundColor: "aqua"}}>
          <CardContent>
            <img src={famousPeopleList[index].url} alt={famousPeopleList[index].alt} style={{width: "400px", height: "auto",}}/>
          </CardContent>
        </Card>

        <Stack direction="row" spacing={2} sx={{ justifyContent: "flex-end"}}>
          <Button onClick={handleMoreClick} variant="contained" sx={{mt: 1, color: "black", border: "2px solid black", backgroundColor: "white"}}>
            {showMore ? <ExpandLessRoundedIcon/> : <ExpandMoreRoundedIcon/>}
          </Button>
        </Stack>

        {showMore && <Typography variant="body1" sx={{mt: 1, textAlign: "justify"}}>{famousPeopleList[index].description}</Typography>}
      </Box>
    </Container>
  );
}