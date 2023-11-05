import React from "react";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

function Home() {
  return (
    <>
      <Paper sx={{ borderRadius: 0, margin: "20px", boxShadow: 0 }}>
        <Box>
          <Grid container rowSpacing={0} columnSpacing={2}>
            <Grid item xs={4} sx={{ marginBottom: "16px" }}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      500000
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      sale product
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={4} sx={{ marginBottom: "16px" }}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      500000
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      sale product
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={4} sx={{ marginBottom: "16px" }}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      500000
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      sale product
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
}

export default Home;
