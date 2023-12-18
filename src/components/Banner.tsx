import { Box, Button, Chip, Container, Grid, Link, Stack, Typography } from '@mui/material';
import MoneyTransfer from "./MoneyTrasfer.tsx";
import { useTheme } from '@mui/material/styles';

const Banner = () => {
  const theme = useTheme();

  return (
    <Container>
    <Grid className="banner"
          sx={{
            display: { md: 'flex'},
            justifyContent: { md: 'space-between'},
            marginTop: { xs: 0, sm: 10 },
            padding: 1}} spacing={ 2 }>
        <Grid sx={{ display: { xs: 'none', sm: 'block', md: 'block' }, padding: { sx: "40px" } }} item xs={ 12 } sm={ 6 }>
          <Box>
            <MoneyTransfer/>
          </Box>
        </Grid>
        <Grid sx={{ padding: { sx: "40px" }, paddingLeft: { md: "40px" } }} item xs={ 12 } md={ 6 }>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Typography className="text2">Envio de</Typography>
            <Typography className="text3">Remesas a Cuba</Typography>
          </Box>
          <Box mt="24px" sx={{ display: { xs: 'table-caption', md: 'flex' } }}>
            <Stack direction="row" marginY="8px" spacing={1} sx={{ flexWrap: 'wrap' }}>
              <Chip className="chips" label="MLC 1/1" sx={{ backgroundColor: '#0EA7DA', color: 'white', maxWidth: '100%' }} />
              <Chip className="chips" label="Usdt trc20 5 %" sx={{ backgroundColor: '#0EA7DA', color: 'white', maxWidth: '100%' }} />
              <Chip className="chips" label="Combos de comida" sx={{ backgroundColor: '#0EA7DA',color: 'white', marginLeft: { xs: '0 !important', md: '8px !important'  }, marginTop: { xs: '8px !important', md: '0 !important' } }} />
              <Chip className="chips" label="Recargas locales mayorista" sx={{ backgroundColor: '#0EA7DA', color: 'white', marginLeft: { xs: '0 !important', md: '0 !important'  }, marginTop: { xs: '8px !important', md: '8px !important' } }} />
              <Chip className="chips" label="Recarga international 19 usd" sx={{ backgroundColor: '#0EA7DA', color: 'white', marginLeft: { xs: '0 !important', md: '8px !important'  }, marginTop: { xs: '8px !important', md: '8px !important' } }} />
            </Stack>
          </Box>
          <Box mt="24px" sx={{textAlign: { xs: 'right', md: 'left', sm: 'left' }}}>
            <Typography className="text4">Aplicación Web #1 para el envío de remesas a Cuba en MLC</Typography>
          </Box>
          <Box mt="34px" sx={{ display: { xs: 'block', sm: 'none' } }}>
            <MoneyTransfer/>
          </Box>
          <Box sx={{
            marginTop: { xs: 1,  md: theme.spacing(3) },
            textAlign: { xs: 'right', md: 'left', sm: 'left' },
            marginBottom: { xs: 2, md: theme.spacing(2) }
          }}>
            <Typography className="text5">Contáctenos vía Whatsapp para habilitar su cuenta de cliente</Typography>
          </Box>
          <Box sx={{textAlign: { xs: 'center', md: 'left', sm: 'left' }}}>
            <Link href="https://wa.me/+13057201782" target="_blank" rel="noopener noreferrer">
            <Button variant="contained" className="btn btn1 btn-text">
              Estoy Interesado
            </Button>
            </Link>
          </Box>
        </Grid>
    </Grid>
    </Container>

  );
}
export default Banner;