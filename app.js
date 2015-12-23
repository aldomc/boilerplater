import app from './app/config/express';
import websiteRoutes from './app/routes/website';


app.use(websiteRoutes);

app.listen(3000);
