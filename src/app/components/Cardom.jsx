import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Cardom = () => {
  return (
    <Card className='text-left ' sx={{ maxWidth: 345, backgroundColor: "black", border:"2px solid purple" }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/homw.jpg"
        title="green iguana"
      />
      <CardContent className='text-white font-bold'>
        <Typography gutterBottom variant="h5" component="div">
          Udemy React course
        </Typography>
        <Typography variant="body2" color="white">
          Learned React,NodeJs, Express & MongoDB- The MERN Fullstack from udemy and earned a certificate.
        </Typography>
      </CardContent>
      <CardActions>
       
        <Button href='https://www.udemy.com/certificate/UC-51306103-52e3-479f-ae16-481e9abc795b/' size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
export default Cardom