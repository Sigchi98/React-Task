import { Box, Card, CardContent, Typography, Button } from "@mui/material"

export const MuiCard = () => {
    return(
        <><Box width='650px' ><Box width='300px' margin='10px'>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        Mean
                    </Typography>
                </CardContent>
            </Card>
        </Box>
        <Box width='300px' margin='10px'>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        Median
                    </Typography>
                </CardContent>
            </Card>
        </Box>
        <Box width='300px' margin='10px'>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        Standard Deviation
                    </Typography>
                </CardContent>
            </Card>
        </Box>
        <Box width='300px' margin='10px'>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        Mode
                    </Typography>
                </CardContent>
            </Card>
        </Box>
        <Typography>
            <Button> Reload </Button>
        </Typography>
        <Typography>
            <input type='text'/>
            <Button>Submit</Button>
        </Typography>
        </Box>
        </>
    )
}