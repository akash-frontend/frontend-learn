import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "@mui/material";
import { Grid } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Rating } from "@mui/material";


export default function Home() {
    const [products, setProducts] = useState([]);

    async function fetchAllProducts(){
        const response = await fetch("https://fakestoreapi.com/products")
        const result = await response.json()
        setProducts(result)
    }

    useEffect(() => {
      fetchAllProducts()
    }, [])
    

    return (
        <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4}>
          {products.map(({ title, id, price, description, rating, image }) => (
            <Grid item key={id} xs={12} sm={6} md={3}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardMedia
                  component="img"
                  image={image}
                  alt={title}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                  >
                    {title}
                  </Typography>
                  <Typography>
                    {description}
                  </Typography>
                  <Typography>{price}</Typography>
                  <Rating readOnly precision={0.5} value={rating.rate} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>        
    )

}